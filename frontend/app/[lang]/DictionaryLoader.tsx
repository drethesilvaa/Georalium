// app/[lang]/DictionaryLoader.tsx
import { getDictionary } from "./dictionaries";
import TranslationProvider from "@/providers/TranslationProvider";

export default async function DictionaryLoader({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  const dict = await getDictionary(lang);

  return (
    <TranslationProvider dict={dict} lang={lang}>
      {children}
    </TranslationProvider>
  );
}
