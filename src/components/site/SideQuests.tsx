import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function SideQuests() {
  const t = useT();
  const q = t.quests.items;
  return (
    <SectionShell id="projects" label={t.quests.label} title={t.quests.title}>
      <div className="space-y-24">
        <FalcoesScene
          name={q.falcoes.name}
          role={q.falcoes.role}
          theme={q.falcoes.theme}
          body={q.falcoes.body}
          pulls={q.falcoes.pulls}
        />


        <QuestBlock name={q.loud.name} role={q.loud.role} theme={q.loud.theme} body={q.loud.body}>
          <PullRow items={q.loud.pulls} mono />
        </QuestBlock>

        <NarutoScene
          name={q.naruto.name}
          role={q.naruto.role}
          theme={q.naruto.theme}
          body={q.naruto.body}
          value={q.naruto.value}
        />

        <CustomerInsightsScene
          name={q.sports.name}
          role={q.sports.role}
          theme={q.sports.theme}
          body={q.sports.body}
          pulls={q.sports.pulls}
        />
      </div>
    </SectionShell>
  );
}

function QuestBlock({
  name,
  role,
  theme,
  body,
  children,
}: {
  name: string;
  role: string;
  theme: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="hairline-t pt-10">
      <div className="text-eyebrow">{theme}</div>
      <h3 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-5xl">
        {name}
      </h3>
      <div className="mt-3 font-mono text-sm text-copper">{role}</div>
      <p className="mt-6 max-w-2xl text-silver-dim md:text-lg">{body}</p>
      {children && <div className="mt-8">{children}</div>}
    </article>
  );
}

function PullRow({ items, mono }: { items: readonly string[]; mono?: boolean }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      {items.map((i) => (
        <span
          key={i}
          className={
            mono
              ? "font-mono text-sm text-silver-dim"
              : "font-display text-xl text-foreground"
          }
        >
          {i}
        </span>
      ))}
    </div>
  );
}

/* ============================================================
   KONOHA · metallic animated leaf symbol
   ============================================================ */
function KonohaSymbol({ reduce }: { reduce: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="h-full w-full max-w-[440px]"
      initial={reduce ? undefined : { opacity: 0, scale: 0.9, rotate: -4 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
      aria-hidden
    >
      <defs>
        <linearGradient id="k-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.95 0.02 250)" />
          <stop offset="35%" stopColor="oklch(0.55 0.01 260)" />
          <stop offset="65%" stopColor="oklch(0.28 0.005 260)" />
          <stop offset="100%" stopColor="oklch(0.72 0.11 45)" />
        </linearGradient>
        <linearGradient id="k-shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(1 0 0 / 0)" />
          <stop offset="45%" stopColor="oklch(1 0 0 / 0.55)" />
          <stop offset="55%" stopColor="oklch(1 0 0 / 0.55)" />
          <stop offset="100%" stopColor="oklch(1 0 0 / 0)" />
        </linearGradient>
        <radialGradient id="k-glow" cx="0.5" cy="0.55" r="0.55">
          <stop offset="0%" stopColor="oklch(0.72 0.11 45 / 0.45)" />
          <stop offset="100%" stopColor="oklch(0.72 0.11 45 / 0)" />
        </radialGradient>
        <filter id="k-inner">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
        <mask id="k-mask">
          {/* Konoha leaf: rounded body with a pointed hook tail to lower-right */}
          <path
            d="M 130 260
               C 90 210, 100 120, 195 92
               C 285 68, 330 140, 312 218
               L 348 250
               C 358 262, 350 278, 332 278
               L 285 278
               C 240 300, 165 302, 138 282
               C 118 268, 118 268, 130 260 Z"
            fill="white"
          />
        </mask>
      </defs>

      {/* atmospheric glow */}
      <circle cx="215" cy="200" r="180" fill="url(#k-glow)" />

      {/* metallic fill inside konoha silhouette */}
      <g mask="url(#k-mask)">
        <rect x="0" y="0" width="400" height="400" fill="url(#k-metal)" />
        {/* diagonal brushed lines for metal texture */}
        {Array.from({ length: 36 }).map((_, i) => (
          <line
            key={i}
            x1={-40 + i * 14}
            y1="0"
            x2={40 + i * 14}
            y2="400"
            stroke="oklch(1 0 0 / 0.05)"
            strokeWidth="0.7"
          />
        ))}
        {/* shimmer sweep */}
        {!reduce && (
          <motion.rect
            x="-200"
            y="0"
            width="180"
            height="400"
            fill="url(#k-shimmer)"
            initial={{ x: -220 }}
            animate={{ x: 420 }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "easeInOut",
            }}
          />
        )}
      </g>

      {/* etched outline */}
      <path
        d="M 130 260
           C 90 210, 100 120, 195 92
           C 285 68, 330 140, 312 218
           L 348 250
           C 358 262, 350 278, 332 278
           L 285 278
           C 240 300, 165 302, 138 282
           C 118 268, 118 268, 130 260 Z"
        fill="none"
        stroke="oklch(0.95 0.02 250 / 0.55)"
        strokeWidth="1.2"
        filter="url(#k-inner)"
      />


      {/* animated spiral inside */}
      <motion.path
        d="M205 208
           m -46 0
           a 46 46 0 1 0 92 0
           a 36 36 0 1 1 -72 0
           a 26 26 0 1 0 52 0
           a 16 16 0 1 1 -32 0
           a 8 8 0 1 0 16 0"
        fill="none"
        stroke="oklch(0.98 0.02 80)"
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
      />
      {/* faint copper spiral echo */}
      <path
        d="M205 208 m -46 0 a 46 46 0 1 0 92 0 a 36 36 0 1 1 -72 0 a 26 26 0 1 0 52 0 a 16 16 0 1 1 -32 0 a 8 8 0 1 0 16 0"
        fill="none"
        stroke="oklch(0.72 0.11 45 / 0.35)"
        strokeWidth="0.8"
        transform="translate(1.5,1.5)"
      />
    </motion.svg>
  );
}

/* ============================================================
   Capability chips — micro visualizations of "what I make"
   ============================================================ */
type CapCardProps = {
  title: string;
  caption: string;
  index: number;
  children: React.ReactNode;
};

function CapCard({ title, caption, index, children }: CapCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
      className="group relative overflow-hidden border border-hairline bg-graphite/40 p-4 backdrop-blur-sm"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
        {children}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, oklch(0.22 0.01 260 / 0.5), transparent 60%)",
          }}
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <div className="font-display text-sm text-foreground md:text-base">{title}</div>
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-silver-dim">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      <div className="mt-1 text-xs text-silver-dim">{caption}</div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px w-0 bg-copper transition-all duration-500 group-hover:w-full"
      />
    </motion.div>
  );
}

/* — capability visuals — */
function HyperrealPortrait({ reduce }: { reduce: boolean }) {
  // Face silhouette that "resolves" from noise to photoreal
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="hp-skin" cx="0.5" cy="0.45" r="0.55">
          <stop offset="0%" stopColor="oklch(0.78 0.06 45)" />
          <stop offset="60%" stopColor="oklch(0.42 0.04 45)" />
          <stop offset="100%" stopColor="oklch(0.14 0 0)" />
        </radialGradient>
        <linearGradient id="hp-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.72 0.11 45 / 0.9)" />
          <stop offset="100%" stopColor="oklch(0.72 0.11 45 / 0)" />
        </linearGradient>
      </defs>
      <rect width="120" height="90" fill="oklch(0.12 0 0)" />
      {/* face oval */}
      <ellipse cx="60" cy="52" rx="26" ry="34" fill="url(#hp-skin)" />
      {/* rim light */}
      <ellipse cx="46" cy="52" rx="12" ry="30" fill="url(#hp-rim)" opacity="0.5" />
      {/* eyes hint */}
      <ellipse cx="52" cy="46" rx="2" ry="1.2" fill="oklch(0.95 0.02 80)" opacity="0.7" />
      <ellipse cx="68" cy="46" rx="2" ry="1.2" fill="oklch(0.95 0.02 80)" opacity="0.7" />
      {/* scanning bar */}
      {!reduce && (
        <motion.rect
          x="0"
          y="0"
          width="120"
          height="2"
          fill="oklch(0.72 0.11 45 / 0.7)"
          initial={{ y: -4 }}
          animate={{ y: 92 }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      {/* dissolving noise dots on the right half */}
      {Array.from({ length: 40 }).map((_, i) => {
        const x = 60 + (i % 8) * 7 + (i * 3) % 5;
        const y = 12 + Math.floor(i / 8) * 14 + (i * 5) % 6;
        return (
          <motion.rect
            key={i}
            x={x}
            y={y}
            width="1.4"
            height="1.4"
            fill="oklch(0.9 0.02 80)"
            opacity={0.4}
            initial={{ opacity: reduce ? 0 : 0.6 }}
            animate={{ opacity: reduce ? 0 : [0.6, 0, 0.6] }}
            transition={{ duration: 3, delay: i * 0.04, repeat: Infinity }}
          />
        );
      })}
    </svg>
  );
}

function GenerativeGrid({ reduce }: { reduce: boolean }) {
  // prompt → 4 candidate frames appearing
  const cells = [0, 1, 2, 3];
  const tones = [
    "oklch(0.32 0.04 45)",
    "oklch(0.38 0.06 60)",
    "oklch(0.26 0.04 30)",
    "oklch(0.44 0.08 50)",
  ];
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="90" fill="oklch(0.12 0 0)" />
      {cells.map((i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        return (
          <motion.g
            key={i}
            initial={reduce ? undefined : { opacity: 0, scale: 0.85 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 + i * 0.25 }}
          >
            <rect
              x={10 + col * 52}
              y={8 + row * 38}
              width="48"
              height="34"
              fill={tones[i]}
              stroke="oklch(0.9 0.02 80 / 0.15)"
              strokeWidth="0.4"
            />
            <circle cx={34 + col * 52} cy={22 + row * 38} r="6" fill="oklch(0.78 0.12 60 / 0.7)" />
            <rect
              x={12 + col * 52}
              y={30 + row * 38}
              width="44"
              height="1"
              fill="oklch(0.9 0.02 80 / 0.4)"
            />
          </motion.g>
        );
      })}
      {/* prompt line */}
      <motion.rect
        x="10"
        y="82"
        height="1"
        fill="oklch(0.72 0.11 45)"
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.1 }}
      />
    </svg>
  );
}

function MotionArcs({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="90" fill="oklch(0.12 0 0)" />
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M 10 ${70 - i * 8} Q 60 ${10 + i * 6}, 110 ${60 - i * 4}`}
          stroke={
            ["oklch(0.72 0.11 45)", "oklch(0.86 0.008 250)", "oklch(0.78 0.16 200)"][i]
          }
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.15 + i * 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        />
      ))}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r="1.6"
            fill="oklch(0.95 0.02 80)"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              offsetPath: `path("M 10 ${70 - i * 8} Q 60 ${10 + i * 6}, 110 ${60 - i * 4}")`,
            } as React.CSSProperties}
          />
        ))}
    </svg>
  );
}

function UpscaleMatrix({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="90" fill="oklch(0.12 0 0)" />
      {/* low-res left */}
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 6 }).map((_, c) => {
          const v = 0.2 + ((r * 3 + c * 5) % 7) / 10;
          return (
            <rect
              key={`l${r}-${c}`}
              x={6 + c * 7}
              y={12 + r * 10}
              width="6.5"
              height="9.5"
              fill={`oklch(${v} 0.04 60)`}
            />
          );
        })
      )}
      {/* arrow */}
      <path d="M55 45 L 65 45 M 62 42 L 65 45 L 62 48" stroke="oklch(0.72 0.11 45)" strokeWidth="1" fill="none" />
      {/* high-res right */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={reduce ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {Array.from({ length: 12 }).map((_, r) =>
          Array.from({ length: 12 }).map((_, c) => {
            const v = 0.18 + ((r * 5 + c * 3) % 9) / 12;
            return (
              <rect
                key={`h${r}-${c}`}
                x={70 + c * 3.6}
                y={12 + r * 5}
                width="3.4"
                height="4.8"
                fill={`oklch(${v} 0.06 60)`}
              />
            );
          })
        )}
      </motion.g>
    </svg>
  );
}

/* ============================================================
   NARUTO SCENE
   ============================================================ */
function NarutoScene({
  name,
  role,
  theme,
  body,
  value,
}: {
  name: string;
  role: string;
  theme: string;
  body: string;
  value: readonly string[];
}) {
  const reduce = !!useReducedMotion();

  const capabilities = [
    { title: "Retrato hiper-real", caption: "Iluminação, rim light e pele fotográfica.", node: <HyperrealPortrait reduce={reduce} /> },
    { title: "Direção generativa", caption: "Prompt → 4 variações dirigidas em minutos.", node: <GenerativeGrid reduce={reduce} /> },
    { title: "Movimento & câmera", caption: "Trajetórias e composição para vídeo.", node: <MotionArcs reduce={reduce} /> },
    { title: "Upscale & detalhe", caption: "De baixa a alta definição sem perder identidade.", node: <UpscaleMatrix reduce={reduce} /> },
  ];

  return (
    <article className="relative overflow-hidden border border-hairline bg-black">
      <div className="grain absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 40%, oklch(0.72 0.11 45 / 0.22), transparent 55%), radial-gradient(circle at 15% 80%, oklch(0.28 0.02 260 / 0.4), transparent 60%)",
        }}
      />

      <div className="relative grid gap-10 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-16 md:p-14">
        <div>
          <div className="text-eyebrow text-copper">{theme}</div>
          <h3 className="mt-3 font-display text-4xl leading-[1.05] text-foreground md:text-6xl">
            {name}
          </h3>
          <div className="mt-3 font-mono text-sm text-silver-dim">{role}</div>
          <p className="mt-6 max-w-md text-silver-dim md:text-lg">{body}</p>
          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {value.map((v) => (
              <li key={v} className="flex items-baseline gap-2 text-eyebrow">
                <span aria-hidden className="text-copper">◆</span>
                <span className="text-foreground normal-case tracking-normal">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center md:min-h-[420px]">
          <KonohaSymbol reduce={reduce} />
        </div>
      </div>

      {/* capability strip — "o que sei fazer" */}
      <div className="hairline-t relative border-t border-hairline p-8 md:p-14 md:pt-12">
        <div className="flex items-baseline justify-between">
          <div className="text-eyebrow text-copper">Repertório aplicado</div>
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-silver-dim">
            Hiper-realismo · Direção · Movimento · Detalhe
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <CapCard key={c.title} title={c.title} caption={c.caption} index={i}>
              {c.node}
            </CapCard>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   CUSTOMER INSIGHTS SCENE
   ============================================================ */
function CommunityPulse({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full max-w-[440px]" aria-hidden>
      <defs>
        <radialGradient id="ci-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="oklch(0.78 0.16 200 / 0.4)" />
          <stop offset="100%" stopColor="oklch(0.78 0.16 200 / 0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="transparent" />
      <circle cx="200" cy="150" r="140" fill="url(#ci-glow)" />

      {/* concentric pulse rings */}
      {[40, 70, 100, 130].map((r, i) => (
        <motion.circle
          key={r}
          cx="200"
          cy="150"
          r={r}
          fill="none"
          stroke="oklch(0.86 0.008 250 / 0.35)"
          strokeWidth="0.6"
          initial={{ scale: reduce ? 1 : 0.6, opacity: 0 }}
          animate={{ scale: reduce ? 1 : [0.6, 1.15, 0.6], opacity: reduce ? 0.4 : [0, 0.55, 0] }}
          transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: "200px 150px" }}
        />
      ))}

      {/* center atlete node */}
      <circle cx="200" cy="150" r="6" fill="oklch(0.72 0.11 45)" />
      <circle cx="200" cy="150" r="12" fill="none" stroke="oklch(0.72 0.11 45 / 0.5)" strokeWidth="0.8" />

      {/* orbiting community nodes */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const r = 110 + (i % 3) * 10;
        const x = 200 + Math.cos(angle) * r;
        const y = 150 + Math.sin(angle) * r * 0.75;
        return (
          <g key={i}>
            <line
              x1="200"
              y1="150"
              x2={x}
              y2={y}
              stroke="oklch(0.86 0.008 250 / 0.15)"
              strokeWidth="0.5"
            />
            <motion.circle
              cx={x}
              cy={y}
              r="3"
              fill="oklch(0.86 0.008 250)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
            />
          </g>
        );
      })}

      {/* sentiment micro-bars bottom */}
      <g transform="translate(60,240)">
        {["Cadência", "Wearable", "Nutrição", "Recuperação", "Comunidade"].map((label, i) => {
          const w = [58, 42, 66, 34, 72][i];
          return (
            <g key={label} transform={`translate(${i * 58},0)`}>
              <rect x="0" y="0" width="48" height="4" fill="oklch(0.86 0.008 250 / 0.15)" />
              <motion.rect
                x="0"
                y="0"
                height="4"
                fill={
                  ["oklch(0.72 0.11 45)", "oklch(0.78 0.16 200)", "oklch(0.72 0.17 150)", "oklch(0.78 0.16 75)", "oklch(0.86 0.008 250)"][i]
                }
                initial={{ width: 0 }}
                whileInView={{ width: (w / 100) * 48 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              />
              <text
                x="0"
                y="16"
                fill="oklch(0.62 0.008 250)"
                fontSize="6"
                fontFamily="ui-monospace, monospace"
                letterSpacing="0.15em"
              >
                {label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function CustomerInsightsScene({
  name,
  role,
  theme,
  body,
  pulls,
}: {
  name: string;
  role: string;
  theme: string;
  body: string;
  pulls: readonly string[];
}) {
  const reduce = !!useReducedMotion();
  return (
    <article className="relative overflow-hidden border border-hairline bg-graphite/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, oklch(0.78 0.16 200 / 0.15), transparent 55%), radial-gradient(circle at 85% 80%, oklch(0.72 0.11 45 / 0.15), transparent 55%)",
        }}
      />
      <div className="relative grid gap-10 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16 md:p-14">
        <div>
          <div className="text-eyebrow text-copper">{theme}</div>
          <h3 className="mt-3 font-display text-4xl leading-[1.05] text-foreground md:text-6xl">
            {name}
          </h3>
          <div className="mt-3 font-mono text-sm text-silver-dim">{role}</div>
          <p className="mt-6 max-w-md text-silver-dim md:text-lg">{body}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {pulls.map((p) => (
              <span key={p} className="font-display text-xl text-foreground">
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex min-h-[300px] items-center justify-center">
          <CommunityPulse reduce={reduce} />
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   GERANDO FALCÕES · flapping falcon
   ============================================================ */
function FalconWings({ reduce }: { reduce: boolean }) {
  // Two symmetric wings + small body triangle, wings flap on Y axis.
  const wingLeft = "M 200 130 C 150 90, 90 100, 30 140 C 90 130, 140 140, 200 150 Z";
  const wingRight = "M 200 130 C 250 90, 310 100, 370 140 C 310 130, 260 140, 200 150 Z";
  const flap = reduce ? {} : { scaleY: [1, 0.35, 1] };
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full max-w-[520px]" aria-hidden>
      <defs>
        <linearGradient id="falcon-metal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.28 0.005 260)" />
          <stop offset="50%" stopColor="oklch(0.92 0.01 80)" />
          <stop offset="100%" stopColor="oklch(0.28 0.005 260)" />
        </linearGradient>
        <radialGradient id="falcon-sun" cx="0.5" cy="0.55" r="0.5">
          <stop offset="0%" stopColor="oklch(0.72 0.11 45 / 0.35)" />
          <stop offset="100%" stopColor="oklch(0.72 0.11 45 / 0)" />
        </radialGradient>
      </defs>

      {/* warm glow behind */}
      <circle cx="200" cy="150" r="150" fill="url(#falcon-sun)" />

      {/* horizon line */}
      <motion.line
        x1="20"
        y1="220"
        x2="380"
        y2="220"
        stroke="oklch(0.86 0.008 250 / 0.15)"
        strokeWidth="0.8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
      />

      {/* trailing motion arcs */}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M ${60 + i * 8} ${180 + i * 6} Q 200 ${160 - i * 8}, ${340 - i * 8} ${180 + i * 6}`}
            fill="none"
            stroke="oklch(0.86 0.008 250 / 0.12)"
            strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 3.2, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      {/* flapping bird — wings share the same origin at 200,140 */}
      <motion.g
        initial={reduce ? undefined : { y: -6 }}
        animate={reduce ? undefined : { y: [-6, 4, -6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "200px 140px" }}
      >
        {/* left wing */}
        <motion.path
          d={wingLeft}
          fill="url(#falcon-metal)"
          animate={flap}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 140px", transformBox: "fill-box" as const }}
        />
        {/* right wing */}
        <motion.path
          d={wingRight}
          fill="url(#falcon-metal)"
          animate={flap}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 140px", transformBox: "fill-box" as const }}
        />
        {/* body / head triangle */}
        <path
          d="M 188 140 L 212 140 L 200 168 Z"
          fill="oklch(0.18 0.005 260)"
          stroke="oklch(0.92 0.01 80 / 0.5)"
          strokeWidth="0.6"
        />
      </motion.g>
    </svg>
  );
}

function FalcoesScene({
  name,
  role,
  theme,
  body,
  pulls,
}: {
  name: string;
  role: string;
  theme: string;
  body: string;
  pulls: readonly string[];
}) {
  const reduce = !!useReducedMotion();
  return (
    <article className="relative overflow-hidden border border-hairline bg-graphite/30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, oklch(0.72 0.11 45 / 0.14), transparent 55%), radial-gradient(circle at 15% 80%, oklch(0.28 0.02 260 / 0.4), transparent 60%)",
        }}
      />
      <div className="relative grid gap-10 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16 md:p-14">
        <div>
          <div className="text-eyebrow text-copper">{theme}</div>
          <h3 className="mt-3 font-display text-4xl leading-[1.05] text-foreground md:text-6xl">
            {name}
          </h3>
          <div className="mt-3 font-mono text-sm text-copper">{role}</div>
          <p className="mt-6 max-w-md text-silver-dim md:text-lg">{body}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {pulls.map((p) => (
              <span key={p} className="font-display text-xl text-foreground">
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[360px]">
          <FalconWings reduce={reduce} />
        </div>
      </div>
    </article>
  );
}
