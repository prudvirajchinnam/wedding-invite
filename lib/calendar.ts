import type { Ceremony } from "@/content";

function toGoogleFormat(iso: string) {
  // "2026-12-08T18:00:00" -> "20261208T180000"
  return iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function googleCalendarUrl(ceremony: Ceremony) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: ceremony.title,
    dates: `${toGoogleFormat(ceremony.startIso)}/${toGoogleFormat(ceremony.endIso)}`,
    details: ceremony.note,
    location: ceremony.venue,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
