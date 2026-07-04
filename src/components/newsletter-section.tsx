import { NewsletterForm } from "@/components/newsletter-form";
import { Reveal } from "@/components/reveal";

export function NewsletterSection() {
  return (
    <section className="bg-ink py-28 text-bone">
      <div className="container-edit max-w-xl">
        <Reveal>
          <p className="text-eyebrow text-bone/50">Correspondence</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Notes from the studio, occasionally.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/60">
            Ingredient sourcing, restock notices, and early access to new
            compositions. Nothing else.
          </p>
          <NewsletterForm variant="dark" />
        </Reveal>
      </div>
    </section>
  );
}
