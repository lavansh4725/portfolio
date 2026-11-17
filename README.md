# Lavansh Jindal — Personal Portfolio Website

> A modern, high-performance developer portfolio built with React 19, Vite 8, TypeScript, and Tailwind CSS v4. Designed to showcase real production projects, 25+ verified credentials, academic excellence at Bennett University, and full-stack & data analytics capabilities.

---

## 🌟 Overview

This portfolio website presents **Lavansh Jindal's** technical profile, academic credentials at Bennett University (CGPA 8.37, Dean's List), 25+ verified professional certifications, and production-grade engineering projects. It is 100% free, requiring zero paid APIs, zero subscriptions, and zero paid hosting tiers.

### Target Roles
- **Data Analyst / Business Intelligence Analyst**
- **Software Developer / Software Engineer**
- **Full-Stack Developer**
- **Data & Database Architect**

---

## 🚀 Key Features

- **Modern Sticky Navigation**: Glassmorphic blur header with section highlighting as you scroll, quick resume download, verified social links, and a responsive mobile drawer.
- **Hero Section with Real Profile Photo**: Displays Lavansh Jindal's verified LinkedIn profile photograph inside an ambient glowing gradient ring, paired with a typewriter multi-role cycler.
- **Three Completed Production Projects**:
  1. **Enterprise SQL Data Warehouse & ETL Pipeline**: Medallion Architecture (Bronze ➔ Silver ➔ Gold) with Kimball Star Schema views, T-SQL bulk ingestion stored procedures, and automated data quality test suites on Microsoft SQL Server.
  2. **RoleReady AI**: Full-stack GenAI interview prep platform featuring React, Vite, Node.js, Express, MongoDB, Google GenAI, JWT, Puppeteer, and Zod.
  3. **Customer Shopping Behavior Analysis**: End-to-end consumer intelligence and BI analytics pipeline utilizing Python, Pandas, NumPy, MySQL, and Power BI.
- **Interactive Deep-Dive Case Study Modals**: Built using modern web standards (native `<dialog>` elements with backdrop blur, keyboard dismissal, and body scroll containment).
- **25+ Verified Professional Certifications**: Direct credential verification links from UC San Diego, Johns Hopkins University, Google, IBM, University of Illinois Urbana-Champaign, University of Michigan, Wingspan / Infosys, and MathWorks.
- **Categorized Technical Skills**: Grounded in verified coursework and projects across Programming Languages, Data Engineering & Analytics Tools, Web & Backend Development, and Databases & Core CS Concepts.
- **Academic & Scholastic Honors**: Highlights Bennett University, Class XII, Class X, and Dean's List Recognition (2023).
- **Coding Profiles**: Direct external links to GitHub, LeetCode, and LinkedIn.
- **Functional Contact Actions**: One-click copy email/phone buttons with visual feedback, call triggers, direct mailto link, and an interactive message composer.
- **Dark & Light Mode Support**: Defaults to a deep charcoal aesthetic with smooth light-mode switching persisted in `localStorage`.
- **Zero Cost Deployment**: Ready for one-click deployment on Vercel Hobby or GitHub Pages.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19 | Declarative component UI |
| **Tooling & Bundler** | Vite 8 | Lightning-fast HMR and optimized production bundling (gzip: ~98 kB) |
| **Language** | TypeScript | End-to-end type safety and maintainability |
| **Styling** | Tailwind CSS v4 | High-performance CSS utility system |
| **Icons** | Lucide React + Custom SVGs | Crisp, lightweight icons |
| **Deployment** | Vercel Hobby / GitHub Pages | Free, continuous deployment from GitHub |

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (version 18+ or 20+)
- npm or pnpm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/lavansh4725/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for production
```bash
npm run build
```
The compiled, minified bundle will be generated inside the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```
Open `http://localhost:4173` to test the production build.

---

## 🌐 Free Deployment Guide

### Option A: Vercel (Recommended — 2 Minutes, Completely Free)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: add SQL Data Warehouse project and 25+ verified certifications"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and select the `portfolio` repository.
4. Keep the default settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**.
6. Your portfolio will be live at `https://your-portfolio-name.vercel.app` with automated free SSL.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg              # Custom LJ monogram brand favicon
│   ├── profile.jpg              # Real LinkedIn profile picture
│   └── resume.pdf               # Real verified resume PDF
├── src/
│   ├── components/
│   │   ├── About.tsx            # Background, academic journey & stats
│   │   ├── Certifications.tsx   # 25+ verified certification cards with verify URLs
│   │   ├── CodingProfiles.tsx   # GitHub, LeetCode, LinkedIn cards
│   │   ├── Contact.tsx          # Email, phone, mailto composer, copy buttons
│   │   ├── Education.tsx        # Academic timeline & Dean's List honor
│   │   ├── Footer.tsx           # Quick navigation, copyright & back-to-top
│   │   ├── Hero.tsx             # Headline, photo ring, typewriter & CTA
│   │   ├── Navbar.tsx           # Sticky blur navigation & mobile drawer
│   │   ├── ProjectModal.tsx     # Accessible case study modal
│   │   ├── Projects.tsx         # 3 Featured projects (SQL DW, RoleReady AI, Shopping Behavior)
│   │   └── SocialIcons.tsx      # Crisp SVG brand icons
│   ├── context/
│   │   └── ThemeContext.tsx     # Dark/Light mode provider with localStorage
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth for portfolio data
│   ├── types/
│   │   └── portfolio.ts         # TypeScript data contracts & models
│   ├── App.tsx                  # Root coordinator & scroll spy
│   ├── index.css                # Tailwind CSS v4 & custom animations
│   └── main.tsx                 # React DOM entrypoint
├── index.html                   # Semantic HTML shell, SEO & Open Graph
├── vite.config.ts               # Vite + Tailwind CSS v4 configuration
└── package.json                 # Scripts & free open-source dependencies
```

---

<div align="center">

### 👨‍💻 Connect with the Author

**Lavansh Jindal**  
*Data Analyst | Software Developer | Full-Stack Developer | Business Intelligence Analyst*

[![Portfolio](https://img.shields.io/badge/Portfolio-Lavansh%20Jindal-4F46E5?style=flat&logo=react&logoColor=white)](https://github.com/lavansh4725/portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-lavansh4725-181717?style=flat&logo=github&logoColor=white)](https://github.com/lavansh4725)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lavansh%20Jindal-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lavansh-jindal/)
[![Email](https://img.shields.io/badge/Email-lavanshjindal47%40gmail.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:lavanshjindal47@gmail.com)

<sub>*"Architecting scalable, resilient data pipelines and dimensional warehouses that transform operational data into trusted business value."*</sub>

</div>
