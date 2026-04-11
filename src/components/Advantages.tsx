const advantages = [
  {
    title: "Работаем с 2018 года",
    desc: "Более 6 лет успешной работы на строительном рынке. Накопленный опыт позволяет эффективно решать задачи любой сложности.",
  },
  {
    title: "Опыт с крупными объектами",
    desc: "Реализовали проекты на объектах жилой застройки от 10 000 кв.м. Знаем специфику крупного строительного производства.",
  },
  {
    title: "Строгое соблюдение сроков",
    desc: "Своевременная сдача — один из главных принципов компании. Разрабатываем реалистичные графики и неукоснительно их выполняем.",
  },
  {
    title: "Многоуровневый контроль качества",
    desc: "Контроль на каждом этапе работ. Соответствие СНиП, ГОСТ и проектной документации — обязательное условие для нашей команды.",
  },
  {
    title: "Работа только по договору",
    desc: "Официальное оформление всех договорённостей. Чёткие условия оплаты, прозрачная смета, юридическая защита заказчика.",
  },
  {
    title: "Профессиональная команда",
    desc: "Квалифицированные специалисты с многолетним опытом. Постоянный состав бригад обеспечивает слаженную и качественную работу.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 lg:py-32 bg-[#ECEAE5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-0 border-b border-[#C9C6BF] pb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#0B0B0B]" />
              <span className="font-technical text-[#6A6A6A] text-xs uppercase tracking-[0.25em]">
                Наши преимущества
              </span>
            </div>
            <h2
              className="font-display font-bold text-[#0B0B0B] leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              ПОЧЕМУ ВЫБИРАЮТ<br />
              <span className="text-[#50C8E0]">МЕГАСТРОЙ</span>
            </h2>
          </div>
          <p className="font-technical text-[#6A6A6A] text-sm max-w-xs leading-relaxed">
            Принципы работы, которые обеспечивают доверие застройщиков
            и генподрядных организаций
          </p>
        </div>

        {/* Advantages grid — ruled rows */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="group border-b border-r border-[#C9C6BF] p-8 hover:bg-[#0B0B0B] transition-colors duration-300
                [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r
                lg:[&:nth-child(3n)]:border-r-0
                [&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              {/* Number */}
              <div className="font-display font-bold text-[#C9C6BF] group-hover:text-[#50C8E0]/20 text-5xl leading-none mb-4 transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-[#0B0B0B] group-hover:text-white leading-tight mb-3 transition-colors"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
              >
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-6 h-[2px] bg-[#50C8E0] mb-4" />

              {/* Description */}
              <p className="font-technical text-[#6A6A6A] group-hover:text-white/50 text-sm leading-relaxed transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
