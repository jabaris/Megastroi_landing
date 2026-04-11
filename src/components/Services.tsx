const services = [
  {
    num: "01",
    title: "Кладочные работы",
    desc: "Кирпичная и блочная кладка стен, перегородок и несущих конструкций. Работаем с различными материалами в соответствии с проектной документацией.",
    tags: ["Кирпич", "Газоблок", "Керамоблок"],
  },
  {
    num: "02",
    title: "Отделочные работы",
    desc: "Штукатурка, шпаклёвка, облицовка поверхностей. Финишная отделка квартир, офисов и коммерческих помещений под ключ.",
    tags: ["Штукатурка", "Шпаклёвка", "Облицовка"],
  },
  {
    num: "03",
    title: "Внутренние строительные работы",
    desc: "Устройство перегородок, монтаж оконных и дверных блоков, заливка стяжки пола, работы по обустройству инженерных систем.",
    tags: ["Стяжка пола", "Перегородки", "Монтаж блоков"],
  },
  {
    num: "04",
    title: "Подготовка помещений",
    desc: "Демонтажные работы, выравнивание поверхностей, подготовка оснований под финишную отделку. Строго по технологическим регламентам.",
    tags: ["Демонтаж", "Выравнивание", "Подготовка"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#50C8E0]" />
              <span className="font-technical text-[#50C8E0] text-xs uppercase tracking-[0.25em]">
                Наши услуги
              </span>
            </div>
            <h2
              className="font-display font-bold text-white leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              ВИДЫ ВЫПОЛНЯЕМЫХ<br />
              <span className="text-[#50C8E0]">РАБОТ</span>
            </h2>
          </div>
          <a
            href="#contacts"
            className="self-start sm:self-end inline-flex items-center gap-2 font-technical text-[#50C8E0] text-xs uppercase tracking-[0.15em] border-b border-[#50C8E0]/40 hover:border-[#50C8E0] pb-0.5 transition-colors whitespace-nowrap"
          >
            Обсудить объёмы
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-0">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group border border-white/8 hover:border-[#50C8E0]/30 p-8 transition-colors relative overflow-hidden"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Number */}
              <div
                className="font-display font-bold text-white/[0.06] leading-none absolute -top-4 right-4 select-none pointer-events-none"
                style={{ fontSize: "7rem" }}
              >
                {service.num}
              </div>

              {/* Cyan number */}
              <div className="font-technical text-[#50C8E0] text-xs font-bold uppercase tracking-[0.2em] mb-6">
                {service.num}
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-white leading-none mb-4"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-[2px] bg-[#50C8E0] mb-4 group-hover:w-16 transition-all duration-300" />

              {/* Description */}
              <p className="font-technical text-white/40 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-technical text-white/30 text-xs uppercase tracking-wider border border-white/10 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
