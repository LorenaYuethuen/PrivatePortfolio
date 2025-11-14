import { Link, useLocation } from 'react-router-dom';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-light)]">
      <div className="max-w-[1440px] mx-auto px-12 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] flex items-center justify-center">
            <span className="text-[var(--text-primary)]">P</span>
          </div>
          <span className="text-[var(--text-primary)]">Portfolio</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`transition-colors hover:text-[var(--theme-primary)] ${
              isActive('/') ? 'text-[var(--theme-primary)]' : 'text-[var(--text-secondary)]'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`transition-colors hover:text-[var(--theme-primary)] ${
              isActive('/projects') ? 'text-[var(--theme-primary)]' : 'text-[var(--text-secondary)]'
            }`}
          >
            Projects
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors hover:text-[var(--theme-primary)] ${
              isActive('/about') ? 'text-[var(--theme-primary)]' : 'text-[var(--text-secondary)]'
            }`}
          >
            About
          </Link>
          
          <ThemeSwitcher />
          
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-xl bg-[var(--theme-primary)] text-[var(--text-primary)] hover:shadow-[0_0_32px_var(--theme-primary)] transition-all"
            style={{ color: 'var(--bg-primary)' }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
