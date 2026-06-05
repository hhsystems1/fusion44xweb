import { StarRating } from "./StarRating";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  hasBeforeAfter?: boolean;
}

export function TestimonialCard({
  name,
  location,
  rating,
  text,
  hasBeforeAfter,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/10">
      <div className="flex items-center justify-between mb-3">
        <StarRating rating={rating} />
        {hasBeforeAfter && (
          <span className="text-xs font-medium text-accent">Photos Available</span>
        )}
      </div>
      <p className="text-foreground-secondary leading-relaxed text-sm mb-4">
        &quot;{text}&quot;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent font-semibold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-foreground-secondary">{location}</p>
        </div>
      </div>
    </div>
  );
}
