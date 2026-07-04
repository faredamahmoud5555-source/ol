import { Star } from "lucide-react";

const MOCK_REVIEWS = [
  { name: "A. Lindqvist", rating: 5, title: "Exactly as described", body: "The dry-down is honest — smoky without turning sweet after an hour like most fig fragrances I've tried." },
  { name: "J. Park", rating: 5, title: "Lasted the whole flight", body: "Applied at 6am, still noticeable getting off a 14-hour flight. Sillage is moderate, which I prefer." },
  { name: "C. Moreau", rating: 4, title: "Beautiful, slightly niche", body: "Not for everyone — this leans smoky rather than sweet. I love it, but a friend found it too dry." },
];

export function ReviewsSection({ rating, count }: { rating: number; count: number }) {
  return (
    <div>
      <div className="flex items-baseline gap-4">
        <span className="font-display text-5xl">{rating.toFixed(1)}</span>
        <div>
          <div className="flex gap-1 text-brass">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill={i < Math.round(rating) ? "currentColor" : "none"} strokeWidth={1.3} />
            ))}
          </div>
          <p className="mt-1 text-xs text-ink/50">Based on {count} reviews</p>
        </div>
      </div>

      <div className="mt-10 divide-y divide-line">
        {MOCK_REVIEWS.map((r) => (
          <div key={r.name} className="py-6">
            <div className="flex items-center gap-1 text-brass">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill={i < r.rating ? "currentColor" : "none"} strokeWidth={1.3} />
              ))}
            </div>
            <p className="mt-3 font-display text-lg">{r.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{r.body}</p>
            <p className="mt-3 text-eyebrow text-ink/40">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
