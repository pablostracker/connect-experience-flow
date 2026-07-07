# Pablo Silva Dutra — Portfólio Interativo

An editorial, cinematic single-site experience in Portuguese (i18n-ready for English), built on TanStack Start + Tailwind v4. No résumé tropes, no SaaS clichés, no fake data — only the content you provided.

## Visual system

- **Palette (tokens in `src/styles.css`)**: `--bg` deep black `oklch(0.14 0 0)`, `--graphite` `oklch(0.22 0.005 260)`, `--smoke` `oklch(0.32 0.006 260)`, `--foreground` warm off-white `oklch(0.96 0.01 80)`, `--silver` metallic `oklch(0.82 0.01 250)`, `--copper` `oklch(0.68 0.09 45)`. All components consume tokens — no hardcoded colors.
- **Typography** (loaded via `<link>` in `__root.tsx`):
  - Display: **Fraunces** (editorial serif, high-contrast weights 300/900 with optical size) for hero and section titles.
  - Body: **Inter Tight** for supporting copy.
  - Mono accent: **JetBrains Mono** for micro-labels ("01 / PEOPLE", metric captions).
- **Motion**: Framer Motion, restrained. One cinematic hero reveal, section fade-on-scroll, subtle magnetic hovers on primary CTAs. No parallax overload, no scroll-jacking. `prefers-reduced-motion` respected.
- **Grain / depth**: soft noise overlay via `@utility grain`, radial vignette at hero, thin 1px silver hairlines as section dividers.

## Internationalization

- Lightweight `src/i18n/` with `pt.ts` (default) and `en.ts` stubs, a `useT()` hook reading from a `LocaleProvider` in `__root.tsx`. All copy imported from dictionaries — zero hardcoded strings in components. English file scaffolded but only PT-BR filled now.

## Routing & architecture

Single-page scroll experience with real routes for shareable deep sections and SEO.

```
src/routes/
  __root.tsx         → shell, fonts, LocaleProvider, nav, footer
  index.tsx          → Hero + all sections composed
  trabalho.tsx       → detailed Selected Impact + Journey (linked from CTA)
  laboratorio.tsx    → AI & Business Lab expanded
  projetos.tsx       → Side Quests expanded (Falcões, LOUD, Naruto BR, Sports)
  contato.tsx        → Contact
src/components/site/
  Nav.tsx, Footer.tsx, SectionLabel.tsx, Hairline.tsx, MagneticButton.tsx,
  Hero.tsx, ConnectedKeywords.tsx,
  WhatIConnect.tsx (interactive 4-territory diagram),
  SelectedImpact.tsx (editorial data storytelling),
  Journey.tsx (interactive case-study reveal),
  AILab.tsx (capability map),
  SideQuests.tsx (4 project modules),
  NarutoScene.tsx (bespoke cinematic block, abstract metallic leaf SVG),
  Education.tsx (constellation),
  Contact.tsx
src/i18n/{index.ts, pt.ts, en.ts}
```

Each route sets its own `head()` (title, description, og:title/description, twitter). No og:image invented; hosting fills it.

## Section-by-section build notes

**Hero** — Full-viewport black. Fraunces display sets "PABLO SILVA DUTRA" at ~13vw, tight tracking. Beneath: mono eyebrow "Customer Success · Operations · CX · AI & Automation". Editorial headline in warm off-white. Two CTAs: primary silver-outlined "Conheça meu trabalho", ghost "Fale comigo". Bottom-right: `ConnectedKeywords` — PEOPLE / OPERATIONS / DATA / AI orbit each other with animated SVG lines that pulse between them (a system, not floating text).

**O que eu conecto** — Four territories arranged as an interactive constellation. Hovering one dims the others and highlights the connecting lines to the other three, reinforcing "works at the intersection". Each territory expands to its sub-items (Leadership, Customer Success, etc.). Works on mobile as a stacked accordion with the same line motif.

**Selected Impact** — Editorial layout, not cards.
- **ROI Ventures**: giant Fraunces numerals (+10.04%, 177.79%, 115.20%, 103.86%) each with a one-line context. Numbers count-up on view, once, subtly. A single thin animated line rises to the exact percentage — no fake chart axes.
- **V4 / Hicryo**: narrative block "From Customer Success to new business expansion" with 5 / R$16K / ~R$80K set as inline typographic pull-quotes.
- **Ambev**: three target→achieved pairs rendered as horizontal progression bars in silver/copper, target tick marked, achieved value glowing past it.

**Professional Journey** — Vertical rail on desktop, four experiences (ROI Ventures, V4, Ambev/Zé Delivery, Atento/Grupo JCA). Click reveals a four-part case: CONTEXTO / DESAFIO / O QUE EU FIZ / RESULTADO. Copy stays tight — one paragraph each, drawn only from what you've provided. Placeholder copy uses only facts already given; anything unknown is left as a short intentional line ("Detalhes sob solicitação") rather than invented.

**AI & Business Lab** — Interactive capability map. Four category clusters (AI Models & Research, Agents & Automation, Creative AI, Product & Building) as nodes; hovering a tool highlights the business outcomes it powers ("Insights", "Automação de operação", "Comunicação visual", "Produto"). No logo wall — tool names set in mono type, outcomes in serif. Rendered with SVG so lines animate cleanly.

**Side Quests** — Four immersive modules, each a full-width band:
1. **Gerando Falcões** — warm off-white on graphite, human tone.
2. **LOUD / iGame / Short Video** — faster micro-motion, mono accents.
3. **Naruto Brasil** — bespoke black cinematic scene. Abstract metallic leaf built from original SVG paths (spiral vein motif, no Naruto IP). Copper glow. Explains generative AI, hyperrealism, visual direction workflow and its business value.
4. **Customer Insights / Sports Tech** — triathlon-as-research angle, connecting community listening → product perception.

**Education** — Constellation of degrees. Each program is a node sized by depth (Master's larger). Connecting lines suggest disciplinary bridges (Data ↔ AI, UX ↔ Retail). No timeline.

**Contact** — Large "Vamos construir algo?" in Fraunces. Four functional actions:
- WhatsApp → `https://wa.me/5531984668908`
- SMS → `sms:+5531984668908`
- Email → `mailto:pablosilvautra@gmail.com`
- LinkedIn → `https://linkedin.com/in/pablo-dutra-38501875`

Nav (fixed, minimal): logotype "PSD" left, section links right, PT/EN toggle (EN disabled with tooltip "Em breve" until English copy lands).

## Accessibility & performance

- Semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`).
- Focus states in silver, visible on dark.
- `prefers-reduced-motion` disables count-ups, magnetic hovers, keyword orbit.
- Fonts loaded with `display=swap`, preconnect to fonts.gstatic.
- SVG-only illustrations (no bitmap stock).

## Out of scope for v1

- Full English translation (dictionary scaffolded, toggle disabled).
- Backend / CMS (all copy in i18n dictionaries).
- Analytics / forms (contact is direct links).

Confirm and I'll build it.