'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BUSINESS } from '@/lib/data';

const URGENCY_MESSAGES = [
  '⚡ Only 3 slots left today!',
  '🔥 12 ladies booked this week',
  '⭐ Rated 4.8/5 by 127 customers',
  '💍 Bridal season bookings open!',
];

export default function HeroSection() {
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIdx((i) => (i + 1) % URGENCY_MESSAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const waMsg = encodeURIComponent('Hi! I want to book an appointment at RoopShree Beauty Parlour.');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=60')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose-primary/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16 text-center">
        {/* Urgency ticker */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6 transition-all duration-500">
          {URGENCY_MESSAGES[msgIdx]}
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Look &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-gold-primary">
            Feel Beautiful
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-rose-light font-light mb-2">
          Professional Beauty Services in Kota
        </p>
        <p className="text-white/70 text-sm mb-8">
          {BUSINESS.address}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { value: '4.8⭐', label: 'Google Rating' },
            { value: BUSINESS.totalClients, label: 'Happy Clients' },
            { value: BUSINESS.yearsExp, label: 'Years of Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white font-heading">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book" className="btn-gold text-lg px-8 py-4 text-center">
            📅 Book Appointment
          </Link>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book on WhatsApp
          </a>
          <Link href="/services" className="btn-outline text-lg px-8 py-4 text-center">
            View Services
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center text-white/50 text-sm">
          <span>Scroll to explore</span>
          <div className="mt-2 w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
