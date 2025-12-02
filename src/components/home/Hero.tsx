'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('home');

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200">
              <Image
                src="/images/profile/hero.webp"
                alt="Gui Gonzalez"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex-grow">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('greeting')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-2xl">
              {t('role')}
            </p>
            <p className="text-lg text-gray-600 mb-4 max-w-2xl">
              {t('experience')}
            </p>
            <p className="text-gray-500 italic">
              {t('linkedinCta')}{' '}
              <a
                href="https://linkedin.com/in/guigonzalez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 not-italic font-medium"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
