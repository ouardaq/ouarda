import Terminal from '@/components/Terminal';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Lock } from 'lucide-react'; 

export default function Projects() {
  return (
    <section className="mb-16">
      <Terminal text="projects" className="section-title" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          // Added h-full to make cards equal height in the grid
          <div key={index} className="card flex flex-col h-full">
            
            <h3 className="text-lg font-bold mb-3">
              {project.title}
            </h3>
            
            {/* Used opacity for description instead of gray color codes to suit Gruvbox */}
            <p className="mb-4 text-sm opacity-90 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mb-6 flex flex-wrap">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* mt-auto pushes the links to the bottom of the card */}
            <div className="mt-auto flex flex-wrap gap-4 text-sm font-medium">
              {project.link === 'private repository' ? (
                <div className="inline-flex items-center text-sm opacity-60 cursor-not-allowed">
                  <Lock size={14} className="mr-2" />
                  <span>Private Repository</span>
                </div>
              ) : project.link && (
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  // Using CSS variable for accent color on text and border
                  className="text-[var(--accent)] border-b border-[var(--accent)] pb-0.5 hover:opacity-80 transition-opacity"
                >
                  View Repository →
                </Link>
              )}
              
              {project.link_deployed && (
                <Link 
                  href={project.link_deployed} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] border-b border-[var(--accent)] pb-0.5 hover:opacity-80 transition-opacity"
                >
                  View Live →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <Link 
          href="/projects" 
          className="text-[var(--accent)] border-b border-[var(--accent)] pb-1 hover:opacity-80 transition-opacity inline-block"
        >
          View All Projects →
        </Link>
      </div>
      
    </section>
  );
}