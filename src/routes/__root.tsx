import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Loader } from "@/components/Loader";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReservationProvider } from "@/components/ReservationProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <h2 className="mt-2 font-serif text-2xl">Page introuvable</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Cette page s'est évaporée comme un parfum dans la nuit.
        </p>
        <Link to="/" className="btn-luxe btn-luxe-hover mt-8 inline-flex">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Evasion Spa 35 — Love Rooms & Spa privatif près de Rennes" },
      { name: "description", content: "Love rooms d'exception avec jacuzzi et sauna privé à 10 minutes de Rennes. Une parenthèse romantique inoubliable." },
      { property: "og:title", content: "Evasion Spa 35 — Love Rooms près de Rennes" },
      { property: "og:description", content: "Love rooms avec jacuzzi & sauna privé. Vivez une expérience romantique unique." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <ReservationProvider>
      <Loader />
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </ReservationProvider>
  );
}
