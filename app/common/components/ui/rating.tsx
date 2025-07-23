import { Star } from "lucide-react";
import { cn } from "~/lib/utils";

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
  showValue?: boolean;
  className?: string;
}

export function Rating({
  rating,
  maxRating = 5,
  size = 16,
  onChange,
  readonly = false,
  showValue = false,
  className,
}: RatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={cn(
            "transition-colors duration-200",
            index < rating
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-300",
            !readonly && "cursor-pointer hover:text-yellow-400"
          )}
          onClick={() => !readonly && onChange?.(index + 1)}
        />
      ))}
      {showValue && (
        <span className="text-sm text-muted-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
