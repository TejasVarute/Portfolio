export const personalInfo = {
  name: "Tejas Varute",
  tagline: "Full Stack Python Developer | Backend & AI Engineering",
  subtitles: [
    "Full Stack Python Developer",
    "AI & Agentic RAG Engineer",
    "FastAPI & React Developer",
    "Backend & Systems Builder"
  ],
  location: "Rendal, Kolhapur, MH, India",
  email: "tvarute@gmail.com",
  phone: "+91 72490 25371",
  linkedin: "https://linkedin.com/in/tejasvarute",
  github: "https://github.com/tejasvarute",
  googleDriveCV: "https://drive.google.com/file/d/1JolvlIf6QSooyVZr5na6BF1sEh0yvKma/view",
  localResumePdf: "./Tejas_Varute_Resume.pdf",
  profileImage: "./images/profile1.png",
  avatarAnimated: "./images/animated portfolio.webp",
  avatarIcon: "./images/animated portfolio 2.webp",
  availableForWork: true,
  summary: "Passionate Full Stack Python Developer with hands-on production experience in backend API engineering, AI/LLM integration, multi-tenant architectures, and modern web applications using FastAPI, Django, React.js, and PostgreSQL/MySQL. Proven expertise in building end-to-end data pipelines, vector search workflows (Qdrant), web scraping (Playwright, BeautifulSoup4), and responsive frontend interfaces."
};

export const heroStats = [
  { value: "1+", label: "Professional Experience", sub: "Full stack Python developer" },
  { value: "10+", label: "Systems Built", sub: "Full-stack SaaS, AI, and desktop platforms" },
  { value: "1", label: "Published Paper", sub: "Peer-reviewed research paper in IJEAST" },
  { value: "8.4", label: "B.Tech CGPA", sub: "Sharad Institute • Top 15% class rank" },
];

export const experiences = [
  {
    role: "Full Stack Python Developer",
    company: "Walstar Technologies Pvt. Ltd.",
    location: "Kolhapur (On-site)",
    period: "Sep 2025 – Present",
    type: "Full-time",
    isCurrent: true,
    description: "Developing scalable backend APIs, AI/RAG integration pipelines, multi-tenant SaaS features, and automated web scraping workflows.",
    highlights: [
      "Key developer on Talk2Site, an AI/RAG SaaS product built at Walstar Technologies, developing the backend ingestion pipeline, embedding generation, and Qdrant vector search.",
      "Designed and built two in-house multi-tenant, white-label SaaS platforms (a hospital management system and a school aptitude-exam platform) featuring superadmin tenant provisioning, isolated per-tenant databases, and custom-domain deployment.",
      "Delivered 8+ live international client projects involving AI integration for data validation, tree-search workflows, and web-scraping-to-database pipelines.",
      "Engineered automated scraping pipelines using BeautifulSoup4 and Playwright, plus notification workflows integrating Gmail, Google Calendar, and Slack APIs.",
      "Implemented n8n automation workflows for marketing, including dynamic email campaigns and webhook automations."
    ],
    skills: ["FastAPI", "React.js", "Qdrant", "PostgreSQL", "Playwright", "LLM / RAG", "n8n", "Multi-Tenant"]
  },
  {
    role: "Python Full-Stack Developer Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    location: "Pune (On-site)",
    period: "Dec 2024 – Jun 2025",
    type: "Internship",
    isCurrent: false,
    description: "Contributed to full-stack web applications following Django's MVT architecture principles and Git-based collaborative workflows.",
    highlights: [
      "Built and maintained a full-stack web application (Django, HTML/CSS/JS, SQLite) covering user authentication, order management, and administrative dashboards over a 6-month internship.",
      "Adhered strictly to MVT design patterns and Git version control workflows across the entire development lifecycle.",
      "Collaborated with senior engineers to optimize database queries and implement responsive frontend user interfaces."
    ],
    skills: ["Django", "Python", "SQLite", "HTML5", "CSS3", "JavaScript", "MVT Architecture"]
  }
];

export const projects = [
  {
    id: "talk2site",
    title: "Agentic RAG System",
    subtitle: "Multi-Tenant Conversational AI & Retrieval Engine",
    category: "AI & RAG",
    categories: ["Featured", "AI & RAG", "Web Applications"],
    badge: "Featured",
    statusBadge: "Live Production SaaS",
    featured: true,
    image: "./images/rag_project_img.png",
    overview: "A multi-tenant Agentic RAG platform transforming website assets into smart chatbots deployable via a lightweight CDN widget. Leverages Qdrant vector databases, text scraping/chunking pipelines, and LLM automation.",
    technologies: ["React.js", "FastAPI", "MySQL", "Qdrant DB"],
    bulletPoints: [
      "Engineered the core pipeline: website scraping, content chunking, embedding generation, and Qdrant vector search.",
      "Implemented dual-stage AI query refinement prior to vector retrieval and contextual response synthesis.",
      "Built customizable chatbot configuration, analytics dashboards, and knowledge-base administration modules.",
      "Developed a lightweight embeddable CDN script widget for customer website integration."
    ],
    architectureHighlights: "Admin Portal → Web Scraper (Playwright/BS4) → Text Chunking → Embedding API → Qdrant Vector Collection → Context Synthesis → Frontend Embed Widget",
    links: {
      github: null,
      live: null,
    }
  },
    {
    id: "hospital-saas",
    title: "Multi-Tenant Hospital Management SaaS",
    subtitle: "Isolated Per-Tenant Database Architecture",
    category: "Full-Stack SaaS",
    categories: ["Featured", "Full-Stack SaaS"],
    badge: "Enterprise SaaS",
    statusBadge: "Client Platform",
    featured: true,
    image: "./images/hospital_saas_preview.jpg",
    overview: "Multi-tenant, white-label healthcare platform with superadmin tenant provisioning, isolated databases per hospital, and custom-domain frontend deployments.",
    technologies: ["FastAPI", "React.js", "PostgreSQL", "Docker", "RBAC"],
    bulletPoints: [
      "Master PostgreSQL database stores tenant metadata while a dynamically provisioned, isolated database serves each hospital on a shared backend.",
      "Environment-driven frontend configuration: hospital ID, theme colors, and backend connection settings dynamically compiled per hospital domain.",
      "Dynamic hospital tiers (from solo clinic to large hospital) with configurable OPD/IPD workflows and clinical modules.",
      "Patient self-registration, reception-based registration, and granular role-based access control (RBAC)."
    ],
    architectureHighlights: "Superadmin Dashboard → Dynamic Tenant Provisioner → Automated PostgreSQL Database Creation → Tenant Connection Router → White-label Theme Injector → Isolated Custom Domain Frontend",
    links: {
      github: null,
      live: null
    }
  },
  {
    id: "school-exam-platform",
    title: "School Aptitude Exam Platform",
    subtitle: "AI-Driven OCR-to-MCQ Generation & Multi-Tenant Exams",
    category: "AI & RAG",
    categories: ["Featured", "AI & RAG", "Full-Stack SaaS"],
    badge: "AI & EdTech",
    statusBadge: "Client Platform",
    featured: true,
    image: "./images/school_exam_preview.jpg",
    overview: "Multi-tenant exam platform with automated OCR pipeline and AI question-generation engine converting PDFs and images into graded MCQ exams with parent monitoring.",
    technologies: ["FastAPI", "React.js", "OpenCV / OCR", "LLM APIs", "PostgreSQL"],
    bulletPoints: [
      "Built on the superadmin-provisioning, per-tenant-database, white-label-domain architecture applied to schools, classes, and subjects.",
      "Engineered OCR pipeline extracting chapter content from teacher-uploaded PDFs/images into structured database entities.",
      "AI question-generation engine producing configurable-difficulty MCQ sets (easy/medium/hard mix) with instant teacher review & adjustments.",
      "RBAC across admin, teacher, student, and parent roles, including a multi-child monitoring dashboard for parents."
    ],
    architectureHighlights: "Teacher PDF/Image Upload → High-Accuracy OCR Pipeline → Text Cleanup & Chunking → LLM Prompt Template (Difficulty-ranked MCQ synthesis) → Teacher Review Stage → Student Exam Dispatch & Grading",
    links: {
      github: null,
      live: null
    }
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    subtitle: "Role-Based Food Ordering & Admin Analytics",
    category: "Full-Stack SaaS",
    categories: ["Featured", "Full-Stack SaaS", "Web Applications"],
    badge: "Featured",
    statusBadge: "Completed Project",
    featured: true,
    image: "./images/restaurant project img.webp",
    overview: "Role-based food ordering and admin analytics dashboard. Designed complete interfaces for carts, order placements, visual order tracking, and inventory updates using MVT pattern.",
    technologies: ["Django", "HTML5/CSS3", "JS", "SQLite"],
    bulletPoints: [
      "Role-based authentication dividing customer ordering flows from kitchen and administrator dashboards.",
      "Complete cart management, visual order status tracking, and inventory count updates.",
      "Implemented using Django MVT architecture with secure relational database modeling."
    ],
    architectureHighlights: "Client Storefront → Cart State Engine → Order Processing Pipeline → Kitchen Display View → Admin Revenue & Inventory Reporting",
    links: {
      github: "https://github.com/TejasVarute/Ecommerce_Restaurant_Project",
      live: null
    }
  },
  {
    id: "smart-attendance",
    title: "Beyond the Rollcall: Smart Attendance",
    subtitle: "Desktop Attendance System with Biometrics & OCR",
    category: "Python & CV",
    categories: ["Featured", "Python & CV"],
    badge: "Academic Final",
    statusBadge: "Published Paper",
    featured: true,
    image: "./images/beyond rollcall project img.webp",
    overview: "Desktop attendance system utilizing face detection and OCR algorithms to scan student identity cards. Implemented reporting modules and interactive Customtkinter control panels.",
    technologies: ["Python", "OpenCV", "EasyOCR", "Customtkinter"],
    bulletPoints: [
      "Designed facial detection and recognition algorithms using OpenCV for contact-free student presence verification.",
      "Integrated OCR pipeline extracting student roll numbers and details directly from physical ID cards.",
      "Published research paper in the International Journal of Engineering Applied Sciences and Technology (IJEAST, Vol. 09, Issue 04, Sep 2024).",
      "Interactive modern GUI built using CustomTkinter with detailed attendance export modules."
    ],
    architectureHighlights: "Video Stream Ingestion → Face Detection (Haar/DNN) → Face Encoding Match → ID Card OCR Extraction → SQLite Attendance Register → CSV/Excel Export & Reporting",
    links: {
      github: "https://github.com/TejasVarute/Automated-Attendance-System-using-Face-Detection-and-OCR",
      paper: "https://www.researchgate.net/publication/384288004_BEYOND_THE_ROLLCALL_SMART_STRATEGIES_FOR_ATTENDANCE"
    }
  },
  {
    id: "apple-clone",
    title: "Apple India Clone",
    subtitle: "Pixel-Perfect Responsive Frontend Recreation",
    category: "Web Applications",
    categories: ["Web Applications"],
    badge: null,
    statusBadge: "Live Deployed",
    featured: false,
    image: "./images/apple india project img.webp",
    overview: "Pixel-perfect replica of Apple India landing site demonstrating responsive transitions, grid cards, sliders, and static CSS assets.",
    technologies: ["HTML", "CSS", "JavaScript"],
    bulletPoints: [
      "Recreated Apple's iconic minimalist typography, fluid animations, and responsive navigation.",
      "Custom responsive grid layouts adapting seamlessly from mobile screens to ultra-wide displays.",
      "Pure vanilla JavaScript for lightweight, silky-smooth interactions."
    ],
    architectureHighlights: "Responsive Breakpoint System → Pure CSS Transitions → Vanilla JS Navigation Drawer & Interactive Sliders",
    links: {
      github: "https://github.com/TejasVarute/Apple_clone",
      live: "https://tejasvarute.github.io/Apple_clone/"
    }
  },
  {
    id: "remind-me-later",
    title: "Remind Me Later",
    subtitle: "Task Manager with Scheduled Background Alerts",
    category: "Full-Stack SaaS",
    categories: ["Full-Stack SaaS", "Web Applications"],
    badge: null,
    statusBadge: "Demo Video",
    featured: false,
    image: "./images/remind me later project img.webp",
    overview: "Task manager with scheduled task alerts. Supports creation of customized to-do list tasks and automatic background notification dispatchers.",
    technologies: ["Django", "Bootstrap", "JavaScript"],
    bulletPoints: [
      "Interactive task planner with prioritized scheduling and deadline calendar.",
      "Automated notification triggers sending scheduled reminders.",
      "Responsive user interface styled with modern Bootstrap components."
    ],
    architectureHighlights: "Task Scheduler Model → Dispatcher Trigger Engine → User Notification Handler",
    links: {
      github: "https://github.com/TejasVarute/Remind-Me-Later",
      youtube: "https://youtu.be/NvcstRUOmh0"
    }
  },
  {
    id: "bank-locker",
    title: "Bank Locker Management",
    subtitle: "Biometric Face Recognition Vault Access System",
    category: "Python & CV",
    categories: ["Python & CV"],
    badge: null,
    statusBadge: "Demo Video",
    featured: false,
    image: "./images/locker system project img.webp",
    overview: "Secure desk app utilizing face recognition verification, logging user login activities, data synchronization, and automated vault alerts.",
    technologies: ["Python", "OpenCV", "Face Recognition", "SQLite"],
    bulletPoints: [
      "Facial biometric authentication verifying customer identity before unlocking locker records.",
      "Detailed access log tracking timestamps and photograph snapshots for security audits.",
      "Visual security dashboard built in Python."
    ],
    architectureHighlights: "Camera Feed → Face Encoding Verification → Permission Check → Security Vault Audit Log",
    links: {
      github: null,
      youtube: "https://youtu.be/HpezaF5Lxm8"
    }
  },
  {
    id: "elective-allocator",
    title: "Elective Subject Allocation",
    subtitle: "Merit-Based Algorithmic Allocation Engine",
    category: "Python & CV",
    categories: ["Python & CV"],
    badge: null,
    statusBadge: "Open Source",
    featured: false,
    image: "./images/elective allocation project img.webp",
    overview: "Algorithmic allocating engine handling college student elective choices sorted based on merit list, score ranks, and college guidelines.",
    technologies: ["Python", "Pandas", "NumPy"],
    bulletPoints: [
      "Multi-stage sorting algorithm handling complex preference matching across hundreds of students.",
      "Automated discrepancy detection and quota optimization.",
      "Exporting comprehensive allocation reports to Excel and CSV formats."
    ],
    architectureHighlights: "Student Choice Matrix → Merit Score Sorting → Quota Saturation Checker → Allocation Output Engine",
    links: {
      github: "https://github.com/TejasVarute/Open-elective-allocator",
      live: null
    }
  },
  {
    id: "computer-sales",
    title: "Computer Sales E-Shop",
    subtitle: "Interactive Hardware & Accessories Catalog Client",
    category: "Web Applications",
    categories: ["Web Applications"],
    badge: null,
    statusBadge: "Live Deployed",
    featured: false,
    image: "./images/computer sales project img.webp",
    overview: "Frontend client application presenting interactive product showcases, dynamic catalogs, cart status handling, and order summary templates.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    bulletPoints: [
      "Dynamic hardware product showcases with interactive category filtering and specification comparisons.",
      "Cart state management, checkout simulation, and client-side order summaries.",
      "Responsive grid layouts optimized for all device resolutions."
    ],
    architectureHighlights: "Client Catalog Grid → Filter & Search Dispatcher → Local Storage Cart Engine → Order Summary Checkout Modal",
    links: {
      github: "https://github.com/TejasVarute/Computer_Sales_Website",
      live: "https://tejasvarute.github.io/Computer_Sales_Website/"
    }
  },
  {
    id: "resume-builder",
    title: "Resume Builder Website",
    subtitle: "ATS-Friendly PDF Resume Generation Dashboard",
    category: "Python & CV",
    categories: ["Python & CV", "Web Applications"],
    badge: null,
    statusBadge: "Live App",
    featured: false,
    image: "./images/ats resume project img.webp",
    overview: "Sleek dashboard parsing information to output standard ATS-friendly PDF resumes. Implemented template selection and instant data rendering.",
    technologies: ["Python", "Streamlit", "JSON"],
    bulletPoints: [
      "Dynamic resume template engine formatting candidate profiles into standard recruiter-parsed structures.",
      "Real-time client-side preview rendering updates as users edit their work history and skill tags.",
      "High-resolution PDF generation with ATS keyword optimization guidelines."
    ],
    architectureHighlights: "Streamlit UI Ingestion → Profile Schema Validator → PDF Rendering Engine → Instant Download Stream",
    links: {
      github: "https://github.com/TejasVarute/Resume-Builder",
      live: "https://buildresume.streamlit.app/"
    }
  }
];

export const skillCategories = [
  {
    title: "Backend Frameworks & APIs",
    icon: "Server",
    color: "from-blue-600 to-indigo-600",
    skills: [
      { name: "FastAPI", level: "Expert", desc: "High-performance async APIs, Pydantic validation, dependency injection" },
      { name: "Django & DRF", level: "Advanced", desc: "MVT pattern, Django REST Framework, ORM, authentication" },
      { name: "Flask", level: "Intermediate", desc: "Microservices and lightweight REST endpoints" },
      { name: "SQLAlchemy & ORM", level: "Advanced", desc: "Complex relational queries, connection pooling, migrations" },
      { name: "REST API Design", level: "Advanced", desc: "Idempotent endpoints, webhook architectures, rate limiting" },
      { name: "Third-Party Integrations", level: "Advanced", desc: "Gmail, Google Calendar, Slack APIs, Razorpay, PayPal, Stripe" }
    ]
  },
  {
    title: "AI, LLM & Agentic RAG",
    icon: "Brain",
    color: "from-violet-600 to-purple-600",
    skills: [
      { name: "Agentic RAG Pipelines", level: "Advanced", desc: "Autonomous document ingestion, chunking, retrieval & synthesis" },
      { name: "Qdrant Vector DB", level: "Advanced", desc: "Vector indexing, payload filtering, cosine similarity search" },
      { name: "LLM Orchestration", level: "Advanced", desc: "Query refinement, context pruning, prompt engineering" },
      { name: "OCR & Document AI", level: "Advanced", desc: "PDF/image text extraction to automated question generation" },
      { name: "Embeddings Models", level: "Advanced", desc: "Dense text embeddings, similarity thresholding, semantic search" }
    ]
  },
  {
    title: "System Architecture & SaaS",
    icon: "Layers",
    color: "from-emerald-600 to-teal-600",
    skills: [
      { name: "Multi-Tenant SaaS Design", level: "Advanced", desc: "Superadmin provisioning, per-tenant isolated databases" },
      { name: "White-Label Systems", level: "Advanced", desc: "Environment-driven custom domain frontend compilation" },
      { name: "Role-Based Access (RBAC)", level: "Advanced", desc: "Granular multi-tier permissions across admin/user roles" },
      { name: "Data Synchronization", level: "Advanced", desc: "Background sync workers, event-driven webhooks" }
    ]
  },
  {
    title: "Web Scraping & Automation",
    icon: "Bot",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "Playwright & Scrapling", level: "Advanced", desc: "Headless browser automation, dynamic JavaScript rendering" },
      { name: "BeautifulSoup4", level: "Advanced", desc: "High-speed HTML parsing, data extraction & sanitization" },
      { name: "n8n Workflow Automation", level: "Intermediate", desc: "AI-generated email sequences, webhook triggers" },
      { name: "Pandas & NumPy", level: "Advanced", desc: "Data manipulation, matrix computations, reporting" },
      { name: "OpenCV", level: "Intermediate", desc: "Facial detection, image preprocessing, biometric systems" }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: "Layout",
    color: "from-cyan-600 to-blue-600",
    skills: [
      { name: "React.js + Vite", level: "Advanced", desc: "Modern functional components, hooks, optimized bundling" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, closures, modern array pipelines, DOM APIs" },
      { name: "Tailwind CSS & CSS3", level: "Advanced", desc: "Responsive layouts, glassmorphism, fluid animations" },
      { name: "HTML5 Semantic Web", level: "Expert", desc: "Accessible markup, SEO optimization, responsive viewport" }
    ]
  },
  {
    title: "Databases, Cloud & Tools",
    icon: "Database",
    color: "from-rose-500 to-pink-600",
    skills: [
      { name: "PostgreSQL & MySQL", level: "Advanced", desc: "Relational modeling, indexing, ACID transactions" },
      { name: "SQLite", level: "Advanced", desc: "Embedded database storage for desktop & prototyping" },
      { name: "Git & GitHub Actions", level: "Advanced", desc: "CI/CD deployment pipelines, branch workflows" },
      { name: "Developer Tooling", level: "Advanced", desc: "VS Code, Cursor, Codex, Antigravity, Postman, uv, bun" }
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Computer Engineering",
    institution: "Sharad Institute of Technology, College of Engineering",
    location: "Ichalkaranji (Yadrav)",
    year: "Class of 2025",
    score: "CGPA: 8.4 / 10",
    badge: "Top 15% of Graduating Class",
    icon: "GraduationCap"
  },
  {
    degree: "Higher Secondary Certificate (HSC - Science)",
    field: "Science Stream",
    institution: "Parisanna Ingrole Jr. College, Hupari",
    location: "Rayat Education Society",
    year: "Year: 2021",
    score: "Percentage: 75.17%",
    badge: "First Class with Distinction",
    icon: "Award"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "General Secondary Education",
    institution: "Janata High School",
    location: "Hupari",
    year: "Year: 2019",
    score: "Percentage: 79.40%",
    badge: "Distinction",
    icon: "Award"
  }
];

export const publications = [
  {
    title: "Beyond the Rollcall: Smart Strategies for Attendance",
    journal: "International Journal of Engineering Applied Sciences and Technology (IJEAST)",
    issue: "Vol. 09, Issue 04 • Sep 2024",
    doi: "10.33564/IJEAST.2024.v09i04.011",
    doiUrl: "https://doi.org/10.33564/IJEAST.2024.v09i04.011",
    researchGateUrl: "https://www.researchgate.net/publication/384288004_BEYOND_THE_ROLLCALL_SMART_STRATEGIES_FOR_ATTENDANCE",
    summary: "Academic publication presenting an automated attendance tracking framework integrating computer vision (OpenCV) facial detection with Optical Character Recognition (OCR) for fast, contact-free roll number extraction from student identity cards."
  }
];

export const certifications = [
  {
    title: "Python and Django Framework",
    issuer: "Udemy",
    date: "Issued Jul 2025",
    credentialUrl: "https://www.udemy.com/certificate/UC-102e0aa5-0cc4-4560-be0e-a30c482892b6/",
    id: "UC-102e0aa5-0cc4-4560-be0e-a30c482892b6"
  },
  {
    title: "Python Programming",
    issuer: "GUVI",
    date: "Issued Aug 2023",
    credentialUrl: "https://www.guvi.in/certificate?id=yv11U6180W89mi3622",
    id: "yv11U6180W89mi3622"
  }
];
