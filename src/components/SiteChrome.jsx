import logo from "../assets/logoshsmarsistemas.fundotransparente.png";

export const InternalPageHeader = () => (
  <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-8">
      <a href="/" className="flex items-center" aria-label="Ir para a página inicial da Shamar Sistemas">
        <img src={logo} alt="Shamar Sistemas" className="h-10 w-auto object-contain md:h-12" />
      </a>

      <a
        href="/"
        className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-blue-700"
      >
        Voltar ao site
      </a>
    </div>
  </header>
);

export const SiteFooter = () => (
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
        <a
          className="block transition hover:text-emerald-600"
          href="https://wa.me/5513996387593"
          target="_blank"
          rel="noopener noreferrer"
        >
          (13) 99638-7593
        </a>
        <a
          className="block transition hover:text-blue-700"
          href="https://www.instagram.com/shamar_sistemas?igsh=dXY0YWoyc2x5OG5k&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          @shamar_sistemas
        </a>
        <p>shamarsistemas.com.br</p>
      </div>
    </div>
    <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Shamar Sistemas. Todos os direitos reservados.</p>
        <div className="sm:text-right">
          <p className="mb-2 font-bold text-slate-700">Shamar Igrejas</p>
          <nav aria-label="Documentos legais do Shamar Igrejas" className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <a className="transition hover:text-blue-700" href="/shamar-igrejas/politica-de-privacidade">Política de Privacidade</a>
            <a className="transition hover:text-blue-700" href="/shamar-igrejas/termos-de-uso">Termos de Uso</a>
            <a className="transition hover:text-blue-700" href="/shamar-igrejas/exclusao-de-conta">Exclusão de Conta</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);
