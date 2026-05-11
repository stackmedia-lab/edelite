import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HoverCard } from '@/components/HoverCard';

export const metadata: Metadata = {
  title: 'IVY Universities | Edify Elite',
  description: 'Expert guidance for IVY League and top US university applications.',
};

const ivyLeague = [
  { name: 'Harvard University', location: 'Cambridge, MA', rank: '#1' },
  { name: 'Yale University', location: 'New Haven, CT', rank: '#5' },
  { name: 'Princeton University', location: 'Princeton, NJ', rank: '#1' },
  { name: 'Columbia University', location: 'New York, NY', rank: '#12' },
  { name: 'University of Pennsylvania', location: 'Philadelphia, PA', rank: '#7' },
  { name: 'Brown University', location: 'Providence, RI', rank: '#9' },
  { name: 'Dartmouth College', location: 'Hanover, NH', rank: '#13' },
  { name: 'Cornell University', location: 'Ithaca, NY', rank: '#15' },
];

const approach = [
  { icon: '🎯', title: 'School Selection Strategy', desc: 'We help you build a balanced school list — reaches, targets, and safeties — maximising your chances of acceptance.' },
  { icon: '📝', title: 'Application Positioning', desc: 'Crafting a narrative that highlights your unique strengths and aligns with each university\'s values and culture.' },
  { icon: '🤝', title: 'Interview Preparation', desc: 'Rigorous mock interview sessions so you walk in confident and ready to impress admissions officers.' },
  { icon: '💰', title: 'Financial Aid Guidance', desc: 'Navigating need-blind policies, QuestBridge, and scholarship applications to make Ivy education affordable.' },
];

export default function IVYPage() {
  return (
    <div style={{ background: '#0A0A0F' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0D1529 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute rounded-full blur-3xl opacity-15 pointer-events-none" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', color: '#C9A84C' }}>IVY Universities</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Dream of the<br /><span style={{ color: '#C9A84C' }}>World&apos;s Best.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            US Ivy League colleges are known for their academic excellence and exclusivity. We provide the expert guidance to help you get in.
          </p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
            Start Application <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Ivy League Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>The Ivy League</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Eight of the World&apos;s Most{' '}
              <span style={{ color: '#C9A84C' }}>Prestigious Universities</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              We have helped students gain admission to all of them. Your dream is our mission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ivyLeague.map((u) => (
              <HoverCard key={u.name} className="p-6 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)' }}>
                <div className="text-xs mb-3 font-semibold" style={{ color: '#C9A84C' }}>{u.rank} Ranked</div>
                <h3 className="font-semibold mb-2 leading-snug">{u.name}</h3>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{u.location}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>How We Help</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span style={{ color: '#C9A84C' }}>Approach</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((a) => (
              <HoverCard key={a.title} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)' }}>
                <div className="text-3xl mb-4">{a.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{a.desc}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: 'rgba(201,168,76,0.05)', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready for Your <span style={{ color: '#C9A84C' }}>Ivy Journey?</span>
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Get a free assessment and find out if you are Ivy-ready — and what it takes to get there.
          </p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
            Get Free Assessment <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
