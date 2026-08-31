'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Terminal from '@/components/Terminal';
import { motion } from 'framer-motion';
import { Lock, ChevronDown, Calendar, User } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectsClientProps {
  projects: Project[];
  allTechnologies: string[];
}

const ALL = 'All';

export default function ProjectsClient({ projects, allTechnologies }: ProjectsClientProps) {
  const [activeTech, setActiveTech] = useState<string>(ALL);
  const [expanded, setExpanded] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      activeTech === ALL
        ? projects
        : projects.filter((p) => p.technologies.includes(activeTech)),
    [projects, activeTech],
  );

  const toggle = (slug: string) => setExpanded(expanded === slug ? null : slug);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-3xl">Projects</h1>

      <Terminal text="ls -la ~/projects" typingSpeed={40} className="text-xl mb-8 opacity-90" />

      <p className="max-w-2xl text-lg mb-10 opacity-80">
        Everything here is something I built and shipped, from full-stack commerce systems to
        native Android apps. Expand a project to read what it does, what was hard about it, and
        what I would change.
      </p>

      {/* Technology filter */}
      <div className="mb-10">
        <p className="text-sm opacity-60 mb-3">Filter by technology</p>
        <div className="flex flex-wrap gap-2">
          {[ALL, ...allTechnologies].map((tech) => {
            const isActive = tech === activeTech;
            return (
              <button
                key={tech}
                onClick={() => setActiveTech(tech)}
                aria-pressed={isActive}
                className={`text-xs py-1 px-3 border transition-colors ${
                  isActive
                    ? 'border-[var(--accent)] text-[var(--accent)]'
                    : 'border-[var(--border)] hover:border-[var(--accent)] opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: 'var(--surface)' }}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-sm opacity-60 mb-6">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        {activeTech !== ALL && ` using ${activeTech}`}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {visible.map((project) => {
          const isOpen = expanded === project.slug;
          const hasDetail = Boolean(
            project.detailedDescription?.length ||
              project.features?.length ||
              project.challenges?.length,
          );

          return (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="card flex flex-col"
            >
              <h2 className="text-lg font-bold mb-1">{project.title}</h2>

              {(project.role || project.duration) && (
                <div className="flex flex-wrap gap-4 mb-3 text-xs opacity-60">
                  {project.duration && (
                    <span className="inline-flex items-center">
                      <Calendar size={12} className="mr-1.5" />
                      {project.duration}
                    </span>
                  )}
                  {project.role && (
                    <span className="inline-flex items-center">
                      <User size={12} className="mr-1.5" />
                      {project.role}
                    </span>
                  )}
                </div>
              )}

              <p className="mb-4 text-sm opacity-90 leading-relaxed">{project.description}</p>

              <div className="mb-4 flex flex-wrap">
                {project.technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setActiveTech(tech)}
                    className="badge hover:border-[var(--accent)] transition-colors"
                    title={`Filter by ${tech}`}
                  >
                    {tech}
                  </button>
                ))}
              </div>

              {hasDetail && (
                <button
                  onClick={() => toggle(project.slug)}
                  aria-expanded={isOpen}
                  className="self-start inline-flex items-center text-sm text-[var(--accent)] mb-4 hover:opacity-80 transition-opacity"
                >
                  <ChevronDown
                    size={14}
                    className={`mr-1.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                  {isOpen ? 'Hide details' : 'Read more'}
                </button>
              )}

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[var(--border)] pt-4 mb-4 space-y-5 text-sm">
                    {project.detailedDescription?.map((para, i) => (
                      <p key={i} className="opacity-85 leading-relaxed">
                        {para}
                      </p>
                    ))}

                    {project.features && project.features.length > 0 && (
                      <div>
                        <h3 className="text-[var(--accent)] mb-2">What it does</h3>
                        <ul className="space-y-1.5">
                          {project.features.map((feature, i) => (
                            <li key={i} className="opacity-85 leading-relaxed flex">
                              <span className="text-[var(--accent)] mr-2">–</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.challenges && project.challenges.length > 0 && (
                      <div>
                        <h3 className="text-[var(--accent)] mb-2">What was hard</h3>
                        <ul className="space-y-2.5">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="opacity-85 leading-relaxed flex">
                              <span className="text-[var(--accent)] mr-2">–</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.impact && (
                      <div>
                        <h3 className="text-[var(--accent)] mb-2">Outcome</h3>
                        <p className="opacity-85 leading-relaxed">{project.impact}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              <div className="mt-auto flex flex-wrap gap-4 text-sm font-medium">
                {project.link === 'private repository' ? (
                  <span className="inline-flex items-center opacity-60 cursor-not-allowed">
                    <Lock size={14} className="mr-2" />
                    Private Repository
                  </span>
                ) : (
                  project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] border-b border-[var(--accent)] pb-0.5 hover:opacity-80 transition-opacity"
                    >
                      View Repository →
                    </Link>
                  )
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
