"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8, 8, 8, 0.96)"
          : "linear-gradient(180deg, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.65) 60%, rgba(8,8,8,0.0) 100%)",
        backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "blur(6px)",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(160%)" : "blur(6px)",
        boxShadow: scrolled
          ? "0 1px 0 rgba(80,200,224,0.25), 0 4px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)"
          : "none",
      }}
    >
      {/* Cyan top stripe — always visible */}
      <div
        className="h-[2px] w-full transition-all duration-500"
        style={{
          background: scrolled
            ? "linear-gradient(90deg, #50C8E0 0%, #72D8ED 50%, #50C8E0 100%)"
            : "linear-gradient(90deg, transparent 0%, #50C8E0 30%, #72D8ED 70%, transparent 100%)",
          boxShadow: scrolled ? "0 0 12px rgba(80,200,224,0.6)" : "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div
              className="px-2 py-1 rounded transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
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
                className="relative font-technical text-white/55 hover:text-white text-xs uppercase tracking-[0.15em] transition-all duration-200 group"
              >
                {item.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#50C8E0] transition-all duration-300 group-hover:w-full"
                  aria-hidden
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="mailto:megastroi.pto77@mail.ru"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-technical font-bold text-xs uppercase tracking-[0.1em] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #50C8E0 0%, #3BB8D2 100%)",
              color: "#080808",
              boxShadow: "0 2px 16px rgba(80,200,224,0.30)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 24px rgba(80,200,224,0.55)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 2px 16px rgba(80,200,224,0.30)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Связаться
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/60 hover:text-white p-1 transition-colors"
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
        <div
          className="md:hidden border-t px-6 py-6 space-y-1"
          style={{
            background: "rgba(8,8,8,0.98)",
            backdropFilter: "blur(24px)",
            borderColor: "rgba(80,200,224,0.15)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block font-technical text-white/50 hover:text-white text-xs uppercase tracking-[0.15em] py-3 transition-colors"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:megastroi.pto77@mail.ru"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 text-center px-5 py-3 font-technical font-bold text-xs uppercase tracking-[0.1em]"
            style={{
              background: "linear-gradient(135deg, #50C8E0 0%, #3BB8D2 100%)",
              color: "#080808",
              boxShadow: "0 2px 16px rgba(80,200,224,0.3)",
            }}
          >
            Связаться с нами
          </a>
        </div>
      )}
    </header>
  );
}
