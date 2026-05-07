
const services = [
  {
    num: "01",
    title: "Инженерно-сантехнические работы",
    desc: "Монтаж систем водоснабжения, канализации, отопления и вентиляции. Выполняем работы на объектах любой сложности — от жилых домов до промышленных комплексов.",
    tags: ["Водоснабжение", "Канализация", "Отопление", "Вентиляция"],
  },
  {
    num: "02",
    title: "Электромонтажные работы",
    desc: "Монтаж электрических сетей, щитового оборудования, систем освещения и заземления. Работаем в соответствии с ПУЭ и проектной документацией.",
    tags: ["Электросети", "Щитовое оборудование", "Освещение"],
  },
  {
    num: "03",
    title: "Кладочные и отделочные работы",
    desc: "Кирпичная кладка, блочная кладка несущих конструкций и перегородок. Штукатурка, шпаклёвка, облицовка — финишная отделка под ключ.",
    tags: ["Кирпич", "Газоблок", "Штукатурка", "Шпаклёвка"],
  },
  {
    num: "04",
    title: "Благоустройство территорий",
    desc: "Устройство дорожек, площадок, газонов и малых архитектурных форм. Озеленение и ландшафтное обустройство прилегающих территорий.",
    tags: ["Дорожки", "Газоны", "Озеленение", "МАФ"],
  },
  {
    num: "05",
    title: "Капитальный ремонт и реконструкция",
    desc: "Комплексный капитальный ремонт и реконструкция объектов любого назначения. Опыт работы на объектах «IKEA», «Росатом» и крупных корпоративных заказчиков.",
    tags: ["Капремонт", "Реконструкция", "Металлоконструкции"],
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
              className="group border border-white/8 hover:border-[#50C8E0]/30 transition-colors relative overflow-hidden"
            >
              {/* Content */}
              <div className="p-6 sm:p-8 relative">
                {/* Number badge */}
                <div className="font-technical text-[#50C8E0] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  {service.num}
                </div>

                {/* Number watermark */}
                <div
                  className="font-display font-bold text-white/[0.05] leading-none absolute -top-4 right-4 select-none pointer-events-none"
                  style={{ fontSize: "7rem" }}
                >
                  {service.num}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-bold text-white leading-none mb-4"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)" }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
