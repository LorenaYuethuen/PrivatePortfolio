import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<CaseStudyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        {/* Footer */}
        <footer className="border-t border-[var(--border-light)] bg-[var(--bg-secondary)]">
          <div className="max-w-[1440px] mx-auto px-[120px] py-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--accent-gold)] flex items-center justify-center">
                  <span className="text-black">P</span>
                </div>
                <span className="text-[var(--text-primary)]">Portfolio</span>
              </div>
              
              <div className="text-[var(--text-secondary)] text-sm">
                © 2024 All rights reserved. Designed with passion.
              </div>
              
              <div className="flex items-center gap-6">
                <a 
                  href="#" 
                  className="text-[var(--text-secondary)] hover:text-[var(--neon-blue)] transition-colors"
                >
                  Privacy
                </a>
                <a 
                  href="#" 
                  className="text-[var(--text-secondary)] hover:text-[var(--neon-blue)] transition-colors"
                >
                  Terms
                </a>
                <a 
                  href="#" 
                  className="text-[var(--text-secondary)] hover:text-[var(--neon-blue)] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
