"use client";

import { cn } from "@/lib/utils";
import type { RetroIcon } from "@/lib/icons";

export function RetroIconView({
  icon,
  size = 40,
  strokeWidth = 2,
  className,
  stroke = "currentColor",
}: {
  icon: RetroIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: icon bodies are local static strings
      dangerouslySetInnerHTML={{ __html: icon.body }}
      aria-hidden
    />
  );
}
