import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Download, ExternalLink, FileText, X } from "lucide-react";

export const RESUME_URL = "/Solige_Pullaiah_Resume_AI.pdf";
const RESUME_FILENAME = "Solige_Pullaiah_Resume_AI.pdf";

export const ResumeModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="resume-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Resume"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-full max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#0b1017]"
          >
            <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-4 py-3 md:px-6">
              <FileText className="h-5 w-5 text-[var(--gold)]" />
              <span className="font-headline text-base font-bold text-white md:text-lg">Resume</span>
              <div className="ml-auto flex items-center gap-2">
                <a
                  href={RESUME_URL}
                  download={RESUME_FILENAME}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                >
                  <Download className="h-4 w-4" /> Download
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-2 rounded-full border border-white/25 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/92 transition-colors hover:border-[var(--gold)] hover:text-white sm:inline-flex"
                >
                  <ExternalLink className="h-4 w-4" /> Open
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/92 transition-colors hover:border-[var(--gold)] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <iframe
              src={`${RESUME_URL}#view=FitH&toolbar=0`}
              title="Solige Pullaiah resume"
              className="min-h-0 w-full flex-1 bg-white"
            />
            <p className="border-t border-white/10 px-4 py-2 text-center font-mono text-[11px] text-white/95 md:hidden">
              Preview not showing? Use Download or Open above.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

/** Button + modal in one, so any section can drop it in. */
export const ResumeButton = ({ className = "", label = "Resume" }: { className?: string; label?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <FileText className="h-4 w-4" />
        {label}
      </button>
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
