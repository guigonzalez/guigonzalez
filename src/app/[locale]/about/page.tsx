'use client';

import { useTranslations } from 'next-intl';
import { ImageWithBasePath } from '@/components/ui/ImageWithBasePath';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bio Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg">
            <ImageWithBasePath
              src="/images/profile/about1.jpeg"
              alt="Gui Gonzalez"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('bio')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg leading-relaxed">
              {t('bioExtended')}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg leading-relaxed">
              {t('belief')}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {t('approach')}
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20 py-12 bg-gray-50 dark:bg-gray-800/50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            {t('valuesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('value1Title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('value1Description')}
              </p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('value2Title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('value2Description')}
              </p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('value3Title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('value3Description')}
              </p>
            </div>
          </div>
        </section>

        {/* Personal Section */}
        <section className="border-t border-gray-100 dark:border-gray-800 pt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12">
            {t('personalTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('personalKitchen')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {t('personalKitchenDescription')}
              </p>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg order-1 md:order-2">
              <ImageWithBasePath
                src="/images/profile/about2.jpeg"
                alt="Gui na cozinha"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg">
              <ImageWithBasePath
                src="/images/profile/about3.jpg"
                alt="Gui com família"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('personalFamily')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {t('personalFamilyDescription')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
