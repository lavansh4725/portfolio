# Technical Documentation — Lavansh Jindal Portfolio

> A comprehensive, beginner-friendly guide explaining how the portfolio codebase is architected, how every component functions, and the core engineering decisions powering the website.

---

## 1. Project Foundations & Setup

### What is React 19 and Vite 8?
- **React**: A component-based JavaScript library for building declarative user interfaces. React allows us to break the website into modular, reusable building blocks (`Navbar`, `Hero`, `Projects`, `Certifications`, etc.).
- **Vite**: A next-generation frontend build tool. Vite uses native ES modules during development for instant hot module replacement (HMR) and uses Rollup behind the scenes for lightning-fast, minified production builds.
- **TypeScript**: A typed superset of JavaScript that prevents bugs before runtime by ensuring that objects (like projects, skills, education items) conform to strictly defined contracts.

---

## 2. Component-by-Component Walkthrough

### A. Root Application Coordinator (`src/App.tsx`)
- **What it does**: Orchestrates the entire application layout, initializes the theme provider, and monitors the user's scroll position to highlight the active navbar link.
- **Dark/Light Theme**: Configured with `bg-slate-50 text-zinc-900 dark:bg-[#0a0b0e] dark:text-zinc-100`, providing high contrast and visual clarity across all devices and themes.

---

### B. Featured Projects Section (`src/components/Projects.tsx`)
- **What it does**: Showcases the three completed production-grade implementations:
  1. **Enterprise SQL Data Warehouse & ETL Pipeline**: Medallion Architecture on Microsoft SQL Server consolidating CRM and ERP systems into Kimball Star Schema views with T-SQL stored procedures and automated QA suites.
  2. **RoleReady AI**: Full-stack GenAI interview prep platform featuring React, Vite, Node.js, Express, MongoDB, Google GenAI, JWT, Puppeteer, and Zod.
  3. **Customer Shopping Behavior Analysis**: End-to-end data analytics and business intelligence pipeline utilizing Python, Pandas, NumPy, MySQL, and Power BI.

---

### C. Accessible Project Modal (`src/components/ProjectModal.tsx`)
- **What it does**: Renders an in-depth technical case study drawer.
- **Modern Web Standard**:
  - Implements the native HTML `<dialog>` element.
  - Triggered with `dialogRef.current.showModal()`.
  - Dismissible via keyboard `Esc` key or backdrop clicks.
  - Subsystems: Medallion Architecture, Stored Procedures, Data Quality Tests, Frontend, Backend, Database, and AI.

---

### D. Highlighted Elite Credential & Certifications (`src/components/Certifications.tsx`)
- **Featured Elite Banner**:
  - **Business Intelligence & Analytics** — **IIT Madras & NPTEL**
  - **Elite Distinction with Consolidated 83% (Assignments: 25/25, 100% Perfect Score)**
  - Roll No: `NPTEL26CS64S162600964`
  - Direct Verification: `https://nptel.ac.in/noc/`
- **Domain Categories**:
  1. **Data Science & AI**: IIT Madras Elite Business Intelligence, PySpark & AWS, IBM Statistics, UIUC Data Visualization, UIUC Text Mining, IBM AI, JHU Neural Networks & Ethics, Wingspan Time Series, Wingspan ML.
  2. **Algorithms & Core CS**: UCSD Algorithmic Toolbox, UCSD Data Structures, UMich Python Data Structures, Codio C++ Basics, Wingspan DSA.
  3. **Systems & Networking**: Google OS, CU Network Communication, CU Peer-to-Peer & LAN, Wingspan Automata.
  4. **Project Management & Business**: Google Project Initiation, IBM Project Management, Wingspan Business Presentations, Coursera Java.

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
