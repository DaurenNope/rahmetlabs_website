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
  {
    id: 'tender',
    title: 'Tender Automation Platform',
    type: 'Business Automation + AI',
    badge: 'AUTOMATION',
    description:
      'Custom admin panel plus Playwright + AI automations to monitor tenders, reply to clients instantly, and orchestrate fulfilment.',
    tech: ['Playwright', 'AI agents', 'Admin panel'],
    accent: 'rgba(248, 113, 113, 0.25)',
    icon: 'Zap',
  },
  {
    id: 'gencontent',
    title: 'Generative Content Platform',
    type: 'AI Platform',
    badge: 'AI PLATFORM',
    description:
      'Unified multi-model creative suite combining text, visual, and workflow automation for agencies and in-house teams.',
    tech: ['GenAI', 'Next.js', 'Creative tooling'],
    accent: 'rgba(14, 165, 233, 0.25)',
    icon: 'Palette',
  },
  {
    id: 'aiagents',
    title: 'AI Agent Business System',
    type: 'Enterprise AI',
    badge: 'ENTERPRISE AI',
    description:
      'Multi-agent AI architecture handling approvals, decisions, and orchestration to slash operational cost across business units.',
    tech: ['AI agents', 'n8n', 'Process orchestration'],
    accent: 'rgba(34, 197, 94, 0.25)',
    icon: 'Database',
  },
  {
    id: 'smartcontracts',
    title: 'Smart Contract Automation Suite',
    type: 'Web3 + Smart Contracts',
    badge: 'WEB3',
    description: 'BSC, Ethereum, and Arbitrum contracts with automated testing, multi-sig deploys, and live monitoring.',
    tech: ['Solidity', 'Rust', 'Hardhat'],
    accent: 'rgba(99, 102, 241, 0.25)',
    icon: 'Globe',
  },
  {
    id: 'nftdiplomas',
    title: 'University NFT Diploma Platform',
    type: 'NFT Platform',
    badge: 'NFT',
    description: 'Credential NFTs for universities with issuance dashboard, student wallet hub, and public verification portal.',
    tech: ['Next.js', 'Solidity', 'IPFS'],
    accent: 'rgba(245, 158, 11, 0.25)',
    icon: 'Palette',
  },
  {
    id: 'landinggrid',
    title: 'Landing Systems & Funnels',
    type: 'Web & GTM',
    badge: 'GTM',
    description: 'Dozens of localized landing pages for startups, enterprises, and government programs wired to analytics and CRM.',
    tech: ['Next.js', 'Vercel', 'Analytics'],
    accent: 'rgba(251, 191, 36, 0.25)',
    icon: 'Megaphone',
  },
  {
    id: 'crmbridge',
    title: 'CRM ↔ ERP Automation Bridge',
    type: 'Automation',
    badge: 'AUTOMATION',
    description: 'n8n and custom APIs syncing finance, CRM, and support stacks with guardrails and observability.',
    tech: ['n8n', 'Postgres', 'API'],
    accent: 'rgba(248, 113, 113, 0.25)',
    icon: 'Database',
  },
  {
    id: 'supportai',
    title: 'AI Support Desk',
    type: 'AI Ops',
    badge: 'AI OPS',
    description: 'Multilingual bots, AI answers, and agent copilots that deflect tickets and escalate with full context.',
    tech: ['LLMs', 'Bots', 'Knowledge graph'],
    accent: 'rgba(52, 211, 153, 0.25)',
    icon: 'Headphones',
  },
  {
    id: 'datacommand',
    title: 'Ops Command & Data Plane',
    type: 'Data + Automation',
    badge: 'DATA',
    description: 'Telemetry mesh unifying product, finance, and infra data with alerting, playbooks, and AI summaries.',
    tech: ['Timescale', 'Supabase', 'Grafana'],
    accent: 'rgba(14, 165, 233, 0.25)',
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
    tender: {
      type: 'Бизнес-автоматизация + AI',
      description: 'Кастомная админка + Playwright и AI-агенты: следят за тендерами, мгновенно отвечают клиентам и управляют исполнением.',
    },
    gencontent: {
      type: 'AI-платформа',
      description: 'Единый мульти-модельный креативный пакет: тексты, визуал и автоматизация для агентств и in-house команд.',
    },
    aiagents: {
      type: 'Enterprise AI',
      description: 'Многоагентная AI-система берёт на себя согласования, решения и оркестрацию, снижая затраты по всей компании.',
    },
    smartcontracts: {
      type: 'Web3 + смарт-контракты',
      description: 'Контракты для BSC, Ethereum и Arbitrum с автотестами, мультисиг-деплоями и мониторингом.',
    },
    nftdiplomas: {
      type: 'NFT-платформа',
      description: 'NFT-дипломы для университетов: кабинет выдачи, кошельки студентов и публичная верификация.',
    },
    landinggrid: {
      type: 'Веб и GTM',
      description: 'Десятки лендингов для бизнеса, государства и стартапов с аналитикой и CRM-интеграциями.',
    },
    crmbridge: {
      type: 'Автоматизация',
      description: 'n8n и кастомные API синхронизируют финансы, CRM и поддержку с защитой и наблюдаемостью.',
    },
    supportai: {
      type: 'AI Ops',
      description: 'Мультиязычные боты и AI-ответы снимают нагрузку с поддержки и эскалируют с полным контекстом.',
    },
    datacommand: {
      type: 'Данные + автоматизация',
      description: 'Телеметрический слой объединяет продукт, финансы и инфраструктуру с алертами и плейбуками.',
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
    tender: {
      type: 'Бизнес автоматтандыру + AI',
      description: 'Кастом админ-панель, Playwright және AI агенттері тендер мониторингі, клиент жауаптары және орындауды автоматтандырады.',
    },
    gencontent: {
      type: 'AI платформа',
      description: 'Көп модельді креатив жиынтығы: мәтін, визуал және автоматтандыру агенттіктер мен in-house командаларға.',
    },
    aiagents: {
      type: 'Enterprise AI',
      description: 'Көп агентті AI жүйесі келісімдер мен процестерді автоматтандырады, шығынды қысқартады.',
    },
    smartcontracts: {
      type: 'Web3 + смарт-келісімдер',
      description: 'BSC, Ethereum, Arbitrum келісімдері автотест, мультисиг және мониторингпен.',
    },
    nftdiplomas: {
      type: 'NFT платформа',
      description: 'Университеттерге арналған NFT-дипломдар: беру кабинеті, студент әмияндары, тексеру порталы.',
    },
    landinggrid: {
      type: 'Веб және GTM',
      description: 'Кәсіп, мемлекет және стартаптар үшін ондаған лендингтер аналитика және CRM интеграцияларымен.',
    },
    crmbridge: {
      type: 'Автоматтандыру',
      description: 'n8n және кастом API қаржы, CRM және қолдау жүйелерін синхрондайды.',
    },
    supportai: {
      type: 'AI Ops',
      description: 'Көптілді боттар мен AI жауаптары тикеттерді азайтып, контекстпен эскалациялайды.',
    },
    datacommand: {
      type: 'Деректер + автоматтандыру',
      description: 'Телеметрия қабаты өнім, қаржы және инфра деректерін біріктіріп, алерт пен плейбукке жібереді.',
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
  { id: 'clients', value: 100, suffix: '%', label: 'Clients retained', detail: 'Long-term partnerships' },
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
    efficiency: { label: 'Тиімділік өсімі', detail: 'Қол еңбегі азаяды' },
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
    about: 'About',
    work: 'Work',
    contact: 'Contact',
    cta: 'Talk to us',
  },
  ru: {
    services: 'Услуги',
    capabilities: 'Технологии',
    about: 'О нас',
    work: 'Проекты',
    contact: 'Связаться',
    cta: 'Связаться',
  },
  kz: {
    services: 'Қызметтер',
    capabilities: 'Мүмкіндіктер',
    about: 'Біз туралы',
    work: 'Жобалар',
    contact: 'Байланыс',
    cta: 'Хабарласу',
  },
};

const heroCopy = {
  en: {
    highlightTag: 'Highlight reel',
    highlightHeading: 'We build web + mobile products, automation control planes, and Web3 infrastructure.',
    highlightSubheading: 'Toggle manual chaos against the full-stack systems and autonomous ops we ship.',
    highlightCta: 'Scope a build',
    highlightSecondary: 'View proof',
    chips: ['Web', 'Mobile', 'Automation', 'AI Ops', 'Web3', 'Product'],
    brandTagline: 'Full-stack studio for web, mobile, AI, automation, and Web3 launches.',
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
    proof: {
      heading: 'What the builds deliver',
      subheading: 'A few fast wins teams got after handing us their ops.',
      items: [
        {
          title: 'Ops command tower',
          stat: '-41% ops cost',
          detail: 'Automation control plane for a logistics network (21 days).',
        },
        {
          title: 'NFT diploma registry',
          stat: '120K credentials',
          detail: 'University NFT issuance platform across Polygon + custodial wallets.',
        },
        {
          title: 'Support AI desk',
          stat: '87% tickets deflected',
          detail: 'Multilingual WhatsApp + web concierge with escalation to HubSpot.',
        },
      ],
    },
    faq: {
      heading: 'FAQ & buying signals',
      items: [
        {
          question: 'How fast can you start?',
          answer: 'Diagnostics for most scopes kicks off within 5 business days. We reserve no more than 2 concurrent builds per month.',
        },
        {
          question: 'Do you white-label or embed with our team?',
          answer: 'Yes. We can ship under your brand, embed in Slack/Notion, and hand over playbooks and repos with zero vendor lock-in.',
        },
        {
          question: 'What happens after launch?',
          answer: 'Every build ships with dashboards, runbooks, and office hours. We can stay on retainer or train your team to own it.',
        },
      ],
    },
    engagement: {
      heading: 'Engagement styles',
      subheading: 'Pick the operating model that fits how you ship.',
      plans: [
        {
          title: 'Sprint',
          price: 'from $5K',
          bullets: ['1-2 week bursts', 'Single objective', 'Access to builder + quick wins'],
          cta: 'Book sprint',
          highlight: 'Best for validations',
        },
        {
          title: 'Launch',
          price: 'from $15K',
          bullets: ['4-6 week engagement', 'Dedicated squad', 'Full stack + automation'],
          cta: 'Plan launch',
          highlight: 'Full product/ops build',
        },
        {
          title: 'Ops partner',
          price: 'Custom',
          bullets: ['Quarterly retainer', 'Roadmap + support', '24/7 monitoring & improvements'],
          cta: 'Talk retainers',
          highlight: 'Embedded autonomy team',
        },
      ],
    },
  },
  ru: {
    highlightTag: 'Кейсы',
    highlightHeading: 'Делаем веб и мобильные продукты, автоматизацию и Web3-инфраструктуру.',
    highlightSubheading: 'От простых, профессионально работающих лендингов до полноценных приложений — переключите хаос ручных процессов на автономные операции.',
    highlightCta: 'Собрать решение',
    highlightSecondary: 'Смотреть кейсы',
    chips: ['Веб', 'Мобайл', 'Автоматизация', 'AI Ops', 'Web3', 'Продукты'],
    brandTagline: 'Фуллстек-студия: продукты, AI, автоматизация и Web3 под одной крышей.',
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
    proof: {
      heading: 'Что получили команды',
      subheading: 'Несколько коротких результатов после наших сборок.',
      items: [
        {
          title: 'Командный центр Ops',
          stat: '-41% расходов',
          detail: 'Control plane для логистической сети — внедрение за 21 день.',
        },
        {
          title: 'NFT-реестр дипломов',
          stat: '120K credentials',
          detail: 'Университетская платформа выдачи NFT на Polygon с кастодиальными кошельками.',
        },
        {
          title: 'AI-поддержка',
          stat: '87% тикетов закрывает ИИ',
          detail: 'Мультиязычный WhatsApp + веб-консьерж с эскалацией в HubSpot.',
        },
      ],
    },
    faq: {
      heading: 'FAQ и сигналы покупки',
      items: [
        {
          question: 'Как быстро вы стартуете?',
          answer: 'Диагностику запускаем в течение 5 рабочих дней. Не берём больше двух параллельных сборок в месяц.',
        },
        {
          question: 'Вы работаете white-label?',
          answer: 'Да. Можем собирать “под ключ”, работать из вашего Slack/Notion и передать все артефакты без vendor lock-in.',
        },
        {
          question: 'Что после релиза?',
          answer: 'Передаём дашборды, runbook-и и проводим office hours. Можем остаться на ретейнере или обучить вашу команду.',
        },
      ],
    },
    engagement: {
      heading: 'Форматы работы',
      subheading: 'Подберите модель, которая совпадает с вашей скоростью.',
      plans: [
        {
          title: 'Спринт',
          price: 'от $5K',
          bullets: ['1–2 недели', 'Одна цель', 'Конструктор + быстрые решения'],
          cta: 'Забронировать спринт',
          highlight: 'Идеально для гипотез',
        },
        {
          title: 'Запуск',
          price: 'от $15K',
          bullets: ['4–6 недель', 'Выделенная команда', 'Full-stack + автоматизация'],
          cta: 'Запланировать запуск',
          highlight: 'Продукт / control plane',
        },
        {
          title: 'Партнёрство',
          price: 'Custom',
          bullets: ['Квартальный ретейнер', 'Дорожная карта + поддержка', '24/7 мониторинг и улучшения'],
          cta: 'Обсудить ретейнер',
          highlight: 'Постоянное сопровождение',
        },
      ],
    },
  },
  kz: {
    highlightTag: 'Жобалар хроникасы',
    highlightHeading: 'Веб және мобайл өнімдер, автоматтандыру және Web3 инфрақұрылымын құрамыз.',
    highlightSubheading: 'Қарапайым, кәсіби жұмыс істейтін лендингтерден толық көлемді қолданбаларға дейін — қолмен істейтін хаостан автономды операцияларға ауысыңыз.',
    highlightCta: 'Шешімді жинау',
    highlightSecondary: 'Кейстерді көру',
    chips: ['Веб', 'Мобайл', 'Автоматтандыру', 'AI Ops', 'Web3', 'Өнім'],
    brandTagline: 'Фуллстек студия: өнімдер, AI, автоматтандыру және Web3 бір жерде.',
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
    proof: {
      heading: 'Жеткізілген нәтижелер',
      subheading: 'Командалар бізбен жұмыс істегеннен кейінгі қысқа мысалдар.',
      items: [
        {
          title: 'Ops командалық орталығы',
          stat: '-41% шығын',
          detail: 'Логистика желісіне арналған control plane — 21 күнде.',
        },
        {
          title: 'NFT диплом платформасы',
          stat: '120K credential',
          detail: 'Университеттер үшін Polygon негізіндегі NFT беру жүйесі.',
        },
        {
          title: 'AI қолдау үстелі',
          stat: '87% тикет AI',
          detail: 'Көптілді WhatsApp + веб-консьерж, HubSpot-қа эскалация.',
        },
      ],
    },
    faq: {
      heading: 'FAQ және сигналдар',
      items: [
        {
          question: 'Қаншалықты тез бастайсыздар?',
          answer: 'Көпшілік scope үшін диагностика 5 жұмыс күні ішінде басталады. Айына 2 жобадан артық алмаймыз.',
        },
        {
          question: 'White-label форматта жұмыс істейсіздер ме?',
          answer: 'Иә. Slack/Notion-да ендіріліп, барлық артефакттарды vendor lock-inсыз тапсырамыз.',
        },
        {
          question: 'Релизден кейін не болады?',
          answer: 'Дэшбордтар, runbook және office hours өткіземіз. Ретейнер ретінде қала аламыз немесе команданы оқытамыз.',
        },
      ],
    },
    engagement: {
      heading: 'Жұмыс форматы',
      subheading: 'Сіздің қарқыныңызға сай модельді таңдаңыз.',
      plans: [
        {
          title: 'Спринт',
          price: '$5K бастап',
          bullets: ['1–2 апта', 'Бір мақсат', 'Конструктор + жедел жеңістер'],
          cta: 'Спринтке жазылу',
          highlight: 'Гипотезаны тексеру',
        },
        {
          title: 'Launch',
          price: '$15K бастап',
          bullets: ['4–6 апта', 'Арнайы команда', 'Full-stack + автоматтандыру'],
          cta: 'Launch жоспарлау',
          highlight: 'Өнім / control plane',
        },
        {
          title: 'Ops серіктес',
          price: 'Custom',
          bullets: ['Тоқсандық ретейнер', 'Roadmap + қолдау', '24/7 мониторинг'],
          cta: 'Ретейнер талқылау',
          highlight: 'Үздіксіз сүйемелдеу',
        },
      ],
    },
  },
};

const servicesCopy = {
  en: {
    label: 'SERVICES',
    heading: 'What we build',
    subheading: 'Web/mobile apps, SaaS dashboards, smart contracts, AI copilots, and customer automation — one squad designs, builds, and maintains the stack.',
    cta: 'Discuss your project',
    builderCta: 'Configure your build',
    quickWins: {
      badge: 'AUTOMATION KITS',
      heading: 'Automation kits for B2B + B2C',
      subheading: 'Landings, scripts, and bots most teams ask for — delivered with telemetry, analytics, and CRM wiring.',
      kits: [
        {
          id: 'landing',
          badge: 'LANDINGS',
          title: 'Landing autopilot',
          description: 'Multilingual funnels with analytics, lead capture, and instant CRM sync.',
          items: ['Next.js multi-landing system', 'UTM + pixel instrumentation', 'Leads synced to HubSpot/Notion/Sheets'],
        },
        {
          id: 'scripts',
          badge: 'SCRIPTS',
          title: 'Script & outreach studio',
          description: 'Sales scripts, FAQs, and AI replies wired to your knowledge base.',
          items: ['Persona-based script packs', 'AI objection handler', 'Shared tracker with live dashboards'],
        },
        {
          id: 'bots',
          badge: 'BOTS',
          title: 'Bots on every channel',
          description: 'WhatsApp, Telegram, and web widgets with payments and support automations.',
          items: ['24/7 support bot', 'Catalog + payment flows', 'CRM and ticket sync'],
        },
      ],
    },
  },
  ru: {
    label: 'НАПРАВЛЕНИЯ',
    heading: 'Что мы делаем',
    subheading: 'Веб и мобильные приложения, SaaS-дашборды, смарт-контракты, AI-копилоты и клиентская автоматизация — одна команда ведёт всё от дизайна до поддержки.',
    cta: 'Обсудить задачу',
    builderCta: 'Настроить сборку',
    quickWins: {
      badge: 'ГОТОВЫЕ КИТЫ',
      heading: 'Автокиты для B2B и B2C',
      subheading: 'Лендинги, скрипты и боты — самые частые запросы, запускаем с аналитикой и интеграциями за несколько дней.',
      kits: [
        {
          id: 'landing',
          badge: 'ЛЕНДИНГИ',
          title: 'Лендинги на автопилоте',
          description: 'Мультиязычные воронки с формами, аналитикой и синхронизацией лидов.',
          items: ['Система лендингов на Next.js', 'UTM/пиксели и события', 'Лиды летят в HubSpot/Notion/Sheets'],
        },
        {
          id: 'scripts',
          badge: 'СКРИПТЫ',
          title: 'Студия скриптов и ответов',
          description: 'Скрипты продаж, FAQ и AI-ответы на вашей базе знаний.',
          items: ['Персональные пакеты скриптов', 'AI-бот, который закрывает возражения', 'Общий трекер с дашбордами'],
        },
        {
          id: 'bots',
          badge: 'БОТЫ',
          title: 'Боты на всех каналах',
          description: 'WhatsApp, Telegram и веб-виджеты с оплатами и поддержкой.',
          items: ['24/7 бот поддержки', 'Каталог + оплаты внутри мессенджера', 'Синк с CRM и тикет-системой'],
        },
      ],
    },
  },
  kz: {
    label: 'ҚЫЗМЕТТЕР',
    heading: 'Біз не құрамыз',
    subheading: 'Веб/мобайл қолданбалар, SaaS дашбордтар, смарт-келісімдер, AI копилоттар және клиенттік автоматтандыру — бір команда барлығын жобалап, құрастырып, сүйемелейді.',
    cta: 'Жобаны талқылау',
    builderCta: 'Конструкторға өту',
    quickWins: {
      badge: 'АВТОКИТТЕР',
      heading: 'B2B және B2C үшін автоматтандыру пакеттері',
      subheading: 'Лендингтер, скрипттер және боттар — көпшілігіне керек қарапайым шешімдер, бірнеше күнде аналитика және интеграциямен.',
      kits: [
        {
          id: 'landing',
          badge: 'ЛЕНДИНГТЕР',
          title: 'Лендингтер автопилотта',
          description: 'Көптілді воронкалар, формалар, аналитика және CRM синхронизациясы.',
          items: ['Next.js лендинг жүйесі', 'UTM + пиксель оқиғалары', 'Лидтер HubSpot/Notion/Sheets-ке түседі'],
        },
        {
          id: 'scripts',
          badge: 'СКРИПТТЕР',
          title: 'Скрипт және outreach студиясы',
          description: 'Сату скрипттері, FAQ және AI жауаптары сіздің білім базасына қосылады.',
          items: ['Персонаға негізделген скрипт пакеттері', 'AI қарсылықтарды жабатын бот', 'Ортақ бақылау және дашбордтар'],
        },
        {
          id: 'bots',
          badge: 'БОТТАР',
          title: 'Барлық каналдағы боттар',
          description: 'WhatsApp, Telegram және веб-виджеттер төлем және қолдау ағындарымен.',
          items: ['24/7 қолдау боты', 'Каталог + төлем сценарийлері', 'CRM және тикет жүйесіне синк'],
        },
      ],
    },
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
    heading: 'Portfolio',
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
      {
        id: 'tender',
        tag: 'Business Automation',
        title: 'Tender Automation Platform',
        note: 'Custom admin, Playwright + AI agents streamline tender monitoring, client replies, and execution workflows.',
        focus: ['Tender ops', 'AI copilots'],
      },
      {
        id: 'gencontent',
        tag: 'AI Platform',
        title: 'Generative Content Platform',
        note: 'Unified multi-model studio for creative teams: text, visuals, and automation in one workspace.',
        focus: ['GenAI', 'Creative tooling'],
      },
      {
        id: 'aiagents',
        tag: 'Enterprise AI',
        title: 'AI Agent Business System',
        note: 'Multi-agent AI plus orchestration eliminating manual approvals, cutting cost across operations.',
        focus: ['AI agents', 'Process orchestration'],
      },
    ],
  },
  ru: {
    label: 'ПРОЕКТЫ',
    heading: 'Портфолио',
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
      {
        id: 'tender',
        tag: 'Бизнес-автоматизация',
        title: 'Tender Automation Platform',
        note: 'Кастомная админка + Playwright и AI следят за тендерами, отвечают клиентам и автоматизируют исполнение.',
        focus: ['Тендеры', 'AI-копилоты'],
      },
      {
        id: 'gencontent',
        tag: 'AI-платформа',
        title: 'Generative Content Platform',
        note: 'Единая мульти-модельная студия: тексты, визуал и автоматизация в одном рабочем пространстве.',
        focus: ['GenAI', 'Креативные инструменты'],
      },
      {
        id: 'aiagents',
        tag: 'Enterprise AI',
        title: 'AI Agent Business System',
        note: 'Система многоагентного AI + оркестрация процессов. Убирает ручные согласования и снижает косты.',
        focus: ['AI-агенты', 'Оркестрация'],
      },
    ],
  },
  kz: {
    label: 'ЖОБАЛАР',
    heading: 'Портфолио',
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
      {
        id: 'tender',
        tag: 'Бизнес автоматтандыру',
        title: 'Tender Automation Platform',
        note: 'Кастом админ-панель + Playwright және AI агенттері тендер мониторингі мен клиенттік жауаптарды автоматтандырады.',
        focus: ['Тендер процестері', 'AI копилоттар'],
      },
      {
        id: 'gencontent',
        tag: 'AI платформа',
        title: 'Generative Content Platform',
        note: 'Мультимодельді студия: мәтін, визуал және автоматтандыру бір кеңістікте.',
        focus: ['GenAI', 'Креатив құралдары'],
      },
      {
        id: 'aiagents',
        tag: 'Enterprise AI',
        title: 'AI Agent Business System',
        note: 'Көп агентті AI және оркестрация, қол еңбегі мен шығынды азайтады.',
        focus: ['AI агенттер', 'Процесс оркестрациясы'],
      },
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
    heading: 'Statistics',
  },
  ru: {
    label: 'РЕЗУЛЬТАТЫ',
    heading: 'Статистика',
  },
  kz: {
    label: 'МЕТРИКАЛАР',
    heading: 'Статистика',
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

const aboutPageCopy = {
  en: {
    hero: {
      badge: 'About Rahmet Labs',
      heading: 'Automation-native product studio.',
      subheading:
        'We are a small senior squad that ships web and mobile products, automation command centers, and Web3 infrastructure for teams across Central Asia, Europe, and the Gulf.',
      stats: [
        { value: '50+', label: 'Systems shipped', detail: 'Web, Web3, automation, design' },
        { value: '100%', label: 'Clients stay', detail: 'Retainers and embedded partners' },
        { value: '48hrs', label: 'Hours saved weekly', detail: 'Average per team after first release' },
      ],
      ctas: {
        primary: 'Configure a build',
        secondary: 'Talk to founders',
      },
    },
    team: {
      heading: 'Who builds with you',
      intro:
        'A team of builders who are always eager to learn, always on top of things, learning and improving every day. We rotate between product, automation, and Web3 programs—you work directly with the core delivery squad.',
      members: [
        {
          name: 'Core builders',
          role: 'Product · Web3 · Automation',
          bio: 'Computer science backgrounds, 8+ years shipping code. Obsessed with blockchain and AI. Built automation-heavy products through intense coding sessions. Always learning, always improving.',
        },
        {
          name: 'Automation partners',
          role: 'AI & Ops leads',
          bio: 'Network of engineers specialised in n8n, LangChain, data instrumentation, and compliance. Continuously learning new patterns and tools. Plug in per build, stay for handover.',
        },
        {
          name: 'Design & delivery ring',
          role: 'Design · QA · GTM',
          bio: 'Remote squad covering brand, product design, QA, and launch enablement. Always refining processes and staying current with best practices. Every build arrives production-ready.',
        },
      ],
    },
    principles: {
      heading: 'How we operate',
      items: [
        {
          title: 'Telemetry-first',
          description: 'We wire dashboards and logging before automation so every workflow is observable.',
        },
        {
          title: 'Design + code together',
          description: 'Product, design, and engineering sit in the same squad. No backlog tennis or handoff lag.',
        },
        {
          title: 'Automation over headcount',
          description: 'We default to bots and AI agents so you scale without hiring another layer of managers.',
        },
        {
          title: 'You own everything',
          description: 'Repos, infra, runbooks, and documentation transfer on day one. No lock-in.',
        },
      ],
    },
    toolkit: {
      heading: 'Stacks we live in',
      subheading: 'Next.js, React Native, Solidity, Hardhat, Supabase, Postgres, n8n, LangChain, OpenAI, Airbyte, Stripe, HubSpot, Notion, Framer Motion.',
      items: ['Next.js', 'React Native', 'Solidity', 'Hardhat', 'Supabase', 'Postgres', 'LangChain', 'OpenAI', 'n8n', 'Airbyte', 'Stripe', 'HubSpot', 'Notion', 'Framer'],
    },
    timeline: {
      heading: 'Selected deliveries',
      cta: 'View case',
      stackLabel: 'Stack',
      impactLabel: 'Impact',
      durationLabel: 'Timeline',
      items: [
        {
          year: '2024',
          title: 'Logistics ops command center',
          detail: 'Finance + support tower for a logistics network. Zero backlog after 21 days.',
          stack: 'n8n · LangChain · Supabase · HubSpot',
          impact: '-41% ops cost · 0 tickets waiting',
          duration: '21 days',
          link: '/portfolio',
        },
        {
          year: '2024',
          title: 'University NFT diploma registry',
          detail: 'Polygon + custodial wallets for 120K credentials with analytics and compliance.',
          stack: 'Polygon · Custodial wallets · Next.js',
          impact: '120K credentials issued',
          duration: '5 weeks',
          link: '/portfolio',
        },
        {
          year: '2023',
          title: 'AI support concierge',
          detail: 'WhatsApp + Telegram assistants resolving 87% of inbound tickets.',
          stack: 'WhatsApp API · Telegram Bot · GPT-4 · HubSpot',
          impact: '87% tickets deflected',
          duration: '4 weeks',
          link: '/portfolio',
        },
        {
          year: '2023',
          title: 'Multilingual landing grid',
          detail: '30+ launch-grade landings for public and government tenders.',
          stack: 'Next.js · Supabase · Vercel · Framer Motion',
          impact: '30+ sites · 2 weeks per batch',
          duration: '3 weeks',
          link: '/portfolio',
        },
      ],
    },
    testimonials: {
      heading: 'Signals from operators',
      items: [
        {
          quote: 'Rahmet Labs felt like an internal task force. They rebuilt ops while we kept shipping product.',
          author: 'VP Operations, logistics network',
        },
        {
          quote: 'They ship fast, document everything, and leave us with dashboards and automations we actually own.',
          author: 'Growth Lead, education platform',
        },
      ],
    },
    cta: {
      heading: 'Ready to build together?',
      subheading: 'Tell us what hurts — we will map the product, automation, or Web3 track in one call.',
      primary: 'Discuss your scope',
      secondary: 'View portfolio',
    },
  },
  ru: {
    hero: {
      badge: 'О Rahmet Labs',
      heading: 'Автоматизация + full-stack продукты.',
      subheading:
        'Небольшая сеньорская команда, которая делает веб и мобильные продукты, автоматизацию и Web3-инфраструктуру для команд из Центральной Азии, Европы и Персидского залива.',
      stats: [
        { value: '50+', label: 'Систем запущено', detail: 'Web, Web3, автоматизация, дизайн' },
        { value: '100%', label: 'Клиенты остаются', detail: 'Долгосрочные партнёрства и ретейнеры' },
        { value: '48ч', label: 'Экономия в неделю', detail: 'Средний показатель после первой сборки' },
      ],
      ctas: {
        primary: 'Собрать решение',
        secondary: 'Познакомиться с командой',
      },
    },
    team: {
      heading: 'Кто работает с вами',
      intro:
        'Команда билдеров, которые всегда готовы учиться, всегда в курсе, каждый день изучают новое и улучшают процессы. Чередуем продуктовые, автоматизационные и Web3-программы — вы работаете напрямую с ядром доставки.',
      members: [
        {
          name: 'Основные билдеры',
          role: 'Продукт · Web3 · Автоматизация',
          bio: 'Computer science образование, 8+ лет пишут код. Увлечены блокчейном и AI. Собирали продукты с автоматизацией в интенсивных сессиях. Всегда учатся, всегда улучшают.',
        },
        {
          name: 'Automation partners',
          role: 'AI и Ops-лиды',
          bio: 'Сеть инженеров по n8n, LangChain, телеметрии и комплаенсу. Постоянно изучают новые паттерны и инструменты. Подключаются точечно и остаются до полного хендовера.',
        },
        {
          name: 'Design & delivery ring',
          role: 'Дизайн · QA · GTM',
          bio: 'Дистрибутивная команда, которая закрывает бренд, продуктовый дизайн, тестирование и запуск. Постоянно улучшают процессы и следят за best practices. Каждая сборка приходит готовой к продакшену.',
        },
      ],
    },
    principles: {
      heading: 'Как мы работаем',
      items: [
        { title: 'Telemetry-first', description: 'Сначала подключаем метрики и логи, чтобы видеть процессы до автоматизации.' },
        { title: 'Дизайн + разработка вместе', description: 'Одна команда ведёт продукт, дизайн и код. Без очередей и прослоек.' },
        { title: 'Автоматизация вместо найма', description: 'Выбираем ботов и AI-агентов, чтобы масштабироваться без новых менеджеров.' },
        { title: 'Вы владеете стеком', description: 'Репозитории, инфраструктура и инструкции передаются сразу. Никакого lock-in.' },
      ],
    },
    toolkit: {
      heading: 'Технологии',
      subheading: 'Next.js, React Native, Solidity, Hardhat, Supabase, Postgres, n8n, LangChain, OpenAI, Airbyte, Stripe, HubSpot, Notion, Framer.',
      items: ['Next.js', 'React Native', 'Solidity', 'Hardhat', 'Supabase', 'Postgres', 'LangChain', 'OpenAI', 'n8n', 'Airbyte', 'Stripe', 'HubSpot', 'Notion', 'Framer'],
    },
    timeline: {
      heading: 'Выборочные релизы',
      cta: 'Смотреть кейс',
      stackLabel: 'Стек',
      impactLabel: 'Результат',
      durationLabel: 'Срок',
      items: [
        {
          year: '2024',
          title: 'Control plane для логистики',
          detail: 'Финансы + поддержка в одном центре. Через 21 день — 0 тикетов в очереди.',
          stack: 'n8n · LangChain · Supabase · HubSpot',
          impact: '-41% расходов · 0 тикетов',
          duration: '21 день',
          link: '/portfolio',
        },
        {
          year: '2024',
          title: 'NFT-реестр дипломов',
          detail: 'Polygon + кастодиальные кошельки. 120K credential-ов с аналитикой и аудитом.',
          stack: 'Polygon · Custodial wallets · Next.js',
          impact: '120K credential-ов',
          duration: '5 недель',
          link: '/portfolio',
        },
        {
          year: '2023',
          title: 'AI-службы поддержки',
          detail: 'WhatsApp и Telegram-консьерж закрывает 87% заявок в трёх странах.',
          stack: 'WhatsApp API · Telegram Bot · GPT-4 · HubSpot',
          impact: '87% тикетов закрывает AI',
          duration: '4 недели',
          link: '/portfolio',
        },
        {
          year: '2023',
          title: 'Сетка лендингов',
          detail: '30+ мультиязычных лендингов для госсектора и публичных запусков.',
          stack: 'Next.js · Supabase · Vercel · Framer Motion',
          impact: '30+ сайтов · 2 недели на партию',
          duration: '3 недели',
          link: '/portfolio',
        },
      ],
    },
    testimonials: {
      heading: 'Что говорят операторы',
      items: [
        {
          quote: 'Rahmet Labs работали как внутренняя спецгруппа. Ops обновили, пока продукт продолжал релизы.',
          author: 'VP Operations, логистическая сеть',
        },
        {
          quote: 'Они быстро собирают, документируют и оставляют дашборды и автоматику в нашем владении.',
          author: 'Growth lead, образовательная платформа',
        },
      ],
    },
    cta: {
      heading: 'Готовы собирать вместе?',
      subheading: 'Расскажите, что болит — соберём продукт, автоматизацию или Web3-трек на созвоне.',
      primary: 'Обсудить задачу',
      secondary: 'Смотреть портфолио',
    },
  },
  kz: {
    hero: {
      badge: 'Rahmet Labs туралы',
      heading: 'Автоматтандыру + full-stack студия.',
      subheading:
        'Шағын сеньор команда веб және мобайл өнімдер, автоматтандыру control plane және Web3 инфрақұрылымын Орталық Азия, Еуропа және Парсы шығанағы командалары үшін жасайды.',
      stats: [
        { value: '50+', label: 'Жүйе іске қосылды', detail: 'Web, Web3, автоматтандыру, дизайн' },
        { value: '100%', label: 'Клиенттер қалады', detail: 'Ұзақ мерзімді серіктестік' },
        { value: '48сағ', label: 'Үнем / апта', detail: 'Алғашқы релизден кейін орташа' },
      ],
      ctas: {
        primary: 'Шешімді жинау',
        secondary: 'Командамен танысу',
      },
    },
    team: {
      heading: 'Сізбен жұмыс істейтіндер',
      intro:
        'Билдерлер командасы — әрдайым үйренуге дайын, әрдайым ағымда, күн сайын үйреніп, жақсартып жатады. Өнім, автоматтандыру және Web3 бағыттарын алмастырамыз — сіз тікелей негізгі командамен жұмыс істейсіз.',
      members: [
        {
          name: 'Негізгі билдерлер',
          role: 'Өнім · Web3 · Автоматтандыру',
          bio: 'Computer science білімі, 8+ жыл код жазады. Блокчейн мен AI-ға құмар. Интенсивті сессияларда автоматтандыруға негізделген өнімдер құрды. Әрдайым үйренеді, әрдайым жақсартады.',
        },
        {
          name: 'Automation partners',
          role: 'AI және Ops-лидерлер',
          bio: 'n8n, LangChain, телеметрия және комплаенс бойынша инженерлер желісі. Тұрақты түрде жаңа паттерндер мен құралдарды үйренеді. Жобаға қосылып, тапсыруға дейін қалады.',
        },
        {
          name: 'Design & delivery ring',
          role: 'Дизайн · QA · GTM',
          bio: 'Бренд, өнім дизайны, тест және запускты жабатын дистрибьютед команда. Тұрақты түрде процестерді жақсартып, best practices-ке сүйенеді. Әр жинақ продакшенге дайын келеді.',
        },
      ],
    },
    principles: {
      heading: 'Қалай жұмыс істейміз',
      items: [
        { title: 'Telemetry-first', description: 'Автоматтандыруға дейін процестерді көру үшін алдымен лог және дашборд орнатамыз.' },
        { title: 'Дизайн мен код бірге', description: 'Өнім, дизайн және инженерлер бір squad-та. Хендовер жоқ.' },
        { title: 'Автоматтандыру > штат', description: 'Боттар мен AI агенттерді таңдаймыз, сондықтан команда өсуі жеңіл.' },
        { title: 'Стек сізге тиесілі', description: 'Репо, инфра және runbook толығымен сізге беріледі.' },
      ],
    },
    toolkit: {
      heading: 'Технологиялар',
      subheading: 'Next.js, React Native, Solidity, Hardhat, Supabase, Postgres, n8n, LangChain, OpenAI, Airbyte, Stripe, HubSpot, Notion, Framer.',
      items: ['Next.js', 'React Native', 'Solidity', 'Hardhat', 'Supabase', 'Postgres', 'LangChain', 'OpenAI', 'n8n', 'Airbyte', 'Stripe', 'HubSpot', 'Notion', 'Framer'],
    },
    timeline: {
      heading: 'Таңдамалы жобалар',
      cta: 'Кейсті көру',
      stackLabel: 'Стек',
      impactLabel: 'Нәтиже',
      durationLabel: 'Уақыты',
      items: [
        {
          year: '2024',
          title: 'Логистикаға арналған control plane',
          detail: 'Қаржы мен қолдауды бір орталыққа біріктірдік. 21 күнде нөл бэклог.',
          stack: 'n8n · LangChain · Supabase · HubSpot',
          impact: '-41% шығын · 0 тикет',
          duration: '21 күн',
          link: '/portfolio',
        },
        {
          year: '2024',
          title: 'NFT диплом реестрі',
          detail: 'Polygon + кастодиалды әмиян. 120K credential аналитикамен және аудитпен.',
          stack: 'Polygon · Custodial wallets · Next.js',
          impact: '120K credential',
          duration: '5 апта',
          link: '/portfolio',
        },
        {
          year: '2023',
          title: 'AI қолдау қызметі',
          detail: 'WhatsApp және Telegram ассистенттері сұраныстың 87%-ын жабады.',
          stack: 'WhatsApp API · Telegram Bot · GPT-4 · HubSpot',
          impact: '87% тикет AI жабады',
          duration: '4 апта',
          link: '/portfolio',
        },
        {
          year: '2023',
          title: 'Көптілді лендинг торы',
          detail: 'Мемлекеттік және қоғамдық релиздер үшін 30+ лендинг.',
          stack: 'Next.js · Supabase · Vercel · Framer Motion',
          impact: '30+ сайт · 2 апта/партия',
          duration: '3 апта',
          link: '/portfolio',
        },
      ],
    },
    testimonials: {
      heading: 'Клиент пікірлері',
      items: [
        {
          quote: 'Rahmet Labs ішкі task force сияқты болды. Олар ops-ты жаңартты, біз релиздерді тоқтатпадық.',
          author: 'Operations VP, логистика компаниясы',
        },
        {
          quote: 'Жылдам жасайды, барлығын құжаттайды және біз басқара алатын дашборд + автоматиканы қалдырады.',
          author: 'Growth lead, білім беру платформасы',
        },
      ],
    },
    cta: {
      heading: 'Бірге жұмыс істеуге дайынсыз ба?',
      subheading: 'Не ауыртатынын айтыңыз — өнім, автоматтандыру немесе Web3 бағытын бір қоңырауда жоспарлаймыз.',
      primary: 'Жобаны талқылау',
      secondary: 'Портфолионы көру',
    },
  },
};

const footerCopy = {
  en: {
    tagline: 'We build what you need, automate what you hate.',
    label: 'Quick links',
    quickLinks: ['Services', 'About', 'Work', 'Contact'],
    copyright: 'All rights reserved.',
    builtWith: 'Built with Next.js, React, and Framer Motion',
  },
  ru: {
    tagline: 'Строим нужное, автоматизируем рутину.',
    label: 'Разделы',
    quickLinks: ['Услуги', 'О нас', 'Проекты', 'Контакт'],
    copyright: 'Все права защищены.',
    builtWith: 'Сделано на Next.js, React и Framer Motion',
  },
  kz: {
    tagline: 'Қажеттісін құрамыз, қажетсізін автоматтандырамыз.',
    label: 'Жылдам сілтемелер',
    quickLinks: ['Қызметтер', 'Біз туралы', 'Жобалар', 'Байланыс'],
    copyright: 'Барлық құқықтар қорғалған.',
    builtWith: 'Next.js, React және Framer Motion арқылы жасалған',
  },
};

const seoCopy = {
  en: {
    title: 'Rahmet Labs | Automation, AI & Web3 Product Studio',
    description: 'We build automation control planes, AI agents, web3 experiences, and full-stack products for B2B & B2C teams.',
    keywords: 'automation agency, ai studio, web3 product team, next.js agency, n8n experts',
    ogLocale: 'en_US',
    url: 'https://rahmetlabs.com/?lang=en',
    image: '/og-image.png',
    twitterCard: 'summary_large_image',
  },
  ru: {
    title: 'Rahmet Labs | Автоматизация, AI и Web3-продукты',
    description: 'Собираем control plane, AI-агентов, web3-опыт и full-stack продукты для B2B и B2C команд.',
    keywords: 'автоматизация, ai студия, web3 агентство, next.js разработка, n8n эксперты',
    ogLocale: 'ru_RU',
    url: 'https://rahmetlabs.com/?lang=ru',
    image: '/og-image.png',
    twitterCard: 'summary_large_image',
  },
  kz: {
    title: 'Rahmet Labs | Автоматтандыру және AI студиясы',
    description: 'Automation control plane, AI агенттері, web3 және full-stack өнімдерді бірнеше аптада жеткіземіз.',
    keywords: 'автоматтандыру агенттігі, ai студиясы, web3 өнімдері, next.js агенттігі, n8n сарапшылары',
    ogLocale: 'kk_KZ',
    url: 'https://rahmetlabs.com/?lang=kk',
    image: '/og-image.png',
    twitterCard: 'summary_large_image',
  },
};

const servicesPageCopy = {
  en: {
    label: 'Services',
    heading: 'What we build',
    subheading: 'From simple, professionally working landings to full-scale apps — web/mobile products, automation, AI, and Web3 infrastructure. One team ships everything.',
    cta: 'Discuss your project',
    ctaText: 'Tell us what you need — we\'ll map the solution and timeline in one call.',
    useCases: {
      heading: 'COMMON USE CASES',
      subheading: 'What teams build with us',
      items: [
        {
          title: 'E-commerce automation',
          description: 'Order processing, inventory sync, customer support bots, and payment flows.',
          examples: ['Shopify → ERP integration', 'WhatsApp order tracking', 'AI customer support'],
        },
        {
          title: 'SaaS platform builds',
          description: 'Full-stack SaaS with dashboards, user management, and subscription handling.',
          examples: ['Next.js admin panels', 'Stripe subscriptions', 'Multi-tenant architecture'],
        },
        {
          title: 'Web3 infrastructure',
          description: 'Smart contracts, NFT platforms, DeFi integrations, and blockchain automation.',
          examples: ['NFT minting platforms', 'Token vesting systems', 'Cross-chain bridges'],
        },
        {
          title: 'Business process automation',
          description: 'CRM/ERP sync, finance workflows, compliance tracking, and reporting.',
          examples: ['HubSpot → 1C sync', 'Automated invoicing', 'Compliance dashboards'],
        },
        {
          title: 'AI-powered tools',
          description: 'AI agents, content generation, data analysis, and intelligent automation.',
          examples: ['AI support desks', 'Content generation pipelines', 'Data analysis bots'],
        },
        {
          title: 'Marketing automation',
          description: 'Lead capture, email sequences, social media bots, and analytics.',
          examples: ['Landing page funnels', 'Telegram marketing bots', 'Lead scoring systems'],
        },
      ],
    },
    builder: {
      title: 'Solution constructor',
      subtitle: 'Build a stack like you spec a Porsche—choose the base, add performance packs, send us the scope.',
      primaryHeading: 'Step 1 · Choose a base program',
      primarySubheading: 'Pick the closest launch package; we tailor depth, data, and integrations on the call.',
      modulesHeading: 'Step 2 · Add acceleration packs',
      summaryHeading: 'Step 3 · Snapshot',
      emptyState: 'Toggle modules to see what we stitch into the base.',
      totalLabel: 'Starting budget',
      modulesSubtotalLabel: 'Modules starting from',
      timelineLabel: 'Typical timeline',
      timelineUnit: 'weeks',
      timelineUnitShort: 'wks',
      baseLabel: 'Base program',
      recommendedLabel: 'Recommended',
      slotsLabel: '2 build slots left this month',
      startingLabel: 'From',
      disclaimer: 'Figures shown are ballpark. Final scope depends on integrations, compliance, and the data layer we inherit.',
      actions: {
        reset: 'Clear selection',
        contact: 'Send this scope',
      },
      currency: 'USD',
      locale: 'en-US',
      primaryOptions: [
        {
          id: 'automation',
          badge: 'AUTOMATION',
          name: 'Automation control plane',
          description: 'Support, finance, and ops telemetry with bots, runbooks, and observability.',
          price: 12000,
          weeks: 4,
          timelineText: '3–5 weeks',
          recommended: ['automation', 'crmBridge', 'supportBots', 'dataPlane'],
          examples: ['Support desk autopilot', 'Finance close copilot', 'Escalation playbooks'],
        },
        {
          id: 'product',
          badge: 'PRODUCT',
          name: 'Full-stack product / web',
          description: 'Next.js landings, SaaS dashboards, and launch tooling for growth teams.',
          price: 6500,
          weeks: 3,
          timelineText: '2–3 weeks',
          recommended: ['landing', 'dataPlane', 'crmBridge'],
          examples: ['GTM landing grid', 'Internal ops console', 'Investor dashboard'],
        },
        {
          id: 'ai',
          badge: 'AI PLATFORM',
          name: 'AI platform & copilots',
          description: 'Multi-model AI stack with agents, knowledge bases, and support automation.',
          price: 9800,
          weeks: 3.5,
          timelineText: '3–4 weeks',
          recommended: ['aiAgents', 'supportBots', 'dataPlane'],
          examples: ['AI concierge', 'Ops copilots', 'Knowledge graph'],
        },
        {
          id: 'web3',
          badge: 'WEB3 / NFT',
          name: 'Web3 / NFT launchpad',
          description: 'Smart contracts, NFT credentials, and dashboards across BSC / ETH / Polygon.',
          price: 11000,
          weeks: 4.5,
          timelineText: '4–5 weeks',
          recommended: ['smartContracts', 'nftPlatform', 'landing'],
          examples: ['NFT diploma registry', 'DeFi dashboard', 'Token utility playbooks'],
        },
      ],
      modules: [
        {
          id: 'landing',
          badge: 'LANDINGS',
          name: 'Landing system',
          description: 'Multi-landing Next.js + CMS stack with analytics and CRM piping.',
          price: 1800,
          weeks: 1,
          timelineText: '1 week',
          examples: ['Founder landing trio', 'Gov info portal'],
        },
        {
          id: 'automation',
          badge: 'AUTOMATION',
          name: 'Automation suite',
          description: 'n8n, scripts, and dashboards to remove repetitive workflows.',
          price: 4200,
          weeks: 2,
          timelineText: '1–2 weeks',
          examples: ['Ticket triage', 'Finance reconciliation'],
        },
        {
          id: 'aiAgents',
          badge: 'AI AGENTS',
          name: 'AI agent layer',
          description: 'Multi-agent orchestration for ops, finance, and support signals.',
          price: 5200,
          weeks: 2,
          timelineText: '2 weeks',
          examples: ['Collections copilot', 'QA assistant'],
        },
        {
          id: 'smartContracts',
          badge: 'WEB3',
          name: 'Smart contracts',
          description: 'BSC / Ethereum contracts with automated testing and monitoring.',
          price: 6000,
          weeks: 3,
          timelineText: '3 weeks',
          examples: ['Token + vesting', 'Staking rewards'],
        },
        {
          id: 'nftPlatform',
          badge: 'NFT',
          name: 'NFT diploma platform',
          description: 'Issuance dashboard, wallet hub, and verification portal for universities.',
          price: 4800,
          weeks: 2.5,
          timelineText: '2–3 weeks',
          examples: ['University credentials', 'Membership passes'],
        },
        {
          id: 'supportBots',
          badge: 'SUPPORT',
          name: 'Support bots',
          description: '24/7 multilingual chatbots with AI replies and agent handoff.',
          price: 2600,
          weeks: 1.5,
          timelineText: '1–2 weeks',
          examples: ['WhatsApp concierge', 'AI tier-1 support'],
        },
        {
          id: 'dataPlane',
          badge: 'DATA',
          name: 'Ops command plane',
          description: 'Telemetry mesh with dashboards, alerts, and AI summaries.',
          price: 3500,
          weeks: 2,
          timelineText: '2 weeks',
          examples: ['Exec control tower', 'Realtime revenue board'],
        },
        {
          id: 'crmBridge',
          badge: 'SYNC',
          name: 'CRM ↔ ERP bridge',
          description: 'Custom APIs syncing finance, CRM, and support stacks with guardrails.',
          price: 2400,
          weeks: 1,
          timelineText: '1 week',
          examples: ['HubSpot → 1C sync', 'Zendesk ↔ ERP'],
        },
      ],
    },
    proof: {
      heading: 'What the builds deliver',
      subheading: 'A few fast wins teams got after handing us their ops.',
      items: [
        { title: 'Ops command tower', stat: '-41% ops cost', detail: 'Automation control plane for a logistics network (21 days).' },
        { title: 'NFT diploma registry', stat: '120K credentials', detail: 'University NFT issuance platform across Polygon + custodial wallets.' },
        { title: 'Support AI desk', stat: '87% tickets deflected', detail: 'Multilingual WhatsApp + web concierge with escalation to HubSpot.' },
      ],
    },
    engagement: {
      heading: 'Engagement styles',
      subheading: 'Pick the operating model that fits how you ship.',
      plans: [
        { title: 'Sprint', price: 'from $5K', bullets: ['1-2 week bursts', 'Single objective', 'Access to builder + quick wins'], cta: 'Book sprint', highlight: 'Best for validations' },
        { title: 'Launch', price: 'from $15K', bullets: ['4-6 week engagement', 'Dedicated squad', 'Full stack + automation'], cta: 'Plan launch', highlight: 'Full product/ops build' },
        { title: 'Ops partner', price: 'Custom', bullets: ['Quarterly retainer', 'Roadmap + support', '24/7 monitoring & improvements'], cta: 'Talk retainers', highlight: 'Embedded autonomy team' },
      ],
    },
    faq: {
      heading: 'FAQ & buying signals',
      items: [
        { question: 'How fast can you start?', answer: 'Diagnostics for most scopes kick off within 5 business days. We reserve no more than 2 concurrent builds per month.' },
        { question: 'Do you white-label or embed with our team?', answer: 'Yes. We can ship under your brand, embed in Slack/Notion, and hand over playbooks and repos with zero vendor lock-in.' },
        { question: 'What happens after launch?', answer: 'Every build ships with dashboards, runbooks, and office hours. We can stay on retainer or train your team to own it.' },
      ],
    },
    proof: {
      heading: 'Что получили команды',
      subheading: 'Несколько коротких результатов после наших сборок.',
      items: [
        { title: 'Командный центр Ops', stat: '-41% расходов', detail: 'Control plane для логистической сети — внедрение за 21 день.' },
        { title: 'NFT-реестр дипломов', stat: '120K credentials', detail: 'Университетская платформа выдачи NFT на Polygon с кастодиальными кошельками.' },
        { title: 'AI-поддержка', stat: '87% тикетов закрывает ИИ', detail: 'Мультиязычный WhatsApp + веб-консьерж с эскалацией в HubSpot.' },
      ],
    },
    engagement: {
      heading: 'Форматы работы',
      subheading: 'Подберите модель, которая совпадает с вашей скоростью.',
      plans: [
        { title: 'Спринт', price: 'от $5K', bullets: ['1–2 недели', 'Одна цель', 'Конструктор + быстрые решения'], cta: 'Забронировать спринт', highlight: 'Идеально для гипотез' },
        { title: 'Запуск', price: 'от $15K', bullets: ['4–6 недель', 'Выделенная команда', 'Full-stack + автоматизация'], cta: 'Запланировать запуск', highlight: 'Продукт / control plane' },
        { title: 'Партнёрство', price: 'Custom', bullets: ['Квартальный ретейнер', 'Дорожная карта + поддержка', '24/7 мониторинг и улучшения'], cta: 'Обсудить ретейнер', highlight: 'Постоянное сопровождение' },
      ],
    },
    faq: {
      heading: 'FAQ и сигналы покупки',
      items: [
        { question: 'Как быстро вы стартуете?', answer: 'Диагностику запускаем в течение 5 рабочих дней. Не берём больше двух параллельных сборок в месяц.' },
        { question: 'Вы работаете white-label?', answer: 'Да. Можем собирать “под ключ”, работать из вашего Slack/Notion и передать все артефакты без vendor lock-in.' },
        { question: 'Что после релиза?', answer: 'Передаём дашборды, runbook-и и проводим office hours. Можем остаться на ретейнере или обучить вашу команду.' },
      ],
    },
  },
  ru: {
    label: 'Услуги',
    heading: 'Что мы делаем',
    subheading: 'От простых, профессионально работающих лендингов до полноценных приложений — веб и мобильные продукты, автоматизация, AI и Web3-инфраструктура. Одна команда ведёт всё.',
    cta: 'Обсудить задачу',
    ctaText: 'Расскажите, что нужно — соберём решение и сроки на одном созвоне.',
    useCases: {
      heading: 'ТИПИЧНЫЕ ЗАДАЧИ',
      subheading: 'Что собирают с нами',
      items: [
        {
          title: 'E-commerce автоматизация',
          description: 'Обработка заказов, синхронизация склада, боты поддержки и платежи.',
          examples: ['Shopify → ERP интеграция', 'WhatsApp отслеживание заказов', 'AI-поддержка клиентов'],
        },
        {
          title: 'SaaS-платформы',
          description: 'Full-stack SaaS с дашбордами, управлением пользователями и подписками.',
          examples: ['Next.js админ-панели', 'Stripe подписки', 'Multi-tenant архитектура'],
        },
        {
          title: 'Web3-инфраструктура',
          description: 'Смарт-контракты, NFT-платформы, DeFi интеграции и блокчейн-автоматизация.',
          examples: ['NFT minting платформы', 'Token vesting системы', 'Cross-chain мосты'],
        },
        {
          title: 'Автоматизация бизнес-процессов',
          description: 'CRM/ERP синхронизация, финансовые процессы, комплаенс и отчёты.',
          examples: ['HubSpot → 1C синхронизация', 'Автоматические счета', 'Compliance дашборды'],
        },
        {
          title: 'AI-инструменты',
          description: 'AI-агенты, генерация контента, анализ данных и интеллектуальная автоматизация.',
          examples: ['AI-службы поддержки', 'Контент-пайплайны', 'Боты для анализа данных'],
        },
        {
          title: 'Маркетинговая автоматизация',
          description: 'Захват лидов, email-последовательности, соцсети-боты и аналитика.',
          examples: ['Лендинг-воронки', 'Telegram маркетинг-боты', 'Lead scoring системы'],
        },
      ],
    },
    builder: {
      title: 'Конструктор решения',
      subtitle: 'Как в премиальном автосалоне: выбираем базу, добавляем пакеты, отправляем scope и заводим сборку.',
      primaryHeading: 'Шаг 1 · Выберите базовую программу',
      primarySubheading: 'Отметьте сценарий, к которому ближе всего ваша задача — глубину и интеграции уточним на созвоне.',
      modulesHeading: 'Шаг 2 · Добавьте акселераторы',
      summaryHeading: 'Шаг 3 · Снэпшот',
      emptyState: 'Подключайте модули, чтобы увидеть, что можно докрутить поверх базы.',
      totalLabel: 'Бюджет от',
      modulesSubtotalLabel: 'Модули от',
      timelineLabel: 'Типовой срок',
      timelineUnit: 'недель',
      timelineUnitShort: 'нед.',
      baseLabel: 'Базовый пакет',
      recommendedLabel: 'Рекомендуем',
      slotsLabel: 'Свободно 2 слота в этом месяце',
      startingLabel: 'От',
      disclaimer: 'Цифры ориентировочные. Итог зависит от интеграций, комплаенса и качества данных, которые мы наследуем.',
      actions: {
        reset: 'Очистить выбор',
        contact: 'Отправить scope',
      },
      currency: 'USD',
      locale: 'ru-RU',
      primaryOptions: [
        {
          id: 'automation',
          badge: 'AUTOMATION',
          name: 'Control plane автоматизации',
          description: 'Саппорт, финансы и операции с телеметрией, ботами и плейбуками.',
          price: 12000,
          weeks: 4,
          timelineText: '3–5 недель',
          recommended: ['automation', 'crmBridge', 'supportBots', 'dataPlane'],
          examples: ['Автопилот поддержки', 'Финансовый copilot', 'Эскалационные плейбуки'],
        },
        {
          id: 'product',
          badge: 'PRODUCT',
          name: 'Full-stack продукт / веб',
          description: 'Next.js лендинги, SaaS-дашборды и интеграции для роста.',
          price: 6500,
          weeks: 3,
          timelineText: '2–3 недели',
          recommended: ['landing', 'dataPlane', 'crmBridge'],
          examples: ['Сетка лендингов', 'Внутренний ops-консоль', 'Investor dashboard'],
        },
        {
          id: 'ai',
          badge: 'AI PLATFORM',
          name: 'AI платформа и копилоты',
          description: 'Мультимодальные агенты, база знаний и автоматизация поддержки.',
          price: 9800,
          weeks: 3.5,
          timelineText: '3–4 недели',
          recommended: ['aiAgents', 'supportBots', 'dataPlane'],
          examples: ['AI-консьерж', 'Ops copilot', 'Knowledge graph'],
        },
        {
          id: 'web3',
          badge: 'WEB3 / NFT',
          name: 'Web3 / NFT запуск',
          description: 'Смарт-контракты, NFT-дипломы и дашборды на BSC / ETH / Polygon.',
          price: 11000,
          weeks: 4.5,
          timelineText: '4–5 недель',
          recommended: ['smartContracts', 'nftPlatform', 'landing'],
          examples: ['NFT-реестр дипломов', 'DeFi-дэшборд', 'Utility-токен'],
        },
      ],
      modules: [
        {
          id: 'landing',
          badge: 'LANDINGS',
          name: 'Система лендингов',
          description: 'Пакет Next.js + CMS с аналитикой и интеграциями в CRM.',
          price: 1800,
          weeks: 1,
          timelineText: '1 неделя',
          examples: ['Три лендинга для фаундера', 'Госпортал'],
        },
        {
          id: 'automation',
          badge: 'AUTOMATION',
          name: 'Automation suite',
          description: 'n8n, скрипты и дашборды, убирающие ручные процессы.',
          price: 4200,
          weeks: 2,
          timelineText: '1–2 недели',
          examples: ['Триаж тикетов', 'Сверка финансов'],
        },
        {
          id: 'aiAgents',
          badge: 'AI AGENTS',
          name: 'Слой AI-агентов',
          description: 'Мультиагентная оркестрация для оперирования финансами и поддержкой.',
          price: 5200,
          weeks: 2,
          timelineText: '2 недели',
          examples: ['Collections copilot', 'QA-ассистент'],
        },
        {
          id: 'smartContracts',
          badge: 'WEB3',
          name: 'Смарт-контракты',
          description: 'BSC / Ethereum контракты с автотестами и мониторингом.',
          price: 6000,
          weeks: 3,
          timelineText: '3 недели',
          examples: ['Токен + вестинг', 'Staking rewards'],
        },
        {
          id: 'nftPlatform',
          badge: 'NFT',
          name: 'Платформа NFT-дипломов',
          description: 'Кабинет выдачи, кошельки студентов и портал проверки.',
          price: 4800,
          weeks: 2.5,
          timelineText: '2–3 недели',
          examples: ['Университетские credentials', 'Membership-пасс'],
        },
        {
          id: 'supportBots',
          badge: 'SUPPORT',
          name: 'Боты поддержки',
          description: '24/7 мультиязычные боты с AI-ответами и передачей оператору.',
          price: 2600,
          weeks: 1.5,
          timelineText: '1–2 недели',
          examples: ['WhatsApp-консьерж', 'Tier-1 AI'],
        },
        {
          id: 'dataPlane',
          badge: 'DATA',
          name: 'Командный центр',
          description: 'Телеметрия, дашборды, алерты и AI-сводки по всем системам.',
          price: 3500,
          weeks: 2,
          timelineText: '2 недели',
          examples: ['Exec control tower', 'Realtime revenue board'],
        },
        {
          id: 'crmBridge',
          badge: 'SYNC',
          name: 'Мост CRM ↔ ERP',
          description: 'Кастомные API и n8n, синхронизирующие финансы, CRM и поддержку.',
          price: 2400,
          weeks: 1,
          timelineText: '1 неделя',
          examples: ['HubSpot → 1C', 'Zendesk ↔ ERP'],
        },
      ],
    },
  },
  kz: {
    label: 'Қызметтер',
    heading: 'Біз не құрамыз',
    subheading: 'Қарапайым, кәсіби жұмыс істейтін лендингтерден толық көлемді қолданбаларға дейін — веб/мобайл өнімдер, автоматтандыру, AI және Web3 инфрақұрылымы. Бір команда барлығын жеткізеді.',
    cta: 'Жобаны талқылау',
    ctaText: 'Қажет нәрсені айтыңыз — бір қоңырауда шешім мен мерзімді құрастырамыз.',
    useCases: {
      heading: 'ТИПТІК ТАПСЫРМАЛАР',
      subheading: 'Бізбен не құрайды',
      items: [
        {
          title: 'E-commerce автоматтандыру',
          description: 'Тапсырыс өңдеу, қойма синхронизациясы, қолдау боттары және төлем ағындары.',
          examples: ['Shopify → ERP интеграция', 'WhatsApp тапсырыс бақылау', 'AI клиент қолдауы'],
        },
        {
          title: 'SaaS платформалар',
          description: 'Full-stack SaaS дашбордтар, пайдаланушы басқаруы және жазылымдармен.',
          examples: ['Next.js админ-панельдер', 'Stripe жазылымдар', 'Multi-tenant архитектура'],
        },
        {
          title: 'Web3 инфрақұрылым',
          description: 'Смарт-келісімдер, NFT платформалар, DeFi интеграциялар және блокчейн автоматтандыру.',
          examples: ['NFT minting платформалар', 'Token vesting жүйелер', 'Cross-chain көпірлер'],
        },
        {
          title: 'Бизнес-процестерді автоматтандыру',
          description: 'CRM/ERP синхронизация, қаржы ағындары, комплаенс және есептер.',
          examples: ['HubSpot → 1C синхронизация', 'Автоматты шот-фактуралар', 'Compliance дашбордтар'],
        },
        {
          title: 'AI-құралдар',
          description: 'AI-агенттер, контент генерациясы, деректерді талдау және интеллектуалды автоматтандыру.',
          examples: ['AI қолдау қызметтері', 'Контент пайплайндар', 'Деректерді талдау боттары'],
        },
        {
          title: 'Маркетинг автоматтандыру',
          description: 'Лидтерді жинау, email тізбектер, әлеуметтік желі боттары және аналитика.',
          examples: ['Лендинг воронкалар', 'Telegram маркетинг боттары', 'Lead scoring жүйелер'],
        },
      ],
    },
    builder: {
      title: 'Шешім конструкторы',
      subtitle: 'Премиум авто сияқты: базаны таңдаңыз, пакеттерді қосыңыз, scope жіберіңіз.',
      primaryHeading: '1-қадам · Базалық бағдарламаны таңдаңыз',
      primarySubheading: 'Сценарийді белгілеңіз, қалғанын алғашқы қоңырауда нақтылаймыз.',
      modulesHeading: '2-қадам · Акселератор пакеттері',
      summaryHeading: '3-қадам · Snapshot',
      emptyState: 'Модульдерді қосып, базаны қалай кеңейтетінімізді көріңіз.',
      totalLabel: 'Бюджет (от)',
      modulesSubtotalLabel: 'Модульдер (от)',
      timelineLabel: 'Типтік мерзім',
      timelineUnit: 'апта',
      timelineUnitShort: 'апт.',
      baseLabel: 'Базалық пакет',
      recommendedLabel: 'Ұсынылады',
      slotsLabel: 'Осы айда 2 орын бос',
      startingLabel: 'От',
      disclaimer: 'Мұнда жуық сандар. Нақты баға интеграцияларға, комплаенске және деректер сапасына байланысты.',
      actions: {
        reset: 'Тазарту',
        contact: 'Scope жіберу',
      },
      currency: 'USD',
      locale: 'kk-KZ',
      primaryOptions: [
        {
          id: 'automation',
          badge: 'AUTOMATION',
          name: 'Автоматтандыру control plane',
          description: 'Саппорт, қаржы және операция телеметриясы, боттар және плейбуктар.',
          price: 12000,
          weeks: 4,
          timelineText: '3–5 апта',
          recommended: ['automation', 'crmBridge', 'supportBots', 'dataPlane'],
          examples: ['Қолдау автопилоты', 'Қаржы copilot', 'Эскалация playbook'],
        },
        {
          id: 'product',
          badge: 'PRODUCT',
          name: 'Full-stack өнім / веб',
          description: 'Next.js лендингтері, SaaS дэшбордтары және launch құралдары.',
          price: 6500,
          weeks: 3,
          timelineText: '2–3 апта',
          recommended: ['landing', 'dataPlane', 'crmBridge'],
          examples: ['GTM лендинг пакеті', 'Ішкі ops-консоль', 'Investor dashboard'],
        },
        {
          id: 'ai',
          badge: 'AI PLATFORM',
          name: 'AI платформа және копилоттар',
          description: 'Көп модельді агенттер, knowledge base және қолдау автоматтандыру.',
          price: 9800,
          weeks: 3.5,
          timelineText: '3–4 апта',
          recommended: ['aiAgents', 'supportBots', 'dataPlane'],
          examples: ['AI concierge', 'Ops copilot', 'Knowledge graph'],
        },
        {
          id: 'web3',
          badge: 'WEB3 / NFT',
          name: 'Web3 / NFT платформасы',
          description: 'BSC / ETH / Polygon желілеріндегі смарт-келісімдер, NFT дипломдар және дэшбордтар.',
          price: 11000,
          weeks: 4.5,
          timelineText: '4–5 апта',
          recommended: ['smartContracts', 'nftPlatform', 'landing'],
          examples: ['NFT диплом реестрі', 'DeFi дэшборд', 'Token utility'],
        },
      ],
      modules: [
        {
          id: 'landing',
          badge: 'Лендингтер',
          name: 'Лендинг жүйесі',
          description: 'Next.js + CMS, аналитика және CRM интеграцияларымен.',
          price: 1800,
          weeks: 1,
          timelineText: '1 апта',
          examples: ['Фаундерге 3 лендинг', 'Мемлекеттік портал'],
        },
        {
          id: 'automation',
          badge: 'Автоматтандыру',
          name: 'Automation suite',
          description: 'n8n, скрипттер және дэшбордтар қол процестерін жояды.',
          price: 4200,
          weeks: 2,
          timelineText: '1–2 апта',
          examples: ['Тикет триажы', 'Қаржы салыстыруы'],
        },
        {
          id: 'aiAgents',
          badge: 'AI агенттер',
          name: 'AI агент қабаты',
          description: 'Операция, қаржы және қолдау процестерін мультиагент оркестрациялайды.',
          price: 5200,
          weeks: 2,
          timelineText: '2 апта',
          examples: ['Collections copilot', 'QA ассистент'],
        },
        {
          id: 'smartContracts',
          badge: 'Web3',
          name: 'Смарт-келісімдер',
          description: 'BSC / Ethereum келісімдері автотест пен мониторингпен.',
          price: 6000,
          weeks: 3,
          timelineText: '3 апта',
          examples: ['Token + vesting', 'Staking rewards'],
        },
        {
          id: 'nftPlatform',
          badge: 'NFT',
          name: 'NFT диплом платформасы',
          description: 'Университетке арналған беру кабинеті, әмияндар және тексеру порталы.',
          price: 4800,
          weeks: 2.5,
          timelineText: '2–3 апта',
          examples: ['Білім credential-дері', 'Membership pass'],
        },
        {
          id: 'supportBots',
          badge: 'Қолдау',
          name: 'Қолдау боттары',
          description: '24/7 көптілді боттар AI жауаптарымен және операторға берумен.',
          price: 2600,
          weeks: 1.5,
          timelineText: '1–2 апта',
          examples: ['WhatsApp concierge', 'Tier-1 AI'],
        },
        {
          id: 'dataPlane',
          badge: 'Деректер',
          name: 'Командалық орталық',
          description: 'Телеметрия, дэшбордтар, алерттер және AI қорытындылары.',
          price: 3500,
          weeks: 2,
          timelineText: '2 апта',
          examples: ['Exec control tower', 'Realtime revenue board'],
        },
        {
          id: 'crmBridge',
          badge: 'Синхрондау',
          name: 'CRM ↔ ERP көпірі',
          description: 'Қаржы, CRM және қолдауды синхрондайтын кастом API және n8n.',
          price: 2400,
          weeks: 1,
          timelineText: '1 апта',
          examples: ['HubSpot → 1C', 'Zendesk ↔ ERP'],
        },
      ],
    },
    proof: {
      heading: 'Жеткізілген нәтижелер',
      subheading: 'Командалар бізбен жұмыс істегеннен кейінгі қысқа мысалдар.',
      items: [
        { title: 'Ops командалық орталығы', stat: '-41% шығын', detail: 'Логистика желісіне арналған control plane — 21 күнде.' },
        { title: 'NFT диплом платформасы', stat: '120K credential', detail: 'Университеттер үшін Polygon негізіндегі NFT беру жүйесі.' },
        { title: 'AI қолдау үстелі', stat: '87% тикет AI', detail: 'Көптілді WhatsApp + веб-консьерж, HubSpot-қа эскалация.' },
      ],
    },
    engagement: {
      heading: 'Жұмыс форматы',
      subheading: 'Сіздің қарқыныңызға сай модельді таңдаңыз.',
      plans: [
        { title: 'Спринт', price: '$5K бастап', bullets: ['1–2 апта', 'Бір мақсат', 'Конструктор + жедел жеңістер'], cta: 'Спринтке жазылу', highlight: 'Гипотезаны тексеру' },
        { title: 'Launch', price: '$15K бастап', bullets: ['4–6 апта', 'Арнайы команда', 'Full-stack + автоматтандыру'], cta: 'Launch жоспарлау', highlight: 'Өнім / control plane' },
        { title: 'Ops серіктес', price: 'Custom', bullets: ['Тоқсандық ретейнер', 'Roadmap + қолдау', '24/7 мониторинг'], cta: 'Ретейнер талқылау', highlight: 'Үздіксіз сүйемелдеу' },
      ],
    },
    faq: {
      heading: 'FAQ және сигналдар',
      items: [
        { question: 'Қаншалықты тез бастайсыздар?', answer: 'Көпшілік scope үшін диагностика 5 жұмыс күні ішінде басталады. Айына 2 жобадан артық алмаймыз.' },
        { question: 'White-label форматында жұмыс істейсіздер ме?', answer: 'Иә. Slack/Notion-да ендіріліп, барлық артефакттарды vendor lock-inсыз тапсырамыз.' },
        { question: 'Релизден кейін не болады?', answer: 'Дэшбордтар, runbook және office hours өткіземіз. Ретейнер ретінде қала аламыз немесе команданы оқытамыз.' },
      ],
    },
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
    about: aboutPageCopy[locale],
    seo: seoCopy[locale],
  };
}

export const translations = {
  en: buildDictionary('en'),
  ru: buildDictionary('ru'),
  kz: buildDictionary('kz'),
};

