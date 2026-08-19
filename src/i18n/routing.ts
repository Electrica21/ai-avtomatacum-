import { defineRouting } from 'next-intl/routing';

// Site languages: Armenian (hy), Russian (ru), English (en).
// Armenian is the default because the current live site serves Armenian
// content at the bare domain; this can be revisited once real usage data
// or a client decision says otherwise.
export const routing = defineRouting({
  locales: ['hy', 'ru', 'en'],
  defaultLocale: 'hy',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
