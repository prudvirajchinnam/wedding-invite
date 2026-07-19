# Adding the "CS Anetia Demo" font

Drop the font file here and name it exactly:

```
cs-anetia-demo.otf
```

That's it — `app/globals.css` already points to `/fonts/cs-anetia-demo.otf`,
so once the file is here it'll automatically apply to:

- "Akhil & Ruchitha" in the hero section
- the "A & R" monogram on the tap-to-open gate
- "Akhil & Ruchitha" in the footer

Until the file is added, those three spots automatically fall back to the
site's regular script font (Petit Formal Script) instead — so nothing looks
broken in the meantime.

## A licensing note

This exact font ("CS Anetia Demo" by Craft Supply Co) is distributed as a
**free-for-personal-use demo** — not licensed for commercial use, and the
demo version typically has an incomplete character set. Since this site
lives on a business domain (prcreatives.com), it's worth either:

- confirming personal use is enough for your situation, or
- buying the full commercial license from Craft Supply Co if needed, or
- swapping in a different licensed font instead (just change the two
  places in `app/globals.css` and `app/layout.tsx`/`content.ts` comments
  that reference it)

If the file has a different extension (`.ttf` instead of `.otf`), open
`app/globals.css`, find the `@font-face` rule near the top, and update both
the filename and `format("opentype")` → `format("truetype")` to match.
