'use client';
import Link from 'next/link';
import { ArrowDown, Star, Users, Award, BookOpen, ChevronRight } from 'lucide-react';

const services = [
  { title: 'Profile Building', desc: 'Building your profile goes beyond grades. Showcase your passions through activities, essays, and experiences that set you apart.', href: '/services/profile-building', icon: '✦' },
  { title: 'Common App', desc: 'The Common App streamlines college applications in the US, offering a one-stop platform for students applying to multiple universities.', href: '/services/common-app', icon: '◈' },
  { title: 'IVY Universities', desc: 'US Ivy League colleges are known for their academic excellence and exclusivity. We guide you through every step of the process.', href: '/services/ivy-universities', icon: '◎' },
  { title: 'SAT Preparation', desc: 'Expert SAT coaching with proven strategies to help you achieve your target score for admission to top universities worldwide.', href: '/services/sat-preparation', icon: '⬡' },
];

const blogs = [
  { tag: 'News', title: '5 Fully Funded Undergraduate Scholarships in the UK for 2026 Explained', slug: '5-fully-funded-undergraduate-scholarships-in-the-uk-for-2026-explained', time: '1 week ago', img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_27_at_1_36_41_PM_eba8f43cba.jpeg' },
  { tag: 'Quality Life', title: 'How Pakistani Students Can Get PR After Studying Abroad — Country-by-Country Comparison', slug: 'how-pakistani-students-can-get-pr-after-studying-abroad-country-by-country-comparison', time: '1 month ago', img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_02_at_1_42_35_PM_8edecdd27f.jpeg' },
  { tag: 'Universities', title: 'LUMS Recognized Globally Across Multiple Disciplines in QS 2026 Rankings', slug: 'lums-recognized-globally-across-multiple-disciplines-in-qs-2026-rankings', time: '1 month ago', img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_03_30_at_12_43_16_PM_c8bde091de.jpeg' },
];

const stats = [
  { value: '500+', label: 'Students Guided', icon: Users },
  { value: '95%', label: 'Acceptance Rate', icon: Star },
  { value: '50+', label: 'Partner Universities', icon: Award },
  { value: '10+', label: 'Years Experience', icon: BookOpen },
];

const videos = ['ehdtslOjOqg', '4OFOoMMLgrM', 'JHP2V1cj8OU', 'Q-Nh0mGH3LU'];
const uniLogos = Array.from({ length: 50 }, (_, i) => i + 1);

export default function HomePage() {
  return (
    <div style={{ background: '#FAFAF8' }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FBF8F2 0%, #F5EDD8 50%, #FBF8F2 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-60" />
        {/* Soft gold orbs */}
        <div className="absolute rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ width: 600, height: 600, background: 'radial-gradient(circle, #E8C84A, transparent)', top: '-10%', right: '-5%' }} />
        <div className="absolute rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ width: 400, height: 400, background: 'radial-gradient(circle, #C9A84C, transparent)', bottom: '10%', left: '-5%' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
            style={{ background: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.25)', color: '#B8860B' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" style={{ animation: 'pulse 2s infinite' }} />
            Now Accepting Applications for 2025–26
          </div>

          <h1 className="mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,7vw,5.5rem)', fontWeight: 800, color: '#1A1A1A' }}>
            Build the Future{' '}
            <span style={{ background: 'linear-gradient(90deg, #B8860B, #C9A84C, #B8860B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              You Deserve
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed" style={{ color: '#5A5A5A' }}>
            Welcome to Edify Elite, where we help you succeed in gaining admission to top-notch universities.
            Our mission is to help ambitious students realize their academic and career aspirations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply" className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 32px rgba(184,134,11,0.3)' }}>
              Start Free Assessment
            </Link>
            <Link href="/about-us" className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.3)', color: '#1A1A1A', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              Learn More
            </Link>
          </div>

          <a href="#about" className="mt-16 flex flex-col items-center gap-2 text-xs opacity-50" style={{ color: '#B8860B' }}>
            <span>Scroll</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#fff', borderTop: '1px solid rgba(184,134,11,0.12)', borderBottom: '1px solid rgba(184,134,11,0.12)', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}>
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-3"><Icon size={22} style={{ color: '#B8860B' }} /></div>
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#B8860B' }}>{value}</div>
              <div className="text-xs uppercase tracking-widest" style={{ color: '#9A9A9A' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl opacity-20 blur-2xl"
              style={{ background: 'linear-gradient(135deg, #C9A84C, transparent)' }} />
            <img src="https://edifyelite.com.pk/_next/image?url=%2Fimages%2Fwhy.webp&w=1920&q=75"
              alt="Why Choose Edify Elite"
              className="relative rounded-2xl w-full object-cover"
              style={{ border: '1.5px solid rgba(184,134,11,0.18)', maxHeight: 500, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#B8860B' }}>About Edify Elite</div>
            <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Dream Big. Tell Your Story.{' '}
              <span style={{ color: '#B8860B' }}>Get Accepted.</span>
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: '#5A5A5A' }}>
              Edify Elite is committed to helping high school students reach their academic goals. Our team comprises experienced educators and accomplished college alumni, dedicated to assisting students in attaining their best potential and confidently navigating the college admissions process.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Improved Application', 'Streamlined Process', 'Confidence Building', 'Enhanced Profiles', 'Common App Mastery', 'Dream School Investment'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#444' }}>
                  <span style={{ color: '#B8860B' }}>✓</span> {item}
                </div>
              ))}
            </div>
            <Link href="/apply" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff' }}>
              Start Your Application <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── UNIVERSITY MARQUEE ── */}
      <section className="py-12 overflow-hidden" style={{ background: '#F4F1EB', borderTop: '1px solid rgba(184,134,11,0.1)', borderBottom: '1px solid rgba(184,134,11,0.1)' }}>
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#B8860B' }}>Our Students Are Accepted At</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex items-center animate-marquee" style={{ width: 'max-content' }}>
            {[...uniLogos, ...uniLogos].map((n, i) => (
              <div key={i} className="flex items-center justify-center mx-4 rounded-lg"
                style={{ width: 80, height: 50, background: '#fff', border: '1px solid rgba(184,134,11,0.12)', flexShrink: 0, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                <img src={`https://edifyelite.com.pk/images/uni-logos/${n}.png`} alt={`University ${n}`}
                  style={{ maxWidth: 64, maxHeight: 38, objectFit: 'contain', opacity: 0.7 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>What We Can Offer</div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Everything You Need to{' '}
              <span style={{ color: '#B8860B' }}>Apply to College</span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: '#6B6B6B' }}>
              Get connected with everything you need — from financial aid and scholarships to expert guidance from counselors, advisors, and mentors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href}>
                <div className="group h-full p-6 rounded-2xl cursor-pointer"
                  style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.15)', transition: 'all 0.3s', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(184,134,11,0.45)'; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 12px 32px rgba(184,134,11,0.14)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(184,134,11,0.15)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: 'rgba(184,134,11,0.08)', color: '#B8860B' }}>{s.icon}</div>
                  <h3 className="font-semibold text-lg mb-3" style={{ color: '#1A1A1A' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6B6B' }}>{s.desc}</p>
                  <div className="flex items-center gap-1 text-sm font-medium" style={{ color: '#B8860B' }}>
                    Read More <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #F5EDD8 0%, #EDE4CC 100%)', borderTop: '1px solid rgba(184,134,11,0.15)', borderBottom: '1px solid rgba(184,134,11,0.15)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            Your Comprehensive College{' '}
            <span style={{ color: '#B8860B' }}>Application Resource</span>
          </h2>
          <p className="mb-8 text-lg" style={{ color: '#5A5A5A' }}>
            It&apos;s time to go, and we&apos;ll be with you every step of the way.
          </p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 8px 32px rgba(184,134,11,0.28)' }}>
            Apply Free Assessment <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: '#B8860B' }}>Read Our Articles</div>
              <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>Latest From the Blog</h2>
            </div>
            <Link href="/blog" className="flex items-center gap-2 text-sm font-medium" style={{ color: '#B8860B' }}>
              See all articles <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}`}>
                <article className="group rounded-2xl overflow-hidden"
                  style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.12)', transition: 'all 0.3s', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 14px 36px rgba(184,134,11,0.13)'; el.style.borderColor = 'rgba(184,134,11,0.35)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; el.style.borderColor = 'rgba(184,134,11,0.12)'; }}>
                  <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                    <img src={b.img} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1.06)'; }}
                      onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1)'; }} />
                  </div>
                  <div className="p-6">
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{ background: 'rgba(184,134,11,0.1)', color: '#B8860B' }}>{b.tag}</div>
                    <h3 className="font-semibold text-base leading-snug mb-3 line-clamp-2" style={{ color: '#1A1A1A' }}>{b.title}</h3>
                    <p className="text-xs" style={{ color: '#9A9A9A' }}>{b.time}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section className="py-24 px-6" style={{ background: '#F4F1EB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: '#B8860B' }}>Watch & Learn</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>Student Success Stories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videos.map((id) => (
              <div key={id} className="relative rounded-xl overflow-hidden"
                style={{ aspectRatio: '16/9', border: '1.5px solid rgba(184,134,11,0.18)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <iframe src={`https://www.youtube.com/embed/${id}`} title={`Video ${id}`}
                  className="w-full h-full" allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDIFY GROUP ── */}
      <section className="py-24 px-6" style={{ background: '#fff', borderTop: '1px solid rgba(184,134,11,0.12)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: '#B8860B' }}>The Edify Family</div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>Study Abroad Consultants</h2>
            <p className="max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B6B6B' }}>
              At Edify, we specialize in providing expert consultancy services that support students through every stage of their academic journey — from guidance on university selection to visa processing and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Edify Elite', desc: 'SAT prep, IVY admissions & profile building for US universities.', href: '/', icon: '🎓' },
              { name: 'Edify Prep', desc: 'Comprehensive test preparation including IELTS, PTE and more.', href: 'https://edifyprep.com', icon: '📚' },
              { name: 'Edify Group', desc: 'Full overseas education consultancy — counselling, visa & beyond.', href: 'https://edify.pk', icon: '🌍' },
            ].map((p) => (
              <a key={p.name} href={p.href} className="block p-8 rounded-2xl"
                style={{ background: '#FAFAF8', border: '1.5px solid rgba(184,134,11,0.15)', transition: 'all 0.3s', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(184,134,11,0.4)'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 32px rgba(184,134,11,0.12)'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(184,134,11,0.15)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; }}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>{p.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
