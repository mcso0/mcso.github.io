import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Rating } from "~/common/components/ui/rating";

interface ReviewCardProps {
  userId: string;
  username: string;
  avatarUrl?: string;
  avatarFallback: string;
  rating: number;
  content: string;
  postedAt: string;
}

export function ReviewCard({
  userId,
  username,
  avatarUrl,
  avatarFallback,
  rating,
  content,
  postedAt,
}: ReviewCardProps) {
  return (
    <div className="flex flex-col items-start justify-between space-y-2 w-full border-[1px] border-muted-foreground/30 rounded-lg px-8 py-8">
      {/* Review Header */}
      <div className="flex flex-row justify-start items-start gap-4">
        <Avatar className="size-12">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-between space-y-2">
          <div className="flex flex-row justify-start items-baseline gap-2">
            <h3 className="text-lg font-bold leading-none">{userId}</h3>
            <p className="text-sm text-muted-foreground leading-none">
              @{username}
            </p>
          </div>
          <Rating
            rating={rating}
            readonly
            showValue
            size={12}
            className="gap-1 text-sm"
          />
        </div>
      </div>
      {/* Review Content */}
      <div className="flex flex-col items-start justify-between space-y-4 mt-4 w-full">
        <p className="text-md leading-relaxed">{content}</p>
        <p className="text-sm text-muted-foreground">{postedAt}</p>
      </div>
    </div>
  );
}
