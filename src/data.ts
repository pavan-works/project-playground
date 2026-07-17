export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
  tags?: string[];
  subtitle?: string;
  year?: string;
  role?: string;
  overview?: string;
  highlights?: string[];
  tech?: string[];
  metrics?: { label: string; value: string }[];
  github?: string;
  paperUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon?: string;
  imageUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  name: "Solige Pullaiah",
  alias: "Puli Pavan",
  role: "AI Engineer",
  location: "Visakhapatnam, India",
  summary: "Final-year AI Engineering student focused on designing, training, and deploying end-to-end ML and LLM-based systems. Specialized in RAG pipelines, transformer models, and production-ready AI solutions.",
  techStack: [
    { id: "ts1", name: "Python", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { id: "ts2", name: "TensorFlow", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { id: "ts3", name: "Flask", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { id: "ts4", name: "React", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: "ts5", name: "Node.js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { id: "ts6", name: "Postgres", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { id: "ts7", name: "Docker", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { id: "ts8", name: "Git", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: "ts9", name: "GitHub", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { id: "ts10", name: "GCP", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { id: "ts11", name: "VS Code", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { id: "ts12", name: "TypeScript", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: "ts13", name: "Vercel", imageUrl: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    { id: "ts14", name: "SQLite", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { id: "ts15", name: "Railway", imageUrl: "https://railway.app/brand/logo-light.svg" }
  ],
  aiTools: [
    { id: "ai1", name: "OpenAI", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { id: "ai2", name: "Hugging Face", imageUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { id: "ai3", name: "Claude Code", imageUrl: "https://cdn.brandfetch.io/id_jG0m1p2Z/w/400/h/400/theme/dark/logo.png" },
    { id: "ai4", name: "Google AI Studio", imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" },
    { id: "ai5", name: "Cursor", imageUrl: "https://mintlify.s3-us-west-1.amazonaws.com/cursor/logo/light.png" },
    { id: "ai6", name: "n8n Automation", imageUrl: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" },
    { id: "ai7", name: "Groq", imageUrl: "https://groq.com/wp-content/uploads/2024/03/Groq_Logo_Black.png" },
    { id: "ai8", name: "LangChain", imageUrl: "https://pbs.twimg.com/profile_images/1750537446555181056/9K_uE0-z_400x400.jpg" },
    { id: "ai9", name: "FastAPI", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }
  ],
  experience: [
    {
      company: "Hrud.ai",
      role: "AI Engineer",
      period: "Jan 2026 - Present",
      description: "Building production-grade AI systems using LLMs and modern AI platforms. Designing RAG pipelines and autonomous agents."
    },
    {
      company: "CodeForces",
      role: "AI/ML Intern",
      period: "May 2024 - Aug 2024",
      description: "Worked on Machine Learning and Deep Learning applications, improving model performance by 12%."
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Ollama LLM Document Assistant",
      category: "RAG System",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      link: "https://github.com/puli-pro/Ollama-llm-document-assistant",
      tags: ["RAG", "FAISS", "Chroma", "LLM"],
      subtitle: "Retrieval-Augmented Generation over local documents",
      year: "2025",
      role: "Solo Builder — Architecture, RAG pipeline, UI",
      github: "https://github.com/puli-pro/Ollama-llm-document-assistant",
      overview:
        "An end-to-end RAG system that lets you chat with your own document corpus using local Ollama LLMs. Handles ingestion, chunking, embedding, semantic search, and grounded answer synthesis with citations — all runnable offline.",
      highlights: [
        "Retrieval-Augmented Generation pipeline with document chunking, embedding, and re-ranking",
        "Vector search implemented with both FAISS and Chroma for benchmarking latency vs recall",
        "Streaming LLM inference through Ollama for low-latency local generation",
        "Scalable architecture with pluggable embedders and knowledge stores for real-time querying"
      ],
      tech: ["Python", "Ollama", "LangChain", "FAISS", "ChromaDB", "Sentence-Transformers", "FastAPI"]
    },
    {
      id: "p2",
      title: "AI Job Intelligence Agent",
      category: "Multi-Agent System",
      image: "https://images.unsplash.com/photo-1664575602554-20d7b9464b60?q=80&w=2070&auto=format&fit=crop",
      link: "https://github.com/puli-pro/agents",
      tags: ["Multi-Agent", "Supabase", "Semantic Search"],
      subtitle: "Autonomous multi-agent job discovery & ranking",
      year: "2025",
      role: "Solo Builder — Agent orchestration, data pipeline",
      github: "https://github.com/puli-pro/agents",
      overview:
        "A multi-agent LLM system that aggregates jobs across JSearch, Adzuna, and LinkedIn, normalises them into a single schema, and uses a plan → retrieve → analyze → rank workflow to surface the strongest matches for a candidate profile.",
      highlights: [
        "Multi-source aggregation across JSearch, Adzuna, and LinkedIn APIs with dynamic query generation",
        "End-to-end ingestion → normalization → storage pipeline built on Supabase (PostgreSQL)",
        "Multi-agent LLM workflow: plan → retrieve → analyze → rank using RAG + embeddings",
        "Semantic search over normalized listings for intelligent, profile-aware matching"
      ],
      tech: ["Python", "LangChain", "OpenAI", "Supabase", "PostgreSQL", "Embeddings", "FastAPI"]
    }
  ],
  researchPapers: [
    {
      id: "r1",
      title: "LaMaTEPP",
      category: "Machine Translation",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
      tags: ["NLP", "MoE Adapters", "Indic Languages"],
      link: "https://drive.google.com/file/d/1gcfma9LE3QO_0Wp2W44VPUcQNWXahw4G/view?usp=sharing",
      subtitle: "Low-Resource Indic Machine Translation — manuscript under review",
      year: "Mar 2025 – Present",
      role: "First Author — Model design, experimentation, evaluation",
      paperUrl: "https://drive.google.com/file/d/1gcfma9LE3QO_0Wp2W44VPUcQNWXahw4G/view?usp=sharing",
      overview:
        "Proposes a lightweight, adapter-enhanced, memory-augmented machine translation system tailored for low-resource Indic languages. Combines MoE adapters, document-level memory, and MLM regularization to improve coherence, with an inference stack that pairs MMCBS+ beam search with MBR reranking.",
      highlights: [
        "MoE adapters + document-memory + MLM regularization for improved cross-sentence coherence",
        "MMCBS+ with linguistically informed beam search and MBR reranking at inference time",
        "Evaluated on BLEU, chrF, BERTScore, and COMET",
        "Estimated +5–10 BLEU improvement over mBART baselines on low-resource Indic pairs"
      ],
      tech: ["PyTorch", "Hugging Face Transformers", "mBART", "MoE Adapters", "COMET", "BLEU"],
      metrics: [
        { label: "BLEU gain", value: "+5–10" },
        { label: "Baseline", value: "mBART" },
        { label: "Status", value: "Under review" }
      ]
    },
    {
      id: "r2",
      title: "SyncVerse",
      category: "Lip-Sync Generation",
      image: "https://images.unsplash.com/photo-1478737270239-2fccd2c7862a?q=80&w=2070&auto=format&fit=crop",
      tags: ["Computer Vision", "Multimodal", "wav2vec2.0"],
      subtitle: "Multimodal transformer for speech-driven lip synchronization",
      year: "Mar 2025 – Present",
      role: "Lead Researcher — Architecture, multimodal pipeline",
      overview:
        "SyncVerse is a multimodal transformer-based system that drives realistic lip synchronization from raw speech. It fuses wav2vec2.0 / HuBERT audio embeddings with custom lip-region visual encoders through a cross-modal attention module, and adds temporal modeling for smooth speech–lip alignment.",
      highlights: [
        "Audio embeddings via wav2vec2.0 / HuBERT and custom lip-region visual encoders",
        "Cross-modal attention module for accurate audio–visual alignment",
        "Temporal modeling pipeline for coherent, jitter-free motion across frames",
        "Measurable gains on standard lip-sync metrics vs prior baselines"
      ],
      tech: ["PyTorch", "wav2vec2.0", "HuBERT", "Transformers", "OpenCV", "Cross-Modal Attention"],
      metrics: [
        { label: "LSE-D", value: "↓ 18%" },
        { label: "LSE-C", value: "↑ 12%" },
        { label: "SSIM", value: "↑ 9%" }
      ]
    }
  ]
};
