# Design taste — Jy Yeüng / thisisjyyeung.com

**Locked as of chrome-geist-v13** (mirror SHA `eee65dd` / primary `49d4f7b`). Phone taste gate still Jy. v13: footer text lines unified to 11px; favicon = Geist Black capital Ü on #050505 tile (path outlines). Don’t reopen again unless Jy sends new phone notes.

Living handbook of brand, UX, visual, chrome, and process preferences for Dex, Rachel, and future bots. Prefer this over re-deriving taste from chat history.

**Related:** motion / interaction → [`motion-and-interaction.md`](./motion-and-interaction.md) · scroll / nested-carousel language → [`design-handbook-scroll.md`](./design-handbook-scroll.md) · UAT → [`uat-checklist.md`](./uat-checklist.md).

---

## Positioning / brand

- Site for **knowing Jy as a person** and craft thoughts — not monetization or selling at this stage.
- **Era-based portfolio:** each era has a distinct visual identity (not one template recolored).
- Reference love: **i-D Magazine** site — each page feels completely different.
- Launch order: **Dysphoria first** → EHW → Authenticity + Imitation → hub / About later.
- **Writing:** no Oxford comma.
- Prefer **jy-site phone URLs** for taste checks; custom domain still unreliable.

---

## Locked chrome / type (chrome-geist-v13)

### Universal Geist brand mark

- **Geist Black 900 Snug** (`letter-spacing: 0`) **ALL CAPS** “**JY YEÜNG**” is universal chrome on:
  - About hero name
  - Non-home title bars (left brand)
  - Work / Contact / Privacy page titles
  - Hamburger drawer labels
- **Hamburger current-page:** small filled circle **to the LEFT** of the active drawer label (`a[aria-current="page"]::before`). ALL CAPS + Geist tracking unchanged; don’t break item fade-in / spacing.
- **Homepage:** no title bar — float hamburger only.
- Helvetica (or quiet system sans) for non-brand UI chrome; keep Geist reserved for the brand mark.

### Dysphoria era brand (exception)

- Dysphoria top-bar brand: **Clarendon**, **title case** “**Jy Yeüng**” (not ALL CAPS).
- Era Clarendon **section titles** stay untouched (era type system, not site chrome).
- Cascade note: `chrome.css` restores Clarendon on the Dysphoria topbar brand after Geist chrome loads.

### Dysphoria type scale (locked — type-scale-v1)
- ~1.25 ratio on a 16 base, tokens in `css/dysphoria.css` `:root`: **11** meta (footer, liner number, IG link, Listen on, top-bar project title) · **13** small (liners, caret, tracklist) · **16** body (intro + plate title row) · **20** plate heading · Clarendon display **h2 40 / 28**, **h1 64 / 42** (desktop / phone).
- One Clarendon stack (`--font-clarendon`) for title voice, one Helvetica stack (`--font-helvetica`) for chrome/body. No new one-off sizes on Dysphoria; add a token or reuse one.
- Exceptions outside the scale: Back home stays **12** (locked above); era brand mark stays at chrome size (17).

### Interactive text

- Text links that act as buttons (e.g. Privacy prose links): **always underline** (`text-underline-offset` ~0.18em, 1px thickness).

### Favicon + footer type

- **Favicon:** Geist Black capital **Ü** (U+00DC) in white on `#050505` tile; SVG path outlines (no live webfont). Not “JY”, not Clarendon.
- **Footer text lines** (`.footer-credit`, `.footer-links`, `.copy`) share **11px**; `.footer-home` stays 12px (bordered button).

---

## Page-to-page transitions (brand text-shuffle)

Implementation: `js/chrome.js` (`markShuffle` / `takeShuffle` / `scrambleBrand` / `playEnterDysphoria` / `playExitArrival`). Flag key: `sessionStorage` `jy-brand-shuffle`.

Jy emphasis: get enter/exit faces right. Wrong face for even one frame is a blocker.


### Footer credit + Privacy color (locked)
- `.footer-credit`, `.copy` (© line), and `.footer-links a` (Privacy) stay **muted grey `#666`** (`--footer-muted`) on **every** page and era — including yellow EHW. Do not recolor these to era accents.
- Era pages may tint footer **background**, Back home, and social icons; credit/Privacy grey is site language.
- **Short era landings (EHW):** do not `flex-grow` the main stage to fill the viewport — that opens a yellow void above the footer on tall screens. Pack footer under the cover (shared footer padding `56 / 72` stays). Back home→footer-bottom must match Work / Dysphoria (~240px at 1×).
- **Footer hairline:** full-width `border-top` on `.site-footer` on every page (including EHW). EHW uses quiet teal `rgba(53,99,101,0.35)` on yellow — never a short inset `<hr>`. Stage/`ehw-main` pad-bottom **0** so the line sits close under the cover like About content→hairline (~56px line→Back home from shared footer pad-top).
- **Footer IG/email icons:** always-on circle border (`1px solid #555` idle in chrome). Era/About may retint (EHW teal `rgba(53,99,101,0.45)`; About I/He keep their overrides). Hover may fill/brighten; do not return to transparent idle.
- **EHW title hotspot (equal-bracket-pad):** corner brackets around EVERYTHING he WANTED keep **equal inset** on all 4 sides (no fat bottom). Must stay clear of image 03. Standing Steve space gate @390/412/1280.
- **EHW interact cue:** the 8 November 2026 (HKT) mirror Win2000 checkpoint supersedes the old pill/character-slide mock: steady rectangular retro cue, phone header→stage gap / desktop beside stage. Primary remains held until Jy Final; no new animation is approved.
- **Era / project load gates:** every era landing (Dysphoria, EHW, future) opens with a first-open load gate (mark + label + spinner). Copy Dysphoria timings; recolor to the era. See [`motion-and-interaction.md`](./motion-and-interaction.md).


### When shuffle runs

1. Shuffle **ONLY** on real **font-change** navigation: **Geist chrome ↔ Dysphoria Clarendon**.
2. **Not** on refresh / same-URL reload (`navigationType() === "reload"` clears the flag and settles label).
3. **Not** between two Geist pages (About ↔ Work ↔ Contact ↔ Privacy ↔ home) — no scramble.
4. Refresh while already on Dysphoria: **no shuffle**.

### Enter Dysphoria (from About / Work / home / etc.)

1. On click of a same-origin link into `/dysphoria`: Geist page calls `markShuffle("enter")`.
2. On Dysphoria load, if flag is `"enter"` → `playEnterDysphoria` with **`fromFace: "clarendon"`**.
3. First scramble glyphs are seeded **synchronously before paint** so the first frame is already mid-scramble on Clarendon.
4. Glyphs decode to title-case **“Jy Yeüng”**.
5. **Never flash Geist** on enter. Page CSS keeps Clarendon after settle.

### Exit Dysphoria (to any Geist page)

1. On click leaving Dysphoria (or `pagehide` for Back / tab discard): mark `exit`.
2. Scramble plays **once on Geist arrival** via `playExitArrival` with **`fromFace: "geist"`** (do not scramble on the Dysphoria document or destinations double-shuffle).
3. Lands instantly on Geist **ALL CAPS** “JY YEÜNG”.
4. **Never flash Clarendon** on exit — no title-case → ALL CAPS intermediate frame.
5. `pageshow` with `persisted` (bfcache Back) re-checks the exit flag.

### Future eras rule

Every era brand **face change** must set `fromFace` to the **DESTINATION** face for the whole scramble; never paint the previous face for a frame. Seed glyphs before paint. Add this to Steve QA for each new era font.

### Taste URL preference

Prefer **jy-site** phone URLs when judging transitions; custom domain still unreliable.

---

## About page (locked)

### Portrait (phone)

- Portrait: **sticky/fixed hero** + **scrolling sheet** with **top veil dissolve** (image → sheet).
- Sheet has **deeper overlap**; hero fades and parks (`.is-parked`) so there is **no leak** between Instagram/Contact and footer (no dark blurry strip).
- Opaque ground through close → footer.
- Portrait top veil stays on.

### I / He dual portrait

- Dual-layer **opacity crossfade** only (no mid-fade crop swap).
- **I:** `object-position: center 60%` (tightened in v10 from `center 48%` — less crown air, face fills more; still horizontally centered).
- **He:** `object-position: center 12%` + **soft crown on the He img layer only**.
- No body-class mid-fade crop flash — each img keeps its own crop for the whole fade.

### Work trail order

Matches Work page order:

1. Dysphoria  
2. Front  
3. Authenticity + Imitation  
4. State (last)

**Work hub covers (work-covers-v1):** A+I tile now has cover art (2480); State upgraded to 1500; Front stays intentional 1080 brat low-res.

### Landscape / iPad (`min-width: 768px` + `orientation: landscape`)

- Sharp **50/50** columns: image left / text right (`1fr 1fr` / true 50%). Pinch / resize bounce-back to 50/50 is **intentional** (locked ratio).
- Image: `object-fit: cover` — **never** stretch/fill; crop inside the 50% column.
- Sticky photo + **one page scroll**; **full-width footer**.
- **NO L→R dissolve** (tried v7–v9 and rejected — clips subject). Landscape veil off; hard column edge.
- Text column: top pad above “JY YEÜNG” ≈ bottom pad below IG/Contact (**~80px**).

### About copy

- Bio openers include **(aka James)** after the name: I — `I'm Jy Yeüng (aka James). …`; He — `Jy Yeüng (aka James) is …`. No “Hello!” unless Jy asks.

### About grounds

- I voice: `#bebebe`
- He voice: `#6e6e6e`

---

## Rejected / parked (don’t reopen without Jy)

| Item | Status | Notes |
|------|--------|--------|
| Landscape L→R dissolve / overlap veil (v7–v9) | **Rejected** | Sharp 50/50 cut locked |
| Nested text-only scroll lock that hid footer (v7) | **Rejected** | Sticky hero + page scroll locked |
| Cylindrical / rotating 3D carousel | **Held** | Prefer 2D sticky scrub + plate peeks |
| Soft desktop “face under veil” | **Parked** | Unless Jy asks |

---

## UX / interaction (site-wide language)

- Modern, fun, **interactive navigation**.
- **Apple-style scroll:** scroll-scrubbed sticky float for major beats (gates); axis-locked nested horizontal carousels (`pan-y` default + x-lock). Details in [`design-handbook-scroll.md`](./design-handbook-scroll.md).
- Soft **float-up entrances** for intro + section headings (respect `prefers-reduced-motion`).
- **QA order:** Android Chrome (primary) → iPad Chrome → MacBook Chrome.
- Plates need **two-direction nested scroll** — don’t force the user to step outside the stage to scroll the page.

### Flip / 3D cards (lesson locked — ig-liner-v7)

Treat a flipping plate as **one physical card**, not a photo spinning inside a fixed frame.

- **One transforming node.** Border (the rim), both faces, and any chrome that should turn with the object live on the same element (`.plate-card`). Never leave the rim on an outer shell while only the faces `rotateY` — that reads as a sticker flip, not a plate.
- **Continuous turn.** Drive the flip with `transform: rotateY` + `preserve-3d` + `backface-visibility`. Do **not** use a hard mid-turn opacity cut to swap faces; a zero-duration opacity snap feels like a missed frame into the caption side.
- **Scrollable faces.** If a face has `overflow: auto` (caption scroll), lock overflow for the flip duration (`.is-flipping`). WebKit often drops `backface-visibility` on scrolling descendants mid-animation.
- **Parent transforms.** Clear leftover `translateX(0)` (and avoid flat parent transforms) on the plate while flipping — they flatten 3D faces.
- **Perspective** sits on the wrap (`.plate-wrap`), not on a non-preserving ancestor.

Motion timings / implementation notes: [`motion-and-interaction.md`](./motion-and-interaction.md) (plates + plate liner caption).

---

## Visual / Dysphoria era

- **HQ masters (dysphoria-hq-v1):** Cover **2400×2400** on Dysphoria intro + Work tile; gates **3000×3000** (enter = soundtrack-promo; exit separate); Host soft master **1800×2400** (`ar: 0.75`); Charlatan soft master **1800×1800** (`ar: 1`). Durable stash: `/home/box/masters/dysphoria/` (not in git).
- Monochrome **high-contrast B&W**; Clarendon / serif for section titles; clean sans for UI.
- Seamless gate blacks **edge-sampled** (`#030303` enter / `#000` exit); no grey outline on gate circles.
- **Tight spacing:** cut awkward gaps (para→chevron, soundtrack→sheets).
- Cover art: subtle drop shadow (~135°).
- Soundtrack stays in the enter-gate with fade-in; **no exit darken wipe** over text/widget.
- **dysphoria-ux-v1 (MacBook Chrome notes):** Intro uses natural height (no `min-height: 100vh` void under scroll cue). Enter gate max scale ~6.4 with expand through soundtrack crossfade; gate blurs/darkens toward soundtrack filter during handoff. Plate toolbar: Prev | Loupe | Flip | Replace | Next.
- Section labels (“Soundtrack” / “The Images”) share **alignment and hierarchy**.
- Topbar: Clarendon title-case **Jy Yeüng** + era title; back-to-top.

---

## Embeds / music

- **Apple Music embed primary** + “Listen on” for multi-platform once a Spotify mirror exists (not Apple-only forever).
- Embed chrome (Rachel preference):
  - Never taller bordered iframe than the visible card
  - Hug the white embed
  - Borderless on tablet+
  - No empty bordered gap / inner scrollbars

---

## Content editability / tech

- **Zero-code edits** for images, text, and minor tweaks; eras via content JSON (etc.).
- Static / fast for image-heavy pages.
- Light SEO: titles, meta, OG, alt, sitemap — light GEO/AEO only.
- **GitHub + Pages** for alpha; custom domain after Dysphoria feels right.
- No e-commerce yet, but don’t block it later.
- Preserve Pages base paths when moving assets / routes.

---

## Process taste

- Lean bot roster.
- **Taste sign-off from Jy on phone / Android.**
- Rachel: **blocker-only QA** (not full taste review on every pass).
- **Rachel pings the group** with ship **SHA + jy-site URL** on every ship.
- **Steve** weekday morning ~**7:49 HKT** primary smoke; **Dex** ~**7:56** backup + weekends; **one run enough**; ad-hoc only if Jy or Dex asks.

---

## Steve QA checkgates (chrome-geist-v13)

Phone / iPad smoke — blocker-only:

- **About He ↔ I:** Toggle voice; crop / `object-position` must never flash the outgoing voice’s framing (no ~1ms jump). Dual-layer opacity only; each img keeps its own crop (I `center 60%`, He `center 12%` + soft crown on the He layer). I crop tightened in v10 (was `center 48%`) — less crown air, face fills more; still horizontally centered. He crop / soft-crown unchanged.
- **Dysphoria enter:** Enter Dysphoria from Geist chrome — brand scramble starts on Clarendon (`fromFace: "clarendon"`). **No Geist flash** on enter. Exit to Geist pages stays Geist-only (`fromFace: "geist"`). Refresh while on Dysphoria = no shuffle (keep).
- **Era brand shuffle (future eras):** Enter/exit must never flash the previous face. `fromFace` = destination face for the whole scramble; seed first scramble glyphs before paint. Gate for every new era font.
- **Hamburger drawer:** Labels ALL CAPS; tracking matches hero “JY YEÜNG” Geist Black 900 Snug (`letter-spacing: 0`). Current page shows a small filled circle **left** of the label (`aria-current="page"`).
- **iPad landscape About = sharp column cut + 50/50:** No L→R dissolve. Grid `1fr 1fr` / true 50% columns; image `object-fit: cover` (never fill-stretch) inside the 50% column. Portrait top veil stays (landscape veil off). Sticky hero, page scroll, full-width footer. Text column: top pad above “JY YEÜNG” matches bottom pad below Instagram/Contact (~80px).
- **Portrait About — no hero leak between sheet and footer:** Once scrolled past, sheet fully covers hero (deeper overlap, fade→0, `.is-parked` hides blur bleed). Opaque ground through close → footer; no dark blurry strip between Instagram/Contact and BACK HOME. Portrait top veil stays.

---

## Shared footer invariant

**Standing invariant — 8 November 2026 (HKT), measured from reference tip `21afef6`; included in the owner-approved mirror checkpoint.** Shared geometry remains protected; primary stays held until Jy Final.

### Shared source and exact values

Reuse the existing `<footer class="site-footer" id="footer">` structure and `css/chrome.css` rules, plus existing page/era palette overrides. Do not replace the footer with a Credits dialog/taskbar, copy arbitrary pixel values into an era stylesheet or change shared geometry casually.

| Item | Exact authored value / measured result | Source selector and lines at `21afef6` |
|---|---|---|
| Footer box | `box-sizing:border-box; max-width:100%; text-align:center; padding:56px 24px 72px; border-top:1px solid #1a1a1a`; all other borders 0; margins 0; computed full viewport width | `css/chrome.css:571–581` `.site-footer` (padding line 578, border 579) |
| Footer face | `Helvetica, "Helvetica Neue", Arial, sans-serif`; computed base 16px, normal line-height/weight 400/tracking normal; no dedicated footer font-size/line-height override | `css/chrome.css:150–155,580` `.site-footer`; base size/normal line-height are browser defaults, not new tokens |
| Back home | `display:inline-block; margin:0 0 28px; padding:0; border:0; font-size:12px; letter-spacing:.16em` = 1.92px; uppercase; underline 1px, offset 4px | `css/chrome.css:584–597` `.footer-home` |
| Icon row | flex, center/center; gap 20px; margin-bottom 28px; padding 0 | `css/chrome.css:605–610` `.footer-icons` |
| Icon circles | CSS width/height 40px; padding 0; 1px solid #555; radius 50%; inline-flex center/center; background transparent, no underline | `css/chrome.css:612–626` `.footer-icon` |
| SVGs | 20×20px; stroke currentColor 1.6; round caps/joins; no fill | `css/chrome.css:628–639` `.footer-icon svg`, `.footer-icon svg.ig-icon` |
| Copyright | 11px, `.16em` = 1.76px tracking, uppercase, margin 0 | `css/chrome.css:653–658` `.site-footer .copy` |
| Credit | 11px, `.12em` = 1.32px tracking, uppercase, margin `10px 0 0` | `css/chrome.css:660–665` `.site-footer .footer-credit` |
| Privacy | 11px, `.12em` = 1.32px tracking, uppercase; parent margin `12px 0 0`; anchor underline 1px, offset `.18em` = 1.98px | `css/chrome.css:762–773` `.footer-links`, `.footer-links a` |
| Muted text | `--footer-muted:#666` for copyright, credit and Privacy anchor; Privacy current-page #999 | `css/chrome.css:52–53,653–665,768–781` |
| EHW palette | ground #E8CA36; teal #356365 interactive text/icons; full-width hairline `rgba(53,99,101,.35)`; icon ring `rgba(53,99,101,.45)`; copyright/credit/Privacy #666 | `css/ehw.css:2–5,557–563,578–582,594–596,610–619` `body.ehw-page .site-footer`, `.footer-home`, `.footer-icon`, `.footer-credit`, `.site-footer .copy`, `.footer-links a` |
| Normal-flow content seam | footer margin-top 0 and preceding section→footer gap 0; page-owned content bottom spacing is separate, not footer padding | `css/chrome.css:571–581,785–791` (Work/Privacy bottom pad 64); `css/about.css:422–425` (phone close bottom pad 48); `css/ehw.css:151–161` (stage bottom pad 72) |

### Measured alignment and rhythm

At 390×844 and 412×915 (CSS pixels, desktop Chrome emulation, 2× PNG capture): footer left/right padding **24/24**, top/bottom padding **56/72**, centered text/icon cluster and full-width 1px hairline. Footer→preceding main/exit section box gap **0**. Back home box top is **59px** below the footer's outer top (1px hairline + 56px padding + 2px inline line-box leading); Home has no Back home and its icons begin at **57px**. Text link boxes are centered to within 1/64px layout rounding.

On EHW/Work/Dysphoria/Privacy, Back home→icons = **28px**, icons→copyright = **28px**, copyright→credit = **10px**, credit→Privacy = **12px**; row boxes are Back home 14px, icons 40px, each text line 12px. Total EHW footer height **299px** at both phone widths. Footer box x=0 and width=viewport. Main stage retains its separate **72px** bottom breathing room; never confuse it with the shared 56px internal footer top padding.

### Existing differences — not new design values

- **Home** intentionally omits Back home (`index.html:57–76`), so height is **255px**, 44px shorter than EHW. Padding/alignment/type are identical. Its content-above gap is page-flex dependent, not footer padding.
- **About** currently lacks the universal `*{box-sizing:border-box}` reset used by Dysphoria-based pages (`css/dysphoria.css:19`) and EHW (`css/ehw.css:28`). The footer box itself is border-box, but its icons are content-box: authored 40px + 2×1px borders = **42px** rendered; SVGs remain 20px. Hence its footer is **301px**, +2px versus EHW. This is pre-existing, not normalized in this checkpoint. Any normalization needs Jy sign-off and Steve QA.
- About I uses #bebebe ground, rgba(0,0,0,.14) hairline, #333 icons / rgba(0,0,0,.25) rings and #444 text (`css/about.css:92–108`, ground tokens at top of file). About He has its existing light-ink overrides (`css/about.css:110–121`). These differ from the older blanket #666 prose: record them rather than quietly recoloring About.
- EHW preserves its existing yellow/teal palette; Privacy's current-page link stays #999 on Privacy. Other neutral pages use chrome defaults. Palette differences do not authorize geometry differences.
- Historical text above calling Back home a “bordered button” is superseded by the actual shared plain-underlined, border-0 rule (`chrome.css:584–597`). Historical EHW pad-bottom 0 prose is not the current stage rule: at this tip it is 72px (`ehw.css:161`). This checkpoint does not retune that standing rhythm.

### Responsive behaviour and EHW Win2000 exception

- Shared footer geometry has **no phone/tablet/desktop padding breakpoint**: 56/24/72, centered, full-width and normal page flow. Confirmed reference Home/Work/About/Dysphoria/Privacy at widths **390, 412, 768 and 1280**. Narrow text may wrap naturally if it no longer fits; do not shrink, clip or introduce side-scroll to force a line.
- About landscape split at `min-width:768px` plus landscape orientation retains a full-width footer (`css/about.css:595–601`); the content-column close gains 80px bottom padding (`about.css:581–584`), not a footer padding change.
- **EHW Win2000 mirror exception:** existing compact/phone mode is **≤800px** (`desk = innerWidth > 800` in the inherited mock JS). Restore the normal footer in this mode, following `.ehw-main` in flow, while preserving Credits content. The fixed dimmer/window layer intercepts footer input during the one-at-a-time popups; closing returns to the same page scroll position. This compact tier also includes a 768px portrait tablet; it is not a new breakpoint.
- At **≥801px**, keep the Win2000 taskbar and hide the normal site footer; footer content remains accessible in Credits. At **≥1000px**, preserve v13's html/body scroll lock and desktop-stage geometry. The inherited **801–999px** transition tier has taskbar + hidden footer but no forced page scroll lock: record, do not silently redesign it. This exception is EHW-only, never a global permission to hide footers on other pages.
- EHW short-landscape (`max-height:520px`) content padding remains the existing `ehw.css:547–549` override; shared footer padding does not change.

### Change control / QA gate

**Any change to shared footer padding, spacing, alignment, typography, link treatment, borders, icon dimensions or responsive visibility requires explicit Jy sign-off plus Steve's QA gate.** Do not casually hide/move the phone footer into Credits again. Palette exceptions also require approval to change.

Steve gate: measure Home/Work/About I + He/Dysphoria/Privacy/EHW at 390 and 412, then tablet portrait/landscape and desktop; verify full-width hairline, 24px side pads, 56/72 internal pads, centered icon cluster, text links underlined, icon box-sizing accounted for, no sideways overflow and normal footer access after popup close. Verify EHW desktop taskbar/Credits and scroll-lock exception remain intact. Existing About box-sizing/color discrepancies must be explicitly accepted or separately approved, not silently “fixed”. Screenshots are emulation, not Android-glass taste approval.
