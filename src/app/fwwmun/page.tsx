import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HoverCard } from '@/components/HoverCard';

export const metadata: Metadata = {
  title: 'FWWMUN | Edify Elite',
  description: 'Faisalabad World Wide Model United Nations — hosted by Edify Elite.',
};

const benefits = [
  { icon: '🌍', title: 'Global Exposure', desc: 'Engage with delegates from across Pakistan and internationally, debating real-world issues on a simulated global stage.' },
  { icon: '🗣️', title: 'Public Speaking', desc: 'Develop confidence by representing a country, crafting resolutions, and delivering powerful speeches.' },
  { icon: '🤝', title: 'Diplomacy Skills', desc: 'Learn negotiation, coalition-building, and consensus-finding — skills valued by top universities worldwide.' },
  { icon: '✍️', title: 'Research & Writing', desc: 'Produce position papers and resolutions that demonstrate your analytical thinking and writing ability.' },
  { icon: '🏆', title: 'Awards & Recognition', desc: 'Outstanding delegates receive prestigious awards that significantly enhance your college application profile.' },
  { icon: '📚', title: 'Profile Building', desc: 'MUN participation is highly valued by Ivy League universities as evidence of leadership and global awareness.' },
];

export default function FWWMUNPage() {
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
          <h1 className="text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>FWWMUN</h1>
          <p className="text-xl font-medium mb-6" style={{ color: '#B8860B', fontFamily: 'Playfair Display, serif' }}>
            Faisalabad World Wide Model United Nations
          </p>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#5A5A5A' }}>
            A premier simulation of the United Nations where students develop diplomacy, public speaking, and critical thinking skills on a global stage.
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 24px rgba(184,134,11,0.28)' }}>
            Register Interest <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>Why Participate</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              What You <span style={{ color: '#B8860B' }}>Gain</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item) => (
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

      <section className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #F5EDD8, #EDE4CC)', borderTop: '1px solid rgba(184,134,11,0.12)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            Interested in <span style={{ color: '#B8860B' }}>FWWMUN?</span>
          </h2>
          <p className="mb-8" style={{ color: '#5A5A5A' }}>
            Contact us to learn about upcoming sessions, registration deadlines, and committee assignments.
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 24px rgba(184,134,11,0.25)' }}>
            Get In Touch <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
