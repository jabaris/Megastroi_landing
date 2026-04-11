export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-[#0B0B0B] overflow-hidden"
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(80,200,224,1) 1px, transparent 1px), linear-gradient(90deg, rgba(80,200,224,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span
          className="font-display font-bold text-white/[0.018] uppercase whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 20vw, 18rem)", letterSpacing: "-0.03em" }}
        >
          МЕГАСТРОЙ
        </span>
      </div>

      {/* Left cyan accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#50C8E0]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-28 pb-16">

        {/* Label row */}
        <div className="fade-up flex items-center gap-4 mb-10">
          <span className="w-8 h-[1px] bg-[#50C8E0]" />
          <span className="font-technical text-[#50C8E0] text-xs uppercase tracking-[0.3em]">
            ООО Мегастрой · Москва · с 2018 года
          </span>
        </div>

        {/* Main headline */}
        <h1 className="fade-up-2 font-display font-bold text-white mb-2 leading-none">
          <span className="block" style={{ fontSize: "clamp(2.8rem, 9vw, 8rem)" }}>
            КЛАДОЧНЫЕ
          </span>
          <span className="block" style={{ fontSize: "clamp(2.8rem, 9vw, 8rem)" }}>
            И ОТДЕЛОЧНЫЕ
          </span>
          <span
            className="block text-[#50C8E0]"
            style={{ fontSize: "clamp(2.8rem, 9vw, 8rem)" }}
          >
            РАБОТЫ
          </span>
        </h1>

        {/* Ruled separator */}
        <div className="fade-up-3 w-full h-[1px] bg-white/10 my-8" />

        {/* Subheading + CTA row */}
        <div className="fade-up-3 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16 mb-16">
          <p className="font-technical text-white/45 text-sm leading-relaxed max-w-md">
            Надёжный субподрядчик для застройщиков и генподрядных организаций.
            Кирпичная кладка, отделка, внутренние работы под ключ.
            Работаем по договору — соблюдаем сроки и стандарты качества.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#50C8E0] hover:bg-[#72D8ED] text-[#0B0B0B] font-technical font-bold text-xs uppercase tracking-[0.15em] transition-colors"
            >
              Обсудить объект
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-white/30 text-white/55 hover:text-white font-technical text-xs uppercase tracking-[0.15em] transition-colors"
            >
              Наши услуги
            </a>
          </div>
        </div>

        {/* Stats — editorial ruled blocks */}
        <div className="fade-up-5 grid grid-cols-2 sm:grid-cols-4 border-t border-white/10">
          {[
            { value: "6+", label: "лет на рынке" },
            { value: "50+", label: "объектов сдано" },
            { value: "100%", label: "работа по договору" },
            { value: "0", label: "срывов сроков" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="border-r border-white/10 last:border-r-0 px-6 pt-6 pb-2 first:pl-0"
            >
              <div
                className="font-display font-bold text-[#50C8E0] leading-none mb-2"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
              >
                {stat.value}
              </div>
              <div className="font-technical text-white/35 text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent pointer-events-none" />
    </section>
  );
}
