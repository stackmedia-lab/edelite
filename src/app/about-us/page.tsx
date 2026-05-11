import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HoverCard } from '@/components/HoverCard';

export const metadata: Metadata = {
  title: 'About Us | Edify Elite',
  description: 'Navigating the complex college admissions process? Edify Elite is your trusted partner.',
};

const whyUs = [
  { icon: '💡', title: 'Expert Guidance', desc: 'Our team of experienced educational consultants has a proven track record of helping students secure admissions to top universities worldwide.' },
  { icon: '🏆', title: 'Quality-Focused', desc: "We don't just get you accepted — we maximize your chances at the most prestigious institutions with our unparalleled experience." },
  { icon: '😌', title: 'Stress-Free Process', desc: 'We manage deadlines, paperwork, and university communications so you can focus on what matters most — your studies.' },
  { icon: '🌐', title: 'Holistic Support', desc: 'Beyond test prep and essays — comprehensive support from identifying the right schools to navigating financial aid options.' },
  { icon: '📚', title: 'Unmatched Resources', desc: 'Access to our extensive database of university information, online tools, practice materials, and scholarship opportunities.' },
  { icon: '❤️', title: 'Dedication to Your Success', desc: 'Your success is our passion. We are dedicated to seeing you achieve your educational goals and get accepted.' },
];

export default function AboutPage() {
  return (
    <div style={{ background: '#FAFAF8' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FBF8F2 0%, #F5EDD8 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, #E8C84A, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>Who We Are</div>
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>About Us</h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#5A5A5A' }}>
            Your path to your dream college starts here. We offer expert guidance and support for a successful admissions journey.
          </p>
        </div>
        <div className="relative z-10 mt-12 max-w-5xl mx-auto rounded-2xl overflow-hidden"
          style={{ border: '1.5px solid rgba(184,134,11,0.2)', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
          <img src="https://edifyelite.com.pk/_next/image?url=%2Fimages%2Fstudent.webp&w=1920&q=75"
            alt="Students" className="w-full object-cover" style={{ maxHeight: 400 }} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>About Company</div>
            <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Dream Big. Tell Your Story.{' '}
              <span style={{ color: '#B8860B' }}>Get Accepted.</span>
            </h2>
            <p className="mb-5 leading-relaxed" style={{ color: '#5A5A5A' }}>
              Welcome to Edify Elite, where we help you pave the way to your dream college. The college application process may seem overwhelming, but we are here to equip you with the necessary tools and support. Our goal is to help you create a compelling Common App profile that sets you apart.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: '#5A5A5A' }}>
              Our team comprises experienced educators and accomplished college alumni dedicated to assisting students in attaining their best potential and confidently navigating the college admissions process.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Improved Application', 'Streamlined Process', 'Confidence Building', 'Enhanced Profiles', 'Common App Mastery', 'Dream School Investment'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#444' }}>
                  <span style={{ color: '#B8860B' }}>✓</span> {item}
                </div>
              ))}
            </div>
            <Link href="/apply" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff' }}>
              Start Application <ChevronRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl opacity-20 blur-2xl"
              style={{ background: 'linear-gradient(135deg, #C9A84C, transparent)' }} />
            <img src="https://edifyelite.com.pk/_next/image?url=%2Fimages%2Fabout.jpg&w=1200&q=75"
              alt="About Edify Elite"
              className="relative rounded-2xl w-full object-cover"
              style={{ border: '1.5px solid rgba(184,134,11,0.2)', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6" style={{ background: '#F4F1EB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>Edify Elite</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Why Choose <span style={{ color: '#B8860B' }}>Us?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <HoverCard key={item.title} className="p-8 rounded-2xl"
                style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.15)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{item.desc}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* British Council */}
      <section className="py-20 px-6" style={{ background: '#fff', borderTop: '1px solid rgba(184,134,11,0.12)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            Student Counsellors Are{' '}
            <span style={{ color: '#B8860B' }}>British Council Certified</span>
          </h2>
          <p className="leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
            We at Edify Group of Companies are dedicated to providing honest and moral student counselling. Edify Group aligns its practices with international standards recommended by the British Council and partner universities.
          </p>
          <Link href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ background: 'rgba(184,134,11,0.1)', border: '1.5px solid rgba(184,134,11,0.3)', color: '#B8860B' }}>
            Contact Us <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
