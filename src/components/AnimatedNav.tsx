import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu } from "lucide-react";
import { ResumeButton } from "./ResumeModal";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Works", href: "#works" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    width: "auto",
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.06,
      delayChildren: 0.12,
    },
  },
  collapsed: {
    width: "3.5rem",
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      when: "afterChildren" as const,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const logoVariants = {
  expanded: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring" as const, damping: 15 } },
  collapsed: { opacity: 0, x: -25, rotate: -180, transition: { duration: 0.25 } },
};

const itemVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring" as const, damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.18 } },
};

const collapsedIconVariants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, damping: 15, stiffness: 300, delay: 0.15 },
  },
};

export function AnimatedNav() {
  const [isExpanded, setExpanded] = React.useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    } else if (
      !isExpanded &&
      latest < previous &&
      scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD
    ) {
      setExpanded(true);
    }
    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <div className="fixed top-6 left-0 w-full z-[70] flex justify-center px-6 pointer-events-none">
      <motion.nav
        variants={containerVariants}
        initial="expanded"
        animate={isExpanded ? "expanded" : "collapsed"}
        onClick={handleNavClick}
        className="pointer-events-auto relative flex items-center gap-1 h-14 overflow-hidden rounded-full border border-white/25 bg-black/85 backdrop-blur-xl px-2 max-w-full shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        style={{ cursor: isExpanded ? "default" : "pointer" }}
      >
        <motion.a
          href="#home"
          variants={logoVariants}
          onClick={(e) => e.stopPropagation()}
          className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center"
        >
          <span className="text-black font-headline font-bold text-[11px]">SP</span>
        </motion.a>

        <div className="flex items-center gap-1 pr-2">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              onClick={(e) => e.stopPropagation()}
              className={`whitespace-nowrap text-[10.5px] md:text-xs font-mono font-medium uppercase tracking-[0.06em] md:tracking-[0.2em] text-white/90 hover:text-[var(--gold)] transition-colors px-1.5 md:px-3 py-2 ${item.name === "Home" ? "hidden md:inline-block" : ""}`}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.div
          variants={collapsedIconVariants}
          className="absolute inset-0 flex items-center justify-center"
          style={{ pointerEvents: isExpanded ? "none" : "auto" }}
        >
          <Menu className="w-5 h-5 text-white" />
        </motion.div>
      </motion.nav>

      {/* Resume + Hire Me — top right. On small screens they only show while the nav is collapsed. */}
      <div
        className={`pointer-events-auto absolute right-4 top-1 md:right-8 items-center gap-2 ${
          isExpanded ? "hidden md:flex" : "flex"
        }`}
      >
        <ResumeButton
          label="Resume"
          className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-[var(--gold)] bg-[#0b1017] px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)] shadow-[0_0_24px_-8px_rgba(34,211,238,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[var(--gold)] hover:text-black md:px-5"
        />
        <a
          href="#contact"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--gold)] px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_30px_-8px_rgba(34,211,238,0.9)] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_36px_-4px_rgba(255,255,255,0.8)]"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}
