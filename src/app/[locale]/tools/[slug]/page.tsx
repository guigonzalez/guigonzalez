import { tools } from '@/data/tools';
import { locales } from '@/i18n/config';
import ToolPageClient from './ToolPageClient';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    tools.map((tool) => ({
      locale,
      slug: tool.slug,
    }))
  );
}

interface ToolPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  return <ToolPageClient slug={slug} />;
}
