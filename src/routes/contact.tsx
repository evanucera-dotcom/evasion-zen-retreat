import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Evasion Spa 35" },
      { name: "description", content: "Contactez Evasion Spa 35 pour vos questions, réservations ou demandes spéciales. À 10 minutes de Rennes." },
      { property: "og:title", content: "Contact — Evasion Spa 35" },
      { property: "og:description", content: "Une question, une envie particulière ? Nous sommes à votre écoute." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(5, "Message trop court").max(2000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mpqogebr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 pb-10">
      <section className="mx-auto max-w-4xl pt-8 text-center">
        <Reveal>
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">Contact</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Parlons-en</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Une question, une envie particulière ou une réservation ? Nous sommes à votre écoute
            pour rendre votre expérience inoubliable.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-5">
        {/* Form */}
        <Reveal className="md:col-span-3">
          <div className="glass rounded-3xl p-8 md:p-10">
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
                <h3 className="mt-5 font-serif text-3xl text-gold">Message envoyé</h3>
                <p className="mt-3 text-muted-foreground">
                  Votre message a bien été envoyé. Nous vous répondrons très prochainement.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-ghost-luxe mt-8 hover:bg-gold hover:text-background"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field label="Nom" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <Field label="Message" name="message" textarea error={errors.message} />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-luxe btn-luxe-hover w-full disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Envoi..." : "Envoyer"}
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* Contact info */}
        <Reveal className="md:col-span-2">
          <div className="space-y-5">
            <InfoCard icon={MapPin} title="Adresse" lines={["1 Imp. de la Noë Boucher", "35590 L'Hermitage", "À 10 min de Rennes"]} />
            <InfoCard icon={Mail} title="Email" lines={["evasionspa35@gmail.com"]} href="mailto:evasionspa35@gmail.com" />
            <InfoCard icon={Phone} title="Téléphone" lines={["06.68.61.68.87"]} href="tel:+33668616887" />
          </div>
        </Reveal>
      </section>

      {/* Map */}
      <section className="mx-auto mt-24 max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold">Localisation</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Nous trouver</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-3xl border border-gold/20" style={{ boxShadow: "var(--shadow-soft)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.439324666887!2d-1.8223249245876412!3d48.121050552312916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ee3a38c2a89e1%3A0xbc439a13a525d773!2s1%20Imp.%20de%20la%20No%C3%AB%20Boucher%2C%2035590%20L'Hermitage%2C%20France!5e0!3m2!1sfr!2sgr!4v1775848234521!5m2!1sfr!2sgr"
              width="600"
              height="450"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[450px] w-full"
              title="Localisation Evasion Spa 35"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function Field({
  label, name, type = "text", textarea, error,
}: { label: string; name: string; type?: string; textarea?: boolean; error?: string }) {
  const cls =
    "w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold focus:bg-input";
  return (
    <div>
      <label className="mb-2 block font-serif text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea name={name} rows={5} required maxLength={2000} className={cls} />
      ) : (
        <input name={name} type={type} required maxLength={255} className={cls} />
      )}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({
  icon: Icon, title, lines, href,
}: { icon: typeof Mail; title: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="glass h-full rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-gold/40">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-gold/30 p-2.5"><Icon className="h-4 w-4 text-gold" /></div>
        <h3 className="font-serif text-lg text-gold">{title}</h3>
      </div>
      <div className="mt-3 space-y-1 text-sm text-foreground/85">
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}
