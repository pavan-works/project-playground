import type { CSSProperties } from "react";

export type VisualKind = "rag" | "agents" | "mt" | "lipsync";

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

/* ---------- Agents: plan → retrieve → analyze → rank ---------- */
const STEPS = ["Plan", "Retrieve", "Analyze", "Rank"];

const Agents = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Multi-agent workflow animation">
    <line x1={52} y1={62} x2={348} y2={62} stroke={LINE} strokeWidth={1.5} />
    {STEPS.map((s, i) => (
      <g key={s}>
        <rect
          x={14 + i * 100}
          y={44}
          width={76}
          height={36}
          rx={18}
          className="pv-node"
          style={d(i * 1.63)}
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth={1.4}
        />
        <text x={52 + i * 100} y={66} fontSize={11} fill="#fff" textAnchor="middle" fontFamily="monospace">
          {s}
        </text>
      </g>
    ))}
    {/* packet */}
    <circle r={5} fill={C}>
      <animateMotion dur="7s" repeatCount="indefinite" path="M52 62 L352 62" keyPoints="0;1;1;0;0" keyTimes="0;0.7;0.9;0.9;1" calcMode="linear" />
    </circle>
    {/* tool call arc under "Retrieve" */}
    <path d="M122 84 Q152 120 182 84" fill="none" stroke={I} strokeWidth={1.4} className="pv-flow" />
    <text x={152} y={112} fontSize={8} fill={I} textAnchor="middle" fontFamily="monospace">tools · memory</text>

    {/* ranked output */}
    <text x={20} y={138} fontSize={9} fill={MUTE} fontFamily="monospace">ranked matches</text>
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect x={20} y={148 + i * 20} width={360} height={14} rx={7} fill="rgba(255,255,255,0.05)" />
        <rect
          x={20}
          y={148 + i * 20}
          width={[330, 270, 210, 150][i]}
          height={14}
          rx={7}
          fill={i === 0 ? E : "rgba(34,211,238,0.55)"}
          className="pv-bar"
          style={d(i * 0.2)}
        />
        <text x={30} y={158 + i * 20} fontSize={8} fill="#04130d" fontFamily="monospace">
          #{i + 1}
        </text>
      </g>
    ))}
  </svg>
);

/* ---------- Machine translation: tokens → MoE adapters (+ doc memory) → target ---------- */
const Mt = () => (
  <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Machine translation with adapter experts animation">
    {/* source */}
    <text x={20} y={44} fontSize={9} fill={MUTE} fontFamily="monospace">source</text>
    {["नमस्ते", "दुनिया", "दोस्त"].map((t, i) => (
      <g key={t}>
        <rect x={20} y={54 + i * 44} width={72} height={30} rx={8} fill="rgba(255,255,255,0.07)" stroke={LINE} />
        <text x={56} y={74 + i * 44} fontSize={12} fill="#fff" textAnchor="middle">{t}</text>
        <path d={`M92 ${69 + i * 44} L124 ${96 + i * 14}`} stroke={C} strokeWidth={1.2} className="pv-flow" />
      </g>
    ))}

    {/* encoder with MoE adapters */}
    <rect x={124} y={36} width={150} height={150} rx={16} fill="rgba(255,255,255,0.03)" stroke={LINE} />
    <text x={199} y={54} fontSize={9} fill={MUTE} textAnchor="middle" fontFamily="monospace">MoE adapters</text>
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={138 + i * 44} y={68} width={36} height={52} rx={8} className="pv-expert" style={d(i * 2.2)} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth={1.4} />
        <text x={156 + i * 44} y={98} fontSize={10} fill="#fff" textAnchor="middle" fontFamily="monospace">E{i + 1}</text>
      </g>
    ))}
    <text x={199} y={146} fontSize={8} fill={E} textAnchor="middle" fontFamily="monospace">document memory</text>
    {Array.from({ length: 10 }).map((_, i) => (
      <circle key={i} cx={146 + i * 12} cy={160} r={3} fill={E} className="pv-pulse" style={d(i * 0.2)} />
    ))}

    {/* target */}
    <text x={308} y={44} fontSize={9} fill={MUTE} fontFamily="monospace">target</text>
    {["Hello", "world", "friend"].map((t, i) => (
      <g key={t} className="pv-appear" style={d(i * 0.45)}>
        <path d={`M274 ${96 + i * 14} L304 ${69 + i * 44}`} stroke={E} strokeWidth={1.2} className="pv-flow" />
        <rect x={304} y={54 + i * 44} width={76} height={30} rx={8} fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.6)" />
        <text x={342} y={74 + i * 44} fontSize={12} fill="#fff" textAnchor="middle" fontFamily="monospace">{t}</text>
      </g>
    ))}
    <text x={200} y={214} fontSize={9} fill={MUTE} textAnchor="middle" fontFamily="monospace">beam search → MBR rerank</text>
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

const MAP: Record<VisualKind, () => React.JSX.Element> = {
  rag: Rag,
  agents: Agents,
  mt: Mt,
  lipsync: LipSync,
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
