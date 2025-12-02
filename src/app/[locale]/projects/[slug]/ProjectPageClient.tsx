'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { getProject } from '@/data/projects';
import { whirlpoolCase } from '@/data/whirlpool-case';
import { ImageWithBasePath } from '@/components/ui/ImageWithBasePath';

interface ProjectPageClientProps {
  slug: string;
}

export default function ProjectPageClient({ slug }: ProjectPageClientProps) {
  const locale = useLocale();
  const t = useTranslations('projects');
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const localeKey = locale as 'pt' | 'en';

  if (project.status === 'placeholder') {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="w-full aspect-video rounded-lg mb-8 flex items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold"
              style={{ color: project.textColor }}
            >
              {project.title[localeKey]}
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            {project.subtitle[localeKey]}
          </p>
          <Link
            href={`/${locale}`}
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            &larr; {t('backToProjects')}
          </Link>
        </div>
      </div>
    );
  }

  // Whirlpool specific case page - Dynamic Layout
  if (slug === 'whirlpool') {
    return (
      <div className="overflow-hidden">
        {/* Hero Section - Full width with floating elements */}
        <section className="relative min-h-[70vh] flex items-center" style={{ backgroundColor: '#4a4a4a' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* Floating Images */}
          <div className="absolute top-10 right-[5%] w-48 h-32 rounded-lg overflow-hidden shadow-2xl transform rotate-3 hidden lg:block">
            <ImageWithBasePath
              src="/images/projects/whirlpool/mentoring-zone.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-10 right-[15%] w-40 h-28 rounded-lg overflow-hidden shadow-2xl transform -rotate-6 hidden lg:block">
            <ImageWithBasePath
              src="/images/projects/whirlpool/agile-trends.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-8">
                <ImageWithBasePath
                  src="/images/projects/whirlpool/whirlpool-logo.png"
                  alt="Whirlpool"
                  width={180}
                  height={50}
                  className="h-12 w-auto"
                />
                <div className="h-8 w-px bg-white/30" />
                <span className="text-white/60 text-sm uppercase tracking-wider">Case Study</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {project.subtitle[localeKey]}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                {whirlpoolCase.tldr[localeKey]}
              </p>
            </div>
          </div>
        </section>

        {/* Brand Strip - Horizontal scroll on mobile */}
        <section className="bg-white py-6 border-b border-gray-100 sticky top-16 z-40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center gap-8 md:gap-16 overflow-x-auto">
              {whirlpoolCase.brands.map((brand) => (
                <ImageWithBasePath
                  key={brand.name}
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={30}
                  className="h-6 md:h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Metrics - Monochrome cards */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {project.metrics?.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {metric.label[localeKey]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Year 2021 - Image Left, Content Right */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Stack */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithBasePath
                    src="/images/projects/whirlpool/remote-workstation.jpg"
                    alt={whirlpoolCase.years[0].images?.[0]?.alt[localeKey] || ''}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
                  <ImageWithBasePath
                    src="/images/projects/whirlpool/mentoring-zone.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium mb-4">
                  2021
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {whirlpoolCase.years[0].title[localeKey].replace('2021: ', '')}
                </h2>
                <div className="space-y-4 text-gray-600">
                  {whirlpoolCase.years[0].content[localeKey].slice(0, 2).map((p, i) => (
                    <p key={i} className="leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Highlight Card */}
                {whirlpoolCase.years[0].highlight && (
                  <div className="mt-8 p-6 bg-gray-100 rounded-xl border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{whirlpoolCase.years[0].highlight.title[localeKey]}</h4>
                        <p className="text-sm text-gray-600">{whirlpoolCase.years[0].highlight.content[localeKey]}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Year 2022 - Content Left, Image Right */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium mb-4">
                  2022
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {whirlpoolCase.years[1].title[localeKey].replace('2022: ', '')}
                </h2>
                <div className="space-y-4 text-gray-600">
                  {whirlpoolCase.years[1].content[localeKey].slice(0, 2).map((p, i) => (
                    <p key={i} className="leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Stats inline */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-500">{localeKey === 'pt' ? 'Designers' : 'Designers'}</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">16</div>
                    <div className="text-sm text-gray-500">{localeKey === 'pt' ? 'Agilistas' : 'Agilists'}</div>
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <ImageWithBasePath
                      src="/images/projects/whirlpool/kitchenaid-design-system.jpg"
                      alt=""
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <ImageWithBasePath
                      src="/images/projects/whirlpool/agile-trends.jpg"
                      alt=""
                      width={300}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <ImageWithBasePath
                      src="/images/projects/whirlpool/efficiency-funnel.png"
                      alt=""
                      width={300}
                      height={225}
                      className="w-full h-full object-cover bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight - Full width */}
            {whirlpoolCase.years[1].highlight && (
              <div className="mt-16 p-8 bg-gray-900 rounded-2xl text-white shadow-xl">
                <div className="max-w-3xl mx-auto text-center">
                  <h4 className="text-2xl font-bold mb-4">{whirlpoolCase.years[1].highlight.title[localeKey]}</h4>
                  <p className="text-gray-300 leading-relaxed">{whirlpoolCase.years[1].highlight.content[localeKey]}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Year 2023 - Full width dramatic */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                2023
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {whirlpoolCase.years[2].title[localeKey].replace('2023: ', '')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {whirlpoolCase.years[2].content[localeKey].slice(0, 3).map((p, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-xl backdrop-blur">
                  <div className="text-4xl font-bold text-white/20 mb-4">0{i + 1}</div>
                  <p className="text-gray-300 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative max-w-2xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithBasePath
                  src="/images/projects/whirlpool/office-return.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Highlight */}
            {whirlpoolCase.years[2].highlight && (
              <div className="mt-16 max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {localeKey === 'pt' ? 'Destaque' : 'Highlight'}
                </div>
                <h4 className="text-2xl font-bold mb-4">{whirlpoolCase.years[2].highlight.title[localeKey]}</h4>
                <p className="text-gray-400 leading-relaxed">{whirlpoolCase.years[2].highlight.content[localeKey]}</p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials - Masonry style */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {localeKey === 'pt' ? 'O que minha equipe diz' : 'What my team says'}
              </h2>
              <p className="text-gray-500">
                {localeKey === 'pt' ? 'Feedbacks de profissionais que trabalharam comigo' : 'Feedback from professionals who worked with me'}
              </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {whirlpoolCase.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="break-inside-avoid bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <ImageWithBasePath
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role[localeKey]}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    &ldquo;{testimonial.text[localeKey]}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('backToProjects')}
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Default case page (for Superlógica and others)
  return (
    <div>
      {/* Header */}
      <div
        className="py-16 md:py-24"
        style={{ backgroundColor: project.color }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: project.textColor }}
          >
            {project.title[localeKey]}
          </h1>
          <p
            className="text-xl md:text-2xl"
            style={{ color: project.textColor, opacity: 0.9 }}
          >
            {project.subtitle[localeKey]}
          </p>
        </div>
      </div>

      {/* Brands */}
      {project.brands && project.brands.length > 0 && (
        <div className="py-8 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 font-medium">
              {project.brands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TL;DR */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-gray-500 mb-4">{t('tldr')}</h2>
            <p className="text-lg text-gray-700">
              {project.description[localeKey]}
            </p>
          </section>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <section className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-500">
                      {metric.label[localeKey]}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Project Content - To be filled with MDX */}
          <section className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              {locale === 'pt'
                ? 'Conteúdo detalhado do case em desenvolvimento...'
                : 'Detailed case content in development...'}
            </p>
          </section>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href={`/${locale}`}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              &larr; {t('backToProjects')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
