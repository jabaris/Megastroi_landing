import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ru" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
