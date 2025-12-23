import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "carter",
    title: "🤖 Carter",
    period: {
      start: "12.2024",
    },
    link: "#",
    skills: [
      "LangChain",
      "VectorDB",
      "Gemini",
      "Next.js",
      "Node.js",
      "Chrome Extension",
    ],
    description: `Platform for Save and Share Links - AI-Powered Platform to Save and Share Links with Chrome Extension.

**Features:**

- Folders organization
- Links management
- Secret Keys for secure sharing
- Trash functionality
- Auto Folder Selection and Retrieval powered by AI`,
    isPinned: true,
  },
  {
    id: "goog",
    title: "🧠 GOOG",
    period: {
      start: "12.2024",
    },
    link: "#",
    skills: [
      "LangChain.js",
      "Next.js",
      "TypeScript",
      "Shadcn/ui",
      "Clerk",
      "Upstash Vector DB",
      "Gemini",
    ],
    description: `Prompt Generation AI - Created an AI tool to generate prompts based on user input with context from past conversations.

**Features:**

- Integrated deep search functionality using Tavily
- Deep Think integration for enhanced responses
- Context-aware prompt generation
- Conversation history integration`,
    isPinned: true,
  },
  {
    id: "ai-rag-domain-generator",
    title: "⚡ AI RAG Domain Generator",
    period: {
      start: "11.2024",
    },
    link: "#",
    skills: [
      "LangChain.js",
      "Node.js",
      "Gemini",
      "RAG",
      "Vector Search",
    ],
    description: `AI RAG Domain Generator using LangChain.js - Developed a tool to generate domain name suggestions based on detailed business prompts.

**Features:**

- Utilized RAG PDF for vector search
- Optimized domain name suggestions
- Business context-aware generation`,
    isPinned: true,
  },
  {
    id: "g1-website-builder",
    title: "🏗️ G1 Website Builder",
    period: {
      start: "10.2024",
    },
    link: "#",
    skills: [
      "Anthropic",
      "Node.js",
      "Next.js",
      "WebContainer",
    ],
    description: `A Website to Make Other (Node.js/Next.js) websites.

**Features:**

- Using WebContainer technology for in-browser development
- AI-powered website generation
- Support for Node.js and Next.js projects
- Real-time preview and editing`,
    isPinned: true,
  },
];
