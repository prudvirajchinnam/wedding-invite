import { couple, footerSection } from "@/content";
import { FloralDivider } from "./FloralDivider";

export function Footer() {
  return (
    <footer className="bg-plum px-6 py-16 text-center">
      <FloralDivider className="mx-auto h-5 w-32 text-gold" />
      <p className="mx-auto mt-6 max-w-sm font-display text-lg italic text-blush">
        {footerSection.blessingLine}
      </p>
      <p className="mt-4 font-script text-3xl text-gold">
        {couple.brideName} &amp; {couple.groomName}
      </p>
      <p className="mt-3 font-body text-xs tracking-wide text-blush/60">
        {footerSection.closingNote}
      </p>
    </footer>
  );
}
