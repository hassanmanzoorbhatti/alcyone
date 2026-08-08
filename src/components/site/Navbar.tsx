import { Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/lib/site-data";
import { Wordmark } from "./SiteUi";

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" aria-hidden="true" className={className}>
      <line x1="0" y1="4" x2="24" y2="4" />
      <line x1="0" y1="12" x2="14" y2="12" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="fixed left-2 right-2 top-0 z-50 border-x border-b border-clause-border bg-[rgba(247,243,238,0.9)] backdrop-blur-[14px] md:sticky md:left-auto md:right-auto md:border-x-0">
        <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 md:h-20 md:grid-cols-[auto_1fr] md:px-8">
          <Link to="/" className="flex min-w-0 items-center" aria-label="Alcyone Law home">
            <Wordmark />
          </Link>
          <div className="hidden items-center justify-end gap-8 lg:flex">
            <ul className="flex gap-7 font-grotesk text-[12px] font-medium uppercase tracking-[0.1em] text-clause-cream">
              {NAV_LINKS.map((l) => (
                <li key={`${l.label}-${l.to}`}>
                  <Link to={l.to} className="transition-colors hover:text-clause-pink">{l.label}</Link>
                </li>
              ))}
            </ul>
            <a href="/#contact" className="group inline-flex min-h-[44px] items-center gap-2 border border-clause-pink bg-clause-pink px-5 py-2 font-grotesk text-[12px] font-semibold uppercase tracking-[0.08em] text-clause-onaccent transition-all hover:-translate-y-0.5">
              Book a Consultation
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
          <button type="button" aria-label="Open menu" onClick={() => setOpen(true)} className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center text-clause-cream lg:hidden">
            <MenuIcon className="h-4 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div key="drawer" className="fixed inset-y-0 left-2 right-2 z-50 flex flex-col overflow-hidden border-x border-clause-border bg-clause-bg lg:hidden" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex h-16 items-center justify-between px-4">
              <Link to="/" onClick={() => setOpen(false)}><Wordmark /></Link>
              <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="-mr-2 flex h-11 w-11 items-center justify-center text-clause-cream">
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>
            <div className="h-px bg-clause-border" />
            <nav className="flex flex-1 flex-col px-4 pt-3">
              {NAV_LINKS.map((l) => (
                <Link key={`${l.label}-${l.to}`} to={l.to} onClick={() => setOpen(false)} className="flex min-h-[58px] items-center border-b border-clause-border font-serif-display text-[22px] text-clause-heading">
                  {l.label}
                </Link>
              ))}
              <a href="/#contact" onClick={() => setOpen(false)} className="mt-8 flex min-h-[56px] items-center justify-center gap-3 bg-clause-pink font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-clause-onaccent">
                Book a Consultation <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
