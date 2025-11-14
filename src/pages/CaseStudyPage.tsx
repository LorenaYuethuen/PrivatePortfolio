import { Clock, Users, Layers, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlowLine } from '../components/GlowLine';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const insights = [
  { title: 'User Pain Point', description: 'Complex navigation causing 45% drop-off rate' },
  { title: 'Market Gap', description: 'No mobile-first solution in the market' },
  { title: 'Opportunity', description: 'Streamlined flow could increase conversions by 60%' },
  { title: 'User Need', description: 'Quick access to key features within 2 taps' },
];

const userFlow = [
  { step: 'Discover', label: 'User lands on homepage' },
  { step: 'Explore', label: 'Browse features & benefits' },
  { step: 'Sign Up', label: 'Create account' },
  { step: 'Onboard', label: 'Complete profile setup' },
  { step: 'Engage', label: 'Start using core features' },
];

export function CaseStudyPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-6">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--neon-blue)] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>
      </div>

      {/* Project Cover */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-12 mb-20">
        <div className="flex items-center gap-20">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card-dark)] border border-[var(--border-light)] w-fit">
              <span className="text-sm text-[var(--neon-blue)]">Featured Project</span>
            </div>
            
            <h1 className="text-[var(--text-primary)]">
              AI Analytics Dashboard
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)]">
              A comprehensive data visualization platform that empowers teams to make 
              data-driven decisions with real-time insights and predictive analytics.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-[var(--neon-blue)]" />
                  <span className="text-sm text-[var(--text-secondary)]">Role</span>
                </div>
                <p className="text-[var(--text-primary)]">Lead Designer</p>
              </div>
              
              <div className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-[var(--accent-gold)]" />
                  <span className="text-sm text-[var(--text-secondary)]">Timeline</span>
                </div>
                <p className="text-[var(--text-primary)]">4 months</p>
              </div>
              
              <div className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Layers className="w-5 h-5 text-[var(--neon-blue)]" />
                  <span className="text-sm text-[var(--text-secondary)]">Tools</span>
                </div>
                <p className="text-[var(--text-primary)]">Figma, Framer</p>
              </div>
            </div>
          </div>
          
          {/* Right Mockup */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden card-shadow glow-neon-blue">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMDUzMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Goals */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20 border-b border-[var(--neon-blue)]/20">
        <div className="flex gap-20">
          <div className="flex-1">
            <h2 className="text-[var(--text-primary)] mb-6">The Problem</h2>
            <p className="text-[var(--text-secondary)] mb-4">
              Data teams were struggling with fragmented analytics tools that made it difficult 
              to get a holistic view of their data. The existing solutions were either too 
              complex for non-technical users or lacked the depth required for advanced analysis.
            </p>
            <p className="text-[var(--text-secondary)]">
              Key challenges included poor data visualization, lack of real-time updates, 
              and no collaborative features for team-based decision making.
            </p>
          </div>
          
          <div className="flex-1">
            <h2 className="text-[var(--text-primary)] mb-6">The Goals</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--neon-blue)]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--neon-blue)]" />
                </div>
                <p className="text-[var(--text-secondary)]">
                  Create an intuitive interface accessible to both technical and non-technical users
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--neon-blue)]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--neon-blue)]" />
                </div>
                <p className="text-[var(--text-secondary)]">
                  Implement real-time data visualization with customizable dashboards
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--neon-blue)]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--neon-blue)]" />
                </div>
                <p className="text-[var(--text-secondary)]">
                  Enable team collaboration with sharing and annotation features
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--neon-blue)]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--neon-blue)]" />
                </div>
                <p className="text-[var(--text-secondary)]">
                  Integrate predictive analytics powered by machine learning
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <GlowLine width="100%" />
        </div>
      </section>

      {/* Research Insights */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="text-center mb-12">
          <h2 className="text-[var(--text-primary)] mb-4">Research Insights</h2>
          <p className="text-[var(--text-secondary)] text-xl max-w-3xl mx-auto">
            Through user interviews and competitive analysis, we identified key opportunities 
            to differentiate and improve the user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-xl p-6 hover:border-[var(--neon-blue)] transition-colors"
            >
              <h4 className="text-[var(--text-primary)] mb-3">{insight.title}</h4>
              <p className="text-[var(--text-secondary)] text-base">{insight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Flow */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20 bg-[var(--bg-secondary)]/30">
        <div className="text-center mb-12">
          <h2 className="text-[var(--text-primary)] mb-4">User Journey</h2>
          <p className="text-[var(--text-secondary)] text-xl">
            Mapping the complete user experience from discovery to engagement
          </p>
        </div>
        
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          {userFlow.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--neon-blue)] flex items-center justify-center glow-neon-blue">
                  <span className="text-black">{index + 1}</span>
                </div>
                <div className="text-center">
                  <div className="text-[var(--text-primary)] mb-1">{step.step}</div>
                  <div className="text-sm text-[var(--text-secondary)] max-w-[120px]">{step.label}</div>
                </div>
              </div>
              
              {index < userFlow.length - 1 && (
                <div className="w-24 h-[2px] bg-[var(--neon-blue)]/30 mx-4 glow-neon-blue" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* High-Fidelity Screens */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="text-center mb-12">
          <h2 className="text-[var(--text-primary)] mb-4">High-Fidelity Design</h2>
          <p className="text-[var(--text-secondary)] text-xl max-w-3xl mx-auto">
            The final designs showcase a modern, intuitive interface with powerful functionality
          </p>
        </div>
        
        <div className="space-y-12">
          <div className="rounded-2xl overflow-hidden card-shadow">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMDUzMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dashboard Overview"
              className="w-full"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden card-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MzA2MjY4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Analytics View"
                className="w-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden card-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642942015352-0cdf9b407bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMwNjA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Settings Panel"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20 mb-20">
        <div className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-3xl p-16 card-shadow">
          <h2 className="text-[var(--text-primary)] mb-6">Results & Reflection</h2>
          
          <div className="grid grid-cols-3 gap-8 mb-12 pb-12 border-b border-[var(--border-light)]">
            <div>
              <div className="text-5xl mb-2 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
                85%
              </div>
              <p className="text-[var(--text-secondary)]">Increase in user engagement</p>
            </div>
            <div>
              <div className="text-5xl mb-2 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
                60%
              </div>
              <p className="text-[var(--text-secondary)]">Faster data insights</p>
            </div>
            <div>
              <div className="text-5xl mb-2 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
                4.8/5
              </div>
              <p className="text-[var(--text-secondary)]">User satisfaction score</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-[var(--text-secondary)]">
              This project was a great opportunity to work on a complex data visualization 
              challenge. The key learning was the importance of progressive disclosure - 
              showing users only the information they need at each step, while making 
              advanced features easily accessible.
            </p>
            <p className="text-[var(--text-secondary)]">
              The collaboration with data scientists helped me understand the technical 
              constraints and possibilities, leading to more realistic and implementable designs. 
              User testing revealed that our simplified onboarding flow was crucial to adoption.
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-8">
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--neon-blue)] text-black hover:shadow-[0_0_48px_rgba(0,199,255,0.4)] transition-all"
            >
              View Live Project
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--border-light)] text-[var(--text-primary)] hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
