// ============================================================================
// WEDDING SITE CONTENT — edit everything here.
// Nothing else needs to change to update your wedding details.
// ============================================================================

export const couple = {
  // Displayed groom-first throughout the site (Akhil & Ruchitha), per request.
  brideName: "Ruchitha",
  groomName: "Akhil",
  hashtag: "#AkhilWedsRuchitha",
};

export const weddingDate = {
  // ISO date used for the live countdown.
  isoDateTime: "2026-08-26T11:24:00",
  displayDate: "Wednesday, 26th August 2026",
  muhurtham: "11:24 AM — \u201cTula Lagnam\u201d",
  venueName: "Satya Conventions",
  venueAddress: "Old Housing Board Colony, NH 7 Road, Kamareddy",
};

// -----------------------------------------------------------------------
// FONTS — "Akhil & Ruchitha" and the "A & R" monogram use a custom font
// (CS Anetia Demo). That font isn't on Google Fonts, so it's loaded from
// /public/fonts/ — see the README there for how to add the file.
// Until the file is added, the site automatically falls back to the
// regular script font, so nothing breaks in the meantime.
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// PHOTOS — drop your image files into /public/images (any name, jpg/png/webp
// all work), then point these paths at them. Until you do, tasteful
// placeholder illustrations show instead, so the site never looks broken.
// -----------------------------------------------------------------------
export const media = {
  // Shown inside the tap-to-open monogram circle. Leave "" to keep the
  // plain "A & R" monogram text instead of a photo there.
  openingPhoto: "",

  bride: {
    src: "/images/bride-placeholder.svg",
    alt: `${couple.brideName}`,
  },
  groom: {
    src: "/images/groom-placeholder.svg",
    alt: `${couple.groomName}`,
  },

  // Uploaded Radha-Krishna artwork, shown as a small circular medallion
  // between "A" and "R" on the tap-to-open gate.
  radhaKrishna: "/images/radha-krishna.png",

  // Gallery — shown as a slideshow. Add, remove, or reorder freely, any
  // length works. Set to an empty array [] to hide the gallery entirely.
  gallery: [
    { src: "/images/gallery-placeholder-1.svg", alt: "" },
    { src: "/images/gallery-placeholder-2.svg", alt: "" },
    { src: "/images/gallery-placeholder-3.svg", alt: "" },
    { src: "/images/gallery-placeholder-4.svg", alt: "" },
  ] as { src: string; alt: string }[],
};

export const openingGate = {
  // Shown before anything else. The visitor taps this to "open" the invite.
  monogramLeft: "A",
  monogramRight: "R",
  tapPrompt: "Tap to open",
  // Shown at the bottom of the gate — typically the hosting family.
  hostNote: "Bakki Chandrakala & Bakki Anand invite you",
};

export const heroSection = {
  eyebrow: "Together with their families",
  closingLine: "at their wedding celebration",
};

export const storyQuote = {
  quote:
    "Five days of colour, laughter and love, and we'd be so happy for you to be part of every bit of it.",
};

// Each ceremony becomes a tap-to-reveal card. Add, remove, or reorder freely —
// the layout handles any number of events.
export type Ceremony = {
  id: string;
  day: string; // e.g. "Monday, 24 August 2026"
  title: string;
  subtitle: string;
  time: string;
  venue: string;
  mapsUrl: string; // Google Maps link, shown as a "Directions" button
  dressCode?: string;
  note: string; // the italic closing line on the card
  accent: "blush" | "sage" | "gold" | "rose" | "yellow"; // controls the card's color theme
  revealLabel: string; // e.g. "Rub to reveal", "Trace the heart", "Tap to open"
  // Used to build "Add to calendar" links. Keep in sync with `day` + `time` above.
  startIso: string;
  endIso: string;
};

export const ceremonies: Ceremony[] = [
  {
    id: "pellikoduku",
    day: "Monday, 24 August 2026",
    title: "Pellikoduku",
    subtitle: "The groom's ceremony",
    time: "8:00 AM onwards",
    venue: "Ganapathi's Silk Tower, LB Nagar, Hyderabad",
    mapsUrl: "https://maps.app.goo.gl/Dq2fjnCwVcYcdtFL7",
    note: "The very first rituals of the celebration begin here.",
    accent: "gold",
    revealLabel: "Scratch to reveal",
    startIso: "2026-08-24T08:00:00",
    endIso: "2026-08-24T11:00:00",
  },
  {
    id: "sangeet",
    day: "Monday, 24 August 2026",
    title: "Sangeet",
    subtitle: "An evening of song",
    time: "7:00 PM onwards",
    venue: "Ganapathi's Silk Tower, LB Nagar, Hyderabad",
    mapsUrl: "https://maps.app.goo.gl/Dq2fjnCwVcYcdtFL7",
    note: "Music, dance, and the whole family on its feet.",
    accent: "blush",
    revealLabel: "Scratch to reveal",
    startIso: "2026-08-24T19:00:00",
    endIso: "2026-08-24T23:00:00",
  },
  {
    id: "haldi",
    day: "Tuesday, 25 August 2026",
    title: "Haldi",
    subtitle: "Turmeric & blessings",
    time: "8:00 AM onwards",
    venue: "Ganapathi's Silk Tower, LB Nagar, Hyderabad",
    mapsUrl: "https://maps.app.goo.gl/Dq2fjnCwVcYcdtFL7",
    dressCode: "Yellow & floral",
    note: "Turmeric, laughter, and the very first blessings.",
    accent: "yellow",
    revealLabel: "Rub to reveal",
    startIso: "2026-08-25T08:00:00",
    endIso: "2026-08-25T11:00:00",
  },
  {
    id: "wedding",
    day: "Wednesday, 26 August 2026",
    title: "The Wedding",
    subtitle: "Tula Lagnam",
    time: "11:24 AM",
    venue: "Satya Conventions, Old Housing Board Colony, NH 7 Road, Kamareddy",
    mapsUrl: "https://maps.app.goo.gl/bNbfXChZgAjaP99z7",
    dressCode: "Traditional",
    note: "The sacred vows — with your blessings.",
    accent: "sage",
    revealLabel: "Scratch to reveal",
    startIso: "2026-08-26T11:24:00",
    endIso: "2026-08-26T14:00:00",
  },
  {
    id: "satyanarayana",
    day: "Thursday, 27 August 2026",
    title: "Satyanarayana Vratham",
    subtitle: "A prayer of gratitude",
    time: "9:00 AM onwards",
    venue: "Ganapathi's Silk Tower, LB Nagar, Hyderabad",
    mapsUrl: "https://maps.app.goo.gl/Dq2fjnCwVcYcdtFL7",
    note: "A quiet morning of thanks, together with family.",
    accent: "rose",
    revealLabel: "Scratch to reveal",
    startIso: "2026-08-27T09:00:00",
    endIso: "2026-08-27T11:30:00",
  },
  {
    id: "reception",
    day: "Friday, 28 August 2026",
    title: "Reception",
    subtitle: "Join us for the evening",
    time: "7:30 PM onwards",
    venue: "Rock Banquet & Convention, Chinthalkunta, LB Nagar, Hyderabad",
    mapsUrl: "https://maps.app.goo.gl/pwooZX3F6qDSJBs19",
    dressCode: "Evening formal",
    note: "One last celebration — thank you for being with us.",
    accent: "blush",
    revealLabel: "Scratch to reveal",
    startIso: "2026-08-28T19:30:00",
    endIso: "2026-08-28T23:00:00",
  },
];

export const venueSection = {
  title: "Where to find us",
  name: weddingDate.venueName,
  address: weddingDate.venueAddress,
  mapsUrl: "https://maps.app.goo.gl/bNbfXChZgAjaP99z7",
};

export const rsvpSection = {
  title: "Will you join us?",
  subtitle: "Kindly respond soon",
  // RSVP taps open WhatsApp with a pre-filled message addressed to this
  // number — whoever's number this is will receive each guest's RSVP as a
  // WhatsApp message once the guest hits "send" on their end.
  // TODO: replace with the real number (country code + number, no + or spaces)
  whatsappNumber: "911234567890",
};

export const footerSection = {
  blessingLine: "With the blessings of our elders and the warmth of your presence",
  closingNote: "We can't wait to celebrate with you.",
  designCredit: "PR Creatives",
  youtubeUrl: "https://www.youtube.com/@prcreatives",
  portfolioUrl:
    "https://www.wedmegood.com/profile/PR-Creatives-629273?srsltid=AfmBOoqQW9FmDJV-GXsLYix4VEZdqVaYQ6zu3NySDY29PF6XSFPMndn9",
};
