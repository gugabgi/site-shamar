import logo from "../assets/logoshsmarsistemas.fundotransparente.png";
import darkWordmark from "../assets/sistemas-letreiro-escuro.png";

export const InternalPageHeader = () => (
  <header className="sticky top-0 z-50 bg-[#031126]/90 px-3 pt-3 backdrop-blur-xl md:px-5 md:pt-4">
    <div className="glass-topbar mx-auto flex h-[64px] max-w-7xl items-center justify-between rounded-2xl px-4 md:h-[72px] md:px-6">
      <a href="/" className="flex items-center" aria-label="Ir para a página inicial da Shamar Sistemas">
        <span className="dark-brand-logo relative z-10" aria-hidden="true">
          <img src="/favicon-shield.png" alt="" className="dark-brand-shield" />
          <span className="dark-brand-wordmark"><img src={darkWordmark} alt="" /></span>
        </span>
      </a>

      <a
        href="/"
        className="secondary-dark-button relative z-10 inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-bold text-white"
      >
        Voltar ao site
      </a>
    </div>
  </header>
);

export const SiteFooter = () => (
  <footer id="contato" className="relative overflow-hidden border-t border-white/10 bg-[#041229] px-5 py-12 text-white md:px-8 md:py-14">
    <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
    <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
    <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="glass-card inline-flex rounded-xl p-2.5">
          <img src={logo} alt="Shamar Sistemas" className="h-10 w-auto object-contain" />
        </div>
        <h2 className="mt-5 text-xl font-black">Shamar Sistemas</h2>
        <p className="mt-2 text-sm font-semibold text-slate-400">
          Tecnologia, transparência e propósito.
        </p>
      </div>

      <div className="text-sm leading-7 text-slate-400 md:text-right">
        <p className="font-extrabold text-white">Contato:</p>
        <a
          className="block transition hover:text-emerald-300"
          href="https://wa.me/5513996387593"
          target="_blank"
          rel="noopener noreferrer"
        >
          (13) 99638-7593
        </a>
        <a
          className="block transition hover:text-cyan-300"
          href="https://www.instagram.com/shamar_sistemas?igsh=dXY0YWoyc2x5OG5k&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          @shamar_sistemas
        </a>
        <p>shamarsistemas.com.br</p>
      </div>
    </div>
    <div className="relative mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Shamar Sistemas. Todos os direitos reservados.</p>
        <div className="sm:text-right">
          <p className="mb-2 font-bold text-slate-300">Shamar Igrejas</p>
          <nav aria-label="Documentos legais do Shamar Igrejas" className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <a className="transition hover:text-cyan-300" href="/shamar-igrejas/politica-de-privacidade">Política de Privacidade</a>
            <a className="transition hover:text-cyan-300" href="/shamar-igrejas/termos-de-uso">Termos de Uso</a>
            <a className="transition hover:text-cyan-300" href="/shamar-igrejas/exclusao-de-conta">Exclusão de Conta</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);
