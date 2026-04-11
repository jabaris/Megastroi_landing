const steps = [
  {
    number: "01",
    title: "Заявка",
    desc: "Оставляете заявку или звоните напрямую. Уточняем объект, объём и предварительные сроки.",
  },
  {
    number: "02",
    title: "Согласование",
    desc: "Выезд на объект, изучение проектной документации, формирование сметы и графика работ.",
  },
  {
    number: "03",
    title: "Договор",
    desc: "Подписываем договор подряда с чёткими условиями, стоимостью и сроками выполнения.",
  },
  {
    number: "04",
    title: "Выполнение",
    desc: "Приступаем к работам строго по графику. Ведём контроль качества на каждом этапе.",
  },
  {
    number: "05",
    title: "Сдача",
    desc: "Принимаем работы совместно с техническим надзором. Подписываем акты выполненных работ.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20 border-b border-[#C9C6BF] pb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#0B0B0B]" />
              <span className="font-technical text-[#6A6A6A] text-xs uppercase tracking-[0.25em]">
                Как мы работаем
              </span>
            </div>
            <h2
              className="font-display font-bold text-[#0B0B0B] leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              ЭТАПЫ<br />
              <span className="text-[#50C8E0]">СОТРУДНИЧЕСТВА</span>
            </h2>
          </div>
          <p className="font-technical text-[#6A6A6A] text-sm max-w-xs leading-relaxed">
            Прозрачный процесс от первого контакта
            до подписания акта выполненных работ
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative group border-r border-[#C9C6BF] last:border-r-0 px-6 first:pl-0 last:pr-0 sm:border-r-0 lg:border-r pb-8 lg:pb-0"
            >
              {/* Step number — massive background */}
              <div
                className="font-display font-bold text-[#C9C6BF]/50 leading-none select-none mb-2"
                style={{ fontSize: "5rem" }}
              >
                {step.number}
              </div>

              {/* Arrow connector (desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 z-10">
                  <svg className="w-6 h-6 text-[#50C8E0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Cyan line */}
              <div className="w-8 h-[2px] bg-[#50C8E0] mb-4" />

              {/* Title */}
              <h3
                className="font-display font-bold text-[#0B0B0B] leading-tight mb-3"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-technical text-[#6A6A6A] text-xs leading-relaxed">
                {step.desc}
              </p>

              {/* Mobile separator */}
              {idx < steps.length - 1 && (
                <div className="sm:hidden absolute -bottom-0 left-6 right-0 h-[1px] bg-[#C9C6BF]" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-[#C9C6BF]">
          <a
            href="#contacts"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0B0B0B] hover:bg-[#1A1A1A] text-white font-technical font-bold text-xs uppercase tracking-[0.15em] transition-colors"
          >
            Начать сотрудничество
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
