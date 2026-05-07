export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-[#0B0B0B] overflow-hidden"
    >
      {/* Background construction photo — right side on desktop, subtle full on mobile */}
      <div className="absolute inset-0 md:left-[40%]">
        <img
          src="/images/hero.webp"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
          loading="eager"
        />
        {/* Dark tint */}
        <div className="absolute inset-0 bg-[#0B0B0B]/70 md:bg-[#0B0B0B]/45" />
        {/* Left-to-right gradient blending photo into content */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/20 md:from-[#0B0B0B] md:via-[#0B0B0B]/60 md:to-transparent" />
        {/* Cyan tint overlay */}
        <div className="absolute inset-0 bg-[#50C8E0]/[0.03]" />
      </div>

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

      {/* Content — max 55% width on desktop to leave room for photo */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-28 pb-16">
        <div className="lg:max-w-[55%]">

          {/* Label row */}
          <div className="fade-up flex items-center gap-4 mb-10">
            <span className="w-8 h-[1px] bg-[#50C8E0]" />
            <span className="font-technical text-[#50C8E0] text-xs uppercase tracking-[0.3em]">
              ООО Мегастрой · Москва · с 2009 года
            </span>
          </div>

          {/* Main headline */}
          <h1 className="fade-up-2 font-display font-bold text-white mb-2 leading-none">
            <span className="block" style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
              СТРОИТЕЛЬНЫЕ
            </span>
            <span className="block" style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
              РЕШЕНИЯ ДЛЯ
            </span>
            <span
              className="block text-[#50C8E0]"
              style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
            >
              ВАШИХ ПРОЕКТОВ
            </span>
          </h1>

          {/* Ruled separator */}
          <div className="fade-up-3 w-full h-[1px] bg-white/10 my-8" />

          {/* Subheading + CTA row */}
          <div className="fade-up-3 flex flex-col sm:flex-row sm:items-end gap-8 mb-16">
            <p className="font-technical text-white/50 text-sm leading-relaxed max-w-sm">
              Строительная компания «Мегастрой» предлагает профессиональные услуги
              в сфере строительных работ. Работаем на рынке с 2009 года — надёжный
              и ответственный подрядчик.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
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
              { value: "15+", label: "лет на рынке" },
              { value: "100+", label: "проектов сдано" },
              { value: "50+", label: "специалистов" },
              { value: "8", label: "крупных заказчиков" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="border-r border-white/10 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:last:border-r-0 px-4 sm:px-6 pt-6 pb-4 first:pl-0"
              >
                <div
                  className="font-display font-bold text-[#50C8E0] leading-none mb-2"
                  style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
                >
                  {stat.value}
                </div>
                <div className="font-technical text-white/35 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent pointer-events-none" />
    </section>
  );
}
