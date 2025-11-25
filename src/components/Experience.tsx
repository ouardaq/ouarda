import Terminal from '@/components/Terminal';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section className="mb-16">
      {/* Uses the .section-title class defined in global.css */}
      <Terminal text="experience" className="section-title" />
      
      {experiences.map((exp, index) => (
        // Uses the .card class for background, border, and hover effects
        <div key={index} className="card"> 
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <h3 className="text-lg font-bold mb-1 md:mb-0">
              {exp.title} 
              {/* Inline style or arbitrary tailwind value to use the CSS variable for the company name */}
              <span className="text-[var(--accent)]"> @ {exp.company}</span>
            </h3>
            {/* Replaced 'text-gray-X' with opacity to preserve the Gruvbox 'cream' hue while showing hierarchy */}
            <span className="text-sm opacity-80">
              {exp.period}
            </span>
          </div>
          
          <p className="text-sm mb-4 opacity-80">
            {exp.location}
          </p>
          
          {/* Added marker styling to color the bullet points with the accent color */}
          <ul className="list-disc pl-5 space-y-2 marker:text-[var(--accent)]">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}