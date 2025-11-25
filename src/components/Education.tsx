import Terminal from '@/components/Terminal';
import { education } from '@/data/education'; // Assuming this is your import path

export default function Education() {
  return (
    <section className="mb-16">
      {/* Uses .section-title from global.css */}
      <Terminal text="education" className="section-title" />
      
      {education.map((edu, index) => (
        // Uses .card for background/border/hover
        <div key={index} className="card">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <h3 className="text-lg font-bold mb-1 md:mb-0">
              {edu.degree} : {edu.description && (
                <span className="text-[var(--accent)] font-medium">{edu.description}</span>
              )}
            </h3>
            <div className="text-sm opacity-80 flex flex-col md:items-end">
              <span>{edu.period}</span>
            </div>
          </div>
          <p className="text-sm mb-4 opacity-80">
            {edu.location}
          </p>
          <p className="text-sm mb-3 text-[var(--accent)] font-medium">
            {edu.school} 
          </p>
          
          
        </div>
      ))}
    </section>
  );
}