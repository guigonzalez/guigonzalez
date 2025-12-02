'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Timeline } from '@/components/resume/Timeline';
import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { ResumePDF } from '@/components/resume/ResumePDF';

export default function ResumePage() {
  const t = useTranslations('resume');
  const locale = useLocale() as 'pt' | 'en';
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    try {
      const blob = await pdf(<ResumePDF locale={locale} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `guilherme-gonzalez-cv-${locale}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t('title')}
          </h1>
          <button
            onClick={handleDownloadPdf}
            disabled={isGenerating}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            {isGenerating ? (locale === 'pt' ? 'Gerando...' : 'Generating...') : t('downloadPdf')}
          </button>
        </div>

        <Timeline />
      </div>
    </div>
  );
}
