import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, Clock, User } from 'lucide-react';

type Blog = { tag: string; title: string; time: string; author: string; img: string; content: string };

const blogs: Record<string, Blog> = {
  '5-fully-funded-undergraduate-scholarships-in-the-uk-for-2026-explained': {
    tag: 'News', title: '5 Fully Funded Undergraduate Scholarships in the UK for 2026 Explained',
    time: '1 week ago', author: 'Admin',
    img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_27_at_1_36_41_PM_eba8f43cba.jpeg',
    content: `The United Kingdom remains one of the most sought-after destinations for international students. In 2026, several prestigious scholarships cover full tuition, accommodation, and living expenses.\n\nThe Chevening Scholarship is the UK government flagship international scholarship programme, funded by the Foreign, Commonwealth and Development Office. It offers fully funded awards for outstanding professionals and covers tuition fees, living allowance, and return airfare.\n\nThe Commonwealth Scholarship is designed for students from Commonwealth countries pursuing postgraduate study in the UK. It is funded by the UK government and covers tuition fees, airfare, and living costs.\n\nThe Rhodes Scholarship at Oxford University is one of the oldest and most prestigious international scholarship programmes in the world. It provides full funding for two or three years of study at Oxford.\n\nThe Clarendon Scholarship at the University of Oxford is awarded to graduate students who demonstrate outstanding academic achievement. It covers full university fees plus a generous living allowance.\n\nThe Gates Cambridge Scholarship is funded by the Bill and Melinda Gates Foundation and enables exceptional applicants from outside the UK to pursue a postgraduate degree at the University of Cambridge.`
  },
  'how-pakistani-students-can-get-pr-after-studying-abroad-country-by-country-comparison': {
    tag: 'Quality Life', title: 'How Pakistani Students Can Get PR After Studying Abroad — Country-by-Country Comparison',
    time: '1 month ago', author: 'Admin',
    img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_02_at_1_42_35_PM_8edecdd27f.jpeg',
    content: `For Pakistani students studying abroad, understanding the path to permanent residency is crucial. Different countries offer varying routes and timelines.\n\nCanada offers one of the most straightforward pathways. After graduating, students can apply for a Post-Graduation Work Permit. After gaining work experience, Express Entry is the primary route to PR, typically taking 6–12 months.\n\nAustralia has a Temporary Graduate Visa that allows students to stay and work after graduation. The duration depends on your qualification level. General Skilled Migration or employer-sponsored pathways then lead to PR.\n\nGermany allows international graduates to stay for 18 months to find a job. Once employed, the EU Blue Card is a common route to settlement, with eligibility for permanent residency after 33 months.\n\nThe Netherlands offers a one-year Orientation Year Visa after graduation. Highly Skilled Migrant status can then lead to permanent residency after five years of continuous legal stay.\n\nThe United Kingdom introduced the Graduate Route Visa allowing two years of post-study work (three years for PhD graduates). The path to settlement requires employer sponsorship and several years of skilled employment.`
  },
  'lums-recognized-globally-across-multiple-disciplines-in-qs-2026-rankings': {
    tag: 'Universities', title: 'LUMS Recognized Globally Across Multiple Disciplines in QS 2026 Rankings',
    time: '1 month ago', author: 'Admin',
    img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_03_30_at_12_43_16_PM_c8bde091de.jpeg',
    content: `The Lahore University of Management Sciences has secured global recognition across multiple academic disciplines in the QS World University Rankings by Subject 2026.\n\nLUMS has ranked within the global top 500 across several subject areas, including Business and Management Studies, Economics and Econometrics, and Computer Science. This reflects the university's commitment to academic excellence and research output.\n\nThe QS Rankings are widely regarded as one of the most authoritative assessments of university performance worldwide. Inclusion demonstrates measurable impact in research citations, employer reputation, and academic peer recognition.\n\nFor Pakistani students, this is particularly encouraging. LUMS graduates are now better positioned when applying to top international universities for postgraduate study, as admission committees look favourably on applicants from globally recognised institutions.\n\nEdify Elite encourages students to explore how a strong undergraduate foundation at a recognised Pakistani institution can complement their international university applications.`
  },
  'sat-pakistan-everything-you-need-to-know': {
    tag: 'Education', title: 'SAT Pakistan: Everything You Need to Know About the SAT Exam',
    time: '2 months ago', author: 'Admin',
    img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_27_at_1_36_41_PM_eba8f43cba.jpeg',
    content: `The SAT is a standardised test widely used for college admissions in the United States. For Pakistani students aspiring to study at top American universities, understanding the SAT is essential.\n\nThe SAT is divided into two main sections: Evidence-Based Reading and Writing, and Math. The total score ranges from 400 to 1600. Most top US universities accept both the SAT and ACT, and a strong SAT score significantly strengthens your application.\n\nPakistani students can register for the SAT through the College Board website. Test centres are available in major cities including Karachi, Lahore, and Islamabad. Register well in advance as seats fill up quickly.\n\nFor preparation, a structured study plan spanning 3–6 months is recommended. Focus on official College Board practice tests, Khan Academy's free SAT prep, and targeted work on your weaker sections.\n\nEdify Elite offers comprehensive SAT preparation courses with expert tutors who understand what top universities expect. Our students consistently achieve scores above the 1400 mark.`
  },
  'top-scholarships-pakistani-students-usa': {
    tag: 'Scholarships', title: 'Top 10 Scholarships for Pakistani Students to Study in the USA',
    time: '2 months ago', author: 'Admin',
    img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_04_02_at_1_42_35_PM_8edecdd27f.jpeg',
    content: `Studying in the United States is a dream for many Pakistani students, but the cost can be daunting. Fortunately, numerous scholarships can make this dream a reality.\n\nThe Fulbright Scholarship is the most prestigious exchange programme funded by the US government. It covers full tuition, living expenses, and travel. Pakistani students can apply for both undergraduate and graduate programmes.\n\nMany Ivy League and top universities offer need-blind admissions for international students, meaning financial need does not affect admission decisions. Harvard, Princeton, and MIT meet 100% of demonstrated financial need for all admitted students.\n\nUSAID-funded scholarships provide opportunities for students in specific fields like agriculture, health, and technology. These are competitive but offer full funding packages.\n\nState Department Exchange Programmes offer various scholarship opportunities for students and professionals from developing countries.\n\nThe key to winning scholarships is a strong academic profile combined with compelling essays and a clear sense of purpose. Edify Elite guides students through every step of the scholarship application process.`
  },
  'common-app-guide-2026-standout-college-essay': {
    tag: 'Admissions', title: 'Common App Guide 2026: How to Write a Standout College Essay',
    time: '3 months ago', author: 'Admin',
    img: 'https://admin.edifyelite.com.pk/uploads/Whats_App_Image_2026_03_30_at_12_43_16_PM_c8bde091de.jpeg',
    content: `The Common App personal essay is one of the most important components of your US college application. It is your opportunity to speak directly to admissions officers and show them who you are beyond grades and test scores.\n\nThe Common App offers seven essay prompts for the 2026 cycle. Choose the prompt that allows you to tell the most authentic and compelling story about yourself. The prompt is just a starting point — the essay is really about you.\n\nStart early. Ideally begin brainstorming in the summer before your senior year. The best essays tend to be specific, personal, and reflective rather than general or boastful.\n\nShow, do not tell. Instead of writing that you are a leader, describe a specific moment where you demonstrated leadership and let the reader draw their own conclusion. Concrete details make essays memorable.\n\nRevision is essential. Your first draft will not be your best. Write freely, then revise multiple times. Ask teachers, counsellors, or Edify Elite advisors to provide feedback.\n\nThe ideal essay length is 550–650 words. Every word should earn its place. Avoid clichés, summarising your CV, or writing what you think admissions officers want to hear. Be genuine, be specific, and be yourself.`
  },
};

export function generateStaticParams() {
  return Object.keys(blogs).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const blog = blogs[params.slug];
  return {
    title: blog ? `${blog.title} | Edify Elite` : 'Blog | Edify Elite',
    description: blog ? blog.content.slice(0, 150) : '',
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs[params.slug];

  if (!blog) {
    return (
      <div style={{ background: '#0A0A0F', minHeight: '100vh' }} className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Post Not Found</h1>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm" style={{ color: '#C9A84C' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#0A0A0F' }}>
      <section className="relative pt-32 pb-16 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0D1529 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-8" style={{ color: '#C9A84C', opacity: 0.75 }}>
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}>
            {blog.tag}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{blog.title}</h1>
          <div className="flex items-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            <span className="flex items-center gap-2"><User size={14} /> {blog.author}</span>
            <span className="flex items-center gap-2"><Clock size={14} /> {blog.time}</span>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden mb-12" style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
            <img src={blog.img} alt={blog.title} className="w-full object-cover" style={{ maxHeight: 460 }} />
          </div>
          <article>
            {blog.content.split('\n\n').map((para, i) => (
              <p key={i} className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', lineHeight: 1.85 }}>
                {para}
              </p>
            ))}
          </article>
          <div className="mt-12 p-8 rounded-2xl text-center" style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)' }}>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Start Your <span style={{ color: '#C9A84C' }}>Journey?</span>
            </h3>
            <p className="mb-6 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Get a free assessment from our expert counsellors and take the first step toward your dream university.
            </p>
            <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}>
              Get Free Assessment <ChevronRight size={16} />
            </Link>
          </div>
          <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm" style={{ color: '#C9A84C' }}>
              <ArrowLeft size={14} /> All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
