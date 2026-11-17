import type {
  PersonalInfo,
  SkillCategory,
  ProjectDetail,
  EducationItem,
  AchievementItem,
  CertificationItem,
  CodingProfile,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Lavansh Jindal',
  headline: "Hi, I'm Lavansh Jindal.",
  roles: [
    'Data Analyst',
    'Software Developer',
    'Full-Stack Developer',
    'Business Intelligence Analyst',
  ],
  bio: "I'm a Computer Science Engineering undergraduate passionate about building practical software solutions, solving complex problems, and transforming data into meaningful insights.",
  location: 'Greater Noida, Uttar Pradesh, India',
  email: 'lavanshjindal47@gmail.com',
  phone: '+91 7878685796',
  githubUrl: 'https://github.com/lavansh4725/',
  linkedinUrl: 'https://www.linkedin.com/in/lavansh-jindal/',
  leetcodeUrl: 'https://leetcode.com/u/lavansh_0395/',
  resumeUrl: '/resume.pdf',
  profileImageUrl: '/profile.jpg',
  availability: 'Open for Data Analyst, Software Engineer & BI Opportunities',
};

export const aboutContent = {
  summary: `Computer Science undergraduate at Bennett University with a strong problem-solving mindset and a focus on building practical software solutions. Experienced in taking projects from problem identification and analysis to implementation and visualization, with a keen interest in software development, algorithms, and creating solutions that are both efficient and user-focused.`,
  corePillars: [
    {
      title: 'Enterprise Data Warehousing & ETL',
      description:
        'Architecting scalable dimensional models with Kimball Star Schema and Medallion Architecture (Bronze ➔ Silver ➔ Gold). Building high-throughput stored procedures, data quality test suites, and conformed dimensions on Microsoft SQL Server and MySQL.',
    },
    {
      title: 'Full-Stack Software Engineering',
      description:
        'Crafting responsive web applications with React, Vite, Node.js, and Express. Integrating GenAI workflows, type-safe API contracts with Zod, and robust JWT session security.',
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description:
        'Transforming raw transactional datasets into strategic business decisions using Python, Pandas, NumPy, SQL, and interactive executive Power BI dashboards with cross-filtering analytics.',
    },
  ],
  quickStats: [
    { label: 'CGPA', value: '8.37 / 10', highlight: 'Bennett University' },
    { label: 'Honor', value: "Dean's List", highlight: 'Academic Excellence (2023)' },
    { label: 'Production Projects', value: '3 Case Studies', highlight: 'Data Warehouse, GenAI, & BI' },
    { label: 'Verified Certifications', value: '25+ Credentials', highlight: 'UCSD, Google, IBM, JHU, UMich' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used for systems programming, data analysis, and application logic.',
    skills: [
      { name: 'SQL (T-SQL, MySQL)', iconName: 'Database' },
      { name: 'Python', iconName: 'FileCode2' },
      { name: 'C++', iconName: 'Code2' },
      { name: 'Java', iconName: 'Cpu' },
      { name: 'JavaScript', iconName: 'FileJson' },
    ],
  },
  {
    title: 'Data Engineering & Analytics Tools',
    description: 'Data warehousing, transformation pipelines, statistical libraries, and BI platforms.',
    skills: [
      { name: 'Microsoft SQL Server', iconName: 'Database' },
      { name: 'Medallion Architecture', iconName: 'Layers' },
      { name: 'Kimball Star Schema', iconName: 'Box' },
      { name: 'ETL Pipelines', iconName: 'Workflow' },
      { name: 'Power BI', iconName: 'PieChart' },
      { name: 'Pandas', iconName: 'Table' },
      { name: 'NumPy', iconName: 'Binary' },
      { name: 'Matplotlib', iconName: 'BarChart2' },
      { name: 'PySpark & AWS', iconName: 'Cloud' },
      { name: 'Time Series Analysis', iconName: 'TrendingUp' },
    ],
  },
  {
    title: 'Web & Backend Development',
    description: 'Modern full-stack technologies for building performant, reactive web platforms.',
    skills: [
      { name: 'React', iconName: 'Atom' },
      { name: 'Vite', iconName: 'Zap' },
      { name: 'Node.js', iconName: 'Server' },
      { name: 'Express.js', iconName: 'Layers' },
      { name: 'JWT (JSON Web Tokens)', iconName: 'ShieldCheck' },
      { name: 'Puppeteer', iconName: 'FileDown' },
      { name: 'Zod Validation', iconName: 'CheckCircle2' },
      { name: 'HTML & CSS', iconName: 'Palette' },
    ],
  },
  {
    title: 'Databases & Core CS Concepts',
    description: 'Foundational computer science principles, database modeling, and systems architecture.',
    skills: [
      { name: 'MySQL', iconName: 'Database' },
      { name: 'MongoDB', iconName: 'HardDrive' },
      { name: 'Data Structures & Algorithms', iconName: 'Binary' },
      { name: 'Object-Oriented Programming (OOP)', iconName: 'Box' },
      { name: 'Computer Networks (TCP/IP)', iconName: 'Network' },
      { name: 'Operating Systems', iconName: 'Cpu' },
      { name: 'DBMS Architecture', iconName: 'ServerCog' },
      { name: 'Git & GitHub', iconName: 'GitBranch' },
    ],
  },
];

export const projectsData: ProjectDetail[] = [
  {
    id: 'sql-data-warehouse-project',
    title: 'Enterprise SQL Data Warehouse & ETL Pipeline',
    category: 'Data Engineering | Medallion Architecture & Kimball Star Schema',
    badgeType: 'warehouse',
    shortDescription:
      'Engineered an enterprise data warehouse on Microsoft SQL Server consolidating disparate CRM and ERP operational systems using Medallion Architecture (Bronze ➔ Silver ➔ Gold) and Kimball Star Schema modeling for high-performance BI analytics.',
    technologies: [
      'Microsoft SQL Server',
      'T-SQL',
      'Medallion Architecture',
      'Kimball Star Schema',
      'ETL Stored Procedures',
      'Data Quality QA Suite',
      'Power BI',
    ],
    githubUrl: 'https://github.com/lavansh4725/sql-data-warehouse-project',
    overview:
      'Organizations frequently struggle with siloed operational systems that produce contradictory metrics. This project implements a modern Enterprise Data Warehouse on Microsoft SQL Server, consolidating operational records from two independent enterprise systems: CRM (customer profiles, product catalogs, sales transactions) and ERP (demographics, geographic locations, category hierarchies). Following the Medallion Architecture, raw records are ingested into Bronze, conformed and cleansed in Silver, and exposed as an optimized Kimball Star Schema in Gold for downstream business intelligence.',
    problemStatement:
      'Fragmented transactional databases across CRM and ERP platforms suffer from inconsistent data types, historical overlapping validity periods, mismatched country ISO naming conventions, and negative transactional anomalies, preventing reliable executive reporting.',
    objectives: [
      'Consolidate 6 disparate operational datasets across CRM and ERP systems into a unified analytical data warehouse.',
      'Implement multi-tier Medallion Architecture (Bronze Staging ➔ Silver Cleansing ➔ Gold Star Schema).',
      'Develop high-throughput T-SQL stored procedures with BULK INSERT and TABLOCK optimizations.',
      'Cleanse data inconsistencies: date inversion fixing via LEAD(), price recalculation, and country code normalization.',
      'Generate deterministic integer surrogate keys using ROW_NUMBER() in gold dimensional views.',
      'Build an automated data quality and referential integrity testing suite to ensure zero orphan fact records.',
    ],
    features: [
      'Bronze Layer Ingestion: Zero-loss raw CSV ingestion into dedicated staging schemas via bronze.load_bronze with duration telemetry.',
      'Silver Layer Transformation: Stored procedure silver.load_silver resolving overlapping validity periods with window functions (LEAD()).',
      'Arithmetic Normalization: Auto-recalculating corrupted transaction sales via sls_quantity * ABS(sls_price).',
      'Entity Harmonization: Standardizing country codes (US/USA ➔ United States, DE ➔ Germany) and demographic gender flags.',
      'Gold Kimball Star Schema: Dimensional modeling with gold.dim_customers, gold.dim_products, and central gold.fact_sales.',
      'Automated Quality Checks: SQL validation test suite confirming zero surrogate key duplication, zero orphan fact rows, and chronological consistency.',
      'OLAP & BI Ready: Directly compatible with Power BI and dimensional analytics tools for Customer Lifetime Value (LTV) reporting.',
    ],
    systemArchitecture:
      'Multi-Tier Medallion Data Warehouse Pipeline: Raw operational CSV files from CRM and ERP source systems are bulk-loaded into Bronze staging tables using high-throughput T-SQL procedures. The Silver layer executes cleansing scripts, resolves inverted date ranges using LEAD(), cleanses corrupted price records, standardizes categorical values, and appends audit metadata (dwh_create_date). The Gold layer models conformed dimensions (dim_customers, dim_products) and central sales facts (fact_sales) with integer surrogate keys for sub-second analytical querying.',
    architecturePoints: [
      'Source Systems: CRM (cust_info, prd_info, sales_details) and ERP (CUST_AZ12, LOC_A101, PX_CAT_G1V2).',
      '1. Bronze Layer (Raw Staging): bronze.load_bronze stored procedure with BULK INSERT and TABLOCK.',
      '2. Silver Layer (Cleanse & Conform): silver.load_silver stored procedure with window functions (LEAD) and data standardization.',
      '3. Gold Layer (Kimball Star Schema): Dimensional views (dim_customers, dim_products, fact_sales) with integer surrogate keys.',
      'Automated QA Suite: Structured SQL assertions checking key uniqueness, referential integrity, and date logic.',
    ],
    technicalImplementation: {
      medallionArchitecture:
        'Structured the database into three dedicated schemas: bronze (raw staging), silver (cleansed & conformed), and gold (dimensional analytical views), ensuring full lineage traceability.',
      storedProcedures:
        'Engineered bronze.load_bronze and silver.load_silver with execution timing metrics, transaction error handling, and idempotent truncation-reload patterns.',
      dataQuality:
        'Crafted automated SQL test suites verifying zero surrogate key duplication, star schema referential integrity (zero orphan sales records), and chronological consistency (order_date <= shipping_date).',
      sqlAndMetrics:
        'Utilized advanced T-SQL constructs including LEAD() window functions for SCD Type 2 date ranges, ROW_NUMBER() for surrogate key generation, and aggregate queries computing Customer Lifetime Value (LTV).',
    },
    challengesAndSolutions: [
      {
        challenge: 'Historical overlapping and inverted validity dates in raw product catalog versions.',
        solution:
          'Utilized the LEAD() window function partitioned by product key and ordered by start date to dynamically calculate valid end dates as the day prior to the next version start date.',
      },
      {
        challenge: 'Corrupted sales records containing negative prices or mismatched line item totals.',
        solution:
          'Implemented conditional CASE WHEN logic in Silver ETL to automatically derive and correct transaction values via sls_quantity * ABS(sls_price).',
      },
      {
        challenge: 'Inconsistent country naming conventions across independent operational CRM and ERP systems.',
        solution:
          'Standardized disparate abbreviations (e.g., US, USA to United States; DE to Germany) using lookup mappings, ensuring unified geographic dimensions in Gold.',
      },
    ],
    learnings: [
      'Mastered enterprise dimensional modeling using Ralph Kimball Star Schema principles.',
      'Gained deep proficiency in T-SQL window functions, stored procedure optimization, and Medallion architecture.',
      'Developed rigorous testing practices for warehouse schema integrity and ETL auditability.',
    ],
    metricsOrInsights: [
      'Enterprise Medallion Architecture (Bronze ➔ Silver ➔ Gold)',
      'Kimball Star Schema with Surrogate Keys',
      'Automated Data Quality & Referential Integrity Tests',
      'Advanced T-SQL Window Functions & Stored Procedures',
    ],
  },
  {
    id: 'roleready-ai',
    title: 'RoleReady AI',
    category: 'Full-Stack Development | Generative AI',
    badgeType: 'engineering',
    shortDescription:
      'Built a full-stack GenAI interview preparation platform that analyzes resume PDFs, self-descriptions, and target job descriptions to generate personalized interview reports.',
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'Google GenAI',
      'JWT',
      'Puppeteer',
      'Zod',
    ],
    githubUrl: 'https://github.com/lavansh4725/interview-ai',
    overview:
      'RoleReady AI addresses the challenge job seekers face when preparing for specialized technical and analytical roles. Rather than relying on generic interview questionnaires, the platform evaluates a candidate’s uploaded resume PDF, personal self-description, and target job description to synthesize actionable, role-tailored interview guidance, gap analysis, and tailored interview questions.',
    problemStatement:
      'Candidates often struggle to pinpoint the exact gaps between their resume and the specific requirements of a target job role. Generic interview prep resources fail to contextualize feedback against both the candidate’s real project achievements and the recruiter’s specific job description.',
    objectives: [
      'Extract text seamlessly from applicant resume PDFs using server-side parsing.',
      'Correlate candidate capabilities against job specifications using Google GenAI.',
      'Enforce type-safe AI output schemas with Zod validation to ensure deterministic report structure.',
      'Deliver automated, downloadable ATS-friendly PDF summaries rendered headlessly via Puppeteer.',
      'Provide secure user sessions with JSON Web Tokens (JWT) and persistent interview history via MongoDB.',
    ],
    features: [
      'Resume PDF Text Extraction: Ingests user resumes and extracts structured text for AI analysis.',
      'Google GenAI Synthesis: Contextual prompt pipelines generating role-specific questions and tailored feedback.',
      'Strict Zod Validation: Validates incoming request payloads and constrains AI model responses into predictable data contracts.',
      'ATS-Friendly PDF Export: Compiles reports into clean, printable PDFs using headless Puppeteer.',
      'Secure JWT Authentication: Protects user routes, resumes, and interview records with bearer tokens.',
      'MongoDB Persistence: Stores interview session histories, question sets, and user profiles.',
      'Responsive React Interface: Built with Vite for rapid load times and accessible component interactions.',
    ],
    systemArchitecture:
      'Layered Client-Server Architecture: A high-performance React (Vite) single-page application communicates via RESTful APIs with an Express.js backend on Node.js. Ingestion pipelines parse incoming PDF resumes into text buffers. The AI orchestration layer transmits structured prompts with candidate and job criteria to Google GenAI. The returned data passes through Zod validation schemas before persisting into MongoDB and rendering to the user, with headless Puppeteer available for server-side PDF exports.',
    architecturePoints: [
      'Presentation Layer: React SPA with responsive design, real-time feedback, and accessible controls.',
      'API Gateway & Auth: Express router with JWT middleware validating tokens on protected endpoints.',
      'AI & Processing Service: Google GenAI API client with prompt templates and Zod schema enforcement.',
      'Document Generation Engine: Puppeteer worker generating print-ready PDF assets.',
      'Data Layer: MongoDB document database managing user credentials and session reports.',
    ],
    technicalImplementation: {
      frontend:
        'Developed a responsive React interface utilizing Vite for instant HMR and optimized production bundles. Component states manage multi-step questionnaire inputs, document upload progress, and report rendering with interactive feedback cards.',
      backend:
        'Architected an Express.js REST API on Node.js. Configured modular controllers for authentication, document parsing, AI report generation, and export handling.',
      database:
        'Implemented MongoDB schemas to store encrypted user credentials, resume metadata, structured interview questions, and historical report snapshots for candidate tracking.',
      aiIntegration:
        'Integrated Google GenAI with systematic prompt constraints. Structured outputs are parsed and verified using Zod schemas to eliminate malformed JSON responses and ensure reliable UI rendering.',
      authAndPdf:
        'Secured endpoints using JSON Web Tokens (JWT) stored safely with expiry checks. Deployed Puppeteer in headless mode to render an ATS-optimized HTML template directly into a downloadable vector PDF.',
    },
    challengesAndSolutions: [
      {
        challenge: 'Ensuring consistent, structured output formatting from Generative AI responses.',
        solution:
          'Applied Zod schema validation to parse and validate AI-returned JSON. In cases of partial parse errors, fallback parsers re-sanitize raw strings to safeguard frontend stability.',
      },
      {
        challenge: 'Puppeteer memory footprint and server-side PDF generation performance.',
        solution:
          'Optimized headless Chromium launch arguments, isolated browser page lifecycles, and reused page buffers to achieve fast, memory-safe PDF rendering.',
      },
      {
        challenge: 'Accurate text extraction across diverse PDF layouts.',
        solution:
          'Built a robust stream-based PDF extraction pipeline that normalizes whitespace and isolates section headers before feeding content to the AI prompt.',
      },
    ],
    learnings: [
      'Mastered the end-to-end integration of LLMs within production-style full-stack web applications.',
      'Gained deep experience in schema-driven development using Zod across frontend and backend boundaries.',
      'Refined asynchronous Node.js execution patterns when handling concurrent PDF generation tasks.',
    ],
    metricsOrInsights: [
      'Full-Stack GenAI Workflow',
      'Type-Safe API Contracts (Zod)',
      'Automated Headless PDF Generation',
      'Persistent MongoDB Session Storage',
    ],
  },
  {
    id: 'customer-shopping-behavior-analysis',
    title: 'Customer Shopping Behavior Analysis',
    category: 'Data Analytics | Business Intelligence',
    badgeType: 'analytics',
    shortDescription:
      'Cleaned and analyzed customer shopping data using Python, Pandas, NumPy, and MySQL to identify purchasing patterns, customer segments, product trends, and revenue drivers.',
    technologies: [
      'Python',
      'SQL',
      'MySQL',
      'Power BI',
      'Pandas',
      'NumPy',
    ],
    githubUrl: 'https://github.com/lavansh4725/customer-shopping-behavior-analysis',
    overview:
      'Retail enterprises collect vast volumes of transactional shopping data but frequently face friction identifying which customer demographics and product categories truly fuel sustainable revenue growth. This project implemented a rigorous end-to-end data analytics workflow—from raw data cleaning and statistical transformations in Python to relational querying in MySQL and executive dashboard delivery in Power BI.',
    problemStatement:
      'Without granular customer segmentation and category-level KPI tracking, commercial retail teams risk misallocating promotional budgets, stocking suboptimal inventory, and failing to retain high-lifetime-value shoppers.',
    objectives: [
      'Clean, sanitize, and validate customer shopping datasets using Python (Pandas & NumPy).',
      'Ingest normalized transactional tables into a relational MySQL database.',
      'Formulate complex SQL queries to calculate core business KPIs: revenue, average spend, repeat frequency, and category performance.',
      'Design an interactive Power BI dashboard with dynamic slicers, demographic breakdowns, and trend charts.',
      'Derive data-backed recommendations for promotional campaigns, product merchandising, and retention strategy.',
    ],
    features: [
      'Comprehensive Data Hygiene Pipeline: Detects and remedies null records, standardizes datatypes, and trims outliers.',
      'Relational Data Schema in MySQL: Structures transactions, customer demographics, and product attributes for performant querying.',
      'SQL-Driven KPI Aggregations: Window functions, GROUP BY calculations, and subqueries computing lifetime revenue and frequency.',
      'Interactive Power BI Dashboard: Visualizes customer segmentation, regional sales velocity, and product category trends.',
      'Demographic & Behavioral Segmentation: Analyzes age brackets, gender distribution, and loyalty behavior against revenue.',
      'Strategic Decision Recommendations: Actionable insights outlining optimal discount thresholds and inventory distribution.',
    ],
    systemArchitecture:
      'End-to-End Analytics Pipeline: Raw customer shopping data is imported into a Python analytics environment. Pandas and NumPy execute data cleaning, type casting, and feature engineering. The validated dataset is loaded into a relational MySQL database. Complex SQL queries calculate summary KPIs and aggregations. Power BI connects to the data store to render interactive reports featuring KPI cards, category breakdown matrices, and customer segment slicers.',
    architecturePoints: [
      'Data Ingestion & Hygiene: Python script utilizing Pandas to handle missing values and outlier detection.',
      'Statistical Processing: NumPy operations performing metric normalization and distribution checks.',
      'Relational Database Layer: MySQL database maintaining tables for customers, products, and sales logs.',
      'Analytical Query Engine: SQL scripts executing aggregations, averages, and group-level segmentation.',
      'Visualization & Business Intelligence: Power BI dashboard with cross-filtering visual components.',
    ],
    technicalImplementation: {
      dataPipeline:
        'Executed data wrangling in Python using Pandas. Filtered anomalies, parsed date attributes, verified numerical ranges, and prepared cleaned CSV outputs for downstream database loading.',
      sqlAndMetrics:
        'Crafted robust SQL queries in MySQL utilizing aggregate functions (SUM, AVG, COUNT), CASE WHEN statements, and subqueries to calculate key retail KPIs such as repeat purchase frequency and category revenue contributions.',
      dashboardDesign:
        'Constructed an executive Power BI report configured with dynamic slicers for demographic segments, product lines, and payment types, enabling stakeholders to drill down into micro-level shopping patterns.',
    },
    challengesAndSolutions: [
      {
        challenge: 'Resolving inconsistencies and outliers in transaction records without biasing distributions.',
        solution:
          'Utilized NumPy interquartile range (IQR) analysis and domain-specific validation rules in Pandas to filter invalid data points while preserving legitimate high-volume purchases.',
      },
      {
        challenge: 'Writing efficient SQL queries across multidimensional transactional data.',
        solution:
          'Structured database indexes on primary foreign keys and optimized aggregation queries with targeted GROUP BY and JOIN logic to minimize query response times.',
      },
      {
        challenge: 'Designing a Power BI dashboard that delivers clear executive insights without visual clutter.',
        solution:
          'Structured visual hierarchy around 4 top-line KPI cards, supporting them with secondary category charts and dynamic slicers for intuitive drill-down exploration.',
      },
    ],
    learnings: [
      'Acquired comprehensive end-to-end knowledge of modern data analytics workflows from raw data to executive presentation.',
      'Sharpened advanced SQL querying skills for business intelligence metrics calculation.',
      'Learned principles of visual storytelling and dashboard UX design in Power BI to communicate findings effectively to stakeholders.',
    ],
    metricsOrInsights: [
      'Customer Demographics & Segmentation Analysis',
      'SQL-Aggregated Revenue & Purchase Frequency KPIs',
      'Interactive Power BI Visual Dashboard',
      'Actionable Data-Driven Retail Strategy',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    institution: 'Bennett University',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    location: 'Greater Noida, Uttar Pradesh, India',
    period: 'August 2023 – Present',
    grade: 'CGPA: 8.37 / 10',
    description:
      'Pursuing comprehensive coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), and Computer Networks. Recognized on the Dean’s List for academic achievement.',
  },
  {
    institution: 'Smt. Sridevi Awasiya Vidyapeeth',
    degree: 'Class XII (Senior Secondary) — CBSE',
    location: 'Agra, Uttar Pradesh, India',
    period: '2023',
    grade: '83.6%',
    description:
      'Completed senior secondary education with a rigorous curriculum in Physics, Chemistry, and Mathematics.',
  },
  {
    institution: "St. Peter's Senior Secondary School",
    degree: 'Class X (Secondary School) — CBSE',
    location: 'Bharatpur, Rajasthan, India',
    period: '2021',
    grade: '95.2%',
    description:
      'Achieved top academic distinction with 95.2% in Class X board examinations, building strong mathematical and analytical foundations.',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    title: "Dean's List Recognition",
    organization: 'Bennett University',
    year: '2023',
    description:
      'Awarded Dean’s List academic honors for exceptional academic performance and maintaining a high CGPA in Computer Science and Engineering.',
  },
];

export const certificationsData: CertificationItem[] = [
  // --- Computer Science & Algorithms ---
  {
    title: 'Algorithmic Toolbox',
    issuer: 'University of California San Diego',
    platform: 'Coursera',
    issueDate: 'January 2025',
    credentialId: '90EK1975AC41',
    verifyUrl: 'https://coursera.org/verify/90EK1975AC41',
    category: 'Algorithms & Core CS',
    skillsCovered: ['Greedy Algorithms', 'Divide and Conquer', 'Dynamic Programming', 'Sorting'],
  },
  {
    title: 'Data Structures',
    issuer: 'University of California San Diego',
    platform: 'Coursera',
    issueDate: 'August 2024',
    credentialId: 'UYICY33EHLFD',
    verifyUrl: 'https://coursera.org/verify/UYICY33EHLFD',
    category: 'Algorithms & Core CS',
    skillsCovered: ['Priority Queues', 'Disjoint Sets', 'Binary Search Trees', 'Hash Tables'],
  },
  {
    title: 'Python Data Structures',
    issuer: 'University of Michigan',
    platform: 'Coursera',
    issueDate: 'August 2024',
    credentialId: '9X4MEM3YX2VB',
    verifyUrl: 'https://coursera.org/verify/9X4MEM3YX2VB',
    category: 'Algorithms & Core CS',
    skillsCovered: ['Python Dictionaries', 'Tuples', 'Lists', 'File Processing', 'Data Parsing'],
  },
  {
    title: 'C++ Basics: Selection and Iteration',
    issuer: 'Codio',
    platform: 'Coursera',
    issueDate: 'November 2024',
    credentialId: 'YRTOTHK4MBB9',
    verifyUrl: 'https://coursera.org/verify/YRTOTHK4MBB9',
    category: 'Algorithms & Core CS',
    skillsCovered: ['C++ Control Flow', 'Conditional Logic', 'Iteration Patterns', 'Algorithmic Logic'],
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'Wingspan / Infosys',
    platform: 'Wingspan',
    issueDate: 'November 2025',
    verifyUrl: 'https://verify.onwingspan.com',
    category: 'Algorithms & Core CS',
    skillsCovered: ['Time Complexity', 'Graph Algorithms', 'Trees', 'Searching & Sorting'],
  },

  // --- Data Science, AI & Big Data ---
  {
    title: 'PySpark & AWS: Master Big Data With PySpark and AWS',
    issuer: 'Wingspan / Infosys',
    platform: 'Wingspan',
    issueDate: 'June 2026',
    verifyUrl: 'https://verify.onwingspan.com',
    category: 'Data Science & AI',
    skillsCovered: ['Apache Spark', 'PySpark', 'AWS EMR & S3', 'Distributed Data Pipelines', 'Big Data Architecture'],
  },
  {
    title: 'Statistics for Data Science with Python',
    issuer: 'IBM',
    platform: 'Coursera',
    issueDate: 'August 2024',
    credentialId: 'Y2RLHPZ3TN1V',
    verifyUrl: 'https://coursera.org/verify/Y2RLHPZ3TN1V',
    category: 'Data Science & AI',
    skillsCovered: ['Descriptive Statistics', 'Hypothesis Testing', 'Correlation Analysis', 'ANOVA', 'SciPy'],
  },
  {
    title: 'Data Visualization',
    issuer: 'University of Illinois Urbana-Champaign',
    platform: 'Coursera',
    issueDate: 'January 2025',
    credentialId: 'T24BHVTVGQJU',
    verifyUrl: 'https://coursera.org/verify/T24BHVTVGQJU',
    category: 'Data Science & AI',
    skillsCovered: ['Visual Encodings', 'Exploratory Data Analysis', 'Dashboard Design', 'Data Storytelling'],
  },
  {
    title: 'Text Mining and Analytics',
    issuer: 'University of Illinois Urbana-Champaign',
    platform: 'Coursera',
    issueDate: 'April 2025',
    credentialId: 'XKS8J2YD2F93',
    verifyUrl: 'https://coursera.org/verify/XKS8J2YD2F93',
    category: 'Data Science & AI',
    skillsCovered: ['Natural Language Processing', 'Text Categorization', 'Sentiment Analysis', 'Information Retrieval'],
  },
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    platform: 'Coursera',
    issueDate: 'November 2025',
    credentialId: 'GTPF1TKWWYKM',
    verifyUrl: 'https://coursera.org/verify/GTPF1TKWWYKM',
    category: 'Data Science & AI',
    skillsCovered: ['AI Fundamentals', 'Machine Learning Models', 'Deep Learning Concepts', 'AI Ethics'],
  },
  {
    title: 'Introduction to Neural Networks',
    issuer: 'Johns Hopkins University',
    platform: 'Coursera',
    issueDate: 'February 2026',
    credentialId: 'U5XI8GO4IQCE',
    verifyUrl: 'https://coursera.org/verify/U5XI8GO4IQCE',
    category: 'Data Science & AI',
    skillsCovered: ['Perceptrons', 'Backpropagation', 'Activation Functions', 'Network Architectures'],
  },
  {
    title: 'Advanced Neural Network Techniques',
    issuer: 'Johns Hopkins University',
    platform: 'Coursera',
    issueDate: 'February 2026',
    credentialId: 'BOPGCSTL0DJI',
    verifyUrl: 'https://coursera.org/verify/BOPGCSTL0DJI',
    category: 'Data Science & AI',
    skillsCovered: ['Convolutional Layers', 'Recurrent Models', 'Optimization Strategies', 'Hyperparameter Tuning'],
  },
  {
    title: 'Practical Methodology and Ethics in AI',
    issuer: 'Johns Hopkins University',
    platform: 'Coursera',
    issueDate: 'February 2026',
    credentialId: 'L3DRGL172S0I',
    verifyUrl: 'https://coursera.org/verify/L3DRGL172S0I',
    category: 'Data Science & AI',
    skillsCovered: ['Responsible AI', 'Bias Detection', 'Model Explainability', 'Fairness & Compliance'],
  },
  {
    title: 'Time Series Analysis using Python',
    issuer: 'Wingspan / Infosys',
    platform: 'Wingspan',
    issueDate: 'November 2025',
    verifyUrl: 'https://verify.onwingspan.com',
    category: 'Data Science & AI',
    skillsCovered: ['ARIMA Modeling', 'Stationarity Testing', 'Seasonality & Trend Analysis', 'Forecasting'],
  },
  {
    title: 'Explore Machine Learning using Python',
    issuer: 'Wingspan / Infosys',
    platform: 'Wingspan',
    issueDate: 'November 2025',
    verifyUrl: 'https://verify.onwingspan.com',
    category: 'Data Science & AI',
    skillsCovered: ['Supervised Learning', 'Model Evaluation', 'Scikit-Learn', 'Feature Engineering'],
  },

  // --- Systems, Networking & Theory ---
  {
    title: 'Operating Systems and You: Becoming a Power User',
    issuer: 'Google',
    platform: 'Coursera',
    issueDate: 'January 2025',
    credentialId: 'BHL2O1FX6T2D',
    verifyUrl: 'https://coursera.org/verify/BHL2O1FX6T2D',
    category: 'Systems & Networking',
    skillsCovered: ['OS Architecture', 'Process & Memory Management', 'File System Hierarchies', 'CLI Automation'],
  },
  {
    title: 'Fundamentals of Network Communication',
    issuer: 'University of Colorado System',
    platform: 'Coursera',
    issueDate: 'January 2025',
    credentialId: 'PTXYA9QYA7SS',
    verifyUrl: 'https://coursera.org/verify/PTXYA9QYA7SS',
    category: 'Systems & Networking',
    skillsCovered: ['OSI Model', 'TCP/IP Protocol Suite', 'Packet Routing', 'Network Topologies'],
  },
  {
    title: 'Peer-to-Peer Protocols and Local Area Networks',
    issuer: 'University of Colorado System',
    platform: 'Coursera',
    issueDate: 'January 2025',
    credentialId: '2WZVF8ERUW3K',
    verifyUrl: 'https://coursera.org/verify/2WZVF8ERUW3K',
    category: 'Systems & Networking',
    skillsCovered: ['Ethernet Standards', 'LAN Architecture', 'Switching & Bridging', 'P2P Networking'],
  },
  {
    title: 'Computational Theory: Language Principle & Finite Automata',
    issuer: 'Wingspan / Infosys',
    platform: 'Wingspan',
    issueDate: 'November 2025',
    verifyUrl: 'https://verify.onwingspan.com',
    category: 'Systems & Networking',
    skillsCovered: ['Deterministic & Non-deterministic Automata', 'Regular Expressions', 'Context-Free Grammars', 'Turing Machines'],
  },

  // --- Project Management & Business Communication ---
  {
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google',
    platform: 'Coursera',
    issueDate: 'January 2025',
    credentialId: 'RK9WFJA9E0B0',
    verifyUrl: 'https://coursera.org/verify/RK9WFJA9E0B0',
    category: 'Project & Business',
    skillsCovered: ['Project Charters', 'Stakeholder Management', 'Scope Definition', 'Goal Setting (SMART)'],
  },
  {
    title: 'Introduction to Project Management',
    issuer: 'IBM',
    platform: 'Coursera',
    issueDate: 'November 2025',
    credentialId: 'WGMGJ50W6ZPZ',
    verifyUrl: 'https://coursera.org/verify/WGMGJ50W6ZPZ',
    category: 'Project & Business',
    skillsCovered: ['Agile & Scrum', 'Risk Management', 'Work Breakdown Structure (WBS)', 'Project Lifecycle'],
  },
  {
    title: 'Beginners Guide To Business Presentations And Powerpoint',
    issuer: 'Wingspan / Infosys',
    platform: 'Wingspan',
    issueDate: 'June 2026',
    verifyUrl: 'https://verify.onwingspan.com',
    category: 'Project & Business',
    skillsCovered: ['Executive Communication', 'Slide Structuring', 'Visual Data Presentation', 'Storyboarding'],
  },
  {
    title: 'Java for Beginners: Getting Started',
    issuer: 'Coursera',
    platform: 'Coursera',
    issueDate: 'May 2024',
    credentialId: 'RVGDCW7CCX9B',
    verifyUrl: 'https://coursera.org/verify/RVGDCW7CCX9B',
    category: 'Project & Business',
    skillsCovered: ['Core Java Syntax', 'OOP Concepts', 'Methods & Classes', 'Debugging'],
  },

  // --- Mathematics & Computational Tools ---
  {
    title: 'MATLAB Fundamentals',
    issuer: 'MathWorks',
    platform: 'MathWorks Training',
    issueDate: 'November 2023',
    category: 'Mathematics & Tools',
    skillsCovered: ['Numerical Computing', 'Matrix Operations', 'Data Analysis & Plotting', 'Algorithm Prototyping'],
  },
  {
    title: 'Introduction to Symbolic Math with MATLAB',
    issuer: 'MathWorks',
    platform: 'MathWorks Training',
    issueDate: 'November 2023',
    category: 'Mathematics & Tools',
    skillsCovered: ['Symbolic Math Toolbox', 'Algebraic Equation Solvers', 'Calculus Operations', 'Mathematical Modeling'],
  },
];

export const codingProfilesData: CodingProfile[] = [
  {
    platform: 'GitHub',
    username: 'lavansh4725',
    profileUrl: 'https://github.com/lavansh4725/',
    tagline: 'Open-Source Repositories & Data Pipelines',
    description:
      'Explore my SQL data warehouse, full-stack GenAI platforms, statistical retail pipelines, and algorithmic implementations.',
  },
  {
    platform: 'LeetCode',
    username: 'lavansh_0395',
    profileUrl: 'https://leetcode.com/u/lavansh_0395/',
    tagline: 'Algorithmic Problem Solving',
    description:
      'Practicing Data Structures and Algorithms with a focus on arrays, dynamic programming, trees, graphs, and system efficiency.',
  },
  {
    platform: 'LinkedIn',
    username: 'lavansh-jindal',
    profileUrl: 'https://www.linkedin.com/in/lavansh-jindal/',
    tagline: 'Professional Network & Insights',
    description:
      'Connect with me for data analytics, data engineering, software development discussions, and technical opportunities.',
  },
];
