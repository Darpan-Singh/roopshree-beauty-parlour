import { BUSINESS } from '@/lib/data';

const TRUST_ITEMS = [
  { value: BUSINESS.rating + '/5', label: 'Google Rating', icon: '⭐', sub: `${BUSINESS.totalReviews} verified reviews` },
  { value: BUSINESS.totalClients, label: 'Happy Clients', icon: '💝', sub: 'Since 2016' },
  { value: BUSINESS.yearsExp, label: 'Years of Experience', icon: '🏆', sub: 'Trusted in Kota' },
  { value: '100%', label: 'Hygienic & Safe', icon: '🧴', sub: 'Sterilized tools always' },
];

export default function TrustSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title">Kota's <span className="gradient-text">Most Trusted</span> Parlour</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-cream border border-rose-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-heading font-bold text-3xl text-parlour-dark">{item.value}</div>
              <div className="font-semibold text-rose-primary text-sm mt-1">{item.label}</div>
              <div className="text-gray-400 text-xs mt-1">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Hygiene/USP badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            '✅ Trained & Certified Beauticians',
            '✅ Premium Quality Products',
            '✅ 100% Hygienic Tools',
            '✅ Ladies Only Salon',
            '✅ Comfortable & AC Environment',
            '✅ Easy WhatsApp Booking',
          ].map((badge) => (
            <span
              key={badge}
              className="bg-rose-50 border border-rose-100 text-parlour-dark text-sm px-4 py-2 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
