/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Menu, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Zap,
  Cpu,
  Globe,
  Code,
  Terminal,
  Database,
  Layers,
  Search,
  Activity,
  Box,
  Eye,
  AudioWaveform as Audio,
  FileText,
  ExternalLink,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { PORTFOLIO_DATA, type Project } from "./data";
import portraitCutout from "./assets/portrait-cutout.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-8 md:px-16 py-8 mix-blend-difference">
    <div className="flex items-center gap-8">
      <a href="#home" className="flex items-center gap-4 group">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
          <span className="text-black font-headline font-bold text-xs">SP</span>
        </div>
      </a>
      <div className="h-6 w-[1px] bg-white/10 hidden lg:block" />
      <div className="flex flex-col hidden lg:flex">
        <span className="text-white font-mono text-[9px] tracking-[0.4em] uppercase opacity-60 leading-none mb-1">
          {PORTFOLIO_DATA.role}
        </span>
      </div>
    </div>
    <div className="flex items-center gap-12 text-[var(--rv-muted)] font-mono text-[9px] tracking-[0.4em] uppercase">
      <a href="#about" className="hover:text-[var(--gold)] transition-colors hidden md:block">About</a>
      <a href="#expertise" className="hover:text-[var(--gold)] transition-colors hidden md:block">Expertise</a>
      <a href="#works" className="hover:text-[var(--gold)] transition-colors hidden md:block">Works</a>
      <button className="group relative w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <Menu className="w-4 h-4 relative z-10" />
      </button>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center pt-24 pb-8 px-6 md:px-14 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-[var(--gold)]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Typographic lockup — bottom half, top layer */}
      <div className="absolute inset-x-0 top-[16vh] md:top-[14vh] z-30 pointer-events-none px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline font-black text-white leading-[0.85] tracking-[-0.05em] text-[13vw] md:text-[10.5vw] text-center whitespace-nowrap"
        >
          AI
          <span className="inline-flex items-center justify-center align-middle mx-2 md:mx-3 relative -top-[0.08em]">
            <span className="inline-flex items-center justify-center w-[0.7em] h-[0.7em] rounded-full border-[0.055em] border-white">
              <ArrowUpRight className="w-[0.42em] h-[0.42em]" strokeWidth={2.5} />
            </span>
          </span>
          Engineer
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline font-black leading-[0.85] tracking-[-0.05em] text-[12vw] md:text-[9.5vw] text-center whitespace-nowrap -mt-[1.5vw]"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
            color: "transparent",
          }}
        >
          &amp; ML Researcher
        </motion.h2>
      </div>

      {/* Portrait — centered, on TOP of typography (head clips text) */}
      <motion.img
        src={portraitCutout}
        alt="Solige Pullaiah"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 md:bottom-14 left-1/2 -translate-x-1/2 h-[62vh] md:h-[72vh] w-auto object-contain object-bottom z-40 pointer-events-none select-none drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
      />

      {/* Bottom meta row */}
      <div className="absolute bottom-6 left-0 right-0 z-50 w-full px-6 md:px-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white/70 text-sm md:text-base font-sans"
        >
          based in {PORTFOLIO_DATA.location}.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center gap-4 md:gap-6 flex-wrap"
        >
          <span className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase hidden md:inline">Worked with</span>
          {["Hrud.ai", "CodeForces", "OpenAI", "HuggingFace", "Supabase"].map((c) => (
            <span key={c} className="text-white/50 text-xs font-headline tracking-wide">
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-40 px-8 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
      <div className="relative">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-[var(--gold)]" />
          <span className="text-[var(--gold)] font-mono text-xs tracking-[0.5em] uppercase">01 / Profile</span>
        </div>
        <h2 className="text-6xl md:text-8xl font-headline font-bold mb-12 leading-none tracking-tighter">
          Engineering the <br />
          <span className="italic font-display font-light text-white/60">Neural</span> Future
        </h2>
        <p className="text-2xl text-[var(--rv-muted)] leading-relaxed mb-16 font-light max-w-xl">
          {PORTFOLIO_DATA.summary}
        </p>
        
        <button className="group relative px-10 py-5 bg-white text-black rounded-full font-bold overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)] to-[var(--indigo)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500 uppercase tracking-widest text-xs">
            Download Resume <ArrowUpRight className="w-5 h-5" />
          </span>
        </button>
      </div>

      <div className="relative mt-24 lg:mt-0">
        <div className="glass-panel p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h3 className="text-3xl font-headline font-bold mb-8">Identity</h3>
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">Location</span>
              <span className="text-xl font-light">{PORTFOLIO_DATA.location}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">Current Role</span>
              <span className="text-xl font-light">{PORTFOLIO_DATA.role}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">Focus</span>
              <span className="text-xl font-light">End-to-end ML & RAG Architectures</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-40 px-8 max-w-7xl mx-auto relative bg-white/[0.01]">
    <div className="absolute inset-0 dot-pattern opacity-10" />
    <div className="flex items-center gap-4 mb-24">
      <div className="w-12 h-px bg-[var(--emerald)]" />
      <span className="text-[var(--emerald)] font-mono text-xs tracking-[0.5em] uppercase">02 / Timeline</span>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {PORTFOLIO_DATA.experience.map((exp, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group p-10 rounded-[2.5rem] bg-[var(--surface)] border border-white/10 hover:border-[var(--emerald)]/30 transition-all duration-500"
        >
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] font-mono text-[var(--emerald)] tracking-widest uppercase px-4 py-1 rounded-full bg-[var(--emerald)]/10">
              {exp.period}
            </span>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--emerald)]/20 transition-colors">
              <Activity className="w-6 h-6 text-white/20 group-hover:text-[var(--emerald)]" />
            </div>
          </div>
          <h4 className="text-3xl font-headline font-bold mb-2 tracking-tight">{exp.company}</h4>
          <p className="text-sm text-[var(--rv-muted)] font-mono uppercase tracking-[0.2em] mb-6">{exp.role}</p>
          <p className="text-[var(--rv-muted)] leading-relaxed font-light">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Expertise = () => {
  return (
    <section id="expertise" className="py-40 bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-[0.1]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-12 h-px bg-[var(--gold)]" />
            <span className="text-[var(--gold)] font-mono text-xs tracking-[0.5em] uppercase">03 / Tech Stack</span>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 md:gap-6">
            {(PORTFOLIO_DATA as any).techStack.map((skill: any, idx: number) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="group relative bg-[var(--surface)] border border-white/20 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center cursor-crosshair transition-all duration-500 hover:border-[var(--gold)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)] aspect-square"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[var(--gold)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  {skill.imageUrl ? (
                    <img 
                      src={skill.imageUrl} 
                      alt={skill.name} 
                      className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg animate-pulse" />
                  )}
                </div>
                <h3 className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase text-[var(--rv-muted)] group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[var(--gold)]/40 group-hover:w-1/3 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-12 h-px bg-[var(--gold)]" />
            <span className="text-[var(--gold)] font-mono text-xs tracking-[0.5em] uppercase">04 / Tools</span>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 md:gap-6">
            {(PORTFOLIO_DATA as any).aiTools.map((skill: any, idx: number) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="group relative bg-[var(--surface)] border border-white/20 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center cursor-crosshair transition-all duration-500 hover:border-[var(--gold)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)] aspect-square"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[var(--gold)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  {skill.imageUrl ? (
                    <img 
                      src={skill.imageUrl} 
                      alt={skill.name} 
                      className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg animate-pulse" />
                  )}
                </div>
                <h3 className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase text-[var(--rv-muted)] group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[var(--gold)]/40 group-hover:w-1/3 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  item,
  accent,
  onOpen,
}: {
  item: Project;
  accent: "gold" | "emerald";
  onOpen: (p: Project) => void;
}) => {
  const accentVar = accent === "gold" ? "var(--gold)" : "var(--emerald)";
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative flex flex-col text-left bg-[var(--rv-card)] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] cursor-pointer"
      style={{ borderColor: undefined }}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--rv-card)] via-transparent to-transparent" />
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: accentVar }} />
          <span className="text-[10px] font-mono text-white/60 tracking-[0.3em] uppercase">
            {item.category}
          </span>
        </div>
        <div
          className="absolute top-8 right-8 w-14 h-14 rounded-full glass-panel border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
          style={{ background: `${accent === "gold" ? "rgba(245,158,11,0.15)" : "rgba(16,185,129,0.15)"}` }}
        >
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="p-12 pt-6 flex flex-col h-full">
        <h3
          className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-3 leading-none transition-colors duration-500"
          style={{ color: undefined }}
        >
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="text-[var(--rv-muted)] text-sm font-light leading-relaxed mb-6">
            {item.subtitle}
          </p>
        )}
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
          <span
            className="text-[10px] font-mono tracking-[0.3em] uppercase"
            style={{ color: accentVar }}
          >
            View Case Study →
          </span>
          {item.year && (
            <span className="ml-auto text-[10px] font-mono text-white/30 tracking-widest">
              {item.year}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
};

const DetailModal = ({
  item,
  onClose,
  accent,
}: {
  item: Project | null;
  onClose: () => void;
  accent: "gold" | "emerald";
}) => {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  const accentVar = accent === "gold" ? "var(--gold)" : "var(--emerald)";
  const accentSoft = accent === "gold" ? "rgba(245,158,11,0.15)" : "rgba(16,185,129,0.15)";

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xl flex items-start md:items-center justify-center overflow-y-auto px-4 py-10 md:py-16"
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[var(--rv-card)] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.7)]"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--rv-card)] via-[var(--rv-card)]/40 to-transparent" />
              <div className="absolute bottom-8 left-8 md:left-12 right-8 md:right-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: accentVar }} />
                  <span
                    className="text-[10px] font-mono tracking-[0.4em] uppercase"
                    style={{ color: accentVar }}
                  >
                    {item.category}
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter leading-none">
                  {item.title}
                </h2>
                {item.subtitle && (
                  <p className="mt-4 text-white/70 text-base md:text-lg font-light max-w-2xl">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-10">
                {item.overview && (
                  <div>
                    <span className="text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase">Overview</span>
                    <p className="mt-4 text-white/75 leading-relaxed text-base md:text-lg font-light">
                      {item.overview}
                    </p>
                  </div>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase">
                      Key Highlights
                    </span>
                    <ul className="mt-4 space-y-3">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex gap-4 text-white/70 leading-relaxed">
                          <span
                            className="mt-2 shrink-0 w-2 h-2 rounded-full"
                            style={{ background: accentVar }}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.metrics && item.metrics.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase">Results</span>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {item.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center"
                        >
                          <div className="font-headline text-2xl md:text-3xl font-bold" style={{ color: accentVar }}>
                            {m.value}
                          </div>
                          <div className="mt-2 text-[9px] font-mono text-white/40 tracking-widest uppercase">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <aside className="space-y-8">
                {item.role && (
                  <div>
                    <span className="text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase">Role</span>
                    <p className="mt-3 text-white/80 text-sm leading-relaxed">{item.role}</p>
                  </div>
                )}
                {item.year && (
                  <div>
                    <span className="text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase">Timeline</span>
                    <p className="mt-3 text-white/80 text-sm">{item.year}</p>
                  </div>
                )}
                {item.tech && item.tech.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase">Stack</span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase text-white/70 border"
                          style={{ borderColor: accentSoft, background: accentSoft }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-4">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 px-5 py-4 rounded-full border border-white/10 hover:border-white/40 transition-colors"
                    >
                      <span className="flex items-center gap-3 text-sm font-mono tracking-widest uppercase text-white/80">
                        <Github className="w-4 h-4" /> GitHub
                      </span>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    </a>
                  )}
                  {item.paperUrl && (
                    <a
                      href={item.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 px-5 py-4 rounded-full border transition-colors"
                      style={{ borderColor: accentSoft }}
                    >
                      <span className="flex items-center gap-3 text-sm font-mono tracking-widest uppercase" style={{ color: accentVar }}>
                        <FileText className="w-4 h-4" /> Read Paper
                      </span>
                      <ExternalLink className="w-4 h-4" style={{ color: accentVar }} />
                    </a>
                  )}
                </div>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Works = () => {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [openPaper, setOpenPaper] = useState<Project | null>(null);

  return (
  <section id="works" className="py-40 px-8 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--emerald)]/5 rounded-full blur-[150px] pointer-events-none" />
    
    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-[var(--gold)]" />
          <span className="text-[var(--gold)] font-mono text-xs tracking-[0.5em] uppercase">05 / Portfolio</span>
        </div>
        <h2 className="text-7xl md:text-8xl font-headline font-bold tracking-tighter leading-tight">Selected <br /><span className="text-white/10 italic">Works</span></h2>
      </motion.div>
      <p className="text-[var(--rv-muted)] font-mono text-[10px] tracking-widest uppercase max-w-xs text-right hidden md:block leading-loose">
        A curated collection of neural artifacts and computational experiments executed with absolute precision.
      </p>
    </div>

    {/* Engineering Projects Section */}
    <div className="mb-32">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[var(--gold)] font-mono text-xs tracking-[0.4em] uppercase">Engineering Projects</span>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {PORTFOLIO_DATA.projects.map((project) => (
          <ProjectCard key={project.id} item={project as Project} accent="gold" onOpen={setOpenProject} />
        ))}
      </div>
    </div>

    {/* Research Papers Section */}
    <div>
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[var(--emerald)] font-mono text-xs tracking-[0.4em] uppercase">Research Publications</span>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {PORTFOLIO_DATA.researchPapers.map((paper) => (
          <ProjectCard key={paper.id} item={paper as Project} accent="emerald" onOpen={setOpenPaper} />
        ))}
      </div>
    </div>
    <DetailModal item={openProject} onClose={() => setOpenProject(null)} accent="gold" />
    <DetailModal item={openPaper} onClose={() => setOpenPaper(null)} accent="emerald" />
  </section>
  );
};

const CodeSnippet = () => (
  <section className="py-32 px-8 bg-white/5 overflow-hidden">
    <div className="max-w-4xl mx-auto">
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <span className="text-[9px] font-mono text-[var(--rv-muted)]/30 tracking-widest uppercase">Neural_Processor.py</span>
          <Terminal className="w-3.5 h-3.5 text-[var(--rv-muted)]/20" />
        </div>
        <div className="p-10 font-mono text-sm leading-loose">
          <pre className="text-[var(--rv-muted)]">
            <code>
              <span className="text-[var(--indigo-light)]">class</span> <span className="text-[var(--gold)]">NeuralInterface</span>:<br />
              &nbsp;&nbsp;<span className="text-[var(--indigo-light)]">def</span> <span className="text-[var(--gold)]">__init__</span>(self, synaptic_load):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;self.core = <span className="text-[var(--emerald)]">"SP-ALPHA-2026"</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;self.latency = <span className="text-orange-400">0.0012</span><br />
              <br />
              &nbsp;&nbsp;<span className="text-[var(--indigo-light)]">def</span> <span className="text-[var(--gold)]">process_intent</span>(self, prompt):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--rv-muted)]/40"># Initializing thought bridge</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;bridge = self.core.init_bridge(prompt)<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--indigo-light)]">return</span> bridge.synthesize()
            </code>
          </pre>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-32 px-8 border-t border-white/5 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-[150px] -z-10" />
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-headline font-bold text-sm">SP</span>
          </div>
          <h3 className="text-3xl font-headline font-bold tracking-tighter">Solige Pullaiah</h3>
        </div>
        <p className="text-[var(--rv-muted)]/40 text-[10px] font-mono tracking-[0.4em] uppercase leading-relaxed max-w-xs">
          © 2026 Solige Pullaiah / AI Portfolio. All neural rights reserved. Designed for the future of intelligence.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-24">
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-mono text-[var(--rv-muted)]/20 tracking-widest uppercase">Navigation</span>
          <div className="flex flex-col gap-4 text-sm font-mono tracking-widest uppercase text-[var(--rv-muted)]/60">
            <a href="#home" className="hover:text-[var(--gold)] transition-colors">Home</a>
            <a href="#about" className="hover:text-[var(--gold)] transition-colors">About</a>
            <a href="#expertise" className="hover:text-[var(--gold)] transition-colors">Expertise</a>
            <a href="#works" className="hover:text-[var(--gold)] transition-colors">Works</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-mono text-[var(--rv-muted)]/20 tracking-widest uppercase">Connect</span>
          <div className="flex flex-col gap-4 text-sm font-mono tracking-widest uppercase text-[var(--rv-muted)]/60">
            <a href="https://www.linkedin.com/in/solige-pullaiah-478462270" target="_blank" rel="noreferrer" className="hover:text-[var(--gold)] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">Github</a>
            <a href="mailto:pulipavan696@gmail.com" className="hover:text-[var(--gold)] transition-colors">Email</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-6 self-end">
        <span className="text-[9px] font-mono text-[var(--gold)] tracking-[0.5em] uppercase">Status: Available</span>
        <div className="flex items-center gap-4 border border-white/10 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm">
          <div className="w-2 h-2 bg-[var(--emerald)] rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <span className="text-[10px] font-mono text-[var(--rv-muted)]/60 uppercase tracking-widest">VSP, India / Remote</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function PortfolioLanding() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] z-[100] overflow-hidden">
        {/* grain */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        {/* top rule + green dot */}
        <div className="absolute top-8 left-10 right-10 h-px bg-white/20">
          <motion.div initial={{ left: 0 }} animate={{ left: '100%' }} transition={{ duration: 2, ease: 'easeInOut' }} className="absolute -top-[3px] size-2 rounded-full bg-[#39ff14] shadow-[0_0_16px_#39ff14]" />
        </div>

        {/* vertical labels */}
        <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 items-center gap-3 font-mono text-[11px] tracking-[0.4em] uppercase text-white/70" style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}>
          ✦ Poetry in Design
        </div>
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 items-center gap-3 font-mono text-[11px] tracking-[0.4em] uppercase text-white/70" style={{ writingMode: 'vertical-rl' }}>
          Visual Storyteller ✦
        </div>

        <div className="relative h-full w-full flex flex-col items-center justify-center px-6">
          {/* 2026 pill */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-2">
            <span className="bg-[#39ff14] text-black font-display italic text-2xl md:text-3xl px-6 py-1 rounded-full shadow-[0_0_30px_rgba(57,255,20,0.4)]">2026</span>
          </motion.div>

          {/* Portfolio lockup */}
          <div className="relative flex items-baseline justify-center leading-[0.85]">
            <motion.span
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic font-black text-white/85 text-[22vw] md:text-[15rem]"
              style={{ textShadow: '0 0 1px rgba(255,255,255,0.3)' }}
            >
              Port
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic font-black text-white/85 text-[22vw] md:text-[15rem] relative"
            >
              folio
              <sup className="text-[#39ff14] text-[0.18em] align-super font-sans not-italic ml-1">®</sup>
            </motion.span>

            {/* green cursive f overlay */}
            <motion.span
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none absolute left-1/2 -translate-x-[52%] -translate-y-[8%] font-script text-[#39ff14] text-[42vw] md:text-[30rem] leading-none drop-shadow-[0_0_40px_rgba(57,255,20,0.55)]"
            >
              f
            </motion.span>
          </div>

          {/* bottom meta row */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-10 md:mt-14 w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 items-end gap-6">
            <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-white/70">
              <div className="flex items-center gap-2"><span>↘</span> Version /</div>
              <div className="text-[#39ff14] font-display italic text-xl md:text-2xl tracking-normal mt-1">2026</div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <span className="inline-grid place-items-center size-12 rounded-full border border-white/40">
                <span className="text-white">↗</span>
              </span>
            </div>
            <div className="text-right">
              <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-white/60 mb-1">Design Executed</div>
              <div className="font-display italic text-lg md:text-2xl text-white">by {PORTFOLIO_DATA.name.toUpperCase()}</div>
              <div className="mt-2 h-px bg-[#39ff14] w-24 ml-auto" />
            </div>
          </motion.div>

          {/* corner sparkles */}
          <span className="absolute left-16 bottom-16 text-white text-lg">✦</span>
          <span className="absolute right-24 top-32 text-[#39ff14] text-sm">✦</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg)] text-[var(--rv-muted)] min-h-screen selection:bg-[var(--gold)] selection:text-black">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Works />
        <CodeSnippet />
      </main>
      <Footer />
      
      {/* Global Vignette */}
      <div className="fixed inset-0 pointer-events-none bg-radial-[circle_at_center,_transparent_0%,_var(--bg)_95%] opacity-50 z-40" />
    </div>
  );
}

