const steps = [
  {
    number: "01",
    title: "Получение заявки",
    desc: "Вы оставляете заявку или звоните напрямую. Мы уточняем объект, объём и сроки.",
  },
  {
    number: "02",
    title: "Согласование объёмов",
    desc: "Выезд на объект, изучение проектной документации, формирование сметы и графика работ.",
  },
  {
    number: "03",
    title: "Заключение договора",
    desc: "Подписываем договор подряда с чёткими условиями, стоимостью и сроками выполнения.",
  },
  {
    number: "04",
    title: "Выполнение работ",
    desc: "Приступаем к работам согласно графику. Ведём контроль качества на каждом этапе.",
  },
  {
    number: "05",
    title: "Сдача объекта",
    desc: "Принимаем работы совместно с техническим надзором заказчика. Подписываем акты.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-[#50C8E0] text-sm font-semibold uppercase tracking-widest mb-4">
            Как мы работаем
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Этапы работы
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Прозрачный процесс от первого контакта до подписания акта
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[calc(10%+16px)] right-[calc(10%+16px)] h-0.5 bg-[#E5E7EB]" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center lg:items-center">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#50C8E0] bg-white flex items-center justify-center mb-4 shrink-0">
                  <span className="text-[#50C8E0] font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-bold text-[#1A1A1A] mb-2 text-sm">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow for mobile */}
                {idx < steps.length - 1 && (
                  <div className="sm:hidden mt-4 text-[#50C8E0]">
                    <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] hover:bg-[#0F0F0F] text-white font-semibold rounded transition-colors"
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
