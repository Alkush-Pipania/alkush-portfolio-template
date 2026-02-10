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
      title: "Ex-Full Stack Developer",
      company: "TECHYWEB SOLUTIONS Inc.",
      website: "https://www.techywebsolutions.com/",
    },
    {
      title: "Ex-Frontend Intern",
      company: "MAKUNAI GLOBAL TECHNOLOGIES",
      website: "https://www.makunaiglobal.ai/",
    },
  ],

  about: `
- **Full Stack Developer** specializing in **Go**, **Next.js**, **TypeScript**, and **microservices architecture**.
- Experienced in building **high-performance, scalable systems** with message queues (RabbitMQ), vector databases, and cloud infrastructure (AWS).
- Skilled in **LangChain**, **RAG pipelines**, and AI-powered applications with real-time capabilities.
- Creator of [Carter](https://github.com/Alkush-Pipania/Carter): A microservices platform with Go backend, RabbitMQ async processing, and Pinecone Vector DB — powering **100+ active users** with sub-100ms API latency.
- Built [UserAccess](https://useraccess.live): A WCAG-compliant accessibility widget hosted on AWS S3/CloudFront with global low-latency delivery.
- Developed [Cluely](https://github.com/Alkush-Pipania/JarwizAI): A RAG-powered conversational AI platform with real-time streaming and hybrid search.
- Crafted [Depo](https://github.com/Alkush-Pipania/Depo): A legal-tech platform using **LangGraph AI agents** for deposition question generation with live audio diarization.
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
  resume: "https://drive.google.com/file/d/1plDGDf56bXGGBDtAURisCuDvTCM1fmB9/view?usp=sharing",
} satisfies User;
