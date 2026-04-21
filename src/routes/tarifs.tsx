import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Wine, Flower2, Cookie, Gift, Croissant, Sparkles } from "lucide-react";
import { ReserveButton } from "@/components/ReservationProvider";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs & Options — Evasion Spa 35" },
      { name: "description", content: "Découvrez nos tarifs nuits, créneaux 2H et options sur demande pour personnaliser votre escapade." },
      { property: "og:title", content: "Tarifs & Options — Evasion Spa 35" },
      { property: "og:description", content: "Nos tarifs love rooms, créneaux et options romantiques sur demande." },
    ],
  }),
  component: TarifsPage,
});

const ROOM_PRICES = [
  { name: "Chambre Love", week: 150, weekend: 180, sub: "Avec sauna privé" },
  { name: "Chambre 04", week: 150, weekend: 190, sub: "Jacuzzi & confort" },
];

const OPTIONS = [
  { icon: Wine, label: "Champagne" },
  { icon: Flower2, label: "Pétales de fleurs" },
  { icon: Cookie, label: "Chocolats" },
  { icon: Gift, label: "Paniers cadeaux" },
  { icon: Croissant, label: "Livraison brunch" },
];

function TarifsPage() {
  return (
    <div className="px-6">
      <section className="mx-auto max-w-5xl pt-8 text-center">
        <Reveal>
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">Nos tarifs</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Choisissez votre formule</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Des nuits enchantées aux escapades en après-midi : à chaque envie sa formule.
          </p>
        </Reveal>
      </section>

      {/* Cartes chambres */}
      <section className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
        {ROOM_PRICES.map((r, i) => (
          <Reveal key={r.name} delay={i * 120}>
            <div className="glass relative h-full rounded-3xl p-10 text-center transition hover:-translate-y-1 hover:border-gold/40">
              <Sparkles className="mx-auto mb-3 h-6 w-6 text-gold" />
              <h2 className="font-serif text-3xl text-gold">{r.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {r.sub}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-xs text-foreground/70">
                <Clock className="h-3.5 w-3.5 text-gold" /> 18h — 11h
              </p>
              <div className="my-8 space-y-4">
                <div className="flex items-baseline justify-between border-b border-border/40 pb-3">
                  <span className="text-sm text-muted-foreground">Nuit semaine</span>
                  <span className="font-serif text-3xl text-gold">{r.week} €</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">Nuit weekend</span>
                  <span className="font-serif text-3xl text-gold">{r.weekend} €</span>
                </div>
              </div>
              <p className="mb-6 text-sm italic text-muted-foreground">
                Offrez-vous une nuit à deux, hors du temps.
              </p>
              <ReserveButton />
            </div>
          </Reveal>
        ))}
      </section>

      {/* Forfaits 2H */}
      <section className="mx-auto mt-20 max-w-3xl">
        <Reveal>
          <div className="glass rounded-3xl p-10 text-center">
            <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">
              Découvrez nos forfaits
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Créneaux 2 heures</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Tarifs communs aux deux chambres
            </p>
            <div className="mx-auto mt-8 grid max-w-md gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gold/20 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Semaine</p>
                <p className="mt-2 font-serif text-3xl text-gold">80 €</p>
                <p className="mt-1 text-xs text-foreground/60">Créneau 2H</p>
              </div>
              <div className="rounded-2xl border border-gold/20 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Weekend</p>
                <p className="mt-2 font-serif text-3xl text-gold">90 €</p>
                <p className="mt-1 text-xs text-foreground/60">Créneau 2H</p>
              </div>
            </div>
            <div className="mt-8">
              <ReserveButton />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Options */}
      <section className="mx-auto mt-24 max-w-5xl text-center">
        <Reveal>
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">Sur mesure</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Options disponibles sur demande</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Personnalisez votre séjour avec nos petites attentions raffinées. Il vous suffit de nous
            en faire la demande.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-5">
          {OPTIONS.map((o, i) => (
            <Reveal key={o.label} delay={i * 80}>
              <div className="glass flex h-full flex-col items-center gap-3 rounded-2xl p-6 transition hover:-translate-y-1 hover:border-gold/40">
                <o.icon className="h-7 w-7 text-gold" />
                <p className="font-serif text-sm">{o.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/contact" className="btn-luxe btn-luxe-hover">
            Une question ? Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
