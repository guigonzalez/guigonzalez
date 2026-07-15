'use client';

import { useRef } from 'react';
import { ImageWithBasePath } from '@/components/ui/ImageWithBasePath';

export interface FlowStep {
  src: string;
  alt: string;
  label?: string;
}

interface FlowStepsProps {
  steps: FlowStep[];
  accentColor?: string;
}

export function FlowSteps({ steps, accentColor = '#d81159' }: FlowStepsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: 'none' }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800 ring-1 ring-black/5">
              <ImageWithBasePath
                src={step.src}
                alt={step.alt}
                width={800}
                height={1600}
                className="w-full h-auto object-contain object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow"
                style={{ backgroundColor: accentColor }}
              >
                {i + 1}
              </div>
            </div>
            {step.label && (
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center leading-snug">
                {step.label}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Desktop nav arrows */}
      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        aria-label="Anterior"
        className="hidden sm:flex absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-900 shadow-lg items-center justify-center text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        aria-label="Próximo"
        className="hidden sm:flex absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-900 shadow-lg items-center justify-center text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
