import j1 from "./assets/journey-1.jpg";
import j2 from "./assets/journey-2.jpg";
import j3 from "./assets/journey-3.jpg";
import j4 from "./assets/journey-4.jpg";
import j5 from "./assets/journey-5.jpg";
import j6 from "./assets/journey-6.jpg";

import logoFlask from "./assets/logos/flask.svg";
import logoNodejs from "./assets/logos/nodejs.svg";
import logoVercel from "./assets/logos/vercel.svg";
import logoSqlite from "./assets/logos/sqlite.svg";
import logoCursor from "./assets/logos/cursor.svg";
import logoGroq from "./assets/logos/groq.svg";
import logoRailway from "./assets/logos/railway.svg";
import logoLangchain from "./assets/logos/langchain.png";

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

export interface JourneyStop {
  id: string;
  period: string;
  title: string;
  place: string;
  kind: "education" | "work" | "research";
  caption: string;
  description: string;
  marker?: string;
  image?: string;
}

export const JOURNEY_QUOTE = {
  text: "Every model I train is really a record of what I once didn't understand.",
  caption: "A timeline is just a loss curve with better lighting — noisy at the start, converging with every stop.",
};

export const JOURNEY: JourneyStop[] = [
  {
    id: "j1",
    period: "2010 – 2020",
    title: "The First Compile",
    place: "Sri Sathya Sai Gurukulam (ICSE)",
    kind: "education",
    caption: "Curiosity before syntax.",
    description:
      "Ten years of schooling where asking 'but how does it actually work?' became a habit long before I had a keyboard to answer it with.",
    marker: "80%",
    image: j1,
  },
  {
    id: "j2",
    period: "2020 – 2022",
    title: "Choosing the Machine",
    place: "Sri Sathya Sai Institute of Educare (CBSE)",
    kind: "education",
    caption: "Math stopped being homework and became a language.",
    description:
      "Senior secondary years spent falling for linear algebra and probability — the two things that would later quietly run everything I build.",
    marker: "75.8%",
    image: j2,
  },
  {
    id: "j3",
    period: "2022 – 2026",
    title: "Training Phase",
    place: "Vignan's IIT — B.Tech CSE (AI Specialisation)",
    kind: "education",
    caption: "Four years of deliberate overfitting to one obsession.",
    description:
      "Deep learning, NLP and systems engineering — plus a long tail of side projects that taught me more than any syllabus could.",
    marker: "CGPA 8.18",
    image: j3,
  },
  {
    id: "j4",
    period: "May 2024 – Aug 2024",
    title: "First Contact With Production",
    place: "CodeForces — AI/ML Intern",
    kind: "work",
    caption: "Where accuracy met deadlines.",
    description:
      "Shipped ML and deep learning work against real data and real constraints, lifting model performance by 12% along the way.",
    marker: "+12% perf",
    image: j4,
  },
  {
    id: "j5",
    period: "Mar 2025 – Present",
    title: "Writing It Down",
    place: "Independent Research — LaMaTEPP & SyncVerse",
    kind: "research",
    caption: "Building things nobody has benchmarked yet.",
    description:
      "Two manuscripts under review: adapter-based low-resource Indic translation, and a multimodal transformer for speech-driven lip synchronisation.",
    marker: "2 papers",
    image: j5,
  },
  {
    id: "j6",
    period: "Jan 2026 – Present",
    title: "Shipping Intelligence",
    place: "Hrud.ai — AI Engineer",
    kind: "work",
    caption: "From notebooks to systems people depend on.",
    description:
      "Designing RAG pipelines and autonomous agents in production, leading AI engineering work end to end.",
    marker: "Current",
    image: j6,
  },
];

export const PORTFOLIO_DATA = {
  name: "Solige Pullaiah",
  alias: "Puli Pavan",
  role: "AI Engineer",
  location: "Visakhapatnam, India",
  summary: "Final-year AI Engineering student focused on designing, training, and deploying end-to-end ML and LLM-based systems. Specialized in RAG pipelines, transformer models, and production-ready AI solutions.",
  techStack: [
    { id: "ts1", name: "Python", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { id: "ts2", name: "TensorFlow", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { id: "ts3", name: "Flask", imageUrl: logoFlask },
    { id: "ts4", name: "React", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: "ts5", name: "Node.js", imageUrl: logoNodejs },
    { id: "ts6", name: "Postgres", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { id: "ts7", name: "Docker", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { id: "ts8", name: "Git", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: "ts9", name: "GitHub", imageUrl: "https://cdn.simpleicons.org/github/FFFFFF" },
    { id: "ts10", name: "GCP", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { id: "ts11", name: "VS Code", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { id: "ts12", name: "TypeScript", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: "ts13", name: "Vercel", imageUrl: logoVercel },
    { id: "ts14", name: "SQLite", imageUrl: logoSqlite },
    { id: "ts15", name: "Railway", imageUrl: logoRailway }
  ],
  aiTools: [
    { id: "ai1", name: "OpenAI", imageUrl: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/dark/openai.png" },
    { id: "ai2", name: "Hugging Face", imageUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { id: "ai3", name: "Claude Code", imageUrl: "https://cdn.simpleicons.org/claude/D97757" },
    { id: "ai4", name: "Google AI Studio", imageUrl: "https://cdn.simpleicons.org/googlegemini/8AB4F8" },
    { id: "ai5", name: "Cursor", imageUrl: logoCursor },
    { id: "ai6", name: "n8n Automation", imageUrl: "https://cdn.simpleicons.org/n8n" },
    { id: "ai7", name: "Groq", imageUrl: logoGroq },
    { id: "ai8", name: "LangChain", imageUrl: logoLangchain },
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
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=2070&auto=format&fit=crop",
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

/* Skillset: [skill, where it was used (optional), tag (optional)] */
export type SkillRow = [name: string, whereUsed?: string, tag?: string];
export interface SkillCategory {
  id: string;
  title: string;
  blurb: string;
  icon: "brain" | "code" | "database" | "cloud";
  items: SkillRow[];
}

export const SKILLSET: SkillCategory[] = [
  {
    id: "ai",
    title: "AI & Machine Learning",
    blurb: "From classical ML to LLM agents shipped in production.",
    icon: "brain",
    items: [
      ["Machine Learning", "CodeForces — +12% model performance"],
      ["Deep Learning", "LaMaTEPP, SyncVerse"],
      ["NLP", "LaMaTEPP — Indic machine translation"],
      ["RAG", "Ollama Document Assistant, Hrud.ai"],
      ["LLMs", "Hrud.ai (Gemini), Ollama"],
      ["Agents", "AI Job Intelligence Agent, Hrud.ai"],
      ["Prompt Engineering", "RAG & agent workflows"],
    ],
  },
  {
    id: "lang",
    title: "Languages",
    blurb: "My primary language for ML, LLM and backend work.",
    icon: "code",
    items: [["Python", "ML, DL, NLP, RAG, agents, FastAPI"]],
  },
  {
    id: "db",
    title: "Databases",
    blurb: "Relational stores and vector search for retrieval.",
    icon: "database",
    items: [
      ["Supabase", "AI Job Intelligence Agent, Hrud.ai", "SQL"],
      ["PostgreSQL", "Supabase backends", "SQL"],
      ["SQLite", "", "SQL"],
      ["MySQL", "", "SQL"],
      ["Pinecone", "", "Vector"],
      ["FAISS & Chroma", "Ollama Document Assistant", "Vector"],
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    blurb: "Shipping and versioning what I build.",
    icon: "cloud",
    items: [
      ["Microsoft Azure", ""],
      ["Vercel", ""],
      ["GitHub", "github.com/puli-pro"],
    ],
  },
];

/* My Process — one lens per kind of work; every step has a description per lens */
export type ProcessLensId = "paper" | "mldl" | "rag" | "agent";

export const PROCESS_LENSES: { id: ProcessLensId; label: string; hint: string }[] = [
  { id: "paper", label: "Research Paper", hint: "Hypothesis → method → ablations → write-up" },
  { id: "mldl", label: "ML · DL · NLP", hint: "Data → model → training → metrics" },
  { id: "rag", label: "RAG", hint: "Ingest → retrieve → re-rank → grounded answer" },
  { id: "agent", label: "Agents", hint: "Plan → tools → memory → guardrails" },
];

export interface ProcessStep {
  id: string;
  title: string;
  summary: string;
  output: string;
  icon: "target" | "network" | "telescope" | "design" | "flask" | "rocket";
  practice: Record<ProcessLensId, string>;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "understand",
    title: "Understand the Problem",
    summary: "I start by understanding the problem clearly — the users, the data, the constraints, and what success actually means.",
    output: "Problem brief + success metrics",
    icon: "target",
    practice: {
      paper: "Read the problem statement and the related work, find the gap, and write a testable hypothesis plus the metrics that would prove it.",
      mldl: "Frame it as a learning task — inputs, outputs, available data, constraints — and pick the metric that really matters (BLEU/COMET, F1, latency…).",
      rag: "Pin down what knowledge is needed, who asks the questions, and what a grounded, cited answer must look like.",
      agent: "Define the task boundaries, the tools the agent needs, and where it must stop or hand over to a human.",
    },
  },
  {
    id: "plan",
    title: "Plan the Architecture",
    summary: "Then I draft an architecture plan on paper before touching code: components, data flow, baselines and how I'll evaluate.",
    output: "Architecture sketch + evaluation plan",
    icon: "network",
    practice: {
      paper: "Sketch the proposed method end to end — components, data flow, and the baseline it has to beat.",
      mldl: "Draft the pipeline: data prep → model family → training and evaluation loop, with a first guess at the compute budget.",
      rag: "Draft ingestion → chunking → embeddings → retrieval → re-ranking → generation, and how each part will be measured.",
      agent: "Draft the plan → retrieve → analyze → act loop, with memory, tool calls and failure handling.",
    },
  },
  {
    id: "survey",
    title: "Check What Already Exists",
    summary: "Before building, I check existing architectures, papers and open-source models. If something helps, I update the plan instead of reinventing it.",
    output: "Reuse / adapt / build decision log",
    icon: "telescope",
    practice: {
      paper: "Study existing architectures, papers and released code. Reuse or adapt what is proven; invent only what is missing.",
      mldl: "Look for open-source models and checkpoints (Hugging Face, GitHub) — fine-tune, add adapters, or train from scratch?",
      rag: "Compare embedding models, vector stores and re-rankers that already exist, and benchmark them before committing.",
      agent: "Review agent frameworks and tool-use patterns that already work, and reuse them rather than rebuilding orchestration.",
    },
  },
  {
    id: "design",
    title: "Design",
    summary: "With the plan updated, I lock the final design: models, prompts, data and the experiments that will prove it works.",
    output: "Final design + experiment protocol",
    icon: "design",
    practice: {
      paper: "Lock the final method — the novel parts (adapters, memory, cross-modal attention…), the ablations to run and the experiment protocol.",
      mldl: "Finalise architecture, loss, data splits, augmentation and the hyper-parameter search space.",
      rag: "Finalise chunking, embedding model, index, retrieval strategy, prompts and citation format.",
      agent: "Finalise the agent graph, prompts, tool schemas, memory and guardrails.",
    },
  },
  {
    id: "build",
    title: "Build & Evaluate",
    summary: "I build it, then measure it honestly against baselines — not just the headline number — and iterate until it holds up.",
    output: "Results table + error analysis",
    icon: "flask",
    practice: {
      paper: "Implement, run baselines and ablations, and report the numbers properly (BLEU, chrF, BERTScore, COMET; LSE-D, LSE-C, SSIM).",
      mldl: "Train, validate and tune; compare against baselines and study the errors, not only the headline metric.",
      rag: "Measure retrieval quality and answer grounding; fix chunking and prompts until the answers hold up.",
      agent: "Test end-to-end tasks, tool failures and edge cases; iterate with stakeholders until the behaviour is reliable.",
    },
  },
  {
    id: "deploy",
    title: "Deploy & Improve",
    summary: "I ship it, watch how it behaves with real use, and keep improving — and the findings feed the next problem.",
    output: "Live system + write-up",
    icon: "rocket",
    practice: {
      paper: "Write it up, release the code, and refine with reviewer and community feedback.",
      mldl: "Package the model behind an API (FastAPI / Docker), monitor latency and drift, and retrain when it degrades.",
      rag: "Ship the pipeline, watch real queries, and keep improving the corpus, retrieval and prompts.",
      agent: "Deploy with logging and guardrails, review real traces, and tighten the agent where it fails.",
    },
  },
];

/* Professional Soft Skills — only what the resume supports */
export interface SoftSkill {
  id: string;
  title: string;
  text: string;
  evidence: string[];
  icon: "leader" | "speaker" | "mic" | "ownership";
}

export const SOFT_SKILLS: SoftSkill[] = [
  {
    id: "leadership",
    title: "Leadership",
    text: "I step up to lead teams and keep delivery on track — from hackathon sprints to AI engineering work.",
    evidence: ["Team Lead — Sign2Speak Hackathon (3rd place)", "Team Lead — Hrud.ai internship, led AI engineering projects"],
    icon: "leader",
  },
  {
    id: "speaking",
    title: "Public Speaking",
    text: "Comfortable explaining ideas to a live audience, and recognised for it in competitions.",
    evidence: ["2nd Prize — Elocution Competition", "Top 2000 in Super Speaker Season 2 (of 2.53 lakh participants)"],
    icon: "speaker",
  },
  {
    id: "anchoring",
    title: "Event Anchoring",
    text: "Hosting technical and cultural events has made me calm on stage and quick to read a room.",
    evidence: ["Anchored multiple technical and cultural events"],
    icon: "mic",
  },
  {
    id: "ownership",
    title: "End-to-End Ownership",
    text: "I take ideas all the way from design and training to deployment instead of stopping at a notebook.",
    evidence: ["Designs, trains and deploys end-to-end ML and LLM-based systems", "Production AI systems at Hrud.ai"],
    icon: "ownership",
  },
];

/* Achievements — from Resume-pullaiah.md (Leadership & Achievements) */
export interface Achievement {
  id: string;
  headline: string;
  title: string;
  detail: string;
  icon: "medal" | "mic" | "award" | "users" | "stage";
  featured?: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    headline: "3rd",
    title: "Sign2Speak Hackathon",
    detail: "Secured 3rd place as Team Lead.",
    icon: "medal",
    featured: true,
  },
  {
    id: "a2",
    headline: "Top 2000",
    title: "Super Speaker Season 2",
    detail: "Ranked in the top 2000 among 2.53 lakh participants.",
    icon: "mic",
  },
  {
    id: "a3",
    headline: "2nd",
    title: "Elocution Competition",
    detail: "Won 2nd prize.",
    icon: "award",
  },
  {
    id: "a4",
    headline: "Lead",
    title: "Hrud.ai Internship",
    detail: "Team Lead — led AI engineering projects.",
    icon: "users",
  },
  {
    id: "a5",
    headline: "Host",
    title: "Technical & Cultural Events",
    detail: "Anchored multiple technical and cultural events.",
    icon: "stage",
  },
];

/* Contact — messages are delivered to this number as a normal text (SMS) */
export const CONTACT_PHONE = {
  e164: "+919346680696",
  display: "+91 93466 80696",
};
