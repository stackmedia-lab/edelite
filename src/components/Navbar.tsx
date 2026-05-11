'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'SAT', href: '/services/sat-preparation' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blog' },
  { label: 'About', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)' }}
          >
            EE
          </div>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#fff' }}
          >
            Edify <span style={{ color: '#C9A84C' }}>Elite</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: pathname === l.href ? '#C9A84C' : 'rgba(255,255,255,0.75)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    pathname === l.href ? '#C9A84C' : 'rgba(255,255,255,0.75)')
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/apply"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E2C97E)',
              color: '#0A0A0F',
            }}
          >
            Apply Online
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{ background: 'rgba(10,10,15,0.98)' }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium border-b"
              style={{
                color: pathname === l.href ? '#C9A84C' : 'rgba(255,255,255,0.8)',
                borderColor: 'rgba(201,168,76,0.12)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center py-3 rounded-full text-sm font-semibold"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}
          >
            Apply Online
          </Link>
        </div>
      )}
    </header>
  );
}
