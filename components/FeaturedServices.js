import Link from 'next/link';
import { FEATURED_SERVICES } from '@/lib/data';

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-subtitle">What We Offer</p>
          <h2 className="section-title">Our <span className="gradient-text">Popular Services</span></h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            From everyday grooming to dream bridal looks — we do it all, right here in Kota.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_SERVICES.map((service) => (
            <div key={service.name} className="card group p-0">
              <div className="bg-gradient-to-br from-rose-50 to-cream p-6 pb-4 relative">
                <span className="absolute top-3 right-3 text-[11px] bg-rose-primary text-white px-2 py-0.5 rounded-full font-semibold">
                  {service.tag}
                </span>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-heading font-bold text-xl text-parlour-dark">{service.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{service.desc}</p>
              </div>
              <div className="px-6 py-4 flex items-center justify-between border-t border-rose-50">
                <div>
                  <span className="text-xs text-gray-400">Starting from</span>
                  <p className="text-2xl font-bold text-rose-primary font-heading">{service.price}</p>
                </div>
                <Link
                  href="/book"
                  className="text-sm bg-rose-primary text-white px-4 py-2 rounded-full hover:bg-rose-dark transition-colors"
                >
                  Book →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/services" className="btn-outline border-rose-primary text-rose-primary hover:bg-rose-primary hover:text-white">
            View All Services & Prices →
          </Link>
        </div>
      </div>
    </section>
  );
}
