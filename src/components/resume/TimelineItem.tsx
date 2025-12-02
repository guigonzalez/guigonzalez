'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '@/data/experience';

interface TimelineItemProps {
  experience: Experience;
  locale: 'pt' | 'en';
  index: number;
  presentLabel: string;
}

export function TimelineItem({ experience, locale, index, presentLabel }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  const period = experience.period.end
    ? `${experience.period.start} - ${experience.period.end}`
    : `${experience.period.start} - ${presentLabel}`;

  const hasHighlights = experience.highlights && experience.highlights[locale].length > 0;

  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gray-900 rounded-full transform -translate-x-1/2 z-10" />

      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <motion.div
          className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow ${
            hasHighlights ? '' : 'cursor-default'
          }`}
          onClick={() => hasHighlights && setIsExpanded(!isExpanded)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="text-sm text-gray-500 mb-1">{period}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.company}</h3>
          <div className="text-gray-700 font-medium mb-1">{experience.role[locale]}</div>
          {experience.location && (
            <div className="text-sm text-gray-500 mb-2">{experience.location[locale]}</div>
          )}
          <p className="text-gray-600 text-sm">{experience.description[locale]}</p>

          <AnimatePresence>
            {isExpanded && hasHighlights && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className={`mt-4 pt-4 border-t border-gray-100 space-y-2 ${isEven ? 'md:text-right' : ''}`}>
                  {experience.highlights?.[locale].map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-gray-400 flex-shrink-0">&bull;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {hasHighlights && (
            <div className={`mt-3 text-xs text-gray-400 ${isEven ? 'md:text-right' : ''}`}>
              {isExpanded ? '- ' : '+ '}
              {locale === 'pt' ? 'clique para detalhes' : 'click for details'}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
