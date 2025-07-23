import { Button } from "~/common/components/ui/button";
import { SquarePenIcon } from "lucide-react";
import { ReviewCard } from "../components/review-card";
import { CreateReviewDialog } from "../components/create-review-dialog";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";

export default function ProductReviews() {
  // Shadcn 추천: controlled Dialog 패턴
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="space-y-8 flex flex-col items-start justify-between max-w-screen-lg">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold">Reviews ({10})</h2>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex gap-2 cursor-pointer"
              size="lg"
            >
              <SquarePenIcon className="size-4" />
              <span>Write a review</span>
            </Button>
          </DialogTrigger>
        </div>
        <div className="space-y-8 w-full">
          {Array.from({ length: 10 }).map((_, index) => (
            <ReviewCard
              key={index}
              userId={`User ID ${index + 1}`}
              username={`username${index + 1}`}
              avatarUrl="https://github.com/shadcn.png"
              avatarFallback="CN"
              rating={5}
              content="ChatGenius is fantastic for customer support, though it sometimes struggles with very complex queries."
              postedAt="6 minutes ago"
            />
          ))}
        </div>
      </div>
      
      {/* Shadcn 방식: Controlled Dialog with props */}
      <CreateReviewDialog open={open} onOpenChange={setOpen} />
    </Dialog>
  );
}
