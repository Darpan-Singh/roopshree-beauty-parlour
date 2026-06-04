import Link from 'next/link';
import { BUSINESS } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(160deg, #2D0A1A 0%, #1A0510 100%)' }}>
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #C9507B, #C9A84C, #C9507B, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #C9507B 0%, #C9A84C 100%)', boxShadow: '0 6px 20px -4px rgba(201,80,123,0.4)' }}
              >
                R
              </div>
              <div>
                <p className="font-heading font-bold text-xl text-white">RoopShree</p>
                <p className="text-xs" style={{ color: 'rgba(244,168,195,0.8)' }}>Beauty Parlour – Only for Ladies</p>
              </div>
            </Link>

            <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Founded &amp; managed by <span style={{ color: 'rgba(244,168,195,0.85)' }}>{BUSINESS.owner}</span>
            </p>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Kota's most trusted ladies beauty parlour. Professional hair, skin, makeup &amp; nail services since 2016.
            </p>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #EA4335, #C5221F)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-5" style={{ color: 'rgba(244,168,195,0.9)' }}>Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services & Prices' },
                { href: '/book', label: 'Book Appointment' },
                { href: '/offers', label: 'Special Offers' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link text-sm flex items-center gap-2 group w-fit">
                    <span className="w-1 h-1 rounded-full bg-rose-primary inline-block opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-5" style={{ color: 'rgba(244,168,195,0.9)' }}>Visit Us</h3>
            <ul className="space-y-4 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <li className="flex gap-3">
                <span className="mt-0.5 flex-shrink-0">📍</span>
                <span className="leading-relaxed">{BUSINESS.address}</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">📞</span>
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-white transition-colors">{BUSINESS.phone}</a>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">🕐</span>
                <div>
                  <p>Mon–Sat: {BUSINESS.hours.weekdays}</p>
                  <p>Sunday: {BUSINESS.hours.sunday}</p>
                </div>
              </li>
            </ul>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-white hover:-translate-y-0.5 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #C9507B, #9B2559)', boxShadow: '0 4px 16px -2px rgba(201,80,123,0.35)' }}
            >
              📍 Get Directions
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
             style={{ borderTop: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.3)' }}>
          <p>© 2026 RoopShree Beauty Parlour. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span style={{ color: '#FFB800' }}>⭐ {BUSINESS.rating}/5</span>
            <span>• {BUSINESS.totalReviews} Google Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
