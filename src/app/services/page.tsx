import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HoverCard } from '@/components/HoverCard';

export const metadata: Metadata = {
  title: 'Services | Edify Elite',
  description: 'SAT Preparation, Common App, Profile Building, and IVY University guidance.',
};

const services = [
  { title: 'SAT Preparation', slug: 'sat-preparation', icon: '⬡', desc: 'Expert SAT coaching with proven strategies to help you achieve your target score. Our program covers all sections: Math, Reading, and Writing.' },
  { title: 'Common App', slug: 'common-app', icon: '◈', desc: 'The Common App streamlines college applications for US universities. We guide you through every step, from personal statements to activity lists.' },
  { title: 'Profile Building', slug: 'profile-building', icon: '✦', desc: 'Building your profile goes beyond grades. Showcase your passions through extracurriculars, leadership roles, and a compelling personal narrative.' },
  { title: 'IVY Universities', slug: 'ivy-universities', icon: '◎', desc: 'We guide you through the rigorous IVY League application process with tailored strategies for each institution.' },
];

const edifyServices = [
  { num: '01', title: 'Counselling', desc: 'Comprehensive counselling on university selection, applications, visas, scholarships, and more.' },
  { num: '02', title: 'Admission Guidance', desc: 'Special attention to your application, highlighting key areas to enhance your profile.' },
  { num: '03', title: 'University Selection', desc: 'Careful evaluation of your career goals and budget to ensure the best possible university match.' },
  { num: '04', title: 'Visa Application', desc: 'We guide you through the entire visa process, including filling out applications and mock interviews.' },
  { num: '05', title: 'Pre-Departure Orientation', desc: 'Essential guidance on accommodation, culture, lifestyle, banking, and local regulations.' },
  { num: '06', title: 'Travel Assistance', desc: 'We book flights in advance, ensuring ideal departure dates, best routes, and affordable fares.' },
  { num: '07', title: 'Post-Departure Support', desc: 'We support you even after you arrive, assisting with accommodation, orientation, and challenges.' },
  { num: '08', title: 'Financial Aid & Scholarships', desc: 'Guidance on securing scholarships, loans, and financial aid options.' },
  { num: '09', title: 'Language Test Preparation', desc: 'Specialised preparation for IELTS, PTE, and other proficiency tests.' },
];

export default function ServicesPage() {
  return (
    <div style={{ background: '#0A0A0F' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0D1529 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute rounded-full blur-3xl opacity-15 pointer-events-none" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>What We Offer</div>
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Our Services</h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Everything you need to apply to college, research financial aid, and get advice from expert counselors.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <HoverCard
                  className="group p-8 rounded-2xl h-full block"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)' }}
                  hoverBg="rgba(201,168,76,0.07)"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6" style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}>
                    {s.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{s.title}</h2>
                  <p className="leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#C9A84C' }}>
                    Learn More <ChevronRight size={16} />
                  </div>
                </HoverCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#060608', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>Full Range</div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              We Strive to Provide the Finest{' '}
              <span style={{ color: '#C9A84C' }}>Service Possible</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {edifyServices.map((s) => (
              <HoverCard
                key={s.num}
                className="p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.1)' }}
              >
                <div className="text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(201,168,76,0.25)' }}>{s.num}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.desc}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
