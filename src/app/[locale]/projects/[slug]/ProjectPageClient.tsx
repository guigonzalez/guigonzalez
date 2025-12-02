'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { getProject } from '@/data/projects';
import { whirlpoolCase } from '@/data/whirlpool-case';
import { gympassCase } from '@/data/gympass-case';
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
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {project.subtitle[localeKey]}
          </p>
          <Link
            href={`/${locale}`}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium"
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
        <section className="bg-white dark:bg-gray-900 py-6 border-b border-gray-100 dark:border-gray-800 sticky top-16 z-40">
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
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {project.metrics?.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-900 dark:bg-white rounded-2xl p-6 text-white dark:text-gray-900 shadow-lg transform hover:scale-105 transition-transform"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400 dark:text-gray-600">
                    {metric.label[localeKey]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Year 2021 - Image Left, Content Right */}
        <section className="py-20 bg-white dark:bg-gray-900">
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {whirlpoolCase.years[0].title[localeKey].replace('2021: ', '')}
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  {whirlpoolCase.years[0].content[localeKey].slice(0, 2).map((p, i) => (
                    <p key={i} className="leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Highlight Card */}
                {whirlpoolCase.years[0].highlight && (
                  <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white dark:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">{whirlpoolCase.years[0].highlight.title[localeKey]}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{whirlpoolCase.years[0].highlight.content[localeKey]}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Year 2022 - Content Left, Image Right */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium mb-4">
                  2022
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {whirlpoolCase.years[1].title[localeKey].replace('2022: ', '')}
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  {whirlpoolCase.years[1].content[localeKey].slice(0, 2).map((p, i) => (
                    <p key={i} className="leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Stats inline */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{localeKey === 'pt' ? 'Designers' : 'Designers'}</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">16</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{localeKey === 'pt' ? 'Agilistas' : 'Agilists'}</div>
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
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {localeKey === 'pt' ? 'O que minha equipe diz' : 'What my team says'}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {localeKey === 'pt' ? 'Feedbacks de profissionais que trabalharam comigo' : 'Feedback from professionals who worked with me'}
              </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {whirlpoolCase.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="break-inside-avoid bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <ImageWithBasePath
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role[localeKey]}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    &ldquo;{testimonial.text[localeKey]}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
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

  // Gympass specific case page - YOGA Design System
  if (slug === 'gympass') {
    return (
      <div className="overflow-hidden">
        {/* Hero Section - Full width with floating elements */}
        <section className="relative min-h-[70vh] flex items-center" style={{ backgroundColor: '#D8385E' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* Floating Images */}
          <div className="absolute top-10 right-[5%] w-48 h-32 rounded-lg overflow-hidden shadow-2xl transform rotate-3 hidden lg:block">
            <ImageWithBasePath
              src="/images/projects/gympass/case3.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-10 right-[15%] w-40 h-28 rounded-lg overflow-hidden shadow-2xl transform -rotate-6 hidden lg:block">
            <ImageWithBasePath
              src="/images/projects/gympass/case2.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-8">
                <ImageWithBasePath
                  src="/images/projects/gympass/yoga.png"
                  alt="YOGA"
                  width={60}
                  height={60}
                  className="h-14 w-auto"
                />
                <div className="h-8 w-px bg-white/30" />
                <span className="text-white/60 text-sm uppercase tracking-wider">Design System</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {gympassCase.subtitle[localeKey]}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                {gympassCase.tldr[localeKey]}
              </p>
            </div>
          </div>
        </section>

        {/* Brand Strip */}
        <section className="bg-white dark:bg-gray-900 py-6 border-b border-gray-100 dark:border-gray-800 sticky top-16 z-40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center gap-8">
              <ImageWithBasePath
                src="/images/projects/gympass/gympass-1.png"
                alt="Gympass"
                width={120}
                height={30}
                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
              <a
                href={gympassCase.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D8385E] hover:text-[#b82e4d] font-medium transition-colors text-sm"
              >
                gympass.github.io/yoga
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Metrics - Monochrome cards */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {project.metrics?.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-900 dark:bg-white rounded-2xl p-6 text-white dark:text-gray-900 shadow-lg transform hover:scale-105 transition-transform"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400 dark:text-gray-600">
                    {metric.label[localeKey]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Section - Image Left, Content Right */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Stack */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithBasePath
                    src="/images/projects/gympass/case4.png"
                    alt={localeKey === 'pt' ? 'YOGA Design System Homepage' : 'YOGA Design System Homepage'}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
                  <ImageWithBasePath
                    src="/images/projects/gympass/yoga.png"
                    alt=""
                    fill
                    className="object-contain bg-white p-4"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-[#D8385E] text-white rounded-full text-sm font-medium mb-4">
                  {localeKey === 'pt' ? 'O Desafio' : 'The Challenge'}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {localeKey === 'pt' ? 'Unificando o Caos' : 'Unifying the Chaos'}
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  {gympassCase.description[localeKey].slice(0, 2).map((p, i) => (
                    <p key={i} className="leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Highlight Card */}
                <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#D8385E] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        {localeKey === 'pt' ? 'O Problema' : 'The Problem'}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {localeKey === 'pt'
                          ? '47 variações de botões e 23 tipos diferentes de inputs espalhados por diferentes squads.'
                          : '47 button variations and 23 different input types spread across different squads.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Content Left, Image Right */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium mb-4">
                  {localeKey === 'pt' ? 'O Processo' : 'The Process'}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {localeKey === 'pt' ? 'Do Caos à Harmonia' : 'From Chaos to Harmony'}
                </h2>
                <div className="space-y-4">
                  {gympassCase.process.slice(0, 2).map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{step.title[localeKey]}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{step.description[localeKey]}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats inline */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">47 → 1</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{localeKey === 'pt' ? 'Variações de Botão' : 'Button Variations'}</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">23 → 4</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{localeKey === 'pt' ? 'Tipos de Input' : 'Input Types'}</div>
                  </div>
                </div>
              </div>

              {/* Image - Componentes UI */}
              <div className="order-1 md:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithBasePath
                    src="/images/projects/gympass/case3.png"
                    alt={localeKey === 'pt' ? 'Componentes do YOGA' : 'YOGA Components'}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Highlight - Full width with Venn diagram */}
            <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <ImageWithBasePath
                  src="/images/projects/gympass/case2.png"
                  alt={localeKey === 'pt' ? 'Diagrama do Design System' : 'Design System Diagram'}
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <div className="p-8 bg-gray-900 rounded-2xl text-white shadow-xl">
                <h4 className="text-2xl font-bold mb-4">
                  {localeKey === 'pt' ? 'A Filosofia YOGA' : 'The YOGA Philosophy'}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {gympassCase.description[localeKey][2]}
                </p>
                <p className="text-sm text-gray-400">
                  {localeKey === 'pt'
                    ? 'Theory & Ideas (Guidelines, Patterns, Branding) + Artifacts (Components, Documentation, Tools) = Culture'
                    : 'Theory & Ideas (Guidelines, Patterns, Branding) + Artifacts (Components, Documentation, Tools) = Culture'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Remaining Process Steps - Full width dramatic */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Quote Image - Will Fanguy */}
            <div className="relative max-w-3xl mx-auto mb-16">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithBasePath
                  src="/images/projects/gympass/case1.jpeg"
                  alt={localeKey === 'pt' ? 'Definição de Design System' : 'Design System Definition'}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                {localeKey === 'pt' ? 'Construção' : 'Building'}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {localeKey === 'pt' ? 'Componentização & Documentação' : 'Componentization & Documentation'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {gympassCase.process.slice(2, 4).map((step, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-xl backdrop-blur">
                  <div className="w-12 h-12 bg-[#D8385E] text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {i + 3}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title[localeKey]}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description[localeKey]}</p>
                </div>
              ))}
            </div>

            {/* Homepage Screenshot */}
            <div className="relative max-w-2xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithBasePath
                  src="/images/projects/gympass/case4.png"
                  alt={localeKey === 'pt' ? 'Homepage do YOGA' : 'YOGA Homepage'}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quote Highlight */}
            <div className="mt-16 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {localeKey === 'pt' ? 'Destaque' : 'Highlight'}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-4 text-white">
                {gympassCase.quote.text[localeKey]}
              </blockquote>
              <p className="text-gray-400">— {gympassCase.quote.author}, {gympassCase.quote.role[localeKey]}</p>
            </div>
          </div>
        </section>

        {/* Team Section - Masonry style like testimonials */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {localeKey === 'pt' ? 'O Time' : 'The Team'}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {localeKey === 'pt'
                  ? 'Profissionais incríveis que fizeram o YOGA acontecer'
                  : 'Amazing professionals who made YOGA happen'}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {gympassCase.team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D8385E] to-[#ff6b6b] rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{member.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{member.role[localeKey]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#D8385E] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {localeKey === 'pt' ? 'Explore o YOGA Design System' : 'Explore the YOGA Design System'}
            </h2>
            <p className="text-white/80 mb-8">
              {localeKey === 'pt'
                ? 'A documentação completa está disponível online com exemplos interativos.'
                : 'Full documentation is available online with interactive examples.'}
            </p>
            <a
              href={gympassCase.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {localeKey === 'pt' ? 'Acessar Documentação' : 'Access Documentation'}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
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
        <div className="py-8 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 dark:text-gray-500 font-medium">
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
            <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-4">{t('tldr')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {project.description[localeKey]}
            </p>
          </section>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <section className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {metric.label[localeKey]}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Project Content - To be filled with MDX */}
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400">
              {locale === 'pt'
                ? 'Conteúdo detalhado do case em desenvolvimento...'
                : 'Detailed case content in development...'}
            </p>
          </section>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
            <Link
              href={`/${locale}`}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              &larr; {t('backToProjects')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
