const projects = [
  {
    name: "ЖК «Северный квартал»",
    address: "Корпуса 1–4, секции А–Г",
    type: "Кладочные работы",
    area: "28 000 м²",
  },
  {
    name: "ЖК «Greenpark»",
    address: "1-й пусковой комплекс",
    type: "Отделочные работы",
    area: "14 500 м²",
  },
  {
    name: "МФК «Центральный»",
    address: "Офисный блок, этажи 1–12",
    type: "Внутренние работы",
    area: "9 800 м²",
  },
  {
    name: "ЖК «Солнечный»",
    address: "Корпуса 5–8",
    type: "Кладочные работы",
    area: "32 000 м²",
  },
  {
    name: "ЖК «Западный берег»",
    address: "Блок-секция 3",
    type: "Отделочные работы",
    area: "11 200 м²",
  },
  {
    name: "Производственный комплекс",
    address: "Складская зона, корпус 2",
    type: "Подготовительные работы",
    area: "6 400 м²",
  },
  {
    name: "ЖК «Берёзовая роща»",
    address: "1-я очередь, корпуса 1–3",
    type: "Кладочные работы",
    area: "19 700 м²",
  },
  {
    name: "Торговый центр «Меридиан»",
    address: "Торговая галерея, уровни 1–3",
    type: "Отделочные работы",
    area: "8 300 м²",
  },
];

const typeColors: Record<string, string> = {
  "Кладочные работы": "bg-[#50C8E0]/10 text-[#50C8E0]",
  "Отделочные работы": "bg-blue-50 text-blue-600",
  "Внутренние работы": "bg-green-50 text-green-600",
  "Подготовительные работы": "bg-purple-50 text-purple-600",
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-[#50C8E0] text-sm font-semibold uppercase tracking-widest mb-4">
            Реализованные объекты
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Наши объекты
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Успешно реализованные строительные проекты в жилом и коммерческом сегменте
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1A1A1A] text-white text-sm">
                <th className="text-left px-6 py-4 font-semibold">Объект</th>
                <th className="text-left px-6 py-4 font-semibold">Адрес / Описание</th>
                <th className="text-left px-6 py-4 font-semibold">Вид работ</th>
                <th className="text-right px-6 py-4 font-semibold">Площадь</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-[#E5E7EB] hover:bg-[#F5F6F8] transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className="font-semibold text-[#1A1A1A] text-sm">
                      {project.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">
                    {project.address}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded text-xs font-medium ${
                        typeColors[project.type] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {project.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[#1A1A1A] font-medium text-sm">
                      {project.area}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-[#E5E7EB] p-5"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-[#1A1A1A] text-sm leading-tight">
                  {project.name}
                </h3>
                <span className="text-[#1A1A1A] font-medium text-xs ml-3 shrink-0">
                  {project.area}
                </span>
              </div>
              <p className="text-[#6B7280] text-xs mb-3">{project.address}</p>
              <span
                className={`inline-flex px-2.5 py-1 rounded text-xs font-medium ${
                  typeColors[project.type] || "bg-gray-100 text-gray-600"
                }`}
              >
                {project.type}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[#6B7280] text-sm mt-8">
          Полный перечень объектов — по запросу
        </p>
      </div>
    </section>
  );
}
