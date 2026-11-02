# Dysphoria plates ← Showreel Carousel X (taste mock)

**Status:** mirror mock only · `noindex` · live `/dysphoria/` untouched  
**Ref:** [Showreel Carousel X (Framer)](https://www.framer.com/marketplace/components/showreel-carousel-x/)  
**Date:** 2026-11-02 (Jy via Dex)

## What maps from Showreel X

| Showreel X | This mock |
|---|---|
| Center-snap scrolling | Active plate locked to viewport center; neighbors scroll under |
| Side peeks, reduced scale + opacity | Peeks ~0.72–0.78 scale, ~0.36–0.42 opacity, slight dim |
| Corner focus brackets (viewfinder) | **Removed** (Jy 2026-11-02) — keep center-snap + peeks only |
| Numbered tick pager | Minimal tick marks under stage (position only) |
| Accent title for active piece | Title jump above: `01/08 — Name` |
| Drag / arrows / keys | Pointer drag, Prev/Next, ←/→ |
| Infinite loop | **Not adapted** — Dysphoria is a finite album (01→15); ends disable |
| Auto-scroll | **Not adapted** — intentional browse, not showreel autopilot |
| Click → outbound link | **Not adapted** — plates flip to liner (album language) |

Not a Framer drop-in. Spatial feel only; chrome stays Dysphoria (black field, Helvetica meta, no marketplace chrome).

## What we kept from Dysphoria

- **Flip** — active plate / Flip button / `F` → liner back face (simplified caption; no IG foot / scroll chrome).
- **Prev / Next** — chevrons outside the strip.
- **Gutter swipe** — horizontal drag on the viewport with threshold commit (same idea as stage L/R; no nested scroll edge-cases mocked).
- **Loupe** — **stub only** (disabled chip). Live loupe stays on production; conflicting with free-drag showreel until we decide hit-target rules.
- Real plate images (`*-640w.jpg`) and track titles from `content/dysphoria.json`.

## Conflicts / open calls for Jy

1. **Loupe vs drag** — Showreel X treats the whole stage as a drag surface. Live loupe needs pointer tracking on the plate. Options: (a) loupe only after Flip-off + long-press / dedicated tool arm, (b) loupe button arms a mode that disables drag, (c) keep single-plate stage + peeks *around* current DOM (less “film strip”).
2. **Peek click** — mock: click neighbor → snap. Live already does peek buttons. Film-strip peeks are larger/closer; confirm no accidental flips.
3. **Finite vs infinite** — recommend keep finite album ends (disabled chevrons at 01 / last).
4. **Replace (alt frames)** — not in mock; confirm peek/snap after alt swap.
5. **Phone** — peeks tighter (72% width). Confirm peeks don’t collide with nav chevrons at 390.

## Reduced motion

`prefers-reduced-motion: reduce` → no track/slide transitions; snap is instant.

## Files

- `index.html` — demo shell  
- `showreel.css` / `showreel.js` — self-contained  
- Live paths: `../../assets/dysphoria/*-640w.jpg`  

## Out of scope this mock

- Production `dysphoria/index.html`, `css/dysphoria.css`, `js/dysphoria.js`
- Full 15-track set, alt Replace, soundtrack embed, load gate, exit scrub

## Fix pass (Steve QA on 01668ec)
- P0 centring: slot math uses the layout (unscaled) width from computed style, not the scaled `getBoundingClientRect()`. The active plate sits center at every index.
- 2026-11-02: focus brackets removed per Jy; center-snap + side peeks kept.
- P1 click: no `setPointerCapture` on pointerdown. Capture starts only after 6px of travel. A plain click reaches the plate: clicking the active plate flips it, and clicking a peek snaps to it. A drag swallows its trailing click.
- P1 phone: below 520px, plates are min(58vw, 240px), the gap is 12px and peeks scale to 0.8. Peeks are pulled inward via `--shift` so the visible gap between plates equals the track gap. The active plate fits fully, with about 42–47px of each neighbour showing at 390/412.
