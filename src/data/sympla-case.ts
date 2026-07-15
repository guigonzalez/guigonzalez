export interface CaseImage {
  src: string;
  alt: {
    pt: string;
    en: string;
  };
  caption?: {
    pt: string;
    en: string;
  };
}

export interface DataPoint {
  value: string;
  label: {
    pt: string;
    en: string;
  };
  source?: string;
}

export interface Variant {
  name: string;
  description: {
    pt: string;
    en: string;
  };
  isWinner?: boolean;
}

export const symplaCase = {
  tldr: {
    pt: '86% do tráfego da Sympla vem de mobile, mas o header mobile não oferecia nenhum caminho para login ou criação de evento. Usando dados do Clarity e análise de funil, identificamos essa barreira, testamos 3 variantes de CTA em A/B e a vencedora elevou os cliques para criação de evento em 12%.',
    en: '86% of Sympla\'s traffic comes from mobile, but the mobile header offered no path to login or event creation. Using Clarity data and funnel analysis, we identified this barrier, A/B tested 3 CTA variants, and the winner lifted event-creation clicks by 12%.',
  },
  subtitle: {
    pt: 'Um CTA que faltava para 86% dos usuários',
    en: 'The missing CTA for 86% of users',
  },
  problem: {
    title: {
      pt: 'O Problema',
      en: 'The Problem',
    },
    heading: {
      pt: 'A maioria acessava pelo celular. Quase ninguém encontrava o caminho para criar um evento.',
      en: 'Most people accessed from mobile. Almost no one found the path to create an event.',
    },
    content: {
      pt: [
        'A Sympla é uma das maiores plataformas de eventos do Brasil, e sua home recebe dois públicos muito diferentes: quem busca ingressos e quem quer se tornar produtor, criando e vendendo seus próprios eventos.',
        'Ao analisar sessões no Microsoft Clarity, encontramos um número que não podia ser ignorado: 86% dos acessos à Sympla aconteciam via mobile. Ainda assim, o header mobile da home não logada não tinha nenhum atalho para login, cadastro ou criação de evento — só busca e categorias.',
        'Gravações de sessão mostravam o padrão se repetindo: o visitante rolava o feed de eventos, não encontrava nenhum convite para "criar meu evento" e saía. Comparado ao desktop, onde os CTAs de produtor ficavam visíveis no header, a experiência mobile empurrava esse público para fora do funil na primeira tela.',
        'Fomos além da home e olhamos a página interna de gestão de eventos. Lá o desequilíbrio se invertia: apenas 33% dos acessos a "Meus Eventos" vinham de mobile, contra 66% de desktop — um sinal de que quem já era produtor evitava o celular para tocar seus eventos, provavelmente por não confiar na experiência mobile para essa tarefa.',
      ],
      en: [
        'Sympla is one of Brazil\'s largest event platforms, and its homepage serves two very different audiences: people looking for tickets and people who want to become producers, creating and selling their own events.',
        'Analyzing sessions in Microsoft Clarity surfaced a number that couldn\'t be ignored: 86% of Sympla\'s traffic came from mobile. Yet the logged-out mobile header had no shortcut for login, sign-up, or event creation — just search and categories.',
        'Session recordings showed the same pattern over and over: visitors scrolled the event feed, found no invitation to "create my event," and left. Compared to desktop, where producer CTAs were visible in the header, the mobile experience pushed this audience out of the funnel on the very first screen.',
        'We went beyond the homepage and looked at the internal event-management page. There the imbalance flipped: only 33% of visits to "My Events" came from mobile, versus 66% from desktop — a sign that existing producers avoided the phone to manage their events, likely because they didn\'t trust the mobile experience for that task.',
      ],
    },
    dataPoints: [
      {
        value: '86%',
        label: { pt: 'dos acessos à home são via Mobile', en: 'of homepage visits are Mobile' },
        source: 'Clarity',
      },
      {
        value: '33%',
        label: { pt: 'dos acessos a "Meus Eventos" são via Mobile', en: 'of "My Events" visits are Mobile' },
        source: 'Clarity',
      },
    ] as DataPoint[],
    images: [
      {
        src: '/images/projects/sympla/01-problema-header-mobile.png',
        alt: {
          pt: 'Comparação entre home logada e não logada no mobile, sem CTA de login ou criação de evento no header',
          en: 'Comparison between logged-in and logged-out mobile home, with no login or event-creation CTA in the header',
        },
        caption: {
          pt: 'Nem a home logada nem a não logada tinham um CTA claro de login/cadastro ou "Criar Evento" no header mobile.',
          en: 'Neither the logged-in nor the logged-out home had a clear login/sign-up or "Create Event" CTA in the mobile header.',
        },
      },
      {
        src: '/images/projects/sympla/02-variante-a-e-funil-meus-eventos.png',
        alt: {
          pt: 'Funil de dispositivos da página Meus Eventos mostrando apenas 33% de acesso mobile',
          en: 'Device funnel for the My Events page showing only 33% mobile access',
        },
        caption: {
          pt: 'Enquanto a home tinha 86% de tráfego mobile, "Meus Eventos" invertia a proporção: apenas 33% mobile.',
          en: 'While the homepage had 86% mobile traffic, "My Events" flipped the ratio: only 33% mobile.',
        },
      },
    ] as CaseImage[],
  },
  solution: {
    title: {
      pt: 'O Caminho de Solução',
      en: 'The Path to a Solution',
    },
    heading: {
      pt: 'Testar, medir, escolher: 3 variantes para um único CTA',
      en: 'Test, measure, choose: 3 variants for a single CTA',
    },
    content: {
      pt: [
        'A hipótese era simples: se colocássemos um CTA de "Crie seu Evento" visível e persuasivo no header mobile, conseguiríamos capturar a intenção de quem já chegava à Sympla querendo produzir um evento, sem depender de scroll ou de já estar logado.',
        'Desenhamos três variantes para testar em A/B, todas adicionando uma barra dedicada ao CTA acima ou integrada ao header, mas variando posição, hierarquia e a copy de apoio:',
      ],
      en: [
        'The hypothesis was simple: if we placed a visible, persuasive "Create your Event" CTA in the mobile header, we could capture the intent of people who already arrived at Sympla wanting to produce an event, without depending on scroll or being logged in.',
        'We designed three variants to A/B test, all adding a dedicated CTA bar above or integrated into the header, varying position, hierarchy, and supporting copy:',
      ],
    },
    variants: [
      {
        name: 'Variante A',
        description: {
          pt: 'Barra azul de destaque acima do header, com a copy "Seja um Produtor de Sucesso" e botão primário "Crie seu evento".',
          en: 'Highlighted blue bar above the header, with the copy "Be a Successful Producer" and a primary "Create your event" button.',
        },
        isWinner: true,
      },
      {
        name: 'Variante B',
        description: {
          pt: 'Mesma barra, mas posicionada acima da logo Sympla, invertendo a ordem de leitura no topo da tela.',
          en: 'Same bar, but positioned above the Sympla logo, inverting the reading order at the top of the screen.',
        },
      },
      {
        name: 'Variante C',
        description: {
          pt: 'Barra posicionada abaixo dos ícones de categorias/benefícios, priorizando a navegação de descoberta antes do CTA de produtor.',
          en: 'Bar positioned below the category/benefits icons, prioritizing discovery navigation before the producer CTA.',
        },
      },
    ] as Variant[],
    flow: {
      title: {
        pt: 'O fluxo por trás do botão',
        en: 'The flow behind the button',
      },
      description: {
        pt: 'Além do teste visual, desenhamos o fluxo de decisão do clique: usuário logado vai direto para "Meus Eventos"; usuário não logado abre um modal de login/cadastro e, ao concluir, segue para a criação — sem perder o contexto nem precisar recomeçar a navegação.',
        en: 'Beyond the visual test, we designed the decision flow behind the click: logged-in users go straight to "My Events"; logged-out users get a login/sign-up modal and, once done, continue on to creation — without losing context or having to restart navigation.',
      },
      image: {
        src: '/images/projects/sympla/04-fluxo-cta-login.png',
        alt: {
          pt: 'Fluxograma do CTA Crie seu Evento verificando se o usuário está logado antes de redirecionar',
          en: 'Flowchart of the Create your Event CTA checking whether the user is logged in before redirecting',
        },
      },
    },
    detailing: {
      title: {
        pt: 'Detalhamento para desenvolvimento',
        en: 'Detailing for development',
      },
      description: {
        pt: 'Para viabilizar a implementação sem ambiguidade, documentamos a anatomia, o espaçamento e os specs do componente tanto para desktop (1440px) quanto para mobile (390px), garantindo consistência visual entre as duas experiências.',
        en: 'To enable implementation without ambiguity, we documented the component\'s anatomy, spacing, and specs for both desktop (1440px) and mobile (390px), ensuring visual consistency between the two experiences.',
      },
      image: {
        src: '/images/projects/sympla/07-anatomy-specs.png',
        alt: {
          pt: 'Especificações de anatomia e espaçamento do CTA para desktop e mobile',
          en: 'Anatomy and spacing specifications of the CTA for desktop and mobile',
        },
      },
    },
    images: [
      {
        src: '/images/projects/sympla/03-teste-ab-variantes.png',
        alt: {
          pt: 'Três variantes do teste A/B lado a lado, com a Variante A vencedora com 12% de uplift',
          en: 'Three A/B test variants side by side, with Variant A winning with a 12% uplift',
        },
        caption: {
          pt: 'As três variantes testadas simultaneamente. A Variante A venceu com 12% de uplift nos cliques.',
          en: 'The three variants tested simultaneously. Variant A won with a 12% uplift in clicks.',
        },
      },
      {
        src: '/images/projects/sympla/05-homepage-desktop-referencia.png',
        alt: {
          pt: 'Referência de header desktop com CTAs Crie seu Evento, Acesse sua Conta e Cadastre-se',
          en: 'Desktop header reference with Create your Event, Access your Account, and Sign up CTAs',
        },
        caption: {
          pt: 'No desktop, os CTAs de produtor já eram visíveis no header — a referência que faltava replicar no mobile.',
          en: 'On desktop, producer CTAs were already visible in the header — the reference that was missing on mobile.',
        },
      },
      {
        src: '/images/projects/sympla/06-homepage-mobile-referencia.png',
        alt: {
          pt: 'Referência de home mobile com barra de CTA Produza seus eventos aqui',
          en: 'Mobile home reference with the "Produce your events here" CTA bar',
        },
        caption: {
          pt: 'Versão mobile de referência com a barra "Produza seus eventos aqui!" acima do header.',
          en: 'Reference mobile version with the "Produce your events here!" bar above the header.',
        },
      },
    ] as CaseImage[],
  },
  result: {
    title: {
      pt: 'O Resultado',
      en: 'The Result',
    },
    heading: {
      pt: 'Um clique a menos entre a intenção e o evento criado',
      en: 'One less click between intent and a created event',
    },
    content: {
      pt: 'A Variante A venceu o teste A/B com 12% de uplift nos cliques para criação de evento, validando a hipótese: o problema não era falta de interesse dos usuários mobile, era a ausência de um convite visível no momento certo. Com o CTA no ar, produtores em potencial passaram a encontrar, já na primeira tela, um caminho direto — logado ou não — para transformar intenção em evento publicado.',
      en: 'Variant A won the A/B test with a 12% uplift in clicks toward event creation, validating the hypothesis: the problem wasn\'t a lack of interest from mobile users, it was the absence of a visible invitation at the right moment. With the CTA live, potential producers now find, right on the first screen, a direct path — logged in or not — to turn intent into a published event.',
    },
  },
  metrics: [
    { value: '86%', label: { pt: 'do Tráfego é Mobile', en: 'of Traffic is Mobile' } },
    { value: '+12%', label: { pt: 'Uplift em Cliques para Criar Evento', en: 'Uplift in Create-Event Clicks' } },
    { value: '3', label: { pt: 'Variantes Testadas em A/B', en: 'A/B Tested Variants' } },
  ],
};
