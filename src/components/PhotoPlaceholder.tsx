import { ImageIcon } from "lucide-react";

export function PhotoPlaceholder({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-secondary/60 to-card/60 ${className}`}
      style={{ aspectRatio: "16/10" }}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
        <ImageIcon className="h-10 w-10" />
        {label && <span className="text-xs uppercase tracking-[0.2em]">{label}</span>}
      </div>
    </div>
  );
}
