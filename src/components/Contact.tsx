export default function Contact() {
  return (
    <section id="contacts" className="py-24 lg:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(80,200,224,1) 1px, transparent 1px), linear-gradient(90deg, rgba(80,200,224,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Left cyan stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#50C8E0]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-[1px] bg-[#50C8E0]" />
          <span className="font-technical text-[#50C8E0] text-xs uppercase tracking-[0.25em]">
            Контакты
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline */}
          <div>
            <h2
              className="font-display font-bold text-white leading-none mb-8"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              ГОТОВЫ<br />
              ОБСУДИТЬ<br />
              <span className="text-[#50C8E0]">ВАШ ОБЪЕКТ</span>
            </h2>
            <p className="font-technical text-white/40 text-sm leading-relaxed max-w-sm">
              Свяжитесь с нами напрямую — ответим на вопросы,
              выедем на объект и предложим условия сотрудничества.
            </p>
          </div>

          {/* Right: contact info */}
          <div className="space-y-0">

            {/* Email */}
            <div className="py-8 border-b border-white/10">
              <div className="font-technical text-white/30 text-xs uppercase tracking-[0.25em] mb-3">
                Email
              </div>
              <a
                href="mailto:megastroi.pto77@mail.ru"
                className="font-display font-bold text-white hover:text-[#50C8E0] transition-colors leading-none"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.6rem)" }}
              >
                megastroi.pto77@mail.ru
              </a>
            </div>

            {/* Address */}
            <div className="py-8 border-b border-white/10">
              <div className="font-technical text-white/30 text-xs uppercase tracking-[0.25em] mb-3">
                Адрес
              </div>
              <address
                className="font-technical text-white text-sm leading-relaxed not-italic"
              >
                111024, г. Москва,<br />
                ул. 2-я Энтузиастов, д. 5,<br />
                помещ. 18/7
              </address>
            </div>

            {/* INN / OGRN */}
            <div className="py-8 border-b border-white/10">
              <div className="font-technical text-white/30 text-xs uppercase tracking-[0.25em] mb-3">
                Реквизиты
              </div>
              <div className="font-technical text-white/50 text-sm">
                ООО «Мегастрой»
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-8">
              <a
                href="mailto:megastroi.pto77@mail.ru"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#50C8E0] hover:bg-[#72D8ED] text-[#0B0B0B] font-technical font-bold text-xs uppercase tracking-[0.15em] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Написать нам
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
