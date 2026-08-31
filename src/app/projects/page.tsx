import { projects } from '@/data/projects';
import ProjectsClient from '@/components/ProjectsClient';

// This enables Static Site Generation
export const dynamic = 'force-static';

// Generate metadata for SEO
export async function generateMetadata() {
  const title = 'Projects | My Portfolio';
  const description =
    'Full-stack web applications, native Android apps, and API-driven tools — built with TypeScript, Python, Java, and PHP.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

// This is the main page component - Server Component
export default function ProjectsPage() {
  // Extract all unique technologies for filtering (done on server)
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies)),
  ).sort();

  return <ProjectsClient projects={projects} allTechnologies={allTechnologies} />;
}
