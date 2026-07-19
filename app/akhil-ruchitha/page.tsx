import type { Metadata } from "next";
import { InviteExperience } from "@/components/InviteExperience";
import { CouplePortraits } from "@/components/CouplePortraits";
import { StoryQuote } from "@/components/StoryQuote";
import { Festivities } from "@/components/Festivities";
import { Gallery } from "@/components/Gallery";
import { TeamPicker } from "@/components/TeamPicker";
import { Countdown } from "@/components/Countdown";
import { Venue } from "@/components/Venue";
import { RSVP } from "@/components/RSVP";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Akhil & Ruchitha — 26.08.2026",
  description:
    "Join us as we celebrate our wedding — four days of colour, laughter and love.",
};

export default function AkhilRuchithaWedding() {
  return (
    <main>
      <InviteExperience />
      <CouplePortraits />
      <StoryQuote />
      <Festivities />
      <Gallery />
      <TeamPicker />
      <Countdown />
      <Venue />
      <RSVP />
      <Footer />
    </main>
  );
}
