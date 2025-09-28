import type { Metadata } from "next";
import { Lato, Karla } from "next/font/google";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary } from "./dictionaries";
import DictionaryLoader from "./DictionaryLoader";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

type Params = Promise<{ lang: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Georalium",
    description:
      "Georalium Mining & Energy is a local Angolan firm supporting the mining sector with specialized services for investors and operators—reducing risk and streamlining market entry.",
    alternates: {
      canonical: `/${lang}`,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} data-theme="light">
      <body className={`${lato.variable} ${karla.variable} antialiased`}>
        <DictionaryLoader lang={lang}>
          <SmoothScroll>{children}</SmoothScroll>
        </DictionaryLoader>
        <Toaster
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
          }}
          position="top-center"
          reverseOrder={false}
        />
        <Analytics />
      </body>
    </html>
  );
}
