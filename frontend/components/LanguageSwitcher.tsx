"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();

  const locales = ["en", "pt"];

  return (
    <nav className="flex gap-1">
      {locales.map((lng) => (
        <Link
          key={lng}
          href={`/${lng}${pathname.replace(/^\/[a-z]{2}/, "")}`}
          className={lng === params.lang ? "font-bold underline" : ""}
        >
          {lng.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
