import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function AutoCarousel({
  count = 6,
  label,
  photos,
}: {
  count?: number;
  label?: string;
  photos?: string[];
}) {
  const items = photos && photos.length > 0 ? photos : Array.from({ length: count });
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div
        className="flex gap-5"
        style={{
          width: "max-content",
          animation: "scroll-x 40s linear infinite",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="w-[340px] shrink-0 md:w-[420px]">
            {typeof item === "string" ? (
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20">
                <img
                  src={item}
                  alt={label ?? `Evasion Spa 35 — photo ${(i % items.length) + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <PhotoPlaceholder label={label ?? `Photo ${(i % items.length) + 1}`} />
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
