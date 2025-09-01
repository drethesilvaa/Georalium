import type { Metadata } from "next";
import { Lato, Karla } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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

export const metadata: Metadata = {
  title: "Georalium",
  description: "Georalium Mining & Energy is a local Angolan firm supporting the mining sector with specialized services for investors and operators—reducing risk and streamlining market entry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${lato.variable} ${karla.variable} antialiased`}
      >

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
