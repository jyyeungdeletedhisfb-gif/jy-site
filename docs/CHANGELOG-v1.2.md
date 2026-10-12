# CHANGELOG — v1.2 (mirror jy-site first)

The same change is on primary local branch `v1.2` (from `eb6737a`, not pushed).
Taste URL: https://jyyeungdeletedhisfb-gif.github.io/jy-site/dysphoria/?v=v1.2-swipe-flip

| # | Change | Cache tip | Mirror SHA |
|---|---|---|---|
| 1 | Dysphoria: sideways swipe advances the carousel when the plate is flipped to the caption side (Android Chrome). `.liner-scroll` is a scroll container, which resets the touch-action chain, so the stage's `pan-y` didn't apply and the browser took horizontal pans. Fix: `touch-action: pan-y` on `.liner-scroll`. Swipe unflips the old plate as Prev/Next do; vertical drag still scrolls the caption; flip-lock overflow unchanged. | `v1.2-swipe-flip` | `6923fa5` |
| 2 | Track dropdown `#titleJump` on phone: width `min(calc(100vw - 128px), 320px)` so it clears Prev/Next; closes on outside tap and on page scroll (> 8px). | `v1.2-swipe-flip` | `6923fa5` |

QA: `/tmp/pptr/swipe.js` results `/workspace/qa/v1.2-swipe-flip/swipe-results.txt`; type audit and image-weight gates PASS.

## Sign-off

| Role | Name | Result | Date | Notes |
|---|---|---|---|---|
| Build | Rachel | PASS | 2026-10-12 | Mirror `6923fa5`: `touch-action: pan-y` on caption scroll; phone dropdown narrowed, closes on outside tap or scroll. Primary staged on local branch `v1.2` (`9d3bcfa`), not pushed. |
| QA | Steve | PASS | 2026-10-12 | Mirror `70a5c09` (code `6923fa5`), box Chrome 412 / 390 / 1280, emulated. Swipe after flip, dropdown clears arrows and closes, plate 10, type and image-weight gates, Apple Music embed all PASS. Emulator could not reproduce the old swipe bug, so Jy's Android glass is the real gate. Cache tags confirmed at `?v=v1.2-swipe-flip`. Evidence `/workspace/qa/v12-mirror-2026-10-12/`. |
| PM | Dex | PASS | 2026-10-12 | Scope matches Jy's two asks (swipe dead after flip; dropdown over Next). Final depends on Jy confirming swipe after flip on his Android phone. On yes, Rachel pushes local branch `v1.2` to primary. |
| Final | Jy | | | |
