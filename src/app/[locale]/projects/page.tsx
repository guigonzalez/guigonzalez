import { useTranslations } from 'next-intl';
import { CasesGrid } from '@/components/home/CasesGrid';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t('title')}
        </h1>
      </div>
      <CasesGrid />
    </div>
  );
}
