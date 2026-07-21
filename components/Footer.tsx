import { couple, footerSection } from "@/content";
import { FloralDivider } from "./FloralDivider";
import { CirclePlay, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-plum px-6 py-16 text-center">
      <FloralDivider className="mx-auto h-5 w-32 text-gold" />
      <p className="mx-auto mt-6 max-w-sm font-display text-lg italic text-blush">
        {footerSection.blessingLine}
      </p>
      <p className="mt-4 font-names text-3xl text-gold">
        {couple.groomName} &amp; {couple.brideName}
      </p>
      <p className="mt-3 font-body text-xs tracking-wide text-blush/60">
        {footerSection.closingNote}
      </p>

      <p className="mt-8 flex items-center justify-center gap-1.5 font-body text-[11px] tracking-wide text-blush/50">
        <span>Designed with</span>
        <span aria-hidden="true" className="text-red-500">
          &#10084;
        </span>
        <span>by {footerSection.designCredit}</span>
      </p>

      <div className="mt-4 flex items-center justify-center gap-5">
        <a
          href={footerSection.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-body text-[11px] tracking-wide text-blush/60 transition-colors hover:text-blush"
        >
          <CirclePlay className="h-3.5 w-3.5" aria-hidden="true" />
          YouTube
        </a>
        <a
          href={footerSection.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-body text-[11px] tracking-wide text-blush/60 transition-colors hover:text-blush"
        >
          <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
          Portfolio
        </a>
      </div>
    </footer>
  );
}
