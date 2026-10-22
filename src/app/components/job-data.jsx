export const jobExperience = [
  {
    id: 5,
    title: "Software Engineer (Associate)",
    company: "Goldman Sachs, Salt Lake City, UT",
    initials: "GS",
    date: "September 2025 - Present",
    description: [
      "Extended distributed data pipelines for institutional financial reporting across ingestion, enrichment, warehousing, and archival; designed new processing stages and event-driven integrations, and migrated data models to Snowflake.",
      "Built MCP servers for a data-lineage tool that traces data flow across multi-layer enrichment services, plus agent skills for Jira, Confluence, and runbook-guided on-call debugging to speed PagerDuty escalations.",
      "Cut average processing time 71% and worst-case time 86% in performance-critical Java batch components despite 54% higher data volume by replacing nested scans with hash-based indexing.",
      "Engineered Python transformation and reconciliation workflows with aggregation, enrichment, consistency checks, and fault-tolerant fallbacks, reducing reconciliation discrepancies by about 50% and manual adjustments by about 94%.",
      "Resolved distributed data-consistency failures across asynchronous replication, archival, and downstream dependencies; improved batch reliability with idempotent reprocessing, failure isolation, and targeted recovery.",
      "Built regression and data-quality tooling with Python, Flask, React, and TypeScript for field-level comparisons across environments, validating 540 reports before release.",
      "Led SRE coverage during holiday peak-load windows, resolved 67 production incidents across approximately 25 institutional client portfolios, and automated monitoring for 346 scheduled jobs across 23 processes.",
    ],
  },
  {
    id: 4,
    title: "Software Engineer, ML Infrastructure",
    company: "Virufy (nonprofit AI health startup), Sunnyvale, CA",
    image: "/virufy_logo.jpeg",
    date: "February 2025 - September 2025",
    description: [
      "Engineered scalable serverless ML pipeline on AWS (Lambda, Glue, S3), preprocessing 10k+ audio samples for feature extraction.",
      "Designed a DynamoDB feature store with sub-1 ms retrieval for model training and inference.",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company:
      "Institute of Cognitive Science at the University of Colorado, Boulder, US ",
    image: "/cuboulder.jpeg",
    date: "October 2022 - December 2022",
    description: [
      "Automated the CI/CD pipeline for a web application, optimizing deployment processes by 40% through integration with GitHub Actions and hosting on AWS Amplify.",
      "Configured interactive dashboard visualization charts, enhancing the clarity and interpretability of predictions from a multimodal deep learning model by 30% after processing audio conversations.",
    ],
  },
  {
    id: 1,
    title: "Software Engineer, RailConnect Contract Management",
    company: "GE Transportation, a Wabtec Company, Bangalore, India",
    image: "/GE.png",
    date: "July 2019 - July 2022",
    description: [
      "Won 2021 Q1 Pursuing Excellence Award for leading end-to-end development of contract lifecycle management features in RailConnect platform, enabling first-to-market capabilities for Fortune 500 railroad companies.",
      "Architected a proof-of-concept modernization of legacy monolith into 5 domain-driven microservices using Spring Boot and PostgreSQL, demonstrating 30% performance improvement and securing approval for platform-wide implementation.",
      "Optimized Elasticsearch query performance by implementing custom analyzers and reducing wildcard searches, achieving sub-second contract lookups and 40% faster aggregation across 1000+ daily transactions.",
      "Developed 20+ RESTful APIs using Spring MVC and JPA repositories for contract lifecycle management, integrating with third-party approval systems through custom endpoints and handled asynchronous status updates.",
      "Led a team of four to build a Random Forest pricing model with 78% accuracy, saving $300,000 annually and winning a company-wide hackathon among 100+ teams.",
    ],
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "GE Transportation, Bengaluru, India",
    image: "/GE.png",
    date: "February 2019 - July 2019",
    description: [
      "Automated customer onboarding process through PL/SQL scripts, achieving 90-second setup time and 70% faster support resolution.",
      "Built 5 + reactive REST APIs with Spring WebFlux to stream real- time railcar data, enabling efficient filtering and pagination.",
      "Optimized React / Redux dashboard with lazy loading, pagination, and virtualized lists for real - time railcar data visualization.",
      "Implemented multi - stage Docker deployments with Kubernetes, enabling seamless scaling across five production environments."
    ],
  },
];
