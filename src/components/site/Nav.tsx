import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n";

const links = [
  { to: "#profile", key: "profile" },
  { to: "#connect", key: "connect" },
  { to: "#impact", key: "work" },
  { to: "#lab", key: "lab" },
  { to: "#projects", key: "projects" },
  { to: "#education", key: "education" },
  { to: "#contact", key: "contact" },
] as const;

export function Nav() {
  const t = useT();
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Background layer sits BEHIND the interactive content so links stay crisp and clickable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/92 via-background/70 to-transparent backdrop-blur-md"
      />
      <div className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="flex items-baseline gap-2 font-display text-lg tracking-tight text-foreground"
          aria-label="Pablo Silva Dutra · Início"
        >
          <span className="font-black">PSD</span>
          <span className="hidden text-eyebrow sm:inline">Pablo Silva Dutra</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Seções">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.to}
              className="text-eyebrow transition-colors hover:text-foreground"
            >
              {t.nav[l.key as keyof typeof t.nav]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-eyebrow">
          <span className="text-foreground">PT</span>
          <span aria-hidden className="text-hairline">/</span>
          <span title="Em breve" className="opacity-40">EN</span>
        </div>
      </div>
    </header>
  );
}
