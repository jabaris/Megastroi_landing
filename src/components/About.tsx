export default function About() {
  const points = [
    "Опыт работы с крупными объектами жилой застройки",
    "Полное соблюдение проектной документации и норм",
    "Ориентация на долгосрочное партнёрство",
    "Постоянный состав квалифицированных бригад",
  ];

  const stats = [
    { value: "2018", label: "Год основания", sub: "работаем на рынке" },
    { value: "50+", label: "Объектов", sub: "жилая и коммерческая" },
    { value: "100%", label: "По договору", sub: "прозрачные условия" },
    { value: "0", label: "Срывов сроков", sub: "гарантия пунктуальности" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#ECEAE5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-[1px] bg-[#0B0B0B]" />
          <span className="font-technical text-[#6A6A6A] text-xs uppercase tracking-[0.25em]">
            О компании
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: editorial text */}
          <div>
            <h2
              className="font-display font-bold text-[#0B0B0B] mb-8 leading-none"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              СТРОИТЕЛЬНАЯ<br />
              КОМПАНИЯ<br />
              <span className="text-[#50C8E0]">С ОПЫТОМ</span>
            </h2>

            <div className="w-12 h-[3px] bg-[#50C8E0] mb-8" />

            <p className="font-technical text-[#6A6A6A] text-sm leading-relaxed mb-5">
              ООО «Мегастрой» специализируется на кладочных и отделочных работах.
              С 2018 года выступаем надёжным субподрядчиком для застройщиков
              и генподрядных организаций Москвы и Подмосковья.
            </p>
            <p className="font-technical text-[#6A6A6A] text-sm leading-relaxed mb-10">
              Наши объекты — жилая застройка и коммерческая недвижимость.
              Ориентируемся на долгосрочное сотрудничество, строгое соблюдение
              договорных обязательств и стандартов качества.
            </p>

            {/* Checklist */}
            <div className="space-y-0">
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 py-4 border-b border-[#C9C6BF] first:border-t"
                >
                  <span className="font-technical text-[#50C8E0] text-xs mt-0.5 shrink-0 font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-technical text-[#0B0B0B] text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((card, idx) => (
              <div
                key={idx}
                className={`p-6 border ${
                  idx === 0
                    ? "bg-[#0B0B0B] border-[#0B0B0B]"
                    : idx === 1
                    ? "bg-[#50C8E0] border-[#50C8E0]"
                    : "bg-white border-[#C9C6BF]"
                }`}
              >
                <div
                  className={`font-display font-bold leading-none mb-2 ${
                    idx === 0
                      ? "text-[#50C8E0]"
                      : idx === 1
                      ? "text-[#0B0B0B]"
                      : "text-[#0B0B0B]"
                  }`}
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  {card.value}
                </div>
                <div
                  className={`font-technical font-bold text-sm uppercase tracking-wider mb-1 ${
                    idx === 0 ? "text-white" : idx === 1 ? "text-[#0B0B0B]" : "text-[#0B0B0B]"
                  }`}
                >
                  {card.label}
                </div>
                <div
                  className={`font-technical text-xs leading-relaxed ${
                    idx === 0
                      ? "text-white/40"
                      : idx === 1
                      ? "text-[#0B0B0B]/60"
                      : "text-[#6A6A6A]"
                  }`}
                >
                  {card.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
