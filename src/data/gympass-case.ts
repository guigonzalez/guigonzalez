export interface TeamMember {
  name: string;
  role: {
    pt: string;
    en: string;
  };
  image?: string;
}

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

export interface ProcessStep {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export const gympassCase = {
  tldr: {
    pt: 'O YOGA Design System nasceu da necessidade de unificar a experiência visual e funcional do aplicativo Gympass, que sofria com inconsistências de design e retrabalho entre equipes. Em 6 meses, criamos uma biblioteca de 10 componentes React Native que reduziu em 60% o time-to-market de novas features.',
    en: 'The YOGA Design System was born from the need to unify the visual and functional experience of the Gympass app, which suffered from design inconsistencies and rework between teams. In 6 months, we created a library of 10 React Native components that reduced time-to-market for new features by 60%.',
  },
  subtitle: {
    pt: 'Criando Harmonia no Caos do Design',
    en: 'Crafting Harmony in Design Chaos',
  },
  externalLink: 'https://gympass.github.io/yoga/',
  description: {
    pt: [
      'Quando entrei no Gympass, percebi rapidamente que as equipes de produto trabalhavam em silos, cada uma desenvolvendo seus próprios componentes de interface. O resultado era uma experiência fragmentada para os usuários e um enorme desperdício de recursos em retrabalho.',
      'A proposta do YOGA foi ambiciosa: criar um sistema de design unificado que atendesse tanto às necessidades dos designers quanto dos desenvolvedores, com foco especial em React Native para o aplicativo mobile.',
      'O nome YOGA foi escolhido intencionalmente — representando equilíbrio, flexibilidade e harmonia, exatamente o que queríamos trazer para o processo de design e desenvolvimento do Gympass.',
    ],
    en: [
      'When I joined Gympass, I quickly noticed that product teams were working in silos, each developing their own interface components. The result was a fragmented user experience and a huge waste of resources on rework.',
      'YOGA\'s proposal was ambitious: create a unified design system that would meet both designers\' and developers\' needs, with a special focus on React Native for the mobile app.',
      'The name YOGA was intentionally chosen — representing balance, flexibility, and harmony, exactly what we wanted to bring to Gympass\'s design and development process.',
    ],
  },
  process: [
    {
      title: {
        pt: 'Auditoria de Componentes',
        en: 'Component Audit',
      },
      description: {
        pt: 'Mapeamos todos os componentes existentes nas diferentes squads, identificando redundâncias e inconsistências. Encontramos 47 variações de botões e 23 tipos diferentes de inputs.',
        en: 'We mapped all existing components across different squads, identifying redundancies and inconsistencies. We found 47 button variations and 23 different types of inputs.',
      },
    },
    {
      title: {
        pt: 'Design Tokens',
        en: 'Design Tokens',
      },
      description: {
        pt: 'Estabelecemos uma base sólida de tokens de design: cores, tipografia, espaçamentos e elevações. Tudo documentado e versionado.',
        en: 'We established a solid foundation of design tokens: colors, typography, spacing, and elevations. All documented and versioned.',
      },
    },
    {
      title: {
        pt: 'Componentização',
        en: 'Componentization',
      },
      description: {
        pt: 'Desenvolvemos componentes React Native reutilizáveis, testados e acessíveis. Cada componente passou por revisão de código e testes de usabilidade.',
        en: 'We developed reusable, tested, and accessible React Native components. Each component went through code review and usability testing.',
      },
    },
    {
      title: {
        pt: 'Documentação',
        en: 'Documentation',
      },
      description: {
        pt: 'Criamos uma documentação viva com exemplos interativos, guidelines de uso e especificações técnicas para designers e desenvolvedores.',
        en: 'We created living documentation with interactive examples, usage guidelines, and technical specifications for designers and developers.',
      },
    },
  ] as ProcessStep[],
  images: [
    {
      src: '/images/projects/gympass/case4.png',
      alt: {
        pt: 'Página inicial do YOGA Design System',
        en: 'YOGA Design System home page',
      },
      caption: {
        pt: 'Homepage do YOGA Design System com Guidelines, Components e System.',
        en: 'YOGA Design System homepage with Guidelines, Components, and System.',
      },
    },
    {
      src: '/images/projects/gympass/case3.png',
      alt: {
        pt: 'Biblioteca de componentes do YOGA',
        en: 'YOGA component library',
      },
      caption: {
        pt: 'Componentes de UI incluindo botões, filtros, inputs e ações.',
        en: 'UI components including buttons, filters, inputs, and actions.',
      },
    },
    {
      src: '/images/projects/gympass/case2.png',
      alt: {
        pt: 'Diagrama do Design System',
        en: 'Design System diagram',
      },
      caption: {
        pt: 'Theory & Ideas + Artifacts = Culture. A base conceitual do YOGA.',
        en: 'Theory & Ideas + Artifacts = Culture. The conceptual foundation of YOGA.',
      },
    },
    {
      src: '/images/projects/gympass/case1.jpeg',
      alt: {
        pt: 'Definição de Design System',
        en: 'Design System definition',
      },
      caption: {
        pt: '"Um design system é uma coleção de componentes reutilizáveis, guiados por padrões claros." - Will Fanguy, InVision',
        en: '"A design system is a collection of reusable components, guided by clear standards." - Will Fanguy, InVision',
      },
    },
    {
      src: '/images/projects/gympass/gympass-1.png',
      alt: {
        pt: 'Interface do Gympass',
        en: 'Gympass interface',
      },
      caption: {
        pt: 'Aplicação dos componentes YOGA na interface do Gympass.',
        en: 'Application of YOGA components in the Gympass interface.',
      },
    },
    {
      src: '/images/projects/gympass/yoga.png',
      alt: {
        pt: 'Logo do YOGA Design System',
        en: 'YOGA Design System logo',
      },
      caption: {
        pt: 'A flor de lótus representa equilíbrio, flexibilidade e harmonia.',
        en: 'The lotus flower represents balance, flexibility, and harmony.',
      },
    },
  ] as CaseImage[],
  team: [
    { name: 'Thomás Camargo', role: { pt: 'Design Sr. Manager', en: 'Design Sr. Manager' } },
    { name: 'Guilherme Gonzalez', role: { pt: 'DesignOps', en: 'DesignOps' } },
    { name: 'Ricardo Nask', role: { pt: 'Illustration & Product Design', en: 'Illustration & Product Design' } },
    { name: 'Georgia Demas', role: { pt: 'Product Designer', en: 'Product Designer' } },
    { name: 'Léo Bertonceli', role: { pt: 'Product Design', en: 'Product Design' } },
    { name: 'Lucas Canto', role: { pt: 'Motion Designer', en: 'Motion Designer' } },
    { name: 'Alan Oliveira', role: { pt: 'Tech Lead', en: 'Tech Lead' } },
    { name: 'Gabriel Daltoso', role: { pt: 'Front End Developer', en: 'Front End Developer' } },
    { name: 'Allysson dos Santos', role: { pt: 'Front End Developer', en: 'Front End Developer' } },
    { name: 'Victor Caetano', role: { pt: 'Front End Developer', en: 'Front End Developer' } },
  ] as TeamMember[],
  quote: {
    text: {
      pt: '"O YOGA transformou a forma como trabalhamos. Antes gastávamos semanas recriando componentes que já existiam em outras squads. Agora temos uma fonte única de verdade."',
      en: '"YOGA transformed the way we work. Before, we spent weeks recreating components that already existed in other squads. Now we have a single source of truth."',
    },
    author: 'Thomás Camargo',
    role: {
      pt: 'Design Sr. Manager',
      en: 'Design Sr. Manager',
    },
  },
};
