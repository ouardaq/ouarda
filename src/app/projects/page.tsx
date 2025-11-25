import { projects } from '@/data/projects';

// This enables Static Site Generation
export const dynamic = 'force-static';

// Generate metadata for SEO


// This is the main page component - Server Component
export default function ProjectsPage() {
  // Extract all unique technologies for filtering (done on server)
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  return ;
}