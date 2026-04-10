export default function Contact() {
  return (
    <section id="contacts" className="py-20 lg:py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-[#50C8E0] text-sm font-semibold uppercase tracking-widest mb-4">
            Контакты
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            Готовы обсудить ваш объект
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Свяжитесь с нами напрямую — мы ответим и предложим условия сотрудничества.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#50C8E0]/20 rounded flex items-center justify-center text-[#50C8E0] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white/50 text-xs mb-1">Email</div>
                <a
                  href="mailto:megastroi.pto77@mail.ru"
                  className="text-white font-semibold hover:text-[#50C8E0] transition-colors"
                >
                  megastroi.pto77@mail.ru
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#50C8E0]/20 rounded flex items-center justify-center text-[#50C8E0] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white/50 text-xs mb-1">Адрес</div>
                <div className="text-white font-semibold leading-snug">
                  111024, г. Москва,<br />
                  ул. 2-я Энтузиастов, д. 5,<br />
                  помещ. 18/7
                </div>
              </div>
            </div>
          </div>

          <a
            href="mailto:megastroi.pto77@mail.ru"
            className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-[#50C8E0] hover:bg-[#6DD5E8] text-white font-semibold rounded transition-all hover:shadow-lg hover:shadow-[#50C8E0]/25"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Написать нам
          </a>
        </div>
      </div>
    </section>
  );
}
