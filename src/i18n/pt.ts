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
    title: "Estratégia, receita, cliente, dados e tecnologia, em um único sistema.",
    p1:
      "Líder de Customer Success, Customer Experience e Operações com experiência em gestão de times, carteiras e jornadas de alta complexidade. Foco em excelência em resultado, atendimento ao cliente e alavancagem de indicadores de performance, conectando estratégia, receita, experiência do cliente, dados e tecnologia para diagnosticar gargalos, estruturar processos e acelerar performance.",
    p2:
      "Trajetória de mais de 15 anos construída em telecom, engenharia, SaaS, fintech, e-commerce, mobilidade, aviação, iGaming, franquias e economia digital, com passagens por Oracle, Ambev, Ze Delivery, EstrelaBet, V4 Company, PicPay, Azul, Claro, Vivo, TIM, Oi, Atento e AeC. Liderança, onboarding e ongoing, Revenue Operations, projetos, dashboards executivos, automação e inteligência artificial aplicada ao negócio.",
    areasLabel: "Áreas de atuação",
    areas: [
      "Customer Success",
      "Customer Experience",
      "Operations",
      "Revenue Operations",
      "Risk Management",
      "Projetos & PMO",
      "Dados & Performance",
      "AI & Automation",
    ],
  },

  connect: {
    label: "O que eu conecto",
    title: "Quatro territórios, um sistema.",
    intro:
      "Não trabalho dentro de uma categoria. Trabalho na interseção, onde pessoas, operação, dados e IA deixam de competir e começam a se potencializar.",
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
        "Participação na implantação da frente de franquias no segmento de medicina regenerativa, traduzindo relacionamento e diagnóstico em receita nova.",
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
        { name: "Breno Guimarães", carteira: 109, real: 102895.61, meta: 345033.51, status: "CRITICO" as const, insight: "Maior potencial de receita da squad, priorizar ativação de contas dormentes." },
        { name: "Lauryen Honiele", carteira: 132, real: 86984.39, meta: 250863.66, status: "CRITICO" as const, insight: "% lojas faturando em 35,6% (meta 60%), playbook de ativação da base." },
        { name: "Vivian Alvarenga", carteira: 110, real: 61674.05, meta: 224452.33, status: "CRITICO" as const, insight: "Renovação parada em 55 oportunidades, rotina de contato com carteira em risco." },
        { name: "Talles Hanrry", carteira: 14, real: 7610.64, meta: 0, status: "ATENCAO" as const, insight: "Carteira em rampagem, foco em primeira compra e onboarding." },
      ],
      closing:
        "O painel não é decoração. Cada indicador virou um insight e cada insight virou um próximo passo do time, do playbook de ativação à rotina de renovação.",
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
          "Resultados detalhados na seção de Impacto, crescimento, atingimento de meta de importação, SKUs ativos, onboarding e faturamento da base ativa.",
      },
      {
        id: "estrelabet",
        company: "EstrelaBet",
        role: "Consultor de Customer Experience Pleno · iGaming",
        period: "mar/2025 – fev/2026",
        context:
          "Atuação estratégica em uma das maiores operadoras de iGaming do país, responsável pela gestão técnica da jornada do jogador e por operações de suporte N2/N3, com foco em integridade de apostas, compliance, retenção e satisfação.",
        scopeLabel: "Frentes técnicas",
        scope: [
          "Gestão técnica de Sportsbook: validação de odds, liquidação de mercados complexos (Handicap Asiático/Europeu, Totals, Player Props) e regras de Cash Out em parceria com Trading e Risco.",
          "KYC, risco e compliance: verificação de identidade, prevenção à fraude, análise documental e liberação de fluxos financeiros.",
          "Jogo Responsável: monitoramento de comportamento, acolhimento de jogadores vulneráveis, autoexclusões e limites conforme regulação.",
          "Atendimento multicanal via Blip e Buzzmonitor; gestão de crise e reputação no Reclame Aqui via Hugme, com foco em reversão de nota e retenção de VIPs.",
          "Inteligência operacional: chamados técnicos via Jira/ServiceNow entre Pagamentos, Plataforma e Sportsbook.",
        ],
        result:
          "Régua de relacionamento com o jogador redesenhada com base em dados, integrando compliance, integridade de apostas e retenção em um só fluxo operacional.",
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
          "Envio da Circular de Oferta de Franquia, COF.",
          "Acompanhamento das etapas de expansão.",
        ],
        result:
          "Case Hicryo: 5 franquias comercializadas, R$ 160 mil de capital por unidade, ~R$ 800 mil em negócios gerados.",
      },
      {
        id: "ambev",
        company: "Ambev · Zé Delivery",
        role: "Branding & UX Pleno → Analista de Processos/UX Sr → Analista Sr de CX",
        period: "dez/2022 – set/2023",
        context:
          "Três passagens conectadas dentro do ecossistema Ambev/Zé Delivery: branding e UX no Zé Delivery, analista de processos com foco em UX sênior e, por fim, analista sênior de Customer Experience atuando em Reclame Aqui e NPS. Escopo integrando marca, jornada, processos, operação e voz do cliente.",
        scopeLabel: "Frentes",
        scope: [
          "Branding e UX no Zé Delivery: identidade, campanhas, co-branding e conexão emocional com o consumidor.",
          "Analista de Processos/UX Sr: desdobramento de metas até o nível individual, gestão analítica de testes e campanhas, dashboards para squads de negócio.",
          "Analista Sr de CX/Reclame Aqui: metodologia Customer Centric, NPS (coleta, análise e segmentação), follow-up de inner-loop e report à vice-presidência.",
          "Segmentação de clientes visando retenção e rentabilização da base.",
        ],
        result:
          "Metas superadas em três ciclos (R$479K/380K · R$415K/372K · R$423K/395,6K). CSAT 90 · Resolutividade 80 · Satisfação 87 · CES 2/5.",
      },
      {
        id: "oracle",
        company: "Oracle",
        role: "Analista Sr de CS & UX LATAM · Doctoralia",
        period: "fev/2022 – jan/2023 (1 ano)",
        context:
          "Passagem de um ano na Oracle (LATAM, base Argentina/São Paulo), evoluindo de Analista de CX Jr para Customer Success Pleno e chegando a Analista Sr de CS e UX na plataforma SaaS Doctoralia, liderando um time de 70 pessoas na jornada pós-venda.",
        scopeLabel: "Frentes",
        scope: [
          "Liderança do time de Customer Success B2C da plataforma SaaS (70 pessoas): onboarding, ongoing, upsell e renovação.",
          "Roadmap de adoção de produto para reduzir churn e aumentar expansion e cross-sell.",
          "Projetos estratégicos entre áreas, empoderando lideranças e criando ambiente de diversidade e accountability.",
          "Implantação de KPIs, jornada em Bizagi, squads sob SLA, Sensedata e Zendesk.",
          "CX Jr: políticas e procedimentos, gestão de risco, pipeline de dados e rituais com Produto/PMO/PM.",
        ],
        result:
          "Métricas de sucesso centradas em churn, engajamento de produto, expansion e cross-sell, com liderança de operação SaaS regional.",
      },
      {
        id: "atento",
        company: "Atento · Grupo JCA",
        role: "Especialista em Relacionamento Digital Sênior",
        period: "dez/2019 – dez/2021 (2 anos 1 mês)",
        context:
          "Operação multicanal para o ecossistema do Grupo JCA, incluindo Viação Cometa, 1001, Expresso do Sul, Catarinense, BUSLOG e Wemobi.",
        scopeLabel: "Frentes",
        scope: [
          "Gestão de relacionamento nas principais mídias sociais.",
          "Gestão de conflitos e reclamações via Reclame Aqui.",
          "Desenvolvimento de material educativo ao cliente final (B2C) e argumentário de atendimento.",
          "Abertura e acompanhamento de chamados via CRM Salesforce.",
          "Levantamento de novas campanhas promocionais.",
          "Treinamento e desenvolvimento de novos colaboradores.",
          "Aproximadamente 700 tickets mensais.",
          "Participação na implantação da experiência e dos canais digitais da Wemobi.",
        ],
        result:
          "Base sólida para tudo que vem depois: escuta, processo, operação e liderança de pessoas.",
      },
    ],
    trajectoryLabel: "Trajetória completa",
    trajectoryIntro:
      "Mais de 15 anos e 25+ passagens conectando telecom, engenharia, SaaS, fintech, e-commerce, mobilidade, aviação, iGaming, franquias e economia digital.",
    trajectory: [
      { period: "abr/2026 – atual", company: "Grupo ROI", role: "Supervisor de Sucesso do Cliente Ongoing", tag: "Liderança" },
      { period: "jun/2025 – dez/2025", company: "Onfly", role: "Operações", tag: "Travel Tech" },
      { period: "mar/2025 – fev/2026", company: "EstrelaBet", role: "Consultor de Customer Experience · iGaming", tag: "iGaming" },
      { period: "jun/2024 – abr/2025", company: "V4 Company", role: "Expert de Franquias & Customer Success Analyst", tag: "Franquias" },
      { period: "out/2023 – set/2024", company: "V4 Company", role: "Analista de Franquias & Reclame Aqui", tag: "Reputação" },
      { period: "jul/2023 – set/2024", company: "Epow Party", role: "Diretor de Marketing · Board Member", tag: "Board" },
      { period: "mai/2023 – jul/2023", company: "Epow Party", role: "Head de Marketing e D&I", tag: "D&I" },
      { period: "abr/2023 – jun/2023", company: "Epow Party", role: "Head de Marketing e Comunicação", tag: "Marketing" },
      { period: "jun/2023 – set/2023", company: "Ambev", role: "Analista Sr de CX · Reclame Aqui", tag: "CX" },
      { period: "jan/2023 – jun/2023", company: "Ambev", role: "Analista de Processos · UX Sr", tag: "Processos" },
      { period: "dez/2022 – jan/2023", company: "Ambev · Zé Delivery", role: "Analista de Branding · UX Pl", tag: "Branding" },
      { period: "ago/2022 – jan/2023", company: "Oracle", role: "Analista Sr C.S. & UX · LATAM (Doctoralia)", tag: "SaaS · LATAM" },
      { period: "jul/2022 – ago/2022", company: "Oracle", role: "Analista de Customer Success Pleno", tag: "SaaS" },
      { period: "fev/2022 – jul/2022", company: "Oracle", role: "Analista de Customer Experience Jr", tag: "CX" },
      { period: "dez/2019 – dez/2021", company: "Atento · Grupo JCA", role: "Especialista Relacionamento Sênior", tag: "Multicanal" },
      { period: "fev/2021 – nov/2021", company: "Azul Linhas Aéreas", role: "Analista de Sucesso do Cliente", tag: "Aviação" },
      { period: "abr/2020 – jan/2021", company: "4mti", role: "Customer Success · Implantação de time", tag: "SaaS" },
      { period: "abr/2019 – dez/2019", company: "PicPay", role: "Projetista · UX de produto digital", tag: "Fintech" },
      { period: "jan/2018 – fev/2019", company: "Gerencial Brasil", role: "Backoffice · Canal Vivo", tag: "Vendas" },
      { period: "out/2016 – nov/2017", company: "Vivo · Telefônica Brasil", role: "Analista de Operações · CX", tag: "Telecom" },
      { period: "ago/2014 – ago/2016", company: "Claro Brasil", role: "Engenheiro de Telecomunicações · QoE", tag: "Engenharia" },
      { period: "fev/2013 – jul/2014", company: "Oi", role: "Técnico de Telecomunicações", tag: "Rede" },
      { period: "set/2011 – jan/2013", company: "TIM Brasil", role: "Analista de Suporte de Negócios", tag: "Varejo" },
      { period: "fev/2010 – jul/2011", company: "AeC", role: "Analista de Backoffice", tag: "Início" },
    ],
  },

  languages: {
    label: "Idiomas",
    title: "Cinco idiomas, cinco portas.",
    intro:
      "Comunicação real com times, clientes e comunidades, do compliance regulatório em iGaming à sala de aula em Libras.",
    items: [
      { name: "Português", level: "Nativo", pct: 1.0, flag: "🇧🇷", code: "PT" },
      { name: "Italiano", level: "Nativo", pct: 1.0, flag: "🇮🇹", code: "IT" },
      { name: "Inglês", level: "Fluente profissional", pct: 0.92, flag: "🇬🇧", code: "EN" },
      { name: "Espanhol", level: "Profissional avançado", pct: 0.82, flag: "🇪🇸", code: "ES" },
      { name: "Libras", level: "Fluente profissional", pct: 0.9, flag: "🤟", code: "LIBRAS" },
    ],
  },

  lab: {
    label: "Stack tecnológico",
    title: "Ferramentas viram resultado quando alguém sabe conectá-las.",
    intro:
      "Um mapa de capacidades, o que uso, para que uso, e qual resultado de negócio isso gera.",
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
        focus:
          "Pesquisa aplicada em governança de projetos complexos, PMO orientado a dados, gestão de portfólio, métodos híbridos (PMBOK + ágil) e métricas de valor entregue. Base para decisões estratégicas com evidência.",
      },
      {
        title: "Engenharia de IA",
        inst: "Atlanta College of Liberal Arts and Sciences",
        period: "2026",
        focus:
          "Fundamentos de machine learning, LLMs, engenharia de prompts, RAG, avaliação de modelos e desenho de sistemas com IA em produção, do protótipo ao deploy responsável.",
      },
      {
        title: "MBA em Gerenciamento de Projetos",
        inst: "CENES",
        period: "2025",
        focus:
          "Planejamento, execução e controle de projetos com foco em escopo, cronograma, custos, riscos e stakeholders. Ferramentas práticas para liderar times multidisciplinares.",
      },
      {
        title: "MBA em User Experience e UI Design",
        inst: "Faculdade de Minas",
        period: "2024–2025",
        focus:
          "Pesquisa com usuário, arquitetura de informação, design system, prototipação e métricas de experiência. Ponte entre negócio, produto e interface.",
      },
      {
        title: "MBA em Varejo e Mercado de Consumo",
        inst: "Fundação Getulio Vargas",
        period: "2024–2025",
        focus:
          "Comportamento do consumidor, jornada omnichannel, trade marketing, precificação e operações de varejo. Visão de negócio aplicada ao ponto de venda físico e digital.",
      },
      {
        title: "MBA em Marketing Digital",
        inst: "Faculdade de Minas",
        period: "2023–2024",
        focus:
          "Growth, mídia paga, SEO, CRM, funil de aquisição e mensuração. Estratégias de canal com foco em ROI e ciclo de vida do cliente.",
      },
      {
        title: "MBA em Ciência dos Dados",
        inst: "IGTI",
        period: "2018",
        focus:
          "Estatística aplicada, modelagem preditiva, SQL, visualização e storytelling com dados. Base para operações orientadas a métricas e experimentação.",
      },
      {
        title: "Marketing",
        inst: "Universidade Anhembi Morumbi",
        period: "2019–2024",
        focus:
          "Fundamentos de marca, posicionamento, comunicação integrada, pesquisa de mercado e planejamento estratégico. Formação de base para atuação em produto e negócio.",
      },
      {
        title: "Engenharia de Telecomunicações",
        inst: "Universidade FUMEC",
        period: "2011–2016",
        focus:
          "Redes, sistemas de transmissão, protocolos, projeto e operação de infraestrutura crítica. Raiz técnica que sustenta a leitura sistêmica de operações e dados.",
      },
    ],
  },
  contact: {
    label: "Contato",
    title: "Vamos construir algo?",
    body:
      "Se algo aqui ressoou, o próximo passo é uma conversa curta. Escolha o canal, respondo no mesmo dia útil.",
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
      discord: "Discord",
      telegram: "Telegram",
      xbox: "Xbox Live",
    },
    discord: "pablodutra",
    telegram: "@pablodutra",
    telegramHref: "https://t.me/pablodutra",
    xbox: "PabloDutra",
    xboxHref: "https://account.xbox.com/profile?gamertag=PabloDutra",
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
