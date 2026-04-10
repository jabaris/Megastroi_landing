"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "О компании", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Преимущества", href: "#advantages" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo-v2.png"
              alt="ООО Мегастрой"
              width={180}
              height={50}
              className="h-9 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="mailto:megastroi.pto77@mail.ru"
            className="hidden md:inline-flex items-center px-4 py-2 bg-[#50C8E0] hover:bg-[#6DD5E8] text-white text-sm font-medium rounded transition-colors"
          >
            Связаться с нами
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/70 hover:text-white"
            aria-label="Меню"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F0F0F] border-t border-white/10 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/70 hover:text-white text-sm py-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:megastroi.pto77@mail.ru"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-4 py-2 bg-[#50C8E0] hover:bg-[#6DD5E8] text-white text-sm font-medium rounded transition-colors mt-2"
          >
            Связаться с нами
          </a>
        </div>
      )}
    </header>
  );
}
