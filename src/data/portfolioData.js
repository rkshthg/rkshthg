export const personalInfo = {
  name: "Rakshith G",
  title: "Data Engineer & AI Solutions Specialist",
  tagline: "Database Administrator | PySpark & Databricks Lakehouse | Multi-Agent GenAI",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 8867438235",
  email: "grkshthg@gmail.com",
  linkedin: "https://www.linkedin.com/in/rakshith-g-553507214",
  github: "https://github.com/rkshthg",
  availability: "Available for Data Engineering & AI Opportunities",
  specializationBadge: "Executive PG Diploma in Data Science & AI (IIIT-B)",
  bio: "Data Engineer with expertise in designing and maintaining large-scale data systems and robust ETL pipelines. Proficient in Python, advanced SQL, and Big Data technologies including PySpark and Delta Lake on AWS cloud infrastructure. Experienced in collaborating with teams to implement data models and optimize data workflows. Highly adaptable with a strong foundation in GenAI and Agentic AI."
};

export const aboutPillars = [
  {
    icon: "Database",
    title: "Database Administrator",
    description: "Managed high-availability DB2 & Oracle databases at Kyndryl, executing RMAN automated backups, partitioned rebalancing, and REORGs for 99.9% uptime, with a 100% resolution rate for over 12,000 tickets."
  },
  {
    icon: "Workflow",
    title: "Data Engineering",
    description: "Conceptualized and engineered end-to-end data pipelines, from ingesting raw data, to cleaning, deduplicating and enriching, to loading and modelling using Medallion Architecture. Configured Delta Lake for ACID transaction consistency for downstream analytics."
  },
  {
    icon: "Bot",
    title: "GenAI & Agentic AI",
    description: "Architected AI-native solutions using Google Agent Development Kit (ADK 2.0), Vertex AI Reasoning Engine, and Model Context Protocol (MCP) to enable autonomous LLM reasoning over structured enterprise data."
  }
];

export const workExperience = [
  {
    company: "Kyndryl",
    role: "Database Administrator",
    location: "Bengaluru, Karnataka",
    period: "Sep 2023 – Present",
    type: "Full-Time",
    highlights: [
      "Engineered and maintained high-availability DB2 and Oracle database clusters (12TB+) for enterprise environments, automating backup/recovery policies using RMAN and resolving 12,000+ technical incidents.",
      "Orchestrated performance tuning and capacity planning for production databases, executing partitioned rebalancing and REORGs that reduced query latency significantly.",
      "Automated daily batch cycles and database health checks (RUNSTATS, image copy jobs) using Shell Scripts, ensuring strict SLA compliance and 99.9% uptime."
    ],
    skills: ["Oracle DB", "IBM DB2", "Shell Scripting", "RMAN", "Performance Tuning", "Capacity Planning", "SQL"]
  },
  {
    company: "Kyndryl",
    role: "Change Manager",
    location: "Bengaluru, Karnataka",
    period: "Apr 2022 – Sep 2023",
    type: "Full-Time",
    highlights: [
      "Employed Data Analytics principles to generate monthly Service Management reports by creating ServiceNow reports, decreasing manual data extraction time by 30%.",
      "Partnered closely with internal product, engineering, and business teams within an Agile environment to align technical updates with core business objectives.",
      "Developed communication frameworks and strategies that improved tool adoption rates by 30% and conducted enablement trainings for end users."
    ],
    skills: ["Data Analytics", "ServiceNow", "Agile Methodologies", "Stakeholder Enablement", "Reporting Automation"]
  }
];

export const projects = [
  {
    id: "helios-grid",
    title: "HeliosGrid-Data-Pipeline",
    tabs: ["Featured", "Data Engineering"],
    featured: true,
    github: "https://github.com/rkshthg/HeliosGrid-Data-Pipeline",
    stack: ["Python", "PySpark", "Databricks", "Delta Lake", "AWS S3", "AWS Lambda", "Unity Catalog", "SQL"],
    summary: "Cloud-native Databricks Medallion Lakehouse platform (Bronze, Silver, Gold) governed by Unity Catalog to ingest and analyze high-frequency solar telemetry across Indian microclimates.",
    highlights: [
      "Engineered a Databricks Medallion Lakehouse platform with Unity Catalog to ingest solar telemetry.",
      "Automated Bronze ingestion via Databricks Auto Loader and built PySpark transformations for thermal derating.",
      "Modeled Gold Kimball Star Schemas using Delta Lake MERGE upserts and Z-Ordering query optimization."
    ]
  },
  {
    id: "aws-ipl",
    title: "AWS-IPL-Data-Pipeline",
    tabs: ["Featured", "Data Engineering"],
    featured: true,
    github: "https://github.com/rkshthg/AWS-IPL-Data-Pipeline",
    stack: ["Python", "AWS S3", "AWS Lambda", "AWS Glue", "AWS Athena", "Delta Lake", "Selenium", "RapidFuzz"],
    summary: "End-to-end serverless data ingestion pipeline scraping Cricbuzz match data into AWS S3, utilizing AWS Lambda, Glue, and Athena for Medallion analytics.",
    highlights: [
      "Scraped live Cricbuzz match data into AWS S3 using automated Python web scrapers.",
      "Built Medallion ETL pipelines using AWS Lambda and Glue for data cleaning.",
      "Configured Delta Lake ACID tables and enabled interactive SQL queries in AWS Athena."
    ]
  },
  {
    id: "hearth-ai",
    title: "Hearth-Emotional-Wellness-App",
    tabs: ["Featured", "Generative and Agentic AI"],
    featured: true,
    github: "https://github.com/rkshthg/VC-AGY-Hearth",
    stack: ["React", "TypeScript", "FastAPI", "SQLite", "Google ADK 2.0", "Vertex AI", "MCP"],
    summary: "AI-native full-stack application featuring multi-agent orchestration via Google ADK 2.0, Vertex AI, and Model Context Protocol (MCP) endpoints for autonomous SQLite querying.",
    highlights: [
      "Architected an AI-native full-stack application using React, TypeScript, FastAPI, and SQLite backend services.",
      "Engineered a multi-agent orchestration pipeline using Google ADK 2.0 and Vertex AI for LLM reasoning.",
      "Integrated Model Context Protocol endpoints allowing autonomous AI agents to query database records securely."
    ]
  },
  {
    id: "california-traffic",
    title: "California-Traffic-EDA-ETL-Project",
    tabs: ["Data Engineering"],
    featured: false,
    github: "https://github.com/rkshthg/California-Traffic-EDA-ETL-Project",
    stack: ["Python", "PySpark", "Jupyter Notebook", "AWS S3"],
    summary: "Scalable PySpark ETL pipeline processing massive California Statewide Integrated Traffic Records System collision data stored on AWS S3 to uncover safety insights.",
    highlights: [
      "Developed a scalable PySpark ETL pipeline on AWS S3 to clean traffic collision data.",
      "Analyzed SWITRS records to identify high-risk intersections, crash trends, and accident severity.",
      "Delivered data-driven safety insights on driver sobriety and road conditions to city planners."
    ]
  },
  {
    id: "dont-bet-on-it",
    title: "DontBetOnIt-Betting-App",
    tabs: ["Generative and Agentic AI"],
    featured: false,
    github: "https://github.com/rkshthg/VC-AGY-DontBetOnIt",
    stack: ["JavaScript", "Express", "CSS", "HTML", "Redis", "Vercel"],
    summary: "Full-stack team betting dashboard implementing a parimutuel payout reward distribution algorithm with serverless Redis state management and glassmorphic UI.",
    highlights: [
      "Built a team betting web dashboard implementing a parimutuel payout reward distribution algorithm.",
      "Integrated a serverless Redis database for user balance tracking and persistent global state.",
      "Designed a responsive glassmorphic UI interface and deployed serverless functions on Vercel."
    ]
  },
  {
    id: "bird-strike",
    title: "Bird-Strike-Analysis",
    tabs: ["Data Science & Analytics"],
    featured: false,
    github: "https://github.com/rkshthg/Bird-Strike-Analysis",
    stack: ["Data Analytics", "Power BI", "Excel", "Tableau"],
    summary: "Exploratory data analysis on FAA wildlife strike reports with interactive Power BI and Tableau dashboards to evaluate aviation collision risks and seasonal patterns.",
    highlights: [
      "Conducted exploratory data analysis on FAA wildlife strike reports to identify aviation safety patterns.",
      "Identified key trends across seasonal bird behaviors, flight phases, and regional collision risks.",
      "Built interactive Power BI and Tableau dashboards to communicate risk mitigation strategies to airlines."
    ]
  },
  {
    id: "nyc-taxi",
    title: "NYC-Taxi-EDA-Project",
    tabs: ["Data Science & Analytics"],
    featured: false,
    github: "https://github.com/rkshthg/NYC-Taxi-EDA-Project",
    stack: ["Python", "Pandas", "NumPy", "Jupyter Notebook", "Matplotlib", "Seaborn"],
    summary: "Exploratory data analysis on 2023 NYC Yellow Taxi trip parquet records using stratified sampling to analyze passenger tipping behaviors and fleet congestion.",
    highlights: [
      "Performed exploratory data analysis on 2023 NYC Yellow Taxi trip records to identify high-demand zones.",
      "Applied stratified sampling on 300,000 parquet records to construct representative analytical datasets.",
      "Analyzed passenger tipping behaviors, peak revenue hours, and traffic congestion patterns for fleet optimization."
    ]
  },
  {
    id: "quantium-simulation",
    title: "Quantium_JobSimulation",
    tabs: ["Data Science & Analytics"],
    featured: false,
    github: "https://github.com/rkshthg/Quantium_JobSimulation",
    stack: ["Python", "Jupyter Notebook", "Pandas", "Data Analysis"],
    summary: "Supermarket transaction and customer purchasing behavior analytics, evaluating chip sales performance and conducting trial store layout comparisons.",
    highlights: [
      "Analyzed supermarket transaction databases to identify chip sales performance trends across customer segments.",
      "Conducted trial store analysis comparing test store layouts with control stores using statistical metrics.",
      "Delivered data-driven recommendations regarding product placement and customer targeting strategies based on retail findings."
    ]
  }
];

export const skillCategories = [
  {
    category: "Programming and Databases",
    skills: ["Python", "SQL", "Shell Scripting", "Oracle", "IBM DB2", "MS SQL"]
  },
  {
    category: "Data Engineering",
    skills: ["PySpark", "Delta Lake", "AWS Glue", "AWS Athena", "ETL Pipeline Development", "Data Warehousing", "Databricks"]
  },
  {
    category: "Cloud and Infrastructure",
    skills: ["AWS (S3, Lambda)", "Terraform", "Docker", "Unix/Linux"]
  },
  {
    category: "Data Analytics and AI",
    skills: ["Power BI", "Tableau", "Advanced Excel", "LLMs (Gemini)", "Agentic Workflows", "Prompt Engineering"]
  },
  {
    category: "Tools and Methodologies",
    skills: ["Git", "Selenium", "Jupyter Notebook", "ITIL", "Agile"]
  }
];

export const education = [
  {
    institution: "International Institute of Information Technology - Bangalore (IIIT-B)",
    degree: "Executive PG Diploma in Data Science and AI",
    specialization: "Data Engineering Specialization",
    location: "Bengaluru, Karnataka",
    period: "Expected Sep 2026",
    status: "In Progress"
  },
  {
    institution: "CMR Institute of Technology",
    degree: "Bachelor of Engineering (BE)",
    specialization: "Information Science and Engineering",
    location: "Bengaluru, Karnataka",
    period: "May 2020",
    status: "Completed"
  }
];

export const certifications = [
  {
    title: "5-Day AI Agents: Intensive Vibe Coding Course With Google",
    issuer: "Kaggle",
    badge: "AI Agents"
  },
  {
    title: "Generative AI Foundations",
    issuer: "upGrad",
    badge: "GenAI"
  },
  {
    title: "Power BI Data Analyst Associate",
    issuer: "Microsoft",
    badge: "Analytics"
  },
  {
    title: "JLPT N5 Level Certification",
    issuer: "Japanese Language Proficiency Test",
    badge: "Language"
  }
];
