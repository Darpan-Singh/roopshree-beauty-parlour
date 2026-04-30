'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = SERVICES[activeTab];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-parlour-dark to-parlour-mid py-12 text-center mb-10">
        <p className="text-rose-light text-sm uppercase tracking-widest mb-2">Everything You Need</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
          Our Services & <span className="text-gold-primary">Prices</span>
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Transparent pricing, no hidden charges. All prices inclusive of service tax.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SERVICES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-rose-primary text-white shadow-lg scale-105'
                  : 'bg-white text-parlour-dark border border-rose-100 hover:border-rose-primary hover:text-rose-primary'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Services table */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className={`bg-gradient-to-r ${active.color} p-6 flex items-center gap-3`}>
            <span className="text-4xl">{active.icon}</span>
            <div>
              <h2 className="font-heading font-bold text-2xl text-parlour-dark">{active.category} Services</h2>
              <p className="text-gray-500 text-sm">{active.items.length} services available</p>
            </div>
          </div>

          <div className="divide-y divide-gray-50">
            {active.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-4 hover:bg-rose-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-parlour-dark">{item.name}</span>
                      {item.popular && (
                        <span className="text-[10px] bg-rose-primary text-white px-2 py-0.5 rounded-full font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-gray-400 text-sm">⏱ {item.duration} min</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-xl text-rose-primary font-heading">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                  <Link
                    href={`/book?service=${encodeURIComponent(item.name)}`}
                    className="hidden sm:inline-block text-sm bg-rose-primary text-white px-4 py-1.5 rounded-full hover:bg-rose-dark transition-colors"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center bg-gradient-to-r from-rose-primary to-gold-primary rounded-2xl p-8 text-white">
          <h3 className="font-heading font-bold text-2xl mb-2">Can't decide? Let us help!</h3>
          <p className="text-white/80 mb-6">WhatsApp us your requirements and we'll suggest the perfect service for you.</p>
          <Link href="/book" className="bg-white text-rose-primary font-bold px-8 py-3 rounded-full hover:bg-cream transition-colors inline-block">
            Book Free Consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}
