import { KeyRound, Car, Wifi, Tv, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-gold/15 bg-card/40 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
            <span className="font-display text-3xl text-gold">Evasion Spa 35</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Une parenthèse d'intimité et de luxe à 10 minutes de Rennes.
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-serif text-lg uppercase tracking-[0.25em] text-gold">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3"><KeyRound className="h-4 w-4 text-gold" /> Boîte à clés autonome</li>
            <li className="flex items-center gap-3"><Car className="h-4 w-4 text-gold" /> Parking privé</li>
            <li className="flex items-center gap-3"><Wifi className="h-4 w-4 text-gold" /> Wifi haut débit</li>
            <li className="flex items-center gap-3"><Tv className="h-4 w-4 text-gold" /> TV connectée</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-serif text-lg uppercase tracking-[0.25em] text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>1 Imp. de la Noë Boucher, 35590 L'Hermitage<br /><span className="text-xs text-foreground/60">À 10 minutes de Rennes</span></span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:evasionspa35@gmail.com" className="hover:text-gold">evasionspa35@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+33668616887" className="hover:text-gold">06.68.61.68.87</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-border/40 pt-6 text-center text-xs text-muted-foreground/70">
        Site réalisé par{" "}
        <a
          href="https://www.instagram.com/digiblastudio?igsh=MTNkc2xyNWNod2c3eA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold/80 underline-offset-4 transition hover:text-gold hover:underline"
        >
          DigiblaStudio
        </a>
      </div>
    </footer>
  );
}
