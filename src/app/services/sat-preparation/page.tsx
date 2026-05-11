import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Check } from 'lucide-react';
import { HoverCard } from '@/components/HoverCard';

export const metadata: Metadata = {
  title: 'SAT Preparation | Edify Elite',
  description: 'Expert SAT coaching with proven strategies to help you achieve your target score.',
};

const features = [
  'Comprehensive study materials and practice tests',
  'Expert tutors with proven track records',
  'Personalised study plans tailored to your needs',
  'Regular mock tests and performance tracking',
  'Strategies for both Math and Evidence-Based Reading',
  'Small batch sizes for personalised attention',
  'Flexible scheduling to suit your timetable',
  'Post-test analysis and improvement strategies',
];

const stats = [
  { value: '1500+', label: 'Average Score Target' },
  { value: '98%', label: 'Students Hit Target Score' },
  { value: '200+', label: 'Students Trained' },
  { value: '50+', label: 'Hours of Content' },
];

const modules = [
  { icon: '📐', title: 'Math Module', desc: 'Algebra, Advanced Math, Problem-Solving, Data Analysis — all SAT Math topics covered systematically.' },
  { icon: '📖', title: 'Reading & Writing', desc: 'Craft and Structure, Information and Ideas, Standard English Conventions, Expression of Ideas.' },
  { icon: '📝', title: 'Full Practice Tests', desc: 'Regular timed practice under exam conditions with detailed review and score analysis sessions.' },
  { icon: '🎯', title: 'Strategy Sessions', desc: 'Time management, question skipping strategies, process of elimination, and score-maximising techniques.' },
];

export default function SATPage() {
  return (
    <div style={{ background: '#0A0A0F' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0D1529 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute rounded-full blur-3xl opacity-15 pointer-events-none" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', color: '#C9A84C' }}>
            SAT Preparation
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ace Your SAT.<br /><span style={{ color: '#C9A84C' }}>Open Every Door.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Expert SAT coaching with proven strategies to help you achieve your target score for top universities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
              Enroll Now <ChevronRight size={16} />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}>
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.04)' }}>
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#C9A84C' }}>{s.value}</div>
              <div className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>Why Our SAT Program</div>
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Structured for <span style={{ color: '#C9A84C' }}>Maximum Results</span>
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Our SAT preparation program is designed by experienced educators who understand exactly what it takes to score in the top percentile. We combine rigorous practice with targeted test-taking strategies for the Digital SAT format.
            </p>
            <div className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                    <Check size={11} style={{ color: '#C9A84C' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {modules.map((m) => (
              <HoverCard
                key={m.title}
                className="p-6 rounded-xl flex gap-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)' }}
              >
                <div className="text-2xl flex-shrink-0">{m.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{m.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{m.desc}</p>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>How It Works</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Your Path to a <span style={{ color: '#C9A84C' }}>Perfect Score</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Diagnostic Test', desc: 'We start with a full diagnostic test to understand your current level and identify areas for improvement.' },
              { step: '02', title: 'Custom Plan', desc: 'Based on your results, we build a personalised study plan targeting your specific weak areas.' },
              { step: '03', title: 'Intensive Prep', desc: 'Expert-led sessions covering every SAT topic with practice questions and strategy walkthroughs.' },
              { step: '04', title: 'Mock Tests & Review', desc: 'Regular full-length practice tests followed by detailed score analysis and strategic adjustments.' },
            ].map((p) => (
              <div key={p.step} className="text-center p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.1)' }}>
                <div className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(201,168,76,0.3)' }}>{p.step}</div>
                <h3 className="font-semibold mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: 'rgba(201,168,76,0.05)', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Start Your <span style={{ color: '#C9A84C' }}>SAT Journey?</span>
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Get a free assessment and personalised study plan from our expert tutors.
          </p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
            Get Free Assessment <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
