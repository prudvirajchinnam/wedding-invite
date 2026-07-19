// ============================================================================
// WEDDING SITE CONTENT — edit everything here.
// Nothing below this file needs to change to update your wedding details.
// ============================================================================

export const couple = {
  brideName: "Ruchitha",
  brideFullName: "Ruchitha",
  brideParents: "Daughter of (parents' names)",
  groomName: "Akhil",
  groomFullName: "Akhil",
  groomParents: "Son of (parents' names)",
  hashtag: "#AkhilWedsRuchitha",
};

export const weddingDate = {
  // ISO date used for the live countdown. Keep the format YYYY-MM-DDTHH:mm:ss
  isoDateTime: "2026-08-26T18:00:00",
  displayDate: "26th August 2026",
  city: "Hyderabad",
  venueName: "Taj Palace",
};

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

  // Gallery grid — add, remove, or reorder freely, any length works.
  // Set to an empty array [] to hide the gallery section entirely.
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
};

export const heroSection = {
  eyebrow: "Together with their families",
  invitationLine: "request the honour of your presence",
  closingLine: "at their wedding celebration",
};

export const storyQuote = {
  quote:
    "Two families, one story — four days of colour, laughter and love, and we'd be so happy for you to be part of every bit of it.",
  signature: "With love, Akhil & Ruchitha",
};

// Each ceremony becomes a tap-to-reveal card. Add, remove, or reorder freely —
// the layout handles any number of events.
export type Ceremony = {
  id: string;
  day: string; // e.g. "Sunday, 23 August 2026"
  title: string;
  subtitle: string;
  time: string;
  venue: string;
  dressCode?: string;
  note: string; // the italic closing line, e.g. "Turmeric, laughter and the very first blessings."
  accent: "blush" | "sage" | "gold" | "rose"; // controls the card's color theme
  revealLabel: string; // e.g. "Rub to reveal", "Trace the heart", "Tap to open"
  // Used to build "Add to calendar" links. Keep in sync with `day` + `time` above.
  startIso: string; // e.g. "2026-08-23T18:00:00"
  endIso: string; // e.g. "2026-08-23T21:00:00"
};

export const ceremonies: Ceremony[] = [
  {
    id: "haldi",
    day: "Sunday, 23 August 2026",
    title: "Haldi",
    subtitle: "Manjal Neerattu Vizha",
    time: "6:00 PM onwards",
    venue: "Taj Palace, Hyderabad",
    dressCode: "Yellow & floral",
    note: "Turmeric, laughter, and the very first blessings.",
    accent: "gold",
    revealLabel: "Rub to reveal",
    startIso: "2026-08-23T18:00:00",
    endIso: "2026-08-23T21:00:00",
  },
  {
    id: "mehndi",
    day: "Monday, 24 August 2026",
    title: "Mehndi",
    subtitle: "Where henna meets hearts",
    time: "5:30 PM onwards",
    venue: "Taj Palace, Hyderabad",
    dressCode: "Pastel & floral",
    note: "The deeper the mehndi, the deeper the love.",
    accent: "rose",
    revealLabel: "Trace to reveal",
    startIso: "2026-08-24T17:30:00",
    endIso: "2026-08-24T21:00:00",
  },
  {
    id: "sangeet",
    day: "Tuesday, 25 August 2026",
    title: "Sangeet",
    subtitle: "An evening of song",
    time: "6:00 PM onwards",
    venue: "Taj Palace, Hyderabad",
    dressCode: "Shimmer & shine",
    note: "Music, dance, and the whole family on its feet.",
    accent: "blush",
    revealLabel: "Tap to reveal",
    startIso: "2026-08-25T18:00:00",
    endIso: "2026-08-25T23:00:00",
  },
  {
    id: "wedding",
    day: "Wednesday, 26 August 2026",
    title: "The Wedding",
    subtitle: "The Muhurtham",
    time: "6:00 PM onwards",
    venue: "Taj Palace, Hyderabad",
    dressCode: "Traditional",
    note: "The sacred vows — with your blessings.",
    accent: "sage",
    revealLabel: "Tap to reveal",
    startIso: "2026-08-26T18:00:00",
    endIso: "2026-08-26T22:00:00",
  },
];

export const teams = {
  question: "Whose side are you cheering for? Tap to join — your pick rides along with your RSVP.",
  bride: { label: "Team Bride", name: couple.brideName },
  groom: { label: "Team Groom", name: couple.groomName },
};

export const venueSection = {
  title: "Where to find us",
  name: "Taj Palace, Hyderabad",
  address: "Road No. 12, Banjara Hills, Hyderabad, Telangana",
  mapsUrl: "https://maps.google.com/?q=Taj+Palace+Hyderabad",
  note: "Valet parking available. Ask any usher for directions to your ceremony.",
};

export const rsvpSection = {
  title: "Will you join us?",
  subtitle: "Kindly respond by 20th July 2026",
  whatsappNumber: "919876543210", // country code + number, no + or spaces
  fallbackNote: "Prefer to call? Reach the family directly.",
  familyContacts: [
    { name: "Bride's family", phone: "+91 90000 00001" },
    { name: "Groom's family", phone: "+91 90000 00002" },
  ],
};

export const footerSection = {
  blessingLine: "With the blessings of our elders and the warmth of your presence",
  closingNote: "We can't wait to celebrate with you.",
};
