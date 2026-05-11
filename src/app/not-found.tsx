import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh' }} className="flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div
          className="text-8xl font-bold mb-4"
          style={{ fontFamily: 'Playfair Display, serif', background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
        >
          404
        </div>
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Page Not Found</h2>
        <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97E)', color: '#0A0A0F' }}
        >
          Back to Home <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
