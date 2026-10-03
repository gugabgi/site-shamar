import { useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import logo from "./assets/logoshsmarsistemas.fundotransparente.png";
import brandLockupBackground from "./assets/sistemas-completo-escuro.png";
import brandShieldBackground from "./assets/sistemas-escudo.png";
import brandWordmarkBackground from "./assets/sistemas-letreiro-escuro.png";
import andersonPhoto from "./assets/anderson-jordao.png";
import gustavoPhoto from "./assets/gustavo-henrique.png";
import shamarIgrejasCard from "./assets/igrejas-escudo.png";
import shamarIgrejasWordmark from "./assets/igrejas-letreiro-escuro.png";
import shamarProntuariosCard from "./assets/prontuario-escudo.png";
import shamarEmpresasCard from "./assets/empresas-escudo.png";
import { SiteFooter } from "./components/SiteChrome.jsx";
import { AccountDeletionPage, PrivacyPolicyPage, TermsOfUsePage } from "./pages/ShamarIgrejasLegalPages.jsx";

const whatsappUrl = "https://wa.me/5513996387593";
const instagramUrl =
  "https://www.instagram.com/shamar_sistemas?igsh=dXY0YWoyc2x5OG5k&utm_source=qr";
const igrejasUrl = "https://igrejas.shamarsistemas.com.br";
const prontuariosUrl = "https://prontuarios.shamarsistemas.com.br";
const empresasUrl = "https://empresas.shamarsistemas.com.br/";

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

const buildEmailUrl = (email, name) => {
  const subject = encodeURIComponent(`Contato pelo site - ${name}`);
  const body = encodeURIComponent("Olá, gostaria de falar com a Shamar Sistemas.");

  return `mailto:${email}?subject=${subject}&body=${body}`;
};

const solutions = [
  {
    title: "Shamar Igrejas",
    description:
      "Gestão financeira, membros, relatórios, departamentos e congregações em uma única plataforma.",
    icon: "church",
    image: shamarIgrejasCard,
    href: igrejasUrl,
    action: "Acessar sistema",
  },
  {
    title: "Shamar Prontuários",
    description:
      "Prontuário eletrônico com fluxo completo para recepção, enfermagem, triagem, atendimento médico e receituário.",
    icon: "health",
    image: shamarProntuariosCard,
    href: prontuariosUrl,
    action: "Acessar sistema",
  },
  {
    title: "Shamar Empresas",
    description: "Solução de gestão empresarial para pequenos e médios negócios.",
    icon: "business",
    image: shamarEmpresasCard,
    href: empresasUrl,
    action: "Acessar sistema",
  },
];

const churchFeatures = [
  { icon: "members", title: "Membros", description: "Cadastro e acompanhamento" },
  { icon: "finance", title: "Financeiro", description: "Entradas, saídas e relatórios" },
  { icon: "visitors", title: "Visitantes", description: "Registro e acompanhamento" },
  { icon: "assets", title: "Patrimônios", description: "Controle de bens e empréstimos" },
  { icon: "ministries", title: "Ministérios", description: "Departamentos e equipes" },
  { icon: "events", title: "Eventos", description: "Cultos, reuniões e agenda" },
  { icon: "access", title: "Acessos", description: "Perfis e permissões" },
];

const loopedChurchFeatures = [...churchFeatures, ...churchFeatures];

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

const ChurchFeatureIcon = ({ name }) => {
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

  const icons = {
    members: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20c0-4 2.5-6 6-6s6 2 6 6" /><path d="M15 15c3 0 5 1.5 5 4" /></>,
    finance: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" /></>,
    visitors: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 2.5-6 6-6 1.2 0 2.3.2 3.2.7" /><path d="M17 12v7" /><path d="M13.5 15.5h7" /></>,
    assets: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4.5 7.7 7.5 4.2 7.5-4.2" /><path d="M12 12v9" /></>,
    ministries: <><circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" /><path d="M2.5 20c0-3.5 2-5.5 5.5-5.5S13.5 16.5 13.5 20" /><path d="M10.5 20c0-3.5 2-5.5 5.5-5.5s5.5 2 5.5 5.5" /></>,
    events: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /><path d="M8 14h3M13 14h3M8 17h3" /></>,
    access: <><circle cx="12" cy="8" r="3" /><path d="M6 21v-2a6 6 0 0 1 12 0v2" /><path d="m17 12 2 2 3-3" /></>,
  };

  return <svg {...common}>{icons[name]}</svg>;
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
    <span className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-700 to-emerald-500 px-5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition group-hover:shadow-xl">
      {solution.action}
      <ArrowIcon />
    </span>
  );
};

const ClientSystemCard = ({ solution }) => {
  const content = (
    <>
      <div className="product-shield-stage aspect-[4/3] overflow-hidden">
        <img
          src={solution.image}
          alt={solution.title}
          className="product-shield-image h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {solution.status && (
          <span className="glass-chip mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-cyan-200">
            {solution.status}
          </span>
        )}
        <h2 className="text-xl font-extrabold text-white">{solution.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{solution.description}</p>
        <span
          className={`mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition ${
            solution.disabled
              ? "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-500"
              : "bg-gradient-to-r from-blue-700 to-emerald-500 text-white shadow-lg shadow-blue-700/20 group-hover:shadow-xl"
          }`}
        >
          {solution.disabled ? solution.action : "Entrar no sistema"}
          {!solution.disabled && <ArrowIcon />}
        </span>
      </div>
    </>
  );

  const cardClass =
    "glass-card group flex min-h-[360px] flex-col overflow-hidden rounded-[22px] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40";

  if (solution.disabled) {
    return <div className={cardClass}>{content}</div>;
  }

  return (
    <a href={solution.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {content}
    </a>
  );
};

const ClientArea = ({ onBack }) => (
  <div className="site-dark-bg min-h-screen overflow-x-hidden text-slate-100">
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="glass-topbar mx-auto flex h-[64px] max-w-7xl items-center justify-between rounded-2xl px-4 md:h-[72px] md:px-6">
        <button onClick={onBack} className="flex items-center" aria-label="Voltar para Shamar Sistemas">
          <span className="dark-brand-logo relative z-10" aria-hidden="true">
            <img src="/favicon-shield.png" alt="" className="dark-brand-shield" />
            <span className="dark-brand-wordmark"><img src={brandWordmarkBackground} alt="" /></span>
          </span>
        </button>

        <button
          onClick={onBack}
          className="secondary-dark-button inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-bold text-white"
        >
          Voltar ao site
        </button>
      </div>
    </header>

    <main className="relative isolate overflow-hidden px-5 py-14 md:px-8 md:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-[#061633]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-700 opacity-90" />
      <img
        src={brandLockupBackground}
        alt=""
        aria-hidden="true"
        className="brand-watermark brand-watermark-page"
      />

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
          {solutions.map((solution) => (
            <ClientSystemCard key={solution.title} solution={solution} />
          ))}
        </div>

        <div className="glass-card mt-8 rounded-[22px] p-6 text-center">
          <p className="text-sm font-semibold text-slate-300">Precisa de ajuda para acessar?</p>
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
  <div className="site-dark-bg min-h-screen overflow-x-hidden text-slate-100">
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="glass-topbar mx-auto flex h-[64px] max-w-7xl items-center justify-between rounded-2xl px-4 md:h-[72px] md:px-6">
        <button onClick={onBack} className="flex items-center" aria-label="Voltar para Shamar Sistemas">
          <span className="dark-brand-logo relative z-10" aria-hidden="true">
            <img src="/favicon-shield.png" alt="" className="dark-brand-shield" />
            <span className="dark-brand-wordmark"><img src={brandWordmarkBackground} alt="" /></span>
          </span>
        </button>

        <button
          onClick={onBack}
          className="secondary-dark-button inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-bold text-white"
        >
          Voltar ao site
        </button>
      </div>
    </header>

    <main className="relative isolate overflow-hidden px-5 py-14 md:px-8 md:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-[#061633]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-gradient-to-r from-blue-950 via-cyan-900 to-emerald-700 opacity-90" />
      <img
        src={brandLockupBackground}
        alt=""
        aria-hidden="true"
        className="brand-watermark brand-watermark-page"
      />

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
              className="glass-card group overflow-hidden rounded-[22px] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={contact.photo}
                  alt={contact.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-700">
                  {contact.role}
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">{contact.name}</h2>

                <div className="mt-5 space-y-2 text-sm font-semibold text-slate-300">
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
                    href={buildEmailUrl(contact.email, contact.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-dark-button inline-flex h-11 flex-1 items-center justify-center rounded-xl px-5 text-sm font-bold text-white"
                  >
                    Enviar email
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="glass-card mt-8 rounded-[22px] p-6 text-center">
          <p className="text-sm font-semibold text-slate-300">
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
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const reduceMotion = useReducedMotion();
  const [screen, setScreen] = useState("home");
  const churchFeaturesTrackRef = useRef(null);
  const lastCarouselPointerX = useRef(null);

  const steerChurchFeatures = (event) => {
    const previousX = lastCarouselPointerX.current;
    lastCarouselPointerX.current = event.clientX;

    if (previousX === null || Math.abs(event.clientX - previousX) < 2) return;

    const animation = churchFeaturesTrackRef.current?.getAnimations()[0];
    if (!animation) return;

    const direction = event.clientX > previousX ? -1 : 1;
    animation.updatePlaybackRate(direction * 1.35);
  };

  const resetChurchFeaturesPointer = () => {
    lastCarouselPointerX.current = null;
    const animation = churchFeaturesTrackRef.current?.getAnimations()[0];
    if (!animation) return;

    animation.updatePlaybackRate(Math.sign(animation.playbackRate || 1));
  };

  if (pathname === "/shamar-igrejas/politica-de-privacidade") {
    return <PrivacyPolicyPage />;
  }

  if (pathname === "/shamar-igrejas/exclusao-de-conta") {
    return <AccountDeletionPage />;
  }

  if (pathname === "/shamar-igrejas/termos-de-uso") {
    return <TermsOfUsePage />;
  }

  if (screen === "client") {
    return <ClientArea onBack={() => setScreen("home")} />;
  }

  if (screen === "contact") {
    return <ContactArea onBack={() => setScreen("home")} />;
  }

  return (
    <div className="site-dark-bg min-h-screen overflow-x-hidden text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
        <div className="glass-topbar mx-auto flex h-[64px] max-w-7xl items-center justify-between overflow-hidden rounded-2xl px-4 md:h-[72px] md:px-6">
          <a href="#inicio" className="flex items-center" aria-label="Shamar Sistemas">
            <span className="dark-brand-logo relative z-10" aria-hidden="true">
              <img src="/favicon-shield.png" alt="" className="dark-brand-shield" />
              <span className="dark-brand-wordmark"><img src={brandWordmarkBackground} alt="" /></span>
            </span>
          </a>

          <nav className="relative z-10 hidden items-center gap-9 text-sm font-bold text-slate-200 md:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#solucoes">Soluções</a>
            <a className="nav-link" href="#sobre">Sobre nós</a>
            <button className="nav-link font-bold" onClick={() => setScreen("contact")}>
              Contato
            </button>
          </nav>

          <button
            onClick={() => setScreen("client")}
            className="primary-button relative z-10 inline-flex h-10 items-center gap-2 rounded-xl px-4 text-xs font-extrabold text-white sm:px-5 md:h-11 md:text-sm"
          >
            Área do cliente
            <span className="hidden sm:inline-flex"><ArrowIcon /></span>
          </button>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="hero-surface relative isolate overflow-hidden bg-[#041229] text-white"
        >
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="hero-glow hero-glow-blue absolute -z-10" />
          <div className="hero-glow hero-glow-green absolute -z-10" />
          <img
            src={brandShieldBackground}
            alt=""
            aria-hidden="true"
            className="brand-watermark brand-watermark-hero"
          />

          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-36 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:pb-24 lg:pt-36">
            <div className="max-w-[700px]">
              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/[0.07] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.75)]" />
                Shamar Sistemas
              </Motion.p>

              <Motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="text-[2.55rem] font-black leading-[1.04] tracking-[-0.045em] min-[420px]:text-5xl md:text-[3.65rem] lg:text-[4rem]"
              >
                Soluções inteligentes<br className="hidden sm:block" /> para{" "}
                <span className="hero-gradient-text">
                  igrejas, clínicas e empresas.
                </span>
              </Motion.h1>

              <Motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg md:leading-8"
              >
                Desenvolvemos sistemas modernos que simplificam processos, organizam
                informações e ajudam sua equipe a produzir mais.
              </Motion.p>

              <Motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#solucoes"
                  className="primary-button inline-flex h-[52px] items-center justify-center gap-2 rounded-xl px-7 text-sm font-extrabold text-white md:text-base"
                >
                  Conhecer soluções
                  <ArrowIcon />
                </a>

                <button
                  onClick={() => setScreen("contact")}
                  className="secondary-dark-button inline-flex h-[52px] items-center justify-center rounded-xl px-7 text-sm font-extrabold text-white md:text-base"
                >
                  Falar com a Shamar
                </button>
              </Motion.div>

            </div>

            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="relative mx-auto hidden w-full max-w-[570px] lg:block"
              aria-hidden="true"
            >
              <div className="dashboard-shell relative overflow-hidden rounded-[28px] border border-white/15 bg-[#071a38]/85 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-3 pb-3 pt-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <div className="ml-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Plataforma Shamar
                  </div>
                </div>
                <div className="grid grid-cols-[72px_1fr] gap-3 pt-3">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-3">
                    <img src={logo} alt="" className="mx-auto w-11 opacity-90" />
                    <div className="mt-6 space-y-3">
                      {[0, 1, 2, 3, 4].map((item) => (
                        <span key={item} className={`block h-8 rounded-lg ${item === 0 ? "bg-gradient-to-r from-blue-600/80 to-cyan-500/60" : "bg-white/[0.055]"}`} />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#f7fafc] p-5 text-slate-950">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700">Visão geral</p>
                        <p className="mt-1 text-lg font-black">Painel de gestão</p>
                      </div>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-400 text-xs font-black text-white">S</span>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"><span className="block h-2 w-8 rounded bg-blue-200" /><span className="mt-3 block text-lg font-black">128</span><span className="text-[9px] font-bold text-slate-400">REGISTROS</span></div>
                      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"><span className="block h-2 w-8 rounded bg-cyan-200" /><span className="mt-3 block text-lg font-black">24</span><span className="text-[9px] font-bold text-slate-400">PROCESSOS</span></div>
                      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"><span className="block h-2 w-8 rounded bg-emerald-200" /><span className="mt-3 block text-lg font-black">96%</span><span className="text-[9px] font-bold text-slate-400">EFICIÊNCIA</span></div>
                    </div>
                    <div className="mt-3 grid grid-cols-[1.3fr_0.7fr] gap-3">
                      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-end gap-2 pt-3">
                          {[42, 65, 52, 78, 60, 88, 72].map((height, index) => (
                            <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-cyan-400" style={{ height }} />
                          ))}
                        </div>
                      </div>
                      <div className="grid place-items-center rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                        <div className="dashboard-ring grid h-24 w-24 place-items-center rounded-full"><div className="grid h-16 w-16 place-items-center rounded-full bg-white text-sm font-black">74%</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-card absolute -bottom-8 -left-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0b2447]/90 p-4 shadow-2xl backdrop-blur-xl">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-lg font-black text-[#041229]">✓</span>
                <div><p className="text-xs font-extrabold text-white">Operação organizada</p><p className="mt-1 text-[11px] text-slate-400">Tudo em um só lugar</p></div>
              </div>
              <div className="floating-card-alt absolute -right-5 top-20 rounded-2xl border border-white/15 bg-[#0b2447]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-cyan-300">Disponibilidade</p><p className="mt-1 text-xl font-black text-white">Online</p>
              </div>
            </Motion.div>
          </div>
        </section>

        <section id="solucoes" className="dark-section relative px-5 py-20 md:px-8 md:py-24">
          <img
            src={brandShieldBackground}
            alt=""
            aria-hidden="true"
            className="brand-watermark brand-watermark-section"
          />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-kicker">
                Nossas soluções
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white md:text-[2.7rem] md:leading-tight">
                Sistemas para diferentes rotinas, com a mesma base de confiança.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {solutions.map((solution, index) => {
                const Card = solution.disabled ? Motion.article : Motion.a;

                return (
                  <Card
                    key={solution.title}
                    initial={reduceMotion ? { opacity: 1 } : {
                      opacity: 0,
                      x: [-150, 0, 150][index],
                      y: 90,
                      rotate: [-9, -2, 9][index],
                      scale: 0.86,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={reduceMotion ? { duration: 0 } : {
                      delay: index * 0.13,
                      type: "spring",
                      stiffness: 115,
                      damping: 16,
                      mass: 0.82,
                    }}
                    className="glass-card solution-card group flex min-h-[400px] origin-bottom flex-col overflow-hidden rounded-[22px] transition duration-300 will-change-transform hover:-translate-y-1.5 hover:border-cyan-300/40"
                    {...(!solution.disabled && {
                      href: solution.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <div className="product-shield-stage relative aspect-[16/10] overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="product-shield-image relative z-10 h-full w-full object-contain p-7 transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#0b2340]/55 to-transparent" />
                    </div>
                    <div className="relative flex flex-1 flex-col p-6 pt-8">
                      {solution.status && (
                        <span className="glass-chip mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-cyan-200">
                          {solution.status}
                        </span>
                      )}
                      <div className="absolute -top-7 right-6 grid h-14 w-14 place-items-center rounded-2xl border-4 border-[#0b2340] bg-gradient-to-br from-blue-600 to-emerald-400 text-white shadow-lg shadow-blue-950/40">
                        <Icon name={solution.icon} />
                      </div>
                      <h3 className="mt-1 text-xl font-black tracking-[-0.02em] text-white">{solution.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                        {solution.description}
                      </p>
                      <SolutionAction solution={solution} />
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sobre" className="dark-section border-y border-white/10 px-5 py-20 md:px-8 md:py-24">
          <img
            src={brandWordmarkBackground}
            alt=""
            aria-hidden="true"
            className="brand-watermark brand-watermark-wide"
          />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600">
                Sobre nós
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white md:text-[2.65rem] md:leading-tight">
                Tecnologia feita para organizar operações importantes.
              </h2>
            </div>
            <div className="glass-card relative overflow-hidden rounded-[22px] p-7 md:p-9">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-emerald-400" />
              <p className="text-base leading-8 text-slate-300 md:text-lg">
                A Shamar Sistemas desenvolve plataformas digitais para equipes que precisam
                de informação clara, processos bem definidos e ferramentas confiáveis no dia
                a dia. Atuamos com soluções para igrejas, clínicas e empresas, sempre com
                foco em simplicidade, segurança e produtividade.
              </p>
            </div>
          </div>
        </section>

        <section id="acesso" className="dark-section px-5 py-20 md:px-8 md:py-24">
          <div className="church-showcase relative mx-auto max-w-7xl overflow-hidden rounded-[30px] text-white">
            <div className="hero-grid absolute inset-0 opacity-20" />
            <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
            <img
              src={shamarIgrejasCard}
              alt=""
              aria-hidden="true"
              className="church-showcase-watermark"
            />

            <div className="relative grid gap-12 p-5 md:p-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-8 xl:p-14">
              <div className="min-w-0">
                <div className="glass-chip inline-flex items-center rounded-full px-4 py-2" aria-label="Shamar Igrejas">
                  <span className="church-brand-wordmark">
                    <img src={shamarIgrejasWordmark} alt="Shamar Igrejas" />
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] md:text-[2.8rem]">
                  Gestão completa <span className="hero-gradient-text block sm:inline">para a sua igreja</span>
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                  Um sistema moderno e completo para facilitar a administração da sua igreja,
                  reunindo todas as áreas em um só lugar.
                </p>

                <a
                  href={igrejasUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-xl px-7 text-sm font-extrabold text-white md:text-base"
                >
                  Conheça o Shamar Igrejas
                  <ArrowIcon />
                </a>
              </div>

              <Motion.div
                initial={reduceMotion ? false : { opacity: 0, x: 35, scale: 0.94 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.65, ease: "easeOut" }}
                className="church-product-preview relative mx-auto w-full max-w-[540px] pb-10"
                aria-hidden="true"
              >
                <div className="church-laptop rounded-[22px] p-3">
                  <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
                    <div className="flex items-center gap-2">
                      <img src={shamarIgrejasCard} alt="" className="h-7 w-7 object-contain" />
                      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-cyan-200">Shamar Igrejas</span>
                    </div>
                    <span className="h-2 w-20 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-3 grid grid-cols-[70px_1fr] gap-3">
                    <div className="space-y-2 rounded-xl bg-[#06152e] p-2">
                      {[0, 1, 2, 3, 4, 5].map((item) => <span key={item} className={`block h-6 rounded-md ${item === 0 ? "bg-blue-600/80" : "bg-white/[0.06]"}`} />)}
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 text-[#07172e] shadow-inner">
                      <p className="text-[10px] font-extrabold text-blue-700">VISÃO GERAL</p>
                      <p className="mt-1 text-sm font-black">Painel de gestão</p>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {["342", "R$ 28,4k", "12"].map((value, index) => (
                          <div key={value} className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
                            <span className={`block h-1.5 w-7 rounded-full ${index === 0 ? "bg-blue-400" : index === 1 ? "bg-emerald-400" : "bg-rose-400"}`} />
                            <strong className="mt-2 block text-[10px]">{value}</strong>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 grid grid-cols-[1fr_84px] gap-2">
                        <div className="flex h-28 items-end gap-2 rounded-lg border border-slate-200 bg-white px-3 pb-3 shadow-sm">
                          {[44, 68, 53, 82, 63, 92, 72].map((height, index) => <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-cyan-400" style={{ height: `${height}%` }} />)}
                        </div>
                        <div className="grid place-items-center rounded-lg border border-slate-200 bg-white shadow-sm">
                          <div className="dashboard-ring grid h-14 w-14 place-items-center rounded-full"><span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[10px] font-black">86%</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="church-phone absolute -bottom-1 right-2 w-[120px] rounded-[24px] p-2 sm:-right-3 sm:w-[138px]">
                  <div className="rounded-[18px] bg-[#031126] px-3 pb-4 pt-3 text-center">
                    <span className="mx-auto block h-1 w-9 rounded-full bg-white/20" />
                    <img src={shamarIgrejasCard} alt="" className="mx-auto mt-4 h-12 w-12 object-contain" />
                    <p className="mt-2 text-[10px] font-black text-cyan-300">SHAMAR IGREJAS</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {["Membros", "Eventos", "Ofertas", "Avisos"].map((label) => <span key={label} className="rounded-lg bg-white p-2 text-[7px] font-extrabold text-blue-950">{label}</span>)}
                    </div>
                  </div>
                </div>
              </Motion.div>

              <div
                className="church-features-carousel lg:col-span-2"
                aria-label="Recursos do Shamar Igrejas"
                onPointerEnter={(event) => { lastCarouselPointerX.current = event.clientX; }}
                onPointerMove={steerChurchFeatures}
                onPointerLeave={resetChurchFeaturesPointer}
              >
                <div ref={churchFeaturesTrackRef} className="church-features-track">
                  {loopedChurchFeatures.map((feature, index) => (
                    <article
                      key={`${feature.title}-${index}`}
                      aria-hidden={index >= churchFeatures.length ? "true" : undefined}
                      className="church-feature-card w-[178px] shrink-0 rounded-2xl p-4"
                    >
                      <span className={`church-feature-icon church-feature-icon-${index % 4}`}>
                        <ChurchFeatureIcon name={feature.icon} />
                      </span>
                      <h3 className="mt-3 text-sm font-extrabold text-white">{feature.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{feature.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
