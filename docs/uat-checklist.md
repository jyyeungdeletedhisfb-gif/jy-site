# UAT checklist — thisisjyyeung.com

## Purpose

A ladder that catches real failure modes. Not every device. Jy owns taste on his glass; Steve owns morning smoke / regression on the mirror.

## Device ladder

1. Android Chrome (major)
2. iPhone Safari **(emulated)** — preferred rung for phone Safari; Steve covers box emulation (real iPhone unavailable)
3. iPad Chrome or Safari (landscape About matters)
4. MacBook Chrome

Prefer `jy-site` URLs with `?v=…` after a ship. Custom domain unreliable.

## Pass (~10–15 min) — same every time

- [ ] Home → Work → Dysphoria → About (I/He) → Privacy (no Contact page; email via mailto icons)
- [ ] Hamburger: open/close, current-page left-dot, IG/Email mailto icons (no CONTACT text item)
- [ ] Dysphoria: intro cue sits close under copy (no tall white void); enter gate→soundtrack scale/blur handoff continuous; plate Prev/Next ends; soundtrack embed (no empty bordered gap); one Flip plate; exit gate contract
- [ ] About: portrait sticky sheet / no hero leak to footer; on iPad landscape: locked sharp 50/50 (browser pinch-zoom must still work — see pinch-zoom below)
- [ ] Work grid: Dysphoria live tile + soon covers (Front/A+I/State)
- [ ] Footer: Back home (non-home), WEBSITE BY + Privacy same size (11px), links underlined; **full-width hairline** on every page (EHW teal-tint ok); **IG/email idle circle borders** visible on all pages; **spacing consistency** — line→Back home ≈ About (~56px from shared pad-top); Back home→footer-bottom matches other pages (shared `padding: 56px 24px 72px` + `.footer-home` margin 28px); on short era landings (EHW) main must not flex-grow a void above the footer (EHW stage bottom breathing room is 72px, separate from footer padding; EHW ≥801px uses taskbar/Credits)
- [ ] EHW load gate: yellow field + teal spinner + label `everything he wanted` + VT323 tip “Tip: view on desktop for an optimized experience”; waits for cover + window preload (dual images + slide 1 per song) + tip font, capped at 2200ms; phone keeps it up ≥1.2s so the tip is readable (desktop min 320ms, reduced 0 / no spin / 0.15s dismiss); dismisses cleanly; not stuck at opacity 0
- [ ] EHW interact cue: mirror checkpoint uses the approved rectangular retro cue; phone header→stage gap, desktop beside stage. No new landing animations.
- [ ] EHW Win2000 mirror: all five windows, instant open/close; desktop drag clamp below 52px header, minimise/restore, time-only live local clock. Three song windows: left one-row dual images/8px gap; regular quoted body, bold titles (no underline) with About’s dotted partition line beneath (Jy 2026-11-09, supersedes bold-underlined); title/body/LISTEN 10px gaps; LISTEN/embed and VIEW/carousel 16px; labels 15px; songs Apple/Spotify 175px, MAS Apple playlist 450px and Spotify · SOON. Carousels 17/9/9, 16:9/4:5/4:5, centred zero-padded counters, prev/next only (no swipe/dots), real Win2000 scrollbar with native chrome suppressed. Phone footer normal flow; desktop content in Credits. About/Thanks/final square cover remain placeholders.
- [ ] **EHW pass-2 gates (Jy 2026-11-09)** — at 390/412/1280: DANG/MAS/EHW identical width (phone 366 centred, equal L/R margins; desktop 400, inside viewport incl. 834); keyboard Tab/Shift+Tab stays inside the open window, focus returns to the trigger on Close/Esc; carousels stop at the ends (Prev greyed on 1, Next greyed on last, `aria-disabled`); reduced motion = no slide transition; ~2 line-heights (36px) below “View on Instagram”; header logo → home, cover oval → Special Thanks; Shut Down “Yes” returns to the referring site page (About/Work), direct visit → home.
- [ ] **EHW pass-3 gates (Steve 2026-11-09)** — phone: scroll to bottom, open a window, swipe the dim → page doesn’t move and Close/Esc/dim restore the exact scrollY; no horizontal overflow sweeping 320–1440 (cue never overflows 801–999); desktop/tablet (834, 1024×768, 1280×720/800, 1440): every window bottom above the taskbar and its ▼ arrow clickable; dragging any direction keeps ≥80px of title-bar grab area visible, under the header and above the taskbar.
- [ ] **EHW layout gate (Jy 2026-11-04)** — when `/ehw/` is in scope (mirror now; primary after ship), assert at 1280/412/390: (1) approved rectangular cue sits in header→image-01 gap on phone and beside stage on desktop, not over 01; (2) image 03 fills its outer brackets — no title-frame overlap on top of 03; (3) title “everything he wanted” frame position correct vs 01/03; (4) phone full-width footer partition present (site chrome; desktop footer in Credits); no short teal hairline above Back home; (5) vertical header→01 gap ≈ 03→partition gap; (6) partition→Back home vertical matches About/Work/Dysphoria. Soft-check on Rachel tip; fold into morning smoke when EHW is live.
- [ ] **EHW equal-bracket-pad (Jy 2026-11-04)** — title “EVERYTHING he WANTED” hotspot brackets: equal inset on all 4 sides (no fat bottom pad). Assert @390/412/1280: visual pad top≈bottom≈left≈right; title-frame bottom must **not** collide with / overlap image 03 (or its outer brackets). Soft-check on Rachel tip; fold into morning smoke when EHW is live.
- [ ] **EHW phone tip-gap (Jy 2026-11-04)** — at ≤412 (assert @390 and @412): logo→tip ≥12px and tip→burger ≥12px. Tip size only (center tip ~9.5px / 0.04em); Druk 12.6px / −0.04em, no nudge; pad / top-h / burger inset unchanged. Soft-check on Rachel tip; fold into morning smoke when EHW is live.
- [ ] Pinch-zoom not blocked: every page's viewport meta is `width=device-width, initial-scale=1` with no `maximum-scale` or `user-scalable=no`. Check with `rg -n 'name="viewport"' --glob '*.html' .`, then pinch on Android Chrome on each page, including on a Dysphoria plate.
- [ ] No horizontal overflow (measured): at each test width, scroll to the bottom (so float-ins have run), then run `[document.documentElement.scrollWidth, document.documentElement.clientWidth]` in the console. The two numbers must match. Repeat after rotating on iPad. If a page fails, log the culprit element.
- [ ] Touch on real glass, not only mouse drag in device mode: swipe all 15 plates both ways, tap side Prev/Next at both ends, hamburger, I/He toggle, Apple Music embed. The page must not scroll sideways during a plate swipe. Android Chrome and iPad Chrome.

- [ ] **Standing header-logo gate (Jy 2026-11-08):** on every new or changed page, measure the header JY YEÜNG painted glyph-ink width, not its CSS line box. Match About’s ~85.5px ink width within ~1px, and align its ink start with About (~20.73px; account for font side-bearing, no casual nudge). Assert at **390, 412 and 1280**; EHW v16 target ~85.84px, Druk 12.6px/−0.04em, no nudge. Retain 52px header / 20px side pads and ≥12px phone logo→tip gap. Home has no header logo (N/A). Existing other-page type is not authorization to restyle it.

## Test widths

Fixed sizes for MacBook device mode and for every check above that says "each width". Not every width in between.

| Width | Stands in for |
|---|---|
| 375 × 812 | Small phone |
| 390 × 844 | iPhone Safari 14/15-class (emulated preferred rung) |
| 412 × 915 | Android phone (Steve daily smoke) |
| 430 × 932 | Large phone |
| 768 × 1024 | iPad portrait |
| 1024 × 768 | iPad landscape (About soft park lives here) |
| 1280 × 800 | MacBook Chrome |

Hunt overlap, clipped type, horizontal scrollbar and broken 50/50.

## Ignore unless unreadable

Every OEM Android skin, perfect Chrome↔Safari parity and extreme zoom/split-screen. (Ordinary pinch-zoom is not "extreme". It must work.)

## After a ship

Android full Dysphoria+About first → iPad landscape About + Work → MacBook gate scrub. If those three feel good, confidence is high.

## Responsive and a11y (post-ship or weekly)

Not part of the 10–15 min pass. Run after a ship that touches layout, type or images, or weekly.

- [ ] **Hamburger semantics:** the button keeps `aria-label`, `aria-controls="site-menu"` and an `aria-expanded` that flips true/false on open/close. Toggle in DevTools Elements; on MacBook open/close with Enter and Space. (Regression guard; passing on all six pages as of 5 Oct 2026.)
- [ ] **Reduced motion:** DevTools > Rendering > "Emulate CSS prefers-reduced-motion: reduce", then walk Dysphoria and About top to bottom. Float-ins, the intro/exit font shuffle, the About blur and the gate scale/blur handoff are off or calm. No content is left hidden at opacity 0.
- [x] **Image weight:** DevTools Network at 390 wide, "Fast 4G", filter Img. No single image over about 500 KB; plates, Dysphoria cover, gate images, Work tiles and About heroes use sized JPEG variants with `srcset`/`sizes` (HTML) or JS responsive picks (background-image). Shipped `img-srcset-v1` (6 Oct 2026); `img-srcset-v2` (6 Oct 2026) drops the inline 1080w Dysphoria cover so phones fetch exactly one cover variant. Desktop gate masters remain large on purpose for the 6.4× expand.
- [ ] **Display type scaling:** in device mode drag slowly from 375 to 1280 on Home, Dysphoria and About. Hero, era title and About name show no clipping, overlap or one-word orphan lines.
- [ ] **Long strings wrap:** at 375, edit a plate caption, a heading and the About bio (I and He) to a 60-character unbroken string in DevTools, then re-run the overflow check.
- [ ] **Embed fit:** load Dysphoria at 375, 768 × 1024 and 1280 on "Slow 4G". The Apple Music embed shows its controls in full before and after it loads, with no inner double scroll, clipped edge or layout jump.

## Steve morning smoke

Fold latest tip SHA + mirror URL from group ping. Report pass/fail with URL + device. Soft parks ok; material blockers to Dex+Rachel.

Always smoke at **1280 + 412 + 390** (MacBook Chrome, Android phone, iPhone Safari emulated).

## Related

[`design-taste.md`](./design-taste.md) · [`motion-and-interaction.md`](./motion-and-interaction.md) · [`design-handbook-scroll.md`](./design-handbook-scroll.md)
