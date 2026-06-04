import { BUSINESS } from '@/lib/data';

const TRUST_ITEMS = [
  { value: BUSINESS.rating + '/5', label: 'Google Rating',    icon: '⭐', sub: `${BUSINESS.totalReviews} verified reviews`, color: '#C9A84C', shadow: 'rgba(201,168,76,0.25)' },
  { value: BUSINESS.totalClients,  label: 'Happy Clients',    icon: '💝', sub: 'Since 2016',              color: '#C9507B', shadow: 'rgba(201,80,123,0.25)' },
  { value: BUSINESS.yearsExp,      label: 'Years Experience', icon: '🏆', sub: 'Trusted in Kota',        color: '#9B2559', shadow: 'rgba(155,37,89,0.25)' },
  { value: '100%',                 label: 'Hygienic & Safe',  icon: '🧴', sub: 'Sterilized tools always', color: '#5C1A3A', shadow: 'rgba(92,26,58,0.25)' },
];

const BADGES = [
  'Trained & Certified Beauticians',
  'Premium Quality Products',
  '100% Hygienic Tools',
  'Ladies Only Salon',
  'Comfortable & AC Environment',
  'Easy WhatsApp Booking',
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C9507B 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">Kota's <span className="gradient-text">Most Trusted</span> Parlour</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="trust-card relative text-center p-6 rounded-2xl bg-white overflow-hidden group"
              style={{ boxShadow: '0 4px 24px -4px rgba(201,80,123,0.1)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                   style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}99)` }} />
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <div className="font-heading font-bold text-3xl mb-1" style={{ color: item.color }}>{item.value}</div>
              <div className="font-semibold text-parlour-dark text-sm">{item.label}</div>
              <div className="text-gray-400 text-xs mt-1">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:-translate-y-0.5 transition-transform duration-200"
              style={{
                background: 'linear-gradient(135deg, #FFF0F6, #FFD6E8)',
                color: '#9B2559',
                border: '1px solid rgba(201,80,123,0.15)',
                boxShadow: '0 2px 8px rgba(201,80,123,0.08)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-primary inline-block" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
