'use client';
import Link from 'next/link';

const pageLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
];
const serviceLinks = [
  { label: 'SAT Preparation', href: '/services/sat-preparation' },
  { label: 'Common App', href: '/services/common-app' },
  { label: 'Profile Building', href: '/services/profile-building' },
  { label: 'IVY Universities', href: '/services/ivy-universities' },
];
const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@EDIFYGROUP', icon: '▶' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/edifyeliteofficial/', icon: 'in' },
  { label: 'Facebook', href: 'https://www.facebook.com/edifyeliteivy', icon: 'f' },
  { label: 'Instagram', href: 'https://www.instagram.com/edifyeliteofficial/', icon: '◎' },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link { color: #6B6B6B; text-decoration: none; }
        .footer-link:hover { color: #B8860B !important; }
        .social-btn { background: rgba(184,134,11,0.08); color: #B8860B; border: 1px solid rgba(184,134,11,0.2); }
        .social-btn:hover { background: #B8860B !important; color: #fff !important; }
      `}</style>
      <footer style={{ background: '#F0EDE4', borderTop: '1px solid rgba(184,134,11,0.18)' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: 'linear-gradient(135deg, #B8860B, #E8C84A)', color: '#fff' }}>EE</div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
                  Edify <span style={{ color: '#B8860B' }}>Elite</span>
                </span>
              </div>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B6B6B' }}>
                Study Abroad Consultants. A project of Edify Group of Companies.
              </p>
              <p className="text-sm"><a href="mailto:samir.ali@edify.pk" style={{ color: '#B8860B' }}>samir.ali@edify.pk</a></p>
              <p className="text-sm mt-1"><a href="tel:+923219823444" style={{ color: '#B8860B' }}>+92 321 9823444</a></p>
            </div>

            {/* Pages */}
            <div>
              <h4 className="font-semibold text-sm mb-5 uppercase tracking-widest" style={{ color: '#B8860B' }}>Pages</h4>
              <ul className="space-y-3">
                {pageLinks.map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-sm footer-link">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-sm mb-5 uppercase tracking-widest" style={{ color: '#B8860B' }}>Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-sm footer-link">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-semibold text-sm mb-5 uppercase tracking-widest" style={{ color: '#B8860B' }}>Socials</h4>
              <ul className="space-y-3">
                {socialLinks.map((l) => (
                  <li key={l.label}><a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm footer-link">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(184,134,11,0.15)' }}>
            <p className="text-xs" style={{ color: '#9A9A9A' }}>Copyright © 2024 Edify Elite. All rights reserved.</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="social-btn w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200"
                  aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
