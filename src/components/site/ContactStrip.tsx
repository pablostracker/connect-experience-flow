import { MessageCircle, Mail, Linkedin, FolderOpen } from "lucide-react";
import { useT } from "@/i18n";

export function ContactStrip() {
  const t = useT();
  const items = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: t.contact.whatsappHref,
      external: true,
      hoverColor: "hover:text-[oklch(0.78_0.17_150)]",
      dotColor: "oklch(0.78 0.17 150)",
    },
    {
      icon: Mail,
      label: "E-mail",
      href: `mailto:${t.contact.email}`,
      external: false,
      hoverColor: "hover:text-copper",
      dotColor: "oklch(0.72 0.11 45)",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: t.contact.linkedinHref,
      external: true,
      hoverColor: "hover:text-[oklch(0.72_0.16_240)]",
      dotColor: "oklch(0.72 0.16 240)",
    },
    {
      icon: FolderOpen,
      label: "Portfólio",
      href: "#projects",
      external: false,
      hoverColor: "hover:text-foreground",
      dotColor: "oklch(0.86 0.008 250)",
    },
  ];
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-eyebrow">
      {items.map(({ icon: Icon, label, href, external, hoverColor, dotColor }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className={`group relative inline-flex items-center gap-2 text-silver-dim transition-colors duration-300 ${hoverColor}`}
        >
          <span
            aria-hidden
            className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: dotColor, boxShadow: `0 0 12px ${dotColor}` }}
          />
          <Icon size={14} strokeWidth={1.5} className="transition-colors duration-300" />
          <span>{label}</span>
          <span
            aria-hidden
            className="ml-1 h-px w-0 transition-all duration-500 group-hover:w-6"
            style={{ background: dotColor }}
          />
        </a>
      ))}
    </div>
  );
}
