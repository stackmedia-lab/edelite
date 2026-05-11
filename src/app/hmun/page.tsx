import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HMUN | Edify Elite',
  description: 'Harvard Model United Nations — guidance and preparation by Edify Elite.',
};

const whyPoints = [
  { title: 'World-Class Conference', desc: 'HMUN attracts thousands of delegates from over 100 countries, offering unparalleled international networking.' },
  { title: 'Ivy League Atmosphere', desc: 'Held at Harvard University, the experience itself demonstrates your aspiration for academic excellence.' },
  { title: 'Competitive Edge', desc: 'HMUN participation on your Common App signals leadership, ambition, and a global mindset to admissions officers.' },
  { title: 'Expert Preparation', desc: 'Edify Elite provides dedicated HMUN training, position paper coaching, and mock committee sessions.' },
];

const packageItems = [
  'Position paper writing and review',
  'Mock committee practice sessions',
  'Public speaking coaching',
  'Resolution drafting workshops',
  'Travel logistics support',
  'One-on-one mentoring with alumni delegates',
];

export default function HMUNPage() {
  return (
    <div style={{ background: '#0A0A0F' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0D1529 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute rounded-full blur-3xl opacity-15 pointer-events-none" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', color: '#C9A84C' }}>Model United Nations</div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>HMUN</h1>
          <p className="text-xl font-light mb-6" style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}>Harvard Model United Nations</p>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            One of the world&apos;s largest and most prestigious MUN conferences. Edify Elite prepares students to represent Pakistan on this global stage with confidence.
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
            Apply Now <ChevronRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Why <span style={{ color: '#C9A84C' }}>HMUN?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {whyPoints.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ background: '#C9A84C' }} />
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-2xl" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Our HMUN <span style={{ color: '#C9A84C' }}>Package</span></h3>
              {packageItems.map((item) => (
                <div key={item} className="flex items-center gap-3 mb-4">
                  <Check size={14} style={{ color: '#C9A84C', flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                </div>
              ))}
              <Link href="/contact-us" className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
                Enquire Now <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
