'use client';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverBorder?: string;
  hoverBg?: string;
  hoverShadow?: string;
}

export function HoverCard({
  children,
  className = '',
  style = {},
  hoverBorder = 'rgba(184,134,11,0.4)',
  hoverBg,
  hoverShadow = '0 8px 30px rgba(184,134,11,0.12)',
}: HoverCardProps) {
  return (
    <div
      className={className}
      style={{ transition: 'all 0.3s', ...style }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = hoverBorder;
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = hoverShadow;
        if (hoverBg) el.style.background = hoverBg;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = (style.borderColor as string) || 'rgba(184,134,11,0.15)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = (style.boxShadow as string) || 'none';
        if (hoverBg) el.style.background = (style.background as string) || '';
      }}
    >
      {children}
    </div>
  );
}
