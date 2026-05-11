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

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const className = "text-sm transition-colors duration-200 footer-link";
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={{ color: '#8A8A9A' }}>{children}</a>;
  }
  return <Link href={href} className={className} style={{ color: '#8A8A9A' }}>{children}</Link>;
}

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link:hover { color: #C9A84C !important; }
        .social-icon:hover { background: #C9A84C !important; color: #0A0A0F !important; }
      `}</style>
      <footer style={{ background: '#060608', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>EE</div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Edify <span style={{ color: '#C9A84C' }}>Elite</span>
                </span>
              </div>
              <p className="text-sm mb-4" style={{ color: '#8A8A9A', lineHeight: '1.7' }}>
                Study Abroad Consultants. A project of Edify Group of Companies.
              </p>
              <p className="text-sm" style={{ color: '#8A8A9A' }}>
                <a href="mailto:samir.ali@edify.pk" style={{ color: '#C9A84C' }}>samir.ali@edify.pk</a>
              </p>
              <p className="text-sm mt-1" style={{ color: '#8A8A9A' }}>
                <a href="tel:+923219823444" style={{ color: '#C9A84C' }}>+92 321 9823444</a>
              </p>
            </div>

            {/* Pages */}
            <div>
              <h4 className="font-semibold text-sm mb-5 uppercase tracking-widest" style={{ color: '#C9A84C' }}>Pages</h4>
              <ul className="space-y-3">
                {pageLinks.map((l) => (
                  <li key={l.href}><FooterLink href={l.href}>{l.label}</FooterLink></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-sm mb-5 uppercase tracking-widest" style={{ color: '#C9A84C' }}>Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((l) => (
                  <li key={l.href}><FooterLink href={l.href}>{l.label}</FooterLink></li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-semibold text-sm mb-5 uppercase tracking-widest" style={{ color: '#C9A84C' }}>Socials</h4>
              <ul className="space-y-3">
                {socialLinks.map((l) => (
                  <li key={l.label}><FooterLink href={l.href} external>{l.label}</FooterLink></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            <p className="text-xs" style={{ color: '#8A8A9A' }}>
              Copyright © 2024 Edify Elite. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200"
                  style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.2)' }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
