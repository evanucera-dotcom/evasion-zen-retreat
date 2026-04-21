import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bath, Flame, Heart, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { ReserveButton } from "@/components/ReservationProvider";
import { Reveal } from "@/components/Reveal";
import { AutoCarousel } from "@/components/AutoCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evasion Spa 35 — Love Rooms romantiques près de Rennes" },
      { name: "description", content: "Vivez une parenthèse intime avec jacuzzi, sauna et confort haut de gamme. À 10 minutes de Rennes." },
      { property: "og:title", content: "Evasion Spa 35 — Love Rooms" },
      { property: "og:description", content: "Une expérience romantique d'exception près de Rennes." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-6">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-display text-center text-7xl text-white animate-shine md:text-8xl"
          >
            Evasion Spa 35
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            className="relative mt-10 overflow-hidden rounded-3xl border border-gold/20"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <img
              src={hero}
              alt="Suite romantique avec jacuzzi et lit baldaquin"
              width={1920}
              height={1080}
              className="h-[60vh] w-full object-cover md:h-[75vh]"
            />
            <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
            <div className="absolute inset-x-0 bottom-0 p-8 text-center md:p-16">
              <Sparkles className="mx-auto mb-3 h-6 w-6 text-gold" />
              <h2 className="font-serif text-3xl italic text-white md:text-5xl">
                Une parenthèse rien que pour vous
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-white/85 md:text-base">
                Échappez-vous le temps d'une nuit dans un cocon de sensualité et de luxe.
              </p>
              <div className="mt-8">
                <ReserveButton />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Présentation */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">L'expérience</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Détente, intimité, émotions partagées
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Bienvenue dans l'univers feutré d'Evasion Spa 35. Nos deux love rooms,{" "}
              <span className="text-gold">Chambre Love</span> et{" "}
              <span className="text-gold">Chambre 04</span>, vous accueillent dans un écrin de
              raffinement. Chacune dispose de deux étages, d'un jacuzzi privatif et de tout le
              confort nécessaire pour une escapade romantique inoubliable. La{" "}
              <span className="text-gold">Chambre Love</span> est équipée en plus d'un{" "}
              <span className="text-gold">sauna privé</span>, pour une bulle de bien-être absolue.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm italic text-muted-foreground">
              Profitez de nos différentes options pour personnaliser votre séjour.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Bath, label: "Jacuzzi privatif" },
              { icon: Flame, label: "Sauna (Chambre Love)" },
              { icon: Heart, label: "Cocon romantique" },
            ].map((f, i) => (
              <Reveal key={f.label} delay={i * 120}>
                <div className="glass rounded-2xl p-8 text-center transition hover:-translate-y-1 hover:border-gold/40">
                  <f.icon className="mx-auto mb-3 h-7 w-7 text-gold" />
                  <p className="font-serif text-lg">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu carrousel */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">Aperçu</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Nos chambres en images</h2>
            </div>
          </Reveal>
          <Reveal>
            <AutoCarousel count={6} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
