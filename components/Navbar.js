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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-primary to-gold-primary flex items-center justify-center text-white font-bold text-lg shadow-md">
            R
          </div>
          <div>
            <p className={`font-heading font-bold text-lg leading-none ${scrolled ? 'text-parlour-dark' : 'text-white'}`}>
              RoopShree
            </p>
            <p className={`text-xs leading-none ${scrolled ? 'text-rose-primary' : 'text-rose-light'}`}>
              Beauty Parlour
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                pathname === link.href
                  ? 'bg-rose-primary text-white'
                  : scrolled
                  ? 'text-parlour-dark hover:text-rose-primary hover:bg-rose-50'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {link.label}
              {link.badge && (
                <span className="text-[10px] bg-gold-primary text-white px-1.5 py-0.5 rounded-full font-bold">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Book Now CTA */}
        <Link
          href="/book"
          className="hidden md:inline-flex items-center gap-2 btn-primary text-sm py-2.5 px-5"
        >
          📅 Book Now
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-parlour-dark' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''} ${scrolled ? 'bg-parlour-dark' : 'bg-white'}`} />
            <span className={`block h-0.5 rounded transition-all duration-300 ${open ? 'opacity-0' : ''} ${scrolled ? 'bg-parlour-dark' : 'bg-white'}`} />
            <span className={`block h-0.5 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''} ${scrolled ? 'bg-parlour-dark' : 'bg-white'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-rose-100 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium mb-1 transition-colors ${
                pathname === link.href ? 'bg-rose-50 text-rose-primary' : 'text-parlour-dark hover:bg-rose-50'
              }`}
            >
              {link.label}
              {link.badge && (
                <span className="text-[10px] bg-gold-primary text-white px-1.5 py-0.5 rounded-full font-bold">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          <Link
            href="/book"
            className="btn-primary w-full text-center mt-2 block"
          >
            📅 Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
