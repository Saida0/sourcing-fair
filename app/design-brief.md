# Design Brief — Sourcing Fair

## Design read
B2B buyers (garment exporters, sourcing offices, brand QA teams) in Europe/US/Asia
evaluating a Bangladeshi trims & accessories supplier for reliability, not spectacle;
the register is precision and industrial confidence, delivered with premium motion.

## Concept spine
**"Precision Assembly."** Sourcing Fair sells the small parts (buttons, zippers,
labels, tags, elastics) that hold a finished garment together. The site enacts this:
components draw themselves in, piece by piece, and lock into formation on scroll —
the same way trims assemble into a garment on a production line.

## Delivery tier
**Cinema.** Lenis + GSAP ScrollTrigger, kinetic hero, scroll-driven chapters. No
generated video/photo is available this build (workspace has 0 Higgsfield credits),
so the wow is bespoke coded SVG/canvas motion, not media.

## Locked palette
- Navy `#1E4686` — the client's own existing brand color (sourcingfairbd.com), kept
  as the one accent/brand color. Defense: real brand equity, reads as trustworthy
  industrial-corporate, not a generic AI reach.
- Ink `#101423` — near-navy text, not pure black.
- Paper `#F6F7FB` / White `#FFFFFF` — neutral cool base.
- Brass `#B98A2E` (single secondary accent, <80% sat) — represents the metal
  buttons/zippers/rivets this company actually manufactures; used sparingly for
  hover states, the mono spec labels, and one CTA family only.
No dark-mode-only page (this is a B2B daytime site); one light theme throughout.

## Locked type
- Display: **Poppins** (600/700) — client's explicit request, geometric and
  confident without going serif.
- Body: **Inter** — client's explicit request, excellent readability at length.
- Mono (spec rows, MOQ/lead-time data, section rail numerals): **IBM Plex Mono** —
  ties to the "precision/technical spec sheet" register.

## Tier-1 technique
**D3 — Kinetic type opener**, `wow-catalog.md` ID D3, paired with a bespoke
"component assembly" motif (hand-coded SVG trims — a button, a zipper pull, a
woven label — draw their own stroke paths and click into a locked exploded-view
formation as the hero scrolls/loads). Defends the spine directly: the typography
IS the assembly line, snapping into place the way a trim locks into a garment.
Mobile: assembly plays as a shorter, scroll-scrubbed static sequence (no cursor
dependency).

## Section plan (Home, 10 sections + footer)
1. Hero — split 50/50, kinetic headline + SVG assembly rig (own family: split-hero)
2. Trust/stats band — animated counters, metric-band layout
3. About summary — split text/visual (image collage placeholder), 10-yr timeline rail
4. Why Sourcing Fair — bento grid (uneven cells, not 3-equal-cards)
5. Product categories — asymmetric grid, 12 cards
6. Manufacturing/business-model process — horizontal scroll rail, 6 steps
7. Global presence — divide-y list band (real countries only, no fake map pins)
8. Quality & compliance — divide-y list (honest: process commitments, not invented
   certification logos we can't verify the client holds)
9. CTA/RFQ banner — full-width quote-style band
10. FAQ (accordion) — kept minimal, exempted from layout-repeat ration as utility
Footer — quick links, product links, newsletter, contact, social

Eyebrow budget: ceil(10/3) = 4 max.

## Asset plan (no AI generation this build — 0 credits)
- Custom hand-coded SVG icon set, one consistent 1.5px stroke line-art style in
  navy/brass, for all 12 product categories (button, label, elastic, zipper,
  twill tape, drawstring, belt & buckle, hang tag, price tag, lace, poly, carton).
- Hero/assembly visual: procedural SVG + GSAP, not a generated image.
- Favicon/OG: coded SVG monogram card ("SF" in a navy roundel), not a photo.
- Real factory/product photography: NOT available. Every slot that needs a real
  photo (About collage, product gallery, team photo) is a clearly labeled,
  visually composed placeholder (soft navy gradient card + dashed border + label
  "Photo pending — client to supply") — never stock/picsum.
- No fake client logos, no invented testimonials, no invented certifications
  (BGMEA/ISO/OEKO-TEX etc.) — the old site's fabricated-trust-signal problem is
  exactly what this rebuild fixes. Compliance section states real, defensible
  process commitments only.

## CTA inventory (bespoke chrome, zero shared button style)
- Nav CTA "Request Quote" — sliding-digit index reveal on hover
- Hero primary "Request a Quote" — magnetic pill (brass fill), spring physics,
  the ONLY pill-shaped surface on the page
- Hero secondary "View Products" — text link, arrow travels along a stitched
  thread-path (dash-offset draw), ties to the concept's material world
- Product card CTA — swatch flip (card corner flips like a fabric swatch to
  reveal "View Category"), materially literal for a trims company
- CTA banner "Get a Quote" — stamp/press: `:active` skews + shifts like a
  hang-tag being stamped
- Contact form submit "Send Inquiry" — filled button with its own loading/
  success state cycle (spinner → check-draw)

Corner language: soft 14px radius everywhere except the hero magnetic pill
(explicit, sole exception, stated here).

## Previous build in this chat
None — first build. All six identity axes (palette, type, hero architecture,
Tier-1 technique, CTA garments, corner language) derived fresh from this brief's
material world (thread, metal trims, spec sheets), not from a prior session.
