import Link from 'next/link';
import { BUSINESS } from '@/lib/data';

export default function BookingCTA() {
  const waMsg = encodeURIComponent('Hi RoopShree! I would like to book an appointment.');

  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #9B2559 0%, #C9507B 50%, #C9A84C 100%)' }}>

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 leading-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-12 md:h-16 block">
          <path d="M0,32 C360,56 1080,0 1440,32 L1440,0 L0,0 Z" fill="#FFFAF9" />
        </svg>
      </div>

      {/* Background glow circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, #2D0A1A, transparent)' }} />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, #2D0A1A, transparent)' }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
             backgroundSize: '40px 40px',
           }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-20 text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold text-white/80 border border-white/25"
             style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
          Limited Slots Available Today
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
        </div>

        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 leading-tight italic">
          Ready to Look<br />
          <span style={{
            background: 'linear-gradient(135deg, #FFE066, #EDD98A, #FFE066)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientFlow 3s linear infinite',
          }}>
            Your Best?
          </span>
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Book your appointment today and let our experts take care of the rest.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 font-bold text-lg px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'white', color: '#9B2559', boxShadow: '0 12px 36px -4px rgba(0,0,0,0.2)' }}
          >
            📅 Book Appointment Now
          </Link>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold text-lg px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 text-white"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 12px 36px -4px rgba(37,211,102,0.4)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />Respond in &lt;10 min</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />Kota, Rajasthan</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />Ladies Only Salon</span>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 leading-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 md:h-14 block">
          <path d="M0,24 C480,56 960,0 1440,24 L1440,56 L0,56 Z" fill="#2D0A1A" />
        </svg>
      </div>
    </section>
  );
}
