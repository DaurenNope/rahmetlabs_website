// Rahmet Labs — site content, curated per PRODUCT.md: no fabricated stats,
// no invented testimonials, no invented metrics. Live work carries real links.
// Languages: EN / RU / KZ.

const en = {
  meta: {
    home: {
      title: 'Rahmet Labs — Automation, AI & Product Engineering Studio',
      description:
        'Rahmet Labs replaces manual operations with automation, AI systems, and engineered products — built and run by one accountable team, from Almaty to the Gulf.',
      keywords: ['automation studio', 'AI development', 'business automation', 'Next.js agency', 'web3 development', 'full-stack development'],
    },
    services: {
      title: 'Services — Automation, AI, Web, Mobile & Web3 | Rahmet Labs',
      description: 'Five functions, one accountable team: business automation, AI agents, web & mobile products, backend & data, and delivery & operations.',
      keywords: ['automation services', 'AI agents', 'web development services', 'mobile app development'],
    },
    portfolio: {
      title: 'Work — Systems We Have Shipped | Rahmet Labs',
      description: 'A sample of automation, AI, web, and Web3 systems Rahmet Labs has shipped — with live links where they exist.',
      keywords: ['portfolio', 'automation projects', 'AI projects', 'web3 projects'],
    },
    about: {
      title: 'About Rahmet Labs — The Team That Builds Your Systems',
      description: 'Rahmet Labs is a small senior team building automation, AI, web/mobile, and Web3 systems — the people who scope your project are the people who build it.',
      keywords: ['about rahmet labs', 'product studio', 'automation team'],
    },
    contact: {
      title: 'Contact Rahmet Labs — Start a Project',
      description: 'Tell us what is manual today. Reach Rahmet Labs directly by WhatsApp, Telegram, or email.',
      keywords: ['contact automation studio', 'start a project', 'hire automation team'],
    },
  },

  facts: {
    whatWeDo:
      'Rahmet Labs is a full-stack technology studio that builds business automation, AI systems, web and mobile products, and Web3 infrastructure for companies replacing manual operations with software.',
    whoFor:
      'Founders, operations leaders, and technical teams who need one accountable partner instead of separate freelancers for strategy, automation, and engineering.',
    basedIn: 'Rahmet Labs is based in Kazakhstan and works with clients across Central Asia, Europe, and the Gulf.',
  },

  nav: {
    wordmark: 'RAHMET LABS',
    closeWordmark: 'RL',
    links: [
      { label: 'Work', href: '/portfolio' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
    ],
    cta: 'Start a project',
    menuLabel: 'Menu',
    closeLabel: 'Close',
  },

  hero: {
    kicker: 'Rahmet Labs — Automation, AI & Product Engineering',
    line1: 'Your business',
    line2: 'is drowning in',
    line2Accent: 'manual work.',
    line3: 'We build',
    line3Accent: 'the systems',
    line3Tail: 'that end it.',
    subheadline:
      'One senior team designs, ships, and operates the automation and AI that replace your spreadsheets, copy-paste routines, and follow-up threads — software that runs the busywork so your people run the business.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See the work',
    supportingLabel: 'One accountable team · EN / RU / KZ',
    supportingChannels: 'WhatsApp · Telegram · Email',
    scrollLabel: 'Scroll',
  },

  thread: {
    chapters: [
      {
        key: '01',
        title: 'The work is invisible — until it breaks.',
        lead: 'Someone copies numbers into a spreadsheet. Someone remembers to send the invoice. Someone checks the tender portal at midnight. None of it is in a system; all of it is in somebody’s head.',
        detail: 'Hiring more people grows the chaos, not the capacity.',
      },
      {
        key: '02',
        title: 'It doesn’t need heroic effort. It needs a system.',
        lead: 'Most of what your team does by hand is a repeatable pattern: watch, compare, copy, decide, send. Repeatable patterns are exactly what software is for.',
        detail: 'The issue is never effort — it’s architecture.',
      },
      {
        key: '03',
        title: 'That system is what we build.',
        lead: 'Automation that runs itself, AI that reads and decides, products your clients actually use — designed, shipped, and operated by one accountable team.',
        detail: 'Scroll on. This is the whole pitch.',
      },
    ],
  },

  whatWeBuild: {
    kicker: 'What we build',
    heading: 'One studio, every layer of the system.',
    subheading:
      'Strategy, automation, AI, and engineering under one roof — so nothing gets lost between a consultant’s deck and a developer’s backlog.',
    categories: [
      {
        id: 'automation',
        title: 'Business Automation',
        tagline: 'Kill the copy-paste',
        description:
          'Workflows that run without a human in the loop: approvals, invoicing, reporting, tender monitoring, CRM↔ERP sync.',
        capabilities: ['Workflow automation (n8n, Make)', 'System & API integration', 'Ops dashboards & alerting', 'Browser & data automation'],
      },
      {
        id: 'ai',
        title: 'AI Systems',
        tagline: 'AI that reads, decides, acts',
        description:
          'AI wired into real operations — agents, RAG over your own data, content pipelines — not a demo chatbot.',
        capabilities: ['AI agents & assistants', 'RAG over private data', 'Content generation pipelines', 'Matching, scoring & routing'],
      },
      {
        id: 'product',
        title: 'Web & Mobile Products',
        tagline: 'Software clients actually use',
        description:
          'From multilingual marketing systems to full SaaS platforms and mobile apps — designed, built, and shipped end to end.',
        capabilities: ['Web apps & SaaS platforms', 'Mobile apps (React Native)', 'CMS-driven sites & editors', 'Booking & member areas'],
      },
      {
        id: 'backend',
        title: 'Backend & Data',
        tagline: 'The plumbing that holds',
        description:
          'APIs, databases, and infrastructure that keep the system observable, secure, and boringly reliable.',
        capabilities: ['API design & integration', 'Postgres / Supabase data layers', 'Auth, roles & permissions', 'Monitoring & logging'],
      },
      {
        id: 'web3',
        title: 'Web3 & Blockchain',
        tagline: 'On-chain, without drama',
        description:
          'Smart contracts and on-chain automation with the same engineering discipline as the rest of the stack.',
        capabilities: ['Solidity contracts', 'Multi-chain deployment (ETH, BSC, Arbitrum)', 'Multi-sig pipelines', 'On-chain monitoring'],
      },
    ],
  },

  work: {
    kicker: 'Selected work',
    heading: 'Systems we’ve shipped.',
    subheading: 'Real, verifiable work — live links wherever they exist.',
    archiveLink: 'All work',
    statusLive: 'Live',
    statusShipped: 'Shipped',
    viewLabel: 'Open',
    positions: [
      {
        code: '01',
        title: 'Education Platform Suite',
        type: 'Web & Product',
        description:
          'Three production sites for university and education clients — admissions, program pages, and CMS-driven content built for editors who aren’t developers.',
        tech: ['Next.js', 'React', 'CMS'],
        status: 'live',
        links: [
          { label: 'ageu.edu.kz', url: 'https://ageu.edu.kz' },
          { label: 'q-university.edu.kz', url: 'https://q-university.edu.kz' },
          { label: 'qgroup.asia', url: 'https://qgroup.asia' },
        ],
      },
      {
        code: '02',
        title: 'Beyond Lines',
        type: 'AI & Automation',
        description:
          'An autonomous content-intelligence pipeline scanning 60+ sources across crypto, security, and AI, then curating and publishing through a Telegram bot and web dashboard.',
        tech: ['Next.js', 'AI curation', 'Telegram Bot'],
        status: 'live',
        links: [{ label: 'beyondlines-web.vercel.app', url: 'https://beyondlines-web.vercel.app' }],
      },
      {
        code: '03',
        title: 'Unhireable',
        type: 'AI & Automation',
        description:
          'A desktop job-search system that scrapes hh.kz, Wellfound, and LinkedIn, matches roles with AI, and generates tailored résumés automatically.',
        tech: ['Desktop app', 'AI matching', 'Multi-platform scraping'],
        status: 'live',
        links: [{ label: 'unhireable-website.vercel.app', url: 'https://unhireable-website.vercel.app' }],
      },
      {
        code: '04',
        title: 'Multi-Platform Bot Suite',
        type: 'Automation',
        description:
          'A shared automation layer behind WhatsApp, Telegram, and Twitter — one routing brain, three channels, no duplicated logic to maintain.',
        tech: ['Bot APIs', 'Automation', 'AI routing'],
        status: 'shipped',
      },
      {
        code: '05',
        title: 'Smart Contract Automation Suite',
        type: 'Web3',
        description:
          'Solidity contracts across BSC, Ethereum, and Arbitrum with automated test coverage, multi-sig deploy pipelines, and live on-chain monitoring.',
        tech: ['Solidity', 'Hardhat', 'Multi-sig'],
        status: 'shipped',
      },
      {
        code: '06',
        title: 'Tender Automation Platform',
        type: 'Automation',
        description:
          'A custom admin panel paired with browser automation that monitors public tenders, drafts replies, and hands off fulfillment without manual tracking.',
        tech: ['Playwright', 'AI agents', 'Admin panel'],
        status: 'shipped',
      },
      {
        code: '07',
        title: 'CRM ↔ ERP Automation Bridge',
        type: 'Automation',
        description:
          'A sync layer joining finance, CRM, and support stacks that previously required manual data entry between systems.',
        tech: ['n8n', 'Postgres', 'REST API'],
        status: 'shipped',
      },
      {
        code: '08',
        title: 'Multilingual Landing System',
        type: 'Web & Product',
        description:
          'A repeatable landing-page framework used to launch dozens of localized pages for startups and public programs, wired to shared analytics and CRM.',
        tech: ['Next.js', 'Vercel', 'Analytics'],
        status: 'shipped',
      },
    ],
    contactPrompt: 'Have a similar system in mind?',
    contactCta: 'Start a project',
  },

  // Terminal comparison — illustrative model of a support inbox, not a client metric.
  comparison: {
    kicker: 'Manual vs system',
    heading: 'Same inbox. Two ways to run it.',
    subheading: 'An illustrative rebuild of a typical support week — what changes when a system owns the queue.',
    note: 'Illustrative model, not a client metric.',
    seriesManual: 'Manual way',
    seriesAuto: 'With a system',
    resolutionLabel: 'avg. response time',
    resolutionManual: '~14 h',
    resolutionAuto: '~11 min',
    beats: [
      { title: 'Message arrives', manual: 'Sits in a shared inbox until someone’s free.', auto: 'Classified and routed in seconds, 24/7.' },
      { title: 'Routine question', manual: 'Copy-paste the same answer for the 40th time.', auto: 'Answered instantly from your own knowledge base.' },
      { title: 'Edge case', manual: 'Bounced between three people, twice.', auto: 'Escalated to one owner with full context attached.' },
      { title: 'Reporting', manual: 'Numbers assembled Friday night, if at all.', auto: 'A live view your team actually opens on Monday.' },
    ],
  },

  process: {
    kicker: 'How it works',
    heading: 'From first call to running system.',
    subheading: 'Four stages. Every stage ends with something you can see working — not a slide deck.',
    stages: [
      {
        code: '01',
        title: 'Scan',
        duration: '1–2 weeks',
        description:
          'We map what actually happens today — the tools, the manual steps, the handoffs nobody documented — before proposing anything.',
      },
      {
        code: '02',
        title: 'Design',
        duration: '1–2 weeks',
        description:
          'We architect the system: what gets automated, what gets built, what stays human, and how it all talks to each other.',
      },
      {
        code: '03',
        title: 'Build & ship',
        duration: '2–8 weeks',
        description:
          'Working software in stages. Each stage is something you can test and use — a misunderstanding costs a week, not three months.',
      },
      {
        code: '04',
        title: 'Operate',
        duration: 'Ongoing',
        description:
          'We stay on. Systems get monitored, adjusted, and extended as the business changes instead of degrading the day we leave.',
      },
    ],
  },

  principles: {
    kicker: 'How we operate',
    heading: 'Why teams stay with us.',
    subheading: 'Not because we’re the biggest. Because of how the work gets done.',
    points: [
      { title: 'One accountable team', detail: 'No relay between a strategy shop, a dev shop, and an ops consultant. The people who scope your system are the people who build and run it.' },
      { title: 'You own everything', detail: 'Repositories, infrastructure, and documentation transfer from day one. If we disappeared tomorrow, your systems would keep running.' },
      { title: 'Working software at every step', detail: 'You see something real at each stage of a build — so drift in expectations costs days, not a quarter.' },
      { title: 'We stay after launch', detail: 'Automation and AI drift as your business changes. We operate and adjust them instead of vanishing after handover.' },
    ],
  },

  about: {
    kicker: 'About',
    heading: 'A small senior team, not an account-management layer.',
    subheading:
      'Rahmet Labs is a full-stack technology studio: automation, AI systems, web and mobile products, and Web3 infrastructure — delivered by the people who actually build it.',
    teamHeading: 'Who you work with',
    teamIntro:
      'We put a small group of senior people on every engagement instead of staffing you with juniors and a project manager.',
    team: [
      {
        name: 'Core builders',
        role: 'Product · Automation · Web3',
        bio: 'Senior engineers who scope, build, and ship the system end to end — the people on your kickoff call are the people writing the code.',
      },
      {
        name: 'AI & automation partners',
        role: 'AI Ops · Integrations',
        bio: 'Specialists in workflow automation, LLM integration, and systems orchestration who plug in for the automation and AI portions of a build.',
      },
      {
        name: 'Design & delivery ring',
        role: 'Design · QA · Launch',
        bio: 'The people who make sure what ships is usable, tested, and ready for your team on day one — not a prototype dressed up for a demo.',
      },
    ],
    principlesHeading: 'How we operate',
    toolkitHeading: 'Stack we work in',
    toolkit: ['Next.js', 'React', 'React Native', 'Solidity', 'Hardhat', 'Supabase', 'Postgres', 'n8n', 'LangChain', 'OpenAI', 'Vercel', 'Playwright'],
    ctaHeading: 'Talk to the people who’ll build it.',
    ctaSubheading: 'A 15-minute call with senior staff — not a sales rep.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See the work',
  },

  servicesPage: {
    kicker: 'Services',
    heading: 'Five functions. One accountable team.',
    subheading: 'Everything below is a capability we run in production today — not a wish list.',
    engagementHeading: 'Ways to work together',
    engagement: [
      { title: 'Project build', detail: 'A defined system, scoped and shipped in stages with a fixed cadence of reviews.' },
      { title: 'Operational retainer', detail: 'We run and extend what we built — monitoring, adjustments, new features as the business evolves.' },
      { title: 'Technical advisor', detail: 'Senior eyes on your architecture, hiring, and roadmap — a few days a month, no retainers of air.' },
    ],
    faqHeading: 'Common questions',
    ctaHeading: 'Not sure which function you need?',
    ctaSubheading: 'Describe the manual work that’s eating your week. We’ll tell you plainly what a system could do with it.',
  },

  faq: [
    {
      q: 'How quickly can we start?',
      a: 'Usually within one to two weeks. A short call, a written scope of the first stage, and we begin. We don’t do three-month discovery phases.',
    },
    {
      q: 'Do you work with our existing tools?',
      a: 'Yes — that’s the point. We connect and automate around your CRM, ERP, and messengers first, and only replace what genuinely can’t be salvaged.',
    },
    {
      q: 'What does a project typically cost?',
      a: 'It depends on scope — a focused automation is a very different build from a full product. After one call we give a written estimate for a first stage you can actually use, so you never commit to a black box.',
    },
    {
      q: 'Who owns the code and infrastructure?',
      a: 'You do, from day one. Repos, cloud accounts, and documentation transfer to your team as part of delivery.',
    },
    {
      q: 'What happens after launch?',
      a: 'Most clients keep us on an operational retainer: monitoring, adjustments, and extensions as the business changes. If you prefer to run it yourself, we hand over with training and runbooks.',
    },
    {
      q: 'Which languages can we work in?',
      a: 'English, Russian, and Kazakh — calls, documentation, and the interfaces we ship.',
    },
  ],

  contact: {
    kicker: 'Contact',
    heading: 'Tell us what’s manual today.',
    subheading: 'A message, a call, or a voice note — whichever is fastest. A real person replies.',
    channelsHeading: 'Reach us directly',
    channels: [
      { id: 'whatsapp', label: 'WhatsApp', value: '+7 708 841 3062', href: 'https://wa.me/77088413062', note: 'Fastest — usually same hour' },
      { id: 'telegram', label: 'Telegram', value: '@RahmetLabs', href: 'https://t.me/RahmetLabs', note: 'Same day' },
      { id: 'email', label: 'Email', value: 'rahmetlabs@gmail.com', href: 'mailto:rahmetlabs@gmail.com', note: 'Within 24 hours' },
    ],
    guideHeading: 'What happens next',
    guide: [
      { code: '01', title: 'You describe the manual work', detail: 'Two sentences are enough. We read everything ourselves — no ticket queue, no account manager relay.' },
      { code: '02', title: 'We reply with a point of view', detail: 'What we’d automate first, what we’d leave alone, and what a first working stage could look like.' },
      { code: '03', title: 'A 15-minute call with senior staff', detail: 'The people who would build your system, not a sales rep. If we’re not the right fit, we’ll say so.' },
    ],
    socialHeading: 'Elsewhere',
    socials: [
      { label: 'GitHub', href: 'https://github.com/rahmetlabs' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/rahmetlabs' },
      { label: 'X', href: 'https://x.com/rahmetlabs' },
    ],
  },

  cta: {
    kicker: 'Start',
    heading: 'Start with the manual work',
    headingAccent: 'that eats your week.',
    subheading:
      'Tell us what your team still does by hand. We’ll reply with a plain answer: what a system could take over, what it would take, and what we’d build first.',
    primary: 'Start a project',
    whatsapp: 'WhatsApp us',
  },

  footer: {
    tagline: 'Automation, AI systems, and engineered products — built and run by one accountable team.',
    mapLabel: 'Site',
    contactLabel: 'Contact',
    locationNote: 'Based in Kazakhstan · working with teams worldwide · EN / RU / KZ',
    copyrightSuffix: 'Rahmet Labs. Built with the same care we put into client systems.',
  },
};

const ru = {
  meta: {
    home: {
      title: 'Rahmet Labs — студия автоматизации, ИИ и продуктовой разработки',
      description:
        'Rahmet Labs заменяет ручные операции автоматикой, ИИ-системами и инженерными продуктами — проектирует, запускает и сопровождает одна ответственная команда.',
      keywords: ['автоматизация бизнеса', 'разработка ИИ', 'ИИ-агенты', 'веб-разработка', 'web3 разработка'],
    },
    services: {
      title: 'Услуги — автоматизация, ИИ, веб, мобайл и Web3 | Rahmet Labs',
      description: 'Пять функций, одна ответственная команда: автоматизация бизнеса, ИИ-агенты, веб- и мобильные продукты, бэкенд и сопровождение.',
      keywords: ['автоматизация процессов', 'ИИ-агенты', 'разработка веб-приложений', 'мобильные приложения'],
    },
    portfolio: {
      title: 'Работы — запущенные системы | Rahmet Labs',
      description: 'Примеры систем автоматизации, ИИ, веба и Web3, которые запустила Rahmet Labs, — с живыми ссылками, где они есть.',
      keywords: ['портфолио', 'проекты автоматизации', 'ИИ-проекты'],
    },
    about: {
      title: 'О Rahmet Labs — команда, которая строит ваши системы',
      description: 'Rahmet Labs — небольшая senior-команда: автоматизация, ИИ, веб/мобайл и Web3. Кто оценивает проект, тот его и делает.',
      keywords: ['о rahmet labs', 'продуктовая студия'],
    },
    contact: {
      title: 'Контакты Rahmet Labs — начать проект',
      description: 'Расскажите, что у вас до сих пор делается вручную. Напишите нам в WhatsApp, Telegram или на почту.',
      keywords: ['связаться со студией автоматизации', 'начать проект'],
    },
  },

  facts: {
    whatWeDo:
      'Rahmet Labs — продуктовая технологическая студия: автоматизация бизнеса, ИИ-системы, веб- и мобильные продукты и Web3-инфраструктура для компаний, которые заменяют ручные операции софтом.',
    whoFor:
      'Основатели, операционные директора и технические команды, которым нужен один ответственный партнёр вместо россыпи фрилансеров для стратегии, автоматики и разработки.',
    basedIn: 'Rahmet Labs находится в Казахстане и работает с клиентами по Центральной Азии, Европе и Персидскому заливу.',
  },

  nav: {
    wordmark: 'RAHMET LABS',
    closeWordmark: 'RL',
    links: [
      { label: 'Работы', href: '/portfolio' },
      { label: 'Услуги', href: '/services' },
      { label: 'О нас', href: '/about' },
    ],
    cta: 'Начать проект',
    menuLabel: 'Меню',
    closeLabel: 'Закрыть',
  },

  hero: {
    kicker: 'Rahmet Labs — автоматизация, ИИ и инженерия продуктов',
    line1: 'Ваш бизнес',
    line2: 'тонет в',
    line2Accent: 'ручной работе.',
    line3: 'Мы строим',
    line3Accent: 'системы',
    line3Tail: 'которые это меняют.',
    subheadline:
      'Одна senior-команда проектирует, запускает и сопровождает автоматику и ИИ, которые заменяют ваши таблицы, копипаст и бесконечные переписки. Софт делает рутину — люди делают бизнес.',
    ctaPrimary: 'Начать проект',
    ctaSecondary: 'Смотреть работы',
    supportingLabel: 'Одна ответственная команда · EN / RU / KZ',
    supportingChannels: 'WhatsApp · Telegram · почта',
    scrollLabel: 'Листайте',
  },

  thread: {
    chapters: [
      {
        key: '01',
        title: 'Работа незаметна — пока не сломается.',
        lead: 'Кто-то переносит цифры в таблицу. Кто-то помнит, что надо отправить счёт. Кто-то в полночь проверяет тендерный портал. Ничего этого нет в системе — всё это в чьей-то голове.',
        detail: 'Новые наймы увеличивают хаос, а не мощность.',
      },
      {
        key: '02',
        title: 'Не нужен героизм. Нужна система.',
        lead: 'Большая часть того, что команда делает руками, — повторяемый паттерн: посмотреть, сравнить, скопировать, решить, отправить. А повторяемые паттерны — это ровно то, для чего существует софт.',
        detail: 'Проблема никогда в усилиях — всегда в архитектуре.',
      },
      {
        key: '03',
        title: 'Эту систему мы и строим.',
        lead: 'Автоматика, которая работает сама, ИИ, который читает и решает, продукты, которыми реально пользуются клиенты, — одна ответственная команда от проектирования до эксплуатации.',
        detail: 'Листайте дальше. Это и есть весь питч.',
      },
    ],
  },

  whatWeBuild: {
    kicker: 'Что мы делаем',
    heading: 'Одна студия — все слои системы.',
    subheading:
      'Стратегия, автоматика, ИИ и разработка под одной крышей — ничего не теряется между презентацией консультанта и бэклогом разработчика.',
    categories: [
      {
        id: 'automation',
        title: 'Автоматизация бизнеса',
        tagline: 'Конец эпохи копипаста',
        description:
          'Процессы, которые идут без человека в цикле: согласования, счета, отчётность, мониторинг тендеров, синхронизация CRM↔ERP.',
        capabilities: ['Автоматизация процессов (n8n, Make)', 'Интеграция систем и API', 'Дашборды и алерты для операционки', 'Браузерная и дата-автоматизация'],
      },
      {
        id: 'ai',
        title: 'ИИ-системы',
        tagline: 'ИИ, который читает, решает, действует',
        description:
          'ИИ, встроенный в реальную операционку: агенты, RAG по вашим данным, контент-пайплайны — а не демо-чатбот.',
        capabilities: ['ИИ-агенты и ассистенты', 'RAG по закрытым данным', 'Пайплайны генерации контента', 'Мэтчинг, скоринг и маршрутизация'],
      },
      {
        id: 'product',
        title: 'Веб- и мобильные продукты',
        tagline: 'Софт, которым пользуются',
        description:
          'От мультиязычных сайт-систем до SaaS-платформ и мобильных приложений — полный цикл: дизайн, разработка, запуск.',
        capabilities: ['Веб-приложения и SaaS-платформы', 'Мобильные приложения (React Native)', 'Сайты на CMS для редакторов', 'Бронирование и личные кабинеты'],
      },
      {
        id: 'backend',
        title: 'Бэкенд и данные',
        tagline: 'Фундамент, который держит',
        description:
          'API, базы данных и инфраструктура, которые делают систему наблюдаемой, безопасной и скучно надёжной.',
        capabilities: ['Проектирование API и интеграции', 'Данные на Postgres / Supabase', 'Авторизация, роли и доступы', 'Мониторинг и логирование'],
      },
      {
        id: 'web3',
        title: 'Web3 и блокчейн',
        tagline: 'Он-чейн без драмы',
        description:
          'Смарт-контракты и он-чейн автоматизация с той же инженерной дисциплиной, что и остальной стек.',
        capabilities: ['Контракты на Solidity', 'Мультичейн-деплой (ETH, BSC, Arbitrum)', 'Multi-sig конвейеры', 'Он-чейн мониторинг'],
      },
    ],
  },

  work: {
    kicker: 'Избранные работы',
    heading: 'Запущенные системы.',
    subheading: 'Реальные, проверяемые проекты — с живыми ссылками, где они есть.',
    archiveLink: 'Все работы',
    statusLive: 'В работе',
    statusShipped: 'Сдано',
    viewLabel: 'Открыть',
    positions: [
      {
        code: '01',
        title: 'Платформа для образования',
        type: 'Веб и продукт',
        description:
          'Три боевых сайта для университета и образовательных клиентов: приёмная кампания, страницы программ и CMS-контент для редакторов, а не разработчиков.',
        tech: ['Next.js', 'React', 'CMS'],
        status: 'live',
        links: [
          { label: 'ageu.edu.kz', url: 'https://ageu.edu.kz' },
          { label: 'q-university.edu.kz', url: 'https://q-university.edu.kz' },
          { label: 'qgroup.asia', url: 'https://qgroup.asia' },
        ],
      },
      {
        code: '02',
        title: 'Beyond Lines',
        type: 'ИИ и автоматизация',
        description:
          'Автономный контент-конвейер: сканирует 60+ источников про крипту, безопасность и ИИ, отбирает и публикует через Telegram-бота и веб-дашборд.',
        tech: ['Next.js', 'ИИ-курация', 'Telegram-бот'],
        status: 'live',
        links: [{ label: 'beyondlines-web.vercel.app', url: 'https://beyondlines-web.vercel.app' }],
      },
      {
        code: '03',
        title: 'Unhireable',
        type: 'ИИ и автоматизация',
        description:
          'Десктопная система поиска работы: парсит hh.kz, Wellfound и LinkedIn, мэтчит вакансии через ИИ и автоматически собирает резюме под каждую.',
        tech: ['Десктоп-приложение', 'ИИ-мэтчинг', 'Мультиплатформенный парсинг'],
        status: 'live',
        links: [{ label: 'unhireable-website.vercel.app', url: 'https://unhireable-website.vercel.app' }],
      },
      {
        code: '04',
        title: 'Мультиплатформенные боты',
        type: 'Автоматизация',
        description:
          'Общий слой автоматики за WhatsApp, Telegram и Twitter: один маршрутизирующий мозг, три канала, ноль дублированной логики.',
        tech: ['Bot API', 'Автоматизация', 'ИИ-маршрутизация'],
        status: 'shipped',
      },
      {
        code: '05',
        title: 'Автоматизация смарт-контрактов',
        type: 'Web3',
        description:
          'Контракты на Solidity в BSC, Ethereum и Arbitrum: покрытие автотестами, деплой через multi-sig, живой он-чейн мониторинг.',
        tech: ['Solidity', 'Hardhat', 'Multi-sig'],
        status: 'shipped',
      },
      {
        code: '06',
        title: 'Тендерная платформа',
        type: 'Автоматизация',
        description:
          'Панель администратора + браузерная автоматика: следит за госзакупками, готовит черновики ответов и передаёт на исполнение без ручного трекинга.',
        tech: ['Playwright', 'ИИ-агенты', 'Админ-панель'],
        status: 'shipped',
      },
      {
        code: '07',
        title: 'Мост CRM ↔ ERP',
        type: 'Автоматизация',
        description:
          'Слой синхронизации между финансами, CRM и поддержкой — туда, где раньше данные переносились руками между системами.',
        tech: ['n8n', 'Postgres', 'REST API'],
        status: 'shipped',
      },
      {
        code: '08',
        title: 'Мультиязычные лендинги',
        type: 'Веб и продукт',
        description:
          'Повторяемый фреймворк лендингов, на котором запущены десятки локализованных страниц для стартапов и госпрограмм, — с общей аналитикой и CRM.',
        tech: ['Next.js', 'Vercel', 'Аналитика'],
        status: 'shipped',
      },
    ],
    contactPrompt: 'Похожая система у вас в голове?',
    contactCta: 'Начать проект',
  },

  comparison: {
    kicker: 'Вручную vs система',
    heading: 'Одна почта. Два способа с ней жить.',
    subheading: 'Иллюстративная модель типичной недели поддержки — что меняется, когда очередью владеет система.',
    note: 'Иллюстративная модель, не метрика клиента.',
    seriesManual: 'Руками',
    seriesAuto: 'С системой',
    resolutionLabel: 'среднее время ответа',
    resolutionManual: '~14 ч',
    resolutionAuto: '~11 мин',
    beats: [
      { title: 'Приходит сообщение', manual: 'Лежит в общем ящике, пока кто-то освободится.', auto: 'Классифицировано и маршрутизировано за секунды, 24/7.' },
      { title: 'Рутинный вопрос', manual: 'Сороковой раз копируется тот же ответ.', auto: 'Мгновенный ответ из вашей же базы знаний.' },
      { title: 'Нестандартный случай', manual: 'Ходит по троим, дважды.', auto: 'Уходит одному ответственному — с полным контекстом.' },
      { title: 'Отчётность', manual: 'Цифры собираются в пятницу вечером. Или нет.', auto: 'Живой дашборд, который команда реально открывает в понедельник.' },
    ],
  },

  process: {
    kicker: 'Как мы работаем',
    heading: 'От первого звонка до работающей системы.',
    subheading: 'Четыре этапа. Каждый заканчивается тем, что можно потрогать, — а не слайдами.',
    stages: [
      {
        code: '01',
        title: 'Скан',
        duration: '1–2 недели',
        description:
          'Картируем, что реально происходит сегодня: инструменты, ручные шаги, незадокументированные передачи дел — прежде чем что-то предлагать.',
      },
      {
        code: '02',
        title: 'Проектирование',
        duration: '1–2 недели',
        description:
          'Архитектура системы: что автоматизируем, что строим, что остаётся за людьми и как всё это общается между собой.',
      },
      {
        code: '03',
        title: 'Сборка и запуск',
        duration: '2–8 недель',
        description:
          'Работающий софт поэтапно. Каждый этап можно тестировать и использовать — недопонимание стоит неделю, а не квартал.',
      },
      {
        code: '04',
        title: 'Эксплуатация',
        duration: 'Постоянно',
        description:
          'Мы остаёмся. Системы мониторятся, настраиваются и растут вместе с бизнесом, а не деградируют в день передачи.',
      },
    ],
  },

  principles: {
    kicker: 'Принципы',
    heading: 'Почему с нами остаются.',
    subheading: 'Не потому что мы самые большие. А из-за того, как делается работа.',
    points: [
      { title: 'Одна ответственная команда', detail: 'Без эстафеты между консультантами, подрядчиком по разработке и эксплуатацией. Кто оценивает систему, тот её и строит.' },
      { title: 'Всё принадлежит вам', detail: 'Репозитории, инфраструктура и документация передаются с первого дня. Исчезнем завтра — ваши системы продолжат работать.' },
      { title: 'Работающий софт на каждом шаге', detail: 'На каждом этапе вы видите что-то реальное — расхождение в ожиданиях стоит дни, а не квартал.' },
      { title: 'Остаёмся после запуска', detail: 'Автоматика и ИИ дрейфуют вместе с бизнесом. Мы сопровождаем и настраиваем их, а не исчезаем после сдачи.' },
    ],
  },

  about: {
    kicker: 'О нас',
    heading: 'Небольшая senior-команда, а не слой аккаунт-менеджмента.',
    subheading:
      'Rahmet Labs — продуктовая технологическая студия: автоматизация, ИИ-системы, веб- и мобильные продукты, Web3-инфраструктура. Делается всё руками тех, кто строит.',
    teamHeading: 'С кем вы будете работать',
    teamIntro:
      'На каждый проект мы ставим небольшую группу senior-людей вместо джунов и проект-менеджера.',
    team: [
      {
        name: 'Основные разработчики',
        role: 'Продукт · Автоматизация · Web3',
        bio: 'Senior-инженеры, которые проектируют, строят и запускают систему целиком: люди на вашем первом звонке — это люди, которые пишут код.',
      },
      {
        name: 'Партнёры по ИИ и автоматике',
        role: 'AI Ops · Интеграции',
        bio: 'Специалисты по автоматизации процессов, интеграции LLM и оркестрации систем — подключаются к ИИ-части сборки.',
      },
      {
        name: 'Кольцо дизайна и поставки',
        role: 'Дизайн · QA · Запуск',
        bio: 'Люди, которые следят, чтобы результат был удобным, протестированным и готовым к работе вашей команды с первого дня.',
      },
    ],
    principlesHeading: 'Как мы работаем',
    toolkitHeading: 'Наш стек',
    toolkit: ['Next.js', 'React', 'React Native', 'Solidity', 'Hardhat', 'Supabase', 'Postgres', 'n8n', 'LangChain', 'OpenAI', 'Vercel', 'Playwright'],
    ctaHeading: 'Поговорите с теми, кто будет это строить.',
    ctaSubheading: '15-минутный звонок с senior-специалистами — не с продажником.',
    ctaPrimary: 'Начать проект',
    ctaSecondary: 'Смотреть работы',
  },

  servicesPage: {
    kicker: 'Услуги',
    heading: 'Пять функций. Одна ответственная команда.',
    subheading: 'Всё ниже — возможности, которые мы крутим в продакшене уже сегодня, а не список желаний.',
    engagementHeading: 'Форматы работы',
    engagement: [
      { title: 'Проектная сборка', detail: 'Определённая система: скоуп, поэтапная поставка, фиксированный ритм показов.' },
      { title: 'Операционный ретейнер', detail: 'Мы сопровождаем и развиваем построенное: мониторинг, настройки, новые функции по мере роста бизнеса.' },
      { title: 'Технический советник', detail: 'Senior-взгляд на вашу архитектуру, найм и роадмап — несколько дней в месяц, без ретейнеров ради ретейнеров.' },
    ],
    faqHeading: 'Частые вопросы',
    ctaHeading: 'Не уверены, какая функция нужна?',
    ctaSubheading: 'Опишите ручную работу, которая съедает вашу неделю. Честно скажем, что с ней может сделать система.',
  },

  faq: [
    {
      q: 'Как быстро можно начать?',
      a: 'Обычно в течение одной-двух недель: короткий звонок, письменный скоуп первого этапа — и стартуем. Трёхмесячных «исследований» у нас нет.',
    },
    {
      q: 'Вы работаете с нашими текущими инструментами?',
      a: 'Да, в этом и смысл. Сначала соединяем и автоматизируем то, что есть — CRM, ERP, мессенджеры, — и заменяем только то, что правда не спасти.',
    },
    {
      q: 'Сколько обычно стоит проект?',
      a: 'Зависит от скоупа: точечная автоматизация и полноценный продукт — разные истории. После одного звонка даём письменную оценку первого этапа, которым можно будет пользоваться, — никаких чёрных ящиков.',
    },
    {
      q: 'Кому принадлежит код и инфраструктура?',
      a: 'Вам, с первого дня. Репозитории, облачные аккаунты и документация передаются вашей команде в рамках поставки.',
    },
    {
      q: 'Что происходит после запуска?',
      a: 'Большинство клиентов оставляют нас на операционном ретейнере: мониторинг, настройки, доработки. Хотите вести сами — передадим с обучением и инструкциями.',
    },
    {
      q: 'На каких языках можно работать?',
      a: 'На английском, русском и казахском — звонки, документация и интерфейсы, которые мы поставляем.',
    },
  ],

  contact: {
    kicker: 'Контакты',
    heading: 'Расскажите, что у вас делается вручную.',
    subheading: 'Сообщение, звонок или голосовое — как удобнее. Ответит живой человек.',
    channelsHeading: 'Напрямую',
    channels: [
      { id: 'whatsapp', label: 'WhatsApp', value: '+7 708 841 3062', href: 'https://wa.me/77088413062', note: 'Быстрее всего — обычно в течение часа' },
      { id: 'telegram', label: 'Telegram', value: '@RahmetLabs', href: 'https://t.me/RahmetLabs', note: 'В тот же день' },
      { id: 'email', label: 'Почта', value: 'rahmetlabs@gmail.com', href: 'mailto:rahmetlabs@gmail.com', note: 'В течение 24 часов' },
    ],
    guideHeading: 'Что будет дальше',
    guide: [
      { code: '01', title: 'Вы описываете ручную работу', detail: 'Достаточно двух предложений. Читаем всё сами — без очередей тикетов и аккаунт-менеджеров.' },
      { code: '02', title: 'Мы отвечаем с позицией', detail: 'Что автоматизировать в первую очередь, что не трогать и как может выглядеть первый рабочий этап.' },
      { code: '03', title: '15-минутный звонок с senior-командой', detail: 'Люди, которые будут строить вашу систему, а не отдел продаж. Если мы не подходим — скажем прямо.' },
    ],
    socialHeading: 'Ещё мы здесь',
    socials: [
      { label: 'GitHub', href: 'https://github.com/rahmetlabs' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/rahmetlabs' },
      { label: 'X', href: 'https://x.com/rahmetlabs' },
    ],
  },

  cta: {
    kicker: 'Начать',
    heading: 'Начните с ручной работы,',
    headingAccent: 'которая съедает вашу неделю.',
    subheading:
      'Расскажите, что ваша команда до сих пор делает руками. Ответим по существу: что может забрать система, что для этого нужно и что мы бы построили первым.',
    primary: 'Начать проект',
    whatsapp: 'Написать в WhatsApp',
  },

  footer: {
    tagline: 'Автоматизация, ИИ-системы и инженерные продукты — одна ответственная команда от проектирования до эксплуатации.',
    mapLabel: 'Сайт',
    contactLabel: 'Контакты',
    locationNote: 'Казахстан · работаем с командами по всему миру · EN / RU / KZ',
    copyrightSuffix: 'Rahmet Labs. Сделано с той же тщательностью, что и системы для клиентов.',
  },
};

const kz = {
  meta: {
    home: {
      title: 'Rahmet Labs — автоматтандыру, AI және өнім инженериясы студиясы',
      description:
        'Rahmet Labs қолмен жұмысты автоматикаға, AI жүйелеріне және инженерлік өнімдерге ауыстырады — жобалау, іске қосу және сүйемелдеу бәрі бір жауапты командада.',
      keywords: ['бизнес автоматтандыру', 'AI әзірлеу', 'AI агенттер', 'веб әзірлеу', 'web3'],
    },
    services: {
      title: 'Қызметтер — автоматтандыру, AI, веб, мобайл және Web3 | Rahmet Labs',
      description: 'Бес функция, бір жауапты команда: автоматтандыру, AI агенттер, веб және мобиль өнімдер, бэкенд пен эксплуатация.',
      keywords: ['автоматтандыру қызметтері', 'AI агенттер', 'веб қосымшалар', 'мобиль қосымшалар'],
    },
    portfolio: {
      title: 'Жұмыстар — іске қосылған жүйелер | Rahmet Labs',
      description: 'Rahmet Labs іске қосқан автоматтандыру, AI, веб және Web3 жүйелерінің таңдауы — тірі сілтемелерімен.',
      keywords: ['портфолио', 'автоматтандыру жобалары', 'AI жобалары'],
    },
    about: {
      title: 'Rahmet Labs туралы — жүйеңізді құратын команда',
      description: 'Rahmet Labs — шағын senior команда: автоматтандыру, AI, веб/мобайл және Web3. Жобаны бағалағандар оны өздері құрады.',
      keywords: ['rahmet labs туралы', 'өнім студиясы'],
    },
    contact: {
      title: 'Rahmet Labs байланыс — жобаны бастау',
      description: 'Бүгін не әлі қолмен жасалып жүргенін айтыңыз. WhatsApp, Telegram немесе пошта арқылы жазыңыз.',
      keywords: ['автоматтандыру студиясымен байланыс', 'жоба бастау'],
    },
  },

  facts: {
    whatWeDo:
      'Rahmet Labs — қолмен операцияларды бағдарламамен ауыстырған компанияларға автоматтандыру, AI жүйелері, веб және мобиль өнімдер, Web3 инфрақұрылымын құратын full-stack технология студиясы.',
    whoFor:
      'Стратегия, автоматика және инженерия үшін жеке фрилансерлер тобының орнына бір жауапты серіктес керек негізін қалаушылар, операциялық жетекшілер және техникалық командалар.',
    basedIn: 'Rahmet Labs Қазақстанда орналасқан және Орталық Азия, Еуропа және Парсы шығанағы бойындағы клиенттермен жұмыс істейді.',
  },

  nav: {
    wordmark: 'RAHMET LABS',
    closeWordmark: 'RL',
    links: [
      { label: 'Жұмыстар', href: '/portfolio' },
      { label: 'Қызметтер', href: '/services' },
      { label: 'Біз туралы', href: '/about' },
    ],
    cta: 'Жоба бастау',
    menuLabel: 'Мәзір',
    closeLabel: 'Жабу',
  },

  hero: {
    kicker: 'Rahmet Labs — автоматтандыру, AI және өнім инженериясы',
    line1: 'Бизнесіңіз',
    line2: 'қол жұмысқа',
    line2Accent: 'батып жүр.',
    line3: 'Біз оны тоқтататын',
    line3Accent: 'жүйелер',
    line3Tail: 'құрамыз.',
    subheadline:
      'Бір senior команда кестелерді, көшірме-қоюды және шексіз хат алмасуды ауыстыратын автоматика мен AI жүйелерін жобалайды, іске қосады және сүйемелдейді. Күнделікті рутинаны софт жасайды — адамдар бизнес жасайды.',
    ctaPrimary: 'Жоба бастау',
    ctaSecondary: 'Жұмыстарды көру',
    supportingLabel: 'Бір жауапты команда · EN / RU / KZ',
    supportingChannels: 'WhatsApp · Telegram · пошта',
    scrollLabel: 'Төмен сырғытыңыз',
  },

  thread: {
    chapters: [
      {
        key: '01',
        title: 'Жұмыс көрінбейді — бұзылғанша.',
        lead: 'Біреу сандарды кестеге көшіреді. Біреу шот жіберуді есінде сақтайды. Біреу түн ортасында тендер порталын тексереді. Мұның ешқайсысы жүйеде жоқ — бәрі біреудің есінде.',
        detail: 'Жаңа адам жалдау хаосты ғана үлкейтеді, қуатын емес.',
      },
      {
        key: '02',
        title: 'Батырлық керек емес. Жүйе керек.',
        lead: 'Команда қолмен істейтін нәрселердің көпшілігі — қайталанатын әдіс: көру, салыстыру, көшіру, шешу, жіберу. Ал қайталанатын әдістер — дәл софтың жұмысы.',
        detail: 'Мәселе ешқашан күште емес — әрқашан архитектурада.',
      },
      {
        key: '03',
        title: 'Сол жүйені біз құрамыз.',
        lead: 'Өзі жұмыс істейтін автоматика, оқитын және шешетін AI, клиенттер шынымен қолданатын өнімдер — жобалаудан эксплуатацияға дейін бір жауапты команда.',
        detail: 'Төмен сырғытыңыз. Барлық ұсыныс осы.',
      },
    ],
  },

  whatWeBuild: {
    kicker: 'Не құрамыз',
    heading: 'Бір студия — жүйенің барлық қабаты.',
    subheading:
      'Стратегия, автоматика, AI және инженерия бір шатыр астында — консультанттың слайды мен әзірлеушінің бэклогы арасында ештеңе жоғалмайды.',
    categories: [
      {
        id: 'automation',
        title: 'Бизнес автоматтандыруы',
        tagline: 'Көшірме-қою дәуірінің соңы',
        description:
          'Адамсыз жүретін процестер: келісімдер, шоттар, есептілік, тендер мониторингі, CRM↔ERP синхроны.',
        capabilities: ['Процестерді автоматтандыру (n8n, Make)', 'Жүйелер мен API интеграциясы', 'Операциялық дашбордтар мен алерттер', 'Браузерлік және деректер автоматикасы'],
      },
      {
        id: 'ai',
        title: 'AI жүйелері',
        tagline: 'Оқитын, шешетін, істейтін AI',
        description:
          'Нақты операциялық қызметке енген AI: агенттер, деректеріңіз бойынша RAG, контент-пайплайндар — демо-чатбот емес.',
        capabilities: ['AI агенттер мен ассистенттер', 'Жабық деректер бойынша RAG', 'Контент генерация пайплайндары', 'Мэтчинг, скоринг және маршруттау'],
      },
      {
        id: 'product',
        title: 'Веб және мобиль өнімдер',
        tagline: 'Нағыз қолданылатын софт',
        description:
          'Көптілді сайт-жүйелерден SaaS платформалар мен мобиль қосымшаларға дейін — толық цикл: дизайн, әзірлеу, іске қосу.',
        capabilities: ['Веб қосымшалар мен SaaS платформалар', 'Мобиль қосымшалар (React Native)', 'Редакторларға арналған CMS сайттар', 'Брондау және жеке кабинеттер'],
      },
      {
        id: 'backend',
        title: 'Бэкенд және деректер',
        tagline: 'Ұстайтын іргетас',
        description:
          'Жүйені бақыланатын, қауіпсіз және сенімді ететін API, дерекқорлар және инфрақұрылым.',
        capabilities: ['API жобалау және интеграция', 'Postgres / Supabase дерекқорлары', 'Авторизация, рөлдер және қолжетімділік', 'Мониторинг және логирование'],
      },
      {
        id: 'web3',
        title: 'Web3 және блокчейн',
        tagline: 'Он-чейн, драмасыз',
        description:
          'Қалған стекпен бірдей инженерлік тәртіппен жасалған смарт-келісімшарттар мен он-чейн автоматикасы.',
        capabilities: ['Solidity келісімшарттары', 'Мультичейн-деплой (ETH, BSC, Arbitrum)', 'Multi-sig конвейерлер', 'Он-чейн мониторинг'],
      },
    ],
  },

  work: {
    kicker: 'Таңдаулы жұмыстар',
    heading: 'Іске қосылған жүйелер.',
    subheading: 'Нақты, тексерілетін жобалар — тірі сілтемелерімен, бар жерлерінде.',
    archiveLink: 'Барлық жұмыстар',
    statusLive: 'Жұмыс істеп тұр',
    statusShipped: 'Тапсырылды',
    viewLabel: 'Ашу',
    positions: [
      {
        code: '01',
        title: 'Білім беру платформасы',
        type: 'Веб және өнім',
        description:
          'Университет пен білім беру клиенттеріне арналған үш өндірістік сайт: қабылдау кампаниясы, бағдарлама беттері және редакторларға арналған CMS контент.',
        tech: ['Next.js', 'React', 'CMS'],
        status: 'live',
        links: [
          { label: 'ageu.edu.kz', url: 'https://ageu.edu.kz' },
          { label: 'q-university.edu.kz', url: 'https://q-university.edu.kz' },
          { label: 'qgroup.asia', url: 'https://qgroup.asia' },
        ],
      },
      {
        code: '02',
        title: 'Beyond Lines',
        type: 'AI және автоматтандыру',
        description:
          'Автономды контент-конвейер: крипта, қауіпсіздік және AI бойынша 60+ дереккөзді сканерлеп, Telegram-бот пен веб-дашборд арқылы жариялайды.',
        tech: ['Next.js', 'AI курациясы', 'Telegram-бот'],
        status: 'live',
        links: [{ label: 'beyondlines-web.vercel.app', url: 'https://beyondlines-web.vercel.app' }],
      },
      {
        code: '03',
        title: 'Unhireable',
        type: 'AI және автоматтандыру',
        description:
          'Жұмыс іздеудің десктоп жүйесі: hh.kz, Wellfound және LinkedIn-ді парсит, вакансияларды AI арқылы сәйкестендіріп, резюмені автоматты дайындайды.',
        tech: ['Десктоп қосымша', 'AI мэтчинг', 'Мультиплатформалық парсинг'],
        status: 'live',
        links: [{ label: 'unhireable-website.vercel.app', url: 'https://unhireable-website.vercel.app' }],
      },
      {
        code: '04',
        title: 'Мультиплатформалық боттар',
        type: 'Автоматтандыру',
        description:
          'WhatsApp, Telegram және Twitter артындағы ортақ автоматика қабаты: бір маршруттайтын ми, үш арна, қайталанатын логика жоқ.',
        tech: ['Bot API', 'Автоматтандыру', 'AI маршруттау'],
        status: 'shipped',
      },
      {
        code: '05',
        title: 'Смарт-келісімшарт автоматикасы',
        type: 'Web3',
        description:
          'BSC, Ethereum және Arbitrum желілеріндегі Solidity келісімшарттары: автотест қамтуы, multi-sig деплой, тірі он-чейн мониторинг.',
        tech: ['Solidity', 'Hardhat', 'Multi-sig'],
        status: 'shipped',
      },
      {
        code: '06',
        title: 'Тендер платформасы',
        type: 'Автоматтандыру',
        description:
          'Әкімші панелі + браузерлік автоматика: мемлекеттік сатып алуларды бақылап, жауап жобalarын дайындап, қолмен бақылаусыз орындауға береді.',
        tech: ['Playwright', 'AI агенттер', 'Әкімші панелі'],
        status: 'shipped',
      },
      {
        code: '07',
        title: 'CRM ↔ ERP көпірі',
        type: 'Автоматтандыру',
        description:
          'Қаржы, CRM және қолдау арасын байланыстыратын синхрондау қабаты — бұрын деректер жүйелер арасында қолмен көшірілетін жерге.',
        tech: ['n8n', 'Postgres', 'REST API'],
        status: 'shipped',
      },
      {
        code: '08',
        title: 'Көптілді лендингтер жүйесі',
        type: 'Веб және өнім',
        description:
          'Стартаптар мен мемлекеттік бағдарламalarға арналған ондаған локализацияланған беттер іске қосылған қайталанатын лендинг фреймворкі — ортақ аналитикамен және CRM-ммен.',
        tech: ['Next.js', 'Vercel', 'Аналитика'],
        status: 'shipped',
      },
    ],
    contactPrompt: 'Осындай жүйе ойыңызда бар ма?',
    contactCta: 'Жоба бастау',
  },

  comparison: {
    kicker: 'Қолмен vs жүйемен',
    heading: 'Бір пошта. Екі түрлі тәсіл.',
    subheading: 'Қолдау қызметінің типтік аптасының иллюстративті моделі — кезекті жүйе иеленгенде не өзгереді.',
    note: 'Иллюстративті модель, клиент метрикасы емес.',
    seriesManual: 'Қолмен',
    seriesAuto: 'Жүйемен',
    resolutionLabel: 'орташа жауап уақыты',
    resolutionManual: '~14 сағ',
    resolutionAuto: '~11 мин',
    beats: [
      { title: 'Хабарлама келеді', manual: 'Біреу босағанша ортақ жәшікте жатады.', auto: 'Секундтар ішінде сыныпталды және бағытталды, 24/7.' },
      { title: 'Қарапайым сұрақ', manual: 'Сол жауап қырықыншы рет көшіріледі.', auto: 'Өз білім қорыңыздан лезде жауап.' },
      { title: 'Стандартты емес жағдай', manual: 'Үш адам арасында екі рет айналып өтеді.', auto: 'Толық контекспен бір жауаптыға түседі.' },
      { title: 'Есептілік', manual: 'Сандар жұма кешінде жиналады. Немесе жиналмайды.', auto: 'Команда дүйсенбіде шынымен ашатын тірі көрініс.' },
    ],
  },

  process: {
    kicker: 'Қалай жұмыс істейміз',
    heading: 'Алғашқы қоңыраудан жұмыс істейтін жүйеге дейін.',
    subheading: 'Төрт кезең. Әр кезең көрінетін нәтижемен аяқталады — слайдтармен емес.',
    stages: [
      {
        code: '01',
        title: 'Скан',
        duration: '1–2 апта',
        description:
          'Бүгін нақты не болып жатқанын карталаймыз: құралдар, қолмен қадамдар, ешкім жазбаған тапсырыстар — бірдеңе ұсынар алдында.',
      },
      {
        code: '02',
        title: 'Жобалау',
        duration: '1–2 апта',
        description:
          'Жүйе архитектурасы: не автоматтандырылады, не құрылады, не адамда қалады және бәрі бір-бірімен қалай сөйлеседі.',
      },
      {
        code: '03',
        title: 'Құрастыру және іске қосу',
        duration: '2–8 апта',
        description:
          'Кезең-кезеңмен жұмыс істейтін софт. Әр кезеңді тестілеуге және қолдануға болады — түсінбеушілік квартал емес, бір апта тұрады.',
      },
      {
        code: '04',
        title: 'Эксплуатация',
        duration: 'Үздіксіз',
        description:
          'Біз қаламыз. Жүйелер бақыланады, бапталады және бизнеспен бірге өседі — тапсырылған күні тозғанша емес.',
      },
    ],
  },

  principles: {
    kicker: 'Қағидаттар',
    heading: 'Неге бізбен қалады.',
    subheading: 'Ең үлкеніміз үшін емес. Жұмыстың қалай жасалатыны үшін.',
    points: [
      { title: 'Бір жауапты команда', detail: 'Консультант, әзірлеу мердігері және эксплуатация арасындағы эстафета жоқ. Жүйені бағалағандар оны өздері құрады.' },
      { title: 'Бәрі сіздің меншік', detail: 'Репозиторийлер, инфрақұрылым және құжаттама бірінші күні-өзі беріледі. Ертең жоғалып кетсек те, жүйелеріңіз жұмысын жалғастырады.' },
      { title: 'Әр қадамда жұмыс істейтін софт', detail: 'Әр кезеңде нақты нәтиже көресіз — күтуден ауытқу квартал емес, күндер тұрады.' },
      { title: 'Іске қосқаннан кейін де қаламыз', detail: 'Автоматика мен AI бизнеспен бірге дрейфтейді. Тапсырғаннан кейін жоғалмай, сүйемелдеп, баптап отырамыз.' },
    ],
  },

  about: {
    kicker: 'Біз туралы',
    heading: 'Шағын senior команда — аккаунт-менеджмент қабаты емес.',
    subheading:
      'Rahmet Labs — full-stack технология студиясы: автоматтандыру, AI жүйелері, веб және мобиль өнімдер, Web3 инфрақұрылымы. Бәрін нақты құратын адамдар жасайды.',
    teamHeading: 'Кіммен жұмыс істейсіз',
    teamIntro: 'Әр жобаға джундар мен жоба менеджері орнына шағын senior топты қоямыз.',
    team: [
      {
        name: 'Негізгі әзірлеушілер',
        role: 'Өнім · Автоматтандыру · Web3',
        bio: 'Жүйені басынан аяғына дейін жобалайтын, құратын және іске қосатын senior инженерлер: алғашқы қоңыраудағылар — код жазатындар.',
      },
      {
        name: 'AI және автоматика серіктестері',
        role: 'AI Ops · Интеграциялар',
        bio: 'Процесстерді автоматтандыру, LLM интеграциясы және жүйелік оркестрация мамандары — құрастырудың AI бөлігіне қосылады.',
      },
      {
        name: 'Дизайн және жеткізу сақинасы',
        role: 'Дизайн · QA · Іске қосу',
        bio: 'Жеткізілген нәрсе ыңғайлы, тестіленген және командаңызға бірінші күні-ақ дайын болуын қадағалайтын адамдар.',
      },
    ],
    principlesHeading: 'Қалай жұмыс істейміз',
    toolkitHeading: 'Біздің стек',
    toolkit: ['Next.js', 'React', 'React Native', 'Solidity', 'Hardhat', 'Supabase', 'Postgres', 'n8n', 'LangChain', 'OpenAI', 'Vercel', 'Playwright'],
    ctaHeading: 'Құратын адамдармен сөйлесіңіз.',
    ctaSubheading: 'Senior мамандармен 15 минуттық қоңырау — сатушы емес.',
    ctaPrimary: 'Жоба бастау',
    ctaSecondary: 'Жұмыстарды көру',
  },

  servicesPage: {
    kicker: 'Қызметтер',
    heading: 'Бес функция. Бір жауапты команда.',
    subheading: 'Төмендегілердің бәрі — бүгінгі продакшеде жұмыс істеп тұрған мүмкіндіктер, тілек тізімі емес.',
    engagementHeading: 'Жұмыс форматтары',
    engagement: [
      { title: 'Жобалық құрастыру', detail: 'Нақты жүйе: скоуп, кезеңдік жеткізу, тұрақты көрсету ырғағы.' },
      { title: 'Операциялық ретейнер', detail: 'Құрылғанды сүйемелдеп, дамытамыз: мониторинг, баптаулар, бизнес өскен сайын жаңа функциялар.' },
      { title: 'Техникалық кеңесші', detail: 'Архитектураңызға, жұмысқа алуыңыз бен жол картасыңызға senior көзқарас — айына бірнеше күн.' },
    ],
    faqHeading: 'Жиі сұрақтар',
    ctaHeading: 'Қай функция керегін бilmейсіз бе?',
    ctaSubheading: 'Аптаңызды жеп жүрген қол жұмысты сипаттаңыз. Жүйе онымен не істей алатынын ашық айтамыз.',
  },

  faq: [
    {
      q: 'Қаншалықты тез бастауға болады?',
      a: 'Әдетте бір-екі аптаның ішінде: қысқа қоңырау, алғашқы кезеңнің жазбаша скоупы — бастаймыз. Үш айлық «зерттеулер» бізде жоқ.',
    },
    {
      q: 'Қазіргі құралдарымызбен жұмыс істейсіздер ме?',
      a: 'Иә, мәні де сонда. Алдымен бар нәрсені — CRM, ERP, мессенджерлерді — байланыстырып автоматтандырамыз, ал ау layk тек шынымен құтқарылмайтынды ауыстырамыз.',
    },
    {
      q: 'Жоба әдетте қанша тұрады?',
      a: 'Скоупқа байланысты: нүктелік автоматика мен толық өнім — басқа тарих. Бір қоңыраудан кейін нақты қолдануға болатын алғашқы кезеңге жазбаша баға береміз — қара жәшік жоқ.',
    },
    {
      q: 'Код пен инфрақұрылым кімдікі?',
      a: 'Сіздікі, бірінші күннен бастап. Репозиторийлер, бұлт аккаунттары мен құжаттама жеткізу барысында командаңызға беріледі.',
    },
    {
      q: 'Іске қосқаннан кейін не болады?',
      a: 'Көптеген клиенттер бізді операциялық ретейнерде қалдырады: мониторинг, баптаулар, кеңейтулер. Өзіңіз жүргізгіңіз келсе — оқыту мен нұсқаулықтармен тапсырамыз.',
    },
    {
      q: 'Қай тілдерде жұмыс істеуге болады?',
      a: 'Ағылшын, орыс және қазақ тілдерінде — қоңыраулар, құжаттама және жеткізетін интерфейстер.',
    },
  ],

  contact: {
    kicker: 'Байланыс',
    heading: 'Бүгін не қолмен жасалып жүргенін айтып беріңіз.',
    subheading: 'Хабарлама, қоңырау немесе дауыстық хабар — қайсысы жылдам болса. Нақты адам жауап береді.',
    channelsHeading: 'Тікелей байланыс',
    channels: [
      { id: 'whatsapp', label: 'WhatsApp', value: '+7 708 841 3062', href: 'https://wa.me/77088413062', note: 'Ең жылдам — әдетте бір сағат ішінде' },
      { id: 'telegram', label: 'Telegram', value: '@RahmetLabs', href: 'https://t.me/RahmetLabs', note: 'Сол күні' },
      { id: 'email', label: 'Пошта', value: 'rahmetlabs@gmail.com', href: 'mailto:rahmetlabs@gmail.com', note: '24 сағат ішінде' },
    ],
    guideHeading: 'Бұдан кейін не болады',
    guide: [
      { code: '01', title: 'Қол жұмысты сипаттайсыз', detail: 'Екі сөйлем жеткілікті. Бәрін өзіміз оқимыз — тикет кезегі мен аккаунт-менеджер жоқ.' },
      { code: '02', title: 'Біз ұстаныммен жауап береміз', detail: 'Алдымен нені автоматтандырған жөн, нені тиіспеген дұрыс және алғашқы жұмыс кезеңі қандай болуы мүмкін.' },
      { code: '03', title: 'Senior командамен 15 минуттық қоңырау', detail: 'Жүйеңізді құратын адамдар — сату бөлімі емес. Сәйкес келмесек, ашық айтамыз.' },
    ],
    socialHeading: 'Тағы қайдамыз',
    socials: [
      { label: 'GitHub', href: 'https://github.com/rahmetlabs' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/rahmetlabs' },
      { label: 'X', href: 'https://x.com/rahmetlabs' },
    ],
  },

  cta: {
    kicker: 'Бастау',
    heading: 'Аптаңызды жеп жүрген',
    headingAccent: 'қол жұмыстан бастаңыз.',
    subheading:
      'Командаңыз әлі қолмен істейтінін айтыңыз. Нақты жауап береміз: жүйе нені алуы мүмкін, оған не керек және алдымен не құрар едік.',
    primary: 'Жоба бастау',
    whatsapp: 'WhatsApp-қа жазу',
  },

  footer: {
    tagline: 'Автоматтандыру, AI жүйелері және инженерлік өнімдер — жобалаудан эксплуатацияға дейін бір жауапты команда.',
    mapLabel: 'Сайт',
    contactLabel: 'Байланыс',
    locationNote: 'Қазақстан · әлем бойынша командалармен · EN / RU / KZ',
    copyrightSuffix: 'Rahmet Labs. Клиенттер жүйелерімен бірдей мұқияттықпен жасалған.',
  },
};

export const content = { en, ru, kz };

export function getDictionary(locale) {
  return content[locale] || content.en;
}
