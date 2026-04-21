import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { ReserveButton } from "./ReservationProvider";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/chambres", label: "Nos chambres" },
  { to: "/tarifs", label: "Tarifs & Options" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-gold/10 py-3 shadow-[0_8px_30px_oklch(0.05_0.02_320/0.4)]"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Evasion Spa 35" width={56} height={56} className="h-14 w-14 object-contain" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-serif text-sm uppercase tracking-[0.2em] text-foreground/85 transition hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ReserveButton />
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="glass mx-4 mt-3 rounded-xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-serif text-base uppercase tracking-[0.2em] text-foreground/85 hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-2">
              <ReserveButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
