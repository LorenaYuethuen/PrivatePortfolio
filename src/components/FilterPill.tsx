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
          ? 'bg-[var(--theme-primary)] border-[var(--theme-primary)] shadow-[0_0_24px_var(--theme-primary)]' 
          : 'bg-[var(--bg-secondary)] border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--theme-primary)] hover:shadow-[0_0_16px_var(--theme-primary)]'
      }`}
      style={active ? { color: 'var(--bg-primary)' } : {}}
    >
      {label}
    </button>
  );
}
