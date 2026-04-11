const partners = [
  { name: 'РЕГИОНЖИЛСТРОЙ', full: 'ООО "РЕГИОНЖИЛСТРОЙ"', type: "Генподрядная организация" },
  { name: 'КВАДРО', full: 'ООО "Квадро"', type: "Генподрядная организация / Застройщик" },
  { name: 'ФОНД РЕНОВАЦИИ', full: "Фонд реновации", type: "Застройщик" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-[1px] bg-[#50C8E0]" />
          <span className="font-technical text-[#50C8E0] text-xs uppercase tracking-[0.25em]">
            Наши заказчики
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline */}
          <div>
            <h2
              className="font-display font-bold text-white leading-none mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              НАМ ДОВЕРЯЮТ<br />
              <span className="text-[#50C8E0]">ВЕДУЩИЕ</span><br />
              ГЕНПОДРЯДЧИКИ
            </h2>

            {/* Quote */}
            <div className="border-l-[3px] border-[#50C8E0] pl-6 mt-10">
              <p className="font-technical text-white/40 text-sm leading-relaxed italic mb-3">
                «Долгосрочное сотрудничество строится на качестве работ,
                соблюдении сроков и честности — именно это мы гарантируем
                каждому заказчику»
              </p>
              <span className="font-technical text-[#50C8E0] text-xs uppercase tracking-[0.2em]">
                — ООО «Мегастрой»
              </span>
            </div>
          </div>

          {/* Right: partner list */}
          <div className="space-y-0">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between py-8 border-b border-white/8 hover:border-[#50C8E0]/30 transition-colors"
              >
                <div>
                  <div
                    className="font-display font-bold text-white group-hover:text-[#50C8E0] leading-none mb-1 transition-colors"
                    style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}
                  >
                    {partner.name}
                  </div>
                  <div className="font-technical text-white/30 text-xs uppercase tracking-wider">
                    {partner.type}
                  </div>
                </div>
                <div className="w-8 h-[1px] bg-white/15 group-hover:bg-[#50C8E0] group-hover:w-12 transition-all duration-300" />
              </div>
            ))}

            {/* CTA to partner */}
            <div className="pt-8">
              <a
                href="#contacts"
                className="inline-flex items-center gap-3 font-technical text-white/40 hover:text-[#50C8E0] text-xs uppercase tracking-[0.2em] transition-colors"
              >
                Стать заказчиком
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
