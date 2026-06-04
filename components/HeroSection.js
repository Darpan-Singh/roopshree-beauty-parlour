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

const FLOAT_PILLS = [
  { text: 'Bridal Makeup', icon: '👰', delay: '0s',   side: 'left-6 top-1/3' },
  { text: 'Hair Spa',      icon: '💆‍♀️', delay: '1.5s', side: 'right-6 top-1/3' },
  { text: 'Gold Facial',   icon: '✨', delay: '0.8s', side: 'left-10 bottom-1/3' },
  { text: 'Nail Art',      icon: '💅', delay: '2s',   side: 'right-10 bottom-1/3' },
];

export default function HeroSection() {
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setMsgIdx((i) => (i + 1) % URGENCY_MESSAGES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const waMsg = encodeURIComponent('Hi! I want to book an appointment at RoopShree Beauty Parlour.');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Deep gradient base */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(150deg, #2D0A1A 0%, #5C1A3A 40%, #9B2559 72%, #C9A84C 100%)' }} />

      {/* Photo overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138daaa1463b?w=1600&q=60')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Radial glow spots */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-25"
           style={{ background: 'radial-gradient(circle, #C9507B, transparent)' }} />

      {/* Slow-rotating ring decoration */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.06 }}
      >
        <div
          className="w-[700px] h-[700px] rounded-full border-2 border-gold-primary animate-spin-slow"
          style={{ borderStyle: 'dashed' }}
        />
      </div>

      {/* Floating service pills — hidden on small screens */}
      {FLOAT_PILLS.map((pill) => (
        <div
          key={pill.text}
          className={`absolute hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white ${pill.side}`}
          style={{
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
            animation: `float 4s ease-in-out ${pill.delay} infinite`,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          <span>{pill.icon}</span>
          <span>{pill.text}</span>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-20 text-center">

        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold text-white/90 border border-white/20"
             style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-primary inline-block" />
          Only for Ladies • Est. 2016 • Kota, Rajasthan
          <span className="w-1.5 h-1.5 rounded-full bg-gold-primary inline-block" />
        </div>

        {/* Urgency ticker */}
        <div
          className="inline-flex items-center gap-2 text-white/80 text-sm px-5 py-2 rounded-full mb-8 border border-white/15"
          style={{ background: 'rgba(201,80,123,0.2)', backdropFilter: 'blur(8px)' }}
        >
          <span key={msgIdx} className="animate-fade-in-up">{URGENCY_MESSAGES[msgIdx]}</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-[1.08] mb-5 tracking-tight">
          Look &amp;{' '}
          <span className="gradient-text italic">Feel Beautiful</span>
        </h1>

        <p className="text-xl md:text-2xl font-light mb-2" style={{ color: 'rgba(244,168,195,0.9)' }}>
          Professional Beauty Services in Kota
        </p>
        <p className="text-sm mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {BUSINESS.address}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { value: '4.8⭐', label: 'Google Rating' },
            { value: BUSINESS.totalClients, label: 'Happy Clients' },
            { value: BUSINESS.yearsExp, label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-3xl text-white">{stat.value}</div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book" className="btn-gold text-lg px-9 py-4 text-center">
            📅 Book Appointment
          </Link>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 text-white text-lg px-9 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 8px 24px -4px rgba(37,211,102,0.45)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book on WhatsApp
          </a>
          <Link
            href="/services"
            className="inline-flex items-center justify-center text-lg px-9 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hero-outline-btn"
          >
            View Services
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-10 animate-float" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
