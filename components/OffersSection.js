import Link from 'next/link';
import { OFFERS } from '@/lib/data';

export default function OffersSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-parlour-dark via-parlour-mid to-parlour-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rose-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold-primary font-semibold text-sm uppercase tracking-widest mb-2">Limited Time</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Special <span className="text-gold-primary">Offers</span>
          </h2>
          <p className="text-white/60 mt-2">Don't miss these exclusive deals — grab before they expire!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-gold-primary transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              <span className="offer-badge inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                {offer.badge}
              </span>

              {/* Discount tag */}
              <div className="absolute top-4 right-4 bg-gold-primary text-white font-bold text-lg px-3 py-1 rounded-lg rotate-2">
                {offer.discount}
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-2">{offer.title}</h3>
              <p className="text-white/60 text-sm mb-4">{offer.description}</p>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-white/40 line-through text-sm">{offer.originalPrice}</span>
                <span className="text-gold-primary font-bold text-2xl font-heading">{offer.offerPrice}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-xs">{offer.validity}</p>
                  <p className="text-gold-light text-xs font-mono mt-0.5">Code: {offer.code}</p>
                </div>
                <Link
                  href="/book"
                  className="bg-gold-primary hover:bg-gold-dark text-white text-sm px-4 py-2 rounded-full transition-colors font-semibold"
                >
                  Claim →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-xs mt-6">
          * Offers valid on prior booking. Cannot be combined with other discounts.
        </p>
      </div>
    </section>
  );
}
