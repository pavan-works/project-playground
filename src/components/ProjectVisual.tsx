import type { CSSProperties } from "react";

export type VisualKind =
  | "rag"
  | "agents"
  | "mt"
  | "lipsync"
  | "galaxy"
  | "devtools"
  | "chatbot"
  | "career"
  | "interview"
  | "pulse"
  | "delivery";

const d = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

const C = "#22d3ee"; // cyan
const E = "#10b981"; // emerald
const I = "#818cf8"; // indigo
const MUTE = "rgba(255,255,255,0.55)";
const LINE = "rgba(255,255,255,0.22)";

/* ---------- RAG: documents → vector space → retrieval → grounded answer ---------- */
const DOTS: [number, number][] = [
  [140, 62], [168, 82], [238, 70], [150, 112], [226, 108], [250, 140],
  [142, 168], [180, 178], [214, 170], [246, 188], [196, 58], [128, 140],
];
const HITS = [3, 4, 7]; // indices that get retrieved

const Rag = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Retrieval-augmented generation pipeline animation">
    {/* documents */}
    {[0, 1, 2].map((i) => (
      <g key={i} className="pv-docs" style={d(i * 0.15)}>
        <rect x={22 + i * 6} y={58 + i * 22} width={52} height={64} rx={6} fill="rgba(255,255,255,0.06)" stroke={LINE} />
        <rect x={30 + i * 6} y={70 + i * 22} width={30} height={3} rx={1.5} fill={MUTE} />
        <rect x={30 + i * 6} y={80 + i * 22} width={36} height={3} rx={1.5} fill={LINE} />
        <rect x={30 + i * 6} y={90 + i * 22} width={24} height={3} rx={1.5} fill={LINE} />
      </g>
    ))}
    <path d="M84 120 H118" stroke={C} strokeWidth={1.5} className="pv-flow" />
    <text x={86} y={112} fontSize={9} fill={MUTE} fontFamily="monospace">embed</text>

    {/* vector space */}
    <rect x={118} y={40} width={150} height={166} rx={14} fill="rgba(255,255,255,0.03)" stroke={LINE} />
    {DOTS.map(([x, y], i) => (
      <circle
        key={i}
        cx={x}
        cy={y}
        r={4}
        className={HITS.includes(i) ? "pv-hit" : "pv-dot"}
        style={{ ...d(i * 0.08), fill: HITS.includes(i) ? undefined : "#64748b" }}
        fill="#64748b"
      />
    ))}
    {/* query */}
    <circle cx={194} cy={132} r={5} fill={E} />
    <circle cx={194} cy={132} r={5} fill="none" stroke={E} className="pv-ping" />
    <text x={176} y={152} fontSize={9} fill={E} fontFamily="monospace">query</text>
    {HITS.map((i) => (
      <line key={i} x1={194} y1={132} x2={DOTS[i][0]} y2={DOTS[i][1]} stroke={C} strokeWidth={1.2} className="pv-draw" />
    ))}

    {/* answer */}
    <path d="M272 124 H292" stroke={E} strokeWidth={1.5} className="pv-flow" />
    <rect x={292} y={58} width={94} height={128} rx={10} fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.5)" />
    <text x={302} y={76} fontSize={9} fill={E} fontFamily="monospace">grounded answer</text>
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={302} y={88 + i * 16} width={i === 3 ? 44 : 74} height={5} rx={2.5} fill="rgba(255,255,255,0.7)" className="pv-type" style={d(i * 0.25)} />
    ))}
    <rect x={302} y={160} width={22} height={13} rx={6} fill="rgba(34,211,238,0.2)" stroke={C} />
    <text x={307} y={170} fontSize={8} fill={C} fontFamily="monospace">[1]</text>
    <rect x={330} y={160} width={22} height={13} rx={6} fill="rgba(34,211,238,0.2)" stroke={C} />
    <text x={335} y={170} fontSize={8} fill={C} fontFamily="monospace">[2]</text>
  </svg>
);

/* ---------- Job agent: find jobs → resume & profile match score → apply ---------- */
const SOURCES = ["JSearch", "Adzuna", "LinkedIn"];
const JOBS: [string, number][] = [
  ["92%", 0],
  ["86%", 1],
  ["74%", 2],
];

const Agents = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Job search, matching and applying animation">
    {/* 1 · find jobs */}
    <text x={12} y={16} fontSize={9} fill={MUTE} fontFamily="monospace">find jobs</text>
    {SOURCES.map((t, i) => (
      <g key={t}>
        <rect x={12} y={26 + i * 40} width={72} height={28} rx={14} fill="rgba(255,255,255,0.07)" stroke={LINE} />
        <text x={48} y={44 + i * 40} fontSize={9} fill="#fff" textAnchor="middle" fontFamily="monospace">{t}</text>
        <path d={`M84 ${40 + i * 40} L112 ${58 + i * 20}`} stroke={C} strokeWidth={1.3} className="pv-flow" style={d(i * 0.2)} />
      </g>
    ))}

    {/* job cards with match scores */}
    <text x={116} y={16} fontSize={9} fill={MUTE} fontFamily="monospace">matches</text>
    {JOBS.map(([score, i]) => (
      <g key={score}>
        <g className="pv-docs" style={d(i * 0.25)}>
          <rect x={112} y={26 + i * 40} width={128} height={32} rx={9} fill="rgba(255,255,255,0.06)" stroke={LINE} />
          <rect x={122} y={35 + i * 40} width={[64, 52, 70][i]} height={5} rx={2.5} fill="rgba(255,255,255,0.8)" />
          <rect x={122} y={45 + i * 40} width={[44, 58, 36][i]} height={4} rx={2} fill="rgba(255,255,255,0.35)" />
        </g>
        <g className="pv-appear" style={d(i * 0.3)}>
          <rect x={196} y={34 + i * 40} width={38} height={16} rx={8} fill={i === 0 ? "rgba(16,185,129,0.3)" : "rgba(34,211,238,0.18)"} stroke={i === 0 ? E : C} />
          <text x={215} y={45.5 + i * 40} fontSize={9} fill="#fff" textAnchor="middle" fontFamily="monospace">{score}</text>
        </g>
      </g>
    ))}

    {/* 2 · resume + profile match */}
    <path d="M240 58 H262" stroke={E} strokeWidth={1.4} className="pv-flow" />
    <text x={266} y={16} fontSize={9} fill={MUTE} fontFamily="monospace">resume + profile</text>
    <rect x={266} y={26} width={122} height={92} rx={12} fill="rgba(255,255,255,0.05)" stroke={LINE} />
    <rect x={276} y={36} width={34} height={44} rx={4} fill="rgba(255,255,255,0.08)" stroke={LINE} />
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={281} y={42 + i * 8} width={[24, 18, 24, 14][i]} height={3} rx={1.5} fill="rgba(255,255,255,0.55)" />
    ))}
    <circle cx={352} cy={58} r={22} fill="none" stroke={LINE} strokeWidth={5} />
    <circle cx={352} cy={58} r={22} fill="none" stroke={E} strokeWidth={5} strokeLinecap="round" className="pv-line" style={{ strokeDasharray: 138 }} />
    <text x={352} y={62} fontSize={11} fill="#fff" textAnchor="middle" fontFamily="monospace">92%</text>
    <text x={327} y={106} fontSize={8} fill={E} textAnchor="middle" fontFamily="monospace">match score</text>

    {/* 3 · apply */}
    <path d="M327 118 V138" stroke={C} strokeWidth={1.4} className="pv-flow" />
    <rect x={266} y={142} width={122} height={34} rx={17} fill="rgba(34,211,238,0.18)" stroke={C} />
    <text x={327} y={163} fontSize={11} fill="#fff" textAnchor="middle" fontFamily="monospace">Apply</text>
    <g className="pv-appear" style={d(0.8)}>
      <rect x={266} y={142} width={122} height={34} rx={17} fill="rgba(16,185,129,0.9)" />
      <path d="M298 159 l5 5 l10 -10" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      <text x={344} y={163} fontSize={10} fill="#fff" textAnchor="middle" fontFamily="monospace">Applied</text>
    </g>

    {/* stage dots */}
    {["Find", "Match", "Apply"].map((t, i) => (
      <g key={t}>
        <circle cx={92 + i * 108} cy={206} r={7} className="pv-node" style={d(i * 2.3)} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth={1.4} />
        <text x={104 + i * 108} y={209} fontSize={9} fill={MUTE} fontFamily="monospace">{t}</text>
        {i < 2 && <line x1={150 + i * 108} y1={206} x2={176 + i * 108} y2={206} stroke={LINE} className="pv-flow" />}
      </g>
    ))}
  </svg>
);

/* ---------- Machine translation: English → Telugu + Tamil through MoE adapters ---------- */
const Mt = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="English to Telugu and Tamil translation animation">
    {/* source */}
    <text x={14} y={80} fontSize={9} fill={MUTE} fontFamily="monospace">English</text>
    <rect x={14} y={88} width={96} height={44} rx={10} fill="rgba(255,255,255,0.07)" stroke={LINE} />
    <text x={62} y={115} fontSize={11} fill="#fff" textAnchor="middle" fontFamily="monospace">Good morning</text>
    <path d="M110 110 H134" stroke={C} strokeWidth={1.4} className="pv-flow" />

    {/* encoder with MoE adapters */}
    <rect x={134} y={34} width={120} height={150} rx={14} fill="rgba(255,255,255,0.03)" stroke={LINE} />
    <text x={194} y={52} fontSize={9} fill={MUTE} textAnchor="middle" fontFamily="monospace">MoE adapters</text>
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={144 + i * 36} y={62} width={30} height={46} rx={8} className="pv-expert" style={d(i * 2.2)} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth={1.4} />
        <text x={159 + i * 36} y={90} fontSize={10} fill="#fff" textAnchor="middle" fontFamily="monospace">E{i + 1}</text>
      </g>
    ))}
    <text x={194} y={130} fontSize={8} fill={E} textAnchor="middle" fontFamily="monospace">document memory</text>
    {Array.from({ length: 9 }).map((_, i) => (
      <circle key={i} cx={148 + i * 12} cy={146} r={3} fill={E} className="pv-pulse" style={d(i * 0.2)} />
    ))}
    <text x={194} y={172} fontSize={8} fill={MUTE} textAnchor="middle" fontFamily="monospace">beam search + MBR</text>

    {/* targets */}
    {[
      { lang: "Telugu", word: "శుభోదయం", y: 42 },
      { lang: "Tamil", word: "காலை வணக்கம்", y: 122 },
    ].map((t, i) => (
      <g key={t.lang} className="pv-appear" style={d(i * 0.6)}>
        <text x={272} y={t.y - 6} fontSize={9} fill={MUTE} fontFamily="monospace">{t.lang}</text>
        <path d={`M254 ${i ? 128 : 88} L272 ${t.y + 22}`} stroke={E} strokeWidth={1.3} className="pv-flow" />
        <rect x={272} y={t.y} width={114} height={44} rx={10} fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.6)" />
        <text x={329} y={t.y + 27} fontSize={12} fill="#fff" textAnchor="middle">{t.word}</text>
      </g>
    ))}
    <text x={200} y={216} fontSize={9} fill={MUTE} textAnchor="middle" fontFamily="monospace">English → Telugu · Tamil</text>
  </svg>
);

/* ---------- Lip-sync: audio waveform → cross-modal attention → mouth ---------- */
const BARS = 26;

const LipSync = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Speech-driven lip synchronisation animation">
    <text x={20} y={30} fontSize={9} fill={MUTE} fontFamily="monospace">audio · wav2vec 2.0</text>
    {Array.from({ length: BARS }).map((_, i) => {
      const h = 16 + ((i * 37) % 34);
      return (
        <rect
          key={i}
          x={26 + i * 13.4}
          y={70 - h / 2}
          width={6}
          height={h}
          rx={3}
          fill={i % 5 === 2 ? C : "rgba(255,255,255,0.85)"}
          className="pv-wave"
          style={d((i % 9) * 0.11)}
        />
      );
    })}

    {/* cross-modal attention */}
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M${80 + i * 60} 104 Q${100 + i * 50} 130 ${158 + i * 21} 160`}
        fill="none"
        stroke={I}
        strokeWidth={1.2}
        className="pv-flow"
        style={d(i * 0.15)}
      />
    ))}
    <text x={20} y={128} fontSize={9} fill={I} fontFamily="monospace">cross-modal attention</text>

    {/* face / lips */}
    <ellipse cx={200} cy={192} rx={66} ry={36} fill="rgba(255,255,255,0.04)" stroke={LINE} />
    <ellipse cx={200} cy={192} rx={34} ry={9} fill="#be123c" className="pv-mouth" />
    <path d="M164 192 Q200 176 236 192" fill="none" stroke="#fda4af" strokeWidth={2} strokeLinecap="round" />
    <path d="M164 192 Q200 210 236 192" fill="none" stroke="#fda4af" strokeWidth={2} strokeLinecap="round" />
    <text x={200} y={234} fontSize={9} fill={MUTE} textAnchor="middle" fontFamily="monospace">lip-region encoder</text>
  </svg>
);


/* ================= Hrud.ai project visuals ================= */

/* Job Galaxy: filters → daily feed, plus the supply / demand monitor */
const Galaxy = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Job feed and demand monitor animation">
    {["Country", "Role", "Experience"].map((t, i) => (
      <g key={t}>
        <rect x={18 + i * 66} y={18} width={60} height={22} rx={11} fill="rgba(255,255,255,0.07)" stroke={LINE} />
        <text x={48 + i * 66} y={33} fontSize={9} fill="#fff" textAnchor="middle" fontFamily="monospace">{t}</text>
      </g>
    ))}
    <path d="M214 29 H246" stroke={C} strokeWidth={1.5} className="pv-flow" />
    <rect x={250} y={10} width={136} height={92} rx={10} fill="rgba(255,255,255,0.05)" stroke={LINE} />
    <text x={260} y={26} fontSize={8} fill={E} fontFamily="monospace">daily jobs · for you</text>
    {[0, 1, 2].map((i) => (
      <g key={i} className="pv-appear" style={d(i * 0.4)}>
        <circle cx={266} cy={46 + i * 18} r={4} fill={C} />
        <rect x={276} y={42 + i * 18} width={[92, 78, 64][i]} height={5} rx={2.5} fill="rgba(255,255,255,0.75)" />
      </g>
    ))}
    <text x={18} y={128} fontSize={9} fill={MUTE} fontFamily="monospace">demand monitor</text>
    <line x1={18} y1={210} x2={382} y2={210} stroke={LINE} />
    <polyline points="18,190 80,184 140,176 200,168 260,150 320,128 382,108" fill="none" stroke={C} strokeWidth={2.2} className="pv-line" />
    <polyline points="18,196 80,192 140,180 200,160 260,134 320,112 382,84" fill="none" stroke={E} strokeWidth={2.2} className="pv-line" style={d(0.3)} />
    <text x={20} y={226} fontSize={8} fill={C} fontFamily="monospace">supply</text>
    <text x={64} y={226} fontSize={8} fill={E} fontFamily="monospace">demand</text>
    <circle cx={262} cy={140} r={5} fill="#facc15" />
    <circle cx={262} cy={140} r={5} fill="none" stroke="#facc15" className="pv-ping" />
    <text x={270} y={160} fontSize={8} fill="#facc15" fontFamily="monospace">alert specialists</text>
  </svg>
);

/* DevTools Control Center: repos grid + 7-check policy engine + health */
const Devtools = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Developer control plane animation">
    <text x={18} y={22} fontSize={9} fill={MUTE} fontFamily="monospace">100+ repos · 55 databases</text>
    {Array.from({ length: 40 }).map((_, i) => (
      <rect key={i} x={18 + (i % 8) * 24} y={34 + Math.floor(i / 8) * 24} width={18} height={18} rx={4} className="pv-light" style={d(((i * 7) % 20) * 0.12)} fill="rgba(255,255,255,0.07)" />
    ))}
    <rect x={226} y={14} width={160} height={146} rx={12} fill="rgba(255,255,255,0.04)" stroke={LINE} />
    <text x={238} y={32} fontSize={9} fill={C} fontFamily="monospace">policy engine · 7 checks</text>
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <g key={i}>
        <circle cx={246} cy={50 + i * 15} r={5} fill="none" stroke={LINE} />
        <path d={`M243.5 ${50 + i * 15} l2 2.2 l4 -4.4`} fill="none" stroke={E} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="pv-check" style={d(i * 0.35)} />
        <rect x={260} y={47 + i * 15} width={[104, 90, 98, 76, 92, 84, 100][i]} height={5} rx={2.5} fill="rgba(255,255,255,0.35)" />
      </g>
    ))}
    <text x={18} y={176} fontSize={9} fill={MUTE} fontFamily="monospace">integration health</text>
    <rect x={18} y={186} width={364} height={10} rx={5} fill="rgba(255,255,255,0.07)" />
    <rect x={18} y={186} width={300} height={10} rx={5} fill={E} className="pv-bar" />
    <circle cx={346} cy={218} r={5} fill="#facc15" className="pv-pulse" />
    <text x={356} y={221} fontSize={8} fill="#facc15" fontFamily="monospace">alert</text>
    <text x={18} y={221} fontSize={8} fill={MUTE} fontFamily="monospace">expiry &amp; downgrade monitoring</text>
  </svg>
);

/* Chatbot: voice/text question → grounded retrieval → answer */
const Chatbot = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Voice and text chatbot animation">
    <rect x={200} y={22} width={170} height={36} rx={14} fill="rgba(34,211,238,0.18)" stroke={C} className="pv-appear" />
    <rect x={214} y={34} width={110} height={5} rx={2.5} fill="#fff" className="pv-appear" />
    <rect x={214} y={44} width={70} height={5} rx={2.5} fill="rgba(255,255,255,0.6)" className="pv-appear" />
    <circle cx={34} cy={40} r={14} fill="rgba(34,211,238,0.12)" stroke={C} />
    <circle cx={34} cy={40} r={14} fill="none" stroke={C} className="pv-ping" />
    {[0, 1, 2, 3, 4].map((i) => (
      <rect key={i} x={72 + i * 11} y={32} width={5} height={16} rx={2.5} fill={C} className="pv-wave" style={d(i * 0.12)} />
    ))}
    {["FAQs", "Courses"].map((t, i) => (
      <g key={t}>
        <rect x={20} y={96 + i * 44} width={64} height={30} rx={8} fill="rgba(255,255,255,0.07)" stroke={LINE} />
        <text x={52} y={115 + i * 44} fontSize={10} fill="#fff" textAnchor="middle" fontFamily="monospace">{t}</text>
        <path d={`M84 ${111 + i * 44} Q120 124 148 ${126 + i * 8}`} fill="none" stroke={E} strokeWidth={1.3} className="pv-flow" />
      </g>
    ))}
    <text x={96} y={86} fontSize={8} fill={E} fontFamily="monospace">grounded retrieval</text>
    <rect x={148} y={104} width={236} height={86} rx={14} fill="rgba(255,255,255,0.06)" stroke={LINE} />
    {[0, 1, 2].map((i) => (
      <rect key={i} x={164} y={120 + i * 18} width={[196, 170, 112][i]} height={6} rx={3} fill="rgba(255,255,255,0.75)" className="pv-type" style={d(i * 0.3)} />
    ))}
    <text x={148} y={216} fontSize={9} fill={MUTE} fontFamily="monospace">voice + text · on-topic answers only</text>
  </svg>
);

/* Career advisor: profile → eligibility → learning path */
const Career = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Career counselling flow animation">
    <rect x={18} y={20} width={116} height={116} rx={12} fill="rgba(255,255,255,0.05)" stroke={LINE} />
    <text x={28} y={38} fontSize={9} fill={C} fontFamily="monospace">your profile</text>
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect x={28} y={50 + i * 20} width={96} height={12} rx={6} fill="rgba(255,255,255,0.08)" />
        <rect x={28} y={50 + i * 20} width={[84, 60, 72, 48][i]} height={12} rx={6} fill={C} className="pv-bar" style={d(i * 0.25)} />
      </g>
    ))}
    <path d="M138 78 H170" stroke={C} strokeWidth={1.5} className="pv-flow" />
    <circle cx={206} cy={78} r={30} fill="none" stroke={LINE} strokeWidth={6} />
    <circle cx={206} cy={78} r={30} fill="none" stroke={E} strokeWidth={6} strokeLinecap="round" className="pv-line" style={{ strokeDasharray: 190 }} />
    <text x={206} y={82} fontSize={10} fill="#fff" textAnchor="middle" fontFamily="monospace">eligible</text>
    <path d="M240 78 H270" stroke={E} strokeWidth={1.5} className="pv-flow" />
    <text x={282} y={42} fontSize={9} fill={MUTE} fontFamily="monospace">learning path</text>
    <line x1={292} y1={75} x2={292} y2={123} stroke={E} strokeWidth={1.2} className="pv-flow" />
    {[0, 1, 2].map((i) => (
      <g key={i} className="pv-appear" style={d(i * 0.45)}>
        <circle cx={292} cy={66 + i * 34} r={9} fill="rgba(16,185,129,0.2)" stroke={E} />
        <text x={292} y={70 + i * 34} fontSize={9} fill="#fff" textAnchor="middle" fontFamily="monospace">{i + 1}</text>
        <rect x={310} y={61 + i * 34} width={[64, 76, 54][i]} height={9} rx={4.5} fill="rgba(255,255,255,0.7)" />
      </g>
    ))}
    <text x={18} y={176} fontSize={9} fill={MUTE} fontFamily="monospace">asks first · then recommends</text>
    <rect x={18} y={190} width={364} height={22} rx={11} fill="rgba(255,255,255,0.05)" stroke={LINE} />
    <text x={32} y={205} fontSize={9} fill={I} fontFamily="monospace">per-user rate limits · server-side keys</text>
  </svg>
);

/* NTRview Log: live interview → silence check → transcript → feedback */
const Interview = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Interview practice animation">
    <circle cx={34} cy={36} r={9} fill="#ef4444" className="pv-pulse" />
    <text x={50} y={40} fontSize={9} fill="#fca5a5" fontFamily="monospace">recording</text>
    {Array.from({ length: 22 }).map((_, i) => (
      <rect key={i} x={120 + i * 11.5} y={26} width={5} height={20} rx={2.5} fill={i % 6 === 2 ? C : "rgba(255,255,255,0.8)"} className="pv-wave" style={d((i % 8) * 0.1)} />
    ))}
    <rect x={18} y={64} width={168} height={22} rx={11} fill="rgba(250,204,21,0.12)" stroke="rgba(250,204,21,0.5)" />
    <text x={30} y={79} fontSize={9} fill="#facc15" fontFamily="monospace">silence check · instant</text>
    <text x={18} y={110} fontSize={9} fill={MUTE} fontFamily="monospace">live transcript</text>
    {[0, 1, 2].map((i) => (
      <rect key={i} x={18} y={120 + i * 16} width={[170, 150, 108][i]} height={6} rx={3} fill="rgba(255,255,255,0.7)" className="pv-type" style={d(i * 0.35)} />
    ))}
    <rect x={208} y={64} width={174} height={126} rx={12} fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.5)" />
    <text x={220} y={82} fontSize={9} fill={E} fontFamily="monospace">AI feedback</text>
    {["Clarity", "Depth", "Pace"].map((t, i) => (
      <g key={t}>
        <text x={220} y={104 + i * 28} fontSize={8} fill="#fff" fontFamily="monospace">{t}</text>
        <rect x={220} y={110 + i * 28} width={150} height={8} rx={4} fill="rgba(255,255,255,0.1)" />
        <rect x={220} y={110 + i * 28} width={[124, 96, 112][i]} height={8} rx={4} fill={E} className="pv-bar" style={d(i * 0.3)} />
      </g>
    ))}
    <text x={18} y={226} fontSize={8} fill={MUTE} fontFamily="monospace">room tailored from the interviewer profile PDF</text>
  </svg>
);

/* Pulse Celebrations v2: v1 → v2 mockup, backed by a new Supabase schema */
const Pulse = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Product v2 redesign animation">
    <rect x={30} y={26} width={86} height={150} rx={14} fill="rgba(255,255,255,0.04)" stroke={LINE} />
    <text x={73} y={44} fontSize={9} fill={MUTE} textAnchor="middle" fontFamily="monospace">v1</text>
    {[0, 1, 2].map((i) => (
      <rect key={i} x={42} y={56 + i * 30} width={62} height={20} rx={5} fill="rgba(255,255,255,0.08)" />
    ))}
    <path d="M124 100 H168" stroke={C} strokeWidth={1.6} className="pv-flow" />
    <rect x={176} y={14} width={104} height={174} rx={16} fill="rgba(34,211,238,0.08)" stroke={C} />
    <text x={228} y={34} fontSize={9} fill={C} textAnchor="middle" fontFamily="monospace">v2 mockup</text>
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={190} y={46 + i * 32} width={76} height={22} rx={6} fill={i === 0 ? "rgba(34,211,238,0.45)" : "rgba(255,255,255,0.12)"} className="pv-appear" style={d(i * 0.3)} />
    ))}
    <path d="M286 100 H312" stroke={E} strokeWidth={1.6} className="pv-flow" />
    <text x={346} y={26} fontSize={8} fill={E} textAnchor="middle" fontFamily="monospace">Supabase schema</text>
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={316} y={36 + i * 46} width={60} height={34} rx={6} fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.55)" />
        <rect x={324} y={45 + i * 46} width={32} height={4} rx={2} fill="rgba(255,255,255,0.7)" />
        <rect x={324} y={54 + i * 46} width={44} height={4} rx={2} fill="rgba(255,255,255,0.35)" />
      </g>
    ))}
    <line x1={346} y1={70} x2={346} y2={82} stroke={E} className="pv-flow" />
    <line x1={346} y1={116} x2={346} y2={128} stroke={E} className="pv-flow" />
    <circle cx={228} cy={214} r={5} fill={E} />
    <circle cx={228} cy={214} r={5} fill="none" stroke={E} className="pv-ping" />
    <text x={240} y={217} fontSize={9} fill={E} fontFamily="monospace">live users</text>
  </svg>
);

/* Client delivery: brief → build → test → approved, in two days */
const STAGES = ["Brief", "Build", "Test", "Approved"];
const Delivery = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Client delivery timeline animation">
    <rect x={18} y={20} width={50} height={36} rx={6} fill="rgba(255,255,255,0.07)" stroke={LINE} />
    <path d="M18 24 L43 42 L68 24" fill="none" stroke={MUTE} strokeWidth={1.4} />
    <text x={78} y={42} fontSize={9} fill={MUTE} fontFamily="monospace">requirements by email</text>
    <line x1={52} y1={110} x2={348} y2={110} stroke={LINE} strokeWidth={1.5} />
    {STAGES.map((s, i) => (
      <g key={s}>
        <circle cx={52 + i * 98.6} cy={110} r={14} className="pv-node" style={d(i * 1.7)} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth={1.4} />
        <text x={52 + i * 98.6} y={114} fontSize={9} fill="#fff" textAnchor="middle" fontFamily="monospace">{i + 1}</text>
        <text x={52 + i * 98.6} y={144} fontSize={9} fill={i === 3 ? E : MUTE} textAnchor="middle" fontFamily="monospace">{s}</text>
      </g>
    ))}
    <circle r={5} fill={C}>
      <animateMotion dur="7s" repeatCount="indefinite" path="M52 110 L348 110" keyPoints="0;1;1;0;0" keyTimes="0;0.7;0.9;0.9;1" calcMode="linear" />
    </circle>
    <rect x={150} y={168} width={100} height={30} rx={15} fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.6)" />
    <path d="M168 183 l6 6 l12 -12" fill="none" stroke={E} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="pv-check" />
    <text x={196} y={187} fontSize={10} fill="#fff" fontFamily="monospace">2 days</text>
    <text x={200} y={222} fontSize={9} fill={MUTE} textAnchor="middle" fontFamily="monospace">delivered, tested, approved by the client</text>
  </svg>
);

const MAP: Record<VisualKind, () => React.JSX.Element> = {
  rag: Rag,
  agents: Agents,
  mt: Mt,
  lipsync: LipSync,
  galaxy: Galaxy,
  devtools: Devtools,
  chatbot: Chatbot,
  career: Career,
  interview: Interview,
  pulse: Pulse,
  delivery: Delivery,
};

/** Dark, animated "mini product" preview — a themed take on the reference's animated mocks. */
export const ProjectVisual = ({ kind, className = "" }: { kind: VisualKind; className?: string }) => {
  const Visual = MAP[kind];
  return (
    <div
      className={`pv relative flex items-center justify-center overflow-hidden bg-[#06090d] ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.10), transparent 60%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "auto, 28px 28px, 28px 28px",
      }}
    >
      <div className="h-full w-full max-w-[560px] p-4 md:p-6">
        <Visual />
      </div>
    </div>
  );
};
