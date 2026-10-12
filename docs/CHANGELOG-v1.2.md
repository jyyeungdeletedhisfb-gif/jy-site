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
| Build | Rachel | | | |
| QA | Steve | | | |
| PM | Dex | | | |
| Final | Jy | | | |
