import { useState } from "react";
import { motion as Motion } from "framer-motion";
import logo from "./assets/logoshsmarsistemas.fundotransparente.png";
import heroBg from "./assets/hero-background.png";
import andersonPhoto from "./assets/anderson-jordao.png";
import gustavoPhoto from "./assets/gustavo-henrique.png";

const whatsappUrl = "https://wa.me/5513996387593";
const instagramUrl =
  "https://www.instagram.com/shamar_sistemas?igsh=dXY0YWoyc2x5OG5k&utm_source=qr";
const igrejasUrl = "https://igrejas.shamarsistemas.com.br";
const prontuariosUrl = "https://prontuarios.shamarsistemas.com.br";

const contacts = [
  {
    name: "Anderson Jordão",
    role: "Diretor Comercial",
    phone: "13 99638 7593",
    whatsapp: "https://wa.me/5513996387593",
    email: "anderson@shamarsistemas.com.br",
    photo: andersonPhoto,
  },
  {
    name: "Gustavo Henrique",
    role: "Diretor de Tecnologia",
    phone: "11 95031 4723",
    whatsapp: "https://wa.me/5511950314723",
    email: "gustavo@shamarsistemas.com.br",
    photo: gustavoPhoto,
  },
];

const solutions = [
  {
    title: "Shamar Igrejas",
    description:
      "Gestão financeira, membros, relatórios, departamentos e congregações em uma única plataforma.",
    icon: "church",
    href: igrejasUrl,
    action: "Acessar sistema",
  },
  {
    title: "Shamar Prontuários",
    description:
      "Prontuário eletrônico com fluxo completo para recepção, enfermagem, triagem, atendimento médico e receituário.",
    icon: "health",
    href: prontuariosUrl,
    action: "Acessar sistema",
  },
  {
    title: "Shamar Empresas",
    description: "Solução de gestão empresarial para pequenos e médios negócios.",
    icon: "business",
    action: "Em breve",
    disabled: true,
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

  if (name === "health") {
    return (
      <svg {...common}>
        <path d="M8 3h8" />
        <path d="M9 3v5H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-4V3" />
        <path d="M12 11v6" />
        <path d="M9 14h6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M8 10h2" />
      <path d="M8 14h2" />
      <path d="M16 14h1" />
      <path d="M16 18h1" />
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

const SolutionAction = ({ solution }) => {
  if (solution.disabled) {
    return (
      <button
        className="mt-6 inline-flex h-11 cursor-not-allowed items-center justify-center rounded-lg border border-slate-200 bg-slate-100 px-5 text-sm font-bold text-slate-500"
        disabled
      >
        {solution.action}
      </button>
    );
  }

  return (
    <a
      href={solution.href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-700 to-emerald-500 px-5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl"
    >
      {solution.action}
      <ArrowIcon />
    </a>
  );
};

const ClientArea = ({ onBack }) => (
  <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-8">
        <button onClick={onBack} className="flex items-center" aria-label="Voltar para Shamar Sistemas">
          <img src={logo} alt="Shamar Sistemas" className="h-10 w-auto object-contain md:h-12" />
        </button>

        <button
          onClick={onBack}
          className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-blue-700"
        >
          Voltar ao site
        </button>
      </div>
    </header>

    <main className="relative isolate overflow-hidden px-5 py-14 md:px-8 md:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-[#061633]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-700 opacity-90" />

      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-white">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
            Área do cliente
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Escolha o sistema Shamar que deseja acessar.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 md:text-lg">
            Entre diretamente no ambiente do seu aplicativo ou fale com nossa equipe
            para receber suporte.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <a
            href={igrejasUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[250px] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/10 transition hover:-translate-y-1 hover:border-cyan-200"
          >
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 text-blue-700 ring-1 ring-slate-200">
              <Icon name="church" />
            </div>
            <h2 className="mt-6 text-xl font-extrabold text-slate-950">Shamar Igrejas</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
              Acesse sua plataforma de gestão de igrejas, membros, financeiro e relatórios.
            </p>
            <span className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-700 to-emerald-500 px-5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition group-hover:shadow-xl">
              Entrar no sistema
              <ArrowIcon />
            </span>
          </a>

          <a
            href={prontuariosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[250px] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/10 transition hover:-translate-y-1 hover:border-cyan-200"
          >
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 text-blue-700 ring-1 ring-slate-200">
              <Icon name="health" />
            </div>
            <h2 className="mt-6 text-xl font-extrabold text-slate-950">Shamar Prontuários</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
              Entre no sistema de prontuário eletrônico para clínicas e atendimentos.
            </p>
            <span className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-700 to-emerald-500 px-5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition group-hover:shadow-xl">
              Entrar no sistema
              <ArrowIcon />
            </span>
          </a>

          <div className="flex min-h-[250px] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/10">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 text-blue-700 ring-1 ring-slate-200">
              <Icon name="business" />
            </div>
            <h2 className="mt-6 text-xl font-extrabold text-slate-950">Shamar Empresas</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
              Plataforma de gestão empresarial para pequenos e médios negócios.
            </p>
            <span className="mt-6 inline-flex h-11 cursor-not-allowed items-center justify-center rounded-lg border border-slate-200 bg-slate-100 px-5 text-sm font-bold text-slate-500">
              Em breve
            </span>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-200/70">
          <p className="text-sm font-semibold text-slate-600">Precisa de ajuda para acessar?</p>
          <a
            href={whatsappUrl}
            className="mt-4 inline-flex h-11 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 px-5 text-sm font-bold text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-100"
          >
            Falar com a Shamar
          </a>
        </div>
      </section>
    </main>
  </div>
);

const ContactArea = ({ onBack }) => (
  <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-8">
        <button onClick={onBack} className="flex items-center" aria-label="Voltar para Shamar Sistemas">
          <img src={logo} alt="Shamar Sistemas" className="h-10 w-auto object-contain md:h-12" />
        </button>

        <button
          onClick={onBack}
          className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-blue-700"
        >
          Voltar ao site
        </button>
      </div>
    </header>

    <main className="relative isolate overflow-hidden px-5 py-14 md:px-8 md:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-[#061633]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-gradient-to-r from-blue-950 via-cyan-900 to-emerald-700 opacity-90" />

      <section className="mx-auto max-w-5xl">
        <div className="max-w-3xl text-white">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
            Contato
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Fale com a Shamar Sistemas.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 md:text-lg">
            Tire dúvidas, solicite atendimento ou acompanhe nossas novidades pelos canais oficiais.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => (
            <article
              key={contact.email}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-blue-950/10"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={contact.photo}
                  alt={contact.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-700">
                  {contact.role}
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">{contact.name}</h2>

                <div className="mt-5 space-y-2 text-sm font-semibold text-slate-600">
                  <p>WhatsApp: {contact.phone}</p>
                  <p>Email: {contact.email}</p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-500 px-5 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    WhatsApp
                    <ArrowIcon />
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-blue-700"
                  >
                    Enviar email
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-200/70">
          <p className="text-sm font-semibold text-slate-600">
            Acompanhe também a Shamar Sistemas no Instagram.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-700 to-emerald-500 px-5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Abrir Instagram
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  </div>
);

export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "client") {
    return <ClientArea onBack={() => setScreen("home")} />;
  }

  if (screen === "contact") {
    return <ContactArea onBack={() => setScreen("home")} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-8">
          <a href="#inicio" className="flex items-center" aria-label="Shamar Sistemas">
            <img src={logo} alt="Shamar Sistemas" className="h-10 w-auto object-contain md:h-12" />
          </a>

          <nav className="hidden items-center gap-10 text-sm font-bold text-slate-700 md:flex">
            <a className="transition hover:text-blue-700" href="#solucoes">Soluções</a>
            <a className="transition hover:text-blue-700" href="#sobre">Sobre nós</a>
            <button className="font-bold transition hover:text-blue-700" onClick={() => setScreen("contact")}>
              Contato
            </button>
          </nav>

          <button
            onClick={() => setScreen("client")}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-blue-700 to-emerald-500 px-4 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl sm:px-5"
          >
            Área do cliente
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
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061633]/65 via-[#061633]/25 to-transparent" />

          <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-14 md:px-8 lg:min-h-[580px]">
            <div className="max-w-[680px]">
              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 }}
                className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur"
              >
                Shamar Sistemas
              </Motion.p>

              <Motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="text-4xl font-black leading-[1.1] md:text-5xl lg:text-[56px]"
              >
                Soluções inteligentes para{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  igrejas, clínicas e empresas.
                </span>
              </Motion.h1>

              <Motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-5 max-w-2xl text-base leading-7 text-slate-100 md:text-lg"
              >
                Desenvolvemos sistemas modernos que simplificam processos, organizam
                informações e ajudam sua equipe a produzir mais.
              </Motion.p>

              <Motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#solucoes"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-7 text-base font-bold text-white shadow-xl shadow-emerald-950/30 transition hover:-translate-y-0.5"
                >
                  Conhecer soluções
                  <ArrowIcon />
                </a>

                <button
                  onClick={() => setScreen("contact")}
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/35 bg-white/5 px-7 text-base font-bold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Falar com a Shamar
                </button>
              </Motion.div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="px-5 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-700">
                Nossas soluções
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                Sistemas para diferentes rotinas, com a mesma base de confiança.
              </h2>
              <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-blue-600 to-emerald-500" />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <Motion.article
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.06 }}
                  className="flex min-h-[300px] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-200"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 text-blue-700 ring-1 ring-slate-200">
                    <Icon name={solution.icon} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-slate-950">{solution.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {solution.description}
                  </p>
                  <SolutionAction solution={solution} />
                </Motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-white px-5 py-14 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-emerald-600">
                Sobre nós
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                Tecnologia feita para organizar operações importantes.
              </h2>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-slate-200/70">
              <p className="text-base leading-8 text-slate-700">
                A Shamar Sistemas desenvolve plataformas digitais para equipes que precisam
                de informação clara, processos bem definidos e ferramentas confiáveis no dia
                a dia. Atuamos com soluções para igrejas, clínicas e empresas, sempre com
                foco em simplicidade, segurança e produtividade.
              </p>
            </div>
          </div>
        </section>

        <section id="acesso" className="px-5 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-4xl rounded-2xl bg-[#061633] p-7 text-center text-white shadow-2xl shadow-blue-950/20 md:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-200">
              Já é cliente?
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Acesse diretamente o sistema que você utiliza.
            </h2>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={igrejasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-blue-800 transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Entrar no Shamar Igrejas
                <ArrowIcon />
              </a>
              <a
                href={prontuariosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/35 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
              >
                Entrar no Shamar Prontuários
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-slate-200 bg-white px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <img src={logo} alt="Shamar Sistemas" className="h-12 w-auto object-contain" />
            <h2 className="mt-4 text-xl font-black text-slate-950">Shamar Sistemas</h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Tecnologia, transparência e propósito.
            </p>
          </div>

          <div className="text-sm leading-7 text-slate-600 md:text-right">
            <p className="font-extrabold text-slate-950">Contato:</p>
            <a className="block transition hover:text-emerald-600" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              (13) 99638-7593
            </a>
            <a className="block transition hover:text-blue-700" href={instagramUrl} target="_blank" rel="noopener noreferrer">
              @shamar_sistemas
            </a>
            <p>shamarsistemas.com.br</p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 Shamar Sistemas. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
