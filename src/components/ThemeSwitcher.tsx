import { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme, themes, ThemeType } from './ThemeContext';

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)] transition-all"
      >
        <Palette className="w-5 h-5" />
        <span className="hidden md:inline">主题</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-80 bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-4 shadow-2xl z-50">
            <div className="mb-4 pb-3 border-b border-[var(--border-light)]">
              <h3 className="text-[var(--text-primary)] mb-1">选择主题风格</h3>
              <p className="text-sm text-[var(--text-secondary)]">切换不同的设计风格</p>
            </div>
            
            <div className="space-y-2">
              {(Object.keys(themes) as ThemeType[]).map((themeKey) => {
                const themeInfo = themes[themeKey];
                const isActive = theme === themeKey;
                
                return (
                  <button
                    key={themeKey}
                    onClick={() => handleThemeChange(themeKey)}
                    className={`w-full text-left p-3 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-[var(--theme-primary)]/10 border-2 border-[var(--theme-primary)]' 
                        : 'bg-[var(--bg-secondary)] border-2 border-transparent hover:border-[var(--border-light)]'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[var(--text-primary)]">{themeInfo.name}</span>
                          <span className="text-xs text-[var(--text-secondary)]">{themeInfo.nameEn}</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-2">
                          {themeInfo.description}
                        </p>
                        <div className="flex gap-1.5">
                          {Object.values(themeInfo.colors).map((color, idx) => (
                            <div
                              key={idx}
                              className="w-6 h-6 rounded-md"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                      {isActive && (
                        <Check className="w-5 h-5 text-[var(--theme-primary)] flex-shrink-0 ml-2" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
