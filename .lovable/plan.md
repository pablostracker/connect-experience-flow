# Pending high-priority tasks (next credit cycle)

Iteration goal: motion, interaction and organization polish.
Items below could not be shipped in the current turn and are queued as **P0** for the next round.

## P0 · Interaction gaps (must ship first)

1. **WhatIConnect — clickable constellation + flowing particles**
   - Make each connecting line and each node (People, Operations, Data, AI) clickable.
   - On click open a side-drawer / modal with contextual content: *what I do in Operations*, *how I apply AI*, etc. Content pulled from `src/i18n/pt.ts` under a new `connect.details` block.
   - Add a continuous moving ball travelling along every link (SVG `<animateMotion>` or framer-motion pathLength ping-pong).
   - Keep the current nebula drift; layer particles on top.

2. **Journey — full-scope modal per company**
   - Replace the current accordion in the "Trajetória completa" list with a proper modal (`Dialog` from `@/components/ui/dialog`) opened on click.
   - Each modal shows: period, role, full scope bullet list, key results, and stack used.
   - Extend `t.journey.trajectory[i]` with `scope[]` and `result` fields for the remaining 13 roles.
   - Elegant transition: fade + scale-in, backdrop blur, close on ESC / overlay click.

## P0 · Continuous motion (currently static)

3. **Gerando Falcões**
   - Slim down `FalconWings` main silhouette (thinner strokes, longer wing arc).
   - Ensure `animate` loops run without `whileInView` gate so motion never pauses.
   - Same for the 4 small `FlyingBird` instances.

4. **LOUD scene**
   - Restore "TA" mention in the copy (currently trimmed).
   - Restore taller card proportions (min-height +25%).
   - Convert the 4 capability icons (`HextechCrystal`, `HeatmapMinimap`, `EngagementFunnel`, `ShortVideoStack`) to always-on loops instead of `whileInView`.

5. **Naruto Brasil**
   - Replace `KonohaSymbol` path with the canonical Hidden Leaf spiral (reference: user-provided PNG).
   - Add continuous shadow sweep across the metal.
   - `HyperrealPortrait` kunai: add "editing" micro-animations (crop handles pulsing, dashed marching-ants selection, slider knobs drifting) to sell the "being edited" idea.

6. **Customer Insights / Sports Tech**
   - Garmin card: add continuous heartbeat pulse behind the line chart.
   - FMTri card: rework hierarchy (federation logo top, ranking podium middle, race calendar bottom).
   - Wellhub: DONE this turn (switched to hot pink #FF1493).

## P0 · Tech Stack polish

7. **AILab metallic chip state**
   - Current selected state is a copper gradient; upgrade to a true brushed-metal look (layered linear-gradient + inset shadow + subtle noise mask).
   - Spacing: DONE this turn (increased `gap` to `md:gap-20`, tightened cluster column).

## P0 · Icons / branding

8. Audit remaining lucide icons on Contact rows for brand accuracy (Xbox uses generic `Gamepad2` — consider custom SVG for the Xbox sphere).

---

## Shipped this turn

- SSR-safe motion hook (`useSafeReducedMotion`) wired across `SideQuests`; fixes the hydration mismatch that was killing clicks in `Languages` and the top nav.
- Removed every user-visible `—` from Languages, Education, SideQuests, Nav, `__root.tsx`.
- Wellhub accent switched to hot pink (#FF1493) with glow + amplified pulse.
- AILab column gap widened so clusters no longer touch the skill chips.
- Discord icon confirmed as the official brand mark.
