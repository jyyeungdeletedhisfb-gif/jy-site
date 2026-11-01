# EHW cover click-cues — research notes

Context: production hotspots (`.ehw-hotspot`) are invisible at rest; only `:focus-visible` teal border + faint hover fill. Need an always-on, phone-safe, editorial cue.

## Patterns surveyed (4–6)

1. **Outline / hairline rings (mood-first lookbooks)**  
   Envy Design “Hotspot gallery” example 6: white outline rings on a photo, optional show/hide, to protect mood. Numbered hairline rings also appear in shoppable lookbook strips (ecomcn / GSAP Vault). Cue = thin ring, not a filled pin. Closest to our Option B.

2. **Dot / “+” product pins (shoppable lookbooks)**  
   Classic gallery-hotspot: white/solid dots or plus markers that open tags. Framer Papora uses editorial paper-note plus markers. Strong discoverability, but reads retail/shoppable — too loud for a mixtape cover.

3. **Pulse / dual-ring glow (product feature maps)**  
   Framer Feature Map, Phox Image Hotspots, Image Hotspots Pro: layered pulse rings draw the eye. Default ecommerce affordance. Easy to go game-y; only fits if slowed (~4s), low opacity, and static under `prefers-reduced-motion`. Our Option C (restrained).

4. **Corner brackets / crop marks / viewfinder ticks**  
   Print-adjacent: Showreel Carousel X (focus brackets), Grid Pulse Scan (corner brackets on scan boxes), Kinetiq Crop Marks, frame/crop icons. Cue = L-brackets at corners, not a full outline. Editorial/print feel — our Option A.

5. **Soft region lift / underglow (editorial hover language)**  
   Apple-ish product cards and many portfolios: no pin; the hit region brightens or gets a soft fill/shadow on hover. Alone it fails on phones (hover-only). Combined with a faint always-on outline or ticks it works. Related to Option B hover state.

6. **Cursor label / named tag / numbered map**  
   Named tags (“Knit”) or numbered markers linked to a list below (Envy examples 2 & 4). Inherited EP microsite (Eder Anaya): cover becomes an explorable board — interaction is the content, not a pin style. Overkill for three portrait hotspots; we already open modals.

## Fit for EHW (yellow #E8CA36 / teal #356365)

| Pattern | Fit | Why |
|---|---|---|
| Corner brackets | High | Quiet, print/crop language; works at rest on phone |
| Soft outline + lift | High | Phone-visible; hover strengthens without bouncing |
| Restrained pulse | Medium | Familiar but ecommerce-coded; dial opacity/period down |
| Plus / dots | Low | Shoppable lookbook |
| Numbered map + list | Low | Extra chrome under cover |
| Hover-only lift | Fail | Not phone-safe as sole cue |

**Option C kept as restrained pulse** (as briefed), not swapped — still valid if motion is once-per-~4s and reduced-motion freezes to a static ring. If Jy finds it too product-y, swap candidate is **soft vignette lift + two opposite corner ticks** (hybrid of A+B without animation).

## Mockups

- `option-a.html` — Corner brackets  
- `option-b.html` — Soft outline + lift  
- `option-c.html` — Pulse ring / glow (restrained)  
- `index.html` — chooser
