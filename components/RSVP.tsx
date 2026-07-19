"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ceremonies, rsvpSection } from "@/content";
import { FloralDivider } from "./FloralDivider";

export function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [guests, setGuests] = useState(1);

  const toggleEvent = (title: string) => {
    setSelectedEvents((prev) =>
      prev.includes(title) ? prev.filter((e) => e !== title) : [...prev, title]
    );
  };

  const canSend = name.trim().length > 0 && attending !== null;

  const buildWhatsAppUrl = () => {
    const lines = [
      `RSVP from ${name || "(name)"}`,
      attending === "yes" ? "Joyfully accepting! ✅" : "Regretfully declining ❌",
    ];
    if (attending === "yes") {
      lines.push(
        `Celebrations: ${selectedEvents.length ? selectedEvents.join(", ") : "All"}`
      );
      lines.push(`Guests: ${guests}`);
    }
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${rsvpSection.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="rsvp" className="bg-blush/60 px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-md"
      >
        <div className="text-center">
          <h2 className="font-display text-3xl italic text-plum sm:text-4xl">
            {rsvpSection.title}
          </h2>
          <FloralDivider className="mx-auto mt-5 h-5 w-28 text-rose-deep" />
          <p className="mt-4 font-body text-sm text-plum-soft">{rsvpSection.subtitle}</p>
        </div>

        <div className="mt-10 space-y-6 rounded-2xl border border-rose-deep/15 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div>
            <label htmlFor="rsvp-name" className="font-body text-xs tracking-wide text-plum-soft uppercase">
              Your name
            </label>
            <input
              id="rsvp-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Lakshmi Iyer"
              className="mt-2 w-full rounded-lg border border-plum/15 bg-white px-4 py-2.5 font-body text-sm text-plum placeholder:text-plum-soft/50 focus:border-gold-deep focus:outline-none"
            />
          </div>

          <div>
            <span className="font-body text-xs tracking-wide text-plum-soft uppercase">
              Will you attend?
            </span>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAttending("yes")}
                aria-pressed={attending === "yes"}
                className={`rounded-lg border px-4 py-2.5 font-body text-sm transition-colors ${
                  attending === "yes"
                    ? "border-sage-deep bg-sage/30 text-sage-deep"
                    : "border-plum/15 bg-white text-plum-soft hover:border-sage-deep/40"
                }`}
              >
                Joyfully yes
              </button>
              <button
                type="button"
                onClick={() => setAttending("no")}
                aria-pressed={attending === "no"}
                className={`rounded-lg border px-4 py-2.5 font-body text-sm transition-colors ${
                  attending === "no"
                    ? "border-plum/40 bg-plum/10 text-plum"
                    : "border-plum/15 bg-white text-plum-soft hover:border-plum/30"
                }`}
              >
                Regretfully no
              </button>
            </div>
          </div>

          {attending === "yes" && (
            <>
              <div>
                <span className="font-body text-xs tracking-wide text-plum-soft uppercase">
                  Which celebrations? (tap all that apply)
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {ceremonies.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => toggleEvent(c.title)}
                      aria-pressed={selectedEvents.includes(c.title)}
                      className={`rounded-full border px-4 py-1.5 font-body text-xs transition-colors ${
                        selectedEvents.includes(c.title)
                          ? "border-gold-deep bg-gold/25 text-gold-deep"
                          : "border-plum/15 bg-white text-plum-soft hover:border-gold-deep/40"
                      }`}
                    >
                      {c.title}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="rsvp-guests" className="font-body text-xs tracking-wide text-plum-soft uppercase">
                  Number of guests
                </label>
                <input
                  id="rsvp-guests"
                  type="number"
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value) || 1)}
                  className="mt-2 w-24 rounded-lg border border-plum/15 bg-white px-4 py-2.5 font-body text-sm text-plum focus:border-gold-deep focus:outline-none"
                />
              </div>
            </>
          )}

          <a
            href={canSend ? buildWhatsAppUrl() : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!canSend}
            onClick={(e) => {
              if (!canSend) e.preventDefault();
            }}
            className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm tracking-wide text-white transition-colors ${
              canSend
                ? "bg-sage-deep hover:bg-sage-deep/90 cursor-pointer"
                : "cursor-not-allowed bg-plum/20"
            }`}
          >
            Send RSVP on WhatsApp
          </a>

          <p className="text-center font-body text-xs text-plum-soft">
            {rsvpSection.fallbackNote}
            <br />
            {rsvpSection.familyContacts.map((c) => (
              <span key={c.name} className="mt-1 block">
                {c.name} &middot; {c.phone}
              </span>
            ))}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
