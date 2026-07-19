# Akhil & Ruchitha — Wedding Website

A traditional ivory/gold wedding invitation site with a tap-to-open gate, a
live countdown, tap-to-reveal ceremony cards, a "pick your side" moment, and
a WhatsApp-based RSVP — built with Next.js so you have full control and can
host it on Vercel under your own domain.

## Where the site lives

- **`/akhil-ruchitha`** — the actual wedding invite (all the content below)
- **`/`** (bare domain) — redirects straight to `/akhil-ruchitha`

This means both `prcreatives.com` and `prcreatives.com/akhil-ruchitha` land
on the invite. If you ever want the bare domain to show something else
(a business homepage, another couple's site, etc.), open `app/page.tsx` and
replace the `redirect(...)` call with real page content — instructions are
in a comment right there.

To build another couple's site on the same domain later, duplicate the
`app/akhil-ruchitha` folder as `app/newcouple`, point it at its own
`content.ts`-style data, and it'll live at `prcreatives.com/newcouple`
automatically — no routing config needed.

## Adding your photos

Open `content.ts` and find the `media` block near the top:

- `media.bride.src` / `media.groom.src` — the two portrait photos shown in
  the "couple" section
- `media.openingPhoto` — optional photo shown inside the tap-to-open
  monogram circle (leave `""` to keep the plain "A & R" text there instead)
- `media.gallery` — an array of extra photos for the gallery grid; add,
  remove, or reorder freely, or set it to `[]` to hide that section entirely

Drop your actual image files into `public/images/` (any name, `.jpg`/`.png`/
`.webp` all work), then point the path at them, e.g.:

```ts
bride: { src: "/images/bride.jpg", alt: "Ruchitha" },
```

Until you do, tasteful "replace this photo" placeholder illustrations show
in their place, so the site never looks broken while you're still setting
it up. Full details are in `public/images/README.md`.

## Editing your details (the file you'll use most)

Open **`content.ts`** in the project root. Every name, date, venue, ceremony,
quote, and contact number on the site comes from that one file. Nothing else
needs to change for day-to-day edits:

- `couple` — names and parents' names
- `weddingDate` — the date used for the countdown
- `ceremonies` — add, remove, or reorder events freely; the page layout
  adjusts automatically to however many you list
- `venueSection` — address and Google Maps link
- `rsvpSection` — the WhatsApp number RSVPs get sent to, and fallback family
  contacts

Save the file and refresh — that's it.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 (it'll redirect you to
http://localhost:3000/akhil-ruchitha). Changes to `content.ts` or any file in
`components/` hot-reload instantly.

## Deploying to Vercel

**Option A — GitHub (recommended, auto-redeploys on every edit)**

```bash
git init
git add .
git commit -m "Initial wedding site"
```
Create an empty repo at [github.com/new](https://github.com/new), then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```
Go to [vercel.com/new](https://vercel.com/new), import the repo, leave all
settings as default (Vercel auto-detects Next.js), click **Deploy**.

From then on, any edit + `git push` redeploys automatically.

**Option B — Vercel CLI (fastest, no GitHub needed)**

```bash
npm install -g vercel
vercel
```
Follow the prompts. To push an update later, run `vercel --prod` again from
this folder.

## Connecting prcreatives.com

In your Vercel project: **Settings → Domains** → add `prcreatives.com`.
Vercel will show you DNS records to add at your domain registrar — typically:

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

If `prcreatives.com` already has email set up, leave any existing **MX
records** untouched — only add the records above.

## Changing the look

- **Colors** — `app/globals.css`, in the `:root` block at the top. Each color
  has a plain-English name (`--color-blush`, `--color-gold`, etc.) used
  throughout the site.
- **Fonts** — the Google Fonts `<link>` in `app/layout.tsx`, plus the matching
  font names in `app/globals.css`.
- **Sections** — `app/akhil-ruchitha/page.tsx` lists every section in order;
  comment out or reorder lines to change the page structure.
- **Ceremony card colors** — each ceremony in `content.ts` has an `accent`
  field (`"blush" | "sage" | "gold" | "rose"`); change it to recolor that card.

## Notes

- The RSVP button opens WhatsApp with a pre-filled message — update
  `rsvpSection.whatsappNumber` in `content.ts` to your own number
  (country code + number, no spaces or `+`).
- "Add to calendar" on each ceremony card links to Google Calendar using that
  ceremony's `startIso`/`endIso` — keep those in sync if you change a date.
