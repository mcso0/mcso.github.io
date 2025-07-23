import { NavLink, Outlet } from "react-router";
import { Button } from "~/common/components/ui/button";
import { ChevronUpIcon, GlobeIcon, StarIcon } from "lucide-react";
import type { Route } from "./+types/product-overview-layout";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/common/components/ui/button";

export default function ProductOverviewLayout({
  params: { productId },
}: Route.ComponentProps) {
  return (
    <div className="max-w-screen-xl mx-auto space-y-10">
      <div className="flex flex-row justify-between border-b pt-8 pb-16">
        <div className="flex flex-row justify-start items-center gap-10">
          {/* Logo image */}
          <div className="size-34 rounded-xl shadow-xl bg-primary/50 overflow-hidden"></div>
          {/* Product information */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Product Overview</h1>
            <p className="text-2xl font-light text-muted-foreground">
              Product description
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="flex items-start text-yellow-400 gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    className="size-4"
                    key={index}
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="text-base text-muted-foreground">
                100 reviews
              </span>
            </div>
          </div>
        </div>
        {/* Product actions */}
        <div className="flex flex-row gap-6 items-center justify-end">
          <div className="flex">
            <Button
              variant="ghost"
              className="cursor-pointer text-base !px-6 py-6"
              size="lg"
            >
              <GlobeIcon className="size-4" />
              Visit website
            </Button>
          </div>
          <div className="flex">
            <Button
              variant="default"
              className="cursor-pointer text-base !px-6 py-6"
              size="lg"
            >
              <ChevronUpIcon className="size-4" />
              Upvote (284)
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-4">
        <NavLink
          className={({ isActive }) =>
            cn([
              buttonVariants({ variant: "outline" }),
              isActive
                ? "!bg-accent text-accent-foreground"
                : "text-muted-foreground",
            ])
          }
          to={`/products/${productId}/overview`}
        >
          Overview
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn([
              buttonVariants({ variant: "outline" }),
              isActive
                ? "!bg-accent text-accent-foreground"
                : "text-muted-foreground",
            ])
          }
          to={`/products/${productId}/reviews`}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
