import './globals.css';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'RoopShree Beauty Parlour – Ladies Salon in Kota, Rajasthan',
  description: 'Professional beauty services in Kota – Bridal Makeup, Hair, Facials, Nails & more. Book your appointment today! Only for Ladies.',
  keywords: 'beauty parlour kota, ladies salon kota, bridal makeup kota, hair spa kota, facial kota, RoopShree',
  openGraph: {
    title: 'RoopShree Beauty Parlour – Ladies Salon in Kota',
    description: 'Professional beauty services – Bridal Makeup, Hair, Facials & more.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
