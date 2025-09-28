import "server-only";

const dictionaries = {
  en: () => import("./locales/en/common.json").then((m) => m.default),
  pt: () => import("./locales/pt/common.json").then((m) => m.default),
};

export async function getDictionary(locale: string) {
  const dictLoader = (dictionaries as Record<string, () => Promise<any>>)[
    locale
  ];
  if (!dictLoader)
    throw new Error(`No dictionary found for locale "${locale}"`);
  return dictLoader();
}
