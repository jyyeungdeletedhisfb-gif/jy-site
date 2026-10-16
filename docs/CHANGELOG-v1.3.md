# CHANGELOG — v1.3 (mirror jy-site first)

Base: primary `9d3bcfa` (v1.2). Primary not pushed; it stays on v1.2 until Jy's Final.
Taste URL: https://jyyeungdeletedhisfb-gif.github.io/jy-site/dysphoria/?v=v1.3-link-embed

| # | Change | Cache tip | Mirror SHA |
|---|---|---|---|
| 1 | Footer "Back home": bordered button → plain underlined text link (12px Helvetica, uppercase, same centred position and 28px bottom margin). Border and padding removed in shared `chrome.css` `.footer-home`, so every non-home footer (Work, About I/He, Contact, Privacy, Dysphoria) matches. Hover is colour only. | `v1.3-link-embed` | `5bd183b` |
| 2 | Dysphoria Apple Music embed: removed the 24px (24px 16px) padding on `.soundtrack-inner` so the embed hugs its content. No empty bordered gap below; iframe height matches painted card (500 at 1280; 450 + 1px border at 412/390); no inner scrollbar. | `v1.3-link-embed` | `5bd183b` |

QA: `/workspace/qa/v1.3-link-embed/` (footer + embed screenshots at 1280 / 412 / 390, `results.txt`); type audit and image-weight gates PASS.

## Sign-off

| Role | Name | Result | Date | Notes |
|---|---|---|---|---|
| Build | Rachel | PASS | 2026-10-16 | Mirror `5bd183b`: Back home underlined text link on all 5 footers (12px Helvetica, 0 border/padding, centred) at 1280 / 412 / 390; embed padding 0, bottom gap 0, no inner scroll. Type audit unchanged; image weight 180 / 126 / 146 / 143 KB, ratio 1.43 PASS. Primary not pushed. |
| QA | Steve | PASS | 2026-10-16 | UI `5bd183b` / docs `0c74452` at 1280 / 412 / 390: Back home underlined, no border; embed padding 0, no gap or inner scroll; regression and type/weight gates PASS. Soft note: Soundtrack heading aligns with embed left edge (Jy taste call). Evidence `/workspace/qa/v13-mirror-2026-10-16/`. |
| PM | Dex | PASS | 2026-10-16 | Scope matches Jy's go (Back home link, embed padding; Apple Music thumb cut). Ready for Jy Final; primary stays v1.2 until then. |
| Final | Jy | | | |
