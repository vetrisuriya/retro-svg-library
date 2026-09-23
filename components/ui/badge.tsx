import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 border-[#1A1A1A] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-[#1A1A1A] text-[#FFFDF5]",
        yellow: "bg-[#FFD23F] text-[#1A1A1A]",
        white: "bg-white text-[#1A1A1A]",
        green: "bg-[#B8F169] text-[#1A1A1A]",
        pink: "bg-[#FFB3C7] text-[#1A1A1A]",
      },
    },
    defaultVariants: { variant: "white" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
