import { ArrowRight, Sparkles, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlowLine } from '../components/GlowLine';
import { ProjectCard } from '../components/ProjectCard';

const featuredProjects = [
  {
    id: 'ai-dashboard',
    title: 'AI Analytics Dashboard',
    description: 'Real-time data visualization platform with predictive analytics and custom reporting',
    tags: ['UI/UX', 'Dashboard', 'AI'],
    image: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMDUzMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    description: 'Intuitive financial management with smart budgeting and seamless transactions',
    tags: ['Mobile', 'Fintech', 'Design System'],
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyOTgzOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform Redesign',
    description: 'Complete redesign of enterprise software with focus on user experience',
    tags: ['Web', 'SaaS', 'Redesign'],
    image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MzA2MjY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[900px] flex items-center justify-center gradient-radial noise-overlay overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--neon-blue)] opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--accent-gold)] opacity-10 blur-[100px] rounded-full" />
        
        <div className="relative z-10 flex flex-col items-center text-center gap-8 px-12 max-w-6xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-dark)] border border-[var(--border-light)]">
            <Sparkles className="w-4 h-4 text-[var(--neon-blue)]" />
            <span className="text-sm text-[var(--text-secondary)]">Available for new projects</span>
          </div>
          
          <h1 className="text-[var(--text-primary)]">
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-2xl text-[var(--text-secondary)] max-w-2xl">
            Product designer specializing in user-centered design for web and mobile applications
          </p>
          
          <div className="flex items-center gap-6 mt-4">
            <Link 
              to="/projects"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--neon-blue)] text-black hover:shadow-[0_0_48px_rgba(0,199,255,0.4)] transition-all"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="#contact"
              className="px-8 py-4 rounded-xl bg-[#1A1A1A] border border-[var(--border-light)] text-[var(--text-primary)] hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
            >
              Get in Touch
            </a>
          </div>
          
          <GlowLine width="120px" className="mt-8" />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-[120px]">
        <div className="flex items-center gap-20">
          {/* Left Text */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-[var(--text-primary)]">
              Design that drives
              <br />
              business results
            </h2>
            <p className="text-[var(--text-secondary)]">
              With over 5 years of experience in product design, I specialize in creating 
              intuitive and visually stunning digital products. My approach combines strategic 
              thinking with meticulous attention to detail, ensuring every design decision 
              serves both user needs and business goals.
            </p>
            <p className="text-[var(--text-secondary)]">
              I've worked with startups and established companies across fintech, healthcare, 
              and SaaS industries, delivering designs that not only look great but also 
              significantly improve user engagement and conversion rates.
            </p>
          </div>
          
          {/* Right Card */}
          <div className="flex-1">
            <div className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-8 card-shadow">
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--neon-blue)]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--neon-blue)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">Excellence in Design</h4>
                    <p className="text-[var(--text-secondary)] text-base">
                      Multiple awards and recognition for outstanding digital experiences
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-gold)]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[var(--accent-gold)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">User-Centered Approach</h4>
                    <p className="text-[var(--text-secondary)] text-base">
                      Deep research and testing to ensure designs meet real user needs
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--border-light)]">
                  <div>
                    <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">50+</div>
                    <div className="text-sm text-[var(--text-secondary)]">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">30+</div>
                    <div className="text-sm text-[var(--text-secondary)]">Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">5</div>
                    <div className="text-sm text-[var(--text-secondary)]">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] pb-[120px]">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-[var(--text-primary)] mb-4">Featured Projects</h2>
            <GlowLine width="120px" className="mx-auto" />
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--border-light)] text-[var(--text-primary)] hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] pb-[120px]">
        <div className="relative bg-gradient-to-br from-[var(--card-dark)] to-[var(--bg-secondary)] border border-[var(--border-light)] rounded-3xl p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--neon-blue)] opacity-5 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-gold)] opacity-5 blur-[80px] rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-[var(--text-primary)] mb-6">Let's work together</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can create something amazing together.
            </p>
            <a 
              href="mailto:hello@portfolio.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--neon-blue)] text-black hover:shadow-[0_0_48px_rgba(0,199,255,0.4)] transition-all"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
