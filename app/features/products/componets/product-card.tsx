import { Link } from "react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import {
  ChevronUpIcon,
  EyeIcon,
  HeartIcon,
  MessageCircleIcon,
} from "lucide-react";

interface ProductCardProps {
  productId: string;
  title: string;
  description: string;
  commentCount: number;
  viewCount: number;
  likeCount: number;
  voteCount: number;
}

export function ProductCard({
  productId,
  title,
  description,
  commentCount,
  viewCount,
  likeCount,
  voteCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${productId}`}>
      <Card className="w-full flex flex-row justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-900">
        <CardHeader className="w-full">
          <CardTitle className="w-full">{title}</CardTitle>
          <CardDescription className="w-full text-muted-foreground text-sm">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-sm text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center gap-px text-sm text-muted-foreground">
              <EyeIcon className="w-4 h-4" />
              <span>{viewCount}</span>
            </div>
            <div className="flex items-center gap-px text-sm text-muted-foreground">
              <HeartIcon className="w-4 h-4" />
              <span>{likeCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{voteCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
