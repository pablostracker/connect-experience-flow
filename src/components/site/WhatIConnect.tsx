import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";
import { useMounted } from "@/hooks/use-mounted";

// Node positions in a 4x2 grid, in normalized SVG coords (0-100)
const NODES = [
  { id: "people", x: 12, y: 22 },
  { id: "ops", x: 88, y: 30 },
  { id: "data", x: 22, y: 82 },
  { id: "ai", x: 86, y: 78 },
];

// All 6 pairwise connections between 4 nodes
const LINKS: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [1, 3],
  [2, 3],
];

const CONTEXT = {
  people: {
    eyebrow: "01 · Pessoas",
    title: "Liderança que transforma repertório em ritmo de execução.",
    body:
      "Conecto desenvolvimento, comunicação e leitura de contexto para criar times com autonomia, clareza de prioridade e maturidade para lidar com carteira, conflito e evolução de jornada.",
    points: ["Rituais de desenvolvimento", "Alinhamento entre áreas", "Comunicação executiva"],
  },
  ops: {
    eyebrow: "02 · Operação",
    title: "Processos vivos para receita, escala e previsibilidade.",
    body:
      "Ao clicar em Operação, o foco abre em desenho de processo, cadência, diagnóstico de gargalos e gestão de performance. É onde a estratégia vira rotina mensurável.",
    points: ["Playbooks e rotinas", "Gestão de carteira", "Priorização por impacto"],
  },
  data: {
    eyebrow: "03 · Dados",
    title: "Dashboards que contam uma história acionável.",
    body:
      "Dados entram como camada de leitura: comportamento, sentimento, tickets, funil, adoção e performance. O objetivo não é só reportar, é decidir o próximo movimento.",
    points: ["Painéis executivos", "Insights operacionais", "Leitura de tendência"],
  },
  ai: {
    eyebrow: "04 · IA",
    title: "Inteligência artificial aplicada ao trabalho real.",
    body:
      "Ao clicar em IA, a camada contextual mostra automação, agentes, LLMs e inteligência criativa conectados ao negócio, sem perder o senso operacional e humano da experiência.",
    points: ["Agentes e automações", "Análise de texto e sentimento", "Produtividade assistida"],
  },
  "ops-ai": {
    eyebrow: "Conexão · Operação + IA",
    title: "Onde processos ganham inteligência contínua.",
    body:
      "A linha entre Operação e IA representa a transformação de rotinas manuais em sistemas assistidos: triagem, diagnóstico, playbooks, alertas, priorização e geração de próximos passos.",
    points: ["Automação de rotinas", "Alertas de risco", "Recomendação de ação"],
  },
} as const;

type ContextKey = keyof typeof CONTEXT;

export function WhatIConnect() {
  const t = useT();
  const reducedPref = !!useReducedMotion();
  const mounted = useMounted();
  // Only enable motion after mount, so SSR + first client render agree.
  const reduce = reducedPref || !mounted;
  const [active, setActive] = useState<ContextKey | null>(null);
  const activePanel = active ? CONTEXT[active] : CONTEXT["ops-ai"];

  return (
    <SectionShell
      id="connect"
      label={t.connect.label}
      title={t.connect.title}
    >
      <div className="relative isolate overflow-hidden border border-hairline bg-black">
        {/* deep-space background */}
        <div
          aria-label="Constelação interativa entre Pessoas, Operação, Dados e IA"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, oklch(0.2 0.02 260 / 0.6), transparent 65%), radial-gradient(circle at 15% 90%, oklch(0.28 0.04 30 / 0.25), transparent 55%)",
          }}
        />
        {/* drifting nebula for constant motion */}
        {!reduce && (
          <>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-x-10 -top-10 h-72 rounded-full blur-3xl"
              style={{ background: "oklch(0.55 0.14 260 / 0.25)" }}
              animate={{ x: [-20, 30, -20], y: [-10, 20, -10], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 right-0 h-80 w-80 rounded-full blur-3xl"
              style={{ background: "oklch(0.60 0.15 30 / 0.22)" }}
              animate={{ x: [10, -30, 10], y: [0, -20, 0], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
        <Starfield reduce={reduce} />

        {/* Constellation lines overlay — subtle continuous drift on the whole SVG */}
        <motion.svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          animate={reduce ? undefined : { rotate: [0, 1.2, 0, -1.2, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <defs>
            <linearGradient id="line-copper" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.72 0.11 45 / 0)" />
              <stop offset="45%" stopColor="oklch(0.72 0.11 45 / 0.5)" />
              <stop offset="100%" stopColor="oklch(0.72 0.11 45 / 0)" />
            </linearGradient>
          </defs>
          {LINKS.map(([a, b], i) => {
            const na = NODES[a];
            const nb = NODES[b];
            const isOpsAi = [na.id, nb.id].includes("ops") && [na.id, nb.id].includes("ai");
            const isActiveLink = active === "ops-ai" || active === na.id || active === nb.id;
            return (
              <g key={`${a}-${b}`}>
                <motion.line
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke={isActiveLink ? "oklch(0.78 0.11 45 / 0.95)" : "url(#line-copper)"}
                  strokeWidth={isActiveLink ? "0.34" : "0.18"}
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: isActiveLink ? 1 : 0.72 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 2.2, delay: 0.3 + i * 0.18, ease: [0.2, 0.7, 0.2, 1] }}
                />
              </g>
            );
          })}
          {/* Traveling pulses on every link — always in motion */}
          {!reduce &&
            LINKS.map(([a, b], i) => {
              const na = NODES[a];
              const nb = NODES[b];
              const isOpsAi = [na.id, nb.id].includes("ops") && [na.id, nb.id].includes("ai");
              return (
                <g key={`pulse-${i}`}>
                  <motion.circle
                    r={isOpsAi ? "1.15" : "0.72"}
                    fill={isOpsAi ? "oklch(0.86 0.13 165)" : "oklch(0.92 0.14 60)"}
                    initial={{ cx: na.x, cy: na.y, opacity: 0 }}
                    animate={{
                      cx: [na.x, nb.x, na.x],
                      cy: [na.y, nb.y, na.y],
                      opacity: [0, 1, 0.55, 1, 0],
                    }}
                    transition={{
                      duration: isOpsAi ? 3.8 : 6 + i * 0.6,
                      delay: isOpsAi ? 0 : 1 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {isOpsAi && (
                    <motion.circle
                      r="0.55"
                      fill="oklch(0.96 0.02 80)"
                      initial={{ cx: nb.x, cy: nb.y, opacity: 0 }}
                      animate={{
                        cx: [nb.x, na.x, nb.x],
                        cy: [nb.y, na.y, nb.y],
                        opacity: [0, 0.95, 0.45, 0.95, 0],
                      }}
                      transition={{ duration: 4.6, delay: 0.9, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </g>
              );
            })}
        </motion.svg>

        <button
          type="button"
          aria-label="Abrir contexto da conexão entre Operação e IA"
          onClick={() => setActive("ops-ai")}
          onMouseEnter={() => setActive("ops-ai")}
          className="absolute z-10 h-7 origin-left -translate-y-1/2 cursor-pointer bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
          style={{
            left: "88%",
            top: "30%",
            width: "48.4%",
            transform: "translateY(-50%) rotate(86deg)",
            transformOrigin: "left center",
          }}
        />


        {/* Territory nodes absolutely positioned over the constellation */}
        <div className="relative grid grid-cols-1 gap-px sm:grid-cols-2">
          {t.connect.territories.map((ter, i) => {
            const contextKey = ter.id as ContextKey;
            const isActive = active === ter.id || (active === "ops-ai" && (ter.id === "ops" || ter.id === "ai"));
            const dim = active && !isActive;
            const node = NODES[i];
            return (
              <motion.button
                key={ter.id}
                type="button"
                aria-pressed={isActive}
                aria-label={`Abrir contexto de ${ter.name}`}
                onMouseEnter={() => setActive(contextKey)}
                onClick={() => setActive((current) => (current === contextKey ? null : contextKey))}
                onFocus={() => setActive(contextKey)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
                animate={{ opacity: dim ? 0.4 : 1 }}
                className="group relative bg-transparent p-8 text-left transition-colors hover:bg-graphite/50 focus:bg-graphite/50 focus:outline-none md:p-12"
              >
                {/* Node star glyph aligned to constellation coord */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute flex h-3 w-3 items-center justify-center"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      isActive ? "bg-copper" : "bg-silver-dim/60"
                    }`}
                    style={{
                      boxShadow: isActive
                        ? "0 0 18px oklch(0.72 0.11 45 / 0.8), 0 0 4px oklch(0.72 0.11 45)"
                        : "0 0 6px oklch(0.86 0.008 250 / 0.4)",
                    }}
                  />
                  {isActive && !reduce && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-copper"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </span>

                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs tracking-[0.24em] text-silver-dim">
                    {ter.code}
                  </span>
                  <span
                    aria-hidden
                    className={`h-1 flex-1 origin-left bg-copper transition-transform duration-700 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ maxWidth: "3rem" }}
                  />
                </div>
                <div className="mt-6 font-display text-4xl tracking-tight text-foreground md:text-5xl">
                  {ter.name}
                </div>
                <ul className="mt-6 space-y-1.5 text-silver-dim">
                  {ter.items.map((item, ii) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6 + i * 0.15 + ii * 0.05,
                      }}
                      className="text-sm md:text-base"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.button>
            );
          })}
        </div>
        <div className="relative border-t border-hairline bg-graphite/35 p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active ?? "ops-ai-default"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
              className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.42fr)] md:items-end"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-copper">
                  {activePanel.eyebrow}
                </div>
                <h3 className="mt-3 max-w-4xl font-display text-2xl text-foreground md:text-4xl">
                  {activePanel.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-silver-dim md:text-lg">
                  {activePanel.body}
                </p>
              </div>
              <div className="grid gap-2">
                {activePanel.points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="flex items-center gap-3 border border-hairline bg-background/50 px-4 py-3 text-sm text-silver"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-copper shadow-[0_0_16px_oklch(0.72_0.11_45/0.85)]" />
                    {point}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionShell>
  );
}

function Starfield({ reduce }: { reduce: boolean }) {
  // Deterministic pseudo-random stars so SSR matches client
  const stars = Array.from({ length: 60 }).map((_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const seed2 = ((i + 17) * 9301 + 49297) % 233280;
    const rand2 = seed2 / 233280;
    const seed3 = ((i + 31) * 9301 + 49297) % 233280;
    const rand3 = seed3 / 233280;
    return {
      x: rand * 100,
      y: rand2 * 100,
      r: 0.3 + rand3 * 1.1,
      delay: rand * 6,
    };
  });
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {stars.map((s, i) => (
        <motion.circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r * 0.15}
          fill="oklch(0.95 0.02 80)"
          initial={{ opacity: 0.2 }}
          animate={reduce ? undefined : { opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: 4 + (i % 5),
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
