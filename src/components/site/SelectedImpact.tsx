import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduce]);
  return n;
}

function Percent({
  value,
  caption,
  active,
  index,
}: {
  value: string;
  caption: string;
  active: boolean;
  index: number;
}) {
  const num = parseFloat(value.replace(/[^\d,.-]/g, "").replace(",", "."));
  const sign = value.startsWith("+") ? "+" : value.startsWith("-") ? "-" : "";
  const isPos = !!sign;
  const n = useCountUp(Math.abs(num), active);
  const displayed = n.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const cap = Math.min(200, Math.abs(num));
  const barPct = (cap / 200) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
      className="hairline-t py-10 first:border-t-0 first:pt-0"
    >
      <div className="flex items-baseline gap-2 font-display text-6xl font-light leading-none tracking-tight text-foreground md:text-[6rem]">
        {isPos && <span className="text-copper">{sign}</span>}
        <span>{displayed}</span>
        <span className="text-silver-dim">%</span>
      </div>
      <div className="mt-6">
        <div className="relative h-[3px] w-full overflow-hidden bg-hairline">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: active ? barPct / 100 : 0 }}
            transition={{ duration: 1.6, delay: 0.2 + index * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
            style={{
              transformOrigin: "left",
              background:
                "linear-gradient(90deg, oklch(0.86 0.008 250) 0%, oklch(0.78 0.15 200) 35%, oklch(0.72 0.11 45) 100%)",
            }}
            className="absolute inset-y-0 left-0 w-full"
          />
        </div>
      </div>
      <div className="mt-5 max-w-md text-silver-dim md:text-lg">{caption}</div>
    </motion.div>
  );
}

function AmbevBar({
  target,
  achieved,
  active,
  index,
}: {
  target: number;
  achieved: number;
  active: boolean;
  index: number;
}) {
  const scale = achieved / target;
  const targetPos = Math.min(1, target / achieved);
  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.14, ease: [0.2, 0.7, 0.2, 1] }}
      className="hairline-t py-8 first:border-t-0 first:pt-0"
    >
      <div className="flex items-baseline justify-between font-mono text-xs text-silver-dim">
        <span>Meta {fmt(target)}</span>
        <span className="text-foreground">Realizado {fmt(achieved)}</span>
      </div>
      <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-hairline">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ duration: 1.8, delay: 0.15 + index * 0.14, ease: [0.2, 0.7, 0.2, 1] }}
          style={{
            transformOrigin: "left",
            background:
              "linear-gradient(90deg, oklch(0.7 0.19 250) 0%, oklch(0.78 0.16 200) 35%, oklch(0.82 0.14 150) 60%, oklch(0.78 0.15 80) 80%, oklch(0.72 0.18 45) 100%)",
          }}
          className="absolute inset-y-0 left-0 w-full"
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: active ? "200%" : "-100%" }}
          transition={{ duration: 2, delay: 0.5 + index * 0.14, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 w-1/3 mix-blend-overlay"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(1 0 0 / 0.5) 50%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute top-1/2 h-4 w-px -translate-y-1/2 bg-foreground"
          style={{ left: `${targetPos * 100}%` }}
        />
      </div>
      <div className="mt-3 text-eyebrow text-copper">
        +{((scale - 1) * 100).toFixed(1).replace(".", ",")}% vs meta
      </div>
    </motion.div>
  );
}

function IndicatorRing({
  label,
  value,
  suffix,
  active,
  index,
  maxValue = 100,
}: {
  label: string;
  value: number;
  suffix: string;
  active: boolean;
  index: number;
  maxValue?: number;
}) {
  const pct = Math.min(1, value / maxValue);
  const r = 42;
  const c = 2 * Math.PI * r;
  const n = useCountUp(value, active, 1400);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <defs>
            <linearGradient id={`ring-${label}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.16 200)" />
              <stop offset="100%" stopColor="oklch(0.72 0.18 45)" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r={r} fill="none" stroke="var(--hairline)" strokeWidth="4" />
          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={`url(#ring-${label})`}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: active ? c * (1 - pct) : c }}
            transition={{ duration: 1.6, delay: 0.15 + index * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-2xl text-foreground">
          {suffix ? `${Math.round(n)}${suffix}` : Math.round(n)}
        </div>
      </div>
      <div className="text-eyebrow text-center">{label}</div>
    </motion.div>
  );
}

export function SelectedImpact() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionShell
      id="impact"
      label={t.impact.label}
      title={t.impact.title}
      intro="Sem cards genéricos. Só o que aconteceu, contado como se conta uma reportagem."
    >
      <div ref={ref} className="space-y-32">
        {/* ROI Ventures */}
        <div>
          <div className="text-eyebrow">{t.impact.roi.company}</div>
          <div className="mt-2 font-display text-lg text-silver-dim md:text-xl">
            {t.impact.roi.kicker}
          </div>
          <div className="mt-10 grid gap-0 md:grid-cols-2">
            {t.impact.roi.metrics.map((m, i) => (
              <div key={m.value} className="md:odd:pr-12 md:even:pl-12">
                <Percent value={m.value} caption={m.caption} active={inView} index={i} />
              </div>
            ))}
          </div>

          {/* Faturamento total */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="hairline-t mt-12 pt-10"
          >
            <div className="text-eyebrow">Base ativa · junho</div>
            <div
              className="mt-3 font-display font-light leading-none tracking-tight text-foreground"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              {t.impact.roi.totalValue}
            </div>
            <div className="mt-4 max-w-lg text-silver-dim md:text-lg">
              {t.impact.roi.totalCaption}
            </div>
          </motion.div>
        </div>

        {/* V4 / Hicryo */}
        <div className="hairline-t pt-20">
          <div className="text-eyebrow">{t.impact.v4.company}</div>
          <div className="mt-2 font-display text-lg text-silver-dim md:text-xl">
            {t.impact.v4.kicker}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-8 max-w-2xl font-display text-2xl leading-snug text-foreground md:text-3xl"
          >
            {t.impact.v4.body}
          </motion.p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {t.impact.v4.pulls.map((p, i) => (
              <motion.div
                key={p.caption}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="font-display text-3xl text-copper md:text-5xl">{p.value}</div>
                <div className="mt-3 text-eyebrow">{p.caption}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ambev */}
        <div className="hairline-t pt-20">
          <div className="text-eyebrow">{t.impact.ambev.company}</div>
          <div className="mt-2 font-display text-lg text-silver-dim md:text-xl">
            {t.impact.ambev.kicker}
          </div>
          <div className="mt-10">
            {t.impact.ambev.rows.map((r, i) => (
              <AmbevBar
                key={i}
                target={r.target}
                achieved={r.achieved}
                active={inView}
                index={i}
              />
            ))}
          </div>

          <div className="mt-14">
            <div className="text-eyebrow">Indicadores de experiência</div>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {t.impact.ambev.indicators.map((ind, i) => (
                <IndicatorRing
                  key={ind.label}
                  label={ind.label}
                  value={ind.value}
                  suffix={ind.suffix}
                  active={inView}
                  index={i}
                  maxValue={ind.label === "CES" ? 5 : 100}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ROI Club — Low Touch */}
        <div className="hairline-t pt-20">
          <div className="text-eyebrow">{t.impact.roiClub.company}</div>
          <div className="mt-2 font-display text-lg text-silver-dim md:text-xl">
            {t.impact.roiClub.kicker}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-8 max-w-2xl font-display text-2xl leading-snug text-foreground md:text-3xl"
          >
            {t.impact.roiClub.intro}
          </motion.p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {t.impact.roiClub.totals.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                className="group relative overflow-hidden border border-hairline bg-graphite/40 p-5 backdrop-blur-sm"
              >
                <div className="text-eyebrow">{c.label}</div>
                <div className="mt-3 font-display text-2xl leading-none text-foreground md:text-3xl">
                  {c.value}
                </div>
                <div className="mt-2 text-xs text-silver-dim">{c.meta}</div>
                <div className="mt-4 h-[2px] w-full overflow-hidden bg-hairline">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: c.pct }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.3 + i * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                    style={{
                      transformOrigin: "left",
                      background:
                        "linear-gradient(90deg, oklch(0.7 0.19 250), oklch(0.78 0.16 180), oklch(0.72 0.18 45))",
                    }}
                    className="h-full w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 space-y-4">
            {t.impact.roiClub.analysts.map((a, i) => {
              const pct = a.meta > 0 ? Math.min(1, a.real / a.meta) : 0;
              const color =
                a.status === "CRITICO"
                  ? "oklch(0.65 0.22 25)"
                  : a.status === "ATENCAO"
                  ? "oklch(0.78 0.16 75)"
                  : "oklch(0.72 0.17 150)";
              const statusLabel =
                a.status === "CRITICO" ? "Crítico" : a.status === "ATENCAO" ? "Atenção" : "On Track";
              const fmt = (v: number) =>
                v.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 0,
                });
              return (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                  className="grid gap-3 border border-hairline bg-graphite/30 p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-center md:gap-8"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
                      />
                      <span className="text-eyebrow" style={{ color }}>
                        {statusLabel}
                      </span>
                    </div>
                    <div className="mt-2 font-display text-xl text-foreground md:text-2xl">
                      {a.name}
                    </div>
                    <div className="mt-1 text-xs text-silver-dim">
                      {a.carteira} lojas na carteira
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between font-mono text-xs text-silver-dim">
                      <span>Realizado {fmt(a.real)}</span>
                      <span>Meta {a.meta > 0 ? fmt(a.meta) : "—"}</span>
                    </div>
                    <div className="relative mt-3 h-2 w-full overflow-hidden rounded-full bg-hairline">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: pct }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.6,
                          delay: 0.2 + i * 0.1,
                          ease: [0.2, 0.7, 0.2, 1],
                        }}
                        style={{
                          transformOrigin: "left",
                          background: `linear-gradient(90deg, ${color} 0%, oklch(0.72 0.11 45) 100%)`,
                        }}
                        className="absolute inset-y-0 left-0 w-full"
                      />
                    </div>
                    <div className="mt-2 flex items-start gap-2 text-xs text-silver-dim">
                      <span className="mt-1 h-px w-3 flex-shrink-0 bg-copper" aria-hidden />
                      <span>{a.insight}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 max-w-2xl text-silver-dim md:text-lg"
          >
            {t.impact.roiClub.closing}
          </motion.p>
        </div>
      </div>
    </SectionShell>
  );
}

