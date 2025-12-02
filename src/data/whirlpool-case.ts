export interface Testimonial {
  name: string;
  role: {
    pt: string;
    en: string;
  };
  image: string;
  text: {
    pt: string;
    en: string;
  };
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

export interface YearSection {
  year: string;
  title: {
    pt: string;
    en: string;
  };
  content: {
    pt: string[];
    en: string[];
  };
  images?: CaseImage[];
  highlight?: {
    title: {
      pt: string;
      en: string;
    };
    content: {
      pt: string;
      en: string;
    };
  };
}

export const whirlpoolCase = {
  tldr: {
    pt: 'Em 2021, entrei na Whirlpool, melhorei a coesão do time e enfrentei desafios de UX. Em 2022, enfrentei mudanças de liderança, adaptei-me ao modelo híbrido e alcancei colaboração bem-sucedida. Em 2023, desafios econômicos, demissões e burnout pessoal. Apesar das adversidades, demonstrei resiliência, contribuí para gestão de orçamento e deixei a empresa, deixando um impacto duradouro na gestão de design.',
    en: 'In 2021, joined Whirlpool, improved team cohesion, and tackled UX challenges. In 2022, faced leadership changes, adapted to a hybrid work model, and achieved successful collaboration. In 2023, brought economic challenges, layoffs, and personal burnout. Despite adversity, showcased resilience, contributed to budget management, and departed the company, leaving a lasting impact on design management.',
  },
  brands: [
    { name: 'Brastemp', logo: '/images/projects/whirlpool/brastemp-logo.png' },
    { name: 'Consul', logo: '/images/projects/whirlpool/consul-logo.png' },
    { name: 'Compra Certa', logo: '/images/projects/whirlpool/compracerta-logo.png' },
    { name: 'KitchenAid', logo: '/images/projects/whirlpool/kitchenaid-logo.png' },
  ],
  years: [
    {
      year: '2021',
      title: {
        pt: '2021: Construindo Fundações Resilientes',
        en: '2021: Building Resilient Foundations',
      },
      content: {
        pt: [
          'Entrei na equipe de liderança digital da Whirlpool em 2021, encarregado de liderar a área de produtos digitais. Enfrentei um desafio inicial: uma equipe de design interna desconectada, uma equipe terceirizada sem direção, todos trabalhando remotamente. Rapidamente percebi a necessidade de fomentar um senso de pertencimento.',
          'Introduzi iniciativas como "Design com Café às Quartas" para promover integração e criar laços entre os membros da equipe. Implementei agendas de 1:1, grupos de comunicação eficazes e um comitê de design autônomo liderado por profissionais seniores. Trabalhei de perto com a equipe de UX Research, entendendo desafios e fundamentando nossas ações.',
          'A aproximação com os gerentes de produto revelou uma clara divisão entre as equipes Core e D2C, resultando em conflitos prejudiciais à experiência do usuário. No entanto, negociações habilidosas facilitaram o trabalho dos designers e promoveram a colaboração entre as equipes.',
          'Mentorar e apoiar os Coordenadores de Design foi crucial para o desenvolvimento de talentos. Terminei o ano com quase 40 designers, consolidando os resultados de um período intenso de aprendizado.',
        ],
        en: [
          "Joined Whirlpool's digital leadership team in 2021, tasked with leading the digital products area. Faced an initial challenge: a disjointed in-house design team, a directionless third-party team, all working remotely. Quickly realized the need to foster a sense of belonging.",
          'Introduced initiatives like "Design with Coffee on Wednesdays" to promote integration and create bonds among team members. Implemented 1:1 agendas, effective communication groups, and an autonomous design committee led by senior professionals. Worked closely with the UX Research team, understanding challenges and grounding our actions.',
          'Approaching product managers revealed a clear divide between the Core and D2C teams, resulting in detrimental conflicts to the user experience. However, skillful negotiations facilitated designers\' work and promoted collaboration between the teams.',
          'Mentoring and supporting Design Coordinators were crucial for talent development. Ended the year with nearly 40 designers, consolidating the results of an intense learning period.',
        ],
      },
      images: [
        {
          src: '/images/projects/whirlpool/remote-workstation.jpg',
          alt: {
            pt: 'Estação de trabalho remota durante a pandemia',
            en: 'Remote workstation during the pandemic',
          },
          caption: {
            pt: 'Estação de trabalho 100% remota durante a pandemia trouxe desafios significativos para estabelecer conexões genuínas, mas a programação regular de reuniões 1:1 e cerimônias de equipe gradualmente superou as dificuldades.',
            en: '100% remote workstation during the pandemic brought significant challenges in establishing genuine connections, but the regular schedule of 1:1 meetings and team ceremonies gradually overcame the difficulties.',
          },
        },
        {
          src: '/images/projects/whirlpool/mentoring-zone.jpg',
          alt: {
            pt: 'Apresentação do Mentoring Zone liderada pelo Design Chapter Committee',
            en: 'The Mentoring Zone presentation led by Design Chapter Committee',
          },
          caption: {
            pt: 'Apresentação do Mentoring Zone liderada pelo Design Chapter Committee.',
            en: 'The Mentoring Zone presentation led by Design Chapter Committee.',
          },
        },
      ],
      highlight: {
        title: {
          pt: 'Destaque 2021: Colaboração Global',
          en: '2021 Highlight: Global Collaboration',
        },
        content: {
          pt: 'No terceiro trimestre de 2021, destaco o envolvimento significativo com a equipe de recrutamento italiana. Como parte desse processo, conduzi entrevistas e testes com candidatos potenciais para a posição de Principal UX Researcher. Esta experiência não apenas contribuiu para o fortalecimento da equipe, mas também proporcionou um aprendizado global valioso, permitindo absorver insights diversos e estratégias inovadoras no campo de pesquisa de experiência do usuário.',
          en: 'In the third quarter of 2021, I highlight the significant involvement with the Italian recruitment team. As part of this process, I conducted interviews and tests with potential candidates for the Principal UX Researcher position. This experience not only contributed to team strengthening, but also provided valuable global learning, allowing me to absorb diverse insights and innovative strategies in the field of user experience research.',
        },
      },
    },
    {
      year: '2022',
      title: {
        pt: '2022: Desafios, Mudanças e Resiliência',
        en: '2022: Challenges, Changes, and Resilience',
      },
      content: {
        pt: [
          'O ano começou com uma reviravolta: mudanças na liderança levaram meu gerente sênior e a equipe de desenvolvimento para TI, realinhando o foco em aquisição e marketing digital. Assumi novos desafios em estratégia de conteúdo e apoiei a gestão sênior em Smart Spending.',
          'Em março, a nova gerente sênior anunciou sua licença médica, desencadeando uma crise. Perdemos membros-chave da equipe, incluindo o primeiro coordenador de design e a coordenadora de UX Research. Apesar das ofertas tentadoras do mercado, negociações intensas com o diretor e um compromisso conjunto permitiram a recuperação da confiança da equipe de design.',
          'A chegada da nova gerente sênior trouxe uma reorganização e, com ela, um retorno significativo ao trabalho presencial, necessitando nossa adaptação a um modelo de trabalho híbrido. A dinâmica de estar no escritório às vezes e trabalhar de casa se tornou uma realidade que impactou diretamente como colaborávamos.',
          'Em seguida, também assumi a equipe de agilidade, e por seis meses, nos engajamos em negociações intensas com a equipe de produto D2C. O resultado foi a colaboração na criação de um Design System, otimizando o desenvolvimento de páginas e impulsionando métricas de usabilidade.',
          'Fechamos o ano com mais de 50 designers e 16 agilistas, mostrando o sucesso da transição e da colaboração interdisciplinar.',
        ],
        en: [
          'The year kicked off with a twist: changes in leadership led my senior manager and the development team to IT, realigning the focus on acquisition and digital marketing. I took on new challenges in content strategy and supported senior management in Smart Spending.',
          'In March, the new senior manager announced her medical leave, triggering a crisis. We lost key team members, including the first design coordinator and the UX Research coordinator. Despite tempting market offers, intense negotiations with the director and a joint commitment allowed the recovery of the design team\'s trust.',
          'The arrival of the new senior manager brought a reorganization, and along with it, a significant return to in-person work, necessitating our adaptation to a hybrid work model. The dynamic of being in the office at times and working from home became a reality that directly impacted how we collaborated.',
          'Following that, I also took charge of the agility team, and for six months, we engaged in intense negotiations with the D2C product team. The result was collaboration in creating a Design System, optimizing page development, and boosting usability metrics.',
          'We closed the year with over 50 designers and 16 agilists, showcasing the success of the transition and interdisciplinary collaboration.',
        ],
      },
      images: [
        {
          src: '/images/projects/whirlpool/kitchenaid-design-system.jpg',
          alt: {
            pt: 'Apresentação do KitchenAid Design System',
            en: 'KitchenAid Design System presentation',
          },
          caption: {
            pt: 'Apresentação do KitchenAid Design System criado pela equipe de design KitchenAid.',
            en: 'Presentation of KitchenAid Design System created by KitchenAid Design Team.',
          },
        },
        {
          src: '/images/projects/whirlpool/efficiency-funnel.png',
          alt: {
            pt: 'Funil de Eficiência medido pela Equipe de Agilidade',
            en: 'Efficiency Funnel measured by Agility Team',
          },
          caption: {
            pt: 'Funil de Eficiência medido pela Equipe de Agilidade, provando que tínhamos 30% de Total Waste e apenas 12% das tarefas de validação de design, como testes de usabilidade e testes A/B, estavam sendo priorizadas pelos Product Owners.',
            en: 'Efficiency Funnel measured by Agility Team, proving that we had 30% of Total Waste and only 12% of design validation tasks, like usability tests and A/B Tests, were being prioritized by Product Owners.',
          },
        },
        {
          src: '/images/projects/whirlpool/agile-trends.jpg',
          alt: {
            pt: 'No palco do Agile Trends com Laís Palma',
            en: 'On the Agile Trends stage with Laís Palma',
          },
          caption: {
            pt: 'No palco do Agile Trends com Laís Palma.',
            en: 'On the Agile Trends stage with Laís Palma.',
          },
        },
      ],
      highlight: {
        title: {
          pt: 'Destaque 2022: Passando o Bastão',
          en: 'Highlight of 2022: Passing the Baton',
        },
        content: {
          pt: 'O ano de 2022 foi marcado por uma experiência única de passar o bastão com a DesignOps Lead, Laís Palma. Em um momento notável, trouxe esta líder para falar no palco do Agile Trends, o maior evento de agilidade da América Latina. O tópico abordado foi o inovador processo de Continuous Discovery desenvolvido por ela. Este evento não apenas reconheceu a excelência do trabalho da equipe, mas também proporcionou uma oportunidade única de compartilhar práticas inovadoras com uma audiência internacional.',
          en: 'The year 2022 was marked by a unique experience of passing the baton with DesignOps Lead, Laís Palma. In a noteworthy moment, I brought this leader to speak on the stage at Agile Trends, the largest agility event in Latin America. The topic addressed was the innovative Continuous Discovery process developed by her. This event not only recognized the excellence of the team\'s work but also provided a unique opportunity to share innovative practices with an international audience.',
        },
      },
    },
    {
      year: '2023',
      title: {
        pt: '2023: Desafios Econômicos e Resiliência Pessoal',
        en: '2023: Economic Challenges and Personal Resilience',
      },
      content: {
        pt: [
          'O início de 2023 trouxe desafios econômicos imprevistos. Apesar do sucesso parcial da campanha da Copa, a Guerra da Ucrânia e a escassez de materiais impactaram significativamente as vendas. A empresa foi forçada a passar por uma séria revisão de orçamento, levando à demissão de mais de 50% da equipe de design terceirizada no primeiro trimestre.',
          'O segundo trimestre foi marcado por uma atmosfera de apreensão. A equipe, observando tendências do mercado, antecipava a possibilidade de demissões. A expectativa pairava, e o dia fatídico chegou em maio, quando 40% da equipe interna foi demitida. Simultaneamente, uma mudança organizacional significativa foi anunciada, unindo as equipes D2C e Core de produtos digitais.',
          'A instabilidade econômica e as mudanças organizacionais tiveram um impacto palpável no moral da equipe. Os desafios pareciam insuperáveis, e uma sensação de incerteza pairava sobre todos. No entanto, mesmo diante das adversidades, a equipe manteve resiliência e determinação.',
          'No meio do ano, minha jornada pessoal também atingiu um ponto crítico. O burnout, resultado de pressão contínua, demissões em massa e sobrecarga com uma equipe severamente reduzida, tornou-se uma realidade. Optei por me afastar da equipe de agilidade, reconhecendo a necessidade de priorizar minha saúde mental em meio a desafios incessantes.',
          'O final do terceiro trimestre marcou minha saída da empresa, fechando um capítulo na minha jornada com um senso de dever cumprido. Apesar das adversidades, o legado da gestão de design perdurou. As equipes de design de produto, UX Research e Service Design foram forjadas em meio à tempestade, demonstrando não apenas a resiliência da equipe, mas também a capacidade de adaptação em um ambiente volátil e desafiador.',
        ],
        en: [
          'The beginning of 2023 brought unforeseen economic challenges. Despite the partial success of the Copa campaign, the Ukraine War and material shortages significantly impacted sales. The company was forced to undergo a serious budget review, leading to the layoff of over 50% of the outsourced design team in the first quarter.',
          'The second quarter was marked by an atmosphere of apprehension. The team, observing market trends, anticipated the possibility of layoffs. The expectation lingered, and the fateful day arrived in May when 40% of the internal team was let go. Simultaneously, a significant organizational change was announced, uniting the D2C and Core teams of digital products.',
          'Economic instability and organizational changes had a palpable impact on team morale. The challenges seemed insurmountable, and a sense of uncertainty hung over everyone. However, even in the face of adversity, the team maintained resilience and determination.',
          'Mid-year, my personal journey also reached a critical point. Burnout, a result of continuous pressure, mass layoffs, and overload with a severely reduced team, became a reality. I chose to step down from the agility team, recognizing the need to prioritize my mental health amid incessant challenges.',
          'The end of the third quarter marked my departure from the company, closing a chapter in my journey with a sense of duty fulfilled. Despite the adversities, the legacy of design management endured. The product design, UX Research, and Service Design teams had been forged in the midst of the storm, demonstrating not only the team\'s resilience but also the ability to adapt in a volatile and challenging environment.',
        ],
      },
      images: [
        {
          src: '/images/projects/whirlpool/office-return.jpg',
          alt: {
            pt: 'Retorno ao escritório após burnout pessoal',
            en: 'Returning to office after personal burnout',
          },
          caption: {
            pt: 'Retorno ao escritório após burnout pessoal.',
            en: 'Returning to office after personal burnout.',
          },
        },
      ],
      highlight: {
        title: {
          pt: 'Destaque 2023: Envolvimento na Gestão de Orçamento',
          en: '2023 Highlight: Involvement in Budget Management',
        },
        content: {
          pt: 'O ano de 2023 trouxe desafios e incertezas, mas também oportunidades significativas de crescimento. Destaco o papel fundamental na mesa de gestão de orçamento, uma posição proeminente que envolvia comunicação direta com o Chief Financial Officer (CFO) da Whirlpool. Participar ativamente desse processo estratégico não apenas demonstrou a confiança depositada em mim, mas também proporcionou uma compreensão profunda das dinâmicas financeiras e estratégicas da organização. Este marco não apenas mostrou resiliência em tempos incertos, mas também solidificou meu papel como líder estratégico na jornada de transformação da Whirlpool.',
          en: "The year 2023 brought challenges and uncertainties but also significant opportunities for growth. I highlight the pivotal role at the budget management table, a prominent position involving direct communication with Whirlpool's Chief Financial Officer (CFO). Actively participating in this strategic process not only demonstrated the trust placed in me but also provided a profound understanding of the financial and strategic dynamics of the organization. This milestone not only showcased resilience in uncertain times but also solidified my role as a strategic leader in Whirlpool's transformation journey.",
        },
      },
    },
  ] as YearSection[],
  testimonials: [
    {
      name: 'Rafael Henrique',
      role: {
        pt: 'Product Designer Senior',
        en: 'Senior Product Designer',
      },
      image: '/images/testimonials/rafael-henrique.jpg',
      text: {
        pt: 'Guilherme é um ótimo líder. Sempre conduzindo relacionamentos de forma muito humana, ajudando a equipe a extrair seu potencial máximo. Ele tem um olhar apurado para organizar estruturas de design em diversas situações, auxiliando e orientando sempre que necessário, criando uma relação de confiança com seus subordinados. E o plus é que ele sabe muito sobre Design System e sabe muito bem como entregar valor através dele.',
        en: 'Guilherme is a great leader. Always handling relationships in a very humane way, helping the team extract its full potential. He has a keen eye for organizing design structures in various situations, assisting and guiding whenever necessary, creating a relationship of trust with his subordinates. And the plus is that he knows a lot about Design System and knows very well how to deliver value through it.',
      },
    },
    {
      name: 'André Sevante',
      role: {
        pt: 'UX Writer Senior',
        en: 'Senior UX Writer',
      },
      image: '/images/testimonials/andre-sevante.jpg',
      text: {
        pt: 'Trabalhar na equipe de design gerenciada pelo Guilherme foi, para mim, uma oportunidade cheia de experiências de aprendizado. Para cada validação que eu podia fazer com o Gui, ele trazia uma perspectiva estratégica com inputs enriquecedores que faziam uma diferença significativa na entrega final. Além disso, ele sempre fomentou a ideia dentro da equipe de que design é parte integrante do negócio geral, equilibrando as necessidades da empresa com decisões técnicas focadas na experiência do cliente. Tendo essa visão 360 graus, o Gui nos trouxe, sua equipe, a importância de ver entregas e design como um meio, não um fim.',
        en: "Working on the design team managed by Guilherme was, for me, an opportunity full of learning experiences. For every validation I could do with Gui, he brought a strategic perspective with enriching inputs that made a significant difference in the final delivery. Beyond that, he always fostered the idea within the team that design is an integral part of the overall business, balancing the company's needs with technical decisions focused on customer experience. Having this 360-degree view, Gui brought to us, his team, the importance of seeing deliveries and design as a means, not an end.",
      },
    },
    {
      name: 'Yago Ono',
      role: {
        pt: 'UX Researcher Senior',
        en: 'Senior UX Researcher',
      },
      image: '/images/testimonials/yago-ono.jpg',
      text: {
        pt: 'Quando se trata de gestão em Design em geral, Guilherme possui dois conjuntos de habilidades que raramente são encontrados em uma pessoa, abrangendo tanto soft quanto hard skills que o tornam um gestor único e de alta qualidade. A mais evidente dessas características é uma vasta experiência e conhecimento que beira o enciclopédico sobre várias facetas gerais - e até algumas obscuras - que englobam o que entendemos como Design. Uma segunda habilidade que pode ser destacada nas atividades do dia a dia e nas inúmeras reuniões que tivemos é a capacidade de lidar com pessoas, entendendo o que pode ser dito e feito para que possam entregar seu melhor.',
        en: 'When it comes to management in Design overall, Guilherme possesses two sets of skills that are rarely found in one person, encompassing both soft and hard skills that make him a unique and high-quality manager. The most evident of these characteristics is a vast experience and knowledge that borders on encyclopedic about various general facets - and even some obscure ones - that encompass what we understand as Design. A second skill that can be highlighted in day-to-day activities and the numerous meetings we have had is the ability to deal with people, understanding what can be said and done so that they can deliver their best.',
      },
    },
    {
      name: 'Karine Barbosa',
      role: {
        pt: 'Product Designer Senior',
        en: 'Senior Product Designer',
      },
      image: '/images/testimonials/karine-barbosa.jpg',
      text: {
        pt: 'Guilherme é definitivamente uma das referências de design que todos deveriam ter! Inteligente e talentoso, ele foi sem dúvida um dos melhores gerentes de design que já tive. Ele tem ampla experiência e uma visão madura de construção e trabalho com uma equipe de UX. Como líder, ele ouve os membros da sua equipe e sempre os encoraja a trazer ideias que contribuam para a construção e evolução da equipe. Durante o tempo em que trabalhamos juntos, o Gui soube me dar responsabilidades, desafios e autonomia nos projetos do dia a dia.',
        en: "Guilherme is definitely one of the design references that everyone should have! Intelligent and talented, he was undoubtedly one of the best design managers I've ever had. He has extensive experience and a mature vision of building and working with a UX team. As a leader, he listens to his team members and always encourages them to bring ideas that contribute to the construction and evolution of the team. During the time we worked together, Gui knew how to give me responsibilities, challenges, and autonomy in the day-to-day projects.",
      },
    },
    {
      name: 'Leonardo Moura',
      role: {
        pt: 'Service Designer Pleno',
        en: 'Service Designer',
      },
      image: '/images/testimonials/leonardo-moura.jpg',
      text: {
        pt: 'Entre muitas características, algumas que mais se destacam em sua liderança são: paciência em entender e orientar profissionais que precisam de ajuda, ensinando e mostrando o caminho para um crescimento realista, absorvendo rapidamente estratégias e traçando caminhos que ajudam toda a equipe a alcançar uma meta. Ele entende perfeitamente as soft e hard skills dos profissionais ao seu redor e age de maneira humana e aberta com todos, assumindo riscos e sendo ousado! Trabalhar com ele foi extremamente enriquecedor.',
        en: "Among many characteristics, some that stand out most in his leadership are: patience in understanding and guiding professionals who need help, teaching and showing the way for realistic growth, quickly absorbing strategies, and charting paths that help the entire team reach a goal. He perfectly understands the soft and hard skills of the professionals around him and acts in a humane and open manner with everyone, taking risks and being bold! Working with him was extremely enriching.",
      },
    },
  ] as Testimonial[],
};
