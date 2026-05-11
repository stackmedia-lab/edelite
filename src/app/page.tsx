'use client';
import Link from 'next/link';
import { ArrowDown, Star, Users, Award, BookOpen, ChevronRight } from 'lucide-react';

const services = [
  { title: 'Profile Building', desc: 'Building your profile goes beyond grades. Showcase your passions through activities and essays.', href: '/services/profile-building', icon: '✦' },
  { title: 'Common App', desc: 'The Common App streamlines college applications in the US, offering a one-stop platform for students.', href: '/services/common-app', icon: '◈' },
  { title: 'IVY Universities', desc: 'US colleges known for academic excellence and exclusivity, creating an inspiring environment.', href: '/services/ivy-universities', icon: '◎' },
  { title: 'SAT Preparation', desc: 'Expert SAT coaching with proven strategies to help you achieve your target score for top universities.', href: '/services/sat-preparation', icon: '⬡' },
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

const GoldText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#C9A84C' }}>{children}</span>
);

export default function HomePage() {
  return (
    <div style={{ background: '#0A0A0F' }}>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0D1529 50%, #0A0A0F 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute rounded-full blur-3xl opacity-20 pointer-events-none" style={{ width: 600, height: 600, background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-10%', right: '-5%' }} />
        <div className="absolute rounded-full blur-3xl opacity-10 pointer-events-none" style={{ width: 400, height: 400, background: 'radial-gradient(circle, #C9A84C, transparent)', bottom: '10%', left: '-5%' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://edifyelite.com.pk/_next/image?url=%2Fimages%2Fhero2.jpg&w=3840&q=75)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', color: '#C9A84C' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'pulse 2s infinite' }} />
            Now Accepting Applications for 2025–26
          </div>
          <h1 className="mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 800, color: '#fff' }}>
            Build the Future{' '}
            <span style={{ background: 'linear-gradient(90deg, #C9A84C, #E2C97E, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>You Deserve</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Welcome to Edify Elite, where we help you succeed in gaining admission to top-notch universities. Our mission is to help ambitious students like you realize their academic and career aspirations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply" className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F', boxShadow: '0 8px 32px rgba(201,168,76,0.35)' }}>
              Start Free Assessment
            </Link>
            <Link href="/about-us" className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}>
              Learn More
            </Link>
          </div>
          <a href="#about" className="mt-16 flex flex-col items-center gap-2 text-xs opacity-40" style={{ color: '#C9A84C' }}>
            <span>Scroll</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'rgba(201,168,76,0.04)', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-3"><Icon size={22} style={{ color: '#C9A84C' }} /></div>
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#C9A84C' }}>{value}</div>
              <div className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl" style={{ background: 'linear-gradient(135deg, #C9A84C, transparent)' }} />
            <img src="https://edifyelite.com.pk/_next/image?url=%2Fimages%2Fwhy.webp&w=1920&q=75" alt="Why Choose Edify Elite" className="relative rounded-2xl w-full object-cover" style={{ border: '1px solid rgba(201,168,76,0.2)', maxHeight: 500 }} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>About Edify Elite</div>
            <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Dream Big. Tell Your Story. <GoldText>Get Accepted.</GoldText>
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Edify Elite is committed to helping high school students reach their academic goals. Our team comprises experienced educators and accomplished college alumni. We are dedicated to assisting students in attaining their best potential and confidently navigating the college admissions process.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Improved Application', 'Streamlined Process', 'Confidence Building', 'Enhanced Profiles', 'Common App Mastery', 'Dream School Investment'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#C9A84C' }}>✓</span> {item}
                </div>
              ))}
            </div>
            <Link href="/apply" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
              Start Your Application <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* UNIVERSITY MARQUEE */}
      <section className="py-12 overflow-hidden" style={{ borderTop: '1px solid rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C' }}>Our Students Are Accepted At</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex items-center animate-marquee" style={{ width: 'max-content' }}>
            {[...uniLogos, ...uniLogos].map((n, i) => (
              <div key={i} className="flex items-center justify-center mx-4 rounded-lg" style={{ width: 80, height: 50, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.1)', flexShrink: 0, overflow: 'hidden' }}>
                <img
                  src={`https://edifyelite.com.pk/images/uni-logos/${n}.png`}
                  alt={`University ${n}`}
                  style={{ maxWidth: 64, maxHeight: 38, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.5 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>What We Can Offer</div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Everything You Need to <GoldText>Apply to College</GoldText>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Get connected with everything you need to apply to college, research financial aid and scholarships, and get advice from counselors, advisors and mentors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href}>
                <div className="group h-full p-6 rounded-2xl cursor-pointer" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(201,168,76,0.4)'; el.style.background = 'rgba(201,168,76,0.07)'; el.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(201,168,76,0.12)'; el.style.background = 'rgba(255,255,255,0.03)'; el.style.transform = 'translateY(0)'; }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}>{s.icon}</div>
                  <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.desc}</p>
                  <div className="flex items-center gap-1 text-sm font-medium" style={{ color: '#C9A84C' }}>Read More <ChevronRight size={14} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.03) 100%)', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Your Comprehensive College <GoldText>Application Resource</GoldText>
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            It&apos;s time to go, and we&apos;ll be with you every step of the way.
          </p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F', boxShadow: '0 8px 32px rgba(201,168,76,0.3)' }}>
            Apply Free Assessment <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* BLOGS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>Read Our Articles</div>
              <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Latest From the Blog</h2>
            </div>
            <Link href="/blog" className="flex items-center gap-2 text-sm font-medium" style={{ color: '#C9A84C' }}>See more articles <ChevronRight size={14} /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}`}>
                <article className="group rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.1)', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(201,168,76,0.3)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.borderColor = 'rgba(201,168,76,0.1)'; }}>
                  <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                    <img src={b.img} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                      onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1)'; }} />
                  </div>
                  <div className="p-6">
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}>{b.tag}</div>
                    <h3 className="font-semibold text-base leading-snug mb-3 line-clamp-2">{b.title}</h3>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{b.time}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-24 px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>Watch & Learn</div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Student Success Stories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videos.map((id) => (
              <div key={id} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '16/9', border: '1px solid rgba(201,168,76,0.15)' }}>
                <iframe src={`https://www.youtube.com/embed/${id}`} title={`Video ${id}`} className="w-full h-full" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDIFY GROUP PROJECTS */}
      <section className="py-24 px-6" style={{ background: '#060608', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>The Edify Family</div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Study Abroad Consultants</h2>
            <p className="max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              At Edify, we specialize in providing expert consultancy services that support students through every stage of their academic journey — from guidance on university selection to visa processing and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Edify Elite', desc: 'SAT prep, IVY admissions & profile building for US universities.', href: '/', icon: '🎓' },
              { name: 'Edify Prep', desc: 'Comprehensive test preparation including IELTS, PTE and more.', href: 'https://edifyprep.com', icon: '📚' },
              { name: 'Edify Group', desc: 'Full overseas education consultancy — counselling, visa & beyond.', href: 'https://edify.pk', icon: '🌍' },
            ].map((p) => (
              <a key={p.name} href={p.href} className="block p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(201,168,76,0.35)'; el.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(201,168,76,0.12)'; el.style.transform = 'translateY(0)'; }}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{p.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
