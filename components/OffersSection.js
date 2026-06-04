import Link from 'next/link';
import { OFFERS } from '@/lib/data';

export default function OffersSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2D0A1A 0%, #5C1A3A 50%, #2D0A1A 100%)' }}>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15"
           style={{ background: 'radial-gradient(circle, #C9507B, transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
           style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />

      {/* Dashed ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-[600px] h-[600px] rounded-full border border-gold-primary animate-spin-slow" style={{ borderStyle: 'dashed' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 text-white"
                style={{ background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.3)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-primary inline-block" />
            Limited Time Offers
            <span className="w-1.5 h-1.5 rounded-full bg-gold-primary inline-block" />
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-3">
            Special{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C9A84C, #EDD98A, #C9A84C)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientFlow 4s linear infinite',
            }}>
              Offers
            </span>
          </h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Don't miss these exclusive deals — grab before they expire!
          </p>
        </div>

        {/* Offer cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="glass-card relative flex flex-col overflow-hidden group"
            >
              {/* Top accent bar */}
              <div className="h-1" style={{ background: 'linear-gradient(90deg, #C9507B, #C9A84C)' }} />

              {/* Ribbon */}
              <div
                className="absolute top-5 right-0 text-white text-sm font-bold px-4 py-1.5 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #9A7A1E)',
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 8px 50%)',
                }}
              >
                {offer.discount}
              </div>

              <div className="p-6 flex-1">
                {/* Badge */}
                <span className="offer-badge inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {offer.badge}
                </span>

                <h3 className="font-heading font-bold text-xl text-white mb-2 pr-20">{offer.title}</h3>
                <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>{offer.description}</p>

                {/* Pricing */}
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="line-through text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>{offer.originalPrice}</span>
                  <span className="font-heading font-bold text-3xl" style={{
                    background: 'linear-gradient(135deg, #C9A84C, #EDD98A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {offer.offerPrice}
                  </span>
                </div>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{offer.validity}</p>
                <p className="text-xs font-mono" style={{ color: 'rgba(201,168,76,0.8)' }}>Code: <strong>{offer.code}</strong></p>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <Link
                  href="/book"
                  className="w-full block text-center text-sm font-semibold py-3 rounded-xl transition-all duration-300 text-white hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #9A7A1E)', boxShadow: '0 6px 20px -4px rgba(201,168,76,0.4)' }}
                >
                  Claim This Offer →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: 'rgba(255,255,255,0.3)' }}>
          * Offers valid on prior booking. Cannot be combined with other discounts.
        </p>
      </div>
    </section>
  );
}
