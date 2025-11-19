'use client';

export const locales = ['en', 'ru', 'kz'];

const serviceCards = [
  {
    id: 'automation',
    icon: 'Zap',
    title: 'Automation & AI Ops',
    badge: 'AUTOMATION',
    description: 'n8n workflows, AI agents, and bespoke integrations that erase repetitive work.',
    examples: ['Support ticket routing', 'Finance + CRM sync', 'AI-powered escalation'],
    features: [
      'n8n workflow orchestration',
      'Autonomous AI agents',
      'Process mining + mapping',
      'Custom API bridges',
      'Observability + guardrails',
      'Ops playbook design',
    ],
    color: 'from-yellow-400 via-amber-400 to-orange-500',
    accent: 'rgba(251, 191, 36, 0.25)',
    pricing: {
      starter: { price: 'Custom', period: 'per playbook' },
      pro: { price: 'Custom', period: 'per department' },
      enterprise: { price: 'Custom', period: 'autonomy program' },
    },
  },
  {
    id: 'web',
    icon: 'Code',
    title: 'Web Development',
    badge: 'DEVELOPMENT',
    description: 'Next.js and React products engineered for speed, scale, and polish.',
    examples: ['SaaS dashboards', 'Marketing sites', 'Internal tools'],
    features: [
      'Next.js + React stacks',
      'Design system integration',
      'API + data layers',
      'SEO + performance tuning',
      'Accessibility reviews',
      'Launch + observability',
    ],
    color: 'from-cyan-400 via-sky-400 to-blue-500',
    accent: 'rgba(56, 189, 248, 0.25)',
    pricing: {
      starter: { price: '$2.5K', period: 'per build' },
      pro: { price: '$5K', period: 'per release' },
      enterprise: { price: 'Custom', period: 'platform scope' },
    },
  },
  {
    id: 'backend',
    icon: 'Database',
    title: 'Backend & APIs',
    badge: 'INFRASTRUCTURE',
    description: 'Secure APIs, databases, and microservices with proper observability.',
    examples: ['REST/GraphQL platforms', 'Data modeling', 'Infrastructure as code'],
    features: [
      'Service architecture',
      'Database design + tuning',
      'Authentication + RBAC',
      'Monitoring + alerts',
      'CI/CD automation',
      'DevOps handoff',
    ],
    color: 'from-purple-400 via-fuchsia-400 to-pink-500',
    accent: 'rgba(192, 132, 252, 0.25)',
    pricing: {
      starter: { price: '$3K', period: 'per API' },
      pro: { price: '$6K', period: 'per system' },
      enterprise: { price: 'Custom', period: 'hybrid estate' },
    },
  },
  {
    id: 'web3',
    icon: 'Globe',
    title: 'Web3 & Blockchain',
    badge: 'WEB3',
    description: 'Smart contracts, DeFi strategies, NFT platforms, and on-chain dashboards.',
    examples: ['Airdrop farming', 'Token utilities', 'Wallet integrations'],
    features: [
      'Solidity / Rust contracts',
      'DeFi + staking flows',
      'Tokenomics modelling',
      'Web3 frontend bridges',
      'Multi-chain automation',
      'Security reviews',
    ],
    color: 'from-emerald-400 via-teal-400 to-green-500',
    accent: 'rgba(52, 211, 153, 0.25)',
    pricing: {
      starter: { price: '$5K', period: 'per contract' },
      pro: { price: '$10K', period: 'per protocol' },
      enterprise: { price: 'Custom', period: 'ecosystem scope' },
    },
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: 'Mobile Apps',
    badge: 'MOBILE',
    description: 'iOS, Android, and cross-platform experiences tuned for retention.',
    examples: ['React Native apps', 'Mobile-first web', 'Companion dashboards'],
    features: [
      'Native + React Native builds',
      'Offline-first architecture',
      'Push + auth flows',
      'App Store / Play deploys',
      'Analytics instrumentation',
      'Release + crash monitoring',
    ],
    color: 'from-indigo-400 via-blue-500 to-slate-500',
    accent: 'rgba(99, 102, 241, 0.25)',
    pricing: {
      starter: { price: '$4K', period: 'per app' },
      pro: { price: '$8K', period: 'per launch' },
      enterprise: { price: 'Custom', period: 'multi-experience' },
    },
  },
  {
    id: 'design',
    icon: 'Palette',
    title: 'Design & UX',
    badge: 'DESIGN',
    description: 'Research, brand systems, product UX, and motion crafted to convert.',
    examples: ['Design systems', 'Product UX', 'Marketing campaigns'],
    features: [
      'Brand + identity refresh',
      'Figma design systems',
      'Interactive prototypes',
      'User research sprints',
      'Design QA + audits',
      'Marketing assets',
    ],
    color: 'from-rose-400 via-pink-500 to-fuchsia-500',
    accent: 'rgba(251, 113, 133, 0.25)',
    pricing: {
      starter: { price: '$1.5K', period: 'per sprint' },
      pro: { price: '$3.5K', period: 'per product' },
      enterprise: { price: 'Custom', period: 'embedded team' },
    },
  },
  {
    id: 'marketing',
    icon: 'Megaphone',
    title: 'Marketing & GTM',
    badge: 'GTM',
    description: 'Growth automation, campaign tooling, and analytics that prove impact.',
    examples: ['Lifecycle automation', 'Attribution dashboards', 'Acquisition experiments'],
    features: [
      'CRM + marketing ops',
      'Attribution + BI bridges',
      'Content + social automations',
      'Analytics instrumentation',
      'Campaign intelligence',
      'Reporting + alerts',
    ],
    color: 'from-teal-400 via-cyan-400 to-sky-400',
    accent: 'rgba(45, 212, 191, 0.25)',
    pricing: {
      starter: { price: '$2K', period: 'per playbook' },
      pro: { price: '$4.5K', period: 'per quarter' },
      enterprise: { price: 'Custom', period: 'growth ops' },
    },
  },
  {
    id: 'custom',
    icon: 'Sparkles',
    title: 'Custom Solutions',
    badge: 'ENTERPRISE',
    description: 'Command centers, control planes, legacy modernization—whatever is hardest.',
    examples: ['Enterprise orchestration', 'Legacy rewrites', 'Data command centers'],
    features: [
      'Enterprise architecture',
      'Legacy modernization',
      'Security + compliance hardening',
      'Hybrid cloud topologies',
      'Dedicated squads',
      '24/7 reliability support',
    ],
    color: 'from-violet-400 via-purple-500 to-indigo-500',
    accent: 'rgba(139, 92, 246, 0.25)',
    pricing: {
      starter: { price: 'Custom', period: 'co-create scope' },
      pro: { price: 'Custom', period: 'retained build' },
      enterprise: { price: 'Custom', period: 'long-term partner' },
    },
  },
];

const serviceOverrides = {
  ru: {
    automation: {
      title: 'Автоматизация и AI Ops',
      description: 'n8n-пайплайны, AI-агенты и интеграции, которые убирают ручной труд.',
      examples: ['Маршрутизация тикетов поддержки', 'Синхронизация CRM и финансов', 'AI-эскалации инцидентов'],
      features: [
        'Оркестрация n8n-воркфлоу',
        'Автономные AI-агенты',
        'Картирование и оптимизация процессов',
        'Кастомные API-мосты',
        'Мониторинг и защитные механизмы',
        'Проектирование плейбуков',
      ],
      pricing: {
        starter: { period: 'за плейбук' },
        pro: { period: 'за команду' },
        enterprise: { period: 'под ключ' },
      },
    },
    web: {
      title: 'Веб-разработка',
      description: 'Next.js и React-продукты для роста, скорости и эстетики.',
      examples: ['SaaS-дашборды', 'Маркетинговые сайты', 'Внутренние инструменты'],
      features: [
        'Стеки Next.js + React',
        'Интеграция дизайн-систем',
        'API и слои данных',
        'SEO и оптимизация производительности',
        'Проверка доступности',
        'Запуск и наблюдаемость',
      ],
      pricing: {
        starter: { price: 'от $2.5K', period: 'за запуск' },
        pro: { price: 'от $5K', period: 'за релиз' },
        enterprise: { period: 'под платформу' },
      },
    },
    backend: {
      title: 'Backend и API',
      description: 'Надёжные API, базы данных и микросервисы с полным мониторингом.',
      examples: ['REST/GraphQL платформы', 'Моделирование данных', 'Инфраструктура как код'],
      features: [
        'Сервисная архитектура',
        'Проектирование и оптимизация БД',
        'Аутентификация и RBAC',
        'Мониторинг и алерты',
        'CI/CD автоматизация',
        'Передача в DevOps',
      ],
      pricing: {
        starter: { price: 'от $3K', period: 'за API' },
        pro: { price: 'от $6K', period: 'за систему' },
        enterprise: { period: 'сложный контур' },
      },
    },
    web3: {
      title: 'Web3 и блокчейн',
      description: 'Смарт-контракты, DeFi стратегии, NFT платформы и ончейн аналитика.',
      examples: ['Airdrop farming', 'Утилиты токенов', 'Интеграции кошельков'],
      features: [
        'Контракты на Solidity / Rust',
        'DeFi и стейкинг-потоки',
        'Моделирование токеномики',
        'Web3 фронтенд-мосты',
        'Мультичейн автоматизация',
        'Аудит безопасности',
      ],
      pricing: {
        starter: { price: 'от $5K', period: 'за контракт' },
        pro: { price: 'от $10K', period: 'за протокол' },
        enterprise: { period: 'экосистема' },
      },
    },
    mobile: {
      title: 'Мобильные приложения',
      description: 'iOS, Android и кроссплатформенные решения, настроенные на удержание.',
      examples: ['React Native приложения', 'Mobile-first веб', 'Компаньон-дашборды'],
      features: [
        'Native и React Native сборки',
        'Offline-first архитектура',
        'Push-уведомления и auth-потоки',
        'Деплой в App Store / Play',
        'Инструментация аналитики',
        'Мониторинг релизов и крашей',
      ],
      pricing: {
        starter: { price: 'от $4K', period: 'за приложение' },
        pro: { price: 'от $8K', period: 'за релиз' },
        enterprise: { period: 'multi-experience' },
      },
    },
    design: {
      title: 'Дизайн и UX',
      description: 'Исследования, бренд-системы, продуктовый UX и motion, которые конвертируют.',
      examples: ['Дизайн-системы', 'Продуктовый UX', 'Маркетинговые кампании'],
      features: [
        'Обновление бренда и айдентики',
        'Figma дизайн-системы',
        'Интерактивные прототипы',
        'Спринты пользовательских исследований',
        'Design QA и аудиты',
        'Маркетинговые активы',
      ],
      pricing: {
        starter: { price: 'от $1.5K', period: 'за спринт' },
        pro: { price: 'от $3.5K', period: 'за продукт' },
        enterprise: { period: 'встроенная команда' },
      },
    },
    marketing: {
      title: 'Маркетинг и GTM',
      description: 'Автоматизация роста, инструменты кампаний и аналитика, доказывающая результат.',
      examples: ['Автоматизация жизненного цикла', 'Дашборды атрибуции', 'Эксперименты по привлечению'],
      features: [
        'CRM и маркетинг-операции',
        'Мосты атрибуции и BI',
        'Автоматизация контента и соцсетей',
        'Инструментация аналитики',
        'Интеллект кампаний',
        'Отчёты и алерты',
      ],
      pricing: {
        starter: { price: 'от $2K', period: 'за плейбук' },
        pro: { price: 'от $4.5K', period: 'за квартал' },
        enterprise: { period: 'growth ops' },
      },
    },
    custom: {
      title: 'Индивидуальные решения',
      description: 'Командные центры, control plane, модернизация legacy — решаем самые сложные задачи.',
      examples: ['Enterprise оркестрация', 'Рефакторинг legacy', 'Центры управления данными'],
      features: [
        'Enterprise-архитектура',
        'Модернизация legacy-систем',
        'Усиление безопасности и комплаенса',
        'Гибридные облачные топологии',
        'Выделенные команды',
        '24/7 поддержка надёжности',
      ],
      pricing: {
        starter: { period: 'совместное планирование' },
        pro: { period: 'ретейнер' },
        enterprise: { period: 'стратегический партнёр' },
      },
    },
  },
  kz: {
    automation: {
      title: 'Автоматтандыру және AI Ops',
      description: 'n8n процестері, AI агенттері және кастом интеграциялар қол еңбегін жояды.',
      examples: ['Қолдау тикеттерін бағыттау', 'CRM мен қаржы синхронизациясы', 'AI инцидент эскалациясы'],
      features: [
        'n8n воркфлоу оркестрациясы',
        'Автономды AI агенттері',
        'Үдерістерді картаға түсіру және оптимизациялау',
        'Кастом API көпірлері',
        'Мониторинг және қорғаныш механизмдері',
        'Плейбук жобалау',
      ],
      pricing: {
        starter: { period: 'плейбук бойынша' },
        pro: { period: 'команда бойынша' },
        enterprise: { period: 'толық автономия' },
      },
    },
    web: {
      title: 'Веб-даму',
      description: 'Next.js және React өнімдері — жылдам, масштабталатын, стильді.',
      examples: ['SaaS дэшбордтары', 'Маркетинг сайттары', 'Ішкі құралдар'],
      features: [
        'Next.js + React стектері',
        'Дизайн жүйелерін интеграциялау',
        'API және деректер қабаты',
        'SEO және өнімділікті оңтайландыру',
        'Қолжетімділікті тексеру',
        'Жариялау және бақылау',
      ],
      pricing: {
        starter: { price: 'от $2.5K', period: 'жоба бойынша' },
        pro: { price: 'от $5K', period: 'релиз бойынша' },
        enterprise: { period: 'платформа бойынша' },
      },
    },
    backend: {
      title: 'Backend және API',
      description: 'Қауіпсіз API, деректер базасы және микросервис архитектурасы толық мониторингпен.',
      examples: ['REST/GraphQL платформалары', 'Деректер модельдеу', 'Инфрақұрылым код ретінде'],
      features: [
        'Қызмет архитектурасы',
        'Деректер базасын жобалау және оңтайландыру',
        'Аутентификация және RBAC',
        'Мониторинг және алерттер',
        'CI/CD автоматтандыру',
        'DevOps-қа тапсыру',
      ],
      pricing: {
        starter: { price: 'от $3K', period: 'API бойынша' },
        pro: { price: 'от $6K', period: 'жүйе бойынша' },
        enterprise: { period: 'күрделі контур' },
      },
    },
    web3: {
      title: 'Web3 және блокчейн',
      description: 'Смарт-келісімдер, DeFi стратегиялары, NFT платформалары және on-chain аналитика.',
      examples: ['Airdrop farming', 'Токен утилиталары', 'Әмиян интеграциялары'],
      features: [
        'Solidity / Rust келісімдері',
        'DeFi және стейкинг ағындары',
        'Токеномика модельдеу',
        'Web3 фронтенд көпірлері',
        'Мультичейн автоматтандыру',
        'Қауіпсіздік аудиті',
      ],
      pricing: {
        starter: { price: 'от $5K', period: 'контракт бойынша' },
        pro: { price: 'от $10K', period: 'протокол бойынша' },
        enterprise: { period: 'экожүйе' },
      },
    },
    mobile: {
      title: 'Мобильді қолданбалар',
      description: 'iOS, Android және кросс-платформалық шешімдер, сақтауға бағытталған.',
      examples: ['React Native қолданбалары', 'Mobile-first веб', 'Қосымша дэшбордтар'],
      features: [
        'Native және React Native жинақтары',
        'Offline-first архитектура',
        'Push-хабарландырулар және auth ағындары',
        'App Store / Play-ға деплой',
        'Аналитика инструментациясы',
        'Релиздер мен қателерді бақылау',
      ],
      pricing: {
        starter: { price: 'от $4K', period: 'қосымша бойынша' },
        pro: { price: 'от $8K', period: 'релиз бойынша' },
        enterprise: { period: 'multi-experience' },
      },
    },
    design: {
      title: 'Дизайн және UX',
      description: 'Зерттеу, бренд жүйелері, өнім UX және motion, конверсияға бағытталған.',
      examples: ['Дизайн жүйелері', 'Өнім UX', 'Маркетинг кампаниялары'],
      features: [
        'Бренд және айдентика жаңарту',
        'Figma дизайн жүйелері',
        'Интерактивті прототиптер',
        'Пайдаланушы зерттеу спринттері',
        'Design QA және аудиттер',
        'Маркетинг активтері',
      ],
      pricing: {
        starter: { price: 'от $1.5K', period: 'спринт бойынша' },
        pro: { price: 'от $3.5K', period: 'өнім бойынша' },
        enterprise: { period: 'команда құрамында' },
      },
    },
    marketing: {
      title: 'Маркетинг және GTM',
      description: 'Өсу автоматтандыруы, кампания құралдары және нәтижені дәлелдейтін аналитика.',
      examples: ['Өмірлік цикл автоматтандыруы', 'Атрибуция дэшбордтары', 'Тарту эксперименттері'],
      features: [
        'CRM және маркетинг операциялары',
        'Атрибуция және BI көпірлері',
        'Контент және әлеуметтік автоматтандыру',
        'Аналитика инструментациясы',
        'Кампания интеллекті',
        'Есептер және алерттер',
      ],
      pricing: {
        starter: { price: 'от $2K', period: 'плейбук бойынша' },
        pro: { price: 'от $4.5K', period: 'тоқсан бойынша' },
        enterprise: { period: 'growth ops' },
      },
    },
    custom: {
      title: 'Кастом шешімдер',
      description: 'Командалық орталықтар, control plane, legacy жаңарту — ең күрделі тапсырмалар.',
      examples: ['Enterprise оркестрация', 'Legacy рефакторинг', 'Деректер басқару орталықтары'],
      features: [
        'Enterprise архитектурасы',
        'Legacy жүйелерді модернизациялау',
        'Қауіпсіздік және комплаенс күшейту',
        'Гибридті бұлт топологиялары',
        'Арнайы командалар',
        '24/7 сенімділік қолдауы',
      ],
      pricing: {
        starter: { period: 'бірге жоспарлау' },
        pro: { period: 'retainer' },
        enterprise: { period: 'стратегиялық әріптестік' },
      },
    },
  },
};

const capabilityCategories = [
  {
    id: 'dev',
    title: 'Development',
    badge: 'DEV',
    items: ['Frontend (React, Next.js, Vue)', 'Backend (Node.js, Python, Go)', 'Full-stack delivery', 'CI/CD & DevOps'],
  },
  {
    id: 'automation',
    title: 'Automation',
    badge: 'AUTO',
    items: ['n8n workflows', 'Custom scripts', 'API integrations', 'AI copilots'],
  },
  {
    id: 'specialized',
    title: 'Specialized',
    badge: 'SPEC',
    items: ['Web3 & Blockchain', 'Mobile (iOS, Android)', 'Cloud infrastructure', 'Security & compliance'],
  },
  {
    id: 'business',
    title: 'Business',
    badge: 'BIZ',
    items: ['Product & UX design', 'Marketing systems', 'Analytics & BI', 'Legacy modernization'],
  },
];

const capabilityOverrides = {
  ru: {
    dev: {
      title: 'Разработка',
      items: ['Frontend (React, Next.js, Vue)', 'Backend (Node.js, Python, Go)', 'Full-stack поставка', 'CI/CD и DevOps'],
    },
    automation: {
      title: 'Автоматизация',
      items: ['n8n воркфлоу', 'Кастомные скрипты', 'API-интеграции', 'AI-копилоты'],
    },
    specialized: {
      title: 'Специализация',
      items: ['Web3 и блокчейн', 'Мобильные приложения (iOS, Android)', 'Облачная инфраструктура', 'Безопасность и соответствие'],
    },
    business: {
      title: 'Бизнес-стек',
      items: ['Продуктовый и UX дизайн', 'Маркетинговые системы', 'Аналитика и BI', 'Модернизация legacy'],
    },
  },
  kz: {
    dev: {
      title: 'Даму',
      items: ['Frontend (React, Next.js, Vue)', 'Backend (Node.js, Python, Go)', 'Full-stack жеткізу', 'CI/CD және DevOps'],
    },
    automation: {
      title: 'Автоматтандыру',
      items: ['n8n процестері', 'Кастом скрипттер', 'API интеграциялары', 'AI көмекшілері'],
    },
    specialized: {
      title: 'Арнайы',
      items: ['Web3 және блокчейн', 'Мобильді қолданбалар (iOS, Android)', 'Бұлт инфрақұрылымы', 'Қауіпсіздік және сәйкестік'],
    },
    business: {
      title: 'Бизнес',
      items: ['Өнім және UX дизайн', 'Маркетинг жүйелері', 'Аналитика және BI', 'Legacy модернизациясы'],
    },
  },
};

const portfolioProjects = [
  {
    id: 'airdrop',
    title: 'Web3 Airdrop Farming System',
    type: 'Web3 + Automation',
    badge: 'WEB3',
    description: 'Automated airdrop farming playbooks with smart contracts, bots, and reporting.',
    tech: ['Solidity', 'Rust', 'Automation'],
    accent: 'rgba(139, 92, 246, 0.25)',
    icon: 'Globe',
  },
  {
    id: 'education',
    title: 'Education Platform Suite',
    type: 'Full-Stack Development',
    badge: 'DEVELOPMENT',
    description: 'ageu.edu.kz, q-university.edu.kz, and qgroup.asia built with modern UX and CMS tooling.',
    tech: ['Next.js', 'React', 'Full-stack'],
    accent: 'rgba(56, 189, 248, 0.25)',
    icon: 'Code',
    urls: ['https://ageu.edu.kz', 'https://q-university.edu.kz', 'https://qgroup.asia'],
  },
  {
    id: 'bots',
    title: 'Multi-Platform Bot Suite',
    type: 'Automation',
    badge: 'AUTOMATION',
    description: 'Bots for WhatsApp, Telegram, Twitter, and Threads cutting response time to seconds.',
    tech: ['Bots', 'Automation', 'AI routing'],
    accent: 'rgba(251, 191, 36, 0.25)',
    icon: 'Zap',
  },
  {
    id: 'beyond',
    title: 'Beyond Lines',
    type: 'Full-Stack Development',
    badge: 'DEVELOPMENT',
    description: 'Autonomous intelligence pipeline that discovers, analyzes, and curates high-value content from 60+ sources across crypto, hacking, AI, and alternative news. Features AI-powered curation, Telegram bot, and web dashboard.',
    tech: ['Next.js', 'AI', 'Automation'],
    accent: 'rgba(52, 211, 153, 0.25)',
    icon: 'Code',
    url: 'https://beyondlines-web.vercel.app',
  },
  {
    id: 'unhireable',
    title: 'Unhireable',
    type: 'Full-Stack Development',
    badge: 'DEVELOPMENT',
    description: 'Neural Career System — desktop app for automating job search, application tracking, and document generation. AI-powered job matching, resume generation, and multi-platform scraping (hh.kz, Wellfound, LinkedIn).',
    tech: ['Desktop App', 'AI', 'Automation'],
    accent: 'rgba(192, 132, 252, 0.25)',
    icon: 'Smartphone',
    url: 'https://unhireable-website.vercel.app',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Applications',
    type: 'Product Delivery',
    badge: 'DEVELOPMENT',
    description: 'From single-scroll landings to complex SaaS dashboards shipped with velocity.',
    tech: ['Full-stack', 'Scalable', 'Modern'],
    accent: 'rgba(56, 189, 248, 0.25)',
    icon: 'Code',
  },
];

const portfolioOverrides = {
  ru: {
    airdrop: {
      type: 'Web3 + Автоматизация',
      description: 'Автоматизированные плейбуки для airdrop-фарминга: смарт-контракты, боты и отчётность.',
    },
    education: {
      type: 'Full-Stack разработка',
      description: 'Три образовательные платформы: ageu.edu.kz, q-university.edu.kz и qgroup.asia. Современный UX и CMS.',
    },
    bots: {
      type: 'Автоматизация',
      description: 'Боты для WhatsApp, Telegram, Twitter и Threads. Время ответа сокращено до секунд.',
    },
    beyond: {
      type: 'Full-Stack разработка',
      description: 'Автономный интеллектуальный пайплайн для поиска, анализа и курации контента из 60+ источников: крипто, хакерство, AI, альтернативные новости. AI-курация, Telegram-бот и веб-дашборд.',
    },
    unhireable: {
      type: 'Full-Stack разработка',
      description: 'Neural Career System — десктоп-приложение для автоматизации поиска работы, отслеживания заявок и генерации документов. AI-подбор вакансий, генерация резюме, скрапинг с hh.kz, Wellfound, LinkedIn.',
    },
    fullstack: {
      type: 'Продуктовая поставка',
      description: 'От одностраничных лендингов до сложных SaaS-панелей. Быстрая поставка и масштабируемость.',
    },
  },
  kz: {
    airdrop: {
      type: 'Web3 + Автоматтандыру',
      description: 'Airdrop-фарминг плейбуктері: смарт-келісімдер, боттар және есептер.',
    },
    education: {
      type: 'Full-Stack даму',
      description: 'Үш білім беру платформасы: ageu.edu.kz, q-university.edu.kz және qgroup.asia. Заманауи UX және CMS.',
    },
    bots: {
      type: 'Автоматтандыру',
      description: 'WhatsApp, Telegram, Twitter және Threads боттары. Жауап уақыты секундқа дейін қысқарды.',
    },
    beyond: {
      type: 'Full-Stack даму',
      description: 'Автономды интеллектуалды пайплайн: 60+ көзден крипто, хакерлік, AI және баламалық жаңалықтарды тауып, талдап, курациялайды. AI-курация, Telegram-бот және веб-дашборд.',
    },
    unhireable: {
      type: 'Full-Stack даму',
      description: 'Neural Career System — жұмыс іздеуді, өтініштерді бақылауды және құжаттарды генерациялауды автоматтандыратын десктоп қолданбасы. AI-жұмыс таңдау, резюме генерациясы, hh.kz, Wellfound, LinkedIn скрапингі.',
    },
    fullstack: {
      type: 'Өнімді жеткізу',
      description: 'Бір парақтық лендингтерден күрделі SaaS дэшбордтарға дейін. Жылдам жеткізу және масштабтау.',
    },
  },
};

const processSteps = [
  {
    id: 'scan',
    icon: 'Search',
    title: 'Decode the chaos',
    subtitle: 'Discovery / 3-5 days',
    command: 'rahmet scan --scope=ops',
    output: 'We collect all signals from your systems, identify bottlenecks, and prioritize tasks for automation.',
    accent: 'rgba(56, 189, 248, 0.25)',
  },
  {
    id: 'design',
    icon: 'Palette',
    title: 'Design the autopilot',
    subtitle: 'Architecture / 1-2 weeks',
    command: 'rahmet architect --stack=custom',
    output: 'We create the solution blueprint, document runbooks, and align the automation plan with your team.',
    accent: 'rgba(192, 132, 252, 0.25)',
  },
  {
    id: 'ship',
    icon: 'Code2',
    title: 'Ship the control plane',
    subtitle: 'Build / 4-8 weeks',
    command: 'rahmet deploy --env=prod',
    output: 'We deploy automation to production, launch monitoring dashboards, and hand over control to your team.',
    accent: 'rgba(52, 211, 153, 0.25)',
  },
  {
    id: 'operate',
    icon: 'Headphones',
    title: 'Operate + evolve',
    subtitle: 'Support / ongoing',
    command: 'rahmet monitor --mode=24/7',
    output: 'We monitor system performance, optimize processes, and add new automations as you scale.',
    accent: 'rgba(251, 191, 36, 0.25)',
  },
];

const processOverrides = {
  ru: {
    scan: {
      title: 'Снимаем хаос',
      subtitle: 'Диагностика / 3-5 дней',
      command: 'rahmet scan --scope=ops',
      output: 'Собираем все сигналы из ваших систем, находим узкие места и приоритизируем задачи для автоматизации.',
    },
    design: {
      title: 'Проектируем автопилот',
      subtitle: 'Архитектура / 1-2 недели',
      command: 'rahmet architect --stack=custom',
      output: 'Создаём blueprint решения, описываем runbook-и и согласовываем план автоматизации с командой.',
    },
    ship: {
      title: 'Собираем control plane',
      subtitle: 'Разработка / 4-8 недель',
      command: 'rahmet deploy --env=prod',
      output: 'Внедряем автоматизацию в прод, запускаем дашборды для мониторинга и передаём управление команде.',
    },
    operate: {
      title: 'Сопровождаем и улучшаем',
      subtitle: 'Поддержка / постоянно',
      command: 'rahmet monitor --mode=24/7',
      output: 'Мониторим работу системы, оптимизируем процессы и добавляем новые автоматизации по мере роста.',
    },
  },
  kz: {
    scan: {
      title: 'Хаосты талдаймыз',
      subtitle: 'Диагностика / 3-5 күн',
      command: 'rahmet scan --scope=ops',
      output: 'Жүйелеріңізден барлық сигналдарды жинаймыз, тар жерлерді табамыз және автоматтандыру үшін тапсырмаларды басымдықтаймыз.',
    },
    design: {
      title: 'Автопилот жобалаймыз',
      subtitle: 'Архитектура / 1-2 апта',
      command: 'rahmet architect --stack=custom',
      output: 'Шешім blueprint-ін құрамыз, runbook-тарды сипаттаймыз және командамен автоматтандыру жоспарын келісеміз.',
    },
    ship: {
      title: 'Control plane құрамыз',
      subtitle: 'Даму / 4-8 апта',
      command: 'rahmet deploy --env=prod',
      output: 'Автоматтандыруды продқа енгіземіз, мониторинг үшін дэшбордтарды іске қосамыз және басқаруды командаға тапсырамыз.',
    },
    operate: {
      title: 'Басқарамыз және дамытамыз',
      subtitle: 'Қолдау / тұрақты',
      command: 'rahmet monitor --mode=24/7',
      output: 'Жүйенің жұмысын бақылаймыз, үдерістерді оңтайландырамыз және өсу барысында жаңа автоматтандырулар қосамыз.',
    },
  },
};

const statsCards = [
  { id: 'systems', value: 50, suffix: '+', label: 'Systems shipped', detail: 'Web, web3, automation, design' },
  { id: 'clients', value: 95, suffix: '%', label: 'Clients retained', detail: 'Long-term partnerships' },
  { id: 'efficiency', value: 2, suffix: 'x', label: 'Efficiency lift', detail: 'Manual hours removed' },
  { id: 'hours', value: 48, suffix: 'hrs', label: 'Weekly hours saved', detail: 'Per org on average' },
];

const statsOverrides = {
  ru: {
    systems: { label: 'Систем сдано', detail: 'Web, Web3, автоматизация, дизайн' },
    clients: { label: 'Клиенты остаются', detail: 'Долгосрочные партнёрства' },
    efficiency: { label: 'Рост эффективности', detail: 'Часы ручного труда исчезают' },
    hours: { label: 'Часов экономии в неделю', detail: 'В среднем на команду' },
  },
  kz: {
    systems: { label: 'Жобалар', detail: 'Web, Web3, автоматтандыру, дизайн' },
    clients: { label: 'Клиенттер сақталады', detail: 'Ұзақ серіктестік' },
    efficiency: { label: 'Тиімділік өсімі', detail: 'Қол еңбегі алынып тасталды' },
    hours: { label: 'Апталық үнем', detail: 'Орташа ұйымға' },
  },
};

const contactMethods = [
  {
    id: 'whatsapp',
    icon: 'MessageCircle',
    title: 'WhatsApp',
    label: 'Start a conversation',
    description: 'Quick response, direct messaging',
    link: 'https://wa.me/77088413062',
    badge: 'FASTEST',
    accent: 'rgba(16, 185, 129, 0.2)',
    gradient: 'from-emerald-400/30 via-emerald-500/20 to-transparent',
  },
  {
    id: 'telegram',
    icon: 'Send',
    title: 'Telegram',
    label: 'Send a message',
    description: 'Fast coordination, files, threads',
    link: 'https://t.me/RahmetLabs',
    badge: 'GLOBAL',
    accent: 'rgba(59, 130, 246, 0.2)',
    gradient: 'from-sky-400/30 via-blue-500/20 to-transparent',
  },
  {
    id: 'email',
    icon: 'Mail',
    title: 'Email',
    label: 'Get in touch',
    description: 'Detailed briefs, proposals, paperwork',
    link: 'mailto:rahmetlabs@gmail.com',
    badge: 'FORMAL',
    accent: 'rgba(248, 113, 113, 0.2)',
    gradient: 'from-rose-400/30 via-pink-500/20 to-transparent',
  },
];

const contactOverrides = {
  ru: {
    whatsapp: { label: 'Написать', description: 'Быстрый ответ и прямой контакт' },
    telegram: { label: 'Отправить сообщение', description: 'Мгновенная связь и файлы' },
    email: { label: 'Связаться', description: 'Подробные запросы и предложения' },
  },
  kz: {
    whatsapp: { label: 'Жазу', description: 'Жылдам жауап және тікелей чат' },
    telegram: { label: 'Хабарлама жіберу', description: 'Жылдам байланыс және файлдар' },
    email: { label: 'Хат жіберу', description: 'Толық бриф пен ұсыныстар' },
  },
};

const navCopy = {
  en: {
    services: 'Services',
    capabilities: 'Capabilities',
    work: 'Work',
    contact: 'Contact',
    cta: 'Talk to us',
  },
  ru: {
    services: 'Услуги',
    capabilities: 'Технологии',
    work: 'Проекты',
    contact: 'Связаться',
    cta: 'Связаться',
  },
  kz: {
    services: 'Қызметтер',
    capabilities: 'Мүмкіндіктер',
    work: 'Жобалар',
    contact: 'Байланыс',
    cta: 'Хабарласу',
  },
};

const heroCopy = {
  en: {
    highlightTag: 'Highlight reel',
    highlightHeading: 'We build everything from stealth Web3 ops to enterprise platforms.',
    highlightSubheading: 'Switch between manual chaos and the autonomous control planes we deploy.',
    highlightCta: 'Start automation',
    highlightSecondary: 'View proof',
    chips: ['Automation', 'AI Ops', 'Web3', 'Product', 'GTM'],
    brandTagline: 'We build what you need, automate what you hate. Full-stack development + intelligent automation.',
    modeLabels: { manual: 'Manual Ops', autonomous: 'Autonomous Mode' },
    sceneStatus: { manual: 'Chaos detected', autonomous: 'Autonomy engaged' },
    panels: {
      snapshotLabel: 'Ops snapshot',
      feedLabel: 'Ops feed',
      feedStatus: { manual: 'Escalations', autonomous: 'Autonomous stream' },
      playbookLabel: 'Rahmet playbook',
      switchLabels: { manual: 'Manual', autonomous: 'Auto' },
    },
    scenes: {
      manual: {
        badge: 'MANUAL OPS — CRITICAL LOAD',
        label: 'What burning teams feel',
        headline: 'Manual heroics hide the cracks, nothing is synced, nothing is observable.',
        description:
          'Teams power through outages with copy/paste and pagers. Finance waits for consensus spreadsheets while customers churn on stalled support queues.',
        pains: [
          { title: 'CRM → ERP sync', detail: 'CSV export stuck at 73% for 4h' },
          { title: 'Finance roll-up', detail: '8 spreadsheets in approval limbo' },
          { title: 'Support queue', detail: '120 tickets waiting on humans' },
          { title: 'Compliance audit', detail: 'Zero breadcrumb trail, high risk' },
        ],
        playbook: [
          { title: 'Bottleneck', detail: 'Ops leaders chase signals across CRM, ERP, support, and spreadsheets.' },
          { title: 'Rahmet entrypoint', detail: 'Instrument telemetry, map every manual loop, surface priority breakpoints.' },
          { title: 'First win', detail: 'Automate the ugliest workflows so teams reclaim 40+ hours per week.' },
        ],
        metrics: [
          { label: 'Tickets waiting', value: '187', hint: 'Support backlog', tone: 'bad' },
          { label: 'Ops burn / month', value: '$12K', hint: 'Contractor overtime', tone: 'bad' },
          { label: 'Response time', value: '24h', hint: 'Escalations answered', tone: 'bad' },
        ],
        log: [
          { time: '02:07', message: 'Finance ping: “Need weekly roll-up.”', tone: 'bad' },
          { time: '02:09', message: 'Support escalated 45 stuck tickets.', tone: 'bad' },
          { time: '02:15', message: 'Ops lead paging engineers on Slack.', tone: 'bad' },
        ],
      },
      autonomous: {
        badge: 'AUTONOMOUS OPS — STABLE SIGNAL',
        label: 'What transformed ops feel',
        headline: 'Every system streams truth in real time. People just steer outcomes.',
        description:
          'Playbooks trigger on their own, finance closes in hours, and every alert routes to an autonomous responder before anyone has to ask.',
        pains: [
          { title: 'Signals fused', detail: 'CRM ↔ ERP ↔ billing streaming live' },
          { title: 'Finance ops', detail: 'Close in 4 hours, not 4 days' },
          { title: 'Support intelligence', detail: 'AI resolves 92% of tickets' },
          { title: 'Compliance trail', detail: 'Every action auto-logged' },
        ],
        playbook: [
          { title: 'Orchestration', detail: 'Every signal flows into one control plane with embedded guardrails.' },
          { title: 'Rahmet pattern', detail: 'AI agents route, sync, and brief every team in real time.' },
          { title: 'Momentum', detail: 'Leaders steer outcomes because ops run on autopilot.' },
        ],
        metrics: [
          { label: 'Tickets waiting', value: '0', hint: 'Auto-triaged', tone: 'good' },
          { label: 'Ops burn / month', value: '-$8K', hint: 'No overtime spend', tone: 'good' },
          { label: 'Response time', value: '45s', hint: 'Signals resolved', tone: 'good' },
        ],
        log: [
          { time: '09:15', message: 'AI resolved subscription churn playbook.', tone: 'good' },
          { time: '09:26', message: 'Ledger sync verified in 42 seconds.', tone: 'good' },
          { time: '09:39', message: 'Executive dashboard auto-updated.', tone: 'good' },
        ],
      },
    },
  },
  ru: {
    highlightTag: 'Кейсы',
    highlightHeading: 'Строим всё — от stealth Web3-операций до корпоративных платформ.',
    highlightSubheading: 'Сравните ручной хаос и автономный command center, который мы разворачиваем.',
    highlightCta: 'Запустить автоматизацию',
    highlightSecondary: 'Смотреть кейсы',
    chips: ['Автоматизация', 'AI Ops', 'Web3', 'Продукт', 'GTM'],
    brandTagline: 'Создаём нужное, автоматизируем рутину. Full-stack + интеллектуальная автоматизация.',
    modeLabels: { manual: 'Ручной режим', autonomous: 'Автономия' },
    sceneStatus: { manual: 'Хаос обнаружен', autonomous: 'Стабильный сигнал' },
    panels: {
      snapshotLabel: 'Срез операций',
      feedLabel: 'Лента событий',
      feedStatus: { manual: 'Эскалации', autonomous: 'Автопилот' },
      playbookLabel: 'Плейбук Rahmet',
      switchLabels: { manual: 'Ручной', autonomous: 'Авто' },
    },
    scenes: {
      manual: {
        badge: 'РУЧНЫЕ ОПЕРАЦИИ — КРАСНАЯ ЗОНА',
        label: 'Как ощущается перегрев',
        headline: 'Люди тушат пожары вручную. Системы молчат, решения запаздывают.',
        description:
          'Команды мечутся между CRM, ERP, почтой и чатами. Финансы ждут согласований неделями, клиенты висят в очередях поддержки.',
        pains: [
          { title: 'CRM ↔ ERP', detail: 'CSV застрял на 73% уже 4 часа' },
          { title: 'Финансовый свод', detail: '8 таблиц ждут согласования' },
          { title: 'Очередь поддержки', detail: '120 тикетов ждут людей' },
          { title: 'Аудит', detail: 'Нет следов действий — высокий риск' },
        ],
        playbook: [
          { title: 'Узкое место', detail: 'Операционные лиды бегают между CRM, ERP, поддержкой и Excel.' },
          { title: 'Вход Rahmet', detail: 'Ставим телеметрию, описываем ручные циклы, расставляем приоритеты.' },
          { title: 'Первый выигрыш', detail: 'Автоматизируем самые токсичные процессы — +40 часов в неделю.' },
        ],
        metrics: [
          { label: 'Тикетов в очереди', value: '187', hint: 'Бэклог поддержки', tone: 'bad' },
          { label: 'Ops burn / мес', value: '$12K', hint: 'Сверхурочные и подрядчики', tone: 'bad' },
          { label: 'Ответ на эскалацию', value: '24ч', hint: 'Реакция на инциденты', tone: 'bad' },
        ],
        log: [
          { time: '02:07', message: 'Финансы: «Нужен недельный отчёт»', tone: 'bad' },
          { time: '02:09', message: 'Поддержка эскалировала ещё 45 тикетов', tone: 'bad' },
          { time: '02:15', message: 'Ops-лид поднимает инженеров в Slack', tone: 'bad' },
        ],
      },
      autonomous: {
        badge: 'АВТОНОМНЫЕ ОПЕРАЦИИ — СТАБИЛЬНЫЙ СИГНАЛ',
        label: 'Как выглядит трансформация',
        headline: 'Все системы в унисон. Люди управляют результатом, а не копипастой.',
        description:
          'Плейбуки срабатывают сами, финансы закрывают отчёт за часы, тревоги сначала решает автономный агент, потом люди.',
        pains: [
          { title: 'Сигналы объединены', detail: 'CRM ↔ ERP ↔ биллинг стримят live' },
          { title: 'Финансы', detail: 'Клоузинг за 4 часа, не за 4 дня' },
          { title: 'Поддержка', detail: 'AI закрывает 92% тикетов' },
          { title: 'Audit trail', detail: 'Каждое действие логируется автоматически' },
        ],
        playbook: [
          { title: 'Оркестрация', detail: 'Сигналы стекаются в один control plane с guardrails.' },
          { title: 'Паттерн Rahmet', detail: 'AI-агенты маршрутизируют, синхронизируют и брифуют команды.' },
          { title: 'Импульс', detail: 'Лидеры управляют исходом, потому что ops на автопилоте.' },
        ],
        metrics: [
          { label: 'Тикетов в очереди', value: '0', hint: 'Авто-триаж', tone: 'good' },
          { label: 'Ops burn / мес', value: '-$8K', hint: 'Нет овертаймов', tone: 'good' },
          { label: 'Ответ', value: '45с', hint: 'Сигнал закрыт', tone: 'good' },
        ],
        log: [
          { time: '09:15', message: 'AI закрыл churn-плейбук', tone: 'good' },
          { time: '09:26', message: 'Ledger сверился за 42 сек', tone: 'good' },
          { time: '09:39', message: 'Executive-дашборд обновлён автоматически', tone: 'good' },
        ],
      },
    },
  },
  kz: {
    highlightTag: 'Жобалар хроникасы',
    highlightHeading: 'Стелс Web3 операцияларынан бастап кәсіптік платформаларға дейін құрамыз.',
    highlightSubheading: 'Қол режиміндегі хаос пен біз жеткізетін автономды командалық ортаны салыстырыңыз.',
    highlightCta: 'Автоматтандыруды бастау',
    highlightSecondary: 'Кейстерді көру',
    chips: ['Автоматтандыру', 'AI Ops', 'Web3', 'Өнім', 'GTM'],
    brandTagline: 'Қажет нәрсені құрамыз, ұнамайтын жұмысты автоматтандырамыз.',
    modeLabels: { manual: 'Қол режимі', autonomous: 'Автономды режим' },
    sceneStatus: { manual: 'Хаос анықталды', autonomous: 'Автономия қосылды' },
    panels: {
      snapshotLabel: 'Операциялық срез',
      feedLabel: 'Оқиғалар таспасы',
      feedStatus: { manual: 'Эскалациялар', autonomous: 'Автоағыс' },
      playbookLabel: 'Rahmet playbook',
      switchLabels: { manual: 'Қолмен', autonomous: 'Авто' },
    },
    scenes: {
      manual: {
        badge: 'ҚОЛ ОПЕРАЦИЯЛАРЫ — СЫНУ ШЕГІ',
        label: 'Командалар сезінетін ауырлық',
        headline: 'Қолмен жасалған ерлік жараларды жасырады. Синхронизация да, бақылау да жоқ.',
        description:
          'Командалар көшіріп қою арқылы өрт сөндіреді. Қаржы департаменті шексіз Excel күтеді, қолдау кезегі клиенттерді жоғалтады.',
        pains: [
          { title: 'CRM → ERP синх', detail: 'CSV 4 сағаттан бері 73%-да тұр' },
          { title: 'Қаржы есебі', detail: '8 кесте келісімде тұрып қалды' },
          { title: 'Қолдау кезегі', detail: '120 тикет жауапсыз' },
          { title: 'Аудит', detail: 'Әрекеттер ізсіз, тәуекел жоғары' },
        ],
        playbook: [
          { title: 'Тар жер', detail: 'Операциялық лидерлер CRM, ERP, қолдау және Excel арасында жүгіріп жүр.' },
          { title: 'Rahmet кіруі', detail: 'Телеметрия орнатамыз, қол циклдерді картаға түсіреміз, басымдықтарды көрсетеміз.' },
          { title: 'Алғашқы жеңіс', detail: 'Ең ауыр процестерді автоматтандырып, командаға +40 сағат қайтарамыз.' },
        ],
        metrics: [
          { label: 'Күтудегі тикет', value: '187', hint: 'Қолдау бэклогы', tone: 'bad' },
          { label: 'Ops шығыны / ай', value: '$12K', hint: 'Овертайм мен мердігерлер', tone: 'bad' },
          { label: 'Жауап беру', value: '24сағ', hint: 'Эскалацияға реакция', tone: 'bad' },
        ],
        log: [
          { time: '02:07', message: 'Қаржы: «Апталық есеп керек»', tone: 'bad' },
          { time: '02:09', message: 'Қолдау 45 тикетті эскалациялады', tone: 'bad' },
          { time: '02:15', message: 'Ops-лид инженерлерді Slack-та оятты', tone: 'bad' },
        ],
      },
      autonomous: {
        badge: 'АВТОНОМДЫ OPS — ТҰРАҚТЫ СИГНАЛ',
        label: 'Трансформация сезімі',
        headline: 'Әр жүйе шынайы деректі live режимінде береді. Адамдар тек нәтиже басқарады.',
        description:
          'Плейбуктер өзі қосылады, қаржы бірнеше сағатта жабылады, кез келген сигнал автоном агентке дейін жетеді.',
        pains: [
          { title: 'Сигналдар бірікті', detail: 'CRM ↔ ERP ↔ биллинг live' },
          { title: 'Қаржы', detail: '4 сағатта жабу' },
          { title: 'Қолдау', detail: 'AI тикеттердің 92%-ын шешеді' },
          { title: 'Audit trail', detail: 'Әр әрекет автоматты түрде жазылады' },
        ],
        playbook: [
          { title: 'Оркестрация', detail: 'Барлық сигнал бір control plane-ге guardrail-мен түседі.' },
          { title: 'Rahmet паттерні', detail: 'AI агенттері бағыттайды, синхрондайды және команданы брифтайды.' },
          { title: 'Импульс', detail: 'Лидерлер стратегиямен айналысады, ops автопилотта.' },
        ],
        metrics: [
          { label: 'Күтудегі тикет', value: '0', hint: 'Авто-триаж', tone: 'good' },
          { label: 'Ops шығыны / ай', value: '-$8K', hint: 'Овертайм жоқ', tone: 'good' },
          { label: 'Жауап беру', value: '45с', hint: 'Сигнал шешілді', tone: 'good' },
        ],
        log: [
          { time: '09:15', message: 'AI churn playbook-ты орындады', tone: 'good' },
          { time: '09:26', message: 'Ledger 42 секундта салыстырылды', tone: 'good' },
          { time: '09:39', message: 'Executive дэшборды автобейнеленді', tone: 'good' },
        ],
      },
    },
  },
};

const servicesCopy = {
  en: {
    label: 'SERVICES',
    heading: 'Everything we build',
    subheading: 'Automation, AI, web3, full-stack product, growth. One team that ships the outcome.',
    cta: 'Discuss your project',
  },
  ru: {
    label: 'НАПРАВЛЕНИЯ',
    heading: 'Что мы делаем',
    subheading: 'Автоматизация, AI, web3 и продукты — одна команда ведёт проект от диагностики до запуска.',
    cta: 'Обсудить задачу',
  },
  kz: {
    label: 'ҚЫЗМЕТТЕР',
    heading: 'Біз жасайтынның бәрі',
    subheading: 'Автоматтандыру, AI, web3, full-stack өнім және өсім — бір команда бүкіл нәтиже үшін.',
    cta: 'Жобаны талқылау',
  },
};

const capabilitiesCopy = {
  en: {
    label: 'CAPABILITIES',
    heading: 'Technologies & expertise',
    subheading: 'Stacks and skills we plug into every engagement.',
  },
  ru: {
    label: 'ВОЗМОЖНОСТИ',
    heading: 'Технологии и экспертиза',
    subheading: 'Стек и практики, которые мы привозим в каждый проект.',
  },
  kz: {
    label: 'МҮМКІНДІКТЕР',
    heading: 'Технология және тәжірибе',
    subheading: 'Әр жобада алып келетін стек пен дағдылар.',
  },
};

const portfolioPreviewCopy = {
  en: {
    label: 'OUR WORK',
    heading: 'Selected builds',
    subheading: 'A tiny sample of recent automation, product, and web3 deliveries.',
    cta: 'View full portfolio',
    viewProject: 'View project',
    focus: 'Focus',
    hero: 'Hero',
    footerText: 'Full case studies, metrics, and live links inside the portfolio.',
    cards: [
      {
        id: 'unhireable',
        tag: 'Showcase',
        title: 'Unhireable',
        note: 'Neural Career System — desktop app automating job search, AI-powered matching, and document generation across hh.kz, Wellfound, LinkedIn.',
        link: 'https://unhireable-website.vercel.app',
        focus: ['AI matching', 'Job automation'],
      },
      {
        id: 'beyond',
        tag: 'Showcase',
        title: 'Beyond Lines',
        note: 'Autonomous intelligence pipeline curating content from 60+ sources (crypto, hacking, AI, alt news). AI curation, Telegram bot, web dashboard.',
        link: 'https://beyondlines-web.vercel.app',
        focus: ['AI curation', 'Content pipeline'],
      },
      { id: 'web3', tag: 'Web3', title: 'Web3 Airdrop Farming', note: 'Smart contracts + automation orchestration.' },
      { id: 'edu', tag: 'Product', title: 'Education Platform Suite', note: 'ageu.edu.kz · q-university.edu.kz · qgroup.asia' },
      { id: 'auto', tag: 'Automation', title: 'Multi-Platform Bot Suite', note: 'WhatsApp · Telegram · Threads · Twitter' },
    ],
  },
  ru: {
    label: 'ПРОЕКТЫ',
    heading: 'Короткая витрина',
    subheading: 'Несколько релизов, которые показывают диапазон и скорость.',
    cta: 'Перейти в портфолио',
    viewProject: 'Смотреть проект',
    focus: 'Фокус',
    hero: 'Главный',
    footerText: 'Полные кейсы, метрики и рабочие ссылки — в портфолио.',
    cards: [
      {
        id: 'unhireable',
        tag: 'Showcase',
        title: 'Unhireable',
        note: 'Neural Career System — десктоп-приложение для автоматизации поиска работы, AI-подбора вакансий и генерации документов (hh.kz, Wellfound, LinkedIn).',
        link: 'https://unhireable-website.vercel.app',
        focus: ['AI matching', 'Автоматизация'],
      },
      {
        id: 'beyond',
        tag: 'Showcase',
        title: 'Beyond Lines',
        note: 'Автономный пайплайн курации контента из 60+ источников: крипто, хакерство, AI, альтернативные новости. AI-курация, Telegram-бот, веб-дашборд.',
        link: 'https://beyondlines-web.vercel.app',
        focus: ['AI курация', 'Контент'],
      },
      { id: 'web3', tag: 'Web3', title: 'Web3 Airdrop Farming', note: 'Смарт-контракты и автоматизация оркестрации.' },
      { id: 'edu', tag: 'Продукт', title: 'Образовательные платформы', note: 'ageu.edu.kz · q-university.edu.kz · qgroup.asia' },
      { id: 'auto', tag: 'Автоматизация', title: 'Боты для всех платформ', note: 'WhatsApp · Telegram · Threads · Twitter' },
    ],
  },
  kz: {
    label: 'ЖОБАЛАР',
    heading: 'Таңдамалы релиздер',
    subheading: 'Жуырдағы бірнеше автоматтандыру және өнім жеткізуі.',
    cta: 'Барлық портфолио',
    viewProject: 'Жобаны көру',
    focus: 'Фокус',
    hero: 'Негізгі',
    footerText: 'Толық кейстер, метрикалар және жұмыс істеп тұрған сілтемелер портфолиода.',
    cards: [
      {
        id: 'unhireable',
        tag: 'Showcase',
        title: 'Unhireable',
        note: 'Neural Career System — жұмыс іздеуді автоматтандыратын десктоп қолданбасы, AI-жұмыс таңдау және құжат генерациясы (hh.kz, Wellfound, LinkedIn).',
        link: 'https://unhireable-website.vercel.app',
        focus: ['AI matching', 'Автоматтандыру'],
      },
      {
        id: 'beyond',
        tag: 'Showcase',
        title: 'Beyond Lines',
        note: 'Автономды интеллектуалды пайплайн: 60+ көзден контент курациясы (крипто, хакерлік, AI, баламалық жаңалықтар). AI-курация, Telegram-бот, веб-дашборд.',
        link: 'https://beyondlines-web.vercel.app',
        focus: ['AI курация', 'Контент'],
      },
      { id: 'web3', tag: 'Web3', title: 'Web3 Airdrop Farming', note: 'Смарт-келісімдер және автоматтандыру оркестрациясы.' },
      { id: 'edu', tag: 'Өнім', title: 'Білім беру платформалары', note: 'ageu.edu.kz · q-university.edu.kz · qgroup.asia' },
      { id: 'auto', tag: 'Автоматтандыру', title: 'Барлық платформаларға арналған боттар', note: 'WhatsApp · Telegram · Threads · Twitter' },
    ],
  },
};

const portfolioPageCopy = {
  en: {
    heading: 'Portfolio',
    subheading: 'Real projects across automation, product, web3, and growth.',
    filters: ['All', 'Web3', 'Automation', 'Development'],
    backLabel: 'Back to site',
    viewProject: 'View project',
    liveSites: 'Live sites',
    contactPrompt: 'Contact us',
  },
  ru: {
    heading: 'Портфолио',
    subheading: 'Реальные кейсы: автоматизация, продукты, web3 и рост.',
    filters: ['Все', 'Web3', 'Автоматизация', 'Разработка'],
    backLabel: 'Назад на сайт',
    viewProject: 'Смотреть проект',
    liveSites: 'Рабочие ссылки',
    contactPrompt: 'Связаться с нами',
  },
  kz: {
    heading: 'Портфолио',
    subheading: 'Нақты жобалар: автоматтандыру, өнімдер, web3 және өсу.',
    filters: ['Барлығы', 'Web3', 'Автоматтандыру', 'Даму'],
    backLabel: 'Сайтқа оралу',
    viewProject: 'Жобаны көру',
    liveSites: 'Жұмыс істеп тұрған сілтемелер',
    contactPrompt: 'Байланысу',
  },
};

const processCopy = {
  en: {
    label: 'EXECUTION CLI',
    heading: 'How we ship',
    subheading: 'Four short passes from chaos to autopilot. No fluff, no mystery, always visible.',
    milestones: [
      { title: 'Signals mapped', hint: 'Telemetry + blockers prioritized' },
      { title: 'Blueprint signed', hint: 'Architecture + runbooks locked' },
      { title: 'Control plane live', hint: 'Automations + dashboards in prod' },
      { title: 'Autopilot engaged', hint: 'Ops monitored & improved' },
    ],
  },
  ru: {
    label: 'ПРОЦЕСС',
    heading: 'Как мы работаем',
    subheading: '4 шага от хаоса до автопилота — прозрачно, без воды и сюрпризов.',
    milestones: [
      { title: 'Диагностика завершена', hint: 'Все процессы проанализированы, приоритеты расставлены' },
      { title: 'Архитектура готова', hint: 'План автоматизации согласован, runbook-и описаны' },
      { title: 'Система запущена', hint: 'Автоматизация работает, дашборды показывают метрики' },
      { title: 'Всё на автопилоте', hint: 'Система мониторится, процессы оптимизируются' },
    ],
  },
  kz: {
    label: 'ҮРДІС',
    heading: 'Қалай жеткіземіз',
    subheading: 'Хаостан автопилотқа дейін төрт қадам. Ашық әрі түсінікті.',
    milestones: [
      { title: 'Диагностика аяқталды', hint: 'Барлық үдерістер талданды, басымдықтар реттелді' },
      { title: 'Архитектура дайын', hint: 'Автоматтандыру жоспары келісілді, runbook-тар сипатталды' },
      { title: 'Жүйе іске қосылды', hint: 'Автоматтандыру жұмыс істейді, дэшбордтар метрикаларды көрсетеді' },
      { title: 'Барлығы автопилотта', hint: 'Жүйе бақыланады, үдерістер оңтайландырылады' },
    ],
  },
};

const statsCopy = {
  en: {
    label: 'METRICS',
    heading: 'Typical lifts',
  },
  ru: {
    label: 'РЕЗУЛЬТАТЫ',
    heading: 'Что обычно меняется',
  },
  kz: {
    label: 'МЕТРИКАЛАР',
    heading: 'Әдеттегі нәтижелер',
  },
};

const contactCopy = {
  en: {
    heading: 'Contact',
    subheading: 'Tell us what hurts, we’ll show how to fix it.',
  },
  ru: {
    heading: 'Связаться',
    subheading: 'Расскажите, что болит — соберём план по шагам.',
  },
  kz: {
    heading: 'Байланыс',
    subheading: 'Қай жерде ауыртпалық барын айтыңыз — шешімін көрсетеміз.',
  },
};

const footerCopy = {
  en: {
    tagline: 'We build what you need, automate what you hate.',
    label: 'Quick links',
    quickLinks: ['Services', 'Capabilities', 'Work', 'Contact'],
    copyright: 'All rights reserved.',
    builtWith: 'Built with Next.js, React, and Framer Motion',
  },
  ru: {
    tagline: 'Строим нужное, автоматизируем рутину.',
    label: 'Разделы',
    quickLinks: ['Услуги', 'Технологии', 'Проекты', 'Контакт'],
    copyright: 'Все права защищены.',
    builtWith: 'Сделано на Next.js, React и Framer Motion',
  },
  kz: {
    tagline: 'Қажеттісін құрамыз, қажетсізін автоматтандырамыз.',
    label: 'Жылдам сілтемелер',
    quickLinks: ['Қызметтер', 'Мүмкіндіктер', 'Жобалар', 'Байланыс'],
    copyright: 'Барлық құқықтар қорғалған.',
    builtWith: 'Next.js, React және Framer Motion арқылы жасалған',
  },
};

const servicesPageCopy = {
  en: {
    label: 'Services & pricing',
    heading: 'What we offer',
    subheading: 'Custom scope, transparent pricing, fast kickoff.',
    table: ['Starter', 'Pro', 'Enterprise'],
    featuresLabel: 'Features',
    pricingLabel: 'Pricing',
    cta: 'Get started',
  },
  ru: {
    label: 'Услуги и формат',
    heading: 'Что вы получаете',
    subheading: 'Гибкий объём, прозрачное ценообразование, быстрый старт.',
    table: ['Базовый', 'Про', 'Enterprise'],
    featuresLabel: 'Состав пакета',
    pricingLabel: 'Стоимость',
    cta: 'Связаться',
  },
  kz: {
    label: 'Қызметтер және баға',
    heading: 'Не ұсынамыз',
    subheading: 'Икемді scope, ашық баға және тез старт.',
    table: ['Start', 'Pro', 'Enterprise'],
    featuresLabel: 'Құрам',
    pricingLabel: 'Баға',
    cta: 'Бастау',
  },
};

function buildServiceCards(locale) {
  return serviceCards.map((card) => {
    const override = serviceOverrides[locale]?.[card.id] || {};
    const pricingOverride = override.pricing || {};
    return {
      ...card,
      ...override,
      examples: override.examples || card.examples,
      features: override.features || card.features,
      pricing: {
        starter: { ...card.pricing.starter, ...(pricingOverride.starter || {}) },
        pro: { ...card.pricing.pro, ...(pricingOverride.pro || {}) },
        enterprise: { ...card.pricing.enterprise, ...(pricingOverride.enterprise || {}) },
      },
    };
  });
}

function buildCapabilityCategories(locale) {
  return capabilityCategories.map((category) => {
    const override = capabilityOverrides[locale]?.[category.id] || {};
    return {
      ...category,
      ...override,
      items: override.items || category.items,
    };
  });
}

function buildPortfolioProjects(locale) {
  return portfolioProjects.map((project) => {
    const override = portfolioOverrides[locale]?.[project.id] || {};
    return { ...project, ...override };
  });
}

function buildProcessSteps(locale) {
  return processSteps.map((step) => {
    const override = processOverrides[locale]?.[step.id] || {};
    return { ...step, ...override };
  });
}

function buildStatsCards(locale) {
  return statsCards.map((card) => {
    const override = statsOverrides[locale]?.[card.id] || {};
    return { ...card, ...override };
  });
}

function buildContactMethods(locale) {
  return contactMethods.map((method) => {
    const override = contactOverrides[locale]?.[method.id] || {};
    return { ...method, ...override };
  });
}

function buildPortfolioPreview(locale) {
  const copy = portfolioPreviewCopy[locale];
  return {
    ...copy,
    cards: copy.cards.map((card) => ({ ...card })),
  };
}

function buildPortfolioPage(locale) {
  return {
    ...portfolioPageCopy[locale],
    projects: buildPortfolioProjects(locale),
  };
}

function buildServices(locale) {
  return {
    ...servicesCopy[locale],
    cards: buildServiceCards(locale),
  };
}

function buildCapabilities(locale) {
  return {
    ...capabilitiesCopy[locale],
    categories: buildCapabilityCategories(locale),
  };
}

function buildProcess(locale) {
  return {
    ...processCopy[locale],
    steps: buildProcessSteps(locale),
  };
}

function buildStats(locale) {
  return {
    ...statsCopy[locale],
    cards: buildStatsCards(locale),
  };
}

function buildContact(locale) {
  return {
    ...contactCopy[locale],
    methods: buildContactMethods(locale),
  };
}

function buildDictionary(locale) {
  const nav = { ...navCopy[locale] };
  return {
    nav,
    navigation: nav,
    hero: heroCopy[locale],
    services: buildServices(locale),
    capabilities: buildCapabilities(locale),
    portfolioPreview: buildPortfolioPreview(locale),
    portfolioPage: buildPortfolioPage(locale),
    process: buildProcess(locale),
    stats: buildStats(locale),
    contact: buildContact(locale),
    footer: {
      ...footerCopy[locale],
      quickLinks: footerCopy[locale].quickLinks.map((item) => item),
    },
    servicesPage: servicesPageCopy[locale],
  };
}

export const translations = {
  en: buildDictionary('en'),
  ru: buildDictionary('ru'),
  kz: buildDictionary('kz'),
};

