import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/lib/data';

const TEAM = [
  { name: 'Sunita Ji', role: 'Senior Beautician & Bridal Expert', exp: '10+ years', emoji: '👩‍🦱' },
  { name: 'Priya Ji', role: 'Hair Specialist & Colorist', exp: '7+ years', emoji: '👩' },
  { name: 'Rekha Ji', role: 'Skin Care & Facial Expert', exp: '6+ years', emoji: '👩‍🦰' },
];

const VALUES = [
  { icon: '✨', title: 'Quality First', desc: 'We use only premium, trusted brands. No compromises on quality.' },
  { icon: '🧴', title: 'Hygienic Always', desc: 'Tools sterilized before every client. Your safety is our priority.' },
  { icon: '💝', title: 'Client Happiness', desc: 'We don\'t stop until you\'re 100% happy with your look.' },
  { icon: '💰', title: 'Fair Pricing', desc: 'Transparent pricing, no hidden charges. Quality at honest prices.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-parlour-dark via-parlour-mid to-rose-dark text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=40')`, backgroundSize: 'cover' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-gold-primary text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-gold-primary">RoopShree</span>
          </h1>
          <p className="text-white/70 text-lg">
            Kota's most trusted ladies beauty parlour since 2016
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138daaa1463b?w=800&q=80"
                alt="RoopShree Beauty Parlour"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="section-subtitle">Who We Are</p>
              <h2 className="section-title">Our <span className="gradient-text">Journey</span></h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mt-4">
                <p>
                  RoopShree Beauty Parlour was founded in 2016 with a simple mission: to make every woman feel confident, beautiful, and pampered without spending a fortune.
                </p>
                <p>
                  Located in the heart of Basant Vihar, Kota, we have served over <strong className="text-parlour-dark">{BUSINESS.totalClients} happy clients</strong> and built a reputation for quality, hygiene, and genuine care.
                </p>
                <p>
                  From simple threading to elaborate bridal makeovers — we treat every client like a VIP. Our team of certified beauticians stays updated with the latest trends and techniques to give you the best results.
                </p>
              </div>
              <div className="flex gap-6 mt-6">
                {[
                  { value: BUSINESS.yearsExp, label: 'Years in Business' },
                  { value: BUSINESS.totalClients, label: 'Happy Clients' },
                  { value: BUSINESS.rating + '⭐', label: 'Google Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading font-bold text-2xl text-rose-primary">{stat.value}</p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subtitle">What Drives Us</p>
            <h2 className="section-title">Our <span className="gradient-text">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-lg text-parlour-dark mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subtitle">Meet the Experts</p>
            <h2 className="section-title">Our <span className="gradient-text">Team</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="card p-6 text-center">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-heading font-bold text-xl text-parlour-dark">{member.name}</h3>
                <p className="text-rose-primary text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-400 text-xs mt-2">{member.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-primary to-rose-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl mb-4">Come Visit Us!</h2>
          <p className="text-white/80 mb-8">{BUSINESS.address}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-white text-rose-primary font-bold px-8 py-3 rounded-full hover:bg-cream transition-colors">
              Book Appointment
            </Link>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
