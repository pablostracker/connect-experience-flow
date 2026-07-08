export const pt = {
  nav: {
    profile: "Perfil",
    work: "Experiência",
    connect: "Conexões",
    lab: "Stack",
    projects: "Projetos",
    education: "Formação",
    languages: "Idiomas",
    contact: "Contato",
  },

  hero: {
    eyebrow: "Customer Success · Operations · CX · AI & Automation",
    name: "Pablo Silva Dutra",
    headline:
      "Líder multidisciplinar que conecta experiência do cliente, operações, receita, dados e inteligência artificial para destravar times, carteiras e processos.",
    support:
      "Liderança, experiência do cliente, operações, dados e inteligência artificial trabalhando como um único sistema.",
    ctaPrimary: "Conheça meu trabalho",
    ctaSecondary: "Fale comigo",
    positioning:
      "Conectando pessoas, operações, dados e inteligência artificial para transformar complexidade em performance.",
  },
  profile: {
    label: "Perfil executivo",
    title: "Estratégia, receita, cliente, dados e tecnologia — em um único sistema.",
    p1:
      "Líder de Customer Success, Customer Experience e Operações com experiência em gestão de times, carteiras e jornadas de alta complexidade. Atua conectando estratégia, receita, experiência do cliente, dados e tecnologia para diagnosticar gargalos, estruturar processos e acelerar performance.",
    p2:
      "Trajetória construída em operações de tecnologia, e-commerce, consumo, mobilidade, franquias e economia digital, com experiência em liderança, onboarding e ongoing, Revenue Operations, projetos, dashboards executivos, automação e inteligência artificial aplicada ao negócio.",
    areasLabel: "Áreas de atuação",
    areas: [
      "Customer Success",
      "Customer Experience",
      "Operations",
      "Revenue Operations",
      "Projetos",
      "Dados & Performance",
      "AI & Automation",
    ],
  },
  connect: {
    label: "O que eu conecto",
    title: "Quatro territórios, um sistema.",
    intro:
      "Não trabalho dentro de uma categoria. Trabalho na interseção — onde pessoas, operação, dados e IA deixam de competir e começam a se potencializar.",
    territories: [
      {
        id: "people",
        code: "01",
        name: "Pessoas",
        items: ["Liderança", "Customer Success", "Desenvolvimento", "Comunicação"],
      },
      {
        id: "ops",
        code: "02",
        name: "Operação",
        items: ["Processos", "Receita", "Projetos", "Performance"],
      },
      {
        id: "data",
        code: "03",
        name: "Dados",
        items: ["Dashboards", "Insights", "Sentimento", "Decisão"],
      },
      {
        id: "ai",
        code: "04",
        name: "IA",
        items: ["LLMs", "Agentes", "Automação", "Inteligência Criativa"],
      },
    ],
  },
  impact: {
    label: "Impacto selecionado",
    title: "Resultados que existiram, contados sem enfeite.",
    roi: {
      company: "ROI Ventures",
      kicker: "Painel operacional · junho",
      metrics: [
        {
          value: "+10,04%",
          caption:
            "Crescimento do faturamento do time em 2 dias úteis, de R$ 469.417,98 para R$ 516.566,38.",
        },
        {
          value: "177,79%",
          caption:
            "Atingimento da meta de faturamento de importação, totalizando R$ 291.242,60.",
        },
        {
          value: "115,20%",
          caption: "Atingimento da meta de SKUs ativos por cliente.",
        },
        {
          value: "103,86%",
          caption: "Atingimento da meta de preenchimento de onboarding.",
        },
      ],
      totalValue: "R$ 663.239,16",
      totalCaption: "Faturamento da base ativa no painel operacional de junho.",
    },
    v4: {
      company: "V4 Company · Hicryo",
      kicker: "Case franquias · medicina regenerativa",
      body:
        "Participação na implantação da frente de franquias no segmento de medicina regenerativa — traduzindo relacionamento e diagnóstico em receita nova.",
      pulls: [
        { value: "5", caption: "Franquias comercializadas" },
        { value: "R$ 16 mil", caption: "Capital por unidade" },
        { value: "~R$ 80 mil", caption: "Capital gerado" },
      ],
    },
    ambev: {
      company: "Ambev · Zé Delivery",
      kicker: "Meta vs. realizado · indicadores de experiência",
      rows: [
        { target: 380000, achieved: 479000 },
        { target: 372000, achieved: 415000 },
        { target: 395600, achieved: 423000 },
      ],
      indicators: [
        { label: "CSAT", value: 90, suffix: "" },
        { label: "Resolutividade", value: 80, suffix: "" },
        { label: "Satisfação do Cliente", value: 87, suffix: "" },
        { label: "CES", value: 2, suffix: "/5" },
      ],
    },
    roiClub: {
      company: "ROI Ventures · Squad Low Touch",
      kicker: "Painel Mentoria Low Touch · Maio/2026",
      intro:
        "Dashboard tático que criei para ler a operação em tempo real: quatro analistas, 365 lojas na carteira, meta consolidada de R$ 820 mil em faturamento e 156 oportunidades de renovação abertas.",
      totals: [
        { label: "Faturamento realizado", value: "R$ 251.554", meta: "Meta R$ 820.349", pct: 0.307 },
        { label: "Importação realizada", value: "R$ 75.479", meta: "Meta R$ 164.070", pct: 0.46 },
        { label: "Lojas na carteira", value: "365", meta: "4 analistas", pct: 1 },
        { label: "Renovações", value: "0 / 62", meta: "156 oportunidades", pct: 0 },
      ],
      analysts: [
        { name: "Breno Guimarães", carteira: 109, real: 102895.61, meta: 345033.51, status: "CRITICO" as const, insight: "Maior potencial de receita da squad — priorizar ativação de contas dormentes." },
        { name: "Lauryen Honiele", carteira: 132, real: 86984.39, meta: 250863.66, status: "CRITICO" as const, insight: "% lojas faturando em 35,6% (meta 60%) — playbook de ativação da base." },
        { name: "Vivian Alvarenga", carteira: 110, real: 61674.05, meta: 224452.33, status: "CRITICO" as const, insight: "Renovação parada em 55 oportunidades — rotina de contato com carteira em risco." },
        { name: "Talles Hanrry", carteira: 14, real: 7610.64, meta: 0, status: "ATENCAO" as const, insight: "Carteira em rampagem — foco em primeira compra e onboarding." },
      ],
      closing:
        "O painel não é decoração. Cada indicador virou um insight e cada insight virou um próximo passo do time — do playbook de ativação à rotina de renovação.",
    },
  },

  journey: {
    label: "Experiência profissional",
    title: "Cada passagem foi um problema de negócio, não um cargo.",
    intro: "Clique para abrir o case por trás de cada experiência.",
    items: [
      {
        id: "roi",
        company: "ROI Ventures",
        role: "Supervisor de Customer Success Ongoing",
        period: "abr/2026 – atual",
        context:
          "Liderança direta de quatro profissionais de Customer Success em diferentes tiers de carteira, com responsabilidade sobre performance, desenvolvimento, segmentação estratégica, ativação, expansão de receita e evolução da jornada do cliente.",
        scopeLabel: "Escopo estratégico",
        scope: [
          "Desbloqueio e alavancagem de carteiras por estágio de maturidade, primeira compra e potencial de expansão.",
          "Gestão de performance, PDI quinzenal e desenvolvimento do time.",
          "Análise de sentimento, tickets, sellers, webinars, mentorias, lives e pontos de conflito da jornada.",
          "Construção de dashboards táticos e painéis consultivos para Mentoria, Consultoria e diretoria.",
          "Desenvolvimento da jornada em parceria com Produto.",
          "Atuação como guardião da comunicação estratégica.",
        ],
        result:
          "Resultados detalhados na seção de Impacto — crescimento, atingimento de meta de importação, SKUs ativos, onboarding e faturamento da base ativa.",
      },
      {
        id: "v4",
        company: "V4 Company",
        role: "Customer Success · Estratégia de Clientes, Franquias e Novos Negócios",
        period: "Passagem",
        context:
          "Gestão estratégica de clientes e oportunidades, conectando diagnóstico, ICP, relacionamento, reputação, satisfação e expansão de negócios.",
        scopeLabel: "Escopo",
        scope: [
          "Qualificação e segmentação de carteira por ICP e potencial.",
          "Gestão de relacionamento e satisfação.",
          "Análise de reputação e Reclame Aqui.",
          "Desenvolvimento da jornada de potenciais franqueados.",
          "Envio da Circular de Oferta de Franquia — COF.",
          "Acompanhamento das etapas de expansão.",
        ],
        result:
          "Case Hicryo: 5 franquias comercializadas, R$ 16 mil de capital por unidade, ~R$ 80 mil em negócios gerados.",
      },
      {
        id: "ambev",
        company: "Ambev · Zé Delivery",
        role: "Gestor de Canal → Analista Pleno de Experiência do Usuário",
        period: "Passagem",
        context:
          "Gestão de aproximadamente 20 unidades de negócio, conectando performance comercial, relacionamento, logística, portfólio, upselling, cross-selling e experiência. Posterior atuação no ecossistema Zé Delivery com foco em omnicanalidade, satisfação, criticidade, auditoria, tickets e experiência do usuário.",
        scopeLabel: "Frentes",
        scope: [
          "Performance comercial de ~20 unidades: portfólio, upselling e cross-selling.",
          "Relacionamento, logística e reposição integrados à rotina de vendas.",
          "Omnicanalidade e experiência do usuário no ecossistema Zé Delivery.",
          "Auditoria, tickets e tratativa de criticidade.",
        ],
        result:
          "Metas superadas em três ciclos (R$479K/380K · R$415K/372K · R$423K/395,6K). CSAT 90 · Resolutividade 80 · Satisfação 87 · CES 2/5.",
      },
      {
        id: "atento",
        company: "Atento · Grupo JCA",
        role: "Especialista em Relacionamento Digital Sênior",
        period: "dez/2019 – dez/2021",
        context:
          "Operação multicanal para o ecossistema do Grupo JCA, incluindo Viação Cometa, 1001, Expresso do Sul, Catarinense, BUSLOG e Wemobi.",
        scopeLabel: "Frentes",
        scope: [
          "Gestão de relacionamento e reputação.",
          "Atendimento multicanal.",
          "Análise de sentimento.",
          "Gestão de tickets e Reclame Aqui.",
          "Desenvolvimento de comunicação.",
          "Backoffice.",
          "Aproximadamente 700 tickets mensais.",
          "Participação na implantação da experiência e dos canais digitais da Wemobi.",
        ],
        result:
          "Base sólida para tudo que vem depois: escuta, processo, operação e liderança de pessoas.",
      },
    ],
  },
  lab: {
    label: "Stack tecnológico",
    title: "Ferramentas viram resultado quando alguém sabe conectá-las.",
    intro:
      "Um mapa de capacidades — o que uso, para que uso, e qual resultado de negócio isso gera.",
    clusters: [
      {
        id: "crm",
        name: "CRM & CX",
        tools: ["HubSpot", "Digisac", "Reclame Aqui", "Omnichannel", "Gestão de Tickets"],
        outcome: "Relacionamento",
      },
      {
        id: "ai",
        name: "AI & Automation",
        tools: [
          "ChatGPT",
          "Claude",
          "Perplexity",
          "Gemini",
          "DeepSeek",
          "Manus",
          "n8n",
          "MCP",
          "Workflows",
          "Multi-Agent Systems",
        ],
        outcome: "Automação e inteligência",
      },
      {
        id: "data",
        name: "Data & Performance",
        tools: [
          "Dashboards",
          "Customer Insights",
          "Sentiment Analysis",
          "KPIs",
          "Data Storytelling",
          "Performance Analysis",
        ],
        outcome: "Decisão",
      },
      {
        id: "creative",
        name: "Creative & Design",
        tools: ["Canva", "Gamma", "Freepik", "Magnific", "CapCut", "Lovable"],
        outcome: "Comunicação visual",
      },
    ],
  },
  quests: {
    label: "Projetos & atuação multidisciplinar",
    title: "Projetos que existem porque a curiosidade paga.",
    items: {
      falcoes: {
        name: "Gerando Falcões",
        role: "Professor Adjunto",
        theme: "Educação × Tecnologia × Impacto Social",
        body:
          "Atuação há aproximadamente três anos em educação e desenvolvimento, com mais de 180 crianças impactadas em educação corporativa e princípios de programação. Evolução da atuação para ensino de métricas, jornada e performance aplicada ao marketing.",
        pulls: ["~3 anos", "180+ crianças", "Educação → Métricas"],
      },
      loud: {
        name: "LOUD · iGame · Short Video",
        role: "Marketing de Conteúdo · Performance · Customer Insights",
        theme: "Gaming × Conteúdo × Performance × Customer Insights",
        body:
          "Atuação em marketing de conteúdo, performance e customer insights dentro do segmento iGame e do setor de Short Video, conectando análise de comportamento, conteúdo e inteligência de dados.",
        pulls: ["Cultura", "Performance", "Comportamento"],
      },
      naruto: {
        name: "Naruto Brasil",
        role: "Creator e Analista de IA",
        theme: "Fandom × Hiper-realismo × IA × Tecnologia Criativa",
        body:
          "Aplicação de inteligência artificial, criação visual, hiper-realismo e produção digital. Uso de ferramentas e técnicas de geração e aprimoramento visual para transformar conhecimento criativo em capacidade aplicada ao negócio.",
        value: [
          "Experimentação criativa",
          "Comunicação visual",
          "Fluência em IA",
          "Leitura de comunidade",
          "Produção de conteúdo",
        ],
      },
      sports: {
        name: "Customer Insights · Sports Tech",
        role: "Insights de Comunidade · Product Perception",
        theme: "Triathlon × Comunidade × Product Insight",
        body:
          "Atuação em insights de comunidade e comportamento para produtos esportivos e tecnologia, conectando experiência como triatleta à análise de necessidades, percepção de produto e oportunidades de evolução.",
        pulls: ["Comunidade", "Wearables", "Percepção de produto"],
      },
    },
  },
  edu: {
    label: "Formação acadêmica",
    title: "Uma constelação, não um cronograma.",
    intro: "Formações que se cruzam mais do que se enfileiram.",
    primary: [
      {
        title: "Mestrado em Project Management",
        inst: "Universidade Federal de Minas Gerais",
        period: "2025–2029 · Em andamento",
      },
      {
        title: "Engenharia de IA",
        inst: "Atlanta College of Liberal Arts and Sciences",
        period: "2026",
      },
      {
        title: "MBA em Gerenciamento de Projetos",
        inst: "CENES",
        period: "2025",
      },
      {
        title: "MBA em User Experience e UI Design",
        inst: "Faculdade de Minas",
        period: "2024–2025",
      },
      {
        title: "MBA em Varejo e Mercado de Consumo",
        inst: "Fundação Getulio Vargas",
        period: "2024–2025",
      },
      {
        title: "MBA em Marketing Digital",
        inst: "Faculdade de Minas",
        period: "2023–2024",
      },
      { title: "MBA em Ciência dos Dados", inst: "IGTI", period: "2018" },
      {
        title: "Marketing",
        inst: "Universidade Anhembi Morumbi",
        period: "2019–2024",
      },
      {
        title: "Engenharia de Telecomunicações",
        inst: "Universidade FUMEC",
        period: "2011–2016",
      },
    ],
  },
  contact: {
    label: "Contato",
    title: "Vamos construir algo?",
    body:
      "Se algo aqui ressoou, o próximo passo é uma conversa curta. Escolha o canal — respondo no mesmo dia útil.",
    email: "pablosilvautra@gmail.com",
    whatsappDisplay: "+55 31 98466-8908",
    whatsappHref: "https://wa.me/5531984668908",
    smsHref: "sms:+5531984668908",
    linkedin: "linkedin.com/in/pablo-dutra-38501875",
    linkedinHref: "https://linkedin.com/in/pablo-dutra-38501875",
    portfolioHref: "#projects",
    actions: {
      whatsapp: "WhatsApp",
      sms: "SMS",
      email: "E-mail",
      linkedin: "LinkedIn",
      portfolio: "Portfólio",
    },
  },
  footer: {
    tagline: "Pessoas · Operação · Dados · IA",
    rights: "Todos os direitos reservados.",
    built: "Feito à mão, com IA quando faz sentido.",
    cta: "Conheça meus projetos",
    ctaAction: "Explorar portfólio",
  },
} as const;

export type Dict = typeof pt;
