import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "carter",
    title: "Carter",
    period: {
      start: "01.2025",
    },
    link: "https://2alabs.pro",
    github: "https://github.com/Alkush-Pipania/Carter",
    skills: [
      "Go",
      "Chi Router",
      "RabbitMQ",
      "Redis",
      "Pinecone",
      "Next.js",
      "Redux",
      "Microservices",
    ],
    description: `Microservices platform with Go backend, async processing, and AI-powered features.

**Features:**

- Architected **carter-go** with secure session-based auth featuring TTL-based expiry
- Built **source-service**: async processing engine using RabbitMQ and Redis
- Integrated **Scrapper** as high-concurrency microservice for data extraction
- Orchestrated with Next.js frontend (100+ active users) with sub-100ms API latency
- Session management with remote revoke access from multiple devices`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/carter.png",
      alt: "Carter - Microservices Platform",
    },
  },
  {
    id: "depo",
    title: "Depo",
    period: {
      start: "09.2024",
    },
    github: "https://github.com/Alkush-Pipania/depo",
    skills: [
      "LangGraph",
      "Next.js",
      "Redis",
      "AWS S3",
      "Drizzle ORM",
      "Audio Diarization",
    ],
    description: `Legal-tech platform for lawyers with AI-powered deposition assistance.

**Features:**

- Upload case files and generate strategic deposition questions using LangGraph AI agents
- Real-time "Live Depo" interface with audio capture and speaker diarization
- Instant, context-aware question suggestions during depositions
- Secure document storage with AWS S3 Presigned URLs
- Optimized database interactions using Drizzle ORM and Redis`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/depo.png",
      alt: "Depo - Legal-tech for depositions",
    },
  },
  {
    id: "useraccess",
    title: "UserAccess",
    period: {
      start: "12.2024",
    },
    link: "https://www.useraccess.live/",
    github: "https://github.com/Alkush-Pipania/useraccess",
    skills: [
      "AWS S3",
      "CloudFront",
      "JavaScript",
      "WCAG",
      "Accessibility",
    ],
    description: `High-performance accessibility widget for WCAG compliance.

**Features:**

- Hosted on AWS S3 and delivered via CloudFront CDN for global low-latency
- Embedded compliance tools: Accessibility Statement Generator, Color Contrast Checker
- Real-time WCAG auditing capabilities
- Zero-impact integration on client websites with broad browser compatibility`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/useraccess.png",
      alt: "UserAccess - Accessibility Widget",
    },
  },
  {
    id: "scrapper",
    title: "Scrapper",
    period: {
      start: "11.2024",
    },
    link: "https://scrap-frontend-puce.vercel.app/",
    github: "https://github.com/Alkush-Pipania/Scrapper",
    skills: [
      "Golang",
      "Colly",
      "Goquery",
      "Concurrency",
      "JSON/CSV",
    ],
    description: `High-performance concurrent web scraper built with Go.

**Features:**

- Extracts structured data from dynamic websites with low latency
- Robust anti-blocking mechanisms (User-Agent rotation, request delays)
- Accelerated data parsing pipelines using Goquery
- Modular and scalable architecture
- Export support for JSON/CSV formats`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/scraper.png",
      alt: "Scrapper - Go Web Scraper",
    },
  },
  {
    id: "cluely",
    title: "Cluely",
    period: {
      start: "10.2024",
    },
    link: "https://cluely-workable-frontend.onrender.com/signup",
    github: "https://github.com/Alkush-Pipania/cluley_like_platform_on_web",
    skills: [
      "Next.js",
      "FastAPI",
      "Deepgram",
      "Pinecone",
      "RAG",
      "SSE",
    ],
    description: `RAG-powered conversational AI platform.

**Features:**

- AI generation pipeline for RAG and Web SERP service
- Real-time response streaming via Server-Sent Events (SSE)
- Hybrid search mechanism (Keyword + Vector) with re-ranking
- Improved contextual relevance of generated answers`,
    isPinned: true,
  },
];
