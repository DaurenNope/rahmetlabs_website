# Rahmet Labs Website

Modern, multilingual website for Rahmet Labs — a full-stack product studio specializing in web/mobile development, automation, AI, and Web3 infrastructure.

## 🚀 Features

- **Multilingual Support**: English, Russian, and Kazakh with dynamic language switching
- **Full-Stack Services**: From simple landings to full-scale applications
- **SEO Optimized**: Comprehensive metadata, structured data (JSON-LD), sitemap, and robots.txt
- **Modern Stack**: Next.js 16, React 19, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first, optimized for all devices
- **Performance**: Static generation, optimized images, fast load times

## 📁 Project Structure

```
rahmetlabs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Homepage
│   │   ├── services/          # Services page
│   │   ├── portfolio/         # Portfolio page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── layout.js          # Root layout with SEO
│   │   └── sitemap.js         # Dynamic sitemap
│   ├── components/            # React components
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Services.jsx       # Services preview
│   │   ├── ServicesPage.jsx   # Full services page
│   │   ├── Portfolio.jsx      # Portfolio preview
│   │   ├── PortfolioPage.jsx  # Full portfolio page
│   │   ├── Process.jsx        # How we work section
│   │   ├── Stats.jsx          # Statistics section
│   │   ├── AboutPage.jsx      # About page component
│   │   ├── ContactPage.jsx    # Contact page component
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Footer.jsx         # Site footer
│   │   ├── LanguageSwitcher.jsx
│   │   └── LanguageSEO.jsx    # Dynamic SEO updates
│   ├── context/
│   │   └── LanguageContext.jsx # i18n context
│   └── lib/
│       └── i18n.js            # All translations and content
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
└── docs/
    └── about-page-plan.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **React**: 19.2.0
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 12.23
- **Icons**: Lucide React
- **Fonts**: Syne, Inter, Space Grotesk (Google Fonts)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the site.

## 🌍 Internationalization

All content is managed in `src/lib/i18n.js` with support for:
- **English (en)**: Default language
- **Russian (ru)**: Full translation
- **Kazakh (kz)**: Full translation

Language preference is stored in localStorage and persists across sessions.

## 📝 Content Management

All text content, including:
- Page copy
- Service descriptions
- Portfolio projects
- FAQ items
- SEO metadata

...is centralized in `src/lib/i18n.js`. Update translations there to change content across the site.

## 🔍 SEO Features

- **Structured Data**: JSON-LD schemas for Organization, Service, FAQ, WebSite
- **Sitemap**: Dynamic sitemap at `/sitemap.xml` with language alternates
- **Robots.txt**: Configured for search engine crawling
- **Meta Tags**: Comprehensive Open Graph, Twitter Cards, canonical URLs
- **Language Alternates**: Proper hreflang tags for all pages
- **Semantic HTML**: Proper heading hierarchy and semantic elements

## 🎨 Design System

- **Colors**: Black background with emerald/rose accents
- **Typography**: Syne for headings, Inter for body text
- **Spacing**: Consistent spacing scale using Tailwind
- **Animations**: Scroll-triggered animations with Framer Motion
- **Responsive**: Mobile-first breakpoints (sm, md, lg)

## 📦 Deployment

The site is optimized for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- Any static hosting service

Build command: `npm run build`

## 🔗 Key Pages

- `/` - Homepage with hero, services, portfolio, process, stats
- `/services` - Full services page with use cases, proof, engagement models, FAQ
- `/portfolio` - Portfolio showcase with filters
- `/about` - About page with team, principles, timeline, testimonials
- `/contact` - Contact page with multiple contact methods

## 📚 Documentation

- `docs/about-page-plan.md` - About page structure and content plan
- `RAHMET_LABS.md` - Company overview
- `DESIGN_TECHNICAL_ASSIGNMENT.md` - Design and technical specs

## 🤝 Contributing

This is a private project for Rahmet Labs. For updates:
1. Make changes in feature branch
2. Test locally with `npm run dev`
3. Build with `npm run build` to verify
4. Commit and push

## 📄 License

Private - Rahmet Labs

---

**Built with** Next.js, React, Tailwind CSS, and Framer Motion

