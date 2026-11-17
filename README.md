<div align="center">

# ⚡ Said Bzioui — Developer Portfolio

**A modern, interactive, and high-performance developer portfolio built with React 19, Tailwind CSS v4, and Vite.**

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-14.1-F01B74?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

[Explore Live Demo](https://said-bzioui.github.io) • [Report Bug](https://github.com/Said-Bzioui/portfolio/issues) • [Request Feature](https://github.com/Said-Bzioui/portfolio/issues)

</div>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Architecture](#-project-architecture)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [🎨 Custom Component Highlights](#-custom-component-highlights)
  - [3D Scroll Stacking Cards](#1-3d-scroll-stacking-cards-deck)
  - [3D Journal Spread Carousel](#2-3d-journal-scrapbook-carousel)
- [📬 Contact](#-contact)
- [📄 License](#-license)

---

## 🌟 About The Project

This repository houses the personal portfolio of **Said Bzioui**, a passionate Full Stack Web Developer & Software Engineer.

Designed with a sleek, dark cyber-glassmorphic aesthetic, the application emphasizes smooth micro-interactions, rich 3D UI components, and fast load times. It showcases real-world projects, professional milestones, technical expertise, and extracurricular achievements (such as robotics competitions and hackathons).

---

## ✨ Key Features

- **🎴 3D Scroll Stacking Project Cards**:
  Interactive card deck where featured project cards stack with realistic 3D depth, scale, and perspective shifts as the user scrolls, complete with brand icons via `@thesvg/react`.
- **📖 3D Realistic Scrapbook / Journal**:
  A custom 3D double-page spread carousel for extracurricular activities and event memories, simulating real-world paper physics, polaroid pins, washi tape, and smooth page turns.
- **💻 Interactive Terminal & Hero Experience**:
  Hero section with animated typewriting effects, code sandbox cards, and quick navigation actions.
- **⏳ Comprehensive Timelines**:
  Interactive career and academic roadmaps detailing professional experience (Wave Digital Agency, DigiSense) and formal training.
- **💎 Modern Dark Glassmorphism**:
  Tailwind CSS v4 mesh gradients, glowing ambient lights, backdrop blur, and custom glow border animations.
- **⚡ Next-Gen Performance**:
  Built on Vite 8 and React 19 for instantaneous Hot Module Replacement (HMR) and optimized bundle delivery.
- **📱 Fully Responsive**:
  Flawlessly adapted for viewports ranging from mobile smartphones to ultra-wide desktop monitors.

---

## 🛠️ Tech Stack

### Frontend & Core
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Animations & Physics**: [Motion](https://motion.dev/) & [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)

### UI Components & Libraries
- **Icons**: [Lucide React](https://lucide.dev/) & [@thesvg/react](https://github.com/thesvg/react)
- **Carousels**: [Embla Carousel](https://www.embla-carousel.com/)
- **Primitives**: Radix UI (`@radix-ui/react-tooltip`, `@radix-ui/react-slot`)
- **Utility**: `clsx`, `tailwind-merge`, `class-variance-authority`
- **Forms & Validation**: `react-hook-form` & `zod`

---

## 📂 Project Architecture

```plaintext
My_Portfolio/
├── public/                     # Static assets, favicon & public images
├── src/
│   ├── assets/                 # Brand images, project snapshots & certificates
│   ├── components/             # Reusable UI modules & section blocks
│   │   ├── ui/                 # Core primitive & custom display components
│   │   │   ├── journal-spread-carousel.jsx  # 3D interactive double-page journal
│   │   │   └── scroll-stacking-cards.jsx    # 3D scroll-driven stacked project deck
│   │   ├── AboutStatusCard.jsx # Profile status & quick facts
│   │   ├── ActivityCard.jsx    # Extracurricular & club card items
│   │   ├── ActivityDetail.jsx  # Interactive activity detail modal / 3D viewer
│   │   ├── Background.jsx      # Ambient glowing gradient mesh background
│   │   ├── Contact.jsx         # Contact form & communication channels
│   │   ├── HeroSkills.jsx      # Skills grid & categorized competencies
│   │   ├── Landing.jsx         # Hero code window / terminal preview
│   │   ├── Navbar.jsx          # Glassmorphic top navigation bar
│   │   ├── ProjectDetail.jsx   # Project deep dive modal & metrics
│   │   ├── SocialLinks.jsx     # Social network quick links
│   │   └── Timeline.jsx        # Experience & education timeline component
│   ├── lib/
│   │   └── utils.js            # Tailwind merge & styling helpers (`cn`)
│   ├── pages/                  # Page-level routes
│   │   ├── About.jsx           # Biography & background
│   │   ├── activities.jsx      # Extracurricular activities & events
│   │   ├── certificate.jsx     # Professional certifications gallery
│   │   ├── Home.jsx            # Main landing view
│   │   ├── projects.jsx        # Project catalog with 3D stacking cards
│   │   └── Stack.jsx           # Comprehensive tech stack overview
│   ├── App.jsx                 # Application root & router configuration
│   ├── index.css               # Global styling & Tailwind v4 theme setup
│   └── main.jsx                # React DOM entry point
├── components.json             # shadcn UI workspace configuration
├── package.json                # Project dependencies & scripts
└── vite.config.js              # Vite build setup & plugin integrations
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v22.13.0` or higher (compatible with `>=24.0.0`)
- **Package Manager**: [pnpm](https://pnpm.io/) (recommended), `npm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Said-Bzioui/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or with npm
   npm install
   ```

### Development Server

Start the local Vite development server with hot-reload:

```bash
pnpm dev
# or with npm
npm run dev
```

Open your browser and visit: `http://localhost:5173`

### Production Build

Create an optimized production bundle:

```bash
pnpm build
# or with npm
npm run build
```

Preview the production build locally:

```bash
pnpm preview
# or with npm
npm run preview
```

---

## 🎨 Custom Component Highlights

### 1. 3D Scroll Stacking Cards Deck
- Located at [`src/components/ui/scroll-stacking-cards.jsx`](src/components/ui/scroll-stacking-cards.jsx).
- Uses scroll progress listeners to apply incremental scale, vertical offset, and perspective transforms.
- Integrates `@thesvg/react` to dynamically render SVG logos for every technology stack item.

### 2. 3D Journal Scrapbook Carousel
- Located at [`src/components/ui/journal-spread-carousel.jsx`](src/components/ui/journal-spread-carousel.jsx).
- Simulates realistic physical notebook spreads with:
  - Dynamic 3D folding angles on drag and flick.
  - Realistic spine shadows and lighting gradations.
  - Polaroid prints, paper textures, washi tape effects, and handwritten annotations.

---

## 📬 Contact

**Said Bzioui** — Full Stack Web Developer

- **LinkedIn**: [linkedin.com/in/said-bzioui](https://www.linkedin.com/in/said-bzioui/)
- **GitHub**: [@Said-Bzioui](https://github.com/Said-Bzioui)
- **Email**: [saidbzioui.contact@gmail.com](mailto:saidbzioui.contact@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
