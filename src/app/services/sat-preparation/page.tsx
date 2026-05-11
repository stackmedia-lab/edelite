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

const modules = [
  { icon: '📐', title: 'Math Module', desc: 'Algebra, Advanced Math, Problem-Solving, Data Analysis — all SAT Math topics covered systematically.' },
  { icon: '📖', title: 'Reading & Writing', desc: 'Craft and Structure, Information and Ideas, Standard English Conventions, Expression of Ideas.' },
  { icon: '📝', title: 'Full Practice Tests', desc: 'Regular timed practice under exam conditions with detailed review and score analysis sessions.' },
  { icon: '🎯', title: 'Strategy Sessions', desc: 'Time management, question skipping strategies, process of elimination, and score-maximising techniques.' },
];

export default function SATPage() {
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
            SAT Preparation
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            Ace Your SAT.<br /><span style={{ color: '#B8860B' }}>Open Every Door.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#5A5A5A' }}>
            Expert SAT coaching with proven strategies to help you achieve your target score for top universities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 24px rgba(184,134,11,0.28)' }}>
              Enroll Now <ChevronRight size={16} />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold"
              style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.25)', color: '#444' }}>
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#fff', borderTop: '1px solid rgba(184,134,11,0.1)', borderBottom: '1px solid rgba(184,134,11,0.1)' }}>
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '1500+', label: 'Average Score Target' },
            { value: '98%', label: 'Students Hit Score' },
            { value: '200+', label: 'Students Trained' },
            { value: '50+', label: 'Hours of Content' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#B8860B' }}>{s.value}</div>
              <div className="text-xs uppercase tracking-widest" style={{ color: '#9A9A9A' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features + Modules */}
      <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>Why Our SAT Program</div>
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Structured for <span style={{ color: '#B8860B' }}>Maximum Results</span>
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#5A5A5A' }}>
              Our SAT preparation program is designed by experienced educators who understand exactly what it takes to score in the top percentile. We combine rigorous practice with targeted strategies for the Digital SAT format.
            </p>
            <div className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(184,134,11,0.12)' }}>
                    <Check size={11} style={{ color: '#B8860B' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#444' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {modules.map((m) => (
              <HoverCard key={m.title} className="p-6 rounded-xl flex gap-4"
                style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.15)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div className="text-2xl flex-shrink-0">{m.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>{m.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{m.desc}</p>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6" style={{ background: '#F4F1EB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>How It Works</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Your Path to a <span style={{ color: '#B8860B' }}>Perfect Score</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Diagnostic Test', desc: 'We start with a full diagnostic test to understand your current level and identify areas for improvement.' },
              { step: '02', title: 'Custom Plan', desc: 'Based on your results, we build a personalised study plan targeting your specific weak areas.' },
              { step: '03', title: 'Intensive Prep', desc: 'Expert-led sessions covering every SAT topic with practice questions and strategy walkthroughs.' },
              { step: '04', title: 'Mock Tests', desc: 'Regular full-length practice tests followed by detailed score analysis and strategic adjustments.' },
            ].map((p) => (
              <div key={p.step} className="text-center p-6 rounded-2xl"
                style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.12)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div className="text-4xl font-bold mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(184,134,11,0.3)' }}>{p.step}</div>
                <h3 className="font-semibold mb-3" style={{ color: '#1A1A1A' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #F5EDD8, #EDE4CC)', borderTop: '1px solid rgba(184,134,11,0.12)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            Ready to Start Your <span style={{ color: '#B8860B' }}>SAT Journey?</span>
          </h2>
          <p className="mb-8" style={{ color: '#5A5A5A' }}>Get a free assessment and personalised study plan from our expert tutors.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 24px rgba(184,134,11,0.25)' }}>
            Get Free Assessment <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
