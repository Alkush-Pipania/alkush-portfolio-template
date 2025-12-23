"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";

import { MoonIcon } from "./animated-icons/moon";
import { SunMediumIcon } from "./animated-icons/sun-medium";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { setMetaColor } = useMetaColor();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setMetaColor(
      resolvedTheme === "dark"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark
    );
  }, [resolvedTheme, setTheme, setMetaColor]);

  useHotkeys("d", switchTheme);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
          "h-9 w-9 shrink-0",
          "hover:bg-accent hover:text-accent-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        )}
        disabled
      >
        <span className="sr-only">Theme Toggle</span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
          "h-9 w-9 shrink-0 cursor-pointer",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-50"
        )}
        onClick={switchTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? (
          <MoonIcon className="size-5" />
        ) : (
          <SunMediumIcon className="size-5" />
        )}
        <span className="sr-only">Theme Toggle</span>
      </TooltipTrigger>

      <TooltipContent className="pr-2 pl-3">
        <div className="flex items-center gap-3">
          Toggle Mode
          <Kbd>D</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
