"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { label: "О компании", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Преимущества", href: "#advantages" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0B]/97 backdrop-blur-sm border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      {/* Cyan top stripe */}
      <div className="h-[2px] w-full bg-[#50C8E0]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className="bg-white px-2 py-1 rounded">
              <Image
                src="/logo-v2.png"
                alt="ООО Мегастрой"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-technical text-white/50 hover:text-white text-xs uppercase tracking-[0.15em] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="mailto:megastroi.pto77@mail.ru"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#50C8E0] hover:bg-[#72D8ED] text-[#0B0B0B] font-technical font-bold text-xs uppercase tracking-[0.1em] transition-colors"
          >
            Связаться
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/60 hover:text-white p-1"
            aria-label="Меню"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0B0B] border-t border-white/10 px-6 py-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block font-technical text-white/50 hover:text-white text-xs uppercase tracking-[0.15em] py-3 border-b border-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:megastroi.pto77@mail.ru"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 text-center px-5 py-3 bg-[#50C8E0] text-[#0B0B0B] font-technical font-bold text-xs uppercase tracking-[0.1em]"
          >
            Связаться с нами
          </a>
        </div>
      )}
    </header>
  );
}
