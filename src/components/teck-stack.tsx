import Image from "next/image";

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";


import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { TECH_STACK } from "@/portfolio/data/tech-stack";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <TooltipProvider>
          <ul className="flex flex-wrap gap-4 select-none">
            {TECH_STACK.map((tech) => {
              return (
                <li key={tech.key} className="flex">
                  <TooltipRoot>
                    <TooltipTrigger
                      render={
                        <a
                          href={tech.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={tech.title}
                        />
                      }
                    >
                      <Image
                        src={`https://stealth.blr1.digitaloceanspaces.com/assest/stack/${tech.key}`}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        unoptimized
                        className="w-12 h-12 object-contain"
                      />
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>{tech.title}</p>
                    </TooltipContent>
                  </TooltipRoot>
                </li>
              );
            })}
          </ul>
        </TooltipProvider>
      </PanelContent>
    </Panel>
  );
}
