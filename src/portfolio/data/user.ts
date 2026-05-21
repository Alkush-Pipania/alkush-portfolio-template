import type { User } from "@/portfolio/types/user";

export const USER = {
  firstName: "Alkush",
  lastName: "Pipania",
  displayName: "Alkush Pipania",
  username: "alkush",
  gender: "male",
  pronouns: "he/him",
  bio: "Full Stack Developer building scalable systems with Go, Next.js & microservices.",
  flipSentences: [
    "Full Stack Developer",
    "System Designs",
    "Building with Go & Next.js",
    "Open Source Enthusiast",
  ],
  address: "India",
  phoneNumber: "KzkxLTYzOTY0NjkxMTA=",
  email: "YWxrdXNoMjR4N0BnbWFpbC5jb20=",
  website: "https://alkush.xyz",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Software Development Intern",
      company: "TwoSpoon",
      website: "https://twospoon.ai/",
    },
    {
      title: "Ex-Full Stack Developer",
      company: "TECHYWEB SOLUTIONS Inc.",
      website: "https://www.techywebsolutions.com/",
    },
  ],

  about: `
- **Backend & systems engineer** focused on **Go**, **Next.js**, and production infrastructure — worker pools, Redis queues, single-table DynamoDB design, and end-to-end ownership from schema to deployment.
- Creator of **[Sofon](https://sofon.live)**: Self-hosted uptime monitoring with an embedded Next.js SPA, concurrent Go executors, and Redis-backed health checks — deployable in one command, no SaaS dependency ([GitHub](https://github.com/Alkush-Pipania/sofon)).
- Built **[Carter](https://github.com/Alkush-Pipania/Carter)**: Microservices platform (Go, RabbitMQ, Pinecone) serving **100+ active users** with sub-100ms API latency.
- Developed **[Depo](https://github.com/Alkush-Pipania/Depo)**: Legal-tech platform with **LangGraph** agents, live deposition workflows, and secure document pipelines on AWS.
- Previously **Full Stack Developer** at Techy Web Solutions — shipped [Webability](https://www.webability.io/), [Abilyo](https://abilyo.com), and production accessibility tooling used at scale.
- Pursuing **B.Tech in Computer Science** at Dr. A.P.J. Abdul Kalam Technical University.
`,
  avatar: "https://stealth.blr1.digitaloceanspaces.com/assest/ChatGPT%20Image%20Dec%2023,%202025,%2010_45_13%20PM.png",
  ogImage: "/Images/og.png",
  namePronunciationUrl: "/audio/name.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "alkush",
    "alkushpipania",
    "alkush chaudhary",
    "alkush pipania",
    "my code speak",
  ],
  dateCreated: "2025-12-23",
  resume: "https://drive.google.com/file/d/1EsUSjq4v6vgQKwxaJndB9yATQS5dmks0/view",
} satisfies User;
