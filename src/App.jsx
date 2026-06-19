import { motion as Motion } from "framer-motion";
import logo from "./assets/logo.png";
import heroBg from "./assets/hero-background.png";

const whatsappUrl = "https://wa.me/5513999999999";

const features = [
  {
    title: "Controle financeiro",
    description: "Entradas, saídas, dízimos, ofertas e relatórios em uma visão clara.",
    icon: "finance",
  },
  {
    title: "Gestão de membros",
    description: "Cadastros organizados, histórico pastoral e acompanhamento por grupos.",
    icon: "members",
  },
  {
    title: "Relatórios automáticos",
    description: "Indicadores prontos para decisões rápidas e prestação de contas.",
    icon: "reports",
  },
  {
    title: "Multi-igrejas",
    description: "Administre congregações, permissões e dados de forma centralizada.",
    icon: "church",
  },
];

const Icon = ({ name }) => {
  const common = {
    className: "h-7 w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "members") {
    return (
      <svg {...common}>
        <path d="M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M21 20v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.2a4 4 0 0 1 0 7.6" />
      </svg>
    );
  }

  if (name === "reports") {
    return (
      <svg {...common}>
        <path d="M7 3h7l5 5v13H7z" />
        <path d="M14 3v6h5" />
        <path d="M10 17v-4" />
        <path d="M13 17v-7" />
        <path d="M16 17v-2" />
      </svg>
    );
  }

  if (name === "church") {
    return (
      <svg {...common}>
        <path d="M12 3v18" />
        <path d="M8 6h8" />
        <path d="M5 21V10l7-5 7 5v11" />
        <path d="M9 21v-6h6v6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15v-4" />
      <path d="M12 15V8" />
      <path d="M16 15v-6" />
      <path d="m17 5 3 3-3 3" />
    </svg>
  );
};

const ArrowIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function App() {
  const openWhatsapp = () => window.open(whatsappUrl, "_blank", "noopener");

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-8">
          <a href="#inicio" className="flex items-center" aria-label="Shamar Sistemas">
            <img src={logo} alt="Shamar Sistemas" className="h-10 w-auto object-contain md:h-12" />
          </a>

          <nav className="hidden items-center gap-10 text-sm font-bold text-slate-700 md:flex">
            <a className="transition hover:text-blue-700" href="#funcionalidades">Funcionalidades</a>
            <a className="transition hover:text-blue-700" href="#planos">Planos</a>
            <a className="transition hover:text-blue-700" href="#contato">Contato</a>
          </nav>

          <button
            onClick={openWhatsapp}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-blue-700 to-emerald-500 px-5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Testar grátis
            <ArrowIcon />
          </button>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="relative isolate overflow-hidden bg-[#061633] bg-no-repeat text-white"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061633]/40 via-transparent to-transparent" />

          <div className="mx-auto flex min-h-[450px] max-w-7xl items-center px-5 py-12 md:min-h-[500px] md:px-8 lg:min-h-[520px]">
            <div className="max-w-[560px]">
              <Motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="text-4xl font-black leading-[1.1] md:text-5xl lg:text-[56px]"
              >
                Sistema completo para{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  gestão de igrejas
                </span>
              </Motion.h1>

              <Motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-5 max-w-md text-base leading-7 text-slate-100 md:text-lg"
              >
                Controle financeiro, membros, relatórios e muito mais, em um só lugar.
              </Motion.p>

              <Motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <button
                  onClick={openWhatsapp}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-7 text-base font-bold text-white shadow-xl shadow-emerald-950/30 transition hover:-translate-y-0.5"
                >
                  Testar grátis
                  <ArrowIcon />
                </button>

                <a
                  href="#demo"
                  className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/5 px-7 text-base font-bold text-white transition hover:bg-white hover:text-slate-950"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-current text-[10px]">
                    ▶
                  </span>
                  Ver demonstração
                </a>
              </Motion.div>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="px-5 py-12 md:px-8 md:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-black text-slate-950">
                Tudo que sua igreja precisa
              </h2>
              <div className="mx-auto mt-3 h-0.5 w-14 bg-gradient-to-r from-blue-600 to-emerald-500" />
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {features.map((item, index) => (
                <Motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-200"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 text-blue-700 ring-1 ring-slate-200">
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </Motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}