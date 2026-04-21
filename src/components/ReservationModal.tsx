import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useEffect } from "react";

const LINKS = {
  love: "https://www.airbnb.fr/rooms/1639712225293481894?unique_share_id=0bd476fb-26d8-4c1c-8fbf-2588fc62605f&viralityEntryPoint=1&s=76&source_impression_id=p3_1775848620_P32Yj5eGlgx6TPF2",
  c04: "https://www.airbnb.fr/rooms/1629930524809086480?unique_share_id=7ae689cd-a4d8-4bb0-b2f0-5dfc2b31aae2&viralityEntryPoint=1&s=76&source_impression_id=p3_1775848663_P3NlpjZ5405waKiC",
};

export function ReservationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          style={{ background: "oklch(0.05 0.02 320 / 0.75)", backdropFilter: "blur(8px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative w-full max-w-2xl rounded-2xl p-8 md:p-12"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-5 top-5 rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <Sparkles className="mx-auto mb-3 h-6 w-6 text-gold" />
              <h2 className="font-display text-5xl text-gold">Réservez votre escapade</h2>
              <p className="mt-3 text-sm tracking-wide text-muted-foreground">
                Choisissez la chambre qui vous fait rêver
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                { key: "love", label: "Chambre Love", sub: "Avec sauna privé", href: LINKS.love },
                { key: "c04", label: "Chambre 04", sub: "Jacuzzi & confort", href: LINKS.c04 },
              ].map((c) => (
                <a
                  key={c.key}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl border border-gold/30 bg-card/60 p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_0_40px_oklch(0.78_0.13_80/0.25)]"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <h3 className="font-serif text-2xl text-gold">{c.label}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.sub}
                  </p>
                  <span className="mt-5 inline-block text-xs uppercase tracking-[0.25em] text-foreground/80 group-hover:text-gold">
                    Réserver →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
