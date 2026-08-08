import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SiteUi";
export const Route = createFileRoute("/coming-soon")({ component: ComingSoon });
function ComingSoon(){return <div className="min-h-screen bg-clause-bg"><Navbar/><main className="flex min-h-[70vh] items-center justify-center px-4 py-24"><div className="max-w-[720px] text-center"><Eyebrow>Alcyone Law</Eyebrow><h1 className="mt-6 font-serif-display text-[48px] leading-[1.02] text-clause-heading md:text-[72px]">This page is<br/>coming soon.</h1><p className="mx-auto mt-6 max-w-[540px] font-grotesk text-[16px] leading-[1.7] text-clause-muted">This concept focuses on the new Alcyone Law landing page. The remaining pages are ready to be designed in the same visual system.</p><Link to="/" className="mt-9 inline-flex min-h-[50px] items-center gap-3 bg-clause-pink px-7 font-grotesk text-[12px] font-bold uppercase tracking-[.08em] text-clause-onaccent"><ArrowLeft className="h-4 w-4"/>Back to homepage</Link></div></main><Footer/></div>}
