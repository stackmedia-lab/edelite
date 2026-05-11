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
    else setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: '#FAFAF8', minHeight: '100vh' }} className="flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.3)' }}>
            <CheckCircle size={40} style={{ color: '#16a34a' }} />
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>Application Received!</h2>
          <p className="leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>Thank you for applying to Edify Elite. Our team will review your application and contact you within 24–48 hours for your free assessment.</p>
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff' }}>
            Back to Home <ChevronRight size={16} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FBF8F2 0%, #F5EDD8 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, #E8C84A, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>Get Started</div>
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>Apply Online</h1>
          <p className="text-lg" style={{ color: '#5A5A5A' }}>Start your journey to your dream university with a free assessment.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Steps */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
                    style={{ background: step >= s.num ? 'linear-gradient(135deg, #B8860B, #C9A84C)' : '#E8E3DA', color: step >= s.num ? '#fff' : '#9A9A9A' }}>
                    {s.num}
                  </div>
                  <p className="mt-2 text-xs font-medium text-center"
                    style={{ color: step >= s.num ? '#B8860B' : '#9A9A9A' }}>{s.title}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px mx-4 mt-[-20px] transition-all duration-300"
                    style={{ background: step > s.num ? '#B8860B' : '#DDD8CE' }} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleNext} className="p-8 rounded-2xl"
            style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.15)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>Personal Information</h2>
                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+92 300 0000000' },
                  { name: 'city', label: 'City', type: 'text', placeholder: 'Faisalabad' },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm mb-2 font-medium" style={{ color: '#444' }}>{f.label}</label>
                    <input type={f.type} value={form[f.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      placeholder={f.placeholder} required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: '#F9F7F3', border: '1.5px solid rgba(184,134,11,0.2)', color: '#1A1A1A' }}
                      onFocus={(e) => { e.target.style.borderColor = '#B8860B'; e.target.style.background = '#fff'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(184,134,11,0.2)'; e.target.style.background = '#F9F7F3'; }} />
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>Academic Background</h2>
                {[
                  { name: 'school', label: 'Current School/College', type: 'text', placeholder: 'Name of institution' },
                  { name: 'grade', label: 'Current Grade/Year', type: 'text', placeholder: 'e.g. Grade 11, O-Level Year 2' },
                  { name: 'gpa', label: 'GPA / Percentage', type: 'text', placeholder: 'e.g. 3.8 / 95%' },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm mb-2 font-medium" style={{ color: '#444' }}>{f.label}</label>
                    <input type={f.type} value={form[f.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      placeholder={f.placeholder} required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: '#F9F7F3', border: '1.5px solid rgba(184,134,11,0.2)', color: '#1A1A1A' }}
                      onFocus={(e) => { e.target.style.borderColor = '#B8860B'; e.target.style.background = '#fff'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(184,134,11,0.2)'; e.target.style.background = '#F9F7F3'; }} />
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>Goals & Preferences</h2>
                <div>
                  <label className="block text-sm mb-2 font-medium" style={{ color: '#444' }}>Target Country</label>
                  <select value={form.targetCountry} onChange={(e) => setForm({ ...form, targetCountry: e.target.value })} required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: '#F9F7F3', border: '1.5px solid rgba(184,134,11,0.2)', color: form.targetCountry ? '#1A1A1A' : '#9A9A9A' }}
                    onFocus={(e) => { e.target.style.borderColor = '#B8860B'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(184,134,11,0.2)'; }}>
                    <option value="" disabled>Select a country</option>
                    {['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Netherlands', 'Other'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium" style={{ color: '#444' }}>Desired Program</label>
                  <input type="text" value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })}
                    placeholder="e.g. Computer Science, Business, Medicine" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: '#F9F7F3', border: '1.5px solid rgba(184,134,11,0.2)', color: '#1A1A1A' }}
                    onFocus={(e) => { e.target.style.borderColor = '#B8860B'; e.target.style.background = '#fff'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(184,134,11,0.2)'; e.target.style.background = '#F9F7F3'; }} />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium" style={{ color: '#444' }}>Tell us about your goals</label>
                  <textarea rows={4} value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })}
                    placeholder="Why do you want to study abroad? What are your career aspirations?"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: '#F9F7F3', border: '1.5px solid rgba(184,134,11,0.2)', color: '#1A1A1A' }}
                    onFocus={(e) => { e.target.style.borderColor = '#B8860B'; e.target.style.background = '#fff'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(184,134,11,0.2)'; e.target.style.background = '#F9F7F3'; }} />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)}
                  className="px-6 py-3 rounded-xl text-sm font-medium"
                  style={{ background: '#F4F1EB', border: '1.5px solid #DDD8CE', color: '#444' }}>
                  Back
                </button>
              ) : <div />}
              <button type="submit" className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff' }}>
                {step < 3 ? 'Continue' : 'Submit Application'} <ChevronRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
