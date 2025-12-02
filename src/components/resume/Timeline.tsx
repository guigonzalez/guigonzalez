'use client';

import { useLocale, useTranslations } from 'next-intl';
import { experiences } from '@/data/experience';
import { TimelineItem } from './TimelineItem';

export function Timeline() {
  const locale = useLocale() as 'pt' | 'en';
  const t = useTranslations('resume');

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={`${experience.company}-${experience.period.start}`}
            experience={experience}
            locale={locale}
            index={index}
            presentLabel={t('present')}
          />
        ))}
      </div>
    </div>
  );
}
