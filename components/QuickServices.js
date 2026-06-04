import Link from 'next/link';
import { QUICK_SERVICES } from '@/lib/data';

const COLORS = [
  { from: '#C9507B', to: '#9B2559' },
  { from: '#C9A84C', to: '#9A7A1E' },
  { from: '#9B2559', to: '#5C1A3A' },
  { from: '#5C6BC0', to: '#3949AB' },
];

export default function QuickServices() {
  return (
    <section className="py-14 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-1"
           style={{ background: 'linear-gradient(90deg, #C9507B, #C9A84C, #C9507B)' }} />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {QUICK_SERVICES.map((service, i) => {
            const c = COLORS[i];
            return (
              <Link
                key={service.label}
                href={service.href}
                className="group flex flex-col items-center p-6 rounded-2xl service-card-hover border border-transparent hover:border-rose-100 bg-gradient-to-br from-rose-50/60 to-cream"
                style={{ boxShadow: '0 2px 16px rgba(201,80,123,0.06)' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, boxShadow: `0 6px 20px -4px ${c.from}55` }}
                >
                  {service.icon}
                </div>
                <span className="font-heading font-bold text-parlour-dark text-lg group-hover:text-rose-primary transition-colors">
                  {service.label}
                </span>
                <span className="text-sm text-gray-400 mt-1 text-center">{service.desc}</span>
                <span
                  className="mt-3 text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                  style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}
                >
                  Explore →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
