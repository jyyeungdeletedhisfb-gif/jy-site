# Legal + Contact (site notes)

Operational notes for **reachability**, **Privacy**, analytics, and cookies. Aligns with `docs/next-workstreams-misc-and-hub.md` (Telha Clarke–style short Privacy; no company-office tone).

## Contact (email-only — no `/contact/` page)

- **No Contact page** on the live site. Email icons (nav + footer) and the About close block cover reachability. A dedicated `/contact/` route only returns when Formspree (or similar) comes back — currently **parked**.
- **Public email:** `thisisjyyeung@gmail.com`
  - Envelope / email icons → `mailto:thisisjyyeung@gmail.com` (`aria-label="Email"`)
  - About close: **CONTACT** subtitle (`about-trail__heading`) + **EMAIL** mailto + **INSTAGRAM**
- Hamburger: no CONTACT text item (icons are enough).
- Home hero section links: WORK / ABOUT only (no CONTACT).

### Formspree (parked)

When Jy reopens a form:
1. Create a Formspree form (Jy’s account).
2. Reintroduce a thin `/contact/` (or About-embedded form) — **do not invent a Formspree form ID** in docs or commits until live.
3. Fields: name, email, message (keep minimal).
4. Restore locked disclaimer copy on the form UI:

  > You’ll get an email receipt when this sends. I usually reply within 5–7 days. I may not respond to spam or hostile messages.

Saved also in `docs/backlog.md`.

## Privacy page (`/privacy/`)

Light personal-artist page:

- Operator: Jy Yeüng / thisisjyyeung.com
- First-party collection: basically none today
- Embeds (Apple Music, etc.): third-party cookies/data under *their* policies
- **No contact form** today — reach via email mailto or Instagram @thisisjyyeung
- Analytics: honest stub — **no first-party analytics today**; update this page when anything is added
- Rights: works © Jy Yeüng; All rights reserved (footer © line remains exact)

## Analytics (later)

- Prefer **privacy-respecting / cookieless** tools (Plausible, Umami) so a cookie-consent CMP is unnecessary.
- If Google Analytics or other non-essential cookies are added: update Privacy + optional simple notice.
- **Do not add analytics scripts** until Jy chooses a tool and Privacy is updated in the same change.

## Cookie banner policy

| Situation | Approach |
| --- | --- |
| Static site, no first-party tracking | No consent wall |
| Privacy-first analytics (Plausible / Umami style) | Prefer these; usually no CMP banner |
| Non-essential / ad-style cookies | Update Privacy; add a simple notice only if required |

Preference: **cookieless analytics to avoid a CMP.**

## Footer / chrome

- © exact: `© 2026 JY YEÜNG. ALL RIGHTS RESERVED`
- Quiet **Privacy** text link under/beside the © line (`.footer-links a` → `privacy/`)
- Email icon → mailto; Instagram → @thisisjyyeung
- Shared on home, Work, About, Dysphoria, EHW (mirror), Privacy

---

*For Dex ↔ Jy / Rachel. No secrets. No live Formspree ID or analytics IDs here.*
