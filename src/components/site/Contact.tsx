import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function Contact() {
  const t = useT();
  const actions = [
    { label: t.contact.actions.whatsapp, href: t.contact.whatsappHref, detail: t.contact.whatsappDisplay },
    { label: t.contact.actions.sms, href: t.contact.smsHref, detail: t.contact.whatsappDisplay },
    { label: t.contact.actions.email, href: `mailto:${t.contact.email}`, detail: t.contact.email },
    { label: t.contact.actions.linkedin, href: t.contact.linkedinHref, detail: t.contact.linkedin },
  ];
  return (
    <SectionShell
      id="contact"
      label={t.contact.label}
      title={t.contact.title}
      intro={t.contact.body}
    >
      <ul className="hairline-t">
        {actions.map((a) => (
          <li key={a.label} className="hairline-b">
            <a
              href={a.href}
              target={a.href.startsWith("http") ? "_blank" : undefined}
              rel={a.href.startsWith("http") ? "noreferrer" : undefined}
              className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 py-6 transition-colors hover:text-copper md:py-8"
            >
              <span className="text-eyebrow text-silver-dim group-hover:text-copper">→</span>
              <span className="min-w-0">
                <span className="block font-display text-3xl leading-none text-foreground md:text-5xl">
                  {a.label}
                </span>
                <span className="mt-2 block truncate text-eyebrow">{a.detail}</span>
              </span>
              <span aria-hidden className="hidden text-eyebrow text-silver-dim md:inline">
                Abrir
              </span>
            </a>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
