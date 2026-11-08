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
  roles: ['Software Developer', 'Data Analyst'],
  bio: "I'm a Computer Science Engineering undergraduate passionate about building practical software solutions, solving complex problems, and transforming data into meaningful insights.",
  location: 'Greater Noida, Uttar Pradesh, India',
  email: 'lavansh4725jindal@gmail.com',
  phone: '+91 7878685796',
  githubUrl: 'https://github.com/lavansh4725/',
  linkedinUrl: 'https://www.linkedin.com/in/lavansh-jindal/',
  leetcodeUrl: 'https://leetcode.com/u/lavansh_0395/',
  resumeUrl: '/resume.pdf',
  profileImageUrl: '/profile.jpg',
  availability: 'Open for Software Developer & Data Analyst Opportunities',
};

export const aboutContent = {
  summary: `Computer Science undergraduate at Bennett University with a strong problem-solving mindset and a focus on building practical software solutions. Experienced in taking projects from problem identification and analysis to implementation and visualization, with a keen interest in software development, algorithms, and creating solutions that are both efficient and user-focused.`,
  corePillars: [
    {
      title: 'Full-Stack Software Engineering',
      description:
        'Crafting responsive web applications with React, Vite, Node.js, and Express. Integrating GenAI workflows, type-safe API contracts with Zod, and robust JWT session security.',
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description:
        'Transforming raw transactional datasets into strategic business decisions using Python, Pandas, NumPy, MySQL, and interactive executive Power BI dashboards.',
    },
    {
      title: 'Algorithmic Problem Solving',
      description:
        'Strong computer science foundation rooted in Data Structures & Algorithms (C++ & Java), DBMS architecture, and object-oriented design principles.',
    },
  ],
  quickStats: [
    { label: 'CGPA', value: '8.37 / 10', highlight: 'Bennett University' },
    { label: 'Honor', value: "Dean's List", highlight: 'Academic Excellence (2023)' },
    { label: 'Completed Projects', value: '2 Production Case Studies', highlight: 'Full-Stack & BI Analytics' },
    { label: 'Verified Certifications', value: '5 Certifications', highlight: 'UCSD, Google, UMich' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used for systems programming, data analysis, and application logic.',
    skills: [
      { name: 'C++', iconName: 'Code2' },
      { name: 'Python', iconName: 'FileCode2' },
      { name: 'Java', iconName: 'Cpu' },
      { name: 'JavaScript', iconName: 'FileJson' },
      { name: 'SQL', iconName: 'Database' },
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
      { name: 'HTML', iconName: 'Code' },
      { name: 'CSS', iconName: 'Palette' },
    ],
  },
  {
    title: 'Data Analytics & Engineering Tools',
    description: 'Statistical libraries and BI tooling to clean, model, aggregate, and visualize data.',
    skills: [
      { name: 'Pandas', iconName: 'Table' },
      { name: 'NumPy', iconName: 'Binary' },
      { name: 'Matplotlib', iconName: 'BarChart2' },
      { name: 'Power BI', iconName: 'PieChart' },
      { name: 'Git', iconName: 'GitBranch' },
      { name: 'Puppeteer', iconName: 'FileDown' },
      { name: 'Zod', iconName: 'CheckCircle2' },
    ],
  },
  {
    title: 'Databases & Core CS Concepts',
    description: 'Foundational computer science principles, database modeling, and architecture.',
    skills: [
      { name: 'MySQL', iconName: 'Database' },
      { name: 'MongoDB', iconName: 'HardDrive' },
      { name: 'Data Structures & Algorithms', iconName: 'Binary' },
      { name: 'Object-Oriented Programming (OOP)', iconName: 'Box' },
      { name: 'Computer Networks', iconName: 'Network' },
      { name: 'DBMS', iconName: 'ServerCog' },
    ],
  },
];

export const projectsData: ProjectDetail[] = [
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
    githubUrl: 'https://github.com/lavansh4725/',
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
    githubUrl: 'https://github.com/lavansh4725/',
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
  {
    title: 'Algorithmic Toolbox',
    issuer: 'University of California San Diego',
    skillsCovered: ['Greedy Algorithms', 'Divide and Conquer', 'Dynamic Programming', 'Sorting'],
  },
  {
    title: 'Data Structures',
    issuer: 'University of California San Diego',
    skillsCovered: ['Basic Data Structures', 'Priority Queues & Disjoint Sets', 'Binary Search Trees'],
  },
  {
    title: 'Python Data Structures',
    issuer: 'University of Michigan',
    skillsCovered: ['Python Lists', 'Dictionaries', 'Tuples', 'Data Parsing'],
  },
  {
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google',
    skillsCovered: ['Project Planning', 'Stakeholder Management', 'Scope Definition', 'Project Charters'],
  },
  {
    title: 'C++ Basics: Selection and Iteration',
    issuer: 'Codio',
    skillsCovered: ['Control Flow', 'Conditional Logic', 'Iteration Patterns', 'Algorithmic Logic'],
  },
];

export const codingProfilesData: CodingProfile[] = [
  {
    platform: 'GitHub',
    username: 'lavansh4725',
    profileUrl: 'https://github.com/lavansh4725/',
    tagline: 'Open-Source Projects & Codebases',
    description:
      'Explore my full-stack web applications, GenAI implementations, data analytics pipelines, and open-source contributions.',
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
      'Connect with me for software engineering discussions, internship and job opportunities, and technical collaborations.',
  },
];
