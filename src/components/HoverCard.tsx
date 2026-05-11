'use client';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverBorder?: string;
  hoverBg?: string;
}

export function HoverCard({ children, className = '', style = {}, hoverBorder = 'rgba(201,168,76,0.35)', hoverBg }: HoverCardProps) {
  return (
    <div
      className={className}
      style={{ transition: 'all 0.3s', ...style }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = hoverBorder;
        el.style.transform = 'translateY(-4px)';
        if (hoverBg) el.style.background = hoverBg;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = style.borderColor as string || 'rgba(201,168,76,0.12)';
        el.style.transform = 'translateY(0)';
        if (hoverBg) el.style.background = style.background as string || 'rgba(255,255,255,0.03)';
      }}
    >
      {children}
    </div>
  );
}
