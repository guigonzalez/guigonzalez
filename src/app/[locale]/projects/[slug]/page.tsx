import { projects } from '@/data/projects';
import { locales } from '@/i18n/config';
import ProjectPageClient from './ProjectPageClient';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

interface ProjectPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  return <ProjectPageClient slug={slug} />;
}
