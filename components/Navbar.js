'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BUSINESS } from '@/lib/data';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/offers', label: 'Offers', badge: 'HOT' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Only the homepage has a dark hero behind the navbar; everywhere else the
  // top of the page is light, so the navbar must use its solid/dark style.
  const isHome = pathname === '/';
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      } ${solid ? 'shadow-rose' : ''}`}
      style={solid ? {
        background: 'rgba(255,250,249,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,80,123,0.12)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-rose flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #C9507B 0%, #C9A84C 100%)' }}
          >
            R
          </div>
          <div>
            <p className={`font-heading font-bold text-lg leading-none transition-colors duration-300 ${solid ? 'text-parlour-dark' : 'text-white'}`}>
              RoopShree
            </p>
            <p className={`text-[11px] leading-none tracking-wide transition-colors duration-300 ${solid ? 'text-rose-primary' : 'text-rose-light'}`}>
              Beauty Parlour
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  active
                    ? 'text-white'
                    : solid
                    ? 'text-parlour-dark hover:text-rose-primary'
                    : 'text-white/90 hover:text-white'
                }`}
                style={active ? {
                  background: 'linear-gradient(135deg, #C9507B 0%, #9B2559 100%)',
                  boxShadow: '0 4px 14px -2px rgba(201,80,123,0.45)',
                } : undefined}
              >
                {link.label}
                {link.badge && (
                  <span
                    className="text-[10px] text-white px-1.5 py-0.5 rounded-full font-bold"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #9A7A1E)' }}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Book Now CTA */}
        <Link href="/book" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5 gap-1.5 items-center">
          <span>📅</span> Book Now
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${solid ? 'text-parlour-dark' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2.5' : ''} ${solid ? 'bg-parlour-dark' : 'bg-white'}`} />
            <span className={`block h-0.5 rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''} ${solid ? 'bg-parlour-dark' : 'bg-white'}`} />
            <span className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2.5' : ''} ${solid ? 'bg-parlour-dark' : 'bg-white'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden animate-slide-down border-t px-4 py-4"
          style={{
            background: 'rgba(255,250,249,0.97)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(201,80,123,0.12)',
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium mb-1 transition-all duration-200 ${
                  active
                    ? 'text-white'
                    : 'text-parlour-dark hover:bg-rose-50 hover:text-rose-primary'
                }`}
                style={active ? {
                  background: 'linear-gradient(135deg, #C9507B, #9B2559)',
                } : undefined}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] bg-gold-primary text-white px-1.5 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <Link href="/book" className="btn-primary w-full text-center mt-3 block">
            📅 Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
