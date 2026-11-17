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
- **Scroll Spy**: Tracks element `offsetTop` thresholds via passive listeners, syncing the active navigation item dynamically.

---

### B. Featured Projects Section (`src/components/Projects.tsx`)
- **What it does**: Showcases the three completed production-grade implementations:
  1. **Enterprise SQL Data Warehouse & ETL Pipeline**: Medallion Architecture on Microsoft SQL Server consolidating CRM and ERP systems into Kimball Star Schema views with T-SQL stored procedures and automated QA suites.
  2. **RoleReady AI**: Full-stack GenAI interview prep platform featuring React, Vite, Node.js, Express, MongoDB, Google GenAI, JWT, Puppeteer, and Zod.
  3. **Customer Shopping Behavior Analysis**: End-to-end data analytics and business intelligence pipeline utilizing Python, Pandas, NumPy, MySQL, and Power BI.
- **Custom UI Previews**: Each card features a custom, high-fidelity UI mockup thumbnail simulating a running platform (Medallion pipeline stages for SQL Data Warehouse; terminal engine for RoleReady AI; Power BI KPI matrix for Customer Shopping Behavior).

---

### C. Accessible Project Modal (`src/components/ProjectModal.tsx`)
- **What it does**: Renders an in-depth technical case study drawer.
- **Modern Web Standard**:
  - Implements the native HTML `<dialog>` element.
  - Triggered with `dialogRef.current.showModal()`.
  - Dismissible via keyboard `Esc` key or backdrop clicks.
  - Contains tabbed navigation:
    - **Overview & Objectives**: Business problem, core deliverables, and highlights.
    - **System Architecture**: Execution workflow, component hierarchy, and metrics.
    - **Technical Stack**: Deep breakdown of Medallion architecture, stored procedures, data quality tests, frontend, backend, database, and AI subsystems.
    - **Challenges & Learnings**: Real engineering hurdles encountered and technical resolutions.

---

### D. Verified Certifications (`src/components/Certifications.tsx`)
- **What it does**: Displays the 25+ verified credentials earned across world-class institutions including UC San Diego, Johns Hopkins University, Google, IBM, University of Michigan, UIUC, Wingspan / Infosys, and MathWorks.
- **Domain Categories**:
  1. **Algorithms & Core CS**: Algorithmic Toolbox (UCSD), Data Structures (UCSD), Python Data Structures (UMich), C++ Basics (Codio), DSA (Wingspan).
  2. **Data Science & AI**: PySpark & AWS (Wingspan), Statistics for Data Science (IBM), Data Visualization (UIUC), Text Mining and Analytics (UIUC), Intro to AI (IBM), Intro to Neural Networks (JHU), Advanced Neural Network Techniques (JHU), AI Ethics (JHU), Time Series Analysis (Wingspan), Machine Learning (Wingspan).
  3. **Systems & Networking**: Operating Systems (Google), Fundamentals of Network Communication (CU), Peer-to-Peer & LAN (CU), Automata Theory (Wingspan).
  4. **Project Management & Business**: Project Initiation (Google), Intro to Project Management (IBM), Business Presentations (Wingspan), Java for Beginners (Coursera).
  5. **Mathematics & Tools**: MATLAB Fundamentals (MathWorks), Symbolic Math (MathWorks).
- **Direct Credential Links**: Provides direct links to verify credentials on `https://coursera.org/verify/<ID>` and issuer portals.

---

### E. Contact Section (`src/components/Contact.tsx`)
- **100% Free & Functional Mailto Composer**:
  - Dynamic mailto construction with URI-encoded subject and body parameters, opening the user's native email client without relying on paid third-party forms.
- **Quick Action Copy Buttons**:
  - One-click copy for email (`lavanshjindal47@gmail.com`) and phone (`+91 7878685796`) with temporary visual checkmarks.

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
