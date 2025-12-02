import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  const socialLinks = [
    { href: 'https://linkedin.com/in/guigonzalez', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/guigonzalez/', label: 'Instagram' },
    { href: 'https://guigonzalezux.medium.com', label: 'Medium' },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t('getInTouch')}
        </h1>

        <div className="mb-12">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            {t('email')}
          </h2>
          <a
            href="mailto:guiperezgo@gmail.com"
            className="text-2xl text-blue-600 hover:text-blue-800 font-medium"
          >
            guiperezgo@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            {t('socialLinks')}
          </h2>
          <div className="flex items-center justify-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
