'use client';
import { useState } from 'react';
import { BUSINESS } from '@/lib/data';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { toast.error('Please fill name and phone'); return; }
    const msg = encodeURIComponent(
      `Hi RoopShree! My name is ${form.name}.\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, '_blank');
    toast.success('Opening WhatsApp!');
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20 bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-r from-parlour-dark to-parlour-mid py-12 text-center mb-10">
        <p className="text-rose-light text-sm uppercase tracking-widest mb-2">Get in Touch</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
          Contact <span className="text-gold-primary">Us</span>
        </h1>
        <p className="text-white/60">We'd love to hear from you. Reach us anytime!</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="font-heading font-bold text-2xl text-parlour-dark mb-6">Visit Us</h2>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-parlour-dark">Address</p>
                    <p className="text-gray-500 text-sm">{BUSINESS.address}</p>
                    <a
                      href={BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-primary text-sm font-semibold hover:underline mt-1 inline-block"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">📞</span>
                  <div>
                    <p className="font-semibold text-parlour-dark">Phone</p>
                    <a href={`tel:${BUSINESS.phone}`} className="text-gray-500 text-sm hover:text-rose-primary">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">🕐</span>
                  <div>
                    <p className="font-semibold text-parlour-dark">Business Hours</p>
                    <p className="text-gray-500 text-sm">Monday – Saturday: {BUSINESS.hours.weekdays}</p>
                    <p className="text-gray-500 text-sm">Sunday: {BUSINESS.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.3!2d75.85!3d25.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzEyLjAiTiA3NcKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RoopShree Beauty Parlour Location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="card p-8">
            <h2 className="font-heading font-bold text-2xl text-parlour-dark mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleWhatsApp} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-parlour-dark mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-2 border-rose-100 focus:border-rose-primary rounded-xl px-4 py-3 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-parlour-dark mb-2">Phone Number</label>
                <div className="flex">
                  <span className="bg-rose-50 border-2 border-r-0 border-rose-100 rounded-l-xl px-4 py-3 text-sm text-gray-500">+91</span>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                    className="flex-1 border-2 border-rose-100 focus:border-rose-primary rounded-r-xl px-4 py-3 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-parlour-dark mb-2">Message</label>
                <textarea
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full border-2 border-rose-100 focus:border-rose-primary rounded-xl px-4 py-3 focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-colors text-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
