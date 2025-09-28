import 'server-only';

const dictionaries = {
  en: () => import('./locales/en/common.json').then((m) => m.default),
  pt: () => import('./locales/pt/common.json').then((m) => m.default),
};

export async function getDictionary(locale: 'en' | 'pt') {
  return dictionaries[locale]();
}