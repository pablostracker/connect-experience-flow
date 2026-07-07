import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  density?: number;
  copperMix?: number;
};

export function StarfieldBackground({
  className = "",
  density = 14000,
  copperMix = 0.18,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; c: string; tw: number };
    const palette = ["246,240,228", "170,170,180", "200,120,70"];
    let particles: P[] = [];
    let raf = 0;
    let w = 0, h = 0, dpr = 1;

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(180, Math.floor((w * h) / density));
      particles = Array.from({ length: count }, () => {
        const useCopper = Math.random() < copperMix;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: 0.3 + Math.random() * 1.3,
          a: 0.12 + Math.random() * 0.35,
          c: useCopper ? palette[2] : palette[Math.random() < 0.5 ? 0 : 1],
          tw: Math.random() * Math.PI * 2,
        };
      });
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.tw += 0.02;
        if (p.x < -2) p.x = w + 2;
        if (p.x > w + 2) p.x = -2;
        if (p.y < -2) p.y = h + 2;
        if (p.y > h + 2) p.y = -2;
        const twinkle = 0.6 + 0.4 * Math.sin(p.tw);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.c},${p.a * twinkle})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(tick);
    };

    init();
    tick();

    const onResize = () => {
      cancelAnimationFrame(raf);
      init();
      tick();
    };
    window.addEventListener("resize", onResize);
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduce) tick();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [density, copperMix]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
