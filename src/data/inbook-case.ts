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

export interface Persona {
  name: string;
  role: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export type FlowType = 'main' | 'alternative';

export interface Scenario {
  number: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  explanation: {
    pt: string;
    en: string;
  };
  flowType: FlowType;
}

export interface Principle {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export interface FlowFrame {
  src: string;
  label: {
    pt: string;
    en: string;
  };
}

export interface ScenarioFlow {
  number: string;
  title: {
    pt: string;
    en: string;
  };
  frames: FlowFrame[];
}

export const inbookCase = {
  tldr: {
    pt: 'Como consultor de UX e Design dedicado à Incube Metrics de julho a novembro de 2025, conduzi uma pesquisa etnográfica com promotores de merchandising que revelou que apenas 15% usavam o InBook, produto do cliente, de forma efetiva — recorrendo a WhatsApp e planilhas para controlar validade de produtos. Desenhei do zero uma nova seção de Alertas de Validade e Estoque, com 10 cenários de uso mapeados, do scan de código de barras a notificações proativas na home.',
    en: 'As a UX and Design consultant dedicated to Incube Metrics from July to November 2025, I conducted ethnographic research with merchandising promoters that revealed only 15% effectively used InBook, the client\'s product — falling back on WhatsApp and spreadsheets to track product expiration. I designed a new Expiration and Stock Alerts section from scratch, mapping 10 usage scenarios, from barcode scanning to proactive home-screen notifications.',
  },
  subtitle: {
    pt: 'De app coadjuvante a ferramenta indispensável em campo',
    en: 'From a secondary app to an indispensable field tool',
  },
  client: 'Incube Metrics',
  period: {
    pt: 'Julho a Novembro de 2025',
    en: 'July to November 2025',
  },
  researchDocUrl: 'https://docs.google.com/document/d/1AIpLr1Ordt9ehYqJ6pk4m70Yg1mQB3bm/edit?usp=sharing&ouid=117210221492552064990&rtpof=true&sd=true',
  challenge: {
    title: {
      pt: 'O Desafio',
      en: 'The Challenge',
    },
    heading: {
      pt: 'Só 15% dos promotores realmente usavam o app',
      en: 'Only 15% of promoters actually used the app',
    },
    content: {
      pt: [
        'A Incube Metrics é minha cliente, e o InBook é o produto dela: um aplicativo mobile usado por promotores de merchandising e supervisores de trade marketing no dia a dia dentro de PDVs — Atacadão, supermercados, drogarias. Fui contratado como consultor de UX e Design, dedicado ao projeto de julho a novembro de 2025, para conduzir a pesquisa e desenhar a solução. As entrevistas etnográficas e a observação direta em campo revelaram um dado difícil de ignorar: apenas 15% dos usuários utilizavam o InBook de forma efetiva.',
        'Promotores como João Silva, 27 anos, e supervisoras como Ana Paula, 38 anos — as duas personas centrais da pesquisa — perdiam tempo alternando entre WhatsApp, planilhas e outros sistemas de trade só para controlar a validade de produtos perecíveis e congelados. Não havia no app nenhum controle visual ágil de itens próximos ao vencimento.',
        'O custo dessa lacuna era concreto: alto risco de perda de produto por vencimento, ausência de notificações proativas ou histórico centralizado, e um fluxo de trabalho fragmentado — escanear, registrar, lembrar e reportar aconteciam em ferramentas diferentes, de forma manual e propensa a erro.',
        'A observação de campo também revelou o contexto real de uso: o promotor se desloca o dia inteiro entre diferentes lojas, sem acesso a computador ou a qualquer recurso além do próprio celular — o que torna o app não apenas útil, mas essencial. E esse celular é usado com uma mão só, em ambientes ruidosos, sob pressão de tempo, muitas vezes com a tela danificada. Qualquer solução precisava sobreviver a essas condições, não a um ambiente de escritório.',
      ],
      en: [
        'Incube Metrics is my client, and InBook is their product: a mobile app used by merchandising promoters and trade marketing supervisors in their daily work inside stores — Atacadão, supermarkets, drugstores. I was hired as a UX and Design consultant, dedicated to the project from July to November 2025, to lead the research and design the solution. Ethnographic interviews and direct field observation surfaced a hard-to-ignore number: only 15% of users engaged with InBook effectively.',
        'Promoters like João Silva, 27, and supervisors like Ana Paula, 38 — the research\'s two core personas — wasted time switching between WhatsApp, spreadsheets, and other trade systems just to track expiration dates for perishable and frozen goods. The app had no visual, agile control over items nearing their expiration date.',
        'The cost of that gap was concrete: high risk of product loss from expiration, no proactive notifications or centralized history, and a fragmented workflow — scanning, logging, remembering, and reporting each happened in a different tool, manually and error-prone.',
        'Field observation also revealed the real context of use: the promoter spends the whole day moving between different stores, with no access to a computer or any resource beyond their own phone — which makes the app not just useful, but essential. And that phone is used one-handed, in noisy environments, under time pressure, often with a damaged screen. Any solution had to survive those conditions, not an office environment.',
      ],
    },
    dataPoints: [
      { value: '15%', label: { pt: 'de uso efetivo do app', en: 'effective app usage' } },
      { value: '90%', label: { pt: 'relatavam fragmentação de ferramentas', en: 'reported tool fragmentation' } },
      { value: '95%', label: { pt: 'sentiam pressão constante por agilidade', en: 'felt constant pressure for speed' } },
    ],
    personas: [
      {
        name: 'João Silva',
        role: { pt: '27 anos, Promotor de Merchandising', en: '27 years old, Merchandising Promoter' },
        description: {
          pt: 'Circula por múltiplos PDVs no mesmo dia, escaneando e repondo produtos com uma mão, enquanto segura o celular com a outra.',
          en: 'Moves through multiple stores in the same day, scanning and restocking products one-handed while holding the phone with the other.',
        },
      },
      {
        name: 'Ana Paula',
        role: { pt: '38 anos, Supervisora de Trade Marketing', en: '38 years old, Trade Marketing Supervisor' },
        description: {
          pt: 'Acompanha remotamente o desempenho de vários promotores e precisa de visibilidade rápida sobre risco de perda por vencimento.',
          en: 'Remotely tracks the performance of several promoters and needs quick visibility into expiration-related loss risk.',
        },
      },
    ] as Persona[],
    fieldPhotos: [
      {
        src: '/images/projects/inbook/pesquisa-campo-time.jpeg',
        alt: {
          pt: 'Time de pesquisa reunido no corredor de um supermercado durante a pesquisa etnográfica em campo',
          en: 'Research team gathered in a supermarket aisle during the ethnographic field research',
        },
        caption: {
          pt: 'A equipe em campo, dentro do PDV, para observar de perto a rotina real do promotor.',
          en: 'The team in the field, inside the store, observing the promoter\'s real routine up close.',
        },
      },
      {
        src: '/images/projects/inbook/pesquisa-campo-corredor-padaria-1.jpeg',
        alt: {
          pt: 'Corredor de padaria de um supermercado com prateleiras de pães durante visita de pesquisa',
          en: 'Supermarket bakery aisle with bread shelves during the research visit',
        },
      },
      {
        src: '/images/projects/inbook/pesquisa-campo-corredor-padaria-2.jpeg',
        alt: {
          pt: 'Detalhe das prateleiras de pães observadas durante a pesquisa de campo',
          en: 'Detail of the bread shelves observed during the field research',
        },
      },
    ] as CaseImage[],
    images: [
      {
        src: '/images/projects/inbook/wireframe-beep-inicial.png',
        alt: {
          pt: 'Wireframe inicial de baixa fidelidade do fluxo de leitura de código de barras',
          en: 'Initial low-fidelity wireframe of the barcode scanning flow',
        },
        caption: {
          pt: 'Os primeiros wireframes (codinome "Beep") já testavam a ideia central: ler o código de barras e cadastrar a validade em poucos passos.',
          en: 'The earliest wireframes (codename "Beep") already tested the core idea: scan the barcode and log expiration in a few steps.',
        },
      },
    ] as CaseImage[],
  },
  process: {
    title: {
      pt: 'O Processo',
      en: 'The Process',
    },
    heading: {
      pt: '10 cenários para cobrir a jornada inteira',
      en: '10 scenarios to cover the entire journey',
    },
    intro: {
      pt: 'A partir da pesquisa, mapeei o fluxo principal — início, leitura do código de barras, verificação se o produto já está cadastrado, categorização e lista de alertas — e desenhei 10 cenários de uso que cobrem o caminho feliz e os principais casos de borda encontrados em campo.',
      en: 'From the research, I mapped the main flow — start, barcode scan, checking whether the product is already registered, categorization, and the alerts list — and designed 10 usage scenarios covering both the happy path and the key edge cases found in the field.',
    },
    flowImage: {
      src: '/images/projects/inbook/fluxo-principal.png',
      alt: {
        pt: 'Fluxograma do processo principal: início, página inicial, ler código de barras, verificar cadastro, adicionar informações ou cadastrar produto, categorização, lista de produtos, fim',
        en: 'Flowchart of the main process: start, home page, scan barcode, check registration, add information or register product, categorization, product list, end',
      },
    },
    scenarios: [
      {
        number: '01',
        title: { pt: 'Scanear', en: 'Scan' },
        description: {
          pt: 'Leitura do código de barras do produto seguida de cadastro rápido do alerta: data de validade, PDV, categoria e lembrete.',
          en: 'Scanning the product barcode followed by quick alert setup: expiration date, store, category, and reminder.',
        },
        explanation: {
          pt: 'O caminho feliz do app: o promotor aponta a câmera para o código de barras e, em poucos toques, cadastra a validade do produto sem sair da loja.',
          en: 'The app\'s happy path: the promoter points the camera at the barcode and, in a few taps, logs the product\'s expiration without leaving the aisle.',
        },
        flowType: 'main',
      },
      {
        number: '02',
        title: { pt: 'Lista de Alertas', en: 'Alert List' },
        description: {
          pt: 'Visualização consolidada dos alertas por PDV, com abas de ativos e desativados e busca rápida.',
          en: 'Consolidated view of alerts per store, with active/inactive tabs and quick search.',
        },
        explanation: {
          pt: 'Antes de ver os alertas, o promotor escolhe em qual loja está trabalhando. A partir daí, todos os produtos com alerta cadastrado aparecem reunidos em uma lista única.',
          en: 'Before seeing the alerts, the promoter picks which store they\'re working at. From there, every product with a registered alert shows up together in a single list.',
        },
        flowType: 'main',
      },
      {
        number: '03',
        title: { pt: 'Editar Alerta', en: 'Edit Alert' },
        description: {
          pt: 'Ajuste de datas de validade, PDV, categoria e lembretes de um alerta já cadastrado.',
          en: 'Adjusting expiration dates, store, category, and reminders for an already registered alert.',
        },
        explanation: {
          pt: 'Um alerta cadastrado não é definitivo: o promotor pode reabri-lo a qualquer momento e ajustar o prazo do lembrete, e a lista reflete a mudança na hora.',
          en: 'A registered alert isn\'t set in stone: the promoter can reopen it anytime and adjust the reminder window, and the list reflects the change instantly.',
        },
        flowType: 'alternative',
      },
      {
        number: '04',
        title: { pt: 'Desativar Alerta', en: 'Deactivate Alert' },
        description: {
          pt: 'Desligar a notificação de um alerta sem perder o registro, movendo-o para a aba de desativados.',
          en: 'Turning off an alert\'s notification without losing the record, moving it to the inactive tab.',
        },
        explanation: {
          pt: 'Quando um alerta não faz mais sentido, o promotor desliga a chave de notificação em vez de excluir o produto — o item some da aba "Ativados" e passa para "Desativados", sem perder o histórico.',
          en: 'When an alert no longer makes sense, the promoter flips its notification switch off instead of deleting the product — the item leaves the "Active" tab and moves to "Inactive," without losing its history.',
        },
        flowType: 'alternative',
      },
      {
        number: '05',
        title: { pt: 'Deletar Produto', en: 'Delete Product' },
        description: {
          pt: 'Exclusão de um produto da lista de alertas com uma confirmação explícita, já que a ação exige novo escaneamento para desfazer.',
          en: 'Removing a product from the alert list with an explicit confirmation, since undoing it requires scanning again.',
        },
        explanation: {
          pt: 'Excluir é diferente de desativar: é uma ação sem volta, então o app interrompe o promotor com uma confirmação clara antes de remover o produto de vez da lista.',
          en: 'Deleting is different from deactivating: it can\'t be undone, so the app interrupts the promoter with a clear confirmation before removing the product from the list for good.',
        },
        flowType: 'alternative',
      },
      {
        number: '06',
        title: { pt: 'Alerta na Home', en: 'Home Alert' },
        description: {
          pt: 'Notificação proativa exibida logo na tela inicial quando há produtos próximos do vencimento, sem precisar abrir a seção de alertas.',
          en: 'Proactive notification shown right on the home screen when products are near expiration, without opening the alerts section.',
        },
        explanation: {
          pt: 'O app não espera o promotor lembrar de conferir os alertas: assim que há produtos próximos do vencimento, um aviso já aparece na home, direcionando para a loja e a lista certas.',
          en: 'The app doesn\'t wait for the promoter to remember to check alerts: as soon as products are nearing expiration, a warning already appears on the home screen, pointing to the right store and list.',
        },
        flowType: 'alternative',
      },
      {
        number: '07',
        title: { pt: 'Filtrar', en: 'Filter' },
        description: {
          pt: 'Filtro por prazo (de hoje até 30 dias) e por categoria, para priorizar o que precisa de atenção imediata.',
          en: 'Filtering by timeframe (today to 30 days) and category, to prioritize what needs immediate attention.',
        },
        explanation: {
          pt: 'Com muitos alertas na lista, o promotor abre o filtro e ajusta um controle deslizante de prazo (hoje até 30 dias) e as categorias, para ver só o que precisa de atenção agora.',
          en: 'With many alerts on the list, the promoter opens the filter and adjusts a timeframe slider (today to 30 days) plus categories, to see only what needs attention right now.',
        },
        flowType: 'alternative',
      },
      {
        number: '08',
        title: { pt: 'Loja Não Cadastrada', en: 'Unregistered Store' },
        description: {
          pt: 'Cadastro temporário rápido de um PDV que ainda não existe na base, sem bloquear o trabalho do promotor.',
          en: 'Quick temporary registration of a store not yet in the database, without blocking the promoter\'s work.',
        },
        explanation: {
          pt: 'Se a loja onde o promotor está não aparece na lista de PDVs, ele cadastra um PDV temporário na hora — nome, CNPJ opcional e endereço — sem precisar esperar um cadastro formal.',
          en: 'If the store the promoter is at isn\'t on the list of locations, they register a temporary one on the spot — name, optional tax ID, and address — without waiting on a formal registration.',
        },
        flowType: 'alternative',
      },
      {
        number: '09',
        title: { pt: 'Produto Provisório', en: 'Provisional Product' },
        description: {
          pt: 'Quando o código de barras não é reconhecido, o promotor cadastra o produto na hora, com foto e nome, sem perder o fluxo.',
          en: 'When the barcode isn\'t recognized, the promoter registers the product on the spot, with a photo and name, without losing the flow.',
        },
        explanation: {
          pt: 'Ao escanear um código que o sistema não reconhece, o app oferece cadastrar um produto provisório: o promotor digita o nome, tira uma foto e segue o cadastro normalmente, com o item marcado como provisório na lista.',
          en: 'When scanning a code the system doesn\'t recognize, the app offers to register a provisional product: the promoter types the name, takes a photo, and continues the registration as usual, with the item flagged as provisional in the list.',
        },
        flowType: 'alternative',
      },
      {
        number: '10',
        title: { pt: 'Alerta Duplicado', en: 'Duplicate Alert' },
        description: {
          pt: 'Ao escanear um produto que já tem alerta ativo, o app pergunta se deve criar um segundo alerta em vez de duplicar silenciosamente.',
          en: 'When scanning a product that already has an active alert, the app asks whether to create a second one instead of silently duplicating it.',
        },
        flowType: 'alternative',
        explanation: {
          pt: 'Escanear de novo um produto que já tem alerta ativo não gera uma cópia silenciosa: o app avisa que já existe um alerta e pergunta se o promotor quer adicionar uma segunda validade — útil quando chega um novo lote com data diferente.',
          en: 'Scanning again a product that already has an active alert doesn\'t silently create a copy: the app flags that an alert already exists and asks if the promoter wants to add a second expiration date — useful when a new batch arrives with a different date.',
        },
      },
    ] as Scenario[],
    principles: [
      {
        title: { pt: 'Mobile-first, uma mão só', en: 'Mobile-first, one-handed' },
        description: {
          pt: 'Alvos de toque grandes e ações principais alcançáveis com o polegar, pensando no promotor em movimento.',
          en: 'Large touch targets and primary actions reachable by thumb, designed for a promoter on the move.',
        },
      },
      {
        title: { pt: 'Tolerante a erro', en: 'Error-tolerant' },
        description: {
          pt: 'Confirmações explícitas em ações destrutivas e tratamento de casos de borda (duplicidade, produto sem cadastro, loja nova).',
          en: 'Explicit confirmations on destructive actions and handling of edge cases (duplicates, unregistered products, new stores).',
        },
      },
      {
        title: { pt: 'Feedback visual claro', en: 'Clear visual feedback' },
        description: {
          pt: 'Status de urgência por cor e prazo, legíveis mesmo em telas danificadas ou sob luz direta do PDV.',
          en: 'Urgency status by color and deadline, legible even on damaged screens or under a store\'s direct light.',
        },
      },
      {
        title: { pt: 'Notificações proativas', en: 'Proactive notifications' },
        description: {
          pt: 'O app avisa antes de precisar ser aberto, trazendo o alerta para a home em vez de exigir que o usuário procure por ele.',
          en: 'The app warns before it needs to be opened, surfacing the alert on the home screen instead of requiring the user to look for it.',
        },
      },
    ] as Principle[],
    images: [
      {
        src: '/images/projects/inbook/cenario-01-scanear.png',
        alt: {
          pt: 'Cenário 1: fluxo de escanear código de barras e cadastrar alerta de validade',
          en: 'Scenario 1: flow for scanning a barcode and registering an expiration alert',
        },
      },
      {
        src: '/images/projects/inbook/cenario-02-lista-alertas.png',
        alt: {
          pt: 'Cenário 2: lista de alertas consolidada por PDV',
          en: 'Scenario 2: alert list consolidated by store',
        },
      },
      {
        src: '/images/projects/inbook/cenario-06-alerta-home.png',
        alt: {
          pt: 'Cenário 6: notificação proativa de alerta de validade na tela inicial',
          en: 'Scenario 6: proactive expiration alert notification on the home screen',
        },
      },
      {
        src: '/images/projects/inbook/cenario-07-filtrar.png',
        alt: {
          pt: 'Cenário 7: filtro de alertas por prazo e categoria',
          en: 'Scenario 7: filtering alerts by timeframe and category',
        },
      },
      {
        src: '/images/projects/inbook/cenario-09-produto-provisorio.png',
        alt: {
          pt: 'Cenário 9: cadastro de produto provisório quando o código de barras não é reconhecido',
          en: 'Scenario 9: registering a provisional product when the barcode isn\'t recognized',
        },
      },
      {
        src: '/images/projects/inbook/cenario-10-alerta-duplicado.png',
        alt: {
          pt: 'Cenário 10: tratamento de alerta duplicado ao escanear um produto já cadastrado',
          en: 'Scenario 10: handling a duplicate alert when scanning an already registered product',
        },
      },
    ] as CaseImage[],
    flows: [
      {
        number: '01',
        title: { pt: 'Scanear', en: 'Scan' },
        frames: [
          { src: '/images/projects/inbook/cenario-1/01-home.png', label: { pt: 'Home do app', en: 'App home' } },
          { src: '/images/projects/inbook/cenario-1/02-scanner.png', label: { pt: 'Leitura do código de barras', en: 'Barcode scan' } },
          { src: '/images/projects/inbook/cenario-1/03-cadastrar-alerta-vazio.png', label: { pt: 'Formulário de alerta é aberto', en: 'Alert form opens' } },
          { src: '/images/projects/inbook/cenario-1/04-cadastrar-alerta-pdv-dropdown.png', label: { pt: 'Seleção do PDV', en: 'Store selection' } },
          { src: '/images/projects/inbook/cenario-1/05-cadastrar-alerta-categoria-dropdown.png', label: { pt: 'Seleção da categoria', en: 'Category selection' } },
          { src: '/images/projects/inbook/cenario-1/06-cadastrar-alerta-preenchido.png', label: { pt: 'Formulário preenchido', en: 'Form filled in' } },
          { src: '/images/projects/inbook/cenario-1/07-cadastrar-alerta-lembrete-dropdown.png', label: { pt: 'Escolha do lembrete', en: 'Reminder choice' } },
          { src: '/images/projects/inbook/cenario-1/08-cadastrar-alerta-datepicker.png', label: { pt: 'Seleção da data de validade', en: 'Expiration date picker' } },
          { src: '/images/projects/inbook/cenario-1/09-lista-alertas-resultado.png', label: { pt: 'Alerta cadastrado com sucesso', en: 'Alert successfully registered' } },
        ],
      },
      {
        number: '02',
        title: { pt: 'Lista de Alertas', en: 'Alert List' },
        frames: [
          { src: '/images/projects/inbook/cenario-2/01-home.png', label: { pt: 'Home do app', en: 'App home' } },
          { src: '/images/projects/inbook/cenario-2/02-selecionar-pdv.png', label: { pt: 'Seleção do PDV', en: 'Store selection' } },
          { src: '/images/projects/inbook/cenario-2/03-lista-alertas.png', label: { pt: 'Lista de alertas da loja', en: 'Store\'s alert list' } },
        ],
      },
      {
        number: '03',
        title: { pt: 'Editar Alerta', en: 'Edit Alert' },
        frames: [
          { src: '/images/projects/inbook/cenario-3/01-lista-alertas.png', label: { pt: 'Lista de alertas ativos', en: 'Active alerts list' } },
          { src: '/images/projects/inbook/cenario-3/02-editar-alerta.png', label: { pt: 'Edição do lembrete do alerta', en: 'Editing the alert reminder' } },
          { src: '/images/projects/inbook/cenario-3/03-lista-alertas-atualizada.png', label: { pt: 'Lista atualizada com o novo prazo', en: 'List updated with the new deadline' } },
        ],
      },
      {
        number: '04',
        title: { pt: 'Desativar Alerta', en: 'Deactivate Alert' },
        frames: [
          { src: '/images/projects/inbook/cenario-4/01-home.png', label: { pt: 'Home do app', en: 'App home' } },
          { src: '/images/projects/inbook/cenario-4/02-lista-alertas-ativos.png', label: { pt: 'Lista de alertas ativos', en: 'Active alerts list' } },
          { src: '/images/projects/inbook/cenario-4/03-editar-alerta-ligado.png', label: { pt: 'Alerta com notificação ligada', en: 'Alert with notification on' } },
          { src: '/images/projects/inbook/cenario-4/04-editar-alerta-desligado.png', label: { pt: 'Chave de notificação desligada', en: 'Notification switch turned off' } },
          { src: '/images/projects/inbook/cenario-4/05-lista-alertas-desativados.png', label: { pt: 'Produto movido para "Desativados"', en: 'Product moved to "Inactive"' } },
        ],
      },
      {
        number: '05',
        title: { pt: 'Deletar Produto', en: 'Delete Product' },
        frames: [
          { src: '/images/projects/inbook/cenario-5/01-home.png', label: { pt: 'Home do app', en: 'App home' } },
          { src: '/images/projects/inbook/cenario-5/02-lista-dois-itens.png', label: { pt: 'Lista com dois produtos', en: 'List with two products' } },
          { src: '/images/projects/inbook/cenario-5/03-modal-confirmar-exclusao.png', label: { pt: 'Confirmação antes de excluir', en: 'Confirmation before deleting' } },
          { src: '/images/projects/inbook/cenario-5/04-lista-um-item-restante.png', label: { pt: 'Produto removido da lista', en: 'Product removed from the list' } },
        ],
      },
      {
        number: '06',
        title: { pt: 'Alerta na Home', en: 'Home Alert' },
        frames: [
          { src: '/images/projects/inbook/cenario-6/01-home-com-alerta.png', label: { pt: 'Aviso de alerta na home', en: 'Alert notice on the home screen' } },
          { src: '/images/projects/inbook/cenario-6/02-selecionar-pdv.png', label: { pt: 'Seleção do PDV', en: 'Store selection' } },
          { src: '/images/projects/inbook/cenario-6/03-selecionar-pdv-completo.png', label: { pt: 'Lista completa de lojas', en: 'Full store list' } },
          { src: '/images/projects/inbook/cenario-6/04-lista-alertas-filtrada.png', label: { pt: 'Alerta específico já filtrado', en: 'Specific alert already filtered' } },
        ],
      },
      {
        number: '07',
        title: { pt: 'Filtrar', en: 'Filter' },
        frames: [
          { src: '/images/projects/inbook/cenario-7/01-lista-alertas.png', label: { pt: 'Lista de alertas completa', en: 'Full alert list' } },
          { src: '/images/projects/inbook/cenario-7/02-modal-filtrar.png', label: { pt: 'Filtro por prazo e categoria', en: 'Filter by timeframe and category' } },
        ],
      },
      {
        number: '08',
        title: { pt: 'Loja Não Cadastrada', en: 'Unregistered Store' },
        frames: [
          { src: '/images/projects/inbook/cenario-8/01-home.png', label: { pt: 'Home do app', en: 'App home' } },
          { src: '/images/projects/inbook/cenario-8/02-selecionar-pdv-sem-loja.png', label: { pt: 'A loja não está na lista', en: 'The store isn\'t on the list' } },
          { src: '/images/projects/inbook/cenario-8/03-cadastrar-loja-temporaria.png', label: { pt: 'Cadastro rápido da loja temporária', en: 'Quick temporary store registration' } },
        ],
      },
      {
        number: '09',
        title: { pt: 'Produto Provisório', en: 'Provisional Product' },
        frames: [
          { src: '/images/projects/inbook/cenario-9/01-home.png', label: { pt: 'Home do app', en: 'App home' } },
          { src: '/images/projects/inbook/cenario-9/02-scanner-codigo-nao-cadastrado.png', label: { pt: 'Código de barras não reconhecido', en: 'Barcode not recognized' } },
          { src: '/images/projects/inbook/cenario-9/03-cadastrar-alerta-vazio.png', label: { pt: 'Cadastro manual do produto', en: 'Manual product registration' } },
          { src: '/images/projects/inbook/cenario-9/04-nome-produto-preenchido.png', label: { pt: 'Nome do produto preenchido', en: 'Product name filled in' } },
          { src: '/images/projects/inbook/cenario-9/05-foto-adicionada.png', label: { pt: 'Foto do produto adicionada', en: 'Product photo added' } },
          { src: '/images/projects/inbook/cenario-9/06-formulario-completo.png', label: { pt: 'Formulário completo', en: 'Form completed' } },
          { src: '/images/projects/inbook/cenario-9/07-lista-produto-provisorio.png', label: { pt: 'Produto marcado como "provisório"', en: 'Product flagged as "provisional"' } },
        ],
      },
      {
        number: '10',
        title: { pt: 'Alerta Duplicado', en: 'Duplicate Alert' },
        frames: [
          { src: '/images/projects/inbook/cenario-10/01-home.png', label: { pt: 'Home do app', en: 'App home' } },
          { src: '/images/projects/inbook/cenario-10/02-scanner-vazio.png', label: { pt: 'Escaneando o produto novamente', en: 'Scanning the product again' } },
          { src: '/images/projects/inbook/cenario-10/03-modal-alerta-existente.png', label: { pt: 'Aviso de alerta já existente', en: 'Existing alert warning' } },
          { src: '/images/projects/inbook/cenario-10/04-segunda-validade-adicionada.png', label: { pt: 'Segunda data de validade adicionada', en: 'Second expiration date added' } },
          { src: '/images/projects/inbook/cenario-10/05-lista-alertas-duplicados.png', label: { pt: 'Lista com os dois alertas do produto', en: 'List with both product alerts' } },
        ],
      },
    ] as ScenarioFlow[],
  },
  result: {
    title: {
      pt: 'O Resultado',
      en: 'The Result',
    },
    heading: {
      pt: 'De ferramenta ignorada a rotina indispensável',
      en: 'From an ignored tool to an indispensable routine',
    },
    content: {
      pt: 'A nova seção de Alertas de Validade e Estoque substitui o WhatsApp e as planilhas pelo próprio InBook, unificando escanear, registrar, lembrar e reportar em um fluxo só, desenhado para uso real em campo — com uma mão, sob pressão de tempo, em qualquer PDV. A meta definida com o time de produto é elevar o uso efetivo de 15% para mais de 60%, com redução de tempo por alerta registrado e menor dependência de ferramentas externas ao app.',
      en: 'The new Expiration and Stock Alerts section replaces WhatsApp and spreadsheets with InBook itself, unifying scanning, logging, reminding, and reporting into a single flow designed for real field use — one-handed, under time pressure, at any store. The goal set with the product team is to raise effective usage from 15% to over 60%, while cutting time per logged alert and reducing dependency on tools outside the app.',
    },
  },
  metrics: [
    { value: '15%→60%', label: { pt: 'Meta de Uso Efetivo do App', en: 'Effective Usage Target' } },
    { value: '10', label: { pt: 'Cenários de Uso Mapeados', en: 'Mapped Usage Scenarios' } },
    { value: '2', label: { pt: 'Personas Guiando o Desenho', en: 'Personas Guiding the Design' } },
  ],
};
