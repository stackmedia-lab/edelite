'use client';
import { useState } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

const steps = [
  { num: 1, title: 'Personal Information', desc: 'Tell us about yourself' },
  { num: 2, title: 'Academic Background', desc: 'Your education history' },
  { num: 3, title: 'Goals & Preferences', desc: 'Where you want to go' },
];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', grade: '', gpa: '', school: '', targetCountry: '', program: '', goals: '' });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else { setSubmitted(true); }
  };

  if (submitted) {
    return (
      <div style={{ background: '#0A0A0F', minHeight: '100vh' }} className="flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.3)' }}>
            <CheckCircle size={40} style={{ color: '#4ade80' }} />
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Application Received!</h2>
          <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>Thank you for applying to Edify Elite. Our team will review your application and contact you within 24–48 hours for your free assessment.</p>
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>Back to Home <ChevronRight size={16} /></a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0D1529 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute rounded-full blur-3xl opacity-15" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>Get Started</div>
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Apply Online</h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>Start your journey to your dream university with a free assessment.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: step >= s.num ? 'linear-gradient(135deg, #C9A84C, #E2C97E)' : 'rgba(255,255,255,0.08)', color: step >= s.num ? '#0A0A0F' : 'rgba(255,255,255,0.4)', transition: 'all 0.3s' }}>{s.num}</div>
                  <div className="mt-2 text-center">
                    <p className="text-xs font-medium" style={{ color: step >= s.num ? '#C9A84C' : 'rgba(255,255,255,0.4)' }}>{s.title}</p>
                  </div>
                </div>
                {i < steps.length - 1 && <div className="flex-1 h-px mx-4 mt-[-20px]" style={{ background: step > s.num ? '#C9A84C' : 'rgba(255,255,255,0.1)' }} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleNext} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)' }}>
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Personal Information</h2>
                {[{ name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' }, { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' }, { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+92 300 0000000' }, { name: 'city', label: 'City', type: 'text', placeholder: 'Faisalabad' }].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>{f.label}</label>
                    <input type={f.type} value={form[f.name as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} placeholder={f.placeholder} required className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#fff' }} onFocus={(e) => { e.target.style.borderColor = '#C9A84C'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }} />
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Academic Background</h2>
                {[{ name: 'school', label: 'Current School/College', type: 'text', placeholder: 'Name of institution' }, { name: 'grade', label: 'Current Grade/Year', type: 'text', placeholder: 'e.g. Grade 11, O-Level Year 2' }, { name: 'gpa', label: 'GPA / Percentage', type: 'text', placeholder: 'e.g. 3.8 / 95%' }].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>{f.label}</label>
                    <input type={f.type} value={form[f.name as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} placeholder={f.placeholder} required className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#fff' }} onFocus={(e) => { e.target.style.borderColor = '#C9A84C'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }} />
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Goals & Preferences</h2>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Target Country</label>
                  <select value={form.targetCountry} onChange={(e) => setForm({ ...form, targetCountry: e.target.value })} required className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: form.targetCountry ? '#fff' : 'rgba(255,255,255,0.4)' }}>
                    <option value="" disabled style={{ background: '#111' }}>Select a country</option>
                    {['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Netherlands', 'Other'].map((c) => <option key={c} value={c} style={{ background: '#111' }}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Desired Program</label>
                  <input type="text" value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} placeholder="e.g. Computer Science, Business, Medicine" required className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#fff' }} onFocus={(e) => { e.target.style.borderColor = '#C9A84C'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }} />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Tell us about your goals</label>
                  <textarea rows={4} value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} placeholder="Why do you want to study abroad? What are your career aspirations?" className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#fff' }} onFocus={(e) => { e.target.style.borderColor = '#C9A84C'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }} />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-xl text-sm font-medium" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}>Back</button>
              ) : <div />}
              <button type="submit" className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
                {step < 3 ? 'Continue' : 'Submit Application'} <ChevronRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
