import Image from "next/image";

const projects = [
  {
    num: "01",
    client: "ЗАО «СУ-155»",
    desc: "Выполняли электромонтажные и инженерно-сантехнические работы",
    type: "Электромонтажные и сантехнические работы",
    image: "/images/project-1.jpg",
  },
  {
    num: "02",
    client: "ОАО «СПК МОСЭНЕРГОСТРОЙ»",
    desc: "Осуществляли инженерно-сантехнические работы на объектах компании",
    type: "Инженерно-сантехнические работы",
    image: "/images/project-2.jpg",
  },
  {
    num: "03",
    client: "Госкорпорация «Росатом»",
    desc: "Проводили реконструкцию архивных помещений",
    type: "Реконструкция",
    image: "/images/project-3.jpg",
  },
  {
    num: "04",
    client: "«IKEA» (Тёплый Стан)",
    desc: "Выполняли капитальный ремонт металлоконструкций на объекте",
    type: "Капитальный ремонт",
    image: "/images/project-4.jpg",
  },
  {
    num: "05",
    client: "ООО «Паблисити-Билдинг»",
    desc: "Реализовывали проекты по благоустройству территорий",
    type: "Благоустройство",
    image: "/images/service-4.jpg",
  },
  {
    num: "06",
    client: "ООО «РЕГИОНЖИЛСТРОЙ», ООО «КРОСТ», ООО «КВАДРО»",
    desc: "Выполняли кладочные и отделочные работы",
    type: "Кладочные и отделочные работы",
    image: "/images/project-5.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#50C8E0]" />
              <span className="font-technical text-[#50C8E0] text-xs uppercase tracking-[0.25em]">
                Реализованные проекты
              </span>
            </div>
            <h2
              className="font-display font-bold text-white leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              НАШ ОПЫТ —<br />
              <span className="text-[#50C8E0]">ВАША УВЕРЕННОСТЬ</span>
            </h2>
          </div>
          <p className="font-technical text-white/40 text-sm max-w-xs leading-relaxed">
            За годы работы мы успешно реализовали широкий спектр проектов
            для государственных структур и крупных компаний
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group border border-white/8 hover:border-[#50C8E0]/40 transition-colors relative overflow-hidden"
            >
              {/* Photo thumbnail */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={project.client}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#0B0B0B]/50 group-hover:bg-[#0B0B0B]/35 transition-colors duration-500" />
                {/* Bottom gradient into card */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
                {/* Number badge */}
                <div className="absolute top-4 left-4 font-technical text-[#50C8E0] text-xs font-bold uppercase tracking-[0.2em] bg-[#0B0B0B]/70 px-2.5 py-1 backdrop-blur-sm">
                  {project.num}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                {/* Client */}
                <h3
                  className="font-display font-bold text-white leading-tight mb-3"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                >
                  {project.client}
                </h3>

                <div className="w-8 h-[2px] bg-[#50C8E0] mb-3 group-hover:w-16 transition-all duration-300" />

                {/* Description */}
                <p className="font-technical text-white/40 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Type badge */}
                <span className="font-technical text-white/30 text-xs uppercase tracking-wider border border-white/10 px-3 py-1">
                  {project.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-technical text-white/25 text-xs uppercase tracking-[0.15em]">
            Полный перечень объектов — по запросу
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 font-technical text-[#50C8E0] text-xs uppercase tracking-[0.15em] border-b border-[#50C8E0]/40 hover:border-[#50C8E0] pb-0.5 transition-colors whitespace-nowrap"
          >
            Обсудить ваш проект
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
