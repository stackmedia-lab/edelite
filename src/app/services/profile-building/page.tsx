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
    <div style={{ background: '#FAFAF8' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FBF8F2 0%, #F5EDD8 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, #E8C84A, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.25)', color: '#B8860B' }}>
            Profile Building
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            Stand Out From<br /><span style={{ color: '#B8860B' }}>The Crowd.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#5A5A5A' }}>
            Building your profile goes beyond grades. It is about showcasing your passions through activities, essays, and experiences that make you unforgettable to admissions officers.
          </p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 24px rgba(184,134,11,0.28)' }}>
            Build My Profile <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>Our Approach</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              The Six <span style={{ color: '#B8860B' }}>Pillars</span> of Your Profile
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#6B6B6B' }}>
              A winning profile is built on multiple dimensions. We help you develop and present all of them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <HoverCard key={p.title} className="p-8 rounded-2xl"
                style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.15)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{p.desc}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6" style={{ background: '#F4F1EB' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>When to Start</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Profile Building <span style={{ color: '#B8860B' }}>Timeline</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { grade: 'Grade 9–10', title: 'Foundation Building', desc: 'Start exploring extracurriculars, develop genuine interests, and establish a strong GPA.' },
              { grade: 'Grade 11', title: 'Leadership & Impact', desc: 'Take on leadership roles, begin research projects, and start thinking about your college essay narrative.' },
              { grade: 'Grade 12', title: 'Application Season', desc: 'Finalize your school list, write and refine essays, complete the Common App, and submit applications.' },
            ].map((t, i) => (
              <div key={t.grade} className="flex gap-6 p-6 rounded-2xl"
                style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.15)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff' }}>
                  {i + 1}
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: '#B8860B' }}>{t.grade}</div>
                  <h3 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>{t.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #F5EDD8, #EDE4CC)', borderTop: '1px solid rgba(184,134,11,0.12)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            Ready to Build Your <span style={{ color: '#B8860B' }}>Profile?</span>
          </h2>
          <p className="mb-8" style={{ color: '#5A5A5A' }}>Get a free consultation and personalised profile-building roadmap from our expert counsellors.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 24px rgba(184,134,11,0.25)' }}>
            Get Free Consultation <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
