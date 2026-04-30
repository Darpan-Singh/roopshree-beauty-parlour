'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { SERVICES, TIME_SLOTS, BUSINESS } from '@/lib/data';
import toast from 'react-hot-toast';

const ALL_SERVICES = SERVICES.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.category, icon: cat.icon }))
);

function BookingFormInner() {
  const searchParams = useSearchParams();
  const preService = searchParams.get('service') || '';

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service: preService,
    date: '',
    time: '',
    name: '',
    phone: '',
    notes: '',
  });

  const today = new Date().toISOString().split('T')[0];
  const selectedService = ALL_SERVICES.find((s) => s.name === form.service);

  const handleNext = () => {
    if (step === 1 && !form.service) { toast.error('Please select a service'); return; }
    if (step === 2 && (!form.date || !form.time)) { toast.error('Please select date & time'); return; }
    if (step === 3) {
      if (!form.name.trim()) { toast.error('Please enter your name'); return; }
      if (!form.phone.trim() || form.phone.length < 10) { toast.error('Please enter a valid 10-digit phone number'); return; }
    }
    setStep((s) => s + 1);
  };

  const handleWhatsAppBook = () => {
    const msg = encodeURIComponent(
      `Hi RoopShree! I want to book an appointment:\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `💄 Service: ${form.service}\n` +
      `📅 Date: ${form.date}\n` +
      `🕐 Time: ${form.time}\n` +
      (form.notes ? `📝 Notes: ${form.notes}\n` : '') +
      `\nPlease confirm my booking. Thank you!`
    );
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, '_blank');
    toast.success('Opening WhatsApp to confirm your booking!');
  };

  const STEPS = ['Service', 'Date & Time', 'Your Details', 'Confirm'];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-parlour-dark to-parlour-mid py-10 text-center mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
          Book Your Appointment
        </h1>
        <p className="text-white/60">Simple, fast, and confirmed in seconds</p>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        {/* Step Progress */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-rose-100 z-0" />
          <div
            className="absolute top-5 left-0 h-0.5 bg-rose-primary z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
          />
          {STEPS.map((label, i) => (
            <div key={label} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  i + 1 < step
                    ? 'bg-rose-primary text-white'
                    : i + 1 === step
                    ? 'bg-rose-primary text-white ring-4 ring-rose-100'
                    : 'bg-white border-2 border-rose-100 text-gray-400'
                }`}
              >
                {i + 1 < step ? '✓' : i + 1}
              </div>
              <span className={`text-xs mt-2 font-medium ${i + 1 === step ? 'text-rose-primary' : 'text-gray-400'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          {/* Step 1: Service */}
          {step === 1 && (
            <div>
              <h2 className="font-heading font-bold text-2xl text-parlour-dark mb-6">Select a Service</h2>
              <input
                type="text"
                placeholder="Search services..."
                className="w-full border border-rose-100 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-rose-primary text-sm"
                onChange={(e) => {
                  const q = e.target.value.toLowerCase();
                  document.querySelectorAll('[data-service]').forEach((el) => {
                    el.style.display = el.dataset.service.toLowerCase().includes(q) ? '' : 'none';
                  });
                }}
              />
              <div className="max-h-80 overflow-y-auto space-y-2">
                {SERVICES.map((cat) => (
                  <div key={cat.id}>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1 mb-1 mt-3">
                      {cat.icon} {cat.category}
                    </p>
                    {cat.items.map((item) => (
                      <button
                        key={item.name}
                        data-service={item.name}
                        onClick={() => setForm({ ...form, service: item.name })}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                          form.service === item.name
                            ? 'bg-rose-primary text-white'
                            : 'hover:bg-rose-50 text-parlour-dark border border-transparent hover:border-rose-100'
                        }`}
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className={form.service === item.name ? 'text-white' : 'text-rose-primary font-bold'}>
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div>
              <h2 className="font-heading font-bold text-2xl text-parlour-dark mb-6">Choose Date & Time</h2>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-parlour-dark mb-2">📅 Select Date</label>
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full border-2 border-rose-100 focus:border-rose-primary rounded-xl px-4 py-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-parlour-dark mb-3">🕐 Select Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setForm({ ...form, time: slot })}
                      className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        form.time === slot
                          ? 'bg-rose-primary text-white'
                          : 'bg-rose-50 text-parlour-dark hover:bg-rose-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <div>
              <h2 className="font-heading font-bold text-2xl text-parlour-dark mb-6">Your Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-parlour-dark mb-2">👤 Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-2 border-rose-100 focus:border-rose-primary rounded-xl px-4 py-3 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-parlour-dark mb-2">📞 Phone Number</label>
                  <div className="flex">
                    <span className="bg-rose-50 border-2 border-r-0 border-rose-100 rounded-l-xl px-4 py-3 text-sm text-gray-500">+91</span>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                      className="flex-1 border-2 border-rose-100 focus:border-rose-primary rounded-r-xl px-4 py-3 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-parlour-dark mb-2">📝 Special Requests (optional)</label>
                  <textarea
                    placeholder="Any special requests or questions..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className="w-full border-2 border-rose-100 focus:border-rose-primary rounded-xl px-4 py-3 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirm */}
          {step === 4 && (
            <div>
              <h2 className="font-heading font-bold text-2xl text-parlour-dark mb-6">Confirm Booking</h2>
              <div className="bg-rose-50 rounded-xl p-5 space-y-3 mb-6 border border-rose-100">
                {[
                  { label: '💄 Service', value: form.service },
                  { label: '💰 Price', value: selectedService ? `₹${selectedService.price.toLocaleString('en-IN')}` : '—' },
                  { label: '📅 Date', value: form.date },
                  { label: '🕐 Time', value: form.time },
                  { label: '👤 Name', value: form.name },
                  { label: '📞 Phone', value: `+91 ${form.phone}` },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{row.label}</span>
                    <span className="font-semibold text-parlour-dark">{row.value}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 text-center mb-4">
                Your booking will be confirmed via WhatsApp within 10 minutes.
              </p>

              <button
                onClick={handleWhatsAppBook}
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-xl transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Confirm via WhatsApp
              </button>
            </div>
          )}

          {/* Navigation */}
          {step < 4 && (
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="px-6 py-3 border-2 border-rose-100 text-parlour-dark rounded-xl font-semibold hover:border-rose-primary transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={handleNext}
                className="btn-primary px-8 py-3"
              >
                {step === 3 ? 'Review Booking' : 'Next →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream pt-24 flex items-center justify-center">Loading...</div>}>
      <BookingFormInner />
    </Suspense>
  );
}
