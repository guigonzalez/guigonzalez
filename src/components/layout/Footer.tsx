'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('navigation');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/resume`, label: t('resume') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com/in/guigonzalez', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/guigonzalez/', label: 'Instagram' },
    { href: 'https://guigonzalezux.medium.com', label: 'Medium' },
  ];

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Gui Gonzalez. {tFooter('rights')}.
        </div>
      </div>
    </footer>
  );
}
