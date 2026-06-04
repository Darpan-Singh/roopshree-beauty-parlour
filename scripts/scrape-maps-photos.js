const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const MAPS_URL =
  'https://www.google.com/maps/place/RoopShree+Beauty+Parlour(only+for+ladies),+591+Khatupati+complex,+Basant+Vihar+Rd,+opposite+Mahima+fancy+store,+Kota,+Rajasthan+324009/data=!4m2!3m1!1s0x396f854ef5351df5:0x5a6ebe9cfed38368!18m1!1e1';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function scrapePhotos() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled',
      '--lang=en-US,en',
    ],
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  );
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });

  const collectedImages = new Set();

  // Intercept all image requests
  page.on('response', async (response) => {
    const url = response.url();
    if (
      (url.includes('lh5.googleusercontent.com') ||
        url.includes('lh3.googleusercontent.com') ||
        url.includes('lh6.googleusercontent.com')) &&
      !url.includes('=s') &&
      !url.includes('favicon')
    ) {
      collectedImages.add(url);
    }
  });

  console.log('Navigating to Google Maps...');
  await page.goto(MAPS_URL, { waitUntil: 'networkidle2', timeout: 60000 });

  // Accept cookies if prompted
  try {
    const acceptBtn = await page.$('button[aria-label*="Accept"]');
    if (acceptBtn) {
      await acceptBtn.click();
      await new Promise(r => setTimeout(r, 1000));
    }
  } catch {}

  // Wait for main content
  await new Promise(r => setTimeout(r, 3000));

  // Try clicking the Photos tab/button
  try {
    const photoSelectors = [
      'button[aria-label*="Photo"]',
      'button[aria-label*="photo"]',
      '[data-tab-index="2"]',
      'button.DkEaL',
    ];
    for (const sel of photoSelectors) {
      const btn = await page.$(sel);
      if (btn) {
        console.log(`Clicking photos button: ${sel}`);
        await btn.click();
        await new Promise(r => setTimeout(r, 3000));
        break;
      }
    }
  } catch (e) {
    console.log('Could not find photo tab:', e.message);
  }

  // Scroll to load more photos
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => window.scrollBy(0, 600));
    await new Promise(r => setTimeout(r, 1000));
  }

  // Also grab all img src attributes from the page
  const imgSrcs = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('img')];
    return imgs
      .map(img => img.src || img.getAttribute('src') || '')
      .filter(src =>
        src.includes('googleusercontent') ||
        src.includes('ggpht')
      );
  });

  imgSrcs.forEach(src => collectedImages.add(src));

  // Also look for background-image URLs in style attributes
  const bgImages = await page.evaluate(() => {
    const allEls = [...document.querySelectorAll('[style*="googleusercontent"], [style*="ggpht"]')];
    return allEls.map(el => {
      const m = el.style.backgroundImage.match(/url\("([^"]+)"\)/);
      return m ? m[1] : null;
    }).filter(Boolean);
  });
  bgImages.forEach(src => collectedImages.add(src));

  // Grab page screenshot for reference
  const screenshotPath = path.join(__dirname, '..', 'public', 'maps-screenshot.png');
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log('Screenshot saved to:', screenshotPath);

  // Get page title and any visible text for context
  const title = await page.title();
  console.log('Page title:', title);

  // Get business info visible on page
  const businessInfo = await page.evaluate(() => {
    const getText = sel => {
      const el = document.querySelector(sel);
      return el ? el.textContent.trim() : null;
    };
    return {
      name: getText('h1') || getText('[data-attrid="title"]'),
      rating: getText('span.ceNzKf') || getText('[aria-label*="stars"]'),
      reviewCount: getText('span[aria-label*="reviews"]'),
      address: getText('button[data-item-id="address"] .fontBodyMedium'),
    };
  });
  console.log('Business info:', JSON.stringify(businessInfo, null, 2));

  await browser.close();

  const photos = [...collectedImages].filter(url => url.length > 20);
  console.log(`\nTotal photos found: ${photos.length}`);
  photos.forEach((url, i) => console.log(`[${i + 1}] ${url}`));

  // Save results
  const result = { photos, businessInfo, scrapedAt: new Date().toISOString() };
  fs.writeFileSync(
    path.join(__dirname, '..', 'scripts', 'maps-data.json'),
    JSON.stringify(result, null, 2)
  );
  console.log('\nSaved to scripts/maps-data.json');
}

scrapePhotos().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
