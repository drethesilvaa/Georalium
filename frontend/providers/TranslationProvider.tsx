"use client";

import { createContext, useContext } from "react";

type Dictionary = Record<string, any>;

const TranslationContext = createContext<{ dict: Dictionary; lang: string } | null>(null);

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error("useTranslation must be used inside <TranslationProvider>");
  }
  return ctx;
}

export default function TranslationProvider({
  dict,
  lang,
  children,
}: {
  dict: Dictionary;
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <TranslationContext.Provider value={{ dict, lang }}>
      {children}
    </TranslationContext.Provider>
  );
}
