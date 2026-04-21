import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--gradient-luxe)" }}
        >
          {/* Particles */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-gold"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.3,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.6, 0.1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
          {/* Glow */}
          <div
            className="absolute h-[500px] w-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, oklch(0.78 0.13 80 / 0.18), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <motion.img
            src={logo}
            alt="Evasion Spa 35"
            width={140}
            height={140}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="relative z-10 h-32 w-32 object-contain"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
            className="font-display relative z-10 mt-4 text-6xl text-white animate-shine md:text-7xl"
          >
            Evasion Spa 35
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
