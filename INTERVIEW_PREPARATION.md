# Interview Preparation Guide — Lavansh Jindal Portfolio

> This guide is designed to help you confidently present and defend this exact portfolio website in data analyst, business intelligence, data engineering, and software development job interviews.

---

## 1. Quick Project Elevator Pitches

### A. 2-Minute Project Introduction (Recruiter / Hiring Manager Version)
> *"Hi, I'm Lavansh Jindal, a Computer Science Engineering undergraduate at Bennett University with a CGPA of 8.37 and Dean's List honors. I built this personal portfolio website to demonstrate my technical capabilities across data analytics, database architecture, and full-stack software development.
>
> Rather than relying on generic templates, I built the entire application from scratch using React 19, TypeScript, Vite 8, and Tailwind CSS v4. It features my verified LinkedIn profile photo, a direct resume download, 25+ verified professional certifications from UC San Diego, Johns Hopkins University, Google, IBM, and UIUC, and three production-grade project case studies:
> 1. **Enterprise SQL Data Warehouse & ETL Pipeline**: Medallion Architecture (Bronze ➔ Silver ➔ Gold) with Kimball Star Schema views, stored procedures, and automated QA on Microsoft SQL Server.
> 2. **RoleReady AI**: Full-stack GenAI interview prep platform featuring React, Node.js, Express, MongoDB, Google GenAI, and headless Puppeteer PDF export.
> 3. **Customer Shopping Behavior Analysis**: End-to-end data analytics and business intelligence pipeline utilizing Python, Pandas, MySQL, and Power BI.
>
> The website is completely free, mobile-responsive, WCAG accessible, and deployed on modern edge infrastructure with zero server costs."*

---

### B. 5-Minute Detailed Technical Walkthrough (Senior Engineer / Lead Architect Version)
> *"When architecting this portfolio, I treated it as a real engineering project with strict constraints: zero external paid dependencies, full end-to-end type safety, high accessibility, and sub-second load times.
>
> I chose **React 19** and **Vite 8** because Vite provides native ES module HMR during development and compiles an optimized, tree-shaken static production bundle under 99 kB gzipped. I used **TypeScript** to enforce rigid data models in `src/types/portfolio.ts` for my projects, certifications, and skills.
>
> For styling, I used **Tailwind CSS v4** with a custom variant for dark mode persisted in `localStorage`. The navigation uses an active scroll spy implemented via a passive window scroll event listener in `App.tsx` that computes element `offsetTop` thresholds without layout thrashing.
>
> For project deep-dives, I built an interactive case study modal that adheres to modern web standards by leveraging the native HTML5 `<dialog>` element with `showModal()`. This provides native focus management, keyboard `Esc` dismissal, and top-layer browser rendering. I also added CSS `overscroll-behavior: contain` to prevent background page scroll bleed.
>
> The centerpiece is my three completed projects:
> - **Enterprise SQL Data Warehouse**: Consolidating CRM and ERP systems using Medallion Architecture on Microsoft SQL Server. I wrote T-SQL stored procedures using `BULK INSERT` with `TABLOCK` for Bronze staging, `LEAD()` window functions to fix overlapping product dates in Silver, and modeled conformed dimension and fact views in Gold using Ralph Kimball Star Schema principles with integer surrogate keys and automated QA test scripts.
> - **RoleReady AI**: Where I implemented PDF text extraction, Zod schema validation, Google GenAI prompt orchestration, and headless Puppeteer PDF generation.
> - **Customer Shopping Behavior Analysis**: Where I cleaned 3,900 retail transactions in Python, loaded them into MySQL, calculated business KPIs via SQL, and designed an executive Power BI dashboard.
>
> In the Certifications section, I organized all 25+ of my verified credentials into five domain categories with direct links to verify credentials on Coursera and issuer portals."*

---

## 2. Key Technical Questions on the SQL Data Warehouse Project

### Q: Why did you choose Medallion Architecture for the SQL Data Warehouse?
**Answer**: Medallion Architecture provides clear separation of concerns across data maturity stages:
- **Bronze (Raw Staging)**: Stores data in its raw, unmodified structure using high-throughput `BULK INSERT` with `TABLOCK`. This provides an auditable historical record and allows re-running transformations without re-extracting from source operational systems.
- **Silver (Cleansed & Conformed)**: Standardizes datatypes, resolves historical date overlaps using the `LEAD()` window function, trims whitespaces, and fixes arithmetic anomalies.
- **Gold (Business Aggregations & Star Schema)**: Exposes dimensional models using Ralph Kimball Star Schema principles (`dim_customers`, `dim_products`, `fact_sales`) with surrogate keys optimized for analytical queries and BI dashboards.

### Q: How did you solve the overlapping date problem in the product catalog?
**Answer**: In the raw product catalog, historical versions frequently had inverted start/end dates or missing end dates. In the Silver ETL stored procedure, I utilized the `LEAD()` window function partitioned by product key and ordered by start date to derive the valid end date as `DATEADD(day, -1, LEAD(prd_start_dt) OVER (PARTITION BY prd_key ORDER BY prd_start_dt))`.

### Q: How did you ensure data quality and referential integrity in Gold?
**Answer**: I built an automated SQL test suite executing three categories of assertions:
1. **Uniqueness**: Confirming zero duplicate surrogate keys (`HAVING COUNT(*) > 1`).
2. **Referential Integrity**: Verifying zero orphan fact rows by performing `LEFT JOIN` from `fact_sales` to `dim_customers` and `dim_products` and asserting that keys are never null.
3. **Chronological Consistency**: Asserting that `order_date <= shipping_date` across all records.

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
