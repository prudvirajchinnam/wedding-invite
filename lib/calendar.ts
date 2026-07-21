import type { Ceremony } from "@/content";

function toIcsDate(iso: string) {
  // "2026-08-24T08:00:00" -> "20260824T080000"
  return iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

// Per the iCalendar spec (RFC 5545), commas, semicolons, and backslashes
// need escaping inside text fields.
function icsEscape(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

// Builds a real .ics calendar file as a data: URL. Tapping this link:
// - on iOS/macOS: opens the native Calendar app's "Add Event" screen directly
// - on Android/Google Calendar: imports the event directly, no browser or
//   Google-account login required
// - on desktop: downloads a small .ics file that any calendar app can open
// This replaces a Google-Calendar-specific link, which forced iOS users
// through a browser + Google login just to add an event.
export function icsDataUrl(ceremony: Ceremony) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Akhil & Ruchitha Wedding//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${ceremony.id}-akhil-ruchitha-wedding@prcreatives`,
    // Times are given without a Z suffix plus TZID, so calendar apps place
    // them in the correct local time for the venue rather than treating
    // them as UTC.
    `DTSTART;TZID=Asia/Kolkata:${toIcsDate(ceremony.startIso)}`,
    `DTEND;TZID=Asia/Kolkata:${toIcsDate(ceremony.endIso)}`,
    `SUMMARY:${icsEscape(ceremony.title)}`,
    `DESCRIPTION:${icsEscape(ceremony.note)}`,
    `LOCATION:${icsEscape(ceremony.venue)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  // .ics requires CRLF line endings per spec.
  const ics = lines.join("\r\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}
