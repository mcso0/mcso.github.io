import type { Route } from "./+types/submit";
import PageHero from "~/common/components/page-hero";
import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { Textarea } from "~/common/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import InputPair from "~/common/components/input-pair";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";
import Footer from "~/common/components/page-footer";
import { ImagePlus, UploadIcon, X } from "lucide-react";
import { useState } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    {
      name: "description",
      content: "Submit your product",
    },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export default function Submit() {
  
  // useState<string | null>(null)에서 <string | null> 부분은 상태(state)의 타입을 의미해요.
  // 즉, icon이라는 상태는 string(문자열) 또는 null 값이 될 수 있다는 뜻이에요.
  // 괄호 안의 null은 icon의 초기값(기본값)이 null임을 나타냅니다.
  // 예시: const [icon, setIcon] = useState<string | null>(null);
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    // event.target.files는 사용자가 input[type="file"]에서 선택한 파일들의 리스트(파일 목록)를 의미해요.
    // 파일이 하나라도 선택되었는지 확인하는 조건문입니다.
    if (event.target.files) {
      const file = event.target.files[0];
      // 사용자가 선택한 파일을 브라우저에서 바로 볼 수 있도록 임시 URL을 만들어서 icon 상태에 저장해요.
      setIcon(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-10">
      <PageHero
        title="Submit your product"
        subtitle="Share your product with the world"
        className=""
      />
      <Form className="grid grid-cols-2 gap-20 max-w-screen-lg mx-auto mb-40">
        <div className="w-full flex flex-col items-start space-y-2">
          <Label
            htmlFor="background_img"
            className="flex flex-col gap-0 items-start"
          >
            <span className="text-lg font-medium">Logo</span>
            <small className="text-sm text-muted-foreground/70">
              this is the Logo of your product
            </small>
          </Label>
          {icon ? (
            <div className="relative w-full h-[400px]">
              <div className="flex w-full h-full rounded-xl shadow-xl bg-muted-foreground/10 overflow-hidden">
                <img
                  src={icon}
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-2 right-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setIcon(null)}
                  className="cursor-pointer"
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex w-full h-[400px] rounded-xl shadow-xl bg-muted-foreground/10">
              <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
                <ImagePlus className="size-10 text-muted-foreground" />
                <div className="flex flex-col gap-0 text-center">
                  <span className="text-sm text-muted-foreground leading-tight tracking-tight">
                    Upload your product icon file
                  </span>
                  <span className="text-sm text-muted-foreground leading-tight tracking-tight">
                    (png, jpg, jpeg, svg)
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="w-full flex flex-col gap-2">
            <Input
              type="file"
              id="icon"
              className="hidden"
              onChange={onChange} // onChange는 input 값이 변경될 때 실행되는 이벤트 핸들러를 지정하는 props입니다.
              required
              name="icon"
            />
            <Button variant="outline" className="w-full cursor-pointer" asChild>
              <label htmlFor="icon">
                <UploadIcon className="size-4 " />
                Upload file
              </label>
            </Button>
          </div>
          <div className="flex flex-col gap-0 text-sm text-muted-foreground/70">
            <span>Recommended size: 128x128px</span>
            <span>Allowed formats: PNG, JPEG, SVG / Max file size: 1MB</span>
          </div>
        </div>
        <div className="space-y-10">
          <InputPair
            label="Product Name"
            description="This is your product name"
            id="name"
            name="name"
            placeholder="Enter your product name"
            type="text"
            required
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            id="tagline"
            name="tagline"
            placeholder="A concise description of your product"
            type="text"
            required
          />
          <InputPair
            label="URL"
            description="The URL of your product"
            id="url"
            name="url"
            placeholder="https://example.com"
            type="url"
            required
          />
          <InputPair
            textarea
            label="Description"
            description="A detailed description of your product"
            id="description"
            name="description"
            placeholder="A detailed description of your product"
            required
            type="text"
          />
          <SelectPair
            name="category"
            label="Category"
            description="The category of your product"
            placeholder="Select a category"
            options={[
              { label: "AI", value: "ai" },
              { label: "Productivity", value: "productivity" },
              { label: "Marketing", value: "marketing" },
              { label: "Design", value: "design" },
              { label: "Development", value: "development" },
              { label: "Other", value: "other" },
            ]}
          />
          <Button type="submit" className="w-full" size="lg" variant="default">
            Submit
          </Button>
        </div>
      </Form>
      <Footer />
    </div>
  );
}
