import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Каталог", href: "#catalog" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const CATALOG_ITEMS = [
  { category: "Двигатель", items: ["Масляные фильтры", "Воздушные фильтры", "Свечи зажигания", "Ремни ГРМ"], icon: "Settings" },
  { category: "Тормозная система", items: ["Тормозные колодки", "Тормозные диски", "Суппорты", "Тормозная жидкость"], icon: "CircleStop" },
  { category: "Подвеска", items: ["Амортизаторы", "Шаровые опоры", "Сайлентблоки", "Рулевые наконечники"], icon: "Gauge" },
  { category: "Расходники", items: ["Моторные масла", "Антифриз", "Тормозная жидкость", "Омыватель"], icon: "Droplets" },
] as const;

type CatalogIcon = typeof CATALOG_ITEMS[number]["icon"];
type ServiceIcon = "Wrench" | "Settings" | "CircleStop" | "Gauge" | "Zap" | "Car";
type ContactIcon = "MapPin" | "Phone" | "Mail" | "Clock";

const SERVICES = [
  { title: "Техническое обслуживание", description: "Плановое ТО по регламенту производителя. Замена масла, фильтров, технических жидкостей.", price: "от 2 500 ₽", icon: "Wrench" },
  { title: "Ремонт двигателя", description: "Диагностика и устранение неисправностей двигателя. Капитальный и текущий ремонт.", price: "от 5 000 ₽", icon: "Settings" },
  { title: "Тормозная система", description: "Замена колодок, дисков, суппортов. Прокачка тормозной системы.", price: "от 1 800 ₽", icon: "CircleStop" },
  { title: "Подвеска и рулевое", description: "Диагностика и ремонт подвески, развал-схождение, замена сайлентблоков.", price: "от 2 000 ₽", icon: "Gauge" },
  { title: "Электрооборудование", description: "Диагностика электросистемы, замена аккумулятора, ремонт генератора.", price: "от 1 500 ₽", icon: "Zap" },
  { title: "Кузовные работы", description: "Рихтовка, покраска, замена кузовных элементов. Полировка и защита кузова.", price: "от 3 000 ₽", icon: "Car" },
];

const TEAM = [
  { name: "Алексей Петров", role: "Главный механик", experience: "15 лет опыта" },
  { name: "Дмитрий Козлов", role: "Специалист по ходовой", experience: "12 лет опыта" },
  { name: "Сергей Иванов", role: "Электрик-диагност", experience: "10 лет опыта" },
  { name: "Михаил Сидоров", role: "Кузовной мастер", experience: "8 лет опыта" },
];

const CONTACTS = [
  { icon: "MapPin", label: "Адрес", value: "ул. Щепкина, 2" },
  { icon: "Phone", label: "Телефон", value: "+7 (953) 415-31-09" },
  { icon: "Mail", label: "Email", value: "Auto-stimul@mail.ru" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 9:00–18:00" },
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCatalog, setActiveCatalog] = useState(0);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#ebebeb]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <Icon name="Car" size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-[#141414]">
              АВТО<span className="text-red-600">СЕРВИС</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="nav-link text-sm font-medium text-[#555] hover:text-[#141414] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79534153109" className="flex items-center gap-2 text-sm font-semibold text-[#141414] hover:text-red-600 transition-colors">
              <Icon name="Phone" size={15} />
              +7 (953) 415-31-09
            </a>
            <button
              onClick={() => scrollTo("#contacts")}
              className="bg-[#141414] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-red-600 transition-colors"
            >
              Записаться
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-[#ebebeb] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm font-medium text-[#555] hover:text-[#141414]"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacts")}
              className="bg-[#141414] text-white text-sm font-medium px-5 py-2.5 rounded text-center"
            >
              Записаться
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden bg-[#f5f5f0]">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/8430b8b8-8db8-40a1-849e-94cf2f3ca362/bucket/fef54e10-3078-45a4-b20a-19f635aa0c11.png)` }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <div className="w-8 h-[2px] bg-red-500" />
              <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">Авто-Стимул</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#141414] leading-none mb-6 animate-slide-up">
              Ваш автомобиль<br />в надёжных<br /><span className="text-red-500">руках</span>
            </h1>
            <p className="text-[#555] text-lg mb-10 leading-relaxed animate-slide-up-delay-1">
              Запчасти от ведущих производителей и полный цикл технического обслуживания — всё в одном месте.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up-delay-2">
              <button
                onClick={() => scrollTo("#services")}
                className="bg-red-600 text-white font-semibold px-8 py-4 rounded hover:bg-red-700 transition-colors"
              >
                Наши услуги
              </button>
              <button
                onClick={() => scrollTo("#catalog")}
                className="border border-[#141414]/40 text-[#141414] font-semibold px-8 py-4 rounded hover:border-[#141414] hover:bg-[#141414]/10 transition-all"
              >
                Каталог запчастей
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#141414]/10 backdrop-blur-md border-t border-[#141414]/10">
          <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "15+", label: "Лет на рынке" },
              { num: "10 000+", label: "Довольных клиентов" },
              { num: "50 000+", label: "Позиций запчастей" },
              { num: "25+", label: "Мастеров в команде" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-[#141414]">{stat.num}</div>
                <div className="text-[#555] text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="section-line" />
            <h2 className="text-4xl font-black text-[#141414] mb-4">Каталог запчастей</h2>
            <p className="text-[#777] text-lg max-w-xl">Более 50 000 позиций от ведущих мировых производителей с гарантией качества.</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {CATALOG_ITEMS.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveCatalog(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all ${
                  activeCatalog === i
                    ? "bg-[#141414] text-white"
                    : "bg-[#f4f4f4] text-[#555] hover:bg-[#ebebeb]"
                }`}
              >
                <Icon name={item.icon} size={15} />
                {item.category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#ebebeb] rounded overflow-hidden">
            <div className="bg-white p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#f4f4f4] rounded flex items-center justify-center">
                  <Icon name={CATALOG_ITEMS[activeCatalog].icon} size={20} className="text-red-600" />
                </div>
                <h3 className="text-2xl font-bold">{CATALOG_ITEMS[activeCatalog].category}</h3>
              </div>
              <ul className="space-y-1">
                {CATALOG_ITEMS[activeCatalog].items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#555] py-3 border-b border-[#f4f4f4] last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="min-h-[300px] bg-cover bg-center"
              style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/8430b8b8-8db8-40a1-849e-94cf2f3ca362/files/6f8866a4-6b83-42b8-8d32-d8974a755b42.jpg)` }}
            />
          </div>


        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="section-line" />
            <h2 className="text-4xl font-black text-[#141414] mb-4">Услуги автосервиса</h2>
            <p className="text-[#777] text-lg max-w-xl">Полный спектр работ по обслуживанию и ремонту автомобилей любых марок.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div key={i} className="bg-white rounded p-8 card-hover border border-[#ebebeb] cursor-default">
                <div className="w-12 h-12 bg-[#f4f4f4] rounded flex items-center justify-center mb-5">
                  <Icon name={service.icon} size={22} className="text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-[#141414] mb-2">{service.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f4f4f4]">
                  <span className="font-semibold text-[#141414]">{service.price}</span>
                  <button
                    onClick={() => scrollTo("#contacts")}
                    className="text-red-600 text-sm font-medium hover:underline"
                  >
                    Записаться →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-line" />
              <h2 className="text-4xl font-black text-[#141414] mb-6">О нас</h2>
              <p className="text-[#555] text-lg leading-relaxed mb-6">
                Мы работаем с 2009 года и за это время стали одним из самых надёжных автосервисов города. Более 10 000 клиентов доверяют нам свои автомобили.
              </p>
              <p className="text-[#555] leading-relaxed mb-8">
                Наши мастера — сертифицированные специалисты с многолетним опытом. Мы используем только профессиональное оборудование и качественные запчасти.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Shield", text: "Гарантия на все работы" },
                  { icon: "Clock", text: "Чёткое соблюдение сроков" },
                  { icon: "BadgeCheck", text: "Сертифицированные мастера" },
                  { icon: "TrendingDown", text: "Честные цены без скрытых наценок" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f4f4f4] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={item.icon} size={15} className="text-red-600" />
                    </div>
                    <span className="text-sm text-[#555] leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("#contacts")}
                className="bg-[#141414] text-white font-medium px-8 py-4 rounded hover:bg-red-600 transition-colors"
              >
                Связаться с нами
              </button>
            </div>

            <div className="space-y-4">
              <div
                className="h-64 rounded bg-cover bg-center"
                style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/8430b8b8-8db8-40a1-849e-94cf2f3ca362/files/4faf0d7e-7971-41d4-a9d3-04792a56af57.jpg)` }}
              />
              <div className="grid grid-cols-2 gap-4">
                {TEAM.map((member, i) => (
                  <div key={i} className="bg-[#f9f9f9] rounded p-5 border border-[#ebebeb]">
                    <div className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-sm">{member.name.charAt(0)}</span>
                    </div>
                    <div className="font-semibold text-[#141414] text-sm">{member.name}</div>
                    <div className="text-red-600 text-xs font-medium mt-0.5">{member.role}</div>
                    <div className="text-[#999] text-xs mt-1">{member.experience}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="section-line" />
            <h2 className="text-4xl font-black text-white mb-4">Контакты</h2>
            <p className="text-white/50 text-lg">Свяжитесь с нами удобным способом или оставьте заявку</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 mb-10">
                {CONTACTS.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={18} className="text-red-500" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "MessageCircle", label: "WhatsApp" },
                  { icon: "Send", label: "Telegram" },
                  { icon: "Phone", label: "Позвонить" },
                ].map((btn, i) => (
                  <button key={i} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded transition-colors">
                    <Icon name={btn.icon} size={15} />
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded p-8">
              <h3 className="text-white font-bold text-xl mb-6">Записаться на сервис</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Марка и модель автомобиля</label>
                  <input
                    type="text"
                    placeholder="Toyota Camry 2020"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Описание проблемы</label>
                  <textarea
                    rows={3}
                    placeholder="Опишите, что нужно сделать..."
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-red-600 text-white font-semibold py-4 rounded hover:bg-red-700 transition-colors">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-red-600 rounded flex items-center justify-center">
              <Icon name="Car" size={14} className="text-white" />
            </div>
            <span className="font-bold text-white">АВТО<span className="text-red-500">СЕРВИС</span></span>
          </div>
          <p className="text-white/30 text-sm">© 2024 АвтоСервис. Все права защищены.</p>
          <div className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}