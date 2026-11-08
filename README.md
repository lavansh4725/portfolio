# Lavansh Jindal — Personal Portfolio Website (v1.0)

> A modern, high-performance developer portfolio built with React, Vite, TypeScript, and Tailwind CSS. Designed to showcase real production projects, technical skills, academic excellence, and problem-solving abilities for Software Developer, Full-Stack Engineer, and Data Analyst roles.

---

## 🌟 Overview

This portfolio website is crafted to present **Lavansh Jindal's** technical profile, academic credentials at Bennett University (CGPA 8.37, Dean's List), and verified production work. It is 100% free, requiring zero paid APIs, zero subscriptions, and zero paid hosting tiers.

### Target Roles
- **Software Developer / Software Engineer**
- **Full-Stack Developer**
- **Data Analyst / Business Intelligence Analyst**

---

## 🚀 Key Features

- **Modern Sticky Navigation**: Glassmorphic blur header with section highlighting as you scroll, quick resume download, verified social links, and a responsive mobile drawer.
- **Hero Section with Real Profile Photo**: Displays Lavansh Jindal's verified LinkedIn profile photograph inside an ambient glowing gradient ring, paired with a typewriter dual-role cycler.
- **Strictly Two Completed Projects**:
  1. **RoleReady AI**: Full-stack GenAI interview prep platform featuring React, Vite, Node.js, Express, MongoDB, Google GenAI, JWT, Puppeteer, and Zod.
  2. **Customer Shopping Behavior Analysis**: End-to-end data analytics and business intelligence pipeline utilizing Python, Pandas, NumPy, MySQL, and Power BI.
- **Interactive Deep-Dive Case Study Modals**: Built using modern web standards (native `<dialog>` elements with backdrop blur, keyboard dismissal, and body scroll containment).
- **Categorized Technical Skills**: Grounded strictly in verified coursework and projects across Programming Languages, Web & Backend, Data Analytics Tools, and Core CS Fundamentals.
- **Academic & Scholastic Honors**: Highlights Bennett University, Class XII, Class X, and Dean's List Recognition (2023).
- **Verified Certifications**: Credentials from UC San Diego, University of Michigan, Google, and Codio.
- **Coding Profiles**: Direct external links to GitHub, LeetCode, and LinkedIn.
- **Functional Contact Actions**: One-click copy email/phone buttons with visual feedback, call triggers, direct mailto link, and an interactive message composer.
- **Dark & Light Mode Support**: Defaults to a deep charcoal aesthetic with smooth light-mode switching persisted in `localStorage`.
- **Zero Cost Deployment**: Ready for one-click deployment on Vercel Hobby or GitHub Pages.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19 | Declarative component UI |
| **Tooling & Bundler** | Vite 8 | Lightning-fast HMR and optimized production bundling |
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

## 🔄 How to Update Assets

### Updating the Resume PDF
1. Save your new resume PDF with the exact name `resume.pdf`.
2. Replace `public/resume.pdf`.
3. Re-run `npm run build` and push to GitHub. The download link will automatically serve the updated version.

### Updating the Profile Photograph
1. Save your photograph with the exact name `profile.jpg`.
2. Replace `public/profile.jpg`.
3. Re-run `npm run build` and push to GitHub.

### Adding Future Projects or Certifications
1. Open `src/data/portfolioData.ts`.
2. Append new items into `projectsData`, `certificationsData`, or `educationData`.
3. The TypeScript interfaces in `src/types/portfolio.ts` will ensure all fields remain type-safe.

---

## 🌐 Free Deployment Guide

### Option A: Vercel (Recommended — 2 Minutes, Completely Free)
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Lavansh Jindal Portfolio v1.0"
   git branch -M main
   git remote add origin https://github.com/lavansh4725/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and select the `portfolio` repository.
4. Keep the default settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**.
6. Your portfolio will be live at `https://your-portfolio-name.vercel.app` at zero cost with automated free SSL.

### Option B: GitHub Pages (Alternative Free Method)
1. In `vite.config.ts`, ensure `base: '/'` (or `base: '/portfolio/'` if using project pages).
2. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
3. Add deployment scripts in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg          # Custom LJ monogram brand favicon
│   ├── profile.jpg          # Real LinkedIn profile picture
│   └── resume.pdf           # Real verified resume PDF
├── src/
│   ├── assets/              # Static styling assets
│   ├── components/
│   │   ├── About.tsx        # Background, academic journey & stats
│   │   ├── Certifications.tsx # 5 verified certification cards
│   │   ├── CodingProfiles.tsx # GitHub, LeetCode, LinkedIn cards
│   │   ├── Contact.tsx      # Email, phone, mailto composer, copy buttons
│   │   ├── Education.tsx    # Academic timeline & Dean's List honor
│   │   ├── Footer.tsx       # Quick navigation, copyright & back-to-top
│   │   ├── Hero.tsx         # Headline, photo ring, typewriter & CTA
│   │   ├── Navbar.tsx       # Sticky blur navigation & mobile drawer
│   │   ├── ProjectModal.tsx # Accessible case study modal
│   │   ├── Projects.tsx     # Featured RoleReady AI & Shopping Behavior
│   │   └── SocialIcons.tsx  # Crisp SVG brand icons
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/Light mode provider with localStorage
│   ├── data/
│   │   └── portfolioData.ts # Primary source of truth for portfolio data
│   ├── types/
│   │   └── portfolio.ts     # TypeScript data contracts & models
│   ├── App.tsx              # Root coordinator & scroll spy
│   ├── index.css            # Tailwind CSS v4 & custom animations
│   └── main.tsx             # React DOM entrypoint
├── index.html               # Semantic HTML shell, SEO & Open Graph
├── vite.config.ts           # Vite + Tailwind CSS v4 configuration
└── package.json             # Scripts & free open-source dependencies
```

---

## 📄 License
This project is open-source and free to use under the [MIT License](LICENSE).
