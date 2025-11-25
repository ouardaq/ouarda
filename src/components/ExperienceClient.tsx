'use client';

import { useState } from 'react';
import Terminal from '@/components/Terminal';
import { Briefcase, Code2, Rocket, Star, MapPin, Calendar , Headset , Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface ExperienceClientProps {
  experiences: Experience[];
}

export default function ExperienceClient({ experiences }: ExperienceClientProps) {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  const getIcon = (title: string) => {
    if (title.includes('Developer')) return <Code2 className="w-6 h-6" />;
    if (title.includes('Security')) return <Shield className="w-6 h-6" />;
    if (title.includes('Technician')) return <Headset className="w-6 h-6" />;
    return <Briefcase className="w-6 h-6" />;
  };

  const toggleExpand = (index: number) => {
    setExpandedExp(expandedExp === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Applied global .section-title class */}
      <h1 className="section-title text-3xl">Experience</h1>
      
      <Terminal 
        text="./show_professional_journey.sh" 
        typingSpeed={40}
        className="text-xl mb-8 opacity-90"
      />
      
      <p className="max-w-2xl text-lg mb-12 opacity-80">
        My professional journey showcases a robust blend of skills, 
        encompassing practical development work alongside hands-on experience in technical support across various organizations and domains.
      </p>
      
      <div className="space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            // Used global .card class.
            // Dynamic border color using arbitrary Tailwind values mapping to your CSS variables
            className={`card cursor-pointer group ${
              expandedExp === index 
                ? 'border-[var(--accent)] shadow-[0_0_10px_rgba(254,128,25,0.1)]' 
                : 'hover:border-[var(--accent)]'
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div>
              {/* Header with company and position */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-start">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mr-4 shrink-0 group-hover:text-[var(--text)] transition-colors">
                    {getIcon(exp.title)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[var(--text)]">
                      {exp.title}
                      <span className="text-[var(--accent)] ml-2">@{exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm opacity-70">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex">
                  {index === 0 && (
                    <span className="badge text-[var(--accent)] flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Latest Position
                    </span>
                  )}
                </div>
              </div>
              
              {/* Description */}
              <div className={`pl-4 md:pl-16 transition-all duration-300 ${expandedExp === index ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {exp.description.map((item, i) => (
                  <div 
                    key={i}
                    // Timeline dot styled with var(--accent)
                    className="relative pl-6 py-2 opacity-90 before:absolute before:left-0 before:top-[18px] before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[var(--accent)] before:rounded-full"
                  >
                    <p>
                      {item}
                      {i === 0 && exp.title.includes('Research') && (
                        <span className="ml-2 badge text-[var(--accent)]">
                          Cutting-edge
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              
               {/* Expand hint if not expanded */}
               {expandedExp !== index && (
                <div className="md:pl-16 mt-2 text-xs opacity-50 italic">
                   Click to view details...
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Timeline visualization */}
      <div className="card mb-12">
        <h2 className="text-xl mb-6 text-[var(--accent)]">Timeline</h2>
        {/* Timeline line color mapped to var(--border) */}
        <div className="relative pl-8 before:absolute before:left-[11px] before:h-full before:w-[2px] before:bg-[var(--border)] before:rounded-full">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative last:mb-0">
              {/* Timeline dot mapped to var(--accent) */}
              <div className="absolute left-[4px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)]"></div>
              <div className="ml-6">
                <div className="font-bold text-[var(--text)]">
                  {exp.title} <span className="text-[var(--accent)]">@ {exp.company}</span>
                </div>
                <div className="text-sm opacity-60 font-mono">{exp.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Back to home link */}
      <div className="mt-12 pt-4">
        <Link href="/" className="text-[var(--accent)] hover:opacity-80 transition-opacity inline-flex items-center">
          <span className="mr-2">←</span> Back to home
        </Link>
      </div>
    </div>
  );
}