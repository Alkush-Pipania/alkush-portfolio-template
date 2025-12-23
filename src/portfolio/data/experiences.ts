import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
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
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
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
