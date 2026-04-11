export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-[3px] h-8 bg-[#50C8E0]" />
            <div>
              <div className="font-display font-bold text-white text-xl tracking-widest">
                МЕГАСТРОЙ
              </div>
              <div className="font-technical text-white/25 text-xs uppercase tracking-[0.2em] mt-0.5">
                ООО · Основан 2018 · Москва
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {[
              { label: "О компании", href: "#about" },
              { label: "Услуги", href: "#services" },
              { label: "Заказчики", href: "#partners" },
              { label: "Контакты", href: "#contacts" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-technical text-white/25 hover:text-white/60 text-xs uppercase tracking-[0.15em] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="font-technical text-white/20 text-xs">
            © {currentYear} ООО «Мегастрой»
          </div>
        </div>
      </div>
    </footer>
  );
}
