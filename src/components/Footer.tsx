export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-[#50C8E0] flex items-center justify-center bg-white/5 shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-widest">МЕГАСТРОЙ</div>
              <div className="text-white/40 text-xs">ООО · с 2018 года</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: "О компании", href: "#about" },
              { label: "Услуги", href: "#services" },
              { label: "Контакты", href: "#contacts" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/50 hover:text-white text-xs transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-white/30 text-xs text-center md:text-right">
            © {currentYear} ООО «Мегастрой»
            <br className="hidden md:block" />
            <span className="md:hidden"> · </span>
            Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
}
