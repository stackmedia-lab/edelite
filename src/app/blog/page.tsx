import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Edify Elite',
  description: 'Read our latest articles about studying abroad, scholarships, and college admissions.',
};

const blogs = [
  { tag: 'News', title: '5 Fully Funded Undergraduate Scholarships in the UK for 2026 Explained', slug: '5-fully-funded-undergraduate-scholarships-in-the-uk-for-2026-explained', time: '1 week ago', author: 'Admin', img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_27_at_1_36_41_PM_eba8f43cba.jpeg', excerpt: 'Discover the top fully funded scholarships available for undergraduate students in the UK for 2026.' },
  { tag: 'Quality Life', title: 'How Pakistani Students Can Get PR After Studying Abroad — Country-by-Country Comparison', slug: 'how-pakistani-students-can-get-pr-after-studying-abroad-country-by-country-comparison', time: '1 month ago', author: 'Admin', img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_02_at_1_42_35_PM_8edecdd27f.jpeg', excerpt: 'A comprehensive guide for Pakistani students looking to obtain permanent residency after completing their studies abroad.' },
  { tag: 'Universities', title: 'LUMS Recognized Globally Across Multiple Disciplines in QS 2026 Rankings', slug: 'lums-recognized-globally-across-multiple-disciplines-in-qs-2026-rankings', time: '1 month ago', author: 'Admin', img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_03_30_at_12_43_16_PM_c8bde091de.jpeg', excerpt: 'LUMS has been recognized across multiple disciplines in the prestigious QS World University Rankings 2026.' },
  { tag: 'Education', title: 'SAT Pakistan: Everything You Need to Know About the SAT Exam', slug: 'sat-pakistan-everything-you-need-to-know', time: '2 months ago', author: 'Admin', img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_27_at_1_36_41_PM_eba8f43cba.jpeg', excerpt: 'A complete guide to the SAT exam for Pakistani students — registration, preparation tips, and more.' },
  { tag: 'Scholarships', title: 'Top 10 Scholarships for Pakistani Students to Study in the USA', slug: 'top-scholarships-pakistani-students-usa', time: '2 months ago', author: 'Admin', img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_02_at_1_42_35_PM_8edecdd27f.jpeg', excerpt: 'Explore the best scholarship opportunities available for Pakistani students aspiring to study in the United States.' },
  { tag: 'Admissions', title: 'Common App Guide 2026: How to Write a Standout College Essay', slug: 'common-app-guide-2026-standout-college-essay', time: '3 months ago', author: 'Admin', img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_03_30_at_12_43_16_PM_c8bde091de.jpeg', excerpt: 'Tips and strategies to craft a compelling Common App essay that makes admissions officers take notice.' },
];

export default function BlogPage() {
  return (
    <div style={{ background: '#FAFAF8' }}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FBF8F2 0%, #F5EDD8 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, #E8C84A, transparent)', top: '-20%', right: '0' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8860B' }}>Insights & Articles</div>
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>Our Blog</h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#5A5A5A' }}>
            Reading blogs about studying abroad opens a window into real-life experiences, offering invaluable insights that guide and inspire future students.
          </p>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}`} className="group">
                <article className="rounded-2xl overflow-hidden h-full"
                  style={{ background: '#fff', border: '1.5px solid rgba(184,134,11,0.12)', transition: 'all 0.3s', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                    <img src={b.img} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start"
                      style={{ background: 'rgba(184,134,11,0.1)', color: '#B8860B' }}>{b.tag}</div>
                    <h2 className="font-semibold text-base leading-snug mb-3 line-clamp-2" style={{ color: '#1A1A1A' }}>{b.title}</h2>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: '#7A7A7A' }}>{b.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs" style={{ color: '#ABABAB' }}>{b.author} · {b.time}</span>
                      <span className="text-xs font-semibold" style={{ color: '#B8860B' }}>Read →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
