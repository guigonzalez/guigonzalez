import { getRequestConfig } from 'next-intl/server';

const locales = ['pt', 'en'] as const;
const defaultLocale = 'pt';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as typeof locales[number])) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../src/i18n/messages/${locale}.json`)).default
  };
});
