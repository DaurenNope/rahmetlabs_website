# Rahmet Labs Website - Design & Technical Assignment

## 🎨 Design Concept: Emerald Akatsuki Cloud Theme

### Visual Identity
- **Theme**: Emerald Akatsuki Cloud aesthetic
- **Primary Color**: Emerald Green (#00ff88)
- **Dark Emerald**: #00cc6a
- **Glow Emerald**: #00ffaa
- **Background**: Pure Black (#000000)
- **Dark Background**: #0a1a0a (slightly green-tinted)

### Design Elements
- **Emerald Cloud Particles**: Floating green cloud particles throughout
- **Cloud Borders**: Emerald cloud-themed borders on cards and sections
- **Gradient Text**: Emerald gradient text with glow effects
- **Cloud Patterns**: Repeating cloud patterns in backgrounds
- **Dramatic Lighting**: Green glow effects and shadows
- **Mysterious Aesthetic**: Dark, elite, powerful vibe

### Visual Style
- Modern, sleek, professional
- Dark theme with emerald accents
- Cloud motifs integrated throughout
- Smooth animations and transitions
- Story-driven narrative flow

---

## 🛠️ Technical Stack

### Core Framework
- **Next.js 16.0.3** (App Router)
- **React 19.2.0**

### Styling
- **Tailwind CSS 3.4** (Primary styling)
- Custom CSS for advanced effects

### Animations
- **Framer Motion** (Scroll animations, transitions, micro-interactions)

### Icons
- **Lucide React** (Modern icon library)

### Build Tools
- **PostCSS** (Tailwind processing)
- **Autoprefixer** (CSS vendor prefixes)

---

## 📋 Technical Specifications

### Project Structure
```
src/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── emerald/           # Emerald cloud components
│   │   ├── CloudParticles.jsx
│   │   ├── CloudBorder.jsx
│   │   └── CloudPattern.jsx
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Process.jsx
│   │   ├── Stats.jsx
│   │   └── Contact.jsx
│   └── layout/
│       ├── Header.jsx
│       └── Footer.jsx
└── lib/                    # Utilities
    └── animations.js
```

### Tailwind Configuration
- Custom emerald color palette
- Custom animations (float, glow, gradient)
- Responsive breakpoints
- Custom utilities

### Animation Strategy
- Scroll-triggered animations (Framer Motion)
- Smooth transitions
- Micro-interactions on hover
- Parallax effects
- Staggered reveals

### Performance Requirements
- Optimized images
- Lazy loading
- Code splitting
- Minimal bundle size
- Fast page loads

---

## 🎯 Design Requirements

### Sections to Build

1. **Hero Section**
   - Large emerald gradient headline
   - Floating cloud particles
   - Scroll indicator
   - CTA buttons

2. **Services Section**
   - 4 service cards with emerald cloud borders
   - Hover effects with glow
   - Feature lists

3. **Portfolio/Showcase Section**
   - Project cards
   - Case studies with metrics
   - Tech stack tags

4. **Process Section**
   - 4-step timeline
   - Cloud connecting elements
   - Step descriptions

5. **Stats Section**
   - Animated counters
   - Large numbers with emerald glow
   - Achievement metrics

6. **Contact Section**
   - Contact cards (WhatsApp, Telegram, Email)
   - CTA button
   - Emerald cloud effects

7. **Header**
   - Fixed navigation
   - Logo
   - Menu items

8. **Footer**
   - Minimal footer
   - Copyright

### Emerald Cloud Components Needed

1. **CloudParticles**
   - Animated floating emerald particles
   - Configurable count and speed
   - Responsive to scroll/mouse

2. **CloudBorder**
   - Emerald cloud-themed border
   - Glow effects
   - Reusable component

3. **CloudPattern**
   - Repeating cloud background pattern
   - Animated or static
   - Customizable opacity

---

## 🚀 Implementation Plan

### Phase 1: Foundation
- [ ] Set up Tailwind with emerald colors
- [ ] Create base layout structure
- [ ] Build emerald cloud components
- [ ] Set up animation utilities

### Phase 2: Core Sections
- [ ] Hero section with cloud particles
- [ ] Services section with cloud borders
- [ ] Portfolio section
- [ ] Process timeline

### Phase 3: Enhanced Features
- [ ] Stats with animated counters
- [ ] Contact section
- [ ] Header and Footer
- [ ] Scroll animations

### Phase 4: Polish
- [ ] Performance optimization
- [ ] Mobile responsiveness
- [ ] Cross-browser testing
- [ ] Final refinements

---

## 📐 Design Principles

1. **Emerald First**: Emerald green is the hero color
2. **Cloud Motifs**: Integrate cloud elements naturally
3. **Dark & Elite**: Maintain mysterious, powerful aesthetic
4. **Smooth Animations**: Everything should feel fluid
5. **Story-Driven**: Content unfolds as you scroll
6. **Professional**: Clean, modern, impressive

---

## 🎨 Color Palette Reference

```css
--emerald-primary: #00ff88;    /* Main emerald */
--emerald-dark: #00cc6a;        /* Darker shade */
--emerald-glow: #00ffaa;        /* Glow effect */
--emerald-light: #33ffaa;        /* Light variant */
--background: #000000;           /* Pure black */
--background-dark: #0a1a0a;      /* Tinted black */
```

---

## 📝 Content Reference

See `RAHMET_LABS.md` for:
- Services descriptions
- Company information
- Contact details
- Stats and metrics

---

## ✅ Acceptance Criteria

- [ ] All sections built and functional
- [ ] Emerald cloud theme consistently applied
- [ ] Smooth scroll animations
- [ ] Responsive on all devices
- [ ] Fast load times
- [ ] No console errors
- [ ] Professional, impressive design

---

**Ready to build the emerald Akatsuki cloud website!**

