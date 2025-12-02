'use client';

import { useTranslations } from 'next-intl';

export function ContactCTA() {
  const t = useTranslations('home');

  return (
    <section className="py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t('contactCta')}
        </h2>
        <a
          href="mailto:guiperezgo@gmail.com"
          className="text-xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          guiperezgo@gmail.com
        </a>
      </div>
    </section>
  );
}
