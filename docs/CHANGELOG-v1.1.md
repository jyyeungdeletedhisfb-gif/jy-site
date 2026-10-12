# CHANGELOG — v1.1 (mirror jy-site only)

Primary `thisisjyyeung.com` stays at `eccb4a2` (type-scale-v1) until sign-off. The same changes are staged on primary local branch `type-scale-v2` (not pushed).
Taste URL: https://jyyeungdeletedhisfb-gif.github.io/jy-site/

| # | Change | Cache tip | Mirror SHA |
|---|---|---|---|
| 1 | Site-wide type scale v2: shared 11 / 13 / 16 / 20 tokens in `chrome.css`. Home links 20/16; Work "Coming soon" 11 + tile titles 20/16; About "soon" 11, closing links 13, Dysphoria-in-list 16; Contact + Privacy body 15 → 16 (Privacy lh 1.6). Footer, brand 17, Back home 12 and Geist titles untouched. | `type-scale-v2` | `91d5dd2` |
| 2 | Work tile titles: one weight (600) for all tiles; coming-soon greyed by colour only. | `type-scale-v3` | `0c5c2dd` |
| 3 | Dysphoria phone cover: `#introCover` fills content width on phone (~372 at 412, 350 at 390); desktop 512 unchanged. | `v1.1-cover-phone` | `cf6ffe5` |

Baseline before v1.1 (already on primary): type-scale-v1 on Dysphoria (`eccb4a2` / mirror `f8e2add`).

QA: type audit `/workspace/qa/type-audit/audit.js` (allowed 11/13/16/20 + Dysphoria Clarendon 40|28, 64|42). Cover shots `/workspace/qa/v1.1-cover-phone/`.

## Sign-off

| Role | Name | Result | Date | Notes |
|---|---|---|---|---|
| Build | Rachel | PASS | 2026-10-11 | Mirror 91d5dd2, 0c5c2dd, cf6ffe5. Primary staged on local branch `type-scale-v2` (0423b6c), not pushed. Locked chrome untouched. |
| QA | Steve | PASS | 2026-10-11 | Mirror tip `b282c9b`, box Chrome 1280 / 412 / 390 (not real glass). All pages on 11/13/16/20 plus Dysphoria Clarendon 40/28, 64/42; Geist menu exempt. Work 600 and phone cover pass; cover measured 356 at 412 and 334 at 390. Flip, caption scroll and Apple Music embed regression clean. Gutter swipe not testable on box; Apple playlist art broken (soft park). Evidence `/workspace/qa/v11-mirror-2026-10-11/`. |
| PM | Dex | PASS | 2026-10-11 | Scope matches Jy's asks (dev feedback: fewer font sizes; bigger cover on phone). Full-width desktop cover banner is still a mock, not in v1.1. Ready for Jy's taste call on the mirror; on yes, Rachel pushes `type-scale-v2` to primary. |
| Final | Jy | PASS | 2026-10-12 | "Looks fine!" — pushed to primary eb6737a. |

### Added after table
| 4 | Work tile images even: srcset 640w + 1080w only, sizes 410px / calc(100vw - 48px), src = 1080w; 1080w recompressed (Dysphoria 180 KB grayscale q64, Front 126, A+I 146, State 143; ratio 1.43); new front-1080w; chrome.js Work prefetch updated. Masters untouched. | `img-even-v1` | `48d0848` |
