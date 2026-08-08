import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { FIRM } from "@/lib/site-data";
import { Wordmark } from "./SiteUi";

const SERVICES = ["Private Immigration", "Business Immigration", "Family Law"];
const COMPANY = ["About Alcyone", "Our People", "Success Stories", "News & Insights", "Careers", "Fees"];
const LEGAL = ["Privacy Statement", "Cookie Policy", "Terms & Conditions", "Legal Notice", "Complaints Procedure"];

function Heading({ children }: { children: string }) {
  return <h4 className="font-grotesk text-[11px] font-semibold uppercase tracking-[0.18em] text-clause-stone">{children}</h4>;
}

export function Footer() {
  return (
    <footer className="bg-clause-ink text-clause-onaccent">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.25fr] lg:gap-14">
          <div>
            <Wordmark className="!text-clause-onaccent" />
            <p className="mt-5 max-w-[330px] font-grotesk text-[15px] leading-[1.7] text-clause-stone">{FIRM.description}</p>
            <div className="mt-7 border-l border-clause-sage pl-4">
              <p className="font-grotesk text-[12px] uppercase tracking-[0.14em] text-clause-stone">SRA regulated</p>
              <p className="mt-1 font-serif-display text-[20px]">Reference {FIRM.sra}</p>
            </div>
          </div>
          <div>
            <Heading>Expertise</Heading>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => <li key={s}><Link to="/coming-soon" className="font-grotesk text-[15px] text-clause-onaccent/85 transition-opacity hover:opacity-60">{s}</Link></li>)}
            </ul>
          </div>
          <div>
            <Heading>Firm</Heading>
            <ul className="mt-5 space-y-3">
              {COMPANY.map((s) => <li key={s}><Link to="/coming-soon" className="font-grotesk text-[15px] text-clause-onaccent/85 transition-opacity hover:opacity-60">{s}</Link></li>)}
            </ul>
            <Heading>Legal</Heading>
            <ul className="mt-5 space-y-3">
              {LEGAL.map((s) => <li key={s}><Link to="/coming-soon" className="font-grotesk text-[14px] text-clause-onaccent/65 transition-opacity hover:opacity-60">{s}</Link></li>)}
            </ul>
          </div>
          <div>
            <Heading>Contact</Heading>
            <div className="mt-5 space-y-4 font-grotesk text-[14px] leading-[1.7] text-clause-onaccent/85">
              <div className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-clause-sage"/><address className="not-italic">{FIRM.address.map((line)=><div key={line}>{line}</div>)}</address></div>
              <div className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-clause-sage"/><a href={`tel:${FIRM.officeTel}`}>{FIRM.office}</a></div>
              <div className="flex gap-3"><Smartphone className="mt-1 h-4 w-4 shrink-0 text-clause-sage"/><a href={`tel:${FIRM.mobileTel}`}>{FIRM.mobile}</a></div>
              <div className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-clause-sage"/><a href={`mailto:${FIRM.email}`}>{FIRM.email}</a></div>
              <div className="flex gap-3"><Clock className="mt-1 h-4 w-4 shrink-0 text-clause-sage"/><span>Monday–Friday<br/>9:00 AM–5:00 PM</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-7 font-grotesk text-[12px] leading-[1.6] text-clause-stone md:px-8">
          <p>© 2026 {FIRM.legalName}. All rights reserved.</p>
          <p className="max-w-[1100px]">Alcyone Law Ltd is authorised and regulated by the Solicitors Regulation Authority. SRA practice reference {FIRM.sra}. Registered in England and Wales under company number {FIRM.companyNumber}.</p>
        </div>
      </div>
    </footer>
  );
}
