import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { ReservationModal } from "./ReservationModal";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <ReservationModal open={isOpen} onClose={() => setIsOpen(false)} />
    </Ctx.Provider>
  );
}

export const useReservation = () => useContext(Ctx);

export function ReserveButton({
  variant = "luxe",
  className = "",
  children = "Réserver",
}: {
  variant?: "luxe" | "ghost";
  className?: string;
  children?: ReactNode;
}) {
  const { open } = useReservation();
  const base = variant === "luxe" ? "btn-luxe btn-luxe-hover" : "btn-ghost-luxe";
  return (
    <button
      onClick={open}
      className={`${base} ${variant === "ghost" ? "hover:bg-gold hover:text-background" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
