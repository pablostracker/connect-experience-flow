import { MessageCircle, Mail, Linkedin, FolderOpen } from "lucide-react";
import { useT } from "@/i18n";

export function ContactStrip() {
  const t = useT();
  const items = [
    { icon: MessageCircle, label: "WhatsApp", href: t.contact.whatsappHref, external: true },
    { icon: Mail, label: "E-mail", href: `mailto:${t.contact.email}`, external: false },
    { icon: Linkedin, label: "LinkedIn", href: t.contact.linkedinHref, external: true },
    { icon: FolderOpen, label: "Portfólio", href: "#projects", external: false },
  ];
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-eyebrow">
      {items.map(({ icon: Icon, label, href, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="group inline-flex items-center gap-2 text-silver-dim transition-colors hover:text-foreground"
        >
          <Icon size={14} strokeWidth={1.5} className="transition-colors group-hover:text-copper" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
