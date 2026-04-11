import type { Metadata } from "next";
import { Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-ibm-mono",
  weight: ["400", "500", "700"],
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
