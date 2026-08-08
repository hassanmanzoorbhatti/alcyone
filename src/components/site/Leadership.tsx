import { Linkedin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { Eyebrow } from "./SiteUi";
import { FIRM } from "@/lib/site-data";
import leadershipPortrait from "../../assets/farhad-fattahi.jpg.asset.json";

export function LeadershipBlock() {
  return (
    <section className="grid grid-cols-1 border-b border-clause-border md:grid-cols-[45fr_55fr]">
      <div className="md:border-r md:border-clause-border">
        <RevealImage
          src={leadershipPortrait.url}
          alt="Farhad Fattahi, Managing Director of London Lawyers House"
          wrapperClassName="h-full"
          className="aspect-square h-full w-full object-cover object-center"
        />
      </div>
      <div className="px-4 py-14 md:px-8 md:py-20">
        <Reveal>
          <Eyebrow>Leadership</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.625rem,1rem+2.4vw,2.5rem)]">
            Meet our Managing Director
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 border-t border-clause-border pt-8">
            <p className="font-serif-display text-[22px] leading-[1.2] text-clause-heading md:text-[26px]">
              Farhad Fattahi
            </p>
            <p className="mt-2 font-grotesk text-[14px] uppercase tracking-[0.12em] text-clause-sage">
              Managing Director
            </p>
            <p className="mt-6 max-w-[520px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
              As Managing Director of London Lawyers House Ltd, Farhad Fattahi leads the
              organisation's commitment to professional client support, clear communication and
              access to legal expertise across its UK and international network.
            </p>
            <a
              href={FIRM.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex min-h-[48px] items-center gap-3 border border-clause-line px-6 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-clause-cream transition-colors duration-300 hover:bg-clause-pink hover:text-clause-onaccent"
              style={{ borderRadius: "1px" }}
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
