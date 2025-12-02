'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { tools } from '@/data/tools';
import { ImageWithBasePath } from '@/components/ui/ImageWithBasePath';

const toolImages: Record<string, string> = {
  'roi-de-ux': '/images/tools/roideux.png',
  'design-principles-pyramid': '/images/tools/designprinciplespyramid.png',
  'design-tokens-repo': '/images/tools/designtokensrepo.png',
  'dare-framework': '/images/tools/dareframework.png',
};

export function ToolsSection() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${locale}/tools/${tool.slug}`}
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="w-24 h-24 mb-4 relative">
                  <ImageWithBasePath
                    src={toolImages[tool.slug]}
                    alt={tool.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {tool.description[locale as 'pt' | 'en']}
                </p>
                <span className="text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 font-medium">
                  {t('access')} &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
