const advantages = [
  {
    title: "Работаем с 2018 года",
    desc: "Более 6 лет успешной работы на строительном рынке. Накопленный опыт позволяет нам эффективно решать задачи любой сложности.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Опыт с крупными объектами",
    desc: "Реализовали строительные проекты на объектах жилой застройки площадью от 10 000 кв.м. Знаем специфику крупных строительных процессов.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Строгое соблюдение сроков",
    desc: "Своевременная сдача работ — один из главных принципов компании. Мы разрабатываем реалистичные графики и неукоснительно их соблюдаем.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Контроль качества",
    desc: "Многоуровневый контроль на каждом этапе работ. Соответствие СНиП, ГОСТ и проектной документации — обязательное условие для нашей команды.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Работа по договору",
    desc: "Официальное оформление всех договорённостей. Чёткие условия оплаты, прозрачная смета, юридическая защита интересов заказчика.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Профессиональная команда",
    desc: "Квалифицированные специалисты с многолетним опытом в строительстве. Постоянный состав бригад обеспечивает слаженную и качественную работу.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-[#50C8E0] text-sm font-semibold uppercase tracking-widest mb-4">
            Наши преимущества
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Почему выбирают Мегастрой
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Наши принципы работы обеспечивают доверие со стороны застройщиков и
            генподрядных организаций
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-lg border border-[#E5E7EB] hover:border-[#1A1A1A]/20 hover:shadow-md transition-all group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-[#50C8E0] rounded-l-lg transition-colors" />
              <div className="text-[#50C8E0] mb-4">{item.icon}</div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
