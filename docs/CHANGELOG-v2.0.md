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

- On mirror with Druk, HQ portraits, interact cue, load gate. Apex has no EHW.
- **Blocked on Jy:** final square cover (also brings Work tile into the 1.5× image-weight band) + reveal / ship-to-primary timing.
- Soft: mirror-history leave-vs-rewrite parked; registrar 2FA confirm still open (GitHub passkey done 2026-11-02).

## Sign-off (v2.0 Final — blank until ready)

| Role | Name | Result | Date | Notes |
|---|---|---|---|---|
| Build | Rachel | | | |
| QA | Steve | | | |
| PM | Dex | | | Contact-kill Soft PASS `3d3a141`; primary held per Jy |
| Final | Jy | | | |
