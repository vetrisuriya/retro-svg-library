import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-12 w-full rounded-xl border-[2.5px] border-[#1A1A1A] bg-[#FFFDF5] px-4 py-2 text-base font-medium placeholder:text-[#1A1A1A]/40 shadow-[4px_4px_0_#1A1A1A] focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-[2px_2px_0_#1A1A1A]",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
