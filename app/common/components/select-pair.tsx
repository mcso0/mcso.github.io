import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { useState } from "react";

export default function SelectPair({
  name,
  required,
  label,
  description,
  placeholder,
  options,
}: {
  name: string;
  required?: boolean;
  label: string;
  description: string;
  placeholder: string;
  options: { label: string; value: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-2 flex flex-col">
      <Label
        className="flex flex-col items-start !gap-0"
        onClick={() => setOpen(true)}
      >
        <span className="text-lg font-semibold">{label}</span>
        <small className="text-sm text-muted-foreground">{description}</small>
      </Label>
      <Select
        name={name}
        required={required}
        open={open}
        onOpenChange={setOpen}
      >
        <SelectTrigger className="w-full !px-4 !py-3 !h-fit">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
