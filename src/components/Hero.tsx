export default function Hero() {
  const utpItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "Опыт работы с генподрядчиками",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Соблюдение сроков",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      text: "Контроль качества",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#1A1A1A] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.3) 40px,
              rgba(255,255,255,0.3) 41px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.3) 40px,
              rgba(255,255,255,0.3) 41px
            )`,
          }}
        />
      </div>

      {/* Orange accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#50C8E0]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#50C8E0]/15 border border-[#50C8E0]/30 rounded text-[#50C8E0] text-xs font-medium mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#50C8E0] rounded-full animate-pulse" />
            Работаем с 2018 года
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Кладочные и отделочные работы{" "}
            <span className="text-[#50C8E0]">для застройщиков</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl">
            Надёжный подрядчик для крупных строительных проектов. Работаем с
            генподрядными организациями, соблюдаем сроки и обеспечиваем
            качество.
          </p>

          {/* UTP items */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {utpItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#50C8E0]/20 rounded flex items-center justify-center text-[#50C8E0] shrink-0">
                  {item.icon}
                </div>
                <span className="text-white/80 text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#50C8E0] hover:bg-[#6DD5E8] text-white font-semibold rounded transition-all hover:shadow-lg hover:shadow-[#50C8E0]/25 active:scale-[0.98]"
            >
              Связаться с нами
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:+7XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium rounded transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {[
            { value: "6+", label: "лет на рынке" },
            { value: "50+", label: "реализованных объектов" },
            { value: "100%", label: "работа по договору" },
            { value: "0", label: "срывов сроков" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-[#50C8E0]">{stat.value}</div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
