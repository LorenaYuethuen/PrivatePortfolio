import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  height?: string;
}

export function ProjectCard({ id, title, description, tags, image, height = '260px' }: ProjectCardProps) {
  return (
    <Link 
      to={`/project/${id}`}
      className="group block"
    >
      <div 
        className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-4 transition-all hover:border-[var(--neon-blue)] hover:shadow-[0_0_32px_rgba(0,199,255,0.2)] card-shadow"
        style={{ height }}
      >
        <div className="flex flex-col h-full gap-4">
          <div className="relative w-full flex-1 rounded-xl overflow-hidden bg-[var(--bg-secondary)]">
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-[var(--text-primary)] group-hover:text-[var(--neon-blue)] transition-colors">
              {title}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm line-clamp-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-light)] text-xs text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
