import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function TestimonialsSection() {
  return (
    <section className="bg-cream/50 py-28">
      <div className="container-edit">
        <Reveal>
          <p className="text-eyebrow text-ink/50">In Their Words</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote>
                <p className="font-display text-xl leading-relaxed italic text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 text-eyebrow text-ink/45">
                  {t.name} — {t.location}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
