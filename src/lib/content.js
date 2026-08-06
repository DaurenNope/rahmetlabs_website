// Rahmet Labs — site content, curated per PRODUCT.md: no fabricated stats,
// no invented testimonials, no invented metrics. Live work carries real links.
// Languages: EN / RU / KZ.

const en = {
  meta: {
    home: {
      title: 'Rahmet Labs — Automation, AI & Product Engineering Studio',
      description:
        'Rahmet Labs replaces manual operations with automation, AI systems, and engineered products — built and run by one accountable team, from Almaty to the Gulf.',
      keywords: [
        'automation studio Kazakhstan',
        'AI development Almaty',
        'business automation Central Asia',
        'AI agents for business',
        'custom AI development',
        'web application development Kazakhstan',
        'mobile app development Almaty',
        'n8n automation',
        'process automation services',
        'full-stack development studio',
      ],
    },
    services: {
      title: 'Services — Automation, AI, Web, Mobile & Web3',
      description: 'Five functions, one accountable team: business automation, AI agents, web & mobile products, backend & data, and delivery & operations.',
      keywords: [
        'automation services Kazakhstan',
        'AI agent development',
        'business process automation',
        'web development services Almaty',
        'mobile app development Kazakhstan',
        'n8n workflow automation',
        'AI integration for business',
        'custom software development',
      ],
    },
    portfolio: {
      title: 'Work — Systems We Have Shipped',
      description: 'A sample of automation, AI, web, and Web3 systems Rahmet Labs has shipped — with live links where they exist.',
      keywords: [
        'automation projects Kazakhstan',
        'AI projects Almaty',
        'web3 projects Central Asia',
        'software development portfolio',
        'case studies automation',
      ],
    },
    about: {
      title: 'About Rahmet Labs — The Team That Builds Your Systems',
      description: 'Rahmet Labs is a small senior team building automation, AI, web/mobile, and Web3 systems — the people who scope your project are the people who build it.',
      keywords: [
        'about Rahmet Labs',
        'product studio Kazakhstan',
        'automation team Almaty',
        'software agency Central Asia',
      ],
    },
    contact: {
      title: 'Contact Rahmet Labs — Start a Project',
      description: 'Tell us what is manual today. Reach Rahmet Labs directly by WhatsApp, Telegram, or email.',
      keywords: [
        'contact automation studio',
        'start automation project',
        'hire AI developers Kazakhstan',
        'hire automation team Almaty',
      ],
    },
  },

  facts: {
    thesis: 'Your operations stop living in somebody’s head.',
    whatWeDo:
      'Rahmet Labs is a full-stack technology studio that builds business automation, AI systems, custom AI agents, web and mobile products, search-optimized content systems, and Web3 infrastructure for companies replacing manual operations with software.',
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
      'One senior team designs, ships, and runs the automation and AI that replace your spreadsheets, copy-paste, and follow-up threads. Software handles the busywork; your people run the business.',
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
    kicker: 'What we fix',
    heading: 'The work that stops moving your business forward.',
    subheading:
      'Five failure patterns we see again and again in Kazakhstani and regional companies — and the systems we build so they stop happening.',
    categories: [
      {
        id: 'automation',
        title: '“Someone still does this by hand.”',
        problem:
          'Invoices copied between Excel and the accounting system. Tender portals refreshed at midnight. Reports stitched together in a group chat.',
        problemTag: 'Manual ops',
        solution:
          'Workflows that run end-to-end: n8n/Make pipelines, browser automation, system sync, alerts when something needs a human — and only when.',
        solutionLabel: 'The system',
        outcome:
          'The same day\u2019s operations run without a person on duty. Approvals, invoicing, reporting, and tender notifications fire on their own schedule.',
        outcomeLabel: 'What goes away',
      },
      {
        id: 'ai',
        title: '“Tickets wait. Leads stall. Nobody answers fast enough.”',
        problem:
          'The support queue grows faster than the team can read it. Inbound leads sit in a messenger until a manager remembers. Decisions live in someone\u2019s head.',
        problemTag: 'Slow judgment',
        solution:
          'AI agents that read, classify, route, and draft — retrieval over your own documents and past answers, scoring of leads and tickets, matching, escalation to a human at the right moment. Custom agents and search-optimized content systems (SEO/AEO/GEO) built to win customers and get cited.',
        solutionLabel: 'The system',
        outcome:
          'Every ticket and message is triaged the moment it arrives. The queue stops growing faster than it drains.',
        outcomeLabel: 'What goes away',
      },
      {
        id: 'product',
        title: '“Our site doesn\u2019t actually do anything.”',
        problem:
          'The current web presence is a brochure. Clients can\u2019t apply, book, pay, or check status without calling a person. The admin\u2019s email inbox is the only workflow.',
        problemTag: 'Dead-end web',
        solution:
          'Web and mobile products where the client does the thing: applications, bookings, dashboards, CMS-driven sites your editors run without a developer.',
        solutionLabel: 'The product',
        outcome:
          'Clients finish business with you on the site at 2 a.m. Staff stop being the telephone switchboard for the internet.',
        outcomeLabel: 'What goes away',
      },
      {
        id: 'backend',
        title: '“Nobody knows which number is the right one.”',
        problem:
          'Sales, finance, and operations all show different figures. Data lives in three systems and a group chat. Leadership waits for the weekly reconciliation.',
        problemTag: 'Fragmented data',
        solution:
          'One data layer: Postgres or Supabase, APIs that sync the systems, auth and roles, monitoring, one dashboard the whole team actually trusts.',
        solutionLabel: 'The system',
        outcome:
          'Any figure leadership needs is one query away, not a weekly spreadsheet project.',
        outcomeLabel: 'What goes away',
      },
      {
        id: 'web3',
        title: '“The contract we need on-chain isn\u2019t built, and we can\u2019t afford a mistake.”',
        problem:
          'Tokens need minting, airdrops need distributing, multi-sig needs to not get the treasury drained. None of it can go wrong, and Solidity talent in Almaty is scarce.',
        problemTag: 'Risky on-chain ops',
        solution:
          'Smart contracts designed, tested, and multi-chain deployed (ETH, BSC, Arbitrum) with multi-sig pipelines and on-chain monitoring by default.',
        solutionLabel: 'The system',
        outcome:
          'The system goes to mainnet once, with audit discipline and bug-bounty coverage from the start — not after an incident.',
        outcomeLabel: 'What goes away',
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
      { title: 'One owner, end to end', detail: 'No relay between a strategy shop, a dev shop, and an ops consultant. The people who scope your system are the people who build and run it.' },
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
    techStackHeading: 'Technology we work with',
    techStack: [
      { category: 'Automation', items: ['n8n', 'Make', 'Zapier', 'Custom workflows', 'Browser automation (Playwright)', 'API integrations'] },
      { category: 'AI & ML', items: ['OpenAI GPT-4o / GPT-4', 'Claude 3.5 Sonnet', 'RAG systems', 'Custom AI agents', 'LangChain', 'Vector databases (Pinecone, pgvector)'] },
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Mobile (React Native)'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST & GraphQL APIs'] },
      { category: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Monitoring & alerting'] },
    ],
    useCasesHeading: 'Industries and use cases',
    useCases: [
      { title: 'Logistics & supply chain', description: 'Automate dispatch, tracking, invoicing, and customs documentation. Real-time visibility from warehouse to delivery.', keywords: 'logistics automation, supply chain AI, dispatch automation' },
      { title: 'E-commerce & retail', description: 'AI-powered product recommendations, automated order processing, inventory sync across marketplaces, and customer support bots.', keywords: 'e-commerce automation, AI customer support, inventory management' },
      { title: 'Professional services', description: 'Automate client intake, proposal generation, contract management, and time tracking. CRM integration with WhatsApp and Telegram.', keywords: 'CRM automation, client management, WhatsApp integration' },
      { title: 'Healthcare & clinics', description: 'Patient intake automation, appointment scheduling, medical records digitization, and insurance claim processing.', keywords: 'healthcare automation, clinic management, patient intake' },
      { title: 'Real estate', description: 'Property listing automation, lead qualification, viewing scheduling, and document generation for transactions.', keywords: 'real estate automation, property management, lead qualification' },
      { title: 'Education & training', description: 'Student enrollment automation, course management, progress tracking, and AI-powered learning assistants.', keywords: 'education automation, LMS integration, AI tutoring' },
    ],
    faqHeading: 'Common questions',
    ctaHeading: 'Not sure which function you need?',
    ctaSubheading: 'Describe the manual work that\'s eating your week. We\'ll tell you plainly what a system could do with it.',
  },

  faq: [
    {
      q: 'How fast can an automation project start?',
      a: 'Usually within one to two weeks. A short call, a written scope of the first stage, and we begin. We don’t run three-month discovery phases.',
    },
    {
      q: 'Will you integrate with our existing CRM, ERP, and messengers?',
      a: 'Yes — that’s the point. We connect and automate around your CRM, ERP, and the messengers your team already uses, and only replace what genuinely can’t be salvaged.',
    },
    {
      q: 'How much does business automation cost?',
      a: 'It depends on scope — a focused automation is a very different build from a full product. After one call we give a written estimate for a first stage you can actually use, so you never commit to a black box.',
    },
    {
      q: 'Who owns the code, data and infrastructure after delivery?',
      a: 'You do, from day one. Repos, cloud accounts, and documentation transfer to your team as part of delivery — no hostage holding.',
    },
    {
      q: 'What happens after the system is live?',
      a: 'Most clients keep us on an operational retainer for monitoring, adjustments, and extensions as the business changes. If you prefer to run it in-house, we hand over with training and runbooks.',
    },
    {
      q: 'Do you work in English, Russian and Kazakh?',
      a: 'Yes — all three, in calls, documentation, and the interfaces we ship.',
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
    offer: {
      kicker: 'Free diagnostic',
      title: 'We map your manual work into a scored system plan in your first week. You keep the plan whether or not we build — and if we do, the first stage is fixed-price.',
    },
    primary: 'Start a project',
    whatsapp: 'WhatsApp us',
  },

  notFound: {
    code: '404',
    heading: 'This page didn’t make it into the system.',
    body: 'The URL you followed doesn’t exist here — it may have moved, or never shipped. The rest of the site is very much live.',
    primary: 'Back to home',
    secondary: 'Start a project',
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
        'Rahmet Labs заменяет ручные операции автоматикой, ИИ-системами и инженерными продуктами — проектирует, запускает и сопровождает одна ответственная команда, из Алматы до Персидского залива.',
      keywords: [
        'автоматизация бизнеса Казахстан',
        'разработка ИИ Алматы',
        'ИИ-агенты для бизнеса',
        'автоматизация бизнес-процессов',
        'разработка AI агентов под ключ',
        'веб-разработка Казахстан',
        'мобильные приложения Алматы',
        'автоматизация на n8n',
        'интеграция ИИ для бизнеса',
        'студия разработки Казахстан',
      ],
    },
    services: {
      title: 'Услуги — автоматизация, ИИ, веб, мобайл и Web3',
      description: 'Пять функций, одна ответственная команда: автоматизация бизнеса, ИИ-агенты, веб- и мобильные продукты, бэкенд и сопровождение.',
      keywords: [
        'автоматизация процессов Казахстан',
        'ИИ-агенты под ключ',
        'разработка веб-приложений Алматы',
        'мобильные приложения Казахстан',
        'автоматизация на n8n',
        'интеграция ИИ для бизнеса',
        'разработка ПО на заказ',
      ],
    },
    portfolio: {
      title: 'Работы — запущенные системы',
      description: 'Примеры систем автоматизации, ИИ, веба и Web3, которые запустила Rahmet Labs, — с живыми ссылками, где они есть.',
      keywords: [
        'проекты автоматизации Казахстан',
        'ИИ-проекты Алматы',
        'web3 проекты Казахстан',
        'кейсы автоматизации бизнеса',
      ],
    },
    about: {
      title: 'О Rahmet Labs — команда, которая строит ваши системы',
      description: 'Rahmet Labs — небольшая senior-команда: автоматизация, ИИ, веб/мобайл и Web3. Кто оценивает проект, тот его и делает.',
      keywords: [
        'о rahmet labs',
        'продуктовая студия Казахстан',
        'команда автоматизации Алматы',
        'софт студия Центральная Азия',
      ],
    },
    contact: {
      title: 'Контакты Rahmet Labs — начать проект',
      description: 'Расскажите, что у вас до сих пор делается вручную. Напишите нам в WhatsApp, Telegram или на почту.',
      keywords: [
        'связаться со студией автоматизации',
        'начать проект автоматизации',
        'нанять разработчиков ИИ Казахстан',
        'нанять команду автоматизации Алматы',
      ],
    },
  },

  facts: {
    thesis: 'Ваши операции перестают жить в чьей-то голове.',
    whatWeDo:
      'Rahmet Labs — продуктовая технологическая студия: автоматизация бизнеса, ИИ-системы, кастомные ИИ-агенты, веб- и мобильные продукты, поисково-оптимизированные контент-системы (SEO/AEO/GEO) и Web3-инфраструктура для компаний, которые заменяют ручные операции софтом.',
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
    line3Tail: 'которые этому кладут конец.',
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
    kicker: 'Что мы исправляем',
    heading: 'То, что останавливает ваш бизнес.',
    subheading:
      'Пять паттернов, которые мы снова и снова видим в компаниях Казахстана и региона — и системы, которые мы строим, чтобы они перестали случаться.',
    categories: [
      {
        id: 'automation',
        title: '«Кто-то до сих пор делает это руками»',
        problem:
          'Счета перепечатываются между Excel и бухгалтерией. Тендерные порталы обновляются ночью. Отчёты склеиваются в групповом чате.',
        problemTag: 'Ручная операционка',
        solution:
          'Сквозные пайплайны: n8n/Make, браузерная автоматизация, синхронизация систем, алерты только там, где нужен человек.',
        solutionLabel: 'Система',
        outcome:
          'День проходит без дежурного. Согласования, счета, отчётность и тендерные уведомления идут по своему расписанию, а не по чьему-то настроению.',
        outcomeLabel: 'Что исчезает',
      },
      {
        id: 'ai',
        title: '«Тикеты висят. Лиды остывают. Никто не отвечает достаточно быстро»',
        problem:
          'Очередь поддержки растёт быстрее, чем команда успевает читать. Входящие лиды лежат в мессенджере, пока менеджер не вспомнит. Решения живут в чьей-то голове.',
        problemTag: 'Медленное решение',
        solution:
          'ИИ-агенты, которые читают, классифицируют, маршрутизируют и черновят: RAG по вашим документам и прошлым ответам, скоринг лидов и тикетов, сопоставление, эскалация человеку в нужный момент. Кастомные агенты и поисково-оптимизированные контент-системы (SEO/AEO/GEO), которые привлекают клиентов и цитируются.',
        solutionLabel: 'Система',
        outcome:
          'Каждый тикет и каждое сообщение разбирается в момент появления. Очередь перестаёт расти быстрее, чем она осушается.',
        outcomeLabel: 'Что исчезает',
      },
      {
        id: 'product',
        title: '«Наш сайт на самом деле ничего не делает»',
        problem:
          'Текущее веб-присутствие — брошюра. Клиенты не могут оформить, забронировать, оплатить или проверить статус без звонка. Единственный workflow — почта админа.',
        problemTag: 'Веб-тупик',
        solution:
          'Веб- и мобильные продукты, где клиент делает дело: заявки, бронирования, дашборды, сайты на CMS, которыми ваши редакторы управляют без разработчика.',
        solutionLabel: 'Продукт',
        outcome:
          'Клиенты закрывают сделку с вами онлайн в два часа ночи. Персонал перестаёт быть телефонным коммутатором для интернета.',
        outcomeLabel: 'Что исчезает',
      },
      {
        id: 'backend',
        title: '«Никто не знает, какая цифра — правильная»',
        problem:
          'Продажи, финансы и операционка показывают разные цифры. Данные живут в трёх системах и групповом чате. Руководство ждёт еженедельной сверки.',
        problemTag: 'Фрагментированные данные',
        solution:
          'Один слой данных: Postgres или Supabase, API, которые связывают системы, авторизация и роли, мониторинг, один дашборд, которому реально доверяют.',
        solutionLabel: 'Система',
        outcome:
          'Любая цифра руководству — один запрос сейчас, а не недельный проект в Excel.',
        outcomeLabel: 'Что исчезает',
      },
      {
        id: 'web3',
        title: '«Контракт на цепи не построен — и ошибиться мы себе не можем позволить»',
        problem:
          'Токены нужно эмитировать, airdrop — раздать, multi-sig не должен сжечь treasury. В Алматы мало Solidity-инженеров, и никто не должен ошибиться.',
        problemTag: 'Рискованные он-чейн операции',
        solution:
          'Смарт-контракты, спроектированные, протестированные и задеплоенные multi-chain (ETH, BSC, Arbitrum) с multi-sig-конвейерами и он-чейн мониторингом по умолчанию.',
        solutionLabel: 'Система',
        outcome:
          'Система уходит в mainnet один раз — с аудит-дисциплиной и bug-bounty со старта, а не после инцидента.',
        outcomeLabel: 'Что исчезает',
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
    contactPrompt: 'Задумали похожую систему?',
    contactCta: 'Начать проект',
  },

  comparison: {
    kicker: 'Вручную vs система',
    heading: 'Одна почта. Два способа с ней жить.',
    subheading: 'Иллюстративная модель типичной недели поддержки — что меняется, когда очередью владеет система.',
    note: 'Иллюстративная модель, не метрика клиента.',
    seriesManual: 'Вручную',
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
      { title: 'Один владелец от начала до конца', detail: 'Без эстафеты между консультантами, подрядчиком по разработке и эксплуатацией. Кто оценивает систему, тот её и строит.' },
      { title: 'Всё принадлежит вам', detail: 'Репозитории, инфраструктура и документация передаются с первого дня. Исчезнем завтра — ваши системы продолжат работать.' },
      { title: 'Работающий софт на каждом шаге', detail: 'На каждом этапе вы видите что-то реальное — расхождение в ожиданиях стоит дни, а не квартал.' },
      { title: 'Остаёмся после запуска', detail: 'Автоматика и ИИ дрейфуют вместе с бизнесом. Мы сопровождаем и настраиваем их, а не исчезаем после сдачи.' },
    ],
  },

  about: {
    kicker: 'О нас',
    heading: 'Небольшая senior-команда, а не слой аккаунт-менеджмента.',
    subheading:
      'Rahmet Labs — продуктовая технологическая студия: автоматизация, ИИ-системы, веб- и мобильные продукты, Web3-инфраструктура — и всё делает та же команда, которая реально строит.',
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
        bio: 'Специалисты по автоматизации процессов, интеграции LLM и оркестрации систем — подключаются к частям по автоматизации и ИИ внутри сборки.',
      },
      {
        name: 'Кольцо дизайна и поставки',
        role: 'Дизайн · QA · Запуск',
        bio: 'Люди, которые следят, чтобы результат был удобным, протестированным и готовым к работе вашей команды с первого дня, — а не прототип, приукрашенный под демо.',
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
    techStackHeading: 'Технологии, с которыми работаем',
    techStack: [
      { category: 'Автоматизация', items: ['n8n', 'Make', 'Zapier', 'Кастомные пайплайны', 'Браузерная автоматизация (Playwright)', 'API-интеграции'] },
      { category: 'ИИ и ML', items: ['OpenAI GPT-4o / GPT-4', 'Claude 3.5 Sonnet', 'RAG-системы', 'Кастомные ИИ-агенты', 'LangChain', 'Векторные БД (Pinecone, pgvector)'] },
      { category: 'Фронтенд', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Мобильные (React Native)'] },
      { category: 'Бэкенд', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST & GraphQL API'] },
      { category: 'Инфраструктура', items: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Мониторинг и алертинг'] },
    ],
    useCasesHeading: 'Отрасли и кейсы',
    useCases: [
      { title: 'Логистика и цепочки поставок', description: 'Автоматизация диспетчеризации, отслеживания, счетов и таможенной документации. Видимость в реальном времени от склада до доставки.', keywords: 'автоматизация логистики, AI в цепочках поставок, автоматизация диспетчеризации' },
      { title: 'E-commerce и ритейл', description: 'AI-рекомендации товаров, автоматическая обработка заказов, синхронизация остатков на маркетплейсах и чат-боты поддержки.', keywords: 'автоматизация e-commerce, AI поддержка клиентов, управление остатками' },
      { title: 'Профессиональные услуги', description: 'Автоматизация обработки клиентов, генерации предложений, управления контрактами и учёта времени. Интеграция CRM с WhatsApp и Telegram.', keywords: 'автоматизация CRM, управление клиентами, интеграция WhatsApp' },
      { title: 'Здравоохранение и клиники', description: 'Автоматизация записи пациентов, расписания приёмов, оцифровки медкарт и обработки страховых выплат.', keywords: 'автоматизация здравоохранения, управление клиникой, запись пациентов' },
      { title: 'Недвижимость', description: 'Автоматизация публикации объявлений, квалификации лидов, записи на просмотр и генерации документов для сделок.', keywords: 'автоматизация недвижимости, управление объектами, квалификация лидов' },
      { title: 'Образование и обучение', description: 'Автоматизация зачисления студентов, управления курсами, отслеживания прогресса и AI-ассистентов для обучения.', keywords: 'автоматизация образования, интеграция LMS, AI-репетитор' },
    ],
    faqHeading: 'Частые вопросы',
    ctaHeading: 'Не уверены, какая функция нужна?',
    ctaSubheading: 'Опишите ручную работу, которая съедает вашу неделю. Честно скажем, что с ней может сделать система.',
  },

  faq: [
    {
      q: 'Как быстро можно начать проект по автоматизации?',
      a: 'Обычно в течение одной-двух недель: короткий звонок, письменный скоуп первого этапа — и стартуем. Трёхмесячных «исследований» у нас нет.',
    },
    {
      q: 'Вы интегрируете с нашей текущей CRM, ERP и мессенджерами?',
      a: 'Да, в этом и смысл. Сначала соединяем и автоматизируем то, что есть — CRM, ERP, мессенджеры, — и заменяем только то, что правда не спасти.',
    },
    {
      q: 'Сколько стоит автоматизация бизнеса?',
      a: 'Зависит от скоупа: точечная автоматизация и полноценный продукт — разные истории. После одного звонка даём письменную оценку первого этапа, которым можно будет пользоваться, — никаких чёрных ящиков.',
    },
    {
      q: 'Кому после сдачи принадлежат код, данные и инфраструктура?',
      a: 'Вам, с первого дня. Репозитории, облачные аккаунты и документация передаются вашей команде в рамках поставки — ничего не держим в заложниках.',
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
    offer: {
      kicker: 'Бесплатная диагностика',
      title: 'На первой неделе разберём вашу ручную работу и составим скоринговый план системы. План остаётся у вас, даже если мы ничего не строим. Если строим — первый этап по фиксированной цене.',
    },
    primary: 'Начать проект',
    whatsapp: 'Написать в WhatsApp',
  },

  notFound: {
    code: '404',
    heading: 'Эта страница не попала в систему.',
    body: 'По этому адресу ничего нет — страница могла переехать или так и не появиться. Остальной сайт работает как надо.',
    primary: 'На главную',
    secondary: 'Начать проект',
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
        'Rahmet Labs қолмен жұмысты автоматикаға, AI жүйелеріне және инженерлік өнімдерге ауыстырады — жобалау, іске қосу және сүйемелдеу бәрі бір жауапты командада, Алматыдан Парсы шығанағына дейін.',
      keywords: [
        'бизнес автоматтандыру Қазақстан',
        'AI әзірлеу Алматы',
        'AI агенттер бизнес үшін',
        'автоматтандыру қызметтері',
        'веб әзірлеу Қазақстан',
        'мобиль қосымшалар Алматы',
        'n8n автоматтандыру',
        'программа әзірлеу студиясы',
      ],
    },
    services: {
      title: 'Қызметтер — автоматтандыру, AI, веб, мобайл және Web3',
      description: 'Бес функция, бір жауапты команда: автоматтандыру, AI агенттер, веб және мобиль өнімдер, бэкенд пен эксплуатация.',
      keywords: [
        'автоматтандыру қызметтері Қазақстан',
        'AI агенттер Алматы',
        'веб қосымшалар әзірлеу',
        'мобиль қосымшалар Қазақстан',
        'n8n автоматтандыру',
        'программа әзірлеу',
      ],
    },
    portfolio: {
      title: 'Жұмыстар — іске қосылған жүйелер',
      description: 'Rahmet Labs іске қосқан автоматтандыру, AI, веб және Web3 жүйелерінің таңдауы — тірі сілтемелерімен.',
      keywords: [
        'автоматтандыру жобалары Қазақстан',
        'AI жобалары Алматы',
        'web3 жобалары',
        'программа әзірлеу портфолиосы',
      ],
    },
    about: {
      title: 'Rahmet Labs туралы — жүйеңізді құратын команда',
      description: 'Rahmet Labs — шағын senior команда: автоматтандыру, AI, веб/мобайл және Web3. Жобаны бағалағандар оны өздері құрады.',
      keywords: [
        'rahmet labs туралы',
        'өнім студиясы Қазақстан',
        'автоматтандыру командасы Алматы',
      ],
    },
    contact: {
      title: 'Rahmet Labs байланыс — жобаны бастау',
      description: 'Бүгін не әлі қолмен жасалып жүргенін айтыңыз. WhatsApp, Telegram немесе пошта арқылы жазыңыз.',
      keywords: [
        'автоматтандыру студиясымен байланыс',
        'жоба бастау',
        'AI әзірлеушілер жалдау Қазақстан',
      ],
    },
  },

  facts: {
    thesis: 'Операцияларыңыз біреудің есінде өмір сүруін тоқтатады.',
    whatWeDo:
      'Rahmet Labs — қолмен операцияларды бағдарламамен ауыстырған компанияларға автоматтандыру, AI жүйелері, арнайы AI агенттер, веб және мобиль өнімдер, іздеуге оңтайландырылған контент жүйелері және Web3 инфрақұрылымын құратын full-stack технология студиясы.',
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
    kicker: 'Не түзетеміз',
    heading: 'Бизнесіңізді тоқтататын жұмыс.',
    subheading:
      'Қазақстандық және аймақтық компанияларда қайта-қайта кездесетін бес сәтсіздік үлгісі — және олар тоқтауы үшін құратын жүйелер.',
    categories: [
      {
        id: 'automation',
        title: '«Мұны әлі біреу қолмен істейді»',
        problem:
          'Шоттар Excel мен бухгалтерия жүйесінің арасында көшіріліп жүр. Тендер порталдары түн ортасында жаңартылады. Есептер топтық чатта құрастырылады.',
        problemTag: 'Қолмен істелетін операция',
        solution:
          'Аяқ-аяғына дейін жүретін пайплайндар: n8n/Make, браузерлік автоматика, жүйе синхроны, тек адам керек жерде ғана хабарламалар.',
        solutionLabel: 'Жүйе',
        outcome:
          'Күн кезекші жұмысшысыз өтеді. Келісімдер, шоттар, есептілік және тендер хабарламалары өз кестесімен жүреді.',
        outcomeLabel: 'Не жойылады',
      },
      {
        id: 'ai',
        title: '«Тикеттер күтеді. Лидтер тоңайды. Ешкім жеткілікті тез жауап бермейді»',
        problem:
          'Қолдау кезегі команда оқитынан тез өседі. Кіріс лидтер жеткізбейтін мессенджерде кешке дейін жатады. Шешімдер біреудің басында қалады.',
        problemTag: 'Баяу шешім',
        solution:
          'Оқитын, жіктейтін, маршруттайтын және жоба дайындайтын AI агенттер: құжаттарыңыз бен өткен жауаптар бойынша RAG, лидтер мен тикеттер скорингі, дұрыс сәтте адамға эскалация. Клиенттерді тартатын және дәйексөз алатын арнайы агенттер мен іздеуге оңтайландырылған контент жүйелері (SEO/AEO/GEO).',
        solutionLabel: 'Жүйе',
        outcome:
          'Әр тикет пен хабарлама пайда болған сәтте сұрыпталады. Кезек босағанынан тез өспейді.',
        outcomeLabel: 'Не жойылады',
      },
      {
        id: 'product',
        title: '«Біздің сайт іс жүзінде ештеңе істемейді»',
        problem:
          'Қазіргі веб-қатысымыз — жай брошюра. Клиенттер адамға қоңырау шалмай-ақ өтініш бере, брондай, төлей немесе мәртебені тексере алмайды. Жалғыз жұмыс барысы — әкімшінің поштасы.',
        problemTag: 'Веб-тоқырау',
        solution:
          'Клиенттің істі өзі бітіретін веб және мобиль өнімдер: өтініштер, брондау, дашбордтар, редакторларыңыз әзірлеушісіз басқаратын CMS сайттар.',
        solutionLabel: 'Өнім',
        outcome:
          'Клиенттер түнгі екіде сізбен онлайн істі бітіреді. Қызметкерлер интернет үшін телефон коммутаторы болуды доғарады.',
        outcomeLabel: 'Не жойылады',
      },
      {
        id: 'backend',
        title: '«Қай сан дұрыс — ешкім білмейді»',
        problem:
          'Сату, қаржы және операциялық әртүрлі сандарды көрсетеді. Деректер үш жүйеде және топтық чатта тұрады. Басшылық апталық түзетуді күтеді.',
        problemTag: 'Бытыраңқы деректер',
        solution:
          'Бір деректер қабаты: Postgres немесе Supabase, жүйелерді синхрондайтын API, авторизация мен рөлдер, мониторинг, бүкіл команда нағыз сенетін бір дашборд.',
        solutionLabel: 'Жүйе',
        outcome:
          'Басшылыққа керек кез келген сан — апталық Excel жобасы емес, бір сұраныс қашықтықта.',
        outcomeLabel: 'Не жойылады',
      },
      {
        id: 'web3',
        title: '«Он-чейнде керек келісімшарт әлі құрылмаған — және қатеге жол жоқ»',
        problem:
          'Токендер эмитталуы керек, airdrop таратылуы керек, multi-sig treasury-ні жағбау керек. Алматыда Solidity инженерлері сирек, және ешкім қателесе алмайды.',
        problemTag: 'Қауіпті он-чейн',
        solution:
          'Жобаланған, тесттен өткен және multi-chain деплой (ETH, BSC, Arbitrum) смарт-келісімшарттар — multi-sig конвейерлері мен он-чейн мониторингі үнсіз келісім бойынша.',
        solutionLabel: 'Жүйе',
        outcome:
          'Жүйе mainnet-ке бір рет шығады — аудит тәртібі мен bug-bounty басынан бастап, инциденттен кейін емес.',
        outcomeLabel: 'Не жойылады',
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
          'Әкімші панелі + браузерлік автоматика: мемлекеттік сатып алуларды бақылап, жауап жобаларын дайындап, қолмен бақылаусыз орындауға береді.',
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
          'Стартаптар мен мемлекеттік бағдарламаларға арналған ондаған локализацияланған беттер іске қосылған қайталанатын лендинг фреймворкі — ортақ аналитикамен және CRM-ммен.',
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
      { title: 'Қарапайым сұрақ', manual: 'Сол жауап қырқыншы рет көшіріледі.', auto: 'Өз білім қорыңыздан лезде жауап.' },
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
          'Бүгін нақты не болып жатқанын карталаймыз: құралдар, қолмен қадамдар, ешкім жазбаған тапсыру-қолдан-қолға берілістер — бірдеңе ұсынар алдында.',
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
      { title: 'Басынан аяғына дейін бір ие', detail: 'Консультант, әзірлеу мердігері және эксплуатация арасындағы эстафета жоқ. Жүйені бағалағандар оны өздері құрады.' },
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
    techStackHeading: 'Қолданатын технологиялар',
    techStack: [
      { category: 'Автоматтандыру', items: ['n8n', 'Make', 'Zapier', 'Арнайы пайплайндар', 'Браузерлік автоматика (Playwright)', 'API интеграциялары'] },
      { category: 'AI және ML', items: ['OpenAI GPT-4o / GPT-4', 'Claude 3.5 Sonnet', 'RAG жүйелері', 'Арнайы AI агенттер', 'LangChain', 'Векторлық БД (Pinecone, pgvector)'] },
      { category: 'Фронтенд', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Мобильді (React Native)'] },
      { category: 'Бэкенд', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST & GraphQL API'] },
      { category: 'Инфрақұрылым', items: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Мониторинг және алертинг'] },
    ],
    useCasesHeading: 'Салалар мен жағдайлар',
    useCases: [
      { title: 'Логистика және жеткізу тізбегі', description: 'Диспетчерлендіруді, бақылауды, есеп-қисапты және кеден құжаттамасын автоматтандыру. Қоймадан жеткізуге дейінгі нақты уақыттағы көрініс.', keywords: 'логистика автоматтандыру, AI жеткізу тізбегі, диспетчерлендіру автоматтандыру' },
      { title: 'E-commerce және ритейл', description: 'AI ұсынымдары, автоматты тапсырыстарды өңдеу, маркетплейстердегі қалдықтарды синхрондау және қолдау чат-боттары.', keywords: 'e-commerce автоматтандыру, AI клиенттерге қолдау, қалдықтарды басқару' },
      { title: 'Кәсіби қызметтер', description: 'Клиенттерді қабылдауды, ұсыныстарды жасауды, келісімшарттарды басқаруды және уақыт есебін автоматтандыру. WhatsApp және Telegramмен CRM интеграциясы.', keywords: 'CRM автоматтандыру, клиенттерді басқару, WhatsApp интеграциясы' },
      { title: 'Денсаулық сақтау және клиникалар', description: 'Науқастарды қабылдауды, қабылдау кестесін, медициналық құжаттарды цифрландыруды және сақтандыру төлемдерін өңдеуді автоматтандыру.', keywords: 'денсаулық сақтау автоматтандыру, клиниканы басқару, науқастарды қабылдау' },
      { title: 'Жылжымайтын мүлік', description: 'Жарнамаларды жариялауды, лауазымдарды квалификациялауды, көрсетілімдерге жазылуды және мәмілeler үшін құжаттарды генерациялауды автоматтандыру.', keywords: 'жылжымайтын мүлік автоматтандыру, объектілерді басқару, лауазымдарды квалификациялау' },
      { title: 'Білім беру және оқыту', description: 'Студенттерді қабылдауды, курстарды басқаруды, прогресті бақылауды және AI оқыту ассистенттерін автоматтандыру.', keywords: 'білім беру автоматтандыру, LMS интеграциясы, AI репетитор' },
    ],
    faqHeading: 'Жиі сұрақтар',
    ctaHeading: 'Қай функция керегін білмейсіз бе?',
    ctaSubheading: 'Аптаңызды жеп жүрген қол жұмысты сипаттаңыз. Жүйе онымен не істей алатынын ашық айтамыз.',
  },

  faq: [
    {
      q: 'Автоматтандыру жобасын қаншалықты тез бастауға болады?',
      a: 'Әдетте бір-екі аптаның ішінде: қысқа қоңырау, алғашқы кезеңнің жазбаша скоупы — бастаймыз. Үш айлық «зерттеулер» бізде жоқ.',
    },
    {
      q: 'Біздің қазіргі CRM, ERP және мессенджерлерімізге интеграциялайсыздар ма?',
      a: 'Иә, мәні де сонда. Алдымен бар нәрсені — CRM, ERP, мессенджерлерді — байланыстырып автоматтандырамыз, ал тек шынымен құтқарылмайтынды ауыстырамыз.',
    },
    {
      q: 'Бизнесті автоматтандыру қанша тұрады?',
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
    offer: {
      kicker: 'Тегін диагностика',
      title: 'Бірінші аптада қол жұмысыңызды бағалау жүйесі жоспарына айналдырамыз. Жоспар сізде қалады — біз құрасақ та, құрмасақ та. Құрсақ — бірінші кезең бекітілген бағамен.',
    },
    primary: 'Жоба бастау',
    whatsapp: 'WhatsApp-қа жазу',
  },

  notFound: {
    code: '404',
    heading: 'Бұл бет жүйеге кірмеген.',
    body: 'Бұл мекенжайда ештеңе жоқ — бет ауысқан немесе мүлде шықпаған болуы мүмкін. Сайттың қалғаны жұмыс істеп тұр.',
    primary: 'Басты бетке',
    secondary: 'Жоба бастау',
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
