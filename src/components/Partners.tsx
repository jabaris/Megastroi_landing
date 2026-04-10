const partners = [
  { name: 'ООО "РЕГИОНЖИЛСТРОЙ"', type: "Генподрядная организация" },
  { name: 'ООО "Квадро"', type: "Генподрядная организация / Застройщик" },
  { name: "Фонд реновации", type: "Застройщик" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-[#50C8E0] text-sm font-semibold uppercase tracking-widest mb-4">
            Наши заказчики
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Нам доверяют ведущие{" "}
            <span className="text-[#50C8E0]">генподрядные организации</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Мы работаем с застройщиками и генподрядными организациями,
            подтверждая репутацию надёжного партнёра на каждом объекте
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 hover:border-[#50C8E0]/40 hover:bg-white/10 rounded-lg p-5 text-center transition-all group"
            >
              {/* Logo placeholder */}
              <div className="w-12 h-12 bg-[#50C8E0]/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#50C8E0]/30 transition-colors">
                <span className="text-[#50C8E0] font-bold text-sm">
                  {partner.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="text-white text-xs font-medium leading-tight mb-1">
                {partner.name}
              </div>
              <div className="text-white/40 text-xs">{partner.type}</div>
            </div>
          ))}
        </div>

        {/* Trust quote */}
        <div className="mt-14 text-center">
          <blockquote className="text-white/60 text-lg italic max-w-2xl mx-auto">
            «Долгосрочное сотрудничество строится на качестве работ,
            соблюдении сроков и честности — именно это мы гарантируем каждому
            заказчику»
          </blockquote>
          <div className="mt-4 text-[#50C8E0] text-sm font-medium">
            — ООО «Мегастрой»
          </div>
        </div>
      </div>
    </section>
  );
}
