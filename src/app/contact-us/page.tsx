'use client';
import type { Metadata } from 'next';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '3rd Floor, Edify Building, S1/S2, Susan Road, Madina Town, Faisalabad' },
  { icon: Phone, label: 'Call Now', value: '+92 321 9823444', href: 'tel:+923219823444' },
  { icon: Mail, label: 'Email Us', value: 'samir.ali@edify.pk', href: 'mailto:samir.ali@edify.pk' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ background: '#0A0A0F' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0D1529 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute rounded-full blur-3xl opacity-15" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>Get In Touch</div>
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>Have questions about college admissions? Need expert guidance? We are here to help you achieve your college dreams.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="p-8 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(201,168,76,0.12)' }}>
                <Icon size={22} style={{ color: '#C9A84C' }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#C9A84C' }}>{label}</h3>
              {href ? (
                <a href={href} className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{value}</a>
              ) : (
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>Contact Us</div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Get in touch with</h2>
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#C9A84C' }}>us today</h2>

            {sent && (
              <div className="mb-6 p-4 rounded-xl text-sm" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80' }}>
                ✓ Message sent! We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+92 300 0000000' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>{field.label}</label>
                  <input
                    type={field.type}
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#fff' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.6)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help you?"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#fff' }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.6)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
                Send Message <Send size={16} />
              </button>
            </form>

            <div className="mt-8">
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>Follow Us:</p>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook', href: 'https://www.facebook.com/edifyeliteivy', icon: 'f' },
                  { label: 'Instagram', href: 'https://www.instagram.com/edifyeliteofficial/', icon: '◎' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/edifyeliteofficial/', icon: 'in' },
                  { label: 'YouTube', href: 'https://www.youtube.com/@EDIFYGROUP', icon: '▶' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', color: '#C9A84C', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = '#C9A84C'; el.style.color = '#0A0A0F'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(201,168,76,0.1)'; el.style.color = '#C9A84C'; }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(201,168,76,0.15)', minHeight: 400 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13619.807918430846!2d73.1116333!3d31.4154491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268724e6e98c7%3A0x1937073a8fd0dc03!2sEdify%20Group%20Of%20Companies!5e0!3m2!1sen!2s!4v1716374726757!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
