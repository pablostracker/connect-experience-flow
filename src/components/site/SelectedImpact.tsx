import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

function useCountUp(target: number, active: boolean, duration = 1400) {
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
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduce]);
  return n;
}

function Percent({ value, caption, active }: { value: string; caption: string; active: boolean }) {
  // parse numeric part from "+10,04%" etc
  const num = parseFloat(value.replace(/[^\d,.-]/g, "").replace(",", "."));
  const isNegOrPos = /^[+-]/.test(value);
  const sign = value.startsWith("+") ? "+" : value.startsWith("-") ? "-" : "";
  const n = useCountUp(Math.abs(num), active);
  const displayed = n.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className="hairline-t py-8 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-2 font-display text-5xl leading-none tracking-tight text-foreground md:text-7xl">
        {isNegOrPos && <span className="text-copper">{sign}</span>}
        <span>{displayed}</span>
        <span className="text-silver-dim">%</span>
      </div>
      <div className="mt-4 max-w-md text-silver-dim md:text-lg">{caption}</div>
    </div>
  );
}

function AmbevBar({
  target,
  achieved,
  active,
}: {
  target: number;
  achieved: number;
  active: boolean;
}) {
  const scale = achieved / target; // > 1
  const width = Math.min(1, target / achieved); // where the target tick sits relative to achieved
  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
  return (
    <div className="hairline-t py-6 first:border-t-0 first:pt-0">
      <div className="flex items-baseline justify-between font-mono text-xs text-silver-dim">
        <span>Meta {fmt(target)}</span>
        <span className="text-foreground">Realizado {fmt(achieved)}</span>
      </div>
      <div className="relative mt-3 h-[3px] w-full bg-hairline">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-silver via-silver to-copper"
        />
        <div
          aria-hidden
          className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-foreground/70"
          style={{ left: `${width * 100}%` }}
          title="Meta"
        />
      </div>
      <div className="mt-2 text-eyebrow text-copper">
        +{((scale - 1) * 100).toFixed(1).replace(".", ",")}% vs meta
      </div>
    </div>
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
      <div ref={ref} className="space-y-24">
        {/* ROI Ventures */}
        <div>
          <div className="text-eyebrow">{t.impact.roi.company}</div>
          <div className="mt-1 font-display text-lg text-silver-dim md:text-xl">
            {t.impact.roi.kicker}
          </div>
          <div className="mt-8 grid gap-0 md:grid-cols-2">
            {t.impact.roi.metrics.map((m) => (
              <div key={m.value} className="md:odd:pr-10 md:even:pl-10">
                <Percent value={m.value} caption={m.caption} active={inView} />
              </div>
            ))}
          </div>
        </div>

        {/* V4 / Hicryo */}
        <div className="hairline-t pt-16">
          <div className="text-eyebrow">{t.impact.v4.company}</div>
          <div className="mt-1 font-display text-lg text-silver-dim md:text-xl">
            {t.impact.v4.kicker}
          </div>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-foreground md:text-3xl">
            {t.impact.v4.body}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {t.impact.v4.pulls.map((p) => (
              <div key={p.caption}>
                <div className="font-display text-3xl text-copper md:text-5xl">{p.value}</div>
                <div className="mt-2 text-eyebrow">{p.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ambev */}
        <div className="hairline-t pt-16">
          <div className="text-eyebrow">{t.impact.ambev.company}</div>
          <div className="mt-1 font-display text-lg text-silver-dim md:text-xl">
            {t.impact.ambev.kicker}
          </div>
          <div className="mt-8">
            {t.impact.ambev.rows.map((r, i) => (
              <AmbevBar key={i} target={r.target} achieved={r.achieved} active={inView} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
