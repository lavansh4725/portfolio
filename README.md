# Lavansh Jindal — Personal Portfolio Website

> A modern, high-performance personal portfolio built with React 19, Vite 8, TypeScript, and Tailwind CSS v4. Designed to showcase production-grade projects, 24+ verified credentials, academic excellence at Bennett University, and full-stack software development & data analytics capabilities.

---

## 🌟 Overview

This portfolio website presents **Lavansh Jindal's** technical profile, academic credentials at Bennett University (CGPA 8.37, Dean's List), 24+ verified professional certifications (including Elite distinction from IIT Madras), and production-grade engineering projects. It is 100% free, requiring zero paid APIs, zero subscriptions, and zero paid hosting tiers.

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
- **Featured Elite IIT Madras Credential**: Prominently highlights the Elite NPTEL certification in **Business Intelligence & Analytics** (83% consolidated score, 25/25 perfect assignment score).
- **24+ Verified Professional Certifications**: Direct credential verification links from IIT Madras, UC San Diego, Johns Hopkins University, Google, IBM, UIUC, University of Michigan, and Wingspan / Infosys.
- **Categorized Technical Skills**: Grounded in verified coursework and projects across Programming Languages, Data Engineering & Analytics Tools, Web & Backend Development, and Databases & Core CS Concepts.
- **Academic & Scholastic Honors**: Highlights Bennett University, Class XII, Class X, and Dean's List Recognition (2023).
- **Coding Profiles**: Direct external links to GitHub, LeetCode, and LinkedIn.
- **Functional Contact Actions**: One-click copy email/phone buttons with visual feedback, call triggers, direct mailto link, and an interactive message composer.
- **Seamless Dark & Light Mode**: Defaulting to a deep charcoal aesthetic with smooth high-contrast light-mode switching persisted in `localStorage`.
- **Zero Cost Deployment**: Ready for one-click deployment on Vercel Hobby or GitHub Pages.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | React 19 | Component-based declarative UI |
| **Tooling & Bundler** | Vite 8 | Lightning-fast HMR and optimized production bundling (gzip: ~98 kB) |
| **Language** | TypeScript | End-to-end type safety and maintainability |
| **Styling** | Tailwind CSS v4 | Modern CSS utilities, container queries, and dark/light mode variants |
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

## 🌐 Complete Free Deployment Guide

### Option A: Deploy to Vercel (Recommended — Takes 2 Minutes)
1. Push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio with all projects, certifications, and responsive styling"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
3. Click **"Add New..."** ➔ **"Project"**.
4. Import your `portfolio` repository.
5. Vercel automatically detects **Vite**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**.
7. In ~30 seconds, your site is live with a free subdomain (e.g. `https://lavansh-jindal.vercel.app`) and automatic free SSL!

### Option B: Deploy to GitHub Pages (Completely Free on GitHub)
1. In `vite.config.ts`, set `base: '/portfolio/'` if your repo is named `portfolio`.
2. Build the project:
   ```bash
   npm run build
   ```
3. In your GitHub repository settings, go to **Pages** ➔ select deploy from branch or use the automated GitHub Action workflow.

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
│   │   ├── Certifications.tsx   # Elite IIT Madras banner + 24 verified credentials
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
[![LeetCode](https://img.shields.io/badge/LeetCode-lavansh__0395-FFA116?style=flat&logo=leetcode&logoColor=white)](https://leetcode.com/u/lavansh_0395/)
[![Email](https://img.shields.io/badge/Email-lavansh4725jindal%40gmail.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:lavansh4725jindal@gmail.com)

<sub>*"Bridging full-stack software development and data analytics — architecting resilient dimensional data warehouses, intelligent GenAI platforms, and high-impact business intelligence."*</sub>

</div>
