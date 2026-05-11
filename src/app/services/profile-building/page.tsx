import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HoverCard } from '@/components/HoverCard';

export const metadata: Metadata = {
  title: 'Profile Building | Edify Elite',
  description: 'Building your profile goes beyond grades. Showcase your passions through activities and essays.',
};

const pillars = [
  { icon: '📖', title: 'Academic Excellence', desc: 'Highlighting your academic achievements, coursework rigor, and intellectual curiosity in a compelling way.' },
  { icon: '🎭', title: 'Extracurriculars', desc: 'Strategically presenting your activities to show leadership, passion, and impact beyond the classroom.' },
  { icon: '✍️', title: 'Personal Essays', desc: 'Crafting authentic narratives that reveal your character, values, and what makes you uniquely you.' },
  { icon: '🏅', title: 'Awards & Honors', desc: 'Maximising the presentation of your achievements, competitions, and recognitions.' },
  { icon: '🤝', title: 'Community Service', desc: 'Showcasing your commitment to community and demonstrating the impact of your service.' },
  { icon: '🔬', title: 'Research & Projects', desc: 'Presenting independent research, passion projects, and entrepreneurial ventures effectively.' },
];

export default function ProfileBuildingPage() {
  return (
    <div style={{ background: '#0A0A0F' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0D1529 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute rounded-full blur-3xl opacity-15 pointer-events-none" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', color: '#C9A84C' }}>Profile Building</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Stand Out From<br /><span style={{ color: '#C9A84C' }}>The Crowd.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Building your profile goes beyond grades. It is about showcasing your passions through activities, essays, and experiences that make you unforgettable.
          </p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
            Build My Profile <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Six <span style={{ color: '#C9A84C' }}>Pillars</span> of Your Profile
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <HoverCard key={p.title} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)' }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.desc}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: 'rgba(201,168,76,0.05)', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Build Your <span style={{ color: '#C9A84C' }}>Profile?</span>
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>Get a free consultation and personalised profile-building roadmap from our expert counsellors.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
            Get Free Consultation <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
