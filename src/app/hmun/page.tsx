import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HMUN | Edify Elite',
  description: 'Harvard Model United Nations — guidance and preparation by Edify Elite.',
};

const whyPoints = [
  { title: 'World-Class Conference', desc: 'HMUN attracts thousands of delegates from over 100 countries, offering unparalleled international networking opportunities.' },
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
    <div style={{ background: '#FAFAF8' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FBF8F2 0%, #F5EDD8 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, #E8C84A, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.25)', color: '#B8860B' }}>
            Model United Nations
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>HMUN</h1>
          <p className="text-xl font-medium mb-6" style={{ color: '#B8860B', fontFamily: 'Playfair Display, serif' }}>
            Harvard Model United Nations
          </p>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#5A5A5A' }}>
            One of the world&apos;s largest and most prestigious MUN conferences. Edify Elite prepares students to represent Pakistan on this global stage with confidence.
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 24px rgba(184,134,11,0.28)' }}>
            Apply Now <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>The Opportunity</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Why <span style={{ color: '#B8860B' }}>HMUN?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {whyPoints.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ background: '#B8860B' }} />
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#1A1A1A' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #FBF8F2, #F5EDD8)', border: '1.5px solid rgba(184,134,11,0.25)', boxShadow: '0 4px 20px rgba(184,134,11,0.1)' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
                Our HMUN <span style={{ color: '#B8860B' }}>Package</span>
              </h3>
              {packageItems.map((item) => (
                <div key={item} className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(184,134,11,0.12)' }}>
                    <Check size={11} style={{ color: '#B8860B' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#444' }}>{item}</span>
                </div>
              ))}
              <Link href="/contact-us"
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff' }}>
                Enquire Now <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
