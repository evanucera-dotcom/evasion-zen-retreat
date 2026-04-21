import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function RoomGallery({
  count = 6,
  label,
  photos,
}: {
  count?: number;
  label: string;
  photos?: string[];
}) {
  const total = photos?.length ?? count;
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  const renderImage = (className?: string) =>
    photos && photos[idx] ? (
      <div className={`aspect-[16/10] overflow-hidden rounded-2xl border border-gold/20 ${className ?? ""}`}>
        <img
          src={photos[idx]}
          alt={`${label} — photo ${idx + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
    ) : (
      <PhotoPlaceholder label={`${label} • ${idx + 1}/${total}`} className="!aspect-[16/10]" />
    );

  return (
    <>
      <div className="relative">
        <div
          onClick={() => setLightbox(true)}
          className="cursor-zoom-in transition hover:opacity-95"
        >
          {renderImage()}
        </div>
        <button
          onClick={prev}
          aria-label="Précédent"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/30 bg-background/60 p-2 text-gold backdrop-blur transition hover:bg-gold hover:text-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Suivant"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/30 bg-background/60 p-2 text-gold backdrop-blur transition hover:bg-gold hover:text-background"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-gold" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6"
            style={{ background: "oklch(0.04 0 0 / 0.92)" }}
          >
            <button
              className="absolute right-5 top-5 text-gold"
              onClick={() => setLightbox(false)}
              aria-label="Fermer"
            >
              <X className="h-7 w-7" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {renderImage()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
