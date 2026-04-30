import Link from 'next/link';
import { QUICK_SERVICES } from '@/lib/data';

export default function QuickServices() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {QUICK_SERVICES.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-cream border border-rose-100 hover:border-rose-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </span>
              <span className="font-heading font-bold text-parlour-dark text-lg">{service.label}</span>
              <span className="text-sm text-gray-500 mt-1">{service.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
