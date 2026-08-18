// Rahmet Labs: site content, curated per PRODUCT.md: no fabricated stats,
// no invented testimonials, no invented metrics. Live work carries real links.
// Languages: EN / RU / KZ.

const en = {
  meta: {
    home: {
      title: 'Business Automation & AI Development in Kazakhstan · Rahmet Labs',
      description:
        'Rahmet Labs designs, builds, and operates the automation and AI systems that replace manual work. One accountable team, based in Almaty.',
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
      title: 'Services: Automation, AI, Web, Mobile & Web3',
      description: 'Five functions, one accountable team: automation, AI agents, web and mobile products, data systems, and Web3 infrastructure.',
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
    products: {
      title: 'Ready-made systems with fixed prices · Rahmet Labs',
      description: 'Four ready-made systems with published prices: websites that take orders, bots that answer clients, inboxes that answer themselves, content that publishes itself. Live in days.',
      keywords: [
        'fixed price website Kazakhstan',
        'telegram bot for business',
        'AI inbox automation',
        'automated content publishing',
        'productized services Almaty',
      ],
    },
    portfolio: {
      title: 'Work: Systems We Have Shipped',
      description: 'Automation, AI, web, and Web3 systems shipped by Rahmet Labs, with live links where they exist.',
      keywords: [
        'automation projects Kazakhstan',
        'AI projects Almaty',
        'web3 projects Central Asia',
        'software development portfolio',
        'case studies automation',
      ],
    },
    about: {
      title: 'About Rahmet Labs: The Team That Builds Your Systems',
      description: 'Rahmet Labs is a small senior team building automation, AI, web/mobile, and Web3 systems. The people who scope your project are the people who build it.',
      keywords: [
        'about Rahmet Labs',
        'product studio Kazakhstan',
        'automation team Almaty',
        'software agency Central Asia',
      ],
    },
    contact: {
      title: 'Contact Rahmet Labs: Start a Project',
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
      'Rahmet Labs is a business automation and AI development studio based in Almaty, Kazakhstan. We build and run process automation, AI agents, and web products for companies across Central Asia and the Gulf.',
    whoFor:
      'Founders, operations leaders, and technical teams who need one accountable partner instead of separate freelancers for strategy, automation, and engineering.',
    basedIn: 'Rahmet Labs is based in Kazakhstan and works with clients across Central Asia, Europe, and the Gulf.',
  },

  nav: {
    wordmark: 'RAHMET LABS',
    closeWordmark: 'RL',
    links: [
      { label: 'Work', href: '/portfolio' },
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
    ],
    cta: 'Start a project',
    menuLabel: 'Menu',
    closeLabel: 'Close',
    skipLabel: 'Skip to content',
  },

  newsletter: {
    heading: 'Notes from running systems',
    body: 'Occasional writing on automation, AI, and system design, drawn from systems we build and run. No spam. Unsubscribe anytime.',
    label: 'Email address',
    placeholder: 'your@email.com',
    button: 'Get the notes',
    loading: 'Subscribing…',
    empty: 'Enter your email address.',
    network: 'Network error. Please try again.',
  },

  hero: {
    kicker: 'Rahmet Labs: Automation, AI & Software',
    line1: 'Your business',
    line2: 'is drowning in',
    line2Accent: 'manual work.',
    line3: 'We build',
    line3Accent: 'the systems',
    line3Tail: 'that end it.',
    line4: 'You own everything we build.',
    subheadline:
      'Systems that replace your spreadsheets, copy-paste, and follow-up threads. Ready-made at published prices. Custom starts with a free Scan.',
    ctaPrimary: 'Tell us what’s manual',
    ctaSecondary: 'See the work',
    supportingLabel: 'One accountable team · EN / RU / KZ',
    supportingChannels: 'WhatsApp, Telegram, or email',
    scrollLabel: 'Scroll',
    skipLabel: 'Skip the intro',
    weeksLabel: 'First call to running system',
    weeksValue: '4–12 weeks',
    marginNotes: [
      'fig. 01 · the week, observed',
      'note · it was never effort',
      'after · one clean line',
    ],
  },

  thread: {
    chapters: [
      {
        key: '01',
        title: 'The work is invisible until it breaks.',
        lead: 'Someone copies numbers into a spreadsheet. Someone remembers to send the invoice. Someone checks the tender portal at midnight. None of it is in a system; all of it is in somebody’s head.',
        detail: 'Hiring more people grows the chaos, not the capacity.',
      },
      {
        key: '02',
        title: 'It is not effort. It is architecture.',
        lead: 'Most of what your team does by hand is a repeatable pattern: watch, compare, copy, decide, send. Repeatable patterns are exactly what software is for.',
        detail: 'You already pay for this work: in salaries, in errors, in tenders nobody saw.',
      },
      {
        key: '03',
        title: 'We build that system. Then we run it.',
        lead: 'Automation that runs itself. AI that reads and decides. Products your clients actually use. Designed, shipped, and operated by one accountable team.',
        detail: 'First call to running system: 4-12 weeks. You own everything.',
      },
    ],
  },

  whatWeBuild: {
    kicker: 'What we fix',
    figLabel: 'FIG',
    countLabel: 'failure patterns',
    headingHome: 'Four breakdowns. Four systems.',
    subheadingHome:
      'Four failure patterns we see across Kazakhstan and the region, and the systems we build to end them.',
    bridge: "Three systems we've shipped are live and clickable. The full list is below.",
    heading: 'Five breakdowns. Five systems.',
    subheading:
      'Five failure patterns we see across Kazakhstan and the region, and the systems we build to end them.',
    categories: [
      {
        id: 'automation',
        title: '“Someone still does this by hand.”',
        problem:
          'Invoices copied between Excel and the accounting system. Tender portals refreshed at midnight. Reports stitched together in a group chat.',
        problemTag: 'Manual ops',
        solution:
          'Workflows that run end-to-end: n8n/Make pipelines, browser automation, system sync, alerts when something needs a human, and only when.',
        solutionLabel: 'The system',
        outcome:
          'The same day\u2019s operations run without a person on duty. Approvals, invoicing, reporting, and tender notifications fire on their own schedule.',
        delivers: [
          'A running pipeline, documented end to end',
          'Alerts and a human-escalation path',
          'A dashboard of what ran and what failed',
        ],
        outcomeLabel: 'What goes away',
      },
      {
        id: 'ai',
        title: '“Tickets wait. Leads stall. Nobody answers fast enough.”',
        problem:
          'The support queue grows faster than the team can read it. Inbound leads sit in a messenger until a manager remembers. Decisions live in someone\u2019s head.',
        problemTag: 'Slow judgment',
        solution:
          'AI agents that read, classify, route, and draft: answers from your own documents and past replies, lead and ticket scoring, escalation to a human at the right moment.',
        solutionLabel: 'The system',
        outcome:
          'Every ticket and message is triaged the moment it arrives. The queue finally drains faster than it fills.',
        delivers: [
          'An agent trained on your documents and past replies',
          'Routing and escalation rules you can edit yourself',
          'A log of every decision it made',
        ],
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
          'Clients finish business with you at 2 a.m. Your staff stops being the switchboard.',
        delivers: [
          'A deployed product your clients actually use',
          'A CMS your editors own',
          'Analytics wired from day one',
        ],
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
        delivers: [
          'One database of record',
          'APIs syncing the tools you already have',
          'The dashboard leadership actually trusts',
        ],
        outcomeLabel: 'What goes away',
      },
      {
        id: 'web3',
        title: '“The contract we need on-chain isn\u2019t built, and we can\u2019t afford a mistake.”',
        problem:
          'Tokens to mint, airdrops to distribute, a treasury multi-sig to protect. None of it can go wrong, and Solidity talent in Almaty is scarce.',
        problemTag: 'Risky on-chain ops',
        solution:
          'Smart contracts designed, tested, and multi-chain deployed (ETH, BSC, Arbitrum) with multi-sig pipelines and on-chain monitoring by default.',
        solutionLabel: 'The system',
        outcome:
          'The system goes to mainnet once, with audit discipline and bug-bounty coverage from the start, not after an incident.',
        delivers: [
          'Tested, audit-ready contracts',
          'A multi-sig deployment pipeline',
          'On-chain monitoring and runbooks',
        ],
        outcomeLabel: 'What goes away',
      },
    ],
  },

  work: {
    kicker: 'Selected work',
    heading: 'Systems we’ve shipped.',
    subheading: 'Real, verifiable work. Live links wherever they exist.',
    archiveLink: 'All work',
    statusLive: 'Live',
    statusShipped: 'Shipped',
    servicesPrompt: 'Need one of these in your business?',
    servicesLink: 'See the services',
    viewLabel: 'Open',
    positions: [
      {
        code: '01',
        title: 'Education Platform Suite',
        type: 'Web & Product',
        description:
          'Three production sites for university and education clients: admissions, program pages, and CMS-driven content built for editors who aren’t developers.',
        tech: ['Next.js', 'React', 'CMS'],
        status: 'live',
        links: [
          { label: 'ageu.edu.kz', url: 'https://ageu.edu.kz', img: '/work/ageu.png' },
          { label: 'q-university.edu.kz', url: 'https://q-university.edu.kz', img: '/work/q-university.png' },
          { label: 'qgroup.asia', url: 'https://qgroup.asia', img: '/work/qgroup.png' },
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
        links: [{ label: 'beyondlines-web.vercel.app', url: 'https://beyondlines-web.vercel.app', img: '/work/beyondlines.png' }],
      },
      {
        code: '03',
        title: 'Unhireable',
        type: 'AI & Automation',
        description:
          'A desktop job-search system that scrapes hh.kz, Wellfound, and LinkedIn, matches roles with AI, and generates tailored résumés automatically.',
        tech: ['Desktop app', 'AI matching', 'Multi-platform scraping'],
        status: 'live',
        links: [{ label: 'unhireable-website.vercel.app', url: 'https://unhireable-website.vercel.app', img: '/work/unhireable.png' }],
      },
      {
        code: '04',
        title: 'Multi-Platform Bot Suite',
        type: 'Automation',
        description:
          'A shared automation layer behind WhatsApp, Telegram, and Twitter: one routing brain, three channels, no duplicated logic to maintain.',
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
    privateNote: 'Private system. Ask for a live walkthrough on the call.',
    fullLedger: 'The full ledger',
  },

  // Terminal comparison: illustrative model of a support inbox, not a client metric.
  comparison: {
    kicker: 'Manual vs system',
    heading: 'Same inbox. Two ways to run it.',
    subheading: 'A typical support week, modeled two ways: what changes when a system owns the queue.',
    note: 'Illustrative model, not a client metric.',
    seriesManual: 'By hand',
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
    sheetLabel: 'SHEET',
    heading: 'Four to twelve weeks from chaos to a running system.',
    subheading: 'Every stage ends with something you can use, not a slide deck.',
    stages: [
      {
        code: '01',
        title: 'Scan',
        duration: '1 week',
        description:
          'We map what actually happens today before proposing anything: the tools, the manual steps, the handoffs nobody documented.',
        output: 'A written map of your manual work. Yours either way.',
      },
      {
        code: '02',
        title: 'Design',
        duration: '1–2 weeks',
        description:
          'We architect the system: what gets automated, what gets built, what stays human, and how it all talks to each other.',
        output: 'The blueprint: scope, stages, and the price in writing.',
      },
      {
        code: '03',
        title: 'Build & ship',
        duration: '2–8 weeks',
        description:
          'Working software in stages. Each stage is something you can test and use. A misunderstanding costs a week, not three months.',
        output: 'Working software you can test every week.',
      },
      {
        code: '04',
        title: 'Operate',
        duration: 'Ongoing',
        description:
          'We stay on. Systems get monitored, adjusted, and extended as the business changes instead of degrading the day we leave.',
        output: 'A system that is watched, tuned, and growing.',
      },
    ],
  },

  principles: {
    kicker: 'How we operate',
    noteLabel: 'NOTE',
    heading: 'What you can hold us to.',
    subheading: 'Not values. Terms. Each one is checkable while the work is running.',
    points: [
      { title: 'One owner, end to end', detail: 'No relay between a strategy shop, a dev shop, and an ops consultant. The people who scope your system are the people who build and run it.' },
      { title: 'You own everything', detail: 'Repositories, infrastructure, and documentation transfer from day one. If we disappeared tomorrow, your systems would keep running.' },
      { title: 'Working software at every step', detail: 'You see something real at each stage of a build, so drift in expectations costs a week, not a quarter.' },
      { title: 'We stay after launch', detail: 'Automation and AI drift as your business changes. We operate and adjust them instead of vanishing after handover. If you prefer to run it in-house, we hand over with training and runbooks.' },
    ],
  },

  about: {
    kicker: 'About',
    heading: 'A small senior team, not an account-management layer.',
    subheading:
      'Rahmet Labs builds automation, AI systems, web and mobile products, and Web3 infrastructure. The people who scope it are the people who build it.',
    teamHeading: 'Who you work with',
    teamIntro:
      'We put a small group of senior people on every engagement instead of staffing you with juniors and a project manager.',
    team: [
      {
        name: 'Core builders',
        role: 'Product, Automation, Web3',
        bio: 'Senior engineers who scope, build, and ship the system end to end. The people on your kickoff call are the people writing the code.',
      },
      {
        name: 'AI & automation specialists',
        role: 'AI Ops · Integrations',
        bio: 'Specialists in workflow automation, LLM integration, and systems orchestration who plug in for the automation and AI portions of a build.',
      },
      {
        name: 'Design & delivery ring',
        role: 'Design, QA, Launch',
        bio: 'The people who make sure what ships is usable, tested, and ready for your team on day one, not a prototype dressed up for a demo.',
      },
    ],
    principlesHeading: 'How we operate',
    toolkitHeading: 'Stack we work in',
    toolkit: ['Next.js', 'React', 'React Native', 'Solidity', 'Hardhat', 'Supabase', 'Postgres', 'n8n', 'LangChain', 'OpenAI', 'Vercel', 'Playwright'],
    ctaHeading: 'Talk to the people who’ll build it.',
    ctaSubheading: 'A 15-minute call with senior staff, not a sales rep.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See the work',
  },

  servicesPage: {
    kicker: 'Services',
    heading: 'Five functions. One accountable team.',
    subheading: 'Everything below is a capability we run in production today, not a wish list.',
    deliversLabel: 'What you walk away with',
    engagementHeading: 'Ways to work together',
    engagement: [
      { title: 'Project build', detail: 'A defined system, scoped in writing, shipped in stages you can test.' },
      { title: 'Operational retainer', detail: 'We run and extend what we built: monitoring, adjustments, new features as the business evolves.' },
      { title: 'Technical advisor', detail: 'Senior eyes on your architecture, hiring, and roadmap, a few days a month.' },
    ],
    techStackHeading: 'Technology we work with',
    techStack: [
      { category: 'Automation', items: ['n8n', 'Make', 'Zapier', 'Custom workflows', 'Browser automation (Playwright)', 'API integrations'] },
      { category: 'AI & ML', items: ['OpenAI and Anthropic frontier models', 'RAG systems', 'Custom AI agents', 'LangChain', 'Vector databases (Pinecone, pgvector)'] },
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

  productsPage: {
    kicker: 'Ready-made systems',
    heading: 'Fixed prices. Live in days.',
    subheading:
      'Four systems we have shipped enough times to productize. Built mostly by our AI agents, checked by a senior engineer before delivery, owned by you from day one.',
    setupLabel: 'setup',
    monthlyLabel: '/month',
    forLabel: 'Built for',
    timelineLabel: 'Timeline',
    monthlyNote:
      'The monthly covers running, monitoring, and adjustments. You own everything, and you can leave anytime with a full handover.',
    seam: 'Fits one of these? Fixed price. If not, we start with a free Scan of your manual work.',
    seamLink: 'How custom systems work',
    ctaHeading: 'Tell us which one you need.',
    ctaSubheading:
      'A message is enough. You get the scope and the fixed price in writing before anything starts.',
    products: [
      {
        code: '01',
        name: 'A website that takes the order',
        promise: 'Clients apply, book, and pay on it. Your inbox stops being the workflow.',
        forWhom: 'Clinics, schools, service businesses: anywhere the inbox is still the order form.',
        timeline: 'Live in 7–14 days',
        points: [
          'Applications, booking, and payment built in',
          'A CMS your editors run without a developer',
          'English, Russian, and Kazakh out of the box',
        ],
        price: 'from $500',
        note: 'Custom sites: $3,000–10,000',
      },
      {
        code: '02',
        name: 'A bot that answers your clients',
        promise:
          'Lives in Telegram or WhatsApp. Answers, drafts, remembers, and hands the hard ones to you.',
        forWhom: 'Teams losing leads in messengers after hours and on weekends.',
        timeline: 'Live in 10–14 days',
        points: [
          'Answers from your own materials',
          'Escalates to a human at the right moment',
          'Every conversation visible to you',
        ],
        price: '$1,000',
        monthly: '$200',
      },
      {
        code: '03',
        name: 'An inbox that answers itself',
        promise:
          'Every message classified the moment it arrives. Routine is answered instantly; edge cases reach one owner with full context.',
        forWhom: 'Support and sales queues that grow faster than they drain.',
        timeline: 'Live in 7–10 days',
        points: [
          'Works inside your existing inbox or messenger',
          'Trained on your documents and past answers',
          'A live view of the queue your team actually opens',
        ],
        price: '$700',
        monthly: '$150',
      },
      {
        code: '04',
        name: 'Content that publishes itself',
        promise: 'Your sources scanned, posts drafted and published on schedule. You approve, it ships.',
        forWhom: 'Founders and marketing teams who need a channel that never goes silent.',
        timeline: 'Live in 14 days',
        points: [
          'Scans the sources you choose',
          'Drafts in your voice, in three languages',
          'Publishes to your channels on schedule',
        ],
        price: '$1,500',
        monthly: '$300',
      },
    ],
  },

  doors: {
    aLabel: 'Ready-made systems',
    aText: 'Sites, bots, inboxes. Published prices, live in days.',
    aLink: 'See the products',
    bLabel: 'Custom systems',
    bText: 'Start with a free Scan: one week, a written map of your manual work, yours either way.',
    bLink: 'How custom systems work',
  },

  faq: [
    {
      q: 'How fast can an automation project start?',
      a: 'Usually within one to two weeks. A short call, a written scope of the first stage, and we begin. We don’t run three-month discovery phases.',
    },
    {
      q: 'Will you integrate with our existing CRM, ERP, and messengers?',
      a: 'Yes, that’s the point. We connect and automate around your CRM, ERP, and the messengers your team already uses, and only replace what genuinely can’t be salvaged.',
    },
    {
      q: 'How much does business automation cost?',
      a: 'It depends on scope: a focused automation is a very different build from a full product. After one call you get a written fixed price for a first stage you can actually use. No black box.',
    },
    {
      q: 'Who owns the code, data and infrastructure after delivery?',
      a: 'You do, from day one. Repos, cloud accounts, and documentation transfer to your team as part of delivery. Nothing is held hostage.',
    },
    {
      q: 'What happens after the system is live?',
      a: 'Most clients stay on an operational retainer for monitoring, adjustments, and extensions as the business changes. Prefer your own team? We train them and leave runbooks.',
    },
    {
      q: 'Do you work in English, Russian and Kazakh?',
      a: 'Yes. All three, in calls, documentation, and the interfaces we ship.',
    },
  ],

  contact: {
    kicker: 'Contact',
    heading: 'Tell us what’s manual today.',
    subheading: 'A message, a call, or a voice note, whichever is fastest. A real person replies.',
    channelsHeading: 'Reach us directly',
    channels: [
      { id: 'whatsapp', label: 'WhatsApp', value: '+7 708 841 3062', href: 'https://wa.me/77088413062', note: 'Fastest, usually within the hour' },
      { id: 'telegram', label: 'Telegram', value: '@RahmetLabs', href: 'https://t.me/RahmetLabs', note: 'Same day' },
      { id: 'email', label: 'Email', value: 'rahmetlabs@gmail.com', href: 'mailto:rahmetlabs@gmail.com', note: 'Within 24 hours' },
    ],
    guideHeading: 'What happens next',
    guide: [
      { code: '01', title: 'You describe the manual work', detail: 'Two sentences are enough. We read everything ourselves: no ticket queue, no account manager relay.' },
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
      kicker: 'Free Scan',
      title: 'In the first week, we map your manual work into a prioritized system plan. The plan is yours whether or not we build. If we do build, the first stage is fixed-price.',
      receipt: 'Three systems we shipped are live and clickable on the Work page. Some shipped systems are private; ask for a live walkthrough on the call.',
    },
    primary: 'Tell us what’s manual',
    whatsapp: 'WhatsApp us',
    consoleLabel: 'Start here',
    consolePlaceholder: 'What does your team still do by hand?',
    consoleExamples: [
      'invoices copied between Excel and 1C',
      'tender portals checked at midnight',
      'the same answer typed for the 40th time',
      'friday reports stitched together in a group chat',
    ],
    consoleSend: 'Send',
  },

  notFound: {
    code: '404',
    heading: 'This page didn’t make it into the system.',
    body: 'The URL you followed doesn’t exist here. It may have moved, or never shipped. The rest of the site is live.',
    primary: 'Back to home',
    secondary: 'Start a project',
  },

  footer: {
    tagline: 'Automation, AI systems, and software products, built and run by one accountable team.',
    mapLabel: 'Site',
    contactLabel: 'Contact',
    locationNote: 'Based in Kazakhstan, working across Central Asia, Europe, and the Gulf. EN / RU / KZ.',
    copyrightSuffix: 'Rahmet Labs. Built with the same care we put into client systems.',
  },
};

const ru = {
  meta: {
    home: {
      title: 'Автоматизация бизнеса и ИИ-разработка в Казахстане · Rahmet Labs',
      description:
        'Rahmet Labs проектирует, создаёт и сопровождает системы автоматизации и ИИ, которые заменяют ручную работу. Одна команда из Алматы отвечает за всё.',
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
      title: 'Услуги: автоматизация, ИИ, веб, мобайл и Web3',
      description: 'Пять функций. Одна команда отвечает за всё: автоматизация бизнеса, ИИ-агенты, веб- и мобильные продукты, системы данных и сопровождение.',
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
    products: {
      title: 'Готовые системы с фиксированными ценами · Rahmet Labs',
      description: 'Четыре продуктовых системы с открытыми ценами: сайты, принимающие заявки, боты для клиентов, почта, отвечающая сама, и контент по расписанию. Запуск за дни.',
      keywords: [
        'сайт по фиксированной цене Казахстан',
        'телеграм бот для бизнеса',
        'ИИ автоматизация почты',
        'автопубликация контента',
      ],
    },
    portfolio: {
      title: 'Работы: запущенные системы',
      description: 'Примеры систем автоматизации, ИИ, веба и Web3, которые запустила Rahmet Labs, с живыми ссылками, где они есть.',
      keywords: [
        'проекты автоматизации Казахстан',
        'ИИ-проекты Алматы',
        'web3 проекты Казахстан',
        'кейсы автоматизации бизнеса',
      ],
    },
    about: {
      title: 'О Rahmet Labs: команда, которая строит ваши системы',
      description: 'Небольшая senior-команда Rahmet Labs: автоматизация, ИИ, веб/мобайл и Web3. Кто оценивает проект, тот его и делает.',
      keywords: [
        'о rahmet labs',
        'продуктовая студия Казахстан',
        'команда автоматизации Алматы',
        'софт студия Центральная Азия',
      ],
    },
    contact: {
      title: 'Контакты Rahmet Labs: обсудить проект',
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
    thesis: 'Ваша операционка перестаёт жить в чьей-то голове.',
    whatWeDo:
      'Rahmet Labs: студия автоматизации бизнеса и ИИ-разработки из Алматы, Казахстан. Мы создаём и сопровождаем автоматизацию процессов, ИИ-агентов и веб-продукты для компаний Центральной Азии и Персидского залива.',
    whoFor:
      'Для основателей, операционных руководителей и технических команд, которым нужен один партнёр, отвечающий за стратегию, автоматизацию и разработку, — вместо набора отдельных подрядчиков.',
    basedIn: 'Rahmet Labs находится в Казахстане и работает с клиентами по Центральной Азии, Европе и Персидскому заливу.',
  },

  nav: {
    wordmark: 'RAHMET LABS',
    closeWordmark: 'RL',
    links: [
      { label: 'Работы', href: '/portfolio' },
      { label: 'Продукты', href: '/products' },
      { label: 'Услуги', href: '/services' },
      { label: 'О нас', href: '/about' },
    ],
    cta: 'Обсудить проект',
    menuLabel: 'Меню',
    closeLabel: 'Закрыть',
    skipLabel: 'Перейти к содержимому',
  },

  newsletter: {
    heading: 'Заметки о системах, которые работают',
    body: 'Иногда пишем об автоматизации, ИИ и проектировании — только на примерах систем, которые сами строим и сопровождаем. Без спама. Отписаться можно в любой момент.',
    label: 'Адрес почты',
    placeholder: 'ваш@email.com',
    button: 'Получать заметки',
    loading: 'Подписка…',
    empty: 'Введите адрес почты.',
    network: 'Ошибка сети. Попробуйте ещё раз.',
  },

  hero: {
    kicker: 'Rahmet Labs: автоматизация, ИИ и инженерия продуктов',
    line1: 'Ваш бизнес',
    line2: 'тонет в ',
    line2Accent: 'ручной работе.',
    line3: 'Мы строим',
    line3Accent: 'системы',
    line3Tail: 'которые убирают ручной труд.',
    line4: 'Всё, что мы строим, принадлежит вам.',
    subheadline:
      'Убираем таблицы, копипаст и бесконечные переписки. Готовые системы — с открытой ценой. Системы на заказ — с бесплатного Скана.',
    ctaPrimary: 'Покажите, что делаете вручную',
    ctaSecondary: 'Смотреть работы',
    supportingLabel: 'Одна команда отвечает за всё · EN / RU / KZ',
    supportingChannels: 'WhatsApp, Telegram или почта',
    scrollLabel: 'Листайте',
    skipLabel: 'Пропустить вступление',
    weeksLabel: 'От звонка до системы',
    weeksValue: '4–12 недель',
    marginNotes: [
      'рис. 01 · неделя, как есть',
      'заметка · дело не в усилиях',
      'после · одна чистая линия',
    ],
  },

  thread: {
    chapters: [
      {
        key: '01',
        title: 'Работа незаметна, пока не сломается.',
        lead: 'Кто-то переносит цифры в таблицу. Кто-то помнит, что надо отправить счёт. Кто-то в полночь проверяет тендерный портал. Ничего этого нет в системе: всё это в чьей-то голове.',
        detail: 'Новые люди добавляют хаоса, а не мощности.',
      },
      {
        key: '02',
        title: 'Дело не в усилиях. Дело в системе.',
        lead: 'Большая часть ручной работы повторяется: проверить, сравнить, скопировать, решить, отправить. Всё, что повторяется, можно отдать системе.',
        detail: 'Вы уже платите за эту работу: зарплатами, ошибками и тендерами, которые никто не увидел.',
      },
      {
        key: '03',
        title: 'Эту систему мы строим и сопровождаем.',
        lead: 'Автоматика, которая работает сама. ИИ, который читает и решает. Продукты, которыми реально пользуются клиенты. Одна команда отвечает за всё — от проектирования до эксплуатации.',
        detail: 'От первого звонка до работающей системы: 4-12 недель. Всё принадлежит вам.',
      },
    ],
  },

  whatWeBuild: {
    kicker: 'Что мы исправляем',
    figLabel: 'FIG',
    countLabel: 'точки сбоя',
    headingHome: 'Четыре сбоя. Четыре системы.',
    subheadingHome:
      'Четыре паттерна, которые мы снова и снова видим в компаниях Казахстана и региона. И системы, которые мы строим, чтобы они перестали случаться.',
    bridge: 'Три таких системы живые и кликабельные. Реестр работ — ниже.',
    heading: 'Пять сбоев. Пять систем.',
    subheading:
      'Пять паттернов, которые мы снова и снова видим в компаниях Казахстана и региона, и системы, которые мы строим, чтобы они перестали случаться.',
    categories: [
      {
        id: 'automation',
        title: '«Кто-то до сих пор делает это руками»',
        problem:
          'Счета перепечатываются между Excel и 1С. Тендерные порталы обновляются ночью. Отчёты склеиваются в групповом чате.',
        problemTag: 'Ручная операционка',
        solution:
          'Сквозные пайплайны: n8n/Make, браузерная автоматизация, синхронизация систем, алерты только там, где нужен человек.',
        solutionLabel: 'Система',
        outcome:
          'День проходит без дежурного. Согласования, счета, отчётность и тендерные уведомления идут по своему расписанию, а не по чьему-то настроению.',
        delivers: [
          'Задокументированный конвейер, который работает без дежурного',
          'Алерты и понятный путь эскалации к человеку',
          'Дашборд: что отработало, что упало',
        ],
        outcomeLabel: 'Что исчезает',
      },
      {
        id: 'ai',
        title: '«Тикеты висят. Лиды остывают. Никто не отвечает достаточно быстро»',
        problem:
          'Очередь поддержки растёт быстрее, чем команда успевает читать. Входящие лиды лежат в мессенджере, пока менеджер не вспомнит. Решения живут в чьей-то голове.',
        problemTag: 'Медленные решения',
        solution:
          'ИИ-агенты читают, классифицируют, направляют и готовят ответы: используют ваши документы и прошлые диалоги, оценивают лиды и вовремя передают сложные случаи человеку.',
        solutionLabel: 'Система',
        outcome:
          'Каждый тикет и каждое сообщение разбирается в момент появления. Очередь перестаёт расти — сообщения уходят сразу.',
        delivers: [
          'Агент, обученный на ваших документах и прошлых ответах',
          'Правила маршрутизации, которые вы правите сами',
          'Журнал каждого решения агента',
        ],
        outcomeLabel: 'Что исчезает',
      },
      {
        id: 'product',
        title: '«Наш сайт на самом деле ничего не делает»',
        problem:
          'Сайт работает как брошюра. Без звонка клиент не может подать заявку, забронировать, оплатить или проверить статус. Весь процесс держится на почте администратора.',
        problemTag: 'Веб-тупик',
        solution:
          'Веб- и мобильные продукты, где клиент делает дело: заявки, бронирования, дашборды, сайты на CMS, которыми ваши редакторы управляют без разработчика.',
        solutionLabel: 'Продукт',
        outcome:
          'Клиент может оформить всё онлайн даже ночью. Команда больше не работает телефонной справочной.',
        delivers: [
          'Запущенный продукт, которым пользуются клиенты',
          'CMS, которой владеют ваши редакторы',
          'Аналитика с первого дня',
        ],
        outcomeLabel: 'Что исчезает',
      },
      {
        id: 'backend',
        title: '«Никто не знает, какая цифра правильная»',
        problem:
          'Продажи, финансы и операционка показывают разные цифры. Данные живут в трёх системах и групповом чате. Руководство ждёт еженедельной сверки.',
        problemTag: 'Фрагментированные данные',
        solution:
          'Один слой данных: Postgres или Supabase, API, которые связывают системы, авторизация и роли, мониторинг, один дашборд, которому реально доверяют.',
        solutionLabel: 'Система',
        outcome:
          'Любая нужная цифра: один запрос сейчас, а не недельный проект в Excel.',
        delivers: [
          'Единый источник правды',
          'API, связывающие ваши текущие инструменты',
          'Дашборд, которому верит руководство',
        ],
        outcomeLabel: 'Что исчезает',
      },
      {
        id: 'web3',
        title: '«Контракт должен выйти в сеть. Права на ошибку нет»',
        problem:
          'Токены нужно эмитировать, airdrop раздать, а multi-sig не должен сжечь treasury. В Алматы мало Solidity-инженеров, и никто не должен ошибиться.',
        problemTag: 'Рискованные он-чейн операции',
        solution:
          'Смарт-контракты, спроектированные, протестированные и задеплоенные multi-chain (ETH, BSC, Arbitrum) с multi-sig-конвейерами и он-чейн мониторингом по умолчанию.',
        solutionLabel: 'Система',
        outcome:
          'Система уходит в mainnet один раз: с аудит-дисциплиной и bug-bounty со старта, а не после инцидента.',
        delivers: [
          'Протестированные, готовые к аудиту контракты',
          'Мультисиг-пайплайн деплоя',
          'Он-чейн мониторинг и ранбуки',
        ],
        outcomeLabel: 'Что исчезает',
      },
    ],
  },

  work: {
    kicker: 'Избранные работы',
    heading: 'Запущенные системы.',
    subheading: 'Реальные, проверяемые проекты. С живыми ссылками, где они есть.',
    archiveLink: 'Все работы',
    statusLive: 'Работает',
    statusShipped: 'Сдано',
    servicesPrompt: 'Нужна такая система в вашем бизнесе?',
    servicesLink: 'Смотреть услуги',
    viewLabel: 'Открыть',
    positions: [
      {
        code: '01',
        title: 'Платформа для образования',
        type: 'Веб и продукт',
        description:
          'Три работающих сайта для университета и образовательных проектов: приёмная кампания, страницы программ и CMS, которой редакторы управляют без разработчиков.',
        tech: ['Next.js', 'React', 'CMS'],
        status: 'live',
        links: [
          { label: 'ageu.edu.kz', url: 'https://ageu.edu.kz', img: '/work/ageu.png' },
          { label: 'q-university.edu.kz', url: 'https://q-university.edu.kz', img: '/work/q-university.png' },
          { label: 'qgroup.asia', url: 'https://qgroup.asia', img: '/work/qgroup.png' },
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
        links: [{ label: 'beyondlines-web.vercel.app', url: 'https://beyondlines-web.vercel.app', img: '/work/beyondlines.png' }],
      },
      {
        code: '03',
        title: 'Unhireable',
        type: 'ИИ и автоматизация',
        description:
          'Десктопная система поиска работы: парсит hh.kz, Wellfound и LinkedIn, подбирает вакансии через ИИ и автоматически собирает резюме под каждую.',
        tech: ['Десктоп-приложение', 'ИИ-подбор', 'Мультиплатформенный парсинг'],
        status: 'live',
        links: [{ label: 'unhireable-website.vercel.app', url: 'https://unhireable-website.vercel.app', img: '/work/unhireable.png' }],
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
          'Панель администратора + браузерная автоматика: следит за госзакупками, готовит черновики ответов и передаёт на исполнение без ручного отслеживания.',
        tech: ['Playwright', 'ИИ-агенты', 'Админ-панель'],
        status: 'shipped',
      },
      {
        code: '07',
        title: 'Мост CRM ↔ ERP',
        type: 'Автоматизация',
        description:
          'Слой синхронизации между финансами, CRM и поддержкой. Раньше данные между этими системами переносились руками.',
        tech: ['n8n', 'Postgres', 'REST API'],
        status: 'shipped',
      },
      {
        code: '08',
        title: 'Мультиязычные лендинги',
        type: 'Веб и продукт',
        description:
          'Повторяемый фреймворк лендингов, на котором запущены десятки локализованных страниц для стартапов и госпрограмм, с общей аналитикой и CRM.',
        tech: ['Next.js', 'Vercel', 'Аналитика'],
        status: 'shipped',
      },
    ],
    contactPrompt: 'Задумали похожую систему?',
    contactCta: 'Обсудить проект',
    privateNote: 'Закрытая система — покажем вживую на звонке.',
    fullLedger: 'Весь реестр работ',
  },

  comparison: {
    kicker: 'Вручную vs система',
    heading: 'Одни входящие. Два способа их разбирать.',
    subheading: 'Условная неделя поддержки: что меняется, когда очередь ведёт система.',
    note: 'Иллюстративная модель, не метрика клиента.',
    seriesManual: 'Вручную',
    seriesAuto: 'С системой',
    resolutionLabel: 'среднее время ответа',
    resolutionManual: '~14 ч',
    resolutionAuto: '~11 мин',
    beats: [
      { title: 'Приходит сообщение', manual: 'Лежит в общем ящике, пока кто-то освободится.', auto: 'Разобрано и передано нужному человеку за секунды, 24/7.' },
      { title: 'Рутинный вопрос', manual: 'Сороковой раз копируется тот же ответ.', auto: 'Мгновенный ответ из вашей же базы знаний.' },
      { title: 'Нестандартный случай', manual: 'Ходит по троим, дважды.', auto: 'Уходит одному ответственному с полным контекстом.' },
      { title: 'Отчётность', manual: 'Цифры собираются в пятницу вечером. Или нет.', auto: 'Живой дашборд, который команда реально открывает в понедельник.' },
    ],
  },

  process: {
    kicker: 'Как мы работаем',
    sheetLabel: 'ЛИСТ',
    heading: 'От хаоса до работающей системы — за 4–12 недель.',
    subheading: 'После каждого этапа остаётся рабочий результат, а не презентация.',
    stages: [
      {
        code: '01',
        title: 'Скан',
        duration: '1 неделя',
        description:
          'Сначала фиксируем, как работа устроена сейчас: инструменты, ручные шаги и передачи между людьми, которые нигде не записаны.',
        output: 'Письменная карта ручной работы. Остаётся у вас в любом случае.',
      },
      {
        code: '02',
        title: 'Проектирование',
        duration: '1–2 недели',
        description:
          'Архитектура системы: что автоматизируем, что строим, что остаётся за людьми и как всё это общается между собой.',
        output: 'План системы: состав, этапы и зафиксированная цена.',
      },
      {
        code: '03',
        title: 'Сборка и запуск',
        duration: '2–8 недели',
        description:
          'Работающий софт поэтапно. Каждый этап можно тестировать и использовать. Недопонимание стоит неделю, а не квартал.',
        output: 'Работающий софт, который можно трогать каждую неделю.',
      },
      {
        code: '04',
        title: 'Эксплуатация',
        duration: 'Постоянно',
        description:
          'Мы остаёмся. Системы мониторятся, настраиваются и растут вместе с бизнесом, а не деградируют в день передачи.',
        output: 'Система, которую постоянно контролируют и улучшают.',
      },
    ],
  },

  principles: {
    kicker: 'Принципы',
    noteLabel: 'ЗАМ.',
    heading: 'Что мы обязуемся выполнить.',
    subheading: 'Не ценности на стене, а проверяемые условия работы.',
    points: [
      { title: 'Одна команда от начала до конца', detail: 'Без эстафеты между консультантами, подрядчиком по разработке и эксплуатацией. Кто оценивает систему, тот её и строит.' },
      { title: 'Всё принадлежит вам', detail: 'Репозитории, инфраструктура и документация передаются с первого дня. Если мы исчезнем завтра, ваши системы продолжат работать.' },
      { title: 'Работающий софт на каждом шаге', detail: 'На каждом этапе вы видите что-то реальное. Расхождение в ожиданиях стоит неделю, а не квартал.' },
      { title: 'Остаёмся после запуска', detail: 'Бизнес меняется — автоматизация и ИИ требуют настройки. Мы остаёмся после запуска и сопровождаем систему. Если хотите вести её сами, обучим команду и передадим инструкции.' },
    ],
  },

  about: {
    kicker: 'О нас',
    heading: 'Небольшая команда сильных специалистов. Без прослойки менеджеров.',
    subheading:
      'Продуктовая технологическая студия Rahmet Labs: автоматизация, ИИ-системы, веб- и мобильные продукты, Web3-инфраструктура. Кто оценивает систему, тот её и строит.',
    teamHeading: 'С кем вы будете работать',
    teamIntro:
      'С каждым проектом работает небольшая опытная команда — без подмены специалиста джуниором и менеджером-посредником.',
    team: [
      {
        name: 'Основные разработчики',
        role: 'Продукт, автоматизация, Web3',
        bio: 'Senior-инженеры, которые проектируют, строят и запускают систему целиком: на вашем первом звонке те же люди, которые пишут код.',
      },
      {
        name: 'Партнёры по ИИ и автоматике',
        role: 'AI Ops · Интеграции',
        bio: 'Специалисты по автоматизации процессов, интеграции LLM и оркестрации систем; подключаются к автоматизации и ИИ внутри сборки.',
      },
      {
        name: 'Дизайн, тестирование и запуск',
        role: 'Дизайн, QA, запуск',
        bio: 'Люди, которые следят, чтобы результат был удобным, протестированным и готовым к работе вашей команды с первого дня, а не прототипом, приукрашенным под демо.',
      },
    ],
    principlesHeading: 'Как мы работаем',
    toolkitHeading: 'Наш стек',
    toolkit: ['Next.js', 'React', 'React Native', 'Solidity', 'Hardhat', 'Supabase', 'Postgres', 'n8n', 'LangChain', 'OpenAI', 'Vercel', 'Playwright'],
    ctaHeading: 'Поговорите с теми, кто будет строить систему.',
    ctaSubheading: '15 минут с ведущими специалистами, а не с продажником.',
    ctaPrimary: 'Обсудить проект',
    ctaSecondary: 'Смотреть работы',
  },

  servicesPage: {
    kicker: 'Услуги',
    heading: 'Пять функций. Одна команда отвечает за всё.',
    subheading: 'Всё перечисленное уже работает в реальных проектах. Это не список планов.',
    deliversLabel: 'Что остаётся у вас',
    engagementHeading: 'Форматы работы',
    engagement: [
      { title: 'Проектная сборка', detail: 'Конкретная система с зафиксированным объёмом, поэтапным запуском и регулярными демонстрациями.' },
      { title: 'Постоянное сопровождение', detail: 'Мы сопровождаем и развиваем построенное: мониторинг, настройки, новые функции по мере роста бизнеса.' },
      { title: 'Технический советник', detail: 'Взгляд опытного инженера на архитектуру, найм и план развития. Несколько дней в месяц — без лишних обязательств.' },
    ],
    techStackHeading: 'Технологии, с которыми работаем',
    techStack: [
      { category: 'Автоматизация', items: ['n8n', 'Make', 'Zapier', 'Кастомные пайплайны', 'Браузерная автоматизация (Playwright)', 'API-интеграции'] },
      { category: 'ИИ и ML', items: ['OpenAI GPT-4o / GPT-4', 'Claude 3.5 Sonnet', 'RAG-системы', 'Кастомные ИИ-агенты', 'LangChain', 'Векторные БД (Pinecone, pgvector)'] },
      { category: 'Фронтенд', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Мобильные приложения (React Native)'] },
      { category: 'Бэкенд', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST & GraphQL API'] },
      { category: 'Инфраструктура', items: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Мониторинг и алертинг'] },
    ],
    useCasesHeading: 'Отрасли и кейсы',
    useCases: [
      { title: 'Логистика и цепочки поставок', description: 'Автоматизация диспетчеризации, отслеживания, счетов и таможенной документации. Полная прозрачность от склада до доставки.', keywords: 'автоматизация логистики, ИИ в цепочках поставок, автоматизация диспетчеризации' },
      { title: 'E-commerce и ритейл', description: 'ИИ-рекомендации товаров, автоматическая обработка заказов, синхронизация остатков на маркетплейсах и чат-боты поддержки.', keywords: 'автоматизация e-commerce, ИИ-поддержка клиентов, управление остатками' },
      { title: 'Профессиональные услуги', description: 'Автоматизация приёма заявок, генерации предложений, управления контрактами и учёта времени. Интеграция CRM с WhatsApp и Telegram.', keywords: 'автоматизация CRM, управление клиентами, интеграция WhatsApp' },
      { title: 'Здравоохранение и клиники', description: 'Автоматизация записи пациентов, расписания приёмов, оцифровки медкарт и обработки страховых выплат.', keywords: 'автоматизация здравоохранения, управление клиникой, запись пациентов' },
      { title: 'Недвижимость', description: 'Автоматизация публикации объявлений, квалификации лидов, записи на просмотр и генерации документов для сделок.', keywords: 'автоматизация недвижимости, управление объектами, квалификация лидов' },
      { title: 'Образование и обучение', description: 'Автоматизация зачисления студентов, управления курсами, отслеживания прогресса и ИИ-ассистентов для обучения.', keywords: 'автоматизация образования, интеграция LMS, ИИ-репетитор' },
    ],
    faqHeading: 'Частые вопросы',
    ctaHeading: 'Не уверены, какая функция нужна?',
    ctaSubheading: 'Опишите ручную работу, которая съедает вашу неделю. Честно скажем, что с ней может сделать система.',
  },

  productsPage: {
    kicker: 'Готовые системы',
    heading: 'Цена известна заранее. Запуск — за несколько дней.',
    subheading:
      'Четыре системы, которые мы превратили в готовые продукты. Сборку ускоряют агенты, результат проверяет ведущий инженер. Код и инфраструктура принадлежат вам с первого дня.',
    setupLabel: 'запуск',
    monthlyLabel: '/мес',
    forLabel: 'Для кого',
    timelineLabel: 'Срок',
    monthlyNote:
      'Ежемесячная плата включает сопровождение, мониторинг и настройки. Отказаться можно в любой момент — всё передадим без удержаний.',
    seam: 'Подходит готовая система — цена фиксирована. Нужна своя — начинаем с бесплатного Скана.',
    seamLink: 'Как устроены системы на заказ',
    ctaHeading: 'Выберите систему. Цену назовём сразу.',
    ctaSubheading: 'Одного сообщения достаточно. До старта письменно зафиксируем состав работ и цену.',
    products: [
      {
        code: '01',
        name: 'Сайт, который принимает заявки',
        promise: 'Клиент оставляет заявку, бронирует и платит прямо на сайте. Почта больше не заменяет вам CRM.',
        forWhom: 'Клиники, школы, сервисные компании — все, у кого заявки до сих пор живут в почте.',
        timeline: 'Запуск за 7–14 дней',
        points: [
          'Заявки, бронирование и оплата из коробки',
          'CMS, которой редакторы управляют без разработчика',
          'Русский, казахский и английский — сразу',
        ],
        price: 'от $500',
        note: 'Сайты под ключ: $3 000–10 000',
      },
      {
        code: '02',
        name: 'Бот, который отвечает клиентам',
        promise:
          'Работает в Telegram или WhatsApp: отвечает, помнит контекст и передаёт сложные вопросы человеку.',
        forWhom: 'Команды, которые теряют лидов в мессенджерах вечером и в выходные.',
        timeline: 'Запуск за 10–14 дней',
        points: [
          'Отвечает по вашим собственным материалам',
          'Передаёт человеку в нужный момент',
          'Все диалоги — под вашим контролем',
        ],
        price: '$1 000',
        monthly: '$200',
      },
      {
        code: '03',
        name: 'Входящие, которые разбираются сами',
        promise:
          'Система сразу сортирует входящие и отвечает на типовые вопросы. Сложные сообщения уходят ответственному вместе со всем контекстом.',
        forWhom: 'Очереди поддержки и продаж, которые растут быстрее, чем разбираются.',
        timeline: 'Запуск за 7–10 дней',
        points: [
          'Работает внутри вашей текущей почты или мессенджера',
          'Обучается на ваших документах и прошлых ответах',
          'Очередь и статусы — на одном экране',
        ],
        price: '$700',
        monthly: '$150',
      },
      {
        code: '04',
        name: 'Контент, который публикуется сам',
        promise: 'Система следит за источниками, готовит посты и публикует их по расписанию. Вы только утверждаете.',
        forWhom: 'Основатели и маркетологи, которым нужен канал, который не молчит.',
        timeline: 'Запуск за 14 дней',
        points: [
          'Сканирует источники, которые выберете вы',
          'Пишет в вашем стиле на трёх языках',
          'Публикует в ваши каналы по расписанию',
        ],
        price: '$1 500',
        monthly: '$300',
      },
    ],
  },

  doors: {
    aLabel: 'Готовые системы',
    aText: 'Сайты, боты, входящие. Открытая цена. Запуск за несколько дней.',
    aLink: 'Выбрать готовую систему',
    bLabel: 'Системы на заказ',
    bText: 'Сначала — бесплатный Скан. За неделю вы получите карту ручной работы. Она останется у вас, даже если мы не продолжим.',
    bLink: 'Как строим на заказ',
  },

  faq: [
    {
      q: 'Как быстро можно начать проект по автоматизации?',
      a: 'Обычно в течение одной-двух недель: короткий звонок, письменный скоуп первого этапа, старт. Трёхмесячных «исследований» у нас нет.',
    },
    {
      q: 'Вы интегрируете с нашей текущей CRM, ERP и мессенджерами?',
      a: 'Да, в этом и смысл. Сначала соединяем и автоматизируем то, что есть: CRM, ERP, мессенджеры. Заменяем только то, что правда не спасти.',
    },
    {
      q: 'Сколько стоит автоматизация бизнеса?',
      a: 'Зависит от скоупа: точечная автоматизация и полноценный продукт стоят по-разному. После одного звонка вы получаете письменную смету с фиксированной ценой первого этапа, которым можно будет пользоваться. Никаких чёрных ящиков.',
    },
    {
      q: 'Кому после сдачи принадлежат код, данные и инфраструктура?',
      a: 'Вам, с первого дня. Репозитории, облачные аккаунты и документация передаются вашей команде в рамках поставки. Ничего не держим в заложниках.',
    },
    {
      q: 'Что происходит после запуска?',
      a: 'Большинство клиентов оставляют нас на операционном ретейнере: мониторинг, настройки, доработки. Если хотите вести сами, передадим с обучением и инструкциями.',
    },
    {
      q: 'На каких языках можно работать?',
      a: 'На английском, русском и казахском: звонки, документация и интерфейсы, которые мы поставляем.',
    },
  ],

  contact: {
    kicker: 'Контакты',
    heading: 'Расскажите, что у вас до сих пор делается вручную.',
    subheading: 'Сообщение, звонок или голосовое, как вам удобнее. Ответит живой человек.',
    channelsHeading: 'Напрямую',
    channels: [
      { id: 'whatsapp', label: 'WhatsApp', value: '+7 708 841 3062', href: 'https://wa.me/77088413062', note: 'Быстрее всего, обычно в течение часа' },
      { id: 'telegram', label: 'Telegram', value: '@RahmetLabs', href: 'https://t.me/RahmetLabs', note: 'В тот же день' },
      { id: 'email', label: 'Почта', value: 'rahmetlabs@gmail.com', href: 'mailto:rahmetlabs@gmail.com', note: 'В течение 24 часов' },
    ],
    guideHeading: 'Что будет дальше',
    guide: [
      { code: '01', title: 'Вы описываете ручную работу', detail: 'Достаточно двух предложений. Читаем всё сами: без очередей тикетов и аккаунт-менеджеров.' },
      { code: '02', title: 'Мы отвечаем с конкретной оценкой', detail: 'Что автоматизировать в первую очередь, что не трогать и как может выглядеть первый рабочий этап.' },
      { code: '03', title: '15 минут с командой, которая будет строить', detail: 'Люди, которые будут строить вашу систему, а не отдел продаж. Если мы не подходим, скажем прямо.' },
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
    heading: 'Начните с того,',
    headingAccent: 'что съедает вашу неделю.',
    subheading:
      'Расскажите, что команда всё ещё делает вручную. Мы прямо скажем, что заберёт система, сколько потребуется и с чего стоит начать.',
    offer: {
      kicker: 'Бесплатная диагностика',
      title: 'За первую неделю разберём ручную работу, расставим приоритеты и соберём план системы. План останется у вас. Первый этап разработки — по фиксированной цене.',
      receipt: 'Три запущенные системы можно открыть на странице «Работы». Закрытые проекты покажем вживую на звонке.',
    },
    primary: 'Покажите, что делаете вручную',
    whatsapp: 'Написать в WhatsApp',
    consoleLabel: 'Начните здесь',
    consolePlaceholder: 'Что команда до сих пор делает руками?',
    consoleExamples: [
      'счета, переносимые между Excel и 1С',
      'тендерные порталы, проверяемые в полночь',
      'один и тот же ответ сороковой раз',
      'пятничные отчёты, склеенные в чате',
    ],
    consoleSend: 'Отправить',
  },

  notFound: {
    code: '404',
    heading: 'Эта страница не попала в систему.',
    body: 'По этому адресу ничего нет: страница могла переехать или так и не появиться. Остальной сайт работает как надо.',
    primary: 'На главную',
    secondary: 'Обсудить проект',
  },

  footer: {
    tagline: 'Автоматизация, ИИ-системы и цифровые продукты. Одна команда отвечает за всё — от проектирования до эксплуатации.',
    mapLabel: 'Сайт',
    contactLabel: 'Контакты',
    locationNote: 'Работаем из Казахстана с командами по всему миру. EN / RU / KZ.',
    copyrightSuffix: 'Rahmet Labs. Сделано с той же тщательностью, что и системы для клиентов.',
  },
};

const kz = {
  meta: {
    home: {
      title: 'Қазақстандағы бизнес-процестерді автоматтандыру және AI әзірлеу · Rahmet Labs',
      description:
        'Rahmet Labs қол жұмысын алмастыратын автоматика мен AI жүйелерін жобалайды, құрады және сүйемелдейді. Алматыдағы бір жауапты команда.',
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
      title: 'Қызметтер: автоматтандыру, AI, веб, мобайл және Web3',
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
    products: {
      title: 'Бағасы бекітілген дайын жүйелер · Rahmet Labs',
      description: 'Ашық бағалы төрт өнім: өтінім қабылдайтын сайттар, клиенттерге жауап беретін боттар, өзі жауап беретін пошта және кестемен жарияланатын контент. Күндер ішінде іске қосу.',
      keywords: [
        'бекітілген бағалы сайт Қазақстан',
        'бизнеске арналған телеграм бот',
        'поштаны AI автоматтандыру',
        'контентті автожариялау',
      ],
    },
    portfolio: {
      title: 'Жұмыстар: іске қосылған жүйелер',
      description: 'Rahmet Labs іске қосқан автоматтандыру, AI, веб және Web3 жүйелерінің таңдауы. Мүмкін болса, тірі сілтемелерімен.',
      keywords: [
        'автоматтандыру жобалары Қазақстан',
        'AI жобалары Алматы',
        'web3 жобалары',
        'программа әзірлеу портфолиосы',
      ],
    },
    about: {
      title: 'Rahmet Labs туралы: жүйеңізді құратын команда',
      description: 'Rahmet Labs: шағын senior команда. Автоматтандыру, AI, веб/мобайл және Web3. Жобаны бағалағандар оны өздері құрады.',
      keywords: [
        'rahmet labs туралы',
        'өнім студиясы Қазақстан',
        'автоматтандыру командасы Алматы',
      ],
    },
    contact: {
      title: 'Rahmet Labs байланыс: жобаны талқылау',
      description: 'Бүгін не әлі қолмен жасалып жүргенін айтыңыз. WhatsApp, Telegram немесе пошта арқылы жазыңыз.',
      keywords: [
        'автоматтандыру студиясымен байланыс',
        'жоба бастау',
        'AI әзірлеушілер жалдау Қазақстан',
      ],
    },
  },

  facts: {
    thesis: 'Жұмыс процестері бір адамның есіне тәуелді болмайды.',
    whatWeDo:
      'Rahmet Labs: Қазақстанның Алматы қаласында орналасқан бизнес автоматтандыру және AI әзірлеу студиясы. Біз процестерді автоматтандыруды, AI агенттерін және веб-өнімдерді Орталық Азия мен Парсы шығанағы компаниялары үшін құрып, сүйемелдейміз.',
    whoFor:
      'Бұл — стратегия, автоматтандыру және әзірлеу үшін бөлек мердігерлер емес, серіктес іздейтін негізін қалаушыларға, операциялық басшыларға және техникалық командаларға арналған.',
    basedIn: 'Rahmet Labs Қазақстанда орналасқан және Орталық Азия, Еуропа және Парсы шығанағы бойындағы клиенттермен жұмыс істейді.',
  },

  nav: {
    wordmark: 'RAHMET LABS',
    closeWordmark: 'RL',
    links: [
      { label: 'Жұмыстар', href: '/portfolio' },
      { label: 'Өнімдер', href: '/products' },
      { label: 'Қызметтер', href: '/services' },
      { label: 'Біз туралы', href: '/about' },
    ],
    cta: 'Жобаны талқылау',
    menuLabel: 'Мәзір',
    closeLabel: 'Жабу',
    skipLabel: 'Мазмұнға өту',
  },

  newsletter: {
    heading: 'Жұмыс істейтін жүйелер туралы жазбалар',
    body: 'Өзіміз құрып, сүйемелдейтін жүйелер негізінде автоматтандыру, AI және жүйе жобалау туралы анда-санда жазамыз. Спам жоқ. Кез келген уақытта жазылымнан бас тарта аласыз.',
    label: 'Email мекенжайы',
    placeholder: 'your@email.com',
    button: 'Жазбаларды алу',
    loading: 'Жазылуда…',
    empty: 'Email мекенжайын енгізіңіз.',
    network: 'Желі қатесі. Қайталап көріңіз.',
  },

  hero: {
    kicker: 'Rahmet Labs: автоматтандыру, AI және өнім инженериясы',
    line1: 'Бизнесіңіз',
    line2: 'қол жұмысына',
    line2Accent: 'батып барады.',
    line3: 'Біз',
    line3Accent: 'қол жұмысын тоқтататын жүйе',
    line3Tail: 'құрамыз.',
    line4: 'Біз құрғанның бәрі сізге тиесілі.',
    subheadline:
      'Кесте, көшіріп қою және бітпейтін хат алмасуды жоямыз. Дайын жүйелердің бағасы ашық. Тапсырыстық жүйелер тегін Сканнан басталады.',
    ctaPrimary: 'Қолмен не істейтініңізді айтыңыз',
    ctaSecondary: 'Жұмыстарды көру',
    supportingLabel: 'Бір жауапты команда · EN / RU / KZ',
    supportingChannels: 'WhatsApp, Telegram немесе пошта',
    scrollLabel: 'Төмен қарай',
    skipLabel: 'Кіріспені өткізу',
    weeksLabel: 'Қоңыраудан жүйеге дейін',
    weeksValue: '4–12 апта',
    marginNotes: [
      '1-сурет · аптаның бейнесі',
      'жазба · мәселе күште емес',
      'соңы · бір таза сызық',
    ],
  },

  thread: {
    chapters: [
      {
        key: '01',
        title: 'Жұмыс бұзылғанша көрінбейді.',
        lead: 'Біреу сандарды кестеге көшіреді. Біреу шот жіберуді есінде сақтайды. Біреу түн ортасында тендер порталын тексереді. Мұның ешқайсысы жүйеде жоқ: бәрі біреудің есінде.',
        detail: 'Жаңа адам жалдау өнімділікті емес, хаосты арттырады.',
      },
      {
        key: '02',
        title: 'Мәселе күште емес. Архитектурада.',
        lead: 'Қол жұмысының көбі қайталанады: тексеру, салыстыру, көшіру, шешу, жіберу. Қайталанатын жұмысты жүйеге беруге болады.',
        detail: 'Бұл жұмысқа сіз әлдеқашан төлейсіз: жалақымен, қателермен, ешкім көрмеген тендерлермен.',
      },
      {
        key: '03',
        title: 'Сол жүйені біз құрып, өзіміз жүргіземіз.',
        lead: 'Өзі жұмыс істейтін автоматика. Оқитын және шешетін AI. Клиенттер шынымен қолданатын өнімдер. Жобалаудан сүйемелдеуге дейін бір жауапты команда.',
        detail: 'Алғашқы қоңыраудан жұмыс істейтін жүйеге дейін: 4–12 апта. Бәрі сіздікі.',
      },
    ],
  },

  whatWeBuild: {
    kicker: 'Не түзетеміз',
    figLabel: 'FIG',
    countLabel: 'ақау нүктесі',
    headingHome: 'Төрт ақау. Төрт жүйе.',
    subheadingHome:
      'Қазақстандық және аймақтық компанияларда қайта-қайта кездесетін төрт сәтсіздік үлгісі — және оларды тоқтататын жүйелер.',
    bridge: 'Осындай үш жүйе тірі және ашық тұр. Жұмыстар тізімі — төменде.',
    heading: 'Бес ақау. Бес жүйе.',
    subheading:
      'Қазақстандық және аймақтық компанияларда қайта-қайта кездесетін бес сәтсіздік үлгісі және олар тоқтауы үшін құратын жүйелер.',
    categories: [
      {
        id: 'automation',
        title: '«Мұны әлі біреу қолмен істейді»',
        problem:
          'Шоттар Excel мен бухгалтерия жүйесінің арасында көшіріліп жүр. Тендер порталдары түн ортасында жаңартылады. Есептер топтық чатта құрастырылады.',
        problemTag: 'Қолмен істелетін операция',
        solution:
          'Басынан аяғына дейін жүретін пайплайндар: n8n/Make, браузерлік автоматика, жүйелерді синхрондау, тек адам керек жерде ғана хабарламалар.',
        solutionLabel: 'Жүйе',
        outcome:
          'Күн кезекші жұмысшысыз өтеді. Келісімдер, шоттар, есептілік және тендер хабарламалары өз кестесімен жүреді.',
        delivers: [
          'Толық құжатталған, өзі жүретін конвейер',
          'Алертілер және адамға эскалация жолы',
          'Не істелді, не қате кетті — дашборд',
        ],
        outcomeLabel: 'Не жойылады',
      },
      {
        id: 'ai',
        title: '«Тикеттер жиналады. Лидтер суып кетеді. Жауап кешігеді»',
        problem:
          'Қолдау кезегі команданың үлгеруінен тез өседі. Жаңа лидтер менеджер есіне алғанша мессенджерде жатады. Шешімдер бір адамның басында қалады.',
        problemTag: 'Баяу шешім',
        solution:
          'Оқитын, жіктейтін, маршруттайтын және жауап жобасын дайындайтын AI агенттер: құжаттарыңыз бен өткен жауаптар бойынша RAG, лидтер мен тикеттер скорингі, дұрыс сәтте адамға эскалация.',
        solutionLabel: 'Жүйе',
        outcome:
          'Әр тикет пен хабарлама пайда болған сәтте сұрыпталады. Кезек босағанынан тез өспейді.',
        delivers: [
          'Құжаттарыңыз бен өткен жауаптарыңызға үйретілген агент',
          'Өзіңіз өңдейтін маршруттау ережелері',
          'Агенттің әр шешімі жазылған журнал',
        ],
        outcomeLabel: 'Не жойылады',
      },
      {
        id: 'product',
        title: '«Біздің сайт іс жүзінде ештеңе істемейді»',
        problem:
          'Қазіргі сайт — жай ғана брошюра. Клиент қоңырау шалмай өтінім бере, брондай, төлей немесе мәртебесін тексере алмайды. Бүкіл процесс әкімшінің поштасына тірелген.',
        problemTag: 'Веб-тоқырау',
        solution:
          'Клиенттің істі өзі бітіретін веб және мобиль өнімдер: өтінімдер, брондау, дашбордтар, редакторларыңыз әзірлеушісіз басқаратын CMS сайттар.',
        solutionLabel: 'Өнім',
        outcome:
          'Клиент істі түнде де онлайн аяқтайды. Қызметкерлер сайттың жұмысын телефонмен атқармайды.',
        delivers: [
          'Клиенттер шынымен пайдаланатын дайын өнім',
          'Редакторларыңызға тиесілі CMS',
          'Бірінші күннен аналитика',
        ],
        outcomeLabel: 'Не жойылады',
      },
      {
        id: 'backend',
        title: '«Қай сан дұрыс, ешкім білмейді»',
        problem:
          'Сату, қаржы және операциялар бөлімі әртүрлі сандар көрсетеді. Деректер үш жүйеде және топтық чатта тұрады. Басшылық апта сайынғы салыстырып тексеруді күтеді.',
        problemTag: 'Бытыраңқы деректер',
        solution:
          'Бір деректер қабаты: Postgres немесе Supabase, жүйелерді синхрондайтын API, авторизация мен рөлдер, мониторинг, бүкіл команда нағыз сенетін бір дашборд.',
        solutionLabel: 'Жүйе',
        outcome:
          'Басшылыққа керек кез келген сан: апталық Excel жобасы емес, бір сұраныс қашықтықта.',
        delivers: [
          'Бірегей деректер қоры',
          'Бар құралдарыңызды байланыстыратын API-лар',
          'Басшылық сенетін дашборд',
        ],
        outcomeLabel: 'Не жойылады',
      },
      {
        id: 'web3',
        title: '«Он-чейнде керек смарт-келісімшарт әлі құрылмаған, ал қатеге жол жоқ»',
        problem:
          'Токендер шығарылуы керек, airdrop таратылуы керек, ал multi-sig treasury-ні жақпауы керек. Алматыда Solidity инженерлері сирек, және ешкім қателесе алмайды.',
        problemTag: 'Қауіпті он-чейн',
        solution:
          'ETH, BSC және Arbitrum желілеріне арналған, жобаланған әрі толық тестіленген смарт-келісімшарттар. Multi-sig арқылы іске қосу және ончейн-мониторинг бірден кіреді.',
        solutionLabel: 'Жүйе',
        outcome:
          'Жүйе mainnet-ке бір рет шығады: аудит тәртібі мен bug-bounty басынан бастап, инциденттен кейін емес.',
        delivers: [
          'Тестіленген, аудитке дайын смарт-келісімшарттар',
          'Multi-sig деплой-пайплайны',
          'Он-чейн мониторинг пен runbook-тар',
        ],
        outcomeLabel: 'Не жойылады',
      },
    ],
  },

  work: {
    kicker: 'Таңдаулы жұмыстар',
    heading: 'Іске қосылған жүйелер.',
    subheading: 'Нақты әрі тексеруге болатын жобалар. Тірі сілтемелері бар жерде тірі сілтеме берілген.',
    archiveLink: 'Барлық жұмыстар',
    statusLive: 'Жұмыс істеп тұр',
    statusShipped: 'Тапсырылды',
    servicesPrompt: 'Бизнесіңізге осындай жүйе керек пе?',
    servicesLink: 'Қызметтерді көру',
    viewLabel: 'Ашу',
    positions: [
      {
        code: '01',
        title: 'Білім беру платформасы',
        type: 'Веб және өнім',
        description:
          'Университет пен білім беру клиенттеріне арналған жұмыс істеп тұрған үш сайт: қабылдау кампаниясы, бағдарлама беттері және редакторлар өзі басқаратын CMS-пен жүргізілетін контент.',
        tech: ['Next.js', 'React', 'CMS'],
        status: 'live',
        links: [
          { label: 'ageu.edu.kz', url: 'https://ageu.edu.kz', img: '/work/ageu.png' },
          { label: 'q-university.edu.kz', url: 'https://q-university.edu.kz', img: '/work/q-university.png' },
          { label: 'qgroup.asia', url: 'https://qgroup.asia', img: '/work/qgroup.png' },
        ],
      },
      {
        code: '02',
        title: 'Beyond Lines',
        type: 'AI және автоматтандыру',
        description:
          'Автономды контент-конвейер: крипта, қауіпсіздік және AI бойынша 60+ дереккөзді бақылап, Telegram-бот пен веб-дашборд арқылы жариялайды.',
        tech: ['Next.js', 'AI курациясы', 'Telegram-бот'],
        status: 'live',
        links: [{ label: 'beyondlines-web.vercel.app', url: 'https://beyondlines-web.vercel.app', img: '/work/beyondlines.png' }],
      },
      {
        code: '03',
        title: 'Unhireable',
        type: 'AI және автоматтандыру',
        description:
          'Жұмыс іздеудің десктоп жүйесі: hh.kz, Wellfound және LinkedIn-нен дерек жинап, вакансияларды AI арқылы сәйкестендіріп, резюмені автоматты дайындайды.',
        tech: ['Десктоп қосымша', 'AI мэтчинг', 'Мультиплатформалық парсинг'],
        status: 'live',
        links: [{ label: 'unhireable-website.vercel.app', url: 'https://unhireable-website.vercel.app', img: '/work/unhireable.png' }],
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
          'Қаржы, CRM және қолдау арасын байланыстыратын синхрондау қабаты. Бұрын деректер жүйелер арасында қолмен көшірілетін.',
        tech: ['n8n', 'Postgres', 'REST API'],
        status: 'shipped',
      },
      {
        code: '08',
        title: 'Көптілді лендингдер жүйесі',
        type: 'Веб және өнім',
        description:
          'Стартаптар мен мемлекеттік бағдарламаларға арналған ондаған локализацияланған бет шығаруға мүмкіндік беретін ортақ лендинг жүйесі. Аналитика мен CRM-ге бірден қосылған.',
        tech: ['Next.js', 'Vercel', 'Аналитика'],
        status: 'shipped',
      },
    ],
    contactPrompt: 'Осындай жүйе ойыңызда бар ма?',
    contactCta: 'Жобаны талқылау',
    privateNote: 'Жабық жүйе — қоңырауда тірі демосын көрсетеміз.',
    fullLedger: 'Толық жұмыстар тізімі',
  },

  comparison: {
    kicker: 'Қолмен vs жүйемен',
    heading: 'Бір кіріс жәшігі. Өңдеудің екі жолы.',
    subheading: 'Қолдау қызметінің бір аптасы: кезекті жүйе басқарғанда не өзгереді.',
    note: 'Шартты модель, клиент метрикасы емес.',
    seriesManual: 'Қолмен',
    seriesAuto: 'Жүйемен',
    resolutionLabel: 'орташа жауап уақыты',
    resolutionManual: '~14 сағ',
    resolutionAuto: '~11 мин',
    beats: [
      { title: 'Хабарлама келеді', manual: 'Біреу босағанша ортақ жәшікте жатады.', auto: 'Тәулік бойы бірнеше секундта жіктеліп, бағытталады.' },
      { title: 'Қарапайым сұрақ', manual: 'Сол жауап қырқыншы рет көшіріледі.', auto: 'Өз білім қорыңыздан лезде жауап.' },
      { title: 'Стандартты емес жағдай', manual: 'Үш адам арасында екі рет айналып өтеді.', auto: 'Толық контекспен бір жауаптыға түседі.' },
      { title: 'Есептілік', manual: 'Сандар жұма кешінде жиналады. Немесе жиналмайды.', auto: 'Команда дүйсенбіде шынымен ашатын тірі көрініс.' },
    ],
  },

  process: {
    kicker: 'Қалай жұмыс істейміз',
    sheetLabel: 'ПАРАҚ',
    heading: 'Хаостан жұмыс істейтін жүйеге — 4–12 апта.',
    subheading: 'Әр кезең қолданылатын нәтижемен аяқталады, слайдтармен емес.',
    stages: [
      {
        code: '01',
        title: 'Скан',
        duration: '1 апта',
        description:
          'Алдымен жұмыстың қазір қалай жүретінін жазып шығамыз: құралдар, қолмен орындалатын қадамдар және құжатталмаған жауапкершілік ауысулары.',
        output: 'Қол жұмысыңыздың жазбаша картасы. Кез келген жағдайда сізде қалады.',
      },
      {
        code: '02',
        title: 'Жобалау',
        duration: '1–2 апта',
        description:
          'Жүйе архитектурасы: не автоматтандырылады, не құрылады, не адамда қалады және бәрі бір-бірімен қалай сөйлеседі.',
        output: 'Жоспар: көлем, кезеңдер және жазбаша баға.',
      },
      {
        code: '03',
        title: 'Құрастыру және іске қосу',
        duration: '2–8 апта',
        description:
          'Кезең-кезеңмен жұмыс істейтін софт. Әр кезеңді тестілеуге және қолдануға болады. Қате түсінік үш айға емес, бір аптаға ғана шығын әкеледі.',
        output: 'Әр апта сайын тестілеуге болатын жұмыс істейтін софт.',
      },
      {
        code: '04',
        title: 'Сүйемелдеу',
        duration: 'Үздіксіз',
        description:
          'Біз жұмысты жалғастырамыз: жүйені бақылап, баптап, бизнеске қарай дамытамыз. Тапсырған күні тастап кетпейміз.',
        output: 'Бақыланатын, бапталатын және өсетін жүйе.',
      },
    ],
  },

  principles: {
    kicker: 'Қағидаттар',
    noteLabel: 'ЕСК.',
    heading: 'Бізден мынаны талап ете аласыз.',
    subheading: 'Құндылықтар емес. Шарттар. Әрқайсысын жұмыс барысында тексеруге болады.',
    points: [
      { title: 'Басынан аяғына дейін бір команда', detail: 'Консультант, әзірлеу мердігері және эксплуатация арасындағы эстафета жоқ. Жүйені бағалағандар оны өздері құрады.' },
      { title: 'Бәрі сізге тиесілі', detail: 'Репозиторийлер, инфрақұрылым және құжаттама бірінші күннен сізге тиесілі. Ертең жоғалып кетсек те, жүйелеріңіз жұмысын жалғастырады.' },
      { title: 'Әр қадамда жұмыс істейтін софт', detail: 'Әр кезеңде нақты нәтиже көресіз. Күткеннен ауытқу кварталмен емес, күндермен өлшенеді.' },
      { title: 'Іске қосқаннан кейін де қаламыз', detail: 'Бизнес өзгерген сайын автоматика мен AI да ығысайды. Тапсырғаннан кейін жоғалмай, сүйемелдеп, баптап отырамыз. Өзіңіз жүргізгіңіз келсе — оқытып, runbook-пен тапсырамыз.' },
    ],
  },

  about: {
    kicker: 'Біз туралы',
    heading: 'Шағын әрі тәжірибелі команда. Аралық менеджерлер жоқ.',
    subheading:
      'Rahmet Labs: толық циклді технология студиясы. Автоматтандыру, AI жүйелері, веб және мобиль өнімдер, Web3 инфрақұрылымы. Бәрін нақты құратын адамдар жасайды.',
    teamHeading: 'Кіммен жұмыс істейсіз',
    teamIntro: 'Әр жобамен шағын тәжірибелі команда жұмыс істейді. Жұмысты жас мамандар мен аралық менеджерлерге бермейміз.',
    team: [
      {
        name: 'Негізгі әзірлеушілер',
        role: 'Өнім, автоматтандыру, Web3',
        bio: 'Жүйені басынан аяғына дейін жобалайтын, құратын және іске қосатын senior инженерлер: алғашқы қоңыраудағылар код жазатындар.',
      },
      {
        name: 'AI және автоматика серіктестері',
        role: 'AI Ops · Интеграциялар',
        bio: 'Процесстерді автоматтандыру, LLM интеграциясы және жүйелік оркестрация мамандары. Құрастырудың AI бөлігіне қосылады.',
      },
      {
        name: 'Дизайн, тестілеу және іске қосу',
        role: 'Дизайн, QA, іске қосу',
        bio: 'Жеткізілген нәрсе ыңғайлы, тестіленген және командаңызға бірінші күні-ақ дайын болуын қадағалайтын адамдар.',
      },
    ],
    principlesHeading: 'Қалай жұмыс істейміз',
    toolkitHeading: 'Біздің стек',
    toolkit: ['Next.js', 'React', 'React Native', 'Solidity', 'Hardhat', 'Supabase', 'Postgres', 'n8n', 'LangChain', 'OpenAI', 'Vercel', 'Playwright'],
    ctaHeading: 'Құратын адамдармен сөйлесіңіз.',
    ctaSubheading: 'Сатушымен емес, жетекші мамандармен 15 минут сөйлесесіз.',
    ctaPrimary: 'Жобаны талқылау',
    ctaSecondary: 'Жұмыстарды көру',
  },

  servicesPage: {
    kicker: 'Қызметтер',
    heading: 'Бес функция. Бір жауапты команда.',
    subheading: 'Төмендегі мүмкіндіктердің бәрін нақты жобаларда қолданып жүрміз. Бұл жай жоспар емес.',
    deliversLabel: 'Сізде қалатын нәрселер',
    engagementHeading: 'Жұмыс форматтары',
    engagement: [
      { title: 'Жобалық құрастыру', detail: 'Көлемі алдын ала бекітілген нақты жүйе: кезең-кезеңмен іске қосу және тұрақты демонстрациялар.' },
      { title: 'Тұрақты сүйемелдеу', detail: 'Құрылғанды сүйемелдеп, дамытамыз: мониторинг, баптаулар, бизнес өскен сайын жаңа функциялар.' },
      { title: 'Техникалық кеңесші', detail: 'Архитектура, маман жалдау және даму жоспары бойынша тәжірибелі техникалық кеңес. Айына бірнеше күн.' },
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
      { title: 'Кәсіби қызметтер', description: 'Клиентті қабылдау, ұсыныс дайындау, келісімшарт пен уақыт есебін автоматтандыру. CRM-ді WhatsApp және Telegram-мен біріктіру.', keywords: 'CRM автоматтандыру, клиенттерді басқару, WhatsApp интеграциясы' },
      { title: 'Денсаулық сақтау және клиникалар', description: 'Науқастарды тіркеуді, қабылдау кестесін жоспарлауды, медициналық құжаттарды цифрландыруды және сақтандыру төлемдерін өңдеуді автоматтандыру.', keywords: 'денсаулық сақтау автоматтандыру, клиниканы басқару, науқастарды қабылдау' },
      { title: 'Жылжымайтын мүлік', description: 'Жарнамаларды жариялауды, лидтерді квалификациялауды, көрсетілімдерге жазылуды және мәмілелер үшін құжаттарды автоматты дайындау.', keywords: 'жылжымайтын мүлік автоматтандыру, объектілерді басқару, лидтерді квалификациялау' },
      { title: 'Білім беру және оқыту', description: 'Студенттерді қабылдауды, курстарды басқаруды, прогресті бақылауды және AI оқыту ассистенттерін автоматтандыру.', keywords: 'білім беру автоматтандыру, LMS интеграциясы, AI репетитор' },
    ],
    faqHeading: 'Жиі сұрақтар',
    ctaHeading: 'Қай функция керегін білмейсіз бе?',
    ctaSubheading: 'Аптаңызды жеп жүрген қол жұмысты сипаттаңыз. Жүйе онымен не істей алатынын ашық айтамыз.',
  },

  productsPage: {
    kicker: 'Дайын жүйелер',
    heading: 'Бағасы алдын ала белгілі. Бірнеше күнде іске қосылады.',
    subheading:
      'Төрт жүйені дайын өнімге айналдырдық. Құрастыруды AI агенттері жеделдетеді, нәтижені жетекші инженер тексереді. Код пен инфрақұрылым бірінші күннен сіздікі.',
    setupLabel: 'іске қосу',
    monthlyLabel: '/ай',
    forLabel: 'Кімге арналған',
    timelineLabel: 'Мерзімі',
    monthlyNote:
      'Айлық төлем сүйемелдеуді, мониторинг пен баптауды қамтиды. Кез келген уақытта бас тарта аласыз — бәрін толық тапсырамыз.',
    seam: 'Дайын жүйе сәйкес келсе, баға бекітілген. Жеке жүйе қажет болса, тегін Сканнан бастаймыз.',
    seamLink: 'Арнайы жүйелер қалай жұмыс істейді',
    ctaHeading: 'Жүйені таңдаңыз. Бағасын бірден айтамыз.',
    ctaSubheading: 'Бір хабарлама жеткілікті. Жұмыс басталмай тұрып, оның құрамын және бағасын жазбаша бекітеміз.',
    products: [
      {
        code: '01',
        name: 'Өтінім қабылдайтын сайт',
        promise: 'Клиент сайттың өзінде өтінім береді, брондайды және төлейді. Пошта енді жұмыс процесін алмастырмайды.',
        forWhom: 'Клиникалар, мектептер, сервистік компаниялар — өтінімдері әлі де поштада жүрген бизнес.',
        timeline: '7–14 күнде іске қосылады',
        points: [
          'Өтінім, брондау және төлем бірден',
          'Редакторларыңыз әзірлеушісіз басқаратын CMS',
          'Қазақша, орысша және ағылшынша — бірден',
        ],
        price: '$500-ден бастап',
        note: 'Арнайы сайттар: $3 000–10 000',
      },
      {
        code: '02',
        name: 'Клиенттерге жауап беретін бот',
        promise:
          'Telegram немесе WhatsApp-та жұмыс істейді: жауап береді, контексті сақтайды, күрделі сұрақтарды адамға өткізеді.',
        forWhom: 'Кешкі уақытта және демалыс күндері мессенджерлерде лидтер жоғалтатын командалар.',
        timeline: '10–14 күнде іске қосылады',
        points: [
          'Өз материалдарыңыздан жауап береді',
          'Дұрыс сәтте адамға өткізеді',
          'Барлық диалог сіздің бақылауыңызда',
        ],
        price: '$1 000',
        monthly: '$200',
      },
      {
        code: '03',
        name: 'Өзі өңделетін кіріс жәшігі',
        promise:
          'Жүйе әр хабарламаны бірден сұрыптап, типтік сұрақтарға жауап береді. Күрделі хабарлама толық контекспен жауапты маманға жіберіледі.',
        forWhom: 'Өңделгенінен тез өсетін қолдау және сату кезектері.',
        timeline: '7–10 күнде іске қосылады',
        points: [
          'Қазіргі поштаңыз немесе мессенджеріңіздің ішінде жұмыс істейді',
          'Құжаттарыңыз бен өткен жауаптарыңыздан үйренеді',
          'Кезек пен мәртебелер бір экранда',
        ],
        price: '$700',
        monthly: '$150',
      },
      {
        code: '04',
        name: 'Өзі жарияланатын контент',
        promise: 'Жүйе дереккөздерді бақылайды, жазба дайындайды және кесте бойынша жариялайды. Сіз тек бекітесіз.',
        forWhom: 'Үнсіз қалмайтын арна керек негізін қалаушылар мен маркетинг командалары.',
        timeline: '14 күнде іске қосылады',
        points: [
          'Сіз таңдаған дереккөздерді бақылайды',
          'Сіздің стиліңізбен үш тілде жазады',
          'Арналарыңызға кесте бойынша жариялайды',
        ],
        price: '$1 500',
        monthly: '$300',
      },
    ],
  },

  doors: {
    aLabel: 'Дайын жүйелер',
    aText: 'Сайт, бот, кіріс жәшігі. Бағасы ашық. Бірнеше күнде іске қосылады.',
    aLink: 'Дайын жүйені таңдау',
    bLabel: 'Тапсырыстық жүйелер',
    bText: 'Алдымен — тегін Скан. Бір аптада қол жұмысыңыздың картасын аласыз. Әрі қарай жалғастырмасақ та, карта сізде қалады.',
    bLink: 'Тапсырыстық жүйені қалай құрамыз',
  },

  faq: [
    {
      q: 'Автоматтандыру жобасын қаншалықты тез бастауға болады?',
      a: 'Әдетте бір-екі аптаның ішінде: қысқа қоңырау, алғашқы кезеңнің жазбаша көлемі, старт. Үш айлық «зерттеулер» бізде жоқ.',
    },
    {
      q: 'Біздің қазіргі CRM, ERP және мессенджерлерімізбен интеграция жасайсыздар ма?',
      a: 'Иә, мәні де сонда. Алдымен бар CRM, ERP және мессенджерлерді байланыстырып автоматтандырамыз, ал тек шынымен құтқарылмайтынды ғана ауыстырамыз.',
    },
    {
      q: 'Бизнесті автоматтандыру қанша тұрады?',
      a: 'Көлемге байланысты: нүктелік автоматика мен толық өнімнің бағасы әртүрлі. Бір қоңыраудан кейін алғашқы кезеңге жазбаша, бекітілген баға аласыз, сол кезеңді нақты қолдана аласыз. Қара жәшік жоқ.',
    },
    {
      q: 'Код, деректер және инфрақұрылым кімдікі?',
      a: 'Сіздікі, бірінші күннен бастап. Репозиторийлер, бұлттық аккаунттар мен құжаттама жеткізу барысында командаңызға беріледі.',
    },
    {
      q: 'Іске қосқаннан кейін не болады?',
      a: 'Көптеген клиенттер бізді операциялық ретейнерде қалдырады: мониторинг, баптаулар, кеңейтулер. Өзіңіз жүргізгіңіз келсе, оқыту мен нұсқаулықтармен тапсырамыз.',
    },
    {
      q: 'Қай тілдерде жұмыс істеуге болады?',
      a: 'Ағылшын, орыс және қазақ тілдерінде: қоңыраулар, құжаттама және жеткізетін интерфейстер.',
    },
  ],

  contact: {
    kicker: 'Байланыс',
    heading: 'Қазір нені қолмен істейтініңізді айтыңыз.',
    subheading: 'Хабарлама, қоңырау немесе дауыстық хабарлама — өзіңізге ыңғайлысын таңдаңыз. Сізге нақты маман жауап береді.',
    channelsHeading: 'Тікелей байланыс',
    channels: [
      { id: 'whatsapp', label: 'WhatsApp', value: '+7 708 841 3062', href: 'https://wa.me/77088413062', note: 'Ең жылдам, әдетте бір сағат ішінде' },
      { id: 'telegram', label: 'Telegram', value: '@RahmetLabs', href: 'https://t.me/RahmetLabs', note: 'Сол күні' },
      { id: 'email', label: 'Пошта', value: 'rahmetlabs@gmail.com', href: 'mailto:rahmetlabs@gmail.com', note: '24 сағат ішінде' },
    ],
    guideHeading: 'Бұдан кейін не болады',
    guide: [
      { code: '01', title: 'Қол жұмысты сипаттайсыз', detail: 'Екі сөйлем жеткілікті. Бәрін өзіміз оқимыз: тикет кезегі мен аккаунт-менеджер жоқ.' },
      { code: '02', title: 'Нақты ұсыныспен жауап береміз', detail: 'Алдымен нені автоматтандырған жөн, нені тиіспеген дұрыс және алғашқы жұмыс кезеңі қандай болуы мүмкін.' },
      { code: '03', title: 'Senior командамен 15 минуттық қоңырау', detail: 'Жүйеңізді құратын адамдар, сату бөлімі емес. Сәйкес келмесек, ашық айтамыз.' },
    ],
    socialHeading: 'Басқа арналар',
    socials: [
      { label: 'GitHub', href: 'https://github.com/rahmetlabs' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/rahmetlabs' },
      { label: 'X', href: 'https://x.com/rahmetlabs' },
    ],
  },

  cta: {
    kicker: 'Бастау',
    heading: 'Аптаңызды жейтін',
    headingAccent: 'қол жұмысынан бастаңыз.',
    subheading:
      'Командаңыз әлі нені қолмен істейтінін айтыңыз. Жүйе нені өзіне алатынын, оған не қажет екенін және неден бастау керегін ашық айтамыз.',
    offer: {
      kicker: 'Тегін диагностика',
      title: 'Бір аптада қол жұмысын талдап, басымдықтарды белгілеп, жүйе жоспарын құрамыз. Жоспар сізде қалады. Әзірлеудің алғашқы кезеңі — бекітілген бағамен.',
      receipt: '«Жұмыстар» бетінен іске қосылған үш жүйені ашып көруге болады. Жабық жобаларды қоңырауда көрсетеміз.',
    },
    primary: 'Қолмен не істейтініңізді айтыңыз',
    whatsapp: 'WhatsApp-қа жазу',
    consoleLabel: 'Осы жерден бастаңыз',
    consolePlaceholder: 'Командаңыз әлі нені қолмен істейді?',
    consoleExamples: [
      'Excel бен 1С арасында көшірілетін шоттар',
      'түн ортасында тексерілетін тендер порталдары',
      'қырқыншы рет терілетін сол бір жауап',
      'жұма кешінде чатта құрастырылатын есептер',
    ],
    consoleSend: 'Жіберу',
  },

  notFound: {
    code: '404',
    heading: 'Бұл бет жүйеге кірмеген.',
    body: 'Бұл мекенжайда ештеңе жоқ: бет ауысқан немесе мүлде шықпаған болуы мүмкін. Сайттың қалғаны жұмыс істеп тұр.',
    primary: 'Басты бетке',
    secondary: 'Жобаны талқылау',
  },

  footer: {
    tagline: 'Автоматтандыру, AI жүйелері және инженерлік өнімдер. Жобалаудан сүйемелдеуге дейін бәріне бір команда жауап береді.',
    mapLabel: 'Сайт',
    contactLabel: 'Байланыс',
    locationNote: 'Қазақстандамыз, әлем бойынша командалармен жұмыс істейміз. EN / RU / KZ.',
    copyrightSuffix: 'Rahmet Labs. Клиент жүйелеріндегідей мұқият жасалды.',
  },
};

export const content = { en, ru, kz };

export function getDictionary(locale) {
  return content[locale] || content.en;
}
