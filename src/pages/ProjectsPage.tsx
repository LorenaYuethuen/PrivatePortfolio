import { useState } from 'react';
import { GlowLine } from '../components/GlowLine';
import { ProjectCard } from '../components/ProjectCard';
import { FilterPill } from '../components/FilterPill';

const allProjects = [
  {
    id: 'ai-dashboard',
    title: 'AI Analytics Dashboard',
    description: 'Real-time data visualization platform with predictive analytics and custom reporting',
    tags: ['UI/UX', 'Dashboard', 'AI'],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMDUzMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    description: 'Intuitive financial management with smart budgeting and seamless transactions',
    tags: ['Mobile', 'Fintech', 'Design System'],
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyOTgzOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform Redesign',
    description: 'Complete redesign of enterprise software with focus on user experience',
    tags: ['Web', 'SaaS', 'Redesign'],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MzA2MjY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'ecommerce-app',
    title: 'E-commerce Experience',
    description: 'Modern shopping platform with personalized recommendations and smooth checkout',
    tags: ['Mobile', 'E-commerce', 'UI/UX'],
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1642942015352-0cdf9b407bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMwNjA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    description: 'Comprehensive health management system for patients and providers',
    tags: ['Web', 'Healthcare', 'Dashboard'],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1722159475082-0a2331580de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzAwMzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'design-system',
    title: 'Enterprise Design System',
    description: 'Scalable design system with comprehensive component library and guidelines',
    tags: ['Design System', 'Components', 'Documentation'],
    category: 'Design System',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWdufGVufDF8fHx8MTc2MzA2OTUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const categories = ['All', 'Web', 'Mobile', 'Design System'];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-24">
      {/* Page Title */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="text-center">
          <h1 className="text-[var(--text-primary)] mb-6">Projects</h1>
          <GlowLine width="120px" className="mx-auto" />
          <p className="text-xl text-[var(--text-secondary)] mt-8 max-w-2xl mx-auto">
            A curated collection of projects showcasing expertise in product design, 
            user experience, and interface design.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-[1440px] mx-auto px-[120px] pb-12">
        <div className="flex items-center justify-center gap-4">
          {categories.map((category) => (
            <FilterPill
              key={category}
              label={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            />
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1440px] mx-auto px-[120px] pb-[120px]">
        <div className="grid grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              height="320px"
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--text-secondary)] text-xl">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
