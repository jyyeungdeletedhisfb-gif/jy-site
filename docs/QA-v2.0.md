# QA plan — v2.0 "everything he wanted" (Steve)

This goes with `docs/CHANGELOG-v2.0.md`. QA runs on the mirror first. The primary stays on v1.3 until Jy's Final.
Box emulation is the gate. Real pinch and real-glass feel stay with Jy.

## Device ladder

1. Android Chrome, emulated at 412 and then 360. This is the first gate.
2. iPad Chrome.
3. MacBook Chrome at 1280.
4. iPhone Safari, emulated at 390.

## Landing: cover and 3 portrait hotspots

- [ ] The cover fills the frame at every width with no sideways scroll. The square art isn't stretched or cropped by accident.
- [ ] Each portrait hotspot opens the right sub-page on a single tap (Dang, Main Antagonist Syndrome and everything he wanted).
- [ ] A tap fires once only. There are no double navigations and no stray hits on the cover between the portraits.
- [ ] Every hotspot hit area is at least 44×44px, even where portraits are placed untidily or overlap.
- [ ] Vertical scroll and page pinch-zoom still work. Touch handlers don't block them.
- [ ] Hotspots are keyboard focusable with a visible focus state. Each one has an accessible name, such as alt text or an aria-label.

## Motion

- [ ] No jank on load. Nothing animates at idle in a loop that never stops.
- [ ] Animation timers stop after you navigate away: no leaked requestAnimationFrame loops, timers or duplicate listeners.
- [ ] `prefers-reduced-motion` turns off or tones down the motion.
- [ ] Hover effects don't get stuck after a tap on touch devices.
- [ ] Motion matches `docs/motion-and-interaction.md`.

## Sub-pages

- [ ] The Back or exit control returns to the landing page with your place kept. This applies whichever way Jy picks, a new page or a floating window.
- [ ] Deep links to each sub-page return 200. Paths are lowercase.
- [ ] Embeds such as Apple Music and IG video hug their content: no empty bordered gap and no inner scrollbar.
- [ ] Text links are underlined.

## Regression on existing pages

- [ ] Home, Work, Dysphoria, About (I and He), Contact and Privacy all pass, along with the nav, footer and the Dysphoria swipe and track dropdown.
- [ ] Type gate: run `qa/type-audit/audit.js`. EHW display fonts such as Druk are an era exception, so only body type counts against the scale.
- [ ] Image weight gate: re-baseline once Jy's real files replace the placeholders. The target is about 200 KB per image at phone sizes.
- [ ] No console errors. The mock is noindex until it ships.

## Sign-off

QA results go into the Sign-off table in `CHANGELOG-v2.0.md`, with the SHA, the widths and a PASS or FAIL for each section above.
