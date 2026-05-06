import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const oswald = localFont({
  src: [
    { path: "../fonts/oswald-cyrillic.woff2", weight: "400 700" },
    { path: "../fonts/oswald-latin.woff2", weight: "400 700" },
  ],
  variable: "--font-oswald",
  display: "swap",
});

const ibmPlexMono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-cyrillic-400.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-mono-latin-400.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-mono-cyrillic-500.woff2", weight: "500" },
    { path: "../fonts/ibm-plex-mono-latin-500.woff2", weight: "500" },
    { path: "../fonts/ibm-plex-mono-cyrillic-700.woff2", weight: "700" },
    { path: "../fonts/ibm-plex-mono-latin-700.woff2", weight: "700" },
  ],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ООО «Мегастрой» — Кладочные и отделочные работы",
  description:
    "Надёжный подрядчик для застройщиков и генподрядных организаций. Кладочные и отделочные работы с 2018 года. Соблюдение сроков, контроль качества, работа по договору.",
  keywords:
    "кладочные работы, отделочные работы, строительный подрядчик, генподрядчик, Мегастрой, строительство",
  openGraph: {
    title: "ООО «Мегастрой» — Кладочные и отделочные работы",
    description:
      "Надёжный подрядчик для застройщиков и генподрядных организаций с 2018 года.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`h-full ${oswald.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
