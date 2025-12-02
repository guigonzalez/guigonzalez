export interface Project {
  slug: string;
  title: {
    pt: string;
    en: string;
  };
  subtitle: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  color: string;
  textColor: string;
  logo?: string;
  status: 'complete' | 'placeholder';
  brands?: string[];
  metrics?: {
    value: string;
    label: {
      pt: string;
      en: string;
    };
  }[];
}

export const projects: Project[] = [
  {
    slug: 'whirlpool',
    title: {
      pt: 'Whirlpool',
      en: 'Whirlpool',
    },
    subtitle: {
      pt: 'Navegando os Desafios da Transformação',
      en: 'Navigating the Challenges of Transformation',
    },
    description: {
      pt: 'Liderança de design em uma multinacional durante período de transformação',
      en: 'Design leadership at a multinational during transformation period',
    },
    color: '#4a4a4a',
    textColor: '#ffffff',
    status: 'complete',
    brands: ['Brastemp', 'Consul', 'Compra Certa', 'KitchenAid'],
    metrics: [
      { value: '2,8', label: { pt: 'Anos de Trabalho', en: 'Years of Work' } },
      { value: '12%', label: { pt: 'Taxa de Perda Lamentada', en: 'Regretted Loss Rate' } },
      { value: '98%', label: { pt: 'Taxa de Conclusão PDI', en: 'Team PDI Completion Rate' } },
      { value: '78%', label: { pt: 'Satisfação do Time', en: 'Team Satisfaction' } },
    ],
  },
  {
    slug: 'gympass',
    title: {
      pt: 'Gympass',
      en: 'Gympass',
    },
    subtitle: {
      pt: 'YOGA Design System - Criando Harmonia no Caos do Design',
      en: 'YOGA Design System - Crafting Harmony in Design Chaos',
    },
    description: {
      pt: 'Liderança na criação do YOGA Design System para unificar a experiência do app Gympass',
      en: 'Leadership in creating the YOGA Design System to unify the Gympass app experience',
    },
    color: '#ff6b6b',
    textColor: '#ffffff',
    status: 'complete',
    metrics: [
      { value: '6', label: { pt: 'Meses de Trabalho', en: 'Months of Work' } },
      { value: '10', label: { pt: 'Componentes React Native', en: 'React Native Components' } },
      { value: '60%', label: { pt: 'Redução Time-to-Market', en: 'Time-to-Market Reduction' } },
    ],
  },
  {
    slug: 'sympla',
    title: {
      pt: 'Sympla',
      en: 'Sympla',
    },
    subtitle: {
      pt: 'Em breve',
      en: 'Coming soon',
    },
    description: {
      pt: 'Case em desenvolvimento',
      en: 'Case in development',
    },
    color: '#ffffff',
    textColor: '#1a1a1a',
    status: 'placeholder',
  },
  {
    slug: 'superlogica',
    title: {
      pt: 'Superlógica',
      en: 'Superlógica',
    },
    subtitle: {
      pt: 'Kanban CRM - Liderança de Design na Prática',
      en: 'Kanban CRM - Design Leadership in Practice',
    },
    description: {
      pt: 'Liderando esforços de design para melhoria crítica de CRM',
      en: 'Leading design efforts for critical CRM improvement',
    },
    color: '#2962ff',
    textColor: '#ffffff',
    status: 'complete',
    metrics: [
      { value: '1', label: { pt: 'Feature', en: 'Feature' } },
      { value: '34%', label: { pt: 'Aumento Satisfação Cliente', en: 'Increase Customer Satisfaction' } },
    ],
  },
  {
    slug: 'raiadrogasil',
    title: {
      pt: 'RaiaDrogasil',
      en: 'RaiaDrogasil',
    },
    subtitle: {
      pt: 'Em breve',
      en: 'Coming soon',
    },
    description: {
      pt: 'Case em desenvolvimento',
      en: 'Case in development',
    },
    color: '#b8f5c8',
    textColor: '#1a1a1a',
    status: 'placeholder',
  },
  {
    slug: 'mastercard',
    title: {
      pt: 'Mastercard',
      en: 'Mastercard',
    },
    subtitle: {
      pt: 'Em breve',
      en: 'Coming soon',
    },
    description: {
      pt: 'Case em desenvolvimento',
      en: 'Case in development',
    },
    color: '#f5a623',
    textColor: '#ffffff',
    status: 'placeholder',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
