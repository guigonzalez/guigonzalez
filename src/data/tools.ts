export interface Tool {
  slug: string;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  url: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    slug: 'roi-de-ux',
    title: 'ROI de UX',
    description: {
      pt: 'Uma página educacional para designers aprenderem como calcular o retorno sobre investimento obtido com trabalho de UX',
      en: 'An educational page for designers to learn how to calculate the return on investment obtained from UX work',
    },
    url: 'https://roideux.com.br/',
    icon: 'roi',
  },
  {
    slug: 'design-principles-pyramid',
    title: 'Design Principles Pyramid',
    description: {
      pt: 'Um Canvas criado para ajudar designers a pensar o propósito e princípios de seus Design Systems',
      en: 'A Canvas created to help designers think the purpose and principles of their Design Systems',
    },
    url: 'https://guigonzalez.github.io/designprinciplespyramid/',
    icon: 'pyramid',
  },
  {
    slug: 'design-tokens-repo',
    title: 'Design Tokens Repô',
    description: {
      pt: 'Um repositório com documentação em Português Brasileiro simplificada do Theo, uma ferramenta da Salesforce para criar Design Tokens',
      en: 'A repository with a Brazilian Portuguese and simplified documentation of Theo, a tool by Salesforce to create Design Tokens',
    },
    url: 'https://github.com/guigonzalez/designtokensrepo',
    icon: 'tokens',
  },
  {
    slug: 'dare-framework',
    title: 'DARE Framework',
    description: {
      pt: 'Design AI Reliable Engagement - Framework para integração confiável de IA em processos de design',
      en: 'Design AI Reliable Engagement - Framework for reliable AI integration in design processes',
    },
    url: 'https://dareframework.com.br/',
    icon: 'dare',
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
