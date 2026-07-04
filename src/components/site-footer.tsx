import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-edit py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.18em]">AELIA</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/60">
              Fragrance composed in small batches, without embellishment.
              Nine compositions. No seasonal drops, no limited editions —
              only revision toward something quieter.
            </p>
          </div>

          <div>
            <p className="text-eyebrow text-bone/50">Shop</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/collection" className="text-bone/75 hover:text-brass transition-colors">Full Collection</Link></li>
              <li><Link href="/collection?filter=bestseller" className="text-bone/75 hover:text-brass transition-colors">Bestsellers</Link></li>
              <li><Link href="/collection?filter=new" className="text-bone/75 hover:text-brass transition-colors">New Arrivals</Link></li>
              <li><Link href="/wishlist" className="text-bone/75 hover:text-brass transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-bone/50">Studio</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/about" className="text-bone/75 hover:text-brass transition-colors">About</Link></li>
              <li><Link href="/journal" className="text-bone/75 hover:text-brass transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="text-bone/75 hover:text-brass transition-colors">Contact</Link></li>
              <li><Link href="/dashboard" className="text-bone/75 hover:text-brass transition-colors">Order Tracking</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-bone/50">Correspondence</p>
            <p className="mt-5 text-sm text-bone/60">
              Notes on ingredients, restocks, and new compositions. No more
              than once a month.
            </p>
            <NewsletterForm variant="dark" />
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-bone/15 pt-8 text-xs text-bone/45 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Aelia Parfums. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-bone/80">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-bone/80">Terms</Link>
            <Link href="/legal/shipping" className="hover:text-bone/80">Shipping &amp; Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
