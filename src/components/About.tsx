import Image from "next/image";

export default function About() {
  const points = [
    "Опыт генерального подрядчика на объектах «IKEA» и «Росатом»",
    "Реализация проектов любой сложности — от квартир до промышленных объектов",
    "Индивидуальный подход к каждому проекту и нестандартным задачам",
    "Отлаженная система коммуникаций и согласованности действий",
  ];

  const stats = [
    { value: "2009", label: "Год основания", sub: "успешно работаем на рынке" },
    { value: "100+", label: "Проектов", sub: "различной сложности" },
    { value: "50+", label: "Специалистов", sub: "в профессиональной команде" },
    { value: "8", label: "Крупных заказчиков", sub: "доверие проверенное временем" },
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
              Строительная компания «Мегастрой» предлагает профессиональные услуги
              в сфере строительных работ. Мы успешно работаем на рынке с 2009 года
              и за это время зарекомендовали себя как надёжный и ответственный подрядчик.
            </p>
            <p className="font-technical text-[#6A6A6A] text-sm leading-relaxed mb-10">
              За годы работы мы сотрудничали с такими крупными компаниями, как ЗАО «СУ-155»,
              ОАО «СПК МОСЭНЕРГОСТРОЙ», Госкорпорация «Росатом», «IKEA» (Тёплый Стан),
              ООО «Паблисити-Билдинг», ООО «РЕГИОНЖИЛСТРОЙ», ООО «КРОСТ», ООО «КВАДРО».
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

          {/* Right: stats + building photo */}
          <div className="flex flex-col gap-4">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((card, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 border ${
                    idx === 0
                      ? "bg-[#0B0B0B] border-[#0B0B0B]"
                      : idx === 1
                      ? "bg-[#50C8E0] border-[#50C8E0]"
                      : "bg-white border-[#C9C6BF]"
                  }`}
                >
                  <div
                    className={`font-display font-bold leading-none mb-1 sm:mb-2 ${
                      idx === 0
                        ? "text-[#50C8E0]"
                        : idx === 1
                        ? "text-[#0B0B0B]"
                        : "text-[#0B0B0B]"
                    }`}
                    style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
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

            {/* Construction photo */}
            <div className="relative h-52 sm:h-64 overflow-hidden">
              <Image
                src="/images/about.jpg"
                fill
                className="object-cover"
                alt="Строительный объект Мегастрой"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#0B0B0B]/30" />
              {/* Cyan accent line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#50C8E0]" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4">
                <span className="font-technical text-white/70 text-xs uppercase tracking-[0.2em] bg-[#0B0B0B]/60 px-3 py-1.5 backdrop-blur-sm">
                  Качество. Опыт. Результат.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
