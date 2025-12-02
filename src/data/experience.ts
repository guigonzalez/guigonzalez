export interface Experience {
  company: string;
  role: {
    pt: string;
    en: string;
  };
  period: {
    start: string;
    end: string | null;
  };
  location?: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  highlights?: {
    pt: string[];
    en: string[];
  };
}

export const experiences: Experience[] = [
  {
    company: 'Ingresse',
    role: {
      pt: 'Especialista em Design + AI',
      en: 'Design + AI Specialist',
    },
    period: {
      start: 'Apr 2025',
      end: null,
    },
    location: {
      pt: 'Brasil',
      en: 'Brazil',
    },
    description: {
      pt: 'Responsável por liderar iniciativas que integram design estratégico com inteligência artificial para criar produtos mais inteligentes, escaláveis e centrados em comportamento real. Atuo na interseção entre experiência do usuário, automação e dados, desenhando fluxos, sistemas e interfaces que evoluem com o uso.',
      en: 'Leading initiatives that integrate strategic design with artificial intelligence to create smarter, scalable products centered on real behavior. Working at the intersection of user experience, automation, and data, designing flows, systems, and interfaces that evolve with usage.',
    },
  },
  {
    company: 'Sympla',
    role: {
      pt: 'Product Designer Specialist',
      en: 'Product Designer Specialist',
    },
    period: {
      start: 'Nov 2024',
      end: 'Apr 2025',
    },
    location: {
      pt: 'Brasil',
      en: 'Brazil',
    },
    description: {
      pt: 'Especialista em Design de Produto com expertise em B2B, Product Analytics e Design Systems. Liderei o desenvolvimento e evolução de soluções de design escaláveis, focando na criação de sistemas robustos que impulsionam consistência e eficiência.',
      en: 'Product Design Specialist with expertise in B2B, Product Analytics, and Design Systems. Led the development and evolution of scalable design solutions, focusing on creating robust design systems that drive consistency and efficiency.',
    },
  },
  {
    company: 'Superlógica Imobi',
    role: {
      pt: 'Head of UX & Design',
      en: 'Head of UX & Design',
    },
    period: {
      start: 'Feb 2024',
      end: 'Nov 2024',
    },
    location: {
      pt: 'Campinas, São Paulo, Brasil',
      en: 'Campinas, São Paulo, Brazil',
    },
    description: {
      pt: 'Responsável por conduzir a criação de estratégias de design intuitivas e centradas no usuário que impulsionam engajamento e satisfação. Liderei uma equipe talentosa de designers, fomentando inovação, colaboração e aprendizado contínuo.',
      en: 'Responsible for steering the creation of intuitive, user-centric design strategies that drive engagement and satisfaction. Led a talented team of designers, fostering innovation, collaboration, and continuous learning.',
    },
    highlights: {
      pt: [
        'Liderou implementação de feature Kanban de leads',
        '34% de aumento na satisfação do cliente',
        'Mentoria de equipe em práticas de Upstream',
      ],
      en: [
        'Led implementation of Lead Kanban feature',
        '34% increase in customer satisfaction',
        'Team mentoring in Upstream practices',
      ],
    },
  },
  {
    company: 'BVGroup',
    role: {
      pt: 'Design System Specialist',
      en: 'Design System Specialist',
    },
    period: {
      start: 'Jan 2024',
      end: 'Jun 2024',
    },
    location: {
      pt: 'Gibraltar (Remoto)',
      en: 'Gibraltar (Remote)',
    },
    description: {
      pt: 'Contribuí para a construção de um design system multi-marca e uma estrutura de linguagem universal para variáveis aplicada ao contexto dos produtos desenvolvidos pela equipe de desenvolvimento.',
      en: 'Contributed to building a multi-brand design system and a universal language structure for variables applied to the context of products developed by the development team.',
    },
  },
  {
    company: 'Editora Oniros',
    role: {
      pt: 'Editorial Designer & Digital Marketing',
      en: 'Editorial Designer & Digital Marketing',
    },
    period: {
      start: 'Jan 2023',
      end: 'Apr 2024',
    },
    location: {
      pt: 'São Paulo, Brasil',
      en: 'São Paulo, Brazil',
    },
    description: {
      pt: 'Como Designer Editorial, responsável por dar vida às palavras, tornando a informação atraente e envolvente através do design. Criação de layouts para revistas, livros, jornais e outros materiais impressos.',
      en: 'As an Editorial Designer, responsible for bringing words to life, making information attractive and engaging through design. Creating layouts for magazines, books, newspapers, and other printed materials.',
    },
  },
  {
    company: 'Jüssi',
    role: {
      pt: 'Design Lead',
      en: 'Design Lead',
    },
    period: {
      start: 'Dec 2023',
      end: 'Mar 2024',
    },
    location: {
      pt: 'São Paulo, Brasil',
      en: 'São Paulo, Brazil',
    },
    description: {
      pt: 'Liderei a equipe de design no projeto Discovery B2B Store para Mondelez, focando em trazer inovação para soluções de e-commerce B2B. Decodifiquei necessidades complexas de clientes em estratégias de design elegantes e fáceis de usar.',
      en: 'Led the design team on the Discovery B2B Store project for Mondelez, focusing on bringing innovation to B2B e-commerce solutions. Decoded complex client needs into sleek, user-friendly design strategies.',
    },
  },
  {
    company: 'Impacta Tecnologia',
    role: {
      pt: 'Professor',
      en: 'Teacher',
    },
    period: {
      start: 'Jul 2020',
      end: 'Dec 2023',
    },
    location: {
      pt: 'São Paulo, SP, Brasil',
      en: 'São Paulo, SP, Brazil',
    },
    description: {
      pt: 'Ensino de fundamentos de design, incluindo Interação, Interfaces, Acessibilidade, Design System com foco em Design Tokens, Semântica de Design e Princípios de Design. Também abordando uso de IA em Design e Experiência do Usuário.',
      en: 'Teaching design fundamentals, including Interaction, Interfaces, Accessibility, Design System with focus on Design Tokens, Design Semantics, and Design Principles. Also covering the use of AI in Design and User Experience.',
    },
  },
  {
    company: 'Whirlpool Corporation',
    role: {
      pt: 'UX Design Sr Manager / Agile Manager / Content Strategy Manager',
      en: 'UX Design Sr Manager / Agile Manager / Content Strategy Manager',
    },
    period: {
      start: 'Mar 2021',
      end: 'Oct 2023',
    },
    location: {
      pt: 'São Paulo, Brasil',
      en: 'São Paulo, Brazil',
    },
    description: {
      pt: 'Promovi colaboração e inovação dentro da equipe de design para produtividade e satisfação otimizadas. Entreguei direção clara de design, elevei a performance da equipe e fomentei crescimento profissional enquanto construía uma carreira dinâmica.',
      en: 'Promoted collaboration and innovation within the design team for optimal productivity and job satisfaction. Delivered clear design direction, elevated team performance, and fostered professional growth while crafting a dynamic career ladder.',
    },
    highlights: {
      pt: [
        'Liderou time de 70+ designers',
        '98% taxa de conclusão de PDI',
        'Aumentou Intenção de Compra em 10% com Showcase Pages',
        'Reduziu deploy de Landing Pages de 30 para 5 dias',
      ],
      en: [
        'Led team of 70+ designers',
        '98% PDI completion rate',
        'Boosted Buying Intention by 10% with Showcase Pages',
        'Reduced Landing Page deployment from 30 to 5 days',
      ],
    },
  },
  {
    company: 'RD (RaiaDrogasil)',
    role: {
      pt: 'Design Lead',
      en: 'Design Lead',
    },
    period: {
      start: 'Apr 2020',
      end: 'Dec 2020',
    },
    location: {
      pt: 'São Paulo, SP, Brasil',
      en: 'São Paulo, SP, Brazil',
    },
    description: {
      pt: 'Liderei a criação e entrega do Pulso Design System 1.0 em 10 meses para uma grande corporação farmacêutica, transformando a entrega de design multimarca ao consolidá-la em um único projeto white-label.',
      en: 'Championed creation and delivery of Pulso Design System 1.0 within 10 months for a major pharmaceutical corporation, transforming multibrand design delivery by consolidating it into a single white-label project.',
    },
    highlights: {
      pt: [
        'Criou Pulso Design System 1.0 em 10 meses',
        '12% de redução no tempo de iteração de design',
      ],
      en: [
        'Created Pulso Design System 1.0 in 10 months',
        '12% reduction in design iteration time',
      ],
    },
  },
  {
    company: 'Gympass',
    role: {
      pt: 'DesignOps Lead',
      en: 'DesignOps Lead',
    },
    period: {
      start: 'Aug 2019',
      end: 'Apr 2020',
    },
    location: {
      pt: 'São Paulo e Região, Brasil',
      en: 'São Paulo Area, Brazil',
    },
    description: {
      pt: 'Liderei melhorias de produto, otimizando a eficiência e consistência das operações de design. Empoderei equipes de design, elevei a produtividade e simplifiquei workflows.',
      en: 'Spearheaded product enhancements, optimizing the efficiency and consistency of design operations. Empowered design teams, elevated productivity, and streamlined workflows.',
    },
    highlights: {
      pt: [
        'Desenvolveu Yoga Design System 1.0 em 4 meses',
        'Colaboração com Agile Coaches em projetos globais',
      ],
      en: [
        'Developed Yoga Design System 1.0 in 4 months',
        'Collaboration with Agile Coaches on global projects',
      ],
    },
  },
  {
    company: 'Dasa',
    role: {
      pt: 'UX Strategy Lead',
      en: 'UX Strategy Lead',
    },
    period: {
      start: 'Jun 2018',
      end: 'Aug 2019',
    },
    location: {
      pt: 'São Paulo, São Paulo',
      en: 'São Paulo, São Paulo',
    },
    description: {
      pt: 'Executei decisões estratégicas de design sobre funcionalidades core e features inovadoras, contribuindo para o sucesso geral do produto e satisfação do usuário. Diagnostiquei desafios de design e formulei soluções sofisticadas.',
      en: 'Executed strategic design decisions about core functionalities and innovative features, contributing to overall product success and user satisfaction. Diagnosed design challenges and formulated sophisticated solutions.',
    },
    highlights: {
      pt: [
        'Liderou iniciativas de experiência do usuário para sistemas, websites e serviços',
        'Implementou práticas de design thinking e cultura ágil',
      ],
      en: [
        'Led user experience initiatives for systems, websites, and services',
        'Implemented design thinking practices and agile culture',
      ],
    },
  },
  {
    company: 'Dasa (via Ornito)',
    role: {
      pt: 'Senior UX Designer',
      en: 'Senior UX Designer',
    },
    period: {
      start: 'Oct 2017',
      end: 'Jun 2018',
    },
    location: {
      pt: 'São Paulo, São Paulo',
      en: 'São Paulo, São Paulo',
    },
    description: {
      pt: 'Terceirizado pela Ornito, internado na Dasa, para gerenciar e construir uma equipe ágil de UX, respondendo a todos os projetos e iniciativas da empresa.',
      en: 'Outsourced by Ornito, interned at Dasa, to manage and build an agile team of UX, responding to all the projects and initiatives of the company.',
    },
  },
  {
    company: 'Ornito',
    role: {
      pt: 'Senior UX Designer',
      en: 'Senior UX Designer',
    },
    period: {
      start: 'Aug 2017',
      end: 'Jun 2018',
    },
    location: {
      pt: 'São Paulo',
      en: 'São Paulo',
    },
    description: {
      pt: 'Trabalhando em projetos como UX Lead e fornecendo melhor experiência do usuário e processo de design thinking para clientes selecionados.',
      en: 'Working inside projects as UX Lead and providing better user experience and design thinking process to selected clients.',
    },
  },
  {
    company: 'Contractize',
    role: {
      pt: 'Head of Design & User Experience',
      en: 'Head of Design & User Experience',
    },
    period: {
      start: 'Jul 2016',
      end: 'Jul 2020',
    },
    location: {
      pt: 'Florida, EUA',
      en: 'Florida, USA',
    },
    description: {
      pt: 'Implementei uma estratégia abrangente de design alinhada com os objetivos gerais de negócio da empresa. Liderei, mentoreei e inspirei uma equipe de UX designers, fomentando uma cultura de criatividade, colaboração e melhoria contínua.',
      en: 'Implemented a comprehensive design strategy aligned with the company\'s overall business objectives. Led, mentored, and inspired a team of UX designers, fostering a culture of creativity, collaboration, and continuous improvement.',
    },
    highlights: {
      pt: [
        'Top 20 startups de legal tech emergentes (AngelList 2018)',
        'Beta Startup aprovada no Web Summit 2018',
      ],
      en: [
        'Top 20 emerging legal tech startups (AngelList 2018)',
        'Beta Startup approved at Web Summit 2018',
      ],
    },
  },
  {
    company: 'Choco la Design',
    role: {
      pt: 'Editor',
      en: 'Editor',
    },
    period: {
      start: 'Sep 2015',
      end: 'Jan 2018',
    },
    location: {
      pt: 'Brasil',
      en: 'Brazil',
    },
    description: {
      pt: 'Escrevendo novas edições de UX / UI e Design para Startups. Colunas periódicas sobre UX / UI e Design.',
      en: 'Writing new editions of UX / UI and Design for Startups. Periodic columns on UX / UI and Design.',
    },
  },
  {
    company: 'Uxer - Consultoria de experiência do usuário',
    role: {
      pt: 'Managing Director & UX Designer',
      en: 'Managing Director & UX Designer',
    },
    period: {
      start: 'Jan 2014',
      end: 'Jul 2017',
    },
    location: {
      pt: 'São Paulo Area, Brasil',
      en: 'São Paulo Area, Brazil',
    },
    description: {
      pt: 'Entreguei liderança inspiradora para equipes cross-funcionais, fomentando cultura de inovação, colaboração e excelência. Dirigi o processo de design UX, desde a conceitualização até a implementação.',
      en: 'Delivered inspirational leadership to cross-functional teams, fostering a culture of innovation, collaboration, and excellence. Directed the UX design process, from conceptualization to implementation.',
    },
    highlights: {
      pt: [
        'Clientes: Whirlpool, Mastercard, Hospital Sírio-Libanês, Bradesco Financiamentos',
        'Melhorias mensuráveis em engajamento e satisfação do usuário',
      ],
      en: [
        'Clients: Whirlpool, Mastercard, Hospital Sírio-Libanês, Bradesco Financiamentos',
        'Measurable improvements in user engagement and satisfaction',
      ],
    },
  },
  {
    company: 'Mastercard',
    role: {
      pt: 'Senior UX Consultant',
      en: 'Senior UX Consultant',
    },
    period: {
      start: 'Aug 2016',
      end: 'Jan 2017',
    },
    location: {
      pt: 'São Paulo, São Paulo',
      en: 'São Paulo, São Paulo',
    },
    description: {
      pt: 'Consultoria de UX para produtos da empresa.',
      en: 'UX Consulting for company products.',
    },
  },
  {
    company: 'Hospital Sírio-Libanês',
    role: {
      pt: 'Senior UX Consultant',
      en: 'Senior UX Consultant',
    },
    period: {
      start: 'May 2016',
      end: 'Dec 2016',
    },
    location: {
      pt: 'São Paulo, São Paulo',
      en: 'São Paulo, São Paulo',
    },
    description: {
      pt: 'UX Research atuando na construção de uma solução digital de atendimento.',
      en: 'UX Research working on building a digital service solution.',
    },
  },
  {
    company: 'AGÊNCIA BR2 (Grupo BR2 Design)',
    role: {
      pt: 'Diretor de Criação',
      en: 'Creative Director',
    },
    period: {
      start: 'Feb 2013',
      end: 'Jan 2014',
    },
    location: {
      pt: 'São Paulo, SP, Brasil',
      en: 'São Paulo, SP, Brazil',
    },
    description: {
      pt: 'UX Designer responsável pela equipe online.',
      en: 'UX Designer responsible for online team.',
    },
  },
  {
    company: 'iPicnic',
    role: {
      pt: 'Designer de Interfaces',
      en: 'Interface Designer',
    },
    period: {
      start: 'Jul 2012',
      end: 'Jan 2013',
    },
    location: {
      pt: 'São Paulo',
      en: 'São Paulo',
    },
    description: {
      pt: 'Design de apps e desenvolvimento de jogos digitais para iOS e Web.',
      en: 'Design of apps and development of digital games for iOS and Web.',
    },
  },
  {
    company: 'TV PinGuim',
    role: {
      pt: 'Ilustrador',
      en: 'Illustrator',
    },
    period: {
      start: 'Aug 2011',
      end: 'Sep 2012',
    },
    location: {
      pt: 'São Paulo',
      en: 'São Paulo',
    },
    description: {
      pt: 'Trabalho com uma ampla área de projetos para Televisão e Cinema, recebendo créditos visíveis em quadrinhos recém-publicados.',
      en: 'Work with a wide area of projects for Television and Cinema, receiving credits visible in newly published comics.',
    },
  },
  {
    company: 'Freelancer / Contractor',
    role: {
      pt: 'Designer Digital',
      en: 'Digital Designer',
    },
    period: {
      start: 'Oct 2004',
      end: 'Sep 2011',
    },
    location: {
      pt: 'São Paulo',
      en: 'São Paulo',
    },
    description: {
      pt: 'Criação de capas e rótulos para DVD, cartões de visita, banners para website, produção e criação de layouts para email marketing. Edição e tratamento de fotos, criação de layouts e identidade visual.',
      en: 'Creation of covers and labels for DVD, business cards, banners for websites, production and creation of layouts for email marketing. Photo editing and treatment, layout creation and visual identity.',
    },
  },
];
