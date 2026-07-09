import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";
import triathlonImg from "@/assets/triathlon-splash.jpg.asset.json";

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


        <LoudScene
          name={q.loud.name}
          role={q.loud.role}
          theme={q.loud.theme}
          body={q.loud.body}
          pulls={q.loud.pulls}
        />


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
  // Canonical Konohagakure symbol: a bold spiral with a horizontal tail
  // cutting through the lower half. Built with SVG mask + evenodd so the
  // metallic fill sits inside the glyph silhouette.
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="h-full w-full max-w-[440px]"
      initial={reduce ? undefined : { opacity: 0, scale: 0.9, rotate: -6 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
      aria-hidden
    >
      <defs>
        <linearGradient id="k-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.95 0.02 250)" />
          <stop offset="40%" stopColor="oklch(0.60 0.01 260)" />
          <stop offset="70%" stopColor="oklch(0.30 0.005 260)" />
          <stop offset="100%" stopColor="oklch(0.72 0.11 45)" />
        </linearGradient>
        <linearGradient id="k-shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(1 0 0 / 0)" />
          <stop offset="50%" stopColor="oklch(1 0 0 / 0.6)" />
          <stop offset="100%" stopColor="oklch(1 0 0 / 0)" />
        </linearGradient>
        <radialGradient id="k-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="oklch(0.72 0.11 45 / 0.45)" />
          <stop offset="100%" stopColor="oklch(0.72 0.11 45 / 0)" />
        </radialGradient>

        <mask id="k-mask" maskUnits="userSpaceOnUse">
          <rect width="400" height="400" fill="black" />
          <g fill="white" fillRule="evenodd">
            {/* outer ring (donut) */}
            <path d="M 200 60 a 140 140 0 1 1 -0.01 0 Z M 200 110 a 90 90 0 1 0 0.01 0 Z" />
            {/* inner ring */}
            <path d="M 200 150 a 50 50 0 1 1 -0.01 0 Z M 200 178 a 22 22 0 1 0 0.01 0 Z" />
            {/* solid pupil */}
            <circle cx="200" cy="200" r="14" />
            {/* horizontal tail bars breaking to the right (two stems) */}
            <path d="M 200 214 L 372 214 L 372 232 L 200 232 Z" />
            <path d="M 200 246 L 372 246 L 372 264 L 200 264 Z" />
          </g>
        </mask>
      </defs>

      {/* atmospheric glow */}
      <circle cx="200" cy="215" r="180" fill="url(#k-glow)" />

      {/* metallic fill inside the konoha silhouette */}
      <g mask="url(#k-mask)">
        <rect x="0" y="0" width="400" height="400" fill="url(#k-metal)" />
        {Array.from({ length: 40 }).map((_, i) => (
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
        {!reduce && (
          <motion.rect
            x="0"
            y="0"
            width="180"
            height="400"
            fill="url(#k-shimmer)"
            initial={{ x: -220 }}
            animate={{ x: 420 }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: "easeInOut",
            }}
          />
        )}
      </g>

      {/* etched outlines for definition */}
      <g fill="none" stroke="oklch(0.95 0.02 250 / 0.5)" strokeWidth="1.1">
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="90" />
        <circle cx="200" cy="200" r="50" />
        <circle cx="200" cy="200" r="22" />
        <path d="M 200 214 L 372 214 M 200 232 L 372 232 M 200 246 L 372 246 M 200 264 L 372 264" />
      </g>

      {!reduce && (
        <motion.circle
          cx="200"
          cy="200"
          r="152"
          fill="none"
          stroke="oklch(0.98 0.02 80 / 0.3)"
          strokeWidth="1"
          strokeDasharray="6 14"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
      )}
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

function TriathlonScene({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.img
        src={triathlonImg.url}
        alt="Ilustração de triathlon: nadador, ciclista e corredor em ação com respingos de tinta coloridos"
        width={1536}
        height={1024}
        loading="lazy"
        className="h-full w-full object-cover"
        initial={reduce ? undefined : { scale: 1.06, opacity: 0 }}
        whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
      />
      {/* readability + edge fade to blend into the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.14 0 0 / 0.55) 0%, oklch(0.14 0 0 / 0) 35%, oklch(0.14 0 0 / 0) 65%, oklch(0.14 0 0 / 0.55) 100%), linear-gradient(180deg, oklch(0.14 0 0 / 0) 55%, oklch(0.14 0 0 / 0.75) 100%)",
        }}
      />
      {/* subtle animated color pulses to feel alive */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-10 top-1/3 h-40 w-40 rounded-full blur-3xl"
            style={{ background: "oklch(0.72 0.17 200 / 0.45)" }}
            animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.15, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-10 bottom-1/4 h-40 w-40 rounded-full blur-3xl"
            style={{ background: "oklch(0.72 0.20 25 / 0.45)" }}
            animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.15, 1] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />
        </>
      )}
    </div>
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

  // Sports-tech metrics panel to fill the previously empty side.
  const disciplines = [
    {
      label: "Swim",
      pct: 88,
      hint: "Escuta social de comunidade aquática",
      color: "oklch(0.72 0.17 200)",
    },
    {
      label: "Bike",
      pct: 92,
      hint: "Feedback de performance & equipamento",
      color: "oklch(0.78 0.19 55)",
    },
    {
      label: "Run",
      pct: 95,
      hint: "Sinais de treino, corrida de rua e prova",
      color: "oklch(0.72 0.20 25)",
    },
  ];

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

      {/* Full-bleed triathlon hero */}
      <div className="relative aspect-[16/7] w-full overflow-hidden md:aspect-[21/8]">
        <TriathlonScene reduce={reduce} />
        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6 md:p-10">
          <div>
            <div className="text-eyebrow text-copper">{theme}</div>
            <h3 className="mt-2 font-display text-4xl leading-[1.02] text-foreground md:text-6xl">
              {name}
            </h3>
            <div className="mt-2 font-mono text-sm text-silver-dim">{role}</div>
          </div>
          <div className="flex gap-2">
            {["SWIM", "BIKE", "RUN"].map((d, i) => (
              <span
                key={d}
                className="rounded-full border px-3 py-1 font-mono text-xs tracking-widest"
                style={{
                  borderColor: disciplines[i].color,
                  color: disciplines[i].color,
                  background: "oklch(0.14 0 0 / 0.55)",
                }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Body — 3 columns so the right side stops being empty */}
      <div className="relative grid gap-10 p-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)] md:gap-12 md:p-14">
        <div>
          <p className="max-w-md text-silver-dim md:text-lg">{body}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {pulls.map((p) => (
              <span key={p} className="font-display text-xl text-foreground">
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="text-eyebrow text-silver-dim">
            Sinais por disciplina
          </div>
          {disciplines.map((d, i) => (
            <motion.div
              key={d.label}
              initial={reduce ? undefined : { opacity: 0, x: -12 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.2, 0.7, 0.2, 1],
              }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="font-display text-lg"
                  style={{ color: d.color }}
                >
                  {d.label}
                </span>
                <span className="font-mono text-xs text-silver-dim">
                  {d.pct}%
                </span>
              </div>
              <div className="mt-1 h-[3px] w-full overflow-hidden rounded-full bg-hairline">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: d.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${d.pct}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: 0.2 + i * 0.1,
                    ease: [0.2, 0.7, 0.2, 1],
                  }}
                />
              </div>
              <div className="mt-1.5 text-xs text-silver-dim">{d.hint}</div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6 border-l border-hairline pl-8">
          <div>
            <div className="text-eyebrow text-silver-dim">
              O que a comunidade revela
            </div>
            <ul className="mt-4 space-y-3 text-sm text-silver">
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-[6px] w-[6px] flex-none rounded-full"
                  style={{ background: "oklch(0.72 0.17 200)" }}
                />
                Dor de treino vira roadmap: fricção real no equipamento e no
                app de performance.
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-[6px] w-[6px] flex-none rounded-full"
                  style={{ background: "oklch(0.78 0.19 55)" }}
                />
                Ritual pré-prova como janela de conversão — patrocínio, kit,
                nutrição, wearable.
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-[6px] w-[6px] flex-none rounded-full"
                  style={{ background: "oklch(0.72 0.20 25)" }}
                />
                Pós-prova: NPS emocional altíssimo, hora certa para pedir
                review e indicação.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { k: "3", v: "disciplinas" },
              { k: "1", v: "atleta" },
              { k: "∞", v: "insights" },
            ].map((m) => (
              <div
                key={m.v}
                className="rounded-md border border-hairline bg-background/60 p-3"
              >
                <div className="font-display text-2xl text-foreground">
                  {m.k}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-silver-dim">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
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
        <div className="relative">
          {/* Small bird flying across the header */}
          <FlyingBird reduce={reduce} />
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

function FlyingBird({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute -top-4 left-0 text-copper"
      initial={reduce ? undefined : { x: -40, y: 0, opacity: 0 }}
      animate={
        reduce
          ? { opacity: 0.9 }
          : {
              x: ["-10%", "110%"],
              y: [0, -14, 8, -10, 0],
              opacity: [0, 1, 1, 1, 0],
            }
      }
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.15, 0.5, 0.85, 1],
      }}
    >
      <motion.svg
        viewBox="0 0 40 24"
        className="h-6 w-10 md:h-8 md:w-12"
        animate={reduce ? undefined : { rotate: [-4, 4, -4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.path
          d="M2 12 Q10 2, 20 12 Q30 2, 38 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          animate={
            reduce
              ? undefined
              : {
                  d: [
                    "M2 12 Q10 2, 20 12 Q30 2, 38 12",
                    "M2 12 Q10 20, 20 12 Q30 20, 38 12",
                    "M2 12 Q10 2, 20 12 Q30 2, 38 12",
                  ],
                }
          }
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
}

/* ============================================================
   LOUD · gaming / short-video / iGame capability scene
   ============================================================ */
function HextechCrystal({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lo-crystal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.85 0.14 200)" />
          <stop offset="55%" stopColor="oklch(0.55 0.14 240)" />
          <stop offset="100%" stopColor="oklch(0.32 0.08 260)" />
        </linearGradient>
        <radialGradient id="lo-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="oklch(0.78 0.16 220 / 0.5)" />
          <stop offset="100%" stopColor="oklch(0.78 0.16 220 / 0)" />
        </radialGradient>
      </defs>
      <rect width="120" height="90" fill="oklch(0.1 0.01 260)" />
      <circle cx="60" cy="45" r="34" fill="url(#lo-glow)" />
      <motion.g
        style={{ transformOrigin: "60px 45px" }}
        animate={reduce ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="60,20 80,45 60,70 40,45"
          fill="url(#lo-crystal)"
          stroke="oklch(0.9 0.02 220 / 0.7)"
          strokeWidth="0.6"
        />
        <polygon
          points="60,28 74,45 60,62 46,45"
          fill="none"
          stroke="oklch(0.95 0.04 220 / 0.5)"
          strokeWidth="0.4"
        />
      </motion.g>
      {/* orbiting sparks */}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r="1.2"
            fill="oklch(0.95 0.08 200)"
            initial={{ offsetDistance: `${i * 33}%` }}
            animate={{ offsetDistance: [`${i * 33}%`, `${i * 33 + 100}%`] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              offsetPath: `path("M 60 15 A 30 30 0 1 1 59.9 15")`,
            } as React.CSSProperties}
          />
        ))}
    </svg>
  );
}

function HeatmapMinimap({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="90" fill="oklch(0.1 0.01 260)" />
      {/* minimap frame */}
      <rect x="18" y="8" width="84" height="74" fill="oklch(0.14 0.01 260)" stroke="oklch(0.9 0.02 220 / 0.2)" strokeWidth="0.4" />
      {/* diagonal river */}
      <path d="M 18 82 L 102 8" stroke="oklch(0.5 0.08 220 / 0.35)" strokeWidth="1.2" fill="none" />
      {/* heatmap cells */}
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => {
          const dx = c - 3.5;
          const dy = r - 3;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const heat = Math.max(0, 1 - dist / 5);
          const hue = 20 + heat * 40;
          return (
            <motion.rect
              key={`${r}-${c}`}
              x={20 + c * 10}
              y={10 + r * 10}
              width="9"
              height="9"
              fill={`oklch(${0.3 + heat * 0.4} ${0.08 + heat * 0.14} ${hue})`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: reduce ? 0.8 : heat * 0.9 + 0.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.02 * (r + c) }}
            />
          );
        })
      )}
    </svg>
  );
}

function EngagementFunnel({ reduce }: { reduce: boolean }) {
  const bars = [
    { label: "IMP", v: 1.0, color: "oklch(0.5 0.14 240)" },
    { label: "CTR", v: 0.62, color: "oklch(0.65 0.15 200)" },
    { label: "ENG", v: 0.4, color: "oklch(0.72 0.15 60)" },
    { label: "CONV", v: 0.18, color: "oklch(0.72 0.18 30)" },
  ];
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="90" fill="oklch(0.1 0.01 260)" />
      {bars.map((b, i) => (
        <g key={b.label}>
          <rect x="10" y={12 + i * 18} width="100" height="10" fill="oklch(0.2 0.01 260)" />
          <motion.rect
            x="10"
            y={12 + i * 18}
            height="10"
            fill={b.color}
            initial={{ width: reduce ? 100 * b.v : 0 }}
            whileInView={{ width: 100 * b.v }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
          />
          <text x="10" y={10 + i * 18} fill="oklch(0.86 0.008 250 / 0.7)" fontSize="4.5" fontFamily="monospace">
            {b.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ShortVideoStack({ reduce }: { reduce: boolean }) {
  const thumbs = [
    { x: 12, tone: "oklch(0.32 0.06 260)" },
    { x: 46, tone: "oklch(0.38 0.08 220)" },
    { x: 80, tone: "oklch(0.34 0.1 30)" },
  ];
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="90" fill="oklch(0.1 0.01 260)" />
      {thumbs.map((t, i) => (
        <motion.g
          key={i}
          initial={reduce ? undefined : { y: 8, opacity: 0 }}
          whileInView={reduce ? undefined : { y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
        >
          {/* 9:16 vertical thumbnail */}
          <rect x={t.x} y="10" width="28" height="70" fill={t.tone} stroke="oklch(0.9 0.02 220 / 0.2)" strokeWidth="0.4" />
          {/* play triangle */}
          <polygon points={`${t.x + 12},34 ${t.x + 12},50 ${t.x + 22},42`} fill="oklch(0.95 0.02 80 / 0.85)" />
          {/* progress bar */}
          <rect x={t.x + 3} y="74" width="22" height="1.2" fill="oklch(0.9 0.02 220 / 0.15)" />
          <motion.rect
            x={t.x + 3}
            y="74"
            height="1.2"
            fill="oklch(0.72 0.11 45)"
            initial={{ width: 0 }}
            whileInView={{ width: 22 * (0.5 + i * 0.2) }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4 + i * 0.15 }}
          />
        </motion.g>
      ))}
    </svg>
  );
}

function LoudHexShield({ reduce }: { reduce: boolean }) {
  // Big hex crystal shield for the hero side of the Loud scene
  const hex = "M 200 60 L 340 145 L 340 275 L 200 360 L 60 275 L 60 145 Z";
  return (
    <svg viewBox="0 0 400 420" className="h-full w-full max-w-[480px]" aria-hidden>
      <defs>
        <linearGradient id="loud-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.95 0.04 220)" />
          <stop offset="45%" stopColor="oklch(0.42 0.1 240)" />
          <stop offset="100%" stopColor="oklch(0.2 0.03 260)" />
        </linearGradient>
        <radialGradient id="loud-glow" cx="0.5" cy="0.55" r="0.55">
          <stop offset="0%" stopColor="oklch(0.72 0.16 220 / 0.4)" />
          <stop offset="100%" stopColor="oklch(0.72 0.16 220 / 0)" />
        </radialGradient>
        <linearGradient id="loud-shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(1 0 0 / 0)" />
          <stop offset="50%" stopColor="oklch(1 0 0 / 0.55)" />
          <stop offset="100%" stopColor="oklch(1 0 0 / 0)" />
        </linearGradient>
        <mask id="loud-mask">
          <path d={hex} fill="white" />
        </mask>
      </defs>

      <circle cx="200" cy="220" r="190" fill="url(#loud-glow)" />

      <g mask="url(#loud-mask)">
        <rect x="0" y="0" width="400" height="420" fill="url(#loud-metal)" />
        {Array.from({ length: 30 }).map((_, i) => (
          <line
            key={i}
            x1={-40 + i * 16}
            y1="0"
            x2={40 + i * 16}
            y2="420"
            stroke="oklch(1 0 0 / 0.05)"
            strokeWidth="0.6"
          />
        ))}
        {!reduce && (
          <motion.rect
            x="-200"
            y="0"
            width="180"
            height="420"
            fill="url(#loud-shimmer)"
            initial={{ x: -220 }}
            animate={{ x: 440 }}
            transition={{ duration: 3.4, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
          />
        )}
      </g>

      <path d={hex} fill="none" stroke="oklch(0.95 0.04 220 / 0.55)" strokeWidth="1.2" />

      {/* inner LOUD-style diamond mark */}
      <motion.g
        style={{ transformOrigin: "200px 210px" }}
        initial={reduce ? undefined : { scale: 0.85, opacity: 0 }}
        whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <polygon
          points="200,140 260,210 200,280 140,210"
          fill="oklch(0.14 0.01 260 / 0.6)"
          stroke="oklch(0.95 0.04 220 / 0.8)"
          strokeWidth="1.4"
        />
        <polygon
          points="200,168 240,210 200,252 160,210"
          fill="none"
          stroke="oklch(0.72 0.16 220 / 0.8)"
          strokeWidth="0.9"
        />
        <circle cx="200" cy="210" r="6" fill="oklch(0.9 0.14 220)" />
      </motion.g>
    </svg>
  );
}

function LoudScene({
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

  const capabilities = [
    { title: "Sinal do jogador", caption: "Meta, patch, comportamento in-game em tempo real.", node: <HextechCrystal reduce={reduce} /> },
    { title: "Mapa de atenção", caption: "Onde o público reage, luta e converte no mapa.", node: <HeatmapMinimap reduce={reduce} /> },
    { title: "Funil de engajamento", caption: "Do impression ao lead — leitura por etapa.", node: <EngagementFunnel reduce={reduce} /> },
    { title: "Short Video stack", caption: "Formatos verticais testados, medidos e ranqueados.", node: <ShortVideoStack reduce={reduce} /> },
  ];

  return (
    <article className="relative overflow-hidden border border-hairline bg-black">
      <div className="grain absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 78% 35%, oklch(0.55 0.14 240 / 0.28), transparent 55%), radial-gradient(circle at 12% 85%, oklch(0.28 0.02 260 / 0.5), transparent 60%)",
        }}
      />

      <div className="relative grid gap-10 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-16 md:p-14">
        <div className="relative">
          <div className="text-eyebrow text-copper">{theme}</div>
          {/* League-of-Legends-inspired golden title with teal atmospheric glow */}
          <div className="relative mt-3">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 55% at 30% 55%, oklch(0.55 0.10 200 / 0.55), transparent 70%), radial-gradient(45% 45% at 75% 45%, oklch(0.35 0.08 220 / 0.45), transparent 70%)",
              }}
            />
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative font-display text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, oklch(0.96 0.09 90) 0%, oklch(0.88 0.14 82) 35%, oklch(0.70 0.15 65) 55%, oklch(0.55 0.13 55) 78%, oklch(0.82 0.13 85) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextStroke: "1px oklch(0.28 0.06 55 / 0.9)",
                filter:
                  "drop-shadow(0 2px 0 oklch(0.22 0.04 45)) drop-shadow(0 8px 22px oklch(0.55 0.14 65 / 0.45)) drop-shadow(0 0 32px oklch(0.55 0.10 200 / 0.35))",
              }}
            >
              {name}
            </motion.h3>
            {/* subtle horizontal sheen sweep */}
            {!reduce && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%)",
                }}
              >
                <motion.div
                  className="absolute inset-y-0 w-1/3"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.18), transparent)",
                  }}
                  initial={{ x: "-120%" }}
                  animate={{ x: "320%" }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1.2,
                  }}
                />
              </motion.div>
            )}
          </div>
          <div className="mt-4 font-mono text-sm text-silver-dim">{role}</div>
          <p className="mt-6 max-w-md text-silver-dim md:text-lg">{body}</p>
          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {pulls.map((v) => (
              <li key={v} className="flex items-baseline gap-2 text-eyebrow">
                <span aria-hidden className="text-copper">◆</span>
                <span className="text-foreground normal-case tracking-normal">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center md:min-h-[420px]">
          <LoudHexShield reduce={reduce} />
        </div>
      </div>

      <div className="hairline-t relative border-t border-hairline p-8 md:p-14 md:pt-12">
        <div className="flex items-baseline justify-between">
          <div className="text-eyebrow text-copper">Repertório aplicado</div>
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-silver-dim">
            iGame · LoL · Short Video · Performance
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

