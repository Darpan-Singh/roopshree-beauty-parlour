import Link from 'next/link';
import { OFFERS } from '@/lib/data';

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-parlour-dark to-parlour-mid py-12 text-center mb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-9xl flex items-center justify-center">🎁</div>
        <p className="relative text-gold-primary text-sm uppercase tracking-widest mb-2">Limited Time</p>
        <h1 className="relative font-heading text-4xl md:text-5xl font-bold text-white mb-3">
          Special <span className="text-gold-primary">Offers</span>
        </h1>
        <p className="relative text-white/60">Exclusive deals crafted just for you. Hurry — limited slots!</p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="card overflow-visible relative"
            >
              {/* Discount ribbon */}
              <div className="absolute -top-3 -right-3 bg-rose-primary text-white font-bold text-lg px-4 py-2 rounded-2xl rotate-3 shadow-lg">
                {offer.discount}
              </div>

              <div className="p-6">
                <span className="offer-badge inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {offer.badge}
                </span>

                <h3 className="font-heading font-bold text-2xl text-parlour-dark mb-2">{offer.title}</h3>
                <p className="text-gray-500 text-sm mb-5">{offer.description}</p>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-gray-300 line-through text-base">{offer.originalPrice}</span>
                  <span className="text-rose-primary font-bold text-3xl font-heading">{offer.offerPrice}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-rose-50">
                  <div>
                    <p className="text-gray-400 text-xs">{offer.validity}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-500 text-xs">Use code:</span>
                      <span className="bg-rose-50 border border-rose-100 text-rose-primary font-mono font-bold text-sm px-3 py-1 rounded-lg">
                        {offer.code}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/book?offer=${offer.code}`}
                    className="btn-primary text-sm py-2.5"
                  >
                    Claim Offer →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Section */}
        <div className="bg-gradient-to-r from-parlour-dark to-parlour-mid rounded-2xl p-8 text-white text-center mb-8">
          <span className="text-gold-primary font-semibold text-sm uppercase tracking-widest">Most Loved</span>
          <h2 className="font-heading font-bold text-3xl mt-2 mb-4">
            Monthly <span className="text-gold-primary">Membership</span>
          </h2>
          <p className="text-white/70 max-w-lg mx-auto mb-6">
            Join our exclusive membership and enjoy premium beauty services every month at discounted prices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { plan: 'Silver', price: '₹999', services: 'Haircut + Cleanup + Threading', color: 'bg-gray-500' },
              { plan: 'Gold', price: '₹1,999', services: 'All Silver + Facial + Manicure', color: 'bg-gold-primary', popular: true },
              { plan: 'Platinum', price: '₹3,999', services: 'Unlimited Cleanups + Hair Spa + Waxing', color: 'bg-rose-primary' },
            ].map((tier) => (
              <div
                key={tier.plan}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 border ${tier.popular ? 'border-gold-primary' : 'border-white/20'} relative`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <div className={`w-10 h-10 ${tier.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold`}>
                  {tier.plan[0]}
                </div>
                <h3 className="font-heading font-bold text-xl">{tier.plan}</h3>
                <p className="text-2xl font-bold text-gold-light mt-1">{tier.price}<span className="text-sm text-white/50">/mo</span></p>
                <p className="text-white/60 text-xs mt-2">{tier.services}</p>
              </div>
            ))}
          </div>
          <Link href="/book" className="bg-gold-primary hover:bg-gold-dark text-white font-bold px-8 py-3 rounded-full transition-colors inline-block">
            Join Membership →
          </Link>
        </div>

        <p className="text-center text-gray-400 text-sm">
          * All offers subject to availability. Valid on prior booking only.
        </p>
      </div>
    </div>
  );
}
