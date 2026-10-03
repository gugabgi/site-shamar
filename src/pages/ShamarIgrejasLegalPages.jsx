import { Fragment, useEffect, useState } from "react";
import { InternalPageHeader, SiteFooter } from "../components/SiteChrome.jsx";
import termsOfUseMarkdown from "../content/terms-of-use.md?raw";

const CONTACT_EMAIL = "contato@shamarsistemas.com.br";

const pageMetadata = {
  privacy: {
    title: "Política de Privacidade | Shamar Igrejas - Shamar Sistemas",
    description:
      "Conheça a Política de Privacidade do Shamar Igrejas e saiba como a Shamar Sistemas trata e protege os dados pessoais dos usuários.",
  },
  deletion: {
    title: "Exclusão de Conta | Shamar Igrejas - Shamar Sistemas",
    description:
      "Solicite a exclusão da sua conta e dos dados associados ao aplicativo Shamar Igrejas.",
  },
  terms: {
    title: "Termos de Uso | Shamar Igrejas - Shamar Sistemas",
    description: "Consulte os Termos de Uso do aplicativo e da plataforma Shamar Igrejas.",
  },
};

const usePageMetadata = (metadata) => {
  useEffect(() => {
    document.title = metadata.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", metadata.description);
  }, [metadata]);
};

const LegalPageLayout = ({ eyebrow, title, updatedAt = "a definir", children }) => (
  <div className="site-dark-bg min-h-screen overflow-x-hidden text-slate-100">
    <InternalPageHeader />

    <main>
      <header className="relative isolate overflow-hidden bg-[#061633] px-5 py-14 text-white md:px-8 md:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-700 opacity-90" />
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">{title}</h1>
          {updatedAt && (
            <p className="mt-4 text-sm font-semibold text-slate-200">
              Última atualização: <span className="text-white">{updatedAt}</span>
            </p>
          )}
        </div>
      </header>

      <div className="legal-glass mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">{children}</div>
    </main>

    <SiteFooter />
  </div>
);

const LegalSection = ({ number, title, children }) => (
  <section aria-labelledby={`privacy-section-${number}`} className="border-t border-slate-200 pt-8 first:border-0 first:pt-0">
    <h2 id={`privacy-section-${number}`} className="text-2xl font-black leading-tight text-slate-950">
      {number}. {title}
    </h2>
    <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">{children}</div>
  </section>
);

const LegalList = ({ children }) => (
  <ul className="ml-5 list-disc space-y-2 marker:text-blue-700">{children}</ul>
);

const renderInlineMarkdown = (text) => {
  const tokens = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g).filter(Boolean);

  return tokens.map((token, index) => {
    const link = token.match(/^\[(.*?)\]\((.*?)\)$/);
    if (link) {
      const boldLabel = link[1].startsWith("**") && link[1].endsWith("**");
      const label = boldLabel ? link[1].slice(2, -2) : link[1];
      return (
        <a
          key={`${label}-${index}`}
          href={link[2]}
          className="break-words text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-emerald-700"
        >
          {boldLabel ? <strong className="font-extrabold">{label}</strong> : label}
        </a>
      );
    }

    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={`${token}-${index}`} className="font-extrabold text-slate-950">{renderInlineMarkdown(token.slice(2, -2))}</strong>;
    }

    return <Fragment key={`${token}-${index}`}>{token}</Fragment>;
  });
};

const LegalMarkdownContent = ({ markdown }) => {
  const lines = markdown.split(/\r?\n/);
  const blocks = [];
  let listItems = [];

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push(
      <LegalList key={`list-${blocks.length}`}>
        {listItems.map((item, index) => <li key={`${item}-${index}`}>{renderInlineMarkdown(item)}</li>)}
      </LegalList>,
    );
    listItems = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("# ") || trimmed.startsWith("**Última atualização:")) {
      flushList();
      return;
    }
    if (trimmed.startsWith("* ")) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList();
    if (trimmed.startsWith("## ")) {
      const heading = trimmed.slice(3);
      blocks.push(
        <h2 key={`heading-${blocks.length}`} className="border-t border-slate-200 pt-8 text-2xl font-black leading-tight text-slate-950">
          {heading}
        </h2>,
      );
    } else if (trimmed === "---") {
      blocks.push(<hr key={`rule-${blocks.length}`} className="border-slate-200" />);
    } else {
      blocks.push(<p key={`paragraph-${blocks.length}`}>{renderInlineMarkdown(trimmed)}</p>);
    }
  });
  flushList();

  return (
    <article className="glass-card rounded-[22px] p-6 md:p-10">
      <div className="space-y-4 text-base leading-8 text-slate-700">{blocks}</div>
    </article>
  );
};

const PrivacyPolicyContent = () => (
  <article className="glass-card rounded-[22px] p-6 md:p-10">
    <div className="space-y-8">
      <div className="space-y-4 text-base leading-8 text-slate-700">
        <p>
          A <strong className="font-extrabold text-slate-950">Shamar Sistemas</strong>, inscrita no CNPJ sob nº{" "}
          <strong className="font-extrabold text-slate-950">67.014.559/0001-41</strong>, é uma empresa de desenvolvimento de software e soluções tecnológicas, responsável pelo desenvolvimento e disponibilização do{" "}
          <strong className="font-extrabold text-slate-950">Shamar Igrejas</strong>.
        </p>
        <p>A Shamar Sistemas respeita a privacidade e a proteção dos dados pessoais dos usuários.</p>
        <p>
          Esta Política de Privacidade explica como os dados pessoais podem ser coletados, utilizados, armazenados, protegidos e compartilhados durante a utilização do aplicativo e dos serviços relacionados ao{" "}
          <strong className="font-extrabold text-slate-950">Shamar Igrejas</strong>.
        </p>
        <p>
          O tratamento de dados pessoais observa a legislação brasileira aplicável, especialmente a{" "}
          <strong className="font-extrabold text-slate-950">Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD)</strong>.
        </p>
      </div>

      <LegalSection number="1" title="Sobre o Shamar Igrejas">
        <p>
          O <strong className="font-extrabold text-slate-950">Shamar Igrejas</strong> é uma plataforma tecnológica destinada a auxiliar igrejas e organizações religiosas em suas atividades administrativas, comunicação e relacionamento com seus membros.
        </p>
        <p>O aplicativo móvel permite que membros autorizados tenham acesso às funcionalidades disponibilizadas pela igreja à qual estão vinculados.</p>
        <p>As funcionalidades e informações disponíveis poderão variar conforme os recursos utilizados por cada organização.</p>
      </LegalSection>

      <LegalSection number="2" title="Responsabilidade pelo tratamento dos dados">
        <p>Dependendo da natureza do tratamento realizado, a igreja ou organização religiosa que utiliza o Shamar Igrejas poderá determinar as finalidades e condições de utilização de determinados dados de seus membros.</p>
        <p>
          A <strong className="font-extrabold text-slate-950">Shamar Sistemas</strong> realiza o tratamento necessário para disponibilizar, manter, proteger e operar a plataforma e seus recursos, inclusive podendo atuar no tratamento de informações em nome das organizações que utilizam seus serviços, quando aplicável.
        </p>
        <p>Solicitações relacionadas a informações administradas diretamente por determinada igreja poderão ser encaminhadas à respectiva organização responsável.</p>
      </LegalSection>

      <LegalSection number="3" title="Dados que poderão ser tratados">
        <p>Dependendo das funcionalidades utilizadas, poderão ser tratados dados como:</p>
        <LegalList>
          <li>nome;</li>
          <li>endereço de e-mail;</li>
          <li>número de telefone;</li>
          <li>informações cadastrais do membro;</li>
          <li>fotografia de perfil, quando disponibilizada;</li>
          <li>igreja ou unidade à qual o membro está vinculado;</li>
          <li>informações relacionadas a ministérios, departamentos, equipes e atividades;</li>
          <li>escalas e participação em atividades;</li>
          <li>registros de presença;</li>
          <li>informações necessárias à autenticação e acesso à conta;</li>
          <li>identificadores técnicos necessários ao funcionamento do aplicativo;</li>
          <li>tokens necessários ao envio de notificações;</li>
          <li>localização do dispositivo, quando necessária para determinada funcionalidade e mediante as permissões aplicáveis;</li>
          <li>informações fornecidas voluntariamente pelo usuário ou cadastradas pela organização à qual esteja vinculado.</li>
        </LegalList>
        <p>Somente serão tratados dados necessários às funcionalidades disponibilizadas e às finalidades legítimas relacionadas à prestação do serviço.</p>
      </LegalSection>

      <LegalSection number="4" title="Finalidades do tratamento">
        <p>Os dados poderão ser utilizados para:</p>
        <LegalList>
          <li>identificar e autenticar o usuário;</li>
          <li>vincular o usuário à igreja correspondente;</li>
          <li>disponibilizar as funcionalidades do aplicativo;</li>
          <li>apresentar informações relacionadas à participação do membro;</li>
          <li>administrar escalas, atividades, ministérios e outros recursos;</li>
          <li>registrar presença quando essa funcionalidade estiver habilitada;</li>
          <li>enviar notificações e comunicados;</li>
          <li>manter a segurança das contas e da plataforma;</li>
          <li>prevenir acessos indevidos, abusos e fraudes;</li>
          <li>prestar suporte;</li>
          <li>diagnosticar problemas técnicos;</li>
          <li>melhorar o funcionamento da plataforma;</li>
          <li>cumprir obrigações legais ou regulatórias;</li>
          <li>proteger direitos da Shamar Sistemas, das organizações e dos usuários.</li>
        </LegalList>
        <p><strong className="font-extrabold text-slate-950">A Shamar Sistemas não comercializa os dados pessoais dos usuários.</strong></p>
      </LegalSection>

      <LegalSection number="5" title="Localização">
        <p>O aplicativo poderá solicitar acesso à localização do dispositivo quando essa informação for necessária para determinada funcionalidade.</p>
        <p>
          Entre essas funcionalidades poderá estar o <strong className="font-extrabold text-slate-950">registro de presença em cultos, reuniões, eventos ou outras atividades da igreja</strong>.
        </p>
        <p>Nessas situações, a localização poderá ser utilizada para verificar se o dispositivo está dentro da área geográfica permitida para realização do registro.</p>
        <p>O acesso ocorrerá conforme as permissões concedidas pelo usuário e de acordo com a necessidade da funcionalidade utilizada.</p>
        <p>O usuário poderá gerenciar a permissão de localização pelas configurações do sistema operacional.</p>
        <p>A recusa ou desativação da permissão poderá impedir o funcionamento das funcionalidades que dependam da localização.</p>
      </LegalSection>

      <LegalSection number="6" title="Notificações">
        <p>O Shamar Igrejas poderá enviar notificações relacionadas aos serviços e atividades da igreja, como:</p>
        <LegalList>
          <li>escalas;</li>
          <li>eventos;</li>
          <li>atividades;</li>
          <li>avisos;</li>
          <li>comunicados;</li>
          <li>informações relacionadas à conta ou participação do usuário.</li>
        </LegalList>
        <p>Para possibilitar o envio dessas notificações, identificadores técnicos e tokens de notificação poderão ser tratados pelos serviços utilizados pela plataforma.</p>
        <p>O usuário poderá controlar a permissão de notificações através das configurações de seu dispositivo.</p>
      </LegalSection>

      <LegalSection number="7" title="Compartilhamento e prestadores de serviços">
        <p>A Shamar Sistemas poderá utilizar fornecedores de tecnologia necessários à operação do Shamar Igrejas, incluindo serviços relacionados a:</p>
        <LegalList>
          <li>infraestrutura em nuvem;</li>
          <li>banco de dados;</li>
          <li>autenticação;</li>
          <li>armazenamento;</li>
          <li>notificações;</li>
          <li>comunicações;</li>
          <li>monitoramento técnico;</li>
          <li>segurança.</li>
        </LegalList>
        <p>Esses prestadores poderão tratar informações na medida necessária para fornecer seus respectivos serviços.</p>
        <p>Informações também poderão ser fornecidas quando necessário para cumprimento de obrigação legal, determinação judicial ou solicitação válida de autoridade competente.</p>
      </LegalSection>

      <LegalSection number="8" title="Segurança">
        <p>A Shamar Sistemas adota medidas técnicas e administrativas destinadas à proteção dos dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de perda, destruição, alteração, comunicação ou utilização inadequada.</p>
        <p>Entre as medidas adotadas poderão estar:</p>
        <LegalList>
          <li>autenticação;</li>
          <li>controles de acesso;</li>
          <li>isolamento de informações entre organizações;</li>
          <li>comunicação criptografada;</li>
          <li>restrições de acesso a recursos internos;</li>
          <li>políticas de autorização no banco de dados;</li>
          <li>mecanismos de auditoria e segurança;</li>
          <li>infraestrutura especializada em nuvem.</li>
        </LegalList>
        <p>Apesar das medidas adotadas, nenhum serviço conectado à internet pode garantir risco absolutamente inexistente.</p>
      </LegalSection>

      <LegalSection number="9" title="Retenção">
        <p>Os dados serão mantidos pelo período necessário ao cumprimento das finalidades para as quais foram tratados, prestação dos serviços, cumprimento de obrigações legais ou regulatórias e exercício regular de direitos.</p>
        <p>Quando não houver mais necessidade ou fundamento legítimo para manutenção, os dados poderão ser excluídos ou anonimizados, conforme aplicável.</p>
      </LegalSection>

      <LegalSection number="10" title="Exclusão da conta e dos dados">
        <p>
          O usuário poderá solicitar a exclusão de sua conta do <strong className="font-extrabold text-slate-950">Shamar Igrejas</strong> e dos dados pessoais associados à conta.
        </p>
        <p>A solicitação poderá ser realizada pelo recurso disponibilizado no aplicativo ou pela página pública de solicitação de exclusão:</p>
        <p>
          <strong>
            <a className="break-words text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-emerald-700" href="http://www.shamarsistemas.com.br/shamar-igrejas/exclusao-de-conta">
              www.shamarsistemas.com.br/shamar-igrejas/exclusao-de-conta
            </a>
          </strong>
        </p>
        <p>Para proteger o usuário, poderá ser necessária a confirmação de sua identidade antes do processamento da solicitação.</p>
        <p>Após a validação, os dados associados serão excluídos ou anonimizados, conforme aplicável.</p>
        <p>Determinadas informações poderão ser mantidas quando sua conservação for necessária para cumprimento de obrigação legal ou regulatória, segurança, prevenção de fraudes, exercício regular de direitos ou outra hipótese legítima prevista na legislação.</p>
        <p>Quando houver retenção por uma dessas razões, as informações serão utilizadas somente para a finalidade que justificar sua conservação.</p>
      </LegalSection>

      <LegalSection number="11" title="Direitos do titular">
        <p>Nos termos da LGPD, o titular poderá solicitar, quando aplicável:</p>
        <LegalList>
          <li>confirmação da existência de tratamento;</li>
          <li>acesso aos dados;</li>
          <li>correção de informações incompletas, inexatas ou desatualizadas;</li>
          <li>anonimização, bloqueio ou eliminação nas hipóteses previstas em lei;</li>
          <li>informações sobre compartilhamento;</li>
          <li>portabilidade, quando aplicável;</li>
          <li>eliminação de dados tratados com fundamento no consentimento, observadas as exceções legais;</li>
          <li>revogação do consentimento, quando aplicável;</li>
          <li>informações relacionadas ao tratamento de seus dados.</li>
        </LegalList>
        <p>A Shamar Sistemas poderá solicitar confirmação da identidade antes de atender determinadas solicitações.</p>
      </LegalSection>

      <LegalSection number="12" title="Crianças e adolescentes">
        <p>Caso sejam tratados dados pessoais de crianças ou adolescentes através da plataforma, deverão ser observadas as exigências legais aplicáveis e adotadas medidas adequadas à proteção desses dados.</p>
        <p>A organização responsável pelo cadastro também deverá observar as obrigações aplicáveis ao tratamento dessas informações.</p>
      </LegalSection>

      <LegalSection number="13" title="Permissões do dispositivo">
        <p>Determinadas funcionalidades poderão solicitar permissões do dispositivo, como:</p>
        <LegalList>
          <li>notificações;</li>
          <li>localização;</li>
          <li>câmera;</li>
          <li>acesso a imagens ou arquivos, quando necessário.</li>
        </LegalList>
        <p>As permissões serão solicitadas conforme a funcionalidade correspondente e poderão ser gerenciadas pelo usuário através das configurações do dispositivo.</p>
      </LegalSection>

      <LegalSection number="14" title="Serviços externos">
        <p>O aplicativo poderá disponibilizar integrações ou links para serviços externos.</p>
        <p>Ao utilizar serviços de terceiros, o usuário poderá estar sujeito às políticas de privacidade e termos próprios desses serviços.</p>
      </LegalSection>

      <LegalSection number="15" title="Alterações desta Política">
        <p>Esta Política poderá ser atualizada para refletir alterações na plataforma, legislação, regulamentação ou práticas relacionadas ao tratamento de dados.</p>
        <p>Quando houver alterações relevantes, a versão atualizada será disponibilizada através dos canais oficiais.</p>
        <p>A data da última atualização estará sempre indicada no início deste documento.</p>
      </LegalSection>

      <LegalSection number="16" title="Contato">
        <p>Para dúvidas, solicitações relacionadas à privacidade ou exercício dos direitos previstos na legislação:</p>
        <address className="not-italic">
          <p><strong className="font-extrabold text-slate-950">Shamar Sistemas</strong></p>
          <p><strong className="font-extrabold text-slate-950">Produto:</strong> Shamar Igrejas</p>
          <p><strong className="font-extrabold text-slate-950">CNPJ:</strong> 67.014.559/0001-41</p>
          <p>
            <strong className="font-extrabold text-slate-950">Site:</strong>{" "}
            <a className="text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-emerald-700" href="http://www.shamarsistemas.com.br">www.shamarsistemas.com.br</a>
          </p>
          <p>
            <strong className="font-extrabold text-slate-950">E-mail:</strong>{" "}
            <a className="break-words text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-emerald-700" href="mailto:contato@shamarsistemas.com.br">contato@shamarsistemas.com.br</a>
          </p>
        </address>
      </LegalSection>

      <LegalSection number="17" title="Legislação aplicável">
        <p>
          Esta Política é regida pela legislação brasileira aplicável, especialmente pela{" "}
          <strong className="font-extrabold text-slate-950">Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD)</strong>.
        </p>
      </LegalSection>
    </div>
  </article>
);

const AccountDeletionContent = () => (
  <article className="glass-card rounded-[22px] p-6 md:p-10">
    <div className="space-y-8">
      <div className="space-y-4 text-base leading-8 text-slate-700">
        <p>
          A <strong className="font-extrabold text-slate-950">Shamar Sistemas</strong> respeita o seu direito à privacidade e disponibiliza um processo para solicitar a exclusão da sua conta no aplicativo{" "}
          <strong className="font-extrabold text-slate-950">Shamar Igrejas</strong>.
        </p>
      </div>

      <section aria-labelledby="request-deletion-content" className="border-t border-slate-200 pt-8">
        <h2 id="request-deletion-content" className="text-2xl font-black leading-tight text-slate-950">
          Solicitar exclusão
        </h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
          <p>Para solicitar a exclusão da sua conta, envie uma solicitação para:</p>
          <p>
            <strong>
              <a className="break-words text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-emerald-700" href="mailto:contato@shamarsistemas.com.br">
                contato@shamarsistemas.com.br
              </a>
            </strong>
          </p>
          <p>Utilize preferencialmente o mesmo endereço de e-mail associado à sua conta do Shamar Igrejas.</p>
          <p>No assunto da mensagem, informe:</p>
          <p><strong className="font-extrabold text-slate-950">Solicitação de exclusão de conta — Shamar Igrejas</strong></p>
          <p>Para que possamos identificar corretamente a conta, informe no pedido:</p>
          <LegalList>
            <li>seu nome;</li>
            <li>e-mail utilizado no aplicativo;</li>
            <li>igreja à qual sua conta está vinculada.</li>
          </LegalList>
          <p>Poderemos solicitar informações adicionais exclusivamente para confirmar sua identidade e proteger sua conta contra solicitações indevidas.</p>
        </div>
      </section>

      <section aria-labelledby="after-request-content" className="border-t border-slate-200 pt-8">
        <h2 id="after-request-content" className="text-2xl font-black leading-tight text-slate-950">
          O que acontece depois da solicitação?
        </h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
          <p>Após recebermos e validarmos a solicitação, iniciaremos o processo de exclusão da conta.</p>
          <p>Os dados pessoais associados à conta serão excluídos ou anonimizados, conforme aplicável.</p>
          <p>Algumas informações poderão ser mantidas quando sua conservação for necessária para cumprimento de obrigação legal ou regulatória, segurança, prevenção de fraude, exercício regular de direitos ou outra hipótese legítima prevista na legislação.</p>
          <p>Quando houver necessidade de retenção, essas informações serão mantidas somente pelo período necessário e utilizadas exclusivamente para a finalidade que justificar sua conservação.</p>
        </div>
      </section>

      <section aria-labelledby="in-app-deletion-content" className="border-t border-slate-200 pt-8">
        <h2 id="in-app-deletion-content" className="text-2xl font-black leading-tight text-slate-950">
          Exclusão pelo aplicativo
        </h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
          <p>Quando disponível, você também poderá iniciar a solicitação diretamente pelo aplicativo:</p>
          <p className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 font-extrabold text-blue-950">
            Shamar Igrejas → Perfil → Privacidade → Solicitar exclusão da conta
          </p>
        </div>
      </section>

      <section aria-labelledby="deletion-help-content" className="border-t border-slate-200 pt-8">
        <h2 id="deletion-help-content" className="text-2xl font-black leading-tight text-slate-950">
          Precisa de ajuda?
        </h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
          <p>Entre em contato conosco:</p>
          <address className="not-italic">
            <p><strong className="font-extrabold text-slate-950">Shamar Sistemas</strong></p>
            <p><strong className="font-extrabold text-slate-950">Produto:</strong> Shamar Igrejas</p>
            <p><strong className="font-extrabold text-slate-950">CNPJ:</strong> 67.014.559/0001-41</p>
            <p>
              <strong className="font-extrabold text-slate-950">E-mail:</strong>{" "}
              <a className="break-words text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-emerald-700" href="mailto:contato@shamarsistemas.com.br">contato@shamarsistemas.com.br</a>
            </p>
            <p>
              <strong className="font-extrabold text-slate-950">Site:</strong>{" "}
              <a className="text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-emerald-700" href="http://www.shamarsistemas.com.br/">www.shamarsistemas.com.br</a>
            </p>
          </address>
        </div>
      </section>

      <section aria-labelledby="privacy-link-content" className="border-t border-slate-200 pt-8">
        <h2 id="privacy-link-content" className="text-2xl font-black leading-tight text-slate-950">
          Política de Privacidade
        </h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
          <p>
            Para saber mais sobre como seus dados são tratados, consulte a{" "}
            <strong className="font-extrabold text-slate-950">Política de Privacidade do Shamar Igrejas</strong>:
          </p>
          <p>
            <strong>
              <a className="break-words text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-emerald-700" href="http://www.shamarsistemas.com.br/shamar-igrejas/politica-de-privacidade">
                www.shamarsistemas.com.br/shamar-igrejas/politica-de-privacidade
              </a>
            </strong>
          </p>
        </div>
      </section>
    </div>
  </article>
);

export const PrivacyPolicyPage = () => {
  usePageMetadata(pageMetadata.privacy);

  return (
    <LegalPageLayout
      eyebrow="Produto Shamar Igrejas"
      title="Política de Privacidade — Shamar Igrejas"
      updatedAt="22 de agosto de 2026"
    >
      <PrivacyPolicyContent />
    </LegalPageLayout>
  );
};

export const TermsOfUsePage = () => {
  usePageMetadata(pageMetadata.terms);

  return (
    <LegalPageLayout
      eyebrow="Produto Shamar Igrejas"
      title="Termos de Uso — Shamar Igrejas"
      updatedAt="22 de agosto de 2026"
    >
      <LegalMarkdownContent markdown={termsOfUseMarkdown} />
    </LegalPageLayout>
  );
};

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-cyan-200/20 bg-slate-950/45 px-4 py-3 text-base text-white shadow-inner outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10";

export const AccountDeletionPage = () => {
  const [showNotice, setShowNotice] = useState(false);
  usePageMetadata(pageMetadata.deletion);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowNotice(true);
  };

  return (
    <LegalPageLayout eyebrow="Produto Shamar Igrejas" title="Exclusão de Conta — Shamar Igrejas" updatedAt={null}>
      <div className="space-y-8">
        <AccountDeletionContent />

        <section
          aria-labelledby="deletion-request-title"
          className="glass-card overflow-hidden rounded-[22px]"
        >
          <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-700 px-6 py-7 text-white md:px-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-cyan-200">
              Solicitação de exclusão
            </p>
            <h2 id="deletion-request-title" className="mt-2 text-2xl font-black md:text-3xl">
              Solicite a análise da exclusão da sua conta
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-100 md:text-base">
              Este formulário registra apenas uma solicitação. Nenhuma conta ou dado é excluído automaticamente.
            </p>
          </div>

          <form className="space-y-6 p-6 md:p-10" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="full-name" className="text-sm font-bold text-slate-800">
                Nome completo
              </label>
              <input id="full-name" name="fullName" type="text" autoComplete="name" required className={fieldClass} />
            </div>

            <div>
              <label htmlFor="account-email" className="text-sm font-bold text-slate-800">
                E-mail utilizado no Shamar Igrejas
              </label>
              <input
                id="account-email"
                name="accountEmail"
                type="email"
                autoComplete="email"
                required
                aria-describedby="account-email-hint"
                className={fieldClass}
              />
              <p id="account-email-hint" className="mt-2 text-sm leading-6 text-slate-600">
                Utilize preferencialmente o mesmo e-mail associado à sua conta do Shamar Igrejas.
              </p>
            </div>

            <div>
              <label htmlFor="church" className="text-sm font-bold text-slate-800">
                Igreja à qual está vinculado
              </label>
              <input id="church" name="church" type="text" autoComplete="organization" required className={fieldClass} />
            </div>

            <div>
              <label htmlFor="reason" className="text-sm font-bold text-slate-800">
                Motivo da solicitação <span className="font-normal text-slate-500">(opcional)</span>
              </label>
              <textarea id="reason" name="reason" rows="5" className={fieldClass} />
            </div>

            <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              <p className="font-extrabold">Envio online ainda não habilitado</p>
              <p className="mt-1">
                A interface está pronta, mas nenhuma informação será enviada até que uma integração segura seja definida.
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-700 to-emerald-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:w-auto"
            >
              Solicitar exclusão da conta
            </button>

            {showNotice && (
              <p role="status" className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-950">
                O envio online ainda não está disponível. Use o e-mail alternativo abaixo para realizar a solicitação.
              </p>
            )}
          </form>
        </section>

        <aside className="glass-card rounded-[22px] p-6 text-center md:p-8">
          <h2 className="text-xl font-black text-slate-950">Alternativa por e-mail</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Envie a solicitação preferencialmente usando o mesmo e-mail associado à conta do Shamar Igrejas.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Solicitação de exclusão de conta — Shamar Igrejas")}`}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-bold text-blue-800 transition hover:-translate-y-0.5 hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            {CONTACT_EMAIL}
          </a>
        </aside>
      </div>
    </LegalPageLayout>
  );
};
