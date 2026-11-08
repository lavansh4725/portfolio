# Technical Documentation — Lavansh Jindal Portfolio

> A comprehensive, beginner-friendly guide explaining how the portfolio codebase is architected, how every component functions, and the core engineering decisions powering the website.

---

## 1. Project Foundations & Setup

### What is React 19 and Vite 8?
- **React**: A component-based JavaScript library for building declarative user interfaces. React allows us to break the website into modular, reusable building blocks (`Navbar`, `Hero`, `Projects`, etc.).
- **Vite**: A next-generation frontend build tool. Vite uses native ES modules during development for instant hot module replacement (HMR) and uses Rollup behind the scenes for lightning-fast, minified production builds.
- **TypeScript**: A typed superset of JavaScript that prevents bugs before runtime by ensuring that objects (like projects, skills, education items) conform to strictly defined contracts.

---

## 2. Component-by-Component Walkthrough

### A. Root Application Coordinator (`src/App.tsx`)
- **What it does**: Orchestrates the entire application layout, initializes the theme provider, and monitors the user's scroll position to highlight the active navbar link.
- **Why it is required**: Instead of letting individual sections operate in isolation, `App.tsx` synchronizes global state across the navigation bar and document sections.
- **How it works**:
  - Uses `useState<string>('hero')` to store which section is currently in view.
  - Uses `useEffect` with a passive window scroll event listener (`{ passive: true }`) to calculate the top offset of each section (`#hero`, `#about`, `#skills`, etc.).
  - Passes the `activeSection` state down as a prop to `<Navbar activeSection={activeSection} />`.

```tsx
// Key snippet from src/App.tsx: Active Section Scroll Spy
useEffect(() => {
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'profiles', 'contact'];
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && scrollPosition >= el.offsetTop) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

### B. Theme Context & Persistence (`src/context/ThemeContext.tsx`)
- **What it does**: Manages light and dark mode switching, persisting the user's choice in browser local storage.
- **Why it is required**: Provides a modern, accessible user experience while defaulting to the desired engineering dark aesthetic.
- **How it works**:
  - `useState` initializes from `localStorage.getItem('lavansh_portfolio_theme') || 'dark'`.
  - `useEffect` monitors state changes and toggles the class `.dark` directly on `document.documentElement`.
  - Exposes `useTheme()` custom hook so any child component (`Navbar`, `Footer`) can trigger `toggleTheme()`.

---

### C. Sticky Navigation Bar (`src/components/Navbar.tsx`)
- **What it does**: Stays fixed at the top of the viewport with a glassmorphism backdrop blur. Houses branding, navigation links, direct resume download, theme toggle, and external profile icons.
- **Responsive design**:
  - On desktop (`md:` screens), displays horizontal navigation links and action buttons.
  - On mobile, renders a hamburger toggle button that reveals an animated mobile drawer with large touch targets.
- **Props**: Receives `activeSection: string` to highlight the current section.

---

### D. Hero Section (`src/components/Hero.tsx`)
- **What it does**: Serves as the landing view. Introduces Lavansh Jindal, displays his real LinkedIn profile photograph within a glowing gradient halo, and cycles through his core job role titles.
- **Animated Typewriter Effect**:
  - Alternates smoothly between `"Software Developer"`, `"Data Analyst"`, `"Full-Stack Developer"`, and `"Business Intelligence Analyst"`.
  - Uses `useState` for character index and typing speed, cycling characters without requiring external bulky animation packages.
- **Real Photograph Presentation**:
  - The image is loaded from `public/profile.jpg`.
  - Wrapped inside an animated border gradient ring with ambient blur (`blur-2xl`), floating role badges, and a green active status indicator.
- **Call-to-Action Buttons**:
  - "View My Projects" (smooth scrolls to `#projects`).
  - "Download Resume" (triggers direct download of `/resume.pdf`).
  - "Let's Connect" (smooth scrolls to `#contact`).

---

### E. About Me Section (`src/components/About.tsx`)
- **What it does**: Explains Lavansh's academic background at Bennett University, problem-solving mindset, and dual passion for software development and data analytics.
- **Layout**:
  - Top: 4 high-level stat cards (CGPA: 8.37/10, Dean's List honor, 2 production projects, 5 verified certifications).
  - Left: Summary card with academic timeline.
  - Right: Three core capability pillars:
    1. Full-Stack Software Engineering
    2. Data Analytics & Business Intelligence
    3. Algorithmic Problem Solving

---

### F. Technical Skills Section (`src/components/Skills.tsx`)
- **What it does**: Categorizes verified technologies from Lavansh's resume into 4 clear groups:
  1. **Programming Languages**: C++, Python, Java, JavaScript, SQL.
  2. **Web & Backend Development**: HTML, CSS, React, Vite, Node.js, Express.js, JWT.
  3. **Data Analytics & Tools**: Pandas, NumPy, Matplotlib, Power BI, Git, Puppeteer, Zod.
  4. **Databases & Core CS Concepts**: MySQL, MongoDB, Data Structures & Algorithms, OOP, Computer Networks, DBMS.
- **Key Design Decision**: Avoids artificial percentage bars (e.g. "React 90%") which are meaningless to senior engineering interviewers. Instead, presents clean badges accompanied by category filters.

---

### G. Featured Projects Section (`src/components/Projects.tsx`)
- **What it does**: Showcases strictly the two completed projects from the resume:
  1. **RoleReady AI**: Full-stack GenAI interview prep platform.
  2. **Customer Shopping Behavior Analysis**: Data analytics and business intelligence pipeline.
- **Visual Design**:
  - Each card features a custom, high-fidelity UI mockup thumbnail simulating a running platform (mock terminal/compiler status for RoleReady AI; mock Power BI KPI cards for Customer Shopping Behavior Analysis).
  - Highlighting verified features directly from the resume.
  - Clicking "View Case Study" opens the comprehensive `ProjectModal`.

---

### H. Accessible Project Modal (`src/components/ProjectModal.tsx`)
- **What it does**: Renders an in-depth technical case study drawer.
- **Modern Web Standard**:
  - Implements the native HTML `<dialog>` element.
  - Triggered with `dialogRef.current.showModal()`.
  - Dismissible via keyboard `Esc` key or backdrop clicks.
  - Contains tabbed navigation:
    - **Overview & Objectives**: Business problem, core deliverables, and highlights.
    - **System Architecture**: Execution workflow, component hierarchy, and metrics.
    - **Technical Stack**: Deep breakdown of frontend, backend, database, AI, and auth subsystems.
    - **Challenges & Learnings**: Real engineering hurdles encountered and technical resolutions.

---

### I. Education & Achievements Section (`src/components/Education.tsx`)
- **What it does**: Renders a vertical timeline representing:
  - Bennett University (B.Tech in CSE, 2023 – Present, CGPA: 8.37/10).
  - Smt. Sridevi Awasiya Vidyapeeth (Class XII, CBSE, 83.6%, 2023).
  - St. Peter's Sr. Sec. School (Class X, CBSE, 95.2%, 2021).
  - Dedicated card highlighting the Dean's List honor (2023).

---

### J. Verified Certifications (`src/components/Certifications.tsx`)
- **What it does**: Displays the 5 credentials earned across UC San Diego, University of Michigan, Google, and Codio, outlining the specific competencies gained in each.

---

### K. Coding Profiles (`src/components/CodingProfiles.tsx`)
- **What it does**: Clean cards directing recruiters to Lavansh's verified profiles on GitHub (`lavansh4725`), LeetCode (`lavansh_0395`), and LinkedIn (`lavansh-jindal`).

---

### L. Contact Section (`src/components/Contact.tsx`)
- **What it does**: Provides frictionless ways to contact Lavansh.
- **100% Free & Functional Mailto Composer**:
  - Includes input fields for Name, Email, Subject, and Message.
  - Clicking "Send Message" dynamically generates a standard `mailto:` link with URI-encoded subject and body parameters, opening the user's default email client.
  - Zero backend servers, zero paid email APIs (SendGrid/Resend), zero broken promises.
- **Quick Action Copy Buttons**:
  - One-click copy for email (`lavansh4725jindal@gmail.com`) and phone (`+91 7878685796`) with temporary visual checkmarks.

---

### M. Footer (`src/components/Footer.tsx`)
- **What it does**: Contains quick navigation links, brand identity, dynamic copyright year, and a smooth back-to-top button.
