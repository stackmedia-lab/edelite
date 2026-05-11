import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }} className="flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div
          className="text-8xl font-bold mb-4"
          style={{ fontFamily: 'Playfair Display, serif', background: 'linear-gradient(135deg, #B8860B, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
        >
          404
        </div>
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
          Page Not Found
        </h2>
        <p className="mb-8 leading-relaxed" style={{ color: '#6B6B6B' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #B8860B, #C9A84C)', color: '#fff', boxShadow: '0 6px 20px rgba(184,134,11,0.25)' }}
        >
          Back to Home <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
