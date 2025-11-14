import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeType = 'dopamine' | 'pastel' | 'tropical' | 'european' | 'wabisabi';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('dopamine');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeType;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage and apply to document
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export const themes = {
  dopamine: {
    name: '科技多巴胺',
    nameEn: 'Dopamine Tech',
    description: '亮色、激活、多层渐变',
    colors: {
      primary: '#FF6EC7',
      secondary: '#00C7FF',
      accent: '#FFED4A',
      purple: '#A06BFF',
    },
  },
  pastel: {
    name: '科技马卡龙',
    nameEn: 'Soft Tech Pastel',
    description: '柔色、可爱但高端、现代',
    colors: {
      primary: '#CFF8FF',
      secondary: '#FADDE1',
      accent: '#E1D5FA',
      light: '#F8F8F9',
    },
  },
  tropical: {
    name: '南洋东南亚风',
    nameEn: 'Tropical Tech',
    description: '温暖 + 现代 + 设计感',
    colors: {
      primary: '#3C6E71',
      secondary: '#5A4635',
      accent: '#FF8A52',
      blue: '#2A9D8F',
      sand: '#EFE9DA',
    },
  },
  european: {
    name: '法式莫兰迪',
    nameEn: 'European Calm',
    description: '高级、冷静、耐看',
    colors: {
      primary: '#8FA29A',
      secondary: '#C7BFB7',
      accent: '#D7C4C0',
      dark: '#2B3A42',
    },
  },
  wabisabi: {
    name: '东方侘寂',
    nameEn: 'Wabi-Sabi',
    description: '极简、质朴、温润',
    colors: {
      primary: '#A9A39C',
      secondary: '#7A6E6A',
      accent: '#E8E3DA',
      dark: '#2B3D41',
      sand: '#D9D2C5',
    },
  },
};
