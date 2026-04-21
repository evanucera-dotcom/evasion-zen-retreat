import { createFileRoute } from "@tanstack/react-router";
import { Bath, Bed, Coffee, Flame, Wifi, Tv, Wind, Shirt, Sparkles, Footprints } from "lucide-react";
import { ReserveButton } from "@/components/ReservationProvider";
import { Reveal } from "@/components/Reveal";
import { RoomGallery } from "@/components/RoomGallery";

export const Route = createFileRoute("/chambres")({
  head: () => ({
    meta: [
      { title: "Nos Love Rooms — Evasion Spa 35" },
      { name: "description", content: "Découvrez la Chambre Love avec sauna privé et la Chambre 04, deux écrins romantiques avec jacuzzi." },
      { property: "og:title", content: "Nos Love Rooms — Evasion Spa 35" },
      { property: "og:description", content: "Chambre Love & Chambre 04 : deux suites romantiques d'exception." },
    ],
  }),
  component: ChambresPage,
});

const ROOMS = [
  {
    name: "Chambre Love",
    desc: "Une suite romantique sur deux étages avec jacuzzi privatif et un sauna privé. L'écrin parfait pour une parenthèse de bien-être à deux.",
    highlight: "Avec sauna privé",
    sauna: true,
  },
  {
    name: "Chambre 04",
    desc: "Une suite raffinée sur deux étages, jacuzzi privatif et confort haut de gamme. Une bulle d'intimité pour une nuit inoubliable.",
    highlight: "Jacuzzi & confort",
    sauna: false,
  },
];

const EQUIP = [
  {
    title: "Chambre",
    items: [{ icon: Bed, label: "Lit king size" }],
  },
  {
    title: "Bien-être",
    items: [
      { icon: Flame, label: "Sauna *" },
      { icon: Bath, label: "Jacuzzi" },
      { icon: Shirt, label: "Peignoirs" },
      { icon: Sparkles, label: "Serviettes" },
      { icon: Footprints, label: "Chaussons" },
      { icon: Wind, label: "Sèche-cheveux" },
    ],
  },
  {
    title: "Boissons",
    items: [
      { icon: Coffee, label: "Eau" },
      { icon: Coffee, label: "Thé" },
      { icon: Coffee, label: "Café" },
    ],
  },
  {
    title: "Multimédia",
    items: [
      { icon: Wifi, label: "Wifi gratuit" },
      { icon: Tv, label: "TV connectée" },
    ],
  },
];

function ChambresPage() {
  return (
    <div className="px-6 pb-10">
      <section className="mx-auto max-w-5xl pt-8 text-center">
        <Reveal>
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">Nos love rooms</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Deux écrins, mille émotions</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Choisissez la chambre qui vous ressemble. Deux suites identiques en confort, l'une dotée
            d'un sauna privé pour les amateurs de bien-être absolu.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 max-w-7xl space-y-24">
        {ROOMS.map((room, i) => (
          <Reveal key={room.name}>
            <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <RoomGallery count={6} label={room.name} />
              <div>
                <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">
                  {room.highlight}
                </p>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl">{room.name}</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{room.desc}</p>
                {room.sauna && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
                    <Flame className="h-3.5 w-3.5" /> Sauna privé inclus
                  </p>
                )}
                <div className="mt-8">
                  <ReserveButton />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Équipements */}
      <section className="mx-auto mt-28 max-w-7xl">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">À votre disposition</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Équipements & services</h2>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {EQUIP.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100}>
              <div className="glass h-full rounded-2xl p-7">
                <h3 className="font-serif text-xl text-gold">{cat.title}</h3>
                <ul className="mt-5 space-y-3">
                  {cat.items.map((it) => (
                    <li key={it.label} className="flex items-center gap-3 text-sm text-foreground/85">
                      <it.icon className="h-4 w-4 text-gold" />
                      {it.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs italic text-muted-foreground">
          * Sauna disponible uniquement dans la Chambre Love
        </p>
      </section>
    </div>
  );
}
