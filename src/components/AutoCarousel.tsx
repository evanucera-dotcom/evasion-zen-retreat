import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function AutoCarousel({ count = 6, label }: { count?: number; label?: string }) {
  const items = Array.from({ length: count });
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div
        className="flex gap-5"
        style={{
          width: "max-content",
          animation: "scroll-x 40s linear infinite",
        }}
      >
        {[...items, ...items].map((_, i) => (
          <div key={i} className="w-[340px] shrink-0 md:w-[420px]">
            <PhotoPlaceholder label={label ?? `Photo ${(i % count) + 1}`} />
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
