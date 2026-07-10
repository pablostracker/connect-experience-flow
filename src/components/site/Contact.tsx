import { MessageCircle, Mail, Linkedin, MessageSquare, Send, Gamepad2, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

type Row = {
  label: string;
  href: string;
  detail: string;
  external: boolean;
  icon: LucideIcon;
  color: string; // oklch/hex accent
};

export function Contact() {
  const t = useT();

  const rows: Row[] = [
    {
      label: t.contact.actions.whatsapp,
      href: t.contact.whatsappHref,
      detail: t.contact.whatsappDisplay,
      external: true,
      icon: MessageCircle,
      color: "oklch(0.78 0.17 150)",
    },
    {
      label: t.contact.actions.sms,
      href: t.contact.smsHref,
      detail: t.contact.whatsappDisplay,
      external: false,
      icon: Smartphone,
      color: "oklch(0.86 0.008 250)",
    },
    {
      label: t.contact.actions.email,
      href: `mailto:${t.contact.email}`,
      detail: t.contact.email,
      external: false,
      icon: Mail,
      color: "oklch(0.72 0.11 45)",
    },
    {
      label: t.contact.actions.linkedin,
      href: t.contact.linkedinHref,
      detail: t.contact.linkedin,
      external: true,
      icon: Linkedin,
      color: "oklch(0.68 0.15 245)",
    },
    {
      label: t.contact.actions.discord,
      href: "#",
      detail: t.contact.discord,
      external: false,
      icon: MessageSquare,
      color: "oklch(0.66 0.17 275)",
    },
    {
      label: t.contact.actions.telegram,
      href: t.contact.telegramHref,
      detail: t.contact.telegram,
      external: true,
      icon: Send,
      color: "oklch(0.78 0.13 230)",
    },
    {
      label: t.contact.actions.xbox,
      href: t.contact.xboxHref,
      detail: t.contact.xbox,
      external: true,
      icon: Gamepad2,
      color: "oklch(0.78 0.20 145)",
    },
  ];

  return (
    <SectionShell
      id="contact"
      label={t.contact.label}
      title={t.contact.title}
      intro={t.contact.body}
      titleFx="rainbow-bounce"
    >
      <ul className="hairline-t">
        {rows.map(({ icon: Icon, label, href, detail, external, color }) => (
          <li key={label} className="hairline-b group/row relative overflow-hidden">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/row:opacity-100"
              style={{
                background: `linear-gradient(90deg, ${color.replace(")", " / 0.10)")} 0%, transparent 60%)`,
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 h-full w-[3px] scale-y-0 transition-transform duration-500 group-hover/row:scale-y-100"
              style={{ background: color, transformOrigin: "top", boxShadow: `0 0 22px ${color}` }}
            />
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="relative grid grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-5 py-6 pl-4 pr-2 transition-colors md:gap-6 md:py-8 md:pl-6"
              style={{ ["--hc" as string]: color } as React.CSSProperties}
            >
              <span
                aria-hidden
                className="font-mono text-[0.65rem] text-silver-dim transition-colors group-hover/row:text-[color:var(--hc)]"
              >
                →
              </span>
              <Icon
                size={22}
                strokeWidth={1.4}
                className="text-silver-dim transition-colors duration-300 group-hover/row:text-[color:var(--hc)]"
              />
              <span className="min-w-0">
                <span className="block font-display text-3xl leading-none text-foreground transition-colors group-hover/row:text-[color:var(--hc)] md:text-5xl">
                  {label}
                </span>
                <span className="mt-2 block truncate text-eyebrow">{detail}</span>
              </span>
              <span
                aria-hidden
                className="hidden font-mono text-[0.65rem] uppercase tracking-[0.22em] text-silver-dim transition-colors group-hover/row:text-[color:var(--hc)] md:inline"
              >
                Abrir
              </span>
            </a>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
