import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "twospoon",
    companyName: "TwoSpoon",
    positions: [
      {
        id: "twospoon-sde-intern-2026",
        title: "Software Development Intern",
        employmentPeriod: {
          start: "03.2026",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Architected an autonomous invoice generation platform triggering on the 2nd of every month, processing billing data from CloudWatch logs by querying S3 via Athena — eliminating all manual invoicing overhead.
- Integrated Zomato Espresso for PDF generation and resolved a singleton lock contention issue with Chromium via a sidecar container pattern, eliminating generation failures under concurrent load.
- Integrated Zoho Books and engineered its webhook pipeline for real-time sync of invoice status, payment events, and financial records with the billing system.
- Designed the DynamoDB schema with optimized PK/SK patterns for efficient single-table access, minimizing read/write costs; configured PM2 and led the project end-to-end.
- Authored Golang unit and integration test cases for critical billing workflows, ensuring reliability and correctness across the invoice generation pipeline.`,
        skills: [
          "Golang",
          "AWS",
          "DynamoDB",
          "Athena",
          "S3",
          "CloudWatch",
          "Zoho Books",
          "PM2",
          "Webhooks",
          "Testing",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "techywebsolution",
    companyName: "Techy Web Solution Inc",
    companyLogo: "https://www.webability.io/logo.png",
    positions: [
      {
        id: "tws-fullstack-2024",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "08.2024",
          end: "01.2026",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Completely revamped the [Webability website](https://www.webability.io/) with modern design and enhanced functionality.
- Designed and developed the UI for their new product [Abilyo.com](https://abilyo.com).
- Migrated the [Webability blog](https://www.webability.io/blog) from DatoCMS to Strapi CMS for improved content management.
- Integrated Outrank for automated blog generation, streamlining content creation.
- Developed and maintained the accessibility widget service to ensure WCAG compliance.
- Worked on accessibility automation for WCAG 2.2 standards, improving web accessibility for users.
- Built and enhanced the Webability scanner service for comprehensive website analysis.
- Created various free SEO tools to help users optimize their websites.`,
        skills: [
          "TypeScript",
          "Next.js",
          "SEO",
          "Teamwork",
          "Research",
          "Strapi CMS",
          "Python",
          "LLMs",
        ],
      },
    ],
  },
  {
    id: "makunaiglobal",
    companyName: "Makunai Global",
    positions: [
      {
        id: "makunai-sde-2024",
        title: "SDE Intern",
        employmentPeriod: {
          start: "03.2024",
          end: "04.2024",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed responsive and user-friendly web interfaces using Next.js.
- Collaborated with the development team using Git/GitHub for version control and code reviews.
- Implemented modern frontend architecture and best practices for scalable web applications.
- Participated in agile development processes and team meetings.`,
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Git",
          "GitHub",
          "Responsive Design",
          "Teamwork",
          "Agile",
        ],
      },
    ],
  },
];
