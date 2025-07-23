import { useState, useEffect } from "react";
import { Button } from "~/common/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { Label } from "~/common/components/ui/label";
import { StarIcon } from "lucide-react";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";

// Shadcn 추천: Controlled Dialog 패턴
interface CreateReviewDialogProps {
  open?: boolean;
  /**
   * 다이얼로그의 열림/닫힘 상태가 바뀔 때 호출되는 함수입니다.
   * 예시: 사용자가 다이얼로그를 닫거나 열 때 실행됩니다.
   * (open: boolean) => void 형태의 함수이며, open이 true면 열림, false면 닫힘을 의미합니다.
   */
  onOpenChange?: (open: boolean) => void;
}

export function CreateReviewDialog({
  open,
  onOpenChange,
}: CreateReviewDialogProps) {
  const isLoggedIn = true;
  const [rating, setRating] = useState<number>(0);
  const [hoverStar, setHoverStar] = useState<number>(0);

  // Shadcn 방식: Dialog가 열릴 때마다 상태 초기화
  useEffect(() => {
    if (open) {
      setRating(0);
      setHoverStar(0);
    }
  }, [open]);

  return (
    <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto space-y-4">
      <DialogHeader>
        <DialogTitle>What do you think of this product?</DialogTitle>
        <DialogDescription>
          Share your thoughts and experiences with this product.
        </DialogDescription>
      </DialogHeader>
      <Form className="space-y-6">
        {/* Rating */}
        <div>
          <label className="flex flex-col gap-0 items-start">
            <span className="text-lg font-medium">Rating</span>
            <small className="text-sm text-muted-foreground/70">
              How would you rate this product?
            </small>
          </label>
          <div className="flex items-center gap-2 mt-2">
            {[1, 2, 3, 4, 5].map(star => (
              <label
                key={star}
                className="cursor-pointer relative"
                onMouseEnter={() => setHoverStar(star)}
                onMouseLeave={() => setHoverStar(0)}
              >
                <StarIcon
                  className="size-5 text-yellow-400"
                  fill={
                    hoverStar >= star || rating >= star
                      ? "currentColor"
                      : "none"
                  }
                />
                <input
                  type="radio"
                  name="rating"
                  value="star"
                  required
                  className="opacity-0 h-px w-px absolute"
                  onChange={() => setRating(star)}
                />
              </label>
            ))}
          </div>
        </div>
        <InputPair
          label="Review"
          placeholder="Tell us what you think about this product"
          textarea
          required
          description="Minimum 1000 characters"
        />
        <DialogFooter>
          <DialogClose asChild>
            {isLoggedIn ? (
              <Button variant="default" type="submit" className="w-full">
                Submit review
              </Button>
            ) : (
              <Button variant="default" disabled={true} className="w-full">
                Please login to submit a review
              </Button>
            )}
          </DialogClose>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}
