import { useT } from "@/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer className="hairline-t mt-32">
      <div className="mx-auto grid max-w-[1440px] gap-6 px-6 py-10 md:grid-cols-3 md:px-10">
        <div className="font-display text-xl">Pablo Silva Dutra</div>
        <div className="text-eyebrow">{t.footer.tagline}</div>
        <div className="text-eyebrow md:text-right">
          © {new Date().getFullYear()} · {t.footer.built}
        </div>
      </div>
    </footer>
  );
}
