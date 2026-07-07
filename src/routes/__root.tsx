import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LocaleContext } from "@/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-eyebrow">404</div>
        <h1 className="mt-4 font-display text-4xl text-foreground">Página não encontrada</h1>
        <p className="mt-3 text-silver-dim">
          O caminho que você tentou abrir não existe — ou não existe mais.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 border border-silver px-5 py-3 text-eyebrow text-foreground transition-colors hover:bg-silver hover:text-primary-foreground"
          >
            Voltar ao início <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-eyebrow">Erro</div>
        <h1 className="mt-4 font-display text-3xl text-foreground">Essa página não carregou</h1>
        <p className="mt-3 text-silver-dim">Algo travou. Tente de novo, ou volte ao início.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-silver px-5 py-3 text-eyebrow text-foreground hover:bg-silver hover:text-primary-foreground"
          >
            Tentar novamente
          </button>
          <a href="/" className="px-5 py-3 text-eyebrow text-silver-dim hover:text-foreground">
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "Pablo Silva Dutra — Pessoas, Operação, Dados & IA";
const SITE_DESC =
  "Portfólio de Pablo Silva Dutra. Customer Success, operação, experiência do cliente, dados e IA trabalhando como um único sistema.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Pablo Silva Dutra" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "Pablo Silva Dutra" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "An interactive professional portfolio showcasing how Pablo connects customer success, operations, data, and AI to transform complexity into performance." },
      { property: "og:description", content: "An interactive professional portfolio showcasing how Pablo connects customer success, operations, data, and AI to transform complexity into performance." },
      { name: "twitter:description", content: "An interactive professional portfolio showcasing how Pablo connects customer success, operations, data, and AI to transform complexity into performance." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3fa98b85-0baa-4bbe-b18b-d36a2bcf7fff/id-preview-6e1bf49d--1cfad989-9b38-449b-b1e8-62d9ee57e8be.lovable.app-1783465742747.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3fa98b85-0baa-4bbe-b18b-d36a2bcf7fff/id-preview-6e1bf49d--1cfad989-9b38-449b-b1e8-62d9ee57e8be.lovable.app-1783465742747.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,900&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleContext.Provider value="pt">
        <Outlet />
      </LocaleContext.Provider>
    </QueryClientProvider>
  );
}
