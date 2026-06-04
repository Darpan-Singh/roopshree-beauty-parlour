import Link from 'next/link';
import { FEATURED_SERVICES } from '@/lib/data';

const CARD_ACCENTS = [
  'linear-gradient(90deg, #C9507B, #C9A84C)',
  'linear-gradient(90deg, #C9A84C, #EDD98A)',
  'linear-gradient(90deg, #9B2559, #C9507B)',
  'linear-gradient(90deg, #5C1A3A, #9B2559)',
];

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-5 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #C9507B, transparent)' }} />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-5 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Our <span className="gradient-text">Popular Services</span></h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            From everyday grooming to dream bridal looks — we do it all, right here in Kota.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_SERVICES.map((service, i) => (
            <div key={service.name} className="card group flex flex-col">
              <div className="h-1.5 w-full" style={{ background: CARD_ACCENTS[i % CARD_ACCENTS.length] }} />
              <div className="p-6 flex-1">
                <span
                  className="text-[11px] text-white px-2.5 py-0.5 rounded-full font-semibold inline-block mb-4"
                  style={{ background: 'linear-gradient(135deg, #C9507B, #9B2559)' }}
                >
                  {service.tag}
                </span>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #FFF0F6, #FFD6E8)' }}
                >
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-parlour-dark mb-1.5">{service.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
              <div className="px-6 py-4 border-t border-rose-50 flex items-center justify-between bg-gradient-to-r from-rose-50/40 to-cream">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">From</span>
                  <p className="text-2xl font-bold font-heading gradient-text">{service.price}</p>
                </div>
                <Link
                  href="/book"
                  className="text-sm text-white px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #C9507B, #9B2559)', boxShadow: '0 4px 14px -2px rgba(201,80,123,0.4)' }}
                >
                  Book →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline-rose">
            View All Services &amp; Prices →
          </Link>
        </div>
      </div>
    </section>
  );
}
