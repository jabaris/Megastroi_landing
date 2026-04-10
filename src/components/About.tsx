export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <div className="text-[#50C8E0] text-sm font-semibold uppercase tracking-widest mb-4">
              О компании
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Строительная компания с многолетним опытом
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              ООО «Мегастрой» — строительная компания, специализирующаяся на
              кладочных и отделочных работах. С 2018 года мы выступаем надёжным
              подрядчиком для застройщиков и генподрядных организаций.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Наши объекты — жилая застройка и коммерческая недвижимость. Мы
              ориентированы на долгосрочное сотрудничество, строгое соблюдение
              договорных обязательств и стандартов качества.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Опыт работы с крупными объектами жилой застройки",
                "Полное соблюдение проектной документации",
                "Ориентация на долгосрочное партнёрство",
                "Команда квалифицированных специалистов",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#50C8E0] rounded flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                year: "2018",
                label: "Год основания",
                desc: "Работаем на строительном рынке",
              },
              {
                year: "50+",
                label: "Объектов сдано",
                desc: "Жилая и коммерческая застройка",
              },
              {
                year: "100%",
                label: "По договору",
                desc: "Прозрачные условия сотрудничества",
              },
              {
                year: "0",
                label: "Срывов сроков",
                desc: "Всегда сдаём в оговорённые даты",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg border ${
                  idx === 0
                    ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                    : "bg-[#F5F6F8] border-[#E5E7EB]"
                }`}
              >
                <div
                  className={`text-3xl font-bold mb-1 ${
                    idx === 0 ? "text-[#50C8E0]" : "text-[#1A1A1A]"
                  }`}
                >
                  {card.year}
                </div>
                <div
                  className={`font-semibold text-sm mb-1 ${
                    idx === 0 ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  {card.label}
                </div>
                <div
                  className={`text-xs leading-relaxed ${
                    idx === 0 ? "text-white/60" : "text-[#6B7280]"
                  }`}
                >
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
