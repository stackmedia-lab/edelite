import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HoverCard } from '@/components/HoverCard';

export const metadata: Metadata = {
  title: 'Common App | Edify Elite',
  description: 'The Common App streamlines college applications in the US for students by offering a one-stop platform.',
};

const steps = [
  { num: '01', title: 'Account Setup', desc: 'We help you create and configure your Common App account correctly from day one.' },
  { num: '02', title: 'School List', desc: 'Strategic selection of schools that match your profile, goals, and budget.' },
  { num: '03', title: 'Personal Essay', desc: 'We guide you through crafting a compelling, authentic personal statement.' },
  { num: '04', title: 'Supplements', desc: 'Tailored supplemental essays for each university on your list.' },
  { num: '05', title: 'Activities & Honors', desc: 'Strategically presenting your extracurriculars and achievements.' },
  { num: '06', title: 'Final Review', desc: 'Thorough review and submission support for every application.' },
];

export default function CommonAppPage() {
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
            Common App
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            One Application.<br /><span style={{ color: '#B8860B' }}>Infinite Possibilities.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#5A5A5A' }}>
            The Common App streamlines college applications in the US. We guide you through every step for a standout application.
          </p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 24px rgba(184,134,11,0.28)' }}>
            Get Started <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>Step by Step</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Our <span style={{ color: '#B8860B' }}>Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <HoverCard key={s.num} className="p-8 rounded-2xl"
                style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.15)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="text-4xl font-bold mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(184,134,11,0.28)' }}>{s.num}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{s.desc}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #F5EDD8, #EDE4CC)', borderTop: '1px solid rgba(184,134,11,0.12)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            Ready to <span style={{ color: '#B8860B' }}>Apply?</span>
          </h2>
          <p className="mb-8" style={{ color: '#5A5A5A' }}>Let our experts guide you through every step of your Common App journey.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 24px rgba(184,134,11,0.25)' }}>
            Get Free Assessment <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
