'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { projects } from '@/data/projects';

const projectImages: Record<string, string> = {
  whirlpool: '/images/projects/whirlpool.png',
  gympass: '/images/projects/gympass.png',
  sympla: '/images/projects/sympla.png',
  superlogica: '/images/projects/superlogica.png',
  raiadrogasil: '/images/projects/raiadrigasil.png',
  mastercard: '/images/projects/mastercard.png',
};

export function CasesGrid() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {t('casesTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.status === 'complete' ? `/${locale}/projects/${project.slug}` : '#'}
              className={`group relative block aspect-[4/3] rounded-lg overflow-hidden ${
                project.status === 'placeholder' ? 'cursor-default' : ''
              }`}
              style={{ backgroundColor: project.color }}
              onClick={(e) => project.status === 'placeholder' && e.preventDefault()}
            >
              {projectImages[project.slug] && (
                <Image
                  src={projectImages[project.slug]}
                  alt={project.title[locale as 'pt' | 'en']}
                  fill
                  className="object-cover"
                />
              )}
              {project.status === 'complete' && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              )}
              {project.status === 'placeholder' && (
                <div className="absolute bottom-4 right-4">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-full bg-black/10"
                    style={{ color: project.textColor }}
                  >
                    {t('comingSoon')}
                  </span>
                </div>
              )}
              {project.status === 'complete' && (
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span
                    className="text-sm font-medium px-3 py-1 bg-white/90 rounded-full text-gray-900"
                  >
                    {t('viewProject')} &rarr;
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
