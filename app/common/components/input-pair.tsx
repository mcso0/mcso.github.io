import type { InputHTMLAttributes } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function InputPair({
  label,
  description,
  textarea = false,
  ...rest
}: {
  label: string;
  description: string;
  textarea?: boolean;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  return (
    <div className="space-y-2 flex flex-col ">
      <Label htmlFor={rest.id} className="flex flex-col gap-0 items-start">
        <span className="text-lg font-medium">{label}</span>
        <small className="text-sm text-muted-foreground/70">
          {description}
        </small>
      </Label>
      {textarea ? (
        <Textarea
          rows={4}
          className="resize-none !px-4 !py-3 !h-fit !h-[120px]"
          {...rest}
        />
      ) : (
        <Input {...rest} className="!px-4 !py-3 !h-fit" />
      )}
    </div>
  );
}
