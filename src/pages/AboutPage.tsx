import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { GlowLine } from '../components/GlowLine';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const skills = [
  { category: 'Design', items: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems'] },
  { category: 'Tools', items: ['Figma', 'Framer', 'Adobe Creative Suite', 'Principle'] },
  { category: 'Development', items: ['HTML/CSS', 'React', 'Tailwind', 'Git'] },
  { category: 'Soft Skills', items: ['Leadership', 'Communication', 'Problem Solving', 'Collaboration'] },
];

const experience = [
  {
    title: 'Senior Product Designer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading design initiatives for enterprise SaaS platform, managing team of 3 designers',
  },
  {
    title: 'Product Designer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Designed mobile-first experiences for fintech application with 500K+ users',
  },
  {
    title: 'UI/UX Designer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Worked with diverse clients on web and mobile projects across various industries',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="flex items-center gap-20">
          <div className="flex-1">
            <h1 className="text-[var(--text-primary)] mb-6">
              About Me
            </h1>
            <GlowLine width="120px" className="mb-8" />
            
            <div className="space-y-4">
              <p className="text-xl text-[var(--text-secondary)]">
                I'm a product designer passionate about creating meaningful digital experiences 
                that solve real problems. With a background in both design and front-end development, 
                I bring a unique perspective to every project.
              </p>
              <p className="text-xl text-[var(--text-secondary)]">
                My design philosophy centers on empathy, simplicity, and attention to detail. 
                I believe great design is invisible - it just works.
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <a 
                href="mailto:hello@portfolio.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--neon-blue)] text-black hover:shadow-[0_0_48px_rgba(0,199,255,0.4)] transition-all"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--border-light)] text-[var(--text-primary)] hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative rounded-3xl overflow-hidden card-shadow glow-neon-blue">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722159475082-0a2331580de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzAwMzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Workspace"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20 bg-[var(--bg-secondary)]/30">
        <div className="text-center mb-12">
          <h2 className="text-[var(--text-primary)] mb-4">Skills & Expertise</h2>
          <p className="text-xl text-[var(--text-secondary)]">
            A diverse skill set combining design, development, and strategy
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-6"
            >
              <h4 className="text-[var(--text-primary)] mb-4 pb-4 border-b border-[var(--border-light)]">
                {skillGroup.category}
              </h4>
              <ul className="space-y-3">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-blue)]" />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="text-center mb-12">
          <h2 className="text-[var(--text-primary)] mb-4">Experience</h2>
          <GlowLine width="120px" className="mx-auto" />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((job, index) => (
            <div 
              key={index}
              className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-8 hover:border-[var(--neon-blue)] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[var(--text-primary)] mb-2">{job.title}</h3>
                  <p className="text-[var(--accent-gold)]">{job.company}</p>
                </div>
                <span className="text-[var(--text-secondary)] text-sm px-4 py-2 bg-[var(--bg-secondary)] rounded-full">
                  {job.period}
                </span>
              </div>
              <p className="text-[var(--text-secondary)]">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20 mb-20">
        <div className="bg-gradient-to-br from-[var(--card-dark)] to-[var(--bg-secondary)] border border-[var(--border-light)] rounded-3xl p-16 text-center">
          <h2 className="text-[var(--text-primary)] mb-4">Let's Connect</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-light)] flex items-center justify-center hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
            >
              <Linkedin className="w-6 h-6 text-[var(--neon-blue)]" />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-light)] flex items-center justify-center hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
            >
              <Github className="w-6 h-6 text-[var(--neon-blue)]" />
            </a>
            <a 
              href="mailto:hello@portfolio.com"
              className="w-14 h-14 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-light)] flex items-center justify-center hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
            >
              <Mail className="w-6 h-6 text-[var(--neon-blue)]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
