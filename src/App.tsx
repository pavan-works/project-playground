/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
} from "lucide-react";
import { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "./data";
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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-end pt-24 pb-16 px-6 md:px-14 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-[var(--gold)]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Portrait — centered, behind typography */}
      <motion.img
        src={portraitCutout}
        alt="Solige Pullaiah"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70vh] md:h-[85vh] w-auto object-contain z-10 pointer-events-none select-none drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      />

      {/* Typographic lockup */}
      <div className="relative w-full max-w-[1600px] mx-auto z-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline font-black text-white leading-[0.85] tracking-[-0.04em] text-[18vw] md:text-[15vw] text-center whitespace-nowrap"
          style={{ fontStretch: "condensed" }}
        >
          AI
          <span className="inline-flex items-center justify-center align-middle mx-2 md:mx-4 relative -top-[0.08em]">
            <span className="inline-flex items-center justify-center w-[0.75em] h-[0.75em] rounded-full border-[0.06em] border-white">
              <ArrowUpRight className="w-[0.45em] h-[0.45em]" strokeWidth={2.5} />
            </span>
          </span>
          Engineer
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline font-black leading-[0.85] tracking-[-0.04em] text-[18vw] md:text-[15vw] text-center whitespace-nowrap -mt-[2vw]"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.85)",
            color: "transparent",
          }}
        >
          &amp; ML Researcher
        </motion.h2>
      </div>

      {/* Bottom meta row */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto mt-8 md:mt-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
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
          className="flex items-center gap-6 md:gap-8 flex-wrap"
        >
          <span className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase">Worked with</span>
          {["Hrud.ai", "CodeForces", "OpenAI", "HuggingFace", "Supabase"].map((c) => (
            <span key={c} className="text-white/50 text-xs md:text-sm font-headline tracking-wide">
              {c}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-30"
      >
        <span className="text-[8px] font-mono tracking-[0.8em] uppercase">Scroll</span>
      </motion.div>
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

const Works = () => (
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
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            className="group relative flex flex-col bg-[var(--rv-card)] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[var(--gold)]/30 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--rv-card)] via-transparent to-transparent" />
              <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                <span className="text-[10px] font-mono text-white/60 tracking-[0.3em] uppercase">
                  {project.category}
                </span>
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute top-8 right-8 w-14 h-14 rounded-full glass-panel border border-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:border-[var(--gold)] transition-all duration-500 group/link"
                >
                  <Github className="w-6 h-6 text-white group-hover/link:text-black transition-colors" />
                </a>
              )}
            </div>
            <div className="p-12 pt-4 flex flex-col h-full">
              <h3 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-6 leading-none group-hover:text-[var(--gold)] transition-colors duration-500">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-3 mt-auto pt-8 border-t border-white/5">
                {project.tags?.map((tag, tIdx) => (
                  <span key={tIdx} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[9px] font-mono tracking-widest uppercase text-white/40 group-hover:text-white/80 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
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
        {PORTFOLIO_DATA.researchPapers.map((paper, idx) => (
          <motion.div 
            key={paper.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            className="group relative flex flex-col bg-[var(--rv-card)] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[var(--emerald)]/30 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={paper.image} 
                alt={paper.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--rv-card)] via-transparent to-transparent" />
              <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--emerald)] animate-pulse" />
                <span className="text-[10px] font-mono text-white/60 tracking-[0.3em] uppercase">
                  {paper.category}
                </span>
              </div>
              {paper.link && (
                <a 
                  href={paper.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute top-8 right-8 w-14 h-14 rounded-full glass-panel border border-white/10 flex items-center justify-center hover:bg-[var(--emerald)] hover:border-[var(--emerald)] transition-all duration-500 group/link"
                >
                  <FileText className="w-6 h-6 text-white group-hover/link:text-black transition-colors" />
                </a>
              )}
            </div>
            <div className="p-12 pt-4 flex flex-col h-full">
              <h3 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-6 leading-none group-hover:text-[var(--emerald)] transition-colors duration-500">
                {paper.title}
              </h3>
              <div className="flex flex-wrap gap-3 mt-auto pt-8 border-t border-white/5">
                {paper.tags?.map((tag, tIdx) => (
                  <span key={tIdx} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[9px] font-mono tracking-widest uppercase text-white/40 group-hover:text-white/80 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

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
      <div className="fixed inset-0 bg-[var(--bg)] flex items-center justify-center z-[100]">
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center"
          >
            <div className="relative flex items-center">
              <span className="text-4xl md:text-6xl font-headline font-bold text-white tracking-widest">SP</span>
            </div>
          </motion.div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
              <motion.div 
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/2 bg-[var(--gold)]/30"
              />
            </div>
            <span className="text-[10px] font-mono tracking-[0.8em] text-[var(--rv-muted)]/20 uppercase">Syncing Neural Core</span>
          </div>
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

