# CHANGELOG — v2.0 wave (mirror jy-site first)

Base: primary `ed1b71e` (v1.3). **Primary stays on v1.3 until Jy Final for v2.0** (includes Contact-kill + EHW).

Taste: https://jyyeungdeletedhisfb-gif.github.io/jy-site/

## 2026-11-02 — Contact-kill (mirror only)

| # | Change | Cache tip | Mirror SHA |
|---|---|---|---|
| CK | Kill `/contact/` (404). Nav + footer envelopes → `mailto:thisisjyyeung@gmail.com`. About **CONTACT** heading + Email/Instagram links. Privacy Formspree cut. Mocks under `/mock/contact-email/` removed. | `contact-kill-v1` | `3d3a141` |

- Steve Soft PASS on mirror `3d3a141` (cache `contact-kill-v1`).
- **Primary hold:** Jy 2026-11-02 PM — do **not** ship Contact-kill to apex until v2.0 Final. Apex still shows Coming soon Contact until then.

## 2026-11-02 PM — polish logged (mirror next)

Jy direction (changelog must record). Build on mirror; still **not** primary until v2.0.

| # | Item | Status |
|---|---|---|
| P1 | About CONTACT row: **Instagram left / Email right** | Done this tip (was Email then Instagram at `3d3a141`) |
| P2 | Privacy: third-party copy = **Apple Music and Spotify** (no Dysphoria name) | Done this tip |
| P3 | Privacy: fix lede → WHO RUNS spacing | Done this tip — `.page-privacy .page-lede` margin-bottom **52px** (was 28px) |
| P4 | Dysphoria showreel mock: **no brackets**; keep center-snap + peeks; loupe/flip physics unchanged on production | Done this tip — brackets removed from `/mock/dysphoria-showreel/` only |
| P5 | Apple Music preload during Dysphoria load gate | Done this tip — offscreen warm iframe during gate (EHW pattern); production flip/loupe untouched |

Mirror tip for P3–P5: `23c3cfa`.

## P0 EHW (mirror `/ehw/`)

- On mirror with Druk, HQ portrait **layers** (float-in + breathe), pill cue on cover, load gate, oval in cover art only. Apex has no EHW.
- **Blocked on Jy:** final square cover (also brings Work tile into the 1.5× image-weight band) + reveal / ship-to-primary timing. Still on 4:5 placeholder cover.
- Soft: mirror-history leave-vs-rewrite parked; registrar 2FA confirm still open (GitHub passkey done 2026-11-02).

## 2026-11-02 evening — EHW landing motion (mirror only)

Jy brief via Dex. Cache tip `ehw-v2.0-n`. **Primary untouched.**

| # | Change | Notes |
|---|---|---|
| E1 | HQ portrait layers on `/ehw/` landing | Yellow veils hide baked cover photos; HQ `<picture>` for 01/02/03 at photo bounds; hotspots unchanged |
| E2 | Float-in after load gate | 01 Dang + 03 EHW right→left; 02 MAS left→right; then pill cue; then breathe |
| E3 | Pill interact cue on cover art | `TAP EACH ELEMENT TO INTERACT.` — pill border centered mid-upper on art (not oval slot) |
| E4 | Oval chrome off landing | Removed `.ehw-oval-mask`; oval stays in cover art only |
| E5 | EHW footer hairline off | `body.ehw-page .site-footer { border-top: none }` — other pages unchanged |
| E6 | `prefers-reduced-motion` | Skip float + breathe; final positions + static pill cue |

Mirror tip: `d200881` (cache `ehw-v2.0-n`).

Still **blocked on Jy:** final square cover (4:5 placeholder / yellow field still in use).



## 2026-11-04 — EHW layout polish (mirror only)

Jy phone shots via Dex. Cache tip `ehw-v2.0-o`. **Primary untouched.** Final square cover still pending (4:5 placeholder).

| # | Change | Notes |
|---|---|---|
| L1 | Pill cue into header↔image-01 gap | Moved `#ehw-interact-cue` out of stage; absolute-centered in the 72px yellow band — no mid-stage overlap of oval/01 |
| L2 | Image 03 fills outer brackets | Re-detected photo bounds; veil+HQ layer `top 53.2% / height 42.5%` — no yellow gap inside bracket frame |
| L3 | Title / logo frame clear of 03 | Title hotspot retightened to type only (`43.5%+9%`); no title-bracket bite into 03 |
| L4 | Full-width footer partition | Restored `border-top: 1px solid rgba(53,99,101,0.35)`; yellow mask kills short teal hairline baked into cover bottom edge |
| L5 | Vertical rhythm | Keep `.ehw-main` pad 72px top+bottom so header↔01 ≈ 03↔partition |
| L6 | Back home block | Shared chrome footer pad `56/24/72` — partition→Back home matches About/Work/Dysphoria |

Oval remains cover-art only. Mirror tip: `8b0d91f` (cache `ehw-v2.0-o`).



## 2026-11-04 — EHW phone tip soft (mirror only)

Jy yes via Dex. Cache tip `ehw-v2.0-p`. **Primary untouched.** Final square cover still pending.

| # | Change | Notes |
|---|---|---|
| T1 | Center tip only @≤412 | `font-size` 11→**9.5px**, `letter-spacing` 0.16→**0.04em**. Full string kept (`EVERYTHING HE WANTED`). Not the TAP pill. |
| T2 | Druk / chrome tokens | Brand slot unchanged (14px Druk ~96.45px). pad 20 / top-h 52 / burger inset held. |

Measured gaps (box Chrome):

| vw | logo→tip | tip→burger |
|---|---|---|
| 390 | **14.27px** | **74.73px** |
| 412 | **25.27px** | **85.73px** |

Both gaps ≥12. Mirror tip: `d9e42b2` (cache `ehw-v2.0-p`).



## 2026-11-04 — EHW logo brackets equal pad (mirror only)

Jy phone shot via Dex. Cache tip `ehw-v2.0-q`. **Primary untouched.** Final square cover still pending.

| # | Change | Notes |
|---|---|---|
| B1 | Title hotspot equal inset | `.ehw-hs-title` was `56.5/43.5/28.0/9.0` (bottom **52.5%**, bottom pad ~**2.06%** vs top ~**0.43%**). Now `56.4/43.5/27.8/7.4` (bottom **50.9%**, pad ~**0.45%** all sides). |
| B2 | No overlap with image 03 | Title brackets bottom clear of `.ehw-hs-ehw` top **52.8%** (~1.9% / ≥4px @390 with −5px bracket inset). |
| B3 | Prior Soft PASS held | Pill header→01; 03 fills brackets; full footer partition; 72=72; Back home chrome; tip-gaps ≥12 @≤412; Druk slot unchanged. |

Standing space gate for Steve: **equal-bracket-pad** (title frame) @390/412/1280 — see `docs/uat-checklist.md`.

Mirror tip: `TIP_SHA` (cache `ehw-v2.0-q`).

## Sign-off (v2.0 Final — blank until ready)

| Role | Name | Result | Date | Notes |
|---|---|---|---|---|
| Build | Rachel | | | |
| QA | Steve | | | |
| PM | Dex | | | Contact-kill Soft PASS `3d3a141`; primary held per Jy |
| Final | Jy | | | |
