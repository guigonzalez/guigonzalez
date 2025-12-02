'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { getTool } from '@/data/tools';

interface ToolPageClientProps {
  slug: string;
}

export default function ToolPageClient({ slug }: ToolPageClientProps) {
  const locale = useLocale();
  const t = useTranslations('tools');
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  const localeKey = locale as 'pt' | 'en';

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}/tools`}
          className="text-gray-600 hover:text-gray-900 font-medium mb-8 inline-block"
        >
          &larr; {t('backToTools')}
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {tool.title}
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          {tool.description[localeKey]}
        </p>

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          {t('accessTool')}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
