import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import scribble from "@/assets/scribble.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio 2026 — Visual Storyteller" },
      { name: "description", content: "Poetry in design. Graphic design, art direction & visual storytelling by Atikur Rahman." },
      { property: "og:title", content: "Portfolio 2026 — Visual Storyteller" },
      { property: "og:description", content: "Poetry in design. Graphic design, art direction & visual storytelling." },
    ],
  }),
  component: Index,
});

const projects = [
  { n: "01", title: "Shalimar", subtitle: "Cinematic Perfume Poster", tag: "MANIPULATION", img: project1, year: "2025" },
  { n: "02", title: "Westing", subtitle: "Typographic Editorial", tag: "TYPE / POSTER", img: project2, year: "2025" },
  { n: "03", title: "Wabi-Sabi", subtitle: "Instagram Carousel", tag: "SOCIAL", img: project3, year: "2024" },
  { n: "04", title: "Ember Mist", subtitle: "High-End Product Ad", tag: "3D / ADS", img: project4, year: "2024" },
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="currentColor" />
    </svg>
  );
}

function Index() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const r = heroRef.current?.getBoundingClientRect();
      if (!r) return;
      setMouse({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <main className="min-h-screen text-foreground selection:bg-[color:var(--neon)] selection:text-black overflow-x-clip">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-xs tracking-[0.25em] uppercase">
            <span className="text-neon">◉</span> ATIK/REHMAN
          </a>
          <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-[0.2em] text-white/60">
            <a href="#work" className="hover:text-neon transition-colors">Work</a>
            <a href="#about" className="hover:text-neon transition-colors">About</a>
            <a href="#services" className="hover:text-neon transition-colors">Services</a>
            <a href="#contact" className="hover:text-neon transition-colors">Contact</a>
          </div>
          <a href="#contact" className="text-[10px] font-mono uppercase tracking-widest border border-neon text-neon px-3 py-1.5 rounded-full hover:bg-neon hover:text-black transition-colors">
            Hire — 2026
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        ref={heroRef}
        className="relative grain min-h-screen flex items-center overflow-hidden pt-24"
      >
        {/* moving spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60 transition-opacity"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(57,255,20,0.08), transparent 60%)`,
          }}
        />
        {/* top rule + moving dot */}
        <div className="absolute top-24 left-8 right-8 h-px bg-white/15">
          <div
            className="absolute -top-[3px] size-2 rounded-full bg-neon shadow-[0_0_16px_var(--neon)]"
            style={{ left: `${8 + mouse.x * 84}%` }}
          />
        </div>

        {/* vertical labels */}
        <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 vtext font-mono text-[11px] tracking-[0.35em] uppercase text-white/60">
          <Sparkle className="size-3 text-neon inline-block mr-2 twinkle" />
          Poetry in Design
        </div>
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 vtext font-mono text-[11px] tracking-[0.35em] uppercase text-white/60 rotate-180">
          Visual Storyteller
          <Sparkle className="size-3 text-neon inline-block ml-2 twinkle" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 md:px-16 w-full">
          {/* 2026 pill */}
          <div className="flex justify-center mb-4">
            <span className="bg-neon text-black font-serif italic text-2xl px-6 py-1 rounded-full shadow-[0_0_30px_rgba(57,255,20,0.35)]">
              2026
            </span>
          </div>

          <h1 className="relative font-serif leading-[0.82] text-center tracking-tight">
            <span className="block text-white text-[22vw] md:text-[16rem]">Port</span>
            <span className="block italic text-white/95 text-[22vw] md:text-[16rem] -mt-[6vw] md:-mt-16">
              folio<sup className="text-neon text-[0.25em] align-top font-sans not-italic">®</sup>
            </span>
            {/* neon scribble overlay */}
            <img
              src={scribble}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 w-full opacity-95 mix-blend-screen scale-[1.15]"
            />
          </h1>

          {/* bottom row */}
          <div className="mt-8 md:mt-4 grid grid-cols-2 md:grid-cols-3 items-end gap-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60">
              <div>Version /</div>
              <div className="text-neon text-lg font-serif italic tracking-normal">2026</div>
            </div>
            <div className="hidden md:flex items-center justify-center gap-3">
              <span className="inline-grid place-items-center size-10 rounded-full border border-white/30 rotate-45">
                <span className="-rotate-45 text-white">↗</span>
              </span>
            </div>
            <div className="text-right font-serif italic text-lg md:text-2xl leading-tight">
              <div className="font-sans not-italic text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">
                Design executed
              </div>
              by ATIKUR RAHMAN
              <div className="mt-2 h-px bg-neon w-24 ml-auto" />
            </div>
          </div>

          {/* sparkles */}
          <Sparkle className="absolute left-8 bottom-16 size-4 text-white twinkle" />
          <Sparkle className="absolute right-24 top-40 size-3 text-neon twinkle" />
          <Sparkle className="absolute left-1/3 top-24 size-3 text-white/70 twinkle" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/10 bg-black/40 py-5 overflow-hidden">
        <div className="flex w-max marquee-track gap-14 font-serif italic text-3xl md:text-4xl whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-14">
              {["Graphic Design", "Art Direction", "Poster Craft", "Brand Identity", "Digital Manipulation", "Editorial", "3D Product Ads"].map((w) => (
                <span key={w} className="flex items-center gap-14">
                  <span className="text-white/85">{w}</span>
                  <Sparkle className="size-4 text-neon" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10">
              <img src={portrait} alt="Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
              <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest uppercase text-neon bg-black/60 px-2 py-1 rounded">
                Est. 2019
              </div>
            </div>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-neon" /> About
            </div>
            <p className="font-serif text-3xl md:text-5xl leading-[1.15] text-balance">
              Hi, I'm <span className="italic text-neon">Atikur Rahman</span> — a graphic designer & mentor with 5+ years turning ideas into impactful visuals.
            </p>
            <p className="mt-8 max-w-xl text-white/60 leading-relaxed">
              I lead the graphic design department at Orbit Technology, remotely. My work spans advanced poster craft, cinematic manipulation, brand systems, and 3D product ads. Beyond client work, I've trained 1,000+ students through my signature courses.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["5+", "Years"],
                ["120+", "Projects"],
                ["1K+", "Students"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif italic text-4xl text-neon">{n}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative px-6 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-neon" /> Selected Work
              </div>
              <h2 className="font-serif text-5xl md:text-7xl leading-none">
                Featured <span className="italic">Projects</span>
              </h2>
            </div>
            <div className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-white/40">
              01 — 04
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <a
                key={p.n}
                href="#"
                className={`group relative block border border-white/10 rounded-sm overflow-hidden bg-black/40 ${i % 3 === 0 ? "md:col-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-[21/10]" : "aspect-[4/5]"}`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neon border border-neon/50 px-2 py-1 rounded-sm bg-black/50">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-white/60">
                    /{p.n}
                  </div>
                </div>
                <div className="p-6 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                      {p.title}
                      <span className="italic text-white/50"> — {p.subtitle}</span>
                    </h3>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
                      {p.year} · Poster / Editorial
                    </div>
                  </div>
                  <span className="inline-grid place-items-center size-11 shrink-0 rounded-full border border-white/20 group-hover:bg-neon group-hover:text-black group-hover:border-neon transition-colors">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative px-6 md:px-16 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-neon" /> Services
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-none">
              What I <span className="italic">craft</span>.
            </h2>
          </div>
          <div className="md:col-span-8 divide-y divide-white/10">
            {[
              ["Poster & Editorial", "Cinematic composition, type-driven layouts, print-ready."],
              ["Brand Identity", "Logo systems, guidelines, visual language."],
              ["Photo Manipulation", "Advanced compositing, retouch, surreal storytelling."],
              ["3D Product Ads", "Blender-driven visualisation, campaign-grade renders."],
              ["Mentorship", "1-on-1 and cohorts. Photoshop Wizard course."],
            ].map(([t, d], i) => (
              <div key={t} className="group py-6 flex items-center justify-between gap-6 cursor-pointer">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-[10px] text-white/40">0{i + 1}</span>
                  <h3 className="font-serif text-2xl md:text-4xl group-hover:italic group-hover:text-neon transition-all">{t}</h3>
                </div>
                <p className="hidden md:block text-sm text-white/50 max-w-sm text-right">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-6 md:px-16 py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neon" /> Let's Collaborate <span className="h-px w-8 bg-neon" />
          </div>
          <h2 className="font-serif text-6xl md:text-9xl leading-[0.85]">
            Have an <span className="italic text-neon">idea</span>?
            <br />
            Let's build it.
          </h2>
          <a
            href="mailto:hello@atikrehman.design"
            className="inline-flex items-center gap-3 mt-12 bg-neon text-black font-mono uppercase text-xs tracking-widest px-8 py-4 rounded-full hover:shadow-[0_0_40px_var(--neon)] transition-shadow"
          >
            hello@atikrehman.design <span className="text-lg">↗</span>
          </a>
          <div className="mt-16 flex justify-center gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
            <a href="#" className="hover:text-neon">Behance</a>
            <a href="#" className="hover:text-neon">Instagram</a>
            <a href="#" className="hover:text-neon">YouTube</a>
            <a href="#" className="hover:text-neon">Facebook</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          <span>© 2026 Atikur Rahman — All rights reserved</span>
          <span>Poetry in Design · v2026.0</span>
        </div>
      </footer>
    </main>
  );
}
