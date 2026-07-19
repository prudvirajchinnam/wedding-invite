# Adding your photos

Drop image files into this folder using these exact names and they'll show
up on the site automatically — no code changes needed:

- `bride.jpg` — the bride's portrait (shown in the couple photo section)
- `groom.jpg` — the groom's portrait

Until a file exists here, that spot shows a soft monogram placeholder
instead of a broken image, so the site never looks unfinished.

## Adding a gallery

Want more than two photos (engagement shoot, family, travel)? Add as many
files as you like here — name them anything, e.g. `gallery-1.jpg`,
`gallery-2.jpg` — then list them in `content.ts` under `media.gallery`:

```ts
gallery: [
  { src: "/images/gallery-1.jpg", alt: "Our first trip together" },
  { src: "/images/gallery-2.jpg", alt: "Engagement shoot" },
],
```

Leave that array empty and the gallery section hides itself automatically.

## Tips

- Any `.jpg`, `.png`, or `.webp` works.
- Square-ish photos work best for the portraits (they're cropped into a
  circle). Roughly 800×800px is plenty — no need for huge files, they slow
  the site down.
- File names are case-sensitive on most hosts (including Vercel), so
  `Bride.JPG` and `bride.jpg` are treated as different files — match the
  path in `content.ts` exactly.
