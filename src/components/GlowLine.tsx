interface GlowLineProps {
  width?: string;
  className?: string;
}

export function GlowLine({ width = '120px', className = '' }: GlowLineProps) {
  return (
    <div 
      className={`h-[2px] bg-[var(--neon-blue)] glow-neon-blue ${className}`}
      style={{ width }}
    />
  );
}
