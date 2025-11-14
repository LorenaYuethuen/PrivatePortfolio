interface FilterPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterPill({ label, active = false, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full border transition-all ${
        active 
          ? 'bg-[var(--neon-blue)] border-[var(--neon-blue)] text-black shadow-[0_0_24px_rgba(0,199,255,0.3)]' 
          : 'bg-[#1A1B1F] border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--neon-blue)] hover:shadow-[0_0_16px_rgba(0,199,255,0.2)]'
      }`}
    >
      {label}
    </button>
  );
}
