import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import onflyImg from "@/assets/proj-onfly.jpg";
import narutoImg from "@/assets/proj-naruto.jpg";
import estrelaImg from "@/assets/proj-estrelabet.jpg";
import falcoesImg from "@/assets/proj-falcoes.jpg";
import loudImg from "@/assets/proj-loud.jpg";
import garminImg from "@/assets/proj-garmin.jpg";

type Card = {
  title: string;
  body: string;
  tag: string;
  image: string;
  color: string; // tailwind text color for title
  ring: string; // border/glow accent
  href?: string;
};

const CARDS: Card[] = [
  {
    title: "Onfly + Azul",
    body:
      "Redução de atritos na jornada corporativa de turismo. Integração de milhas, locação, passagens e reservas pós-venda.",
    tag: "CX · TRAVEL",
    image: onflyImg,
    color: "text-sky-400",
    ring: "hover:shadow-[0_0_60px_-10px_rgba(56,189,248,0.45)]",
    href: "#projects",
  },
  {
    title: "Naruto Digital (Panini)",
    body:
      "Direção de arte de colecionáveis digitais com engenharia de prompt, composição de personagens e controle de qualidade para impressão.",
    tag: "DESIGN · AI",
    image: narutoImg,
    color: "text-orange-400",
    ring: "hover:shadow-[0_0_60px_-10px_rgba(251,146,60,0.5)]",
  },
  {
    title: "EstrelaBet AI Automation",
    body:
      "Arquitetura de Conversational AI com NLP, Knowledge Base e análise semântica de sentimento de usuários VIP.",
    tag: "IA · CX",
    image: estrelaImg,
    color: "text-emerald-400",
    ring: "hover:shadow-[0_0_60px_-10px_rgba(52,211,153,0.5)]",
  },
  {
    title: "Gerando Falcões",
    body:
      "Professor Adjunto com mais de 180 crianças impactadas em trilhas de negócios, programação e tecnologia.",
    tag: "EDUCAÇÃO",
    image: falcoesImg,
    color: "text-amber-400",
    ring: "hover:shadow-[0_0_60px_-10px_rgba(251,191,36,0.5)]",
  },
  {
    title: "LOUD iGame Project",
    body:
      "Análise de comportamento de audiência em entertainment digital gamer, gerando insights de engajamento.",
    tag: "GAMING · VIDEO",
    image: loudImg,
    color: "text-fuchsia-400",
    ring: "hover:shadow-[0_0_60px_-10px_rgba(232,121,249,0.5)]",
  },
  {
    title: "Garmin Wearable Insights",
    body:
      "Dados de performance física como diretriz de marketing e produto no nicho triatleta.",
    tag: "WEARABLES",
    image: garminImg,
    color: "text-sky-400",
    ring: "hover:shadow-[0_0_60px_-10px_rgba(56,189,248,0.45)]",
  },
];

export function ProjectGallery() {
  return (
    <div className="mb-24">
      <div className="text-eyebrow mb-6">
        Projetos de impacto & design criativo
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {CARDS.map((c, i) => (
          <ProjectCard key={c.title} card={c} index={i} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ card, index }: { card: Card; index: number }) {
  return (
    <motion.a
      href={card.href ?? "#projects"}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative block overflow-hidden rounded-2xl border border-hairline bg-graphite/60 transition-shadow duration-500 ${card.ring}`}
    >
      {/* Image side (right) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%]">
        <img
          src={card.image}
          alt=""
          loading="lazy"
          width={1280}
          height={720}
          className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
        {/* Fade from left to reveal text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[240px] flex-col justify-between p-7 md:min-h-[280px] md:p-8">
        <div>
          <h3
            className={`font-display text-2xl leading-tight md:text-3xl ${card.color}`}
          >
            {card.title}
          </h3>
          <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-silver-dim md:text-[15px]">
            {card.body}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/40 ${card.color} transition-transform duration-300 group-hover:translate-x-1`}
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute right-5 top-5 z-10 font-mono text-[11px] tracking-[0.22em] text-silver-dim/90">
        {card.tag}
      </div>
    </motion.a>
  );
}
