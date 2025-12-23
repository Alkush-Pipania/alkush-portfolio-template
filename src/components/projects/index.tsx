import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { ProjectCard } from "./project-card";
import { PROJECTS } from "@/portfolio/data/projects";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MAX_DISPLAY = 4;

// Group projects into rows of 2
function chunkProjects<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function InnerSeparator() {
  return (
    <div className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[8px_8px] [--pattern-foreground:var(--color-edge)]/40" />
  );
}

export function Projects() {
  const displayedProjects = PROJECTS.slice(0, MAX_DISPLAY);
  const projectRows = chunkProjects(displayedProjects, 2);

  return (
    <Panel id="projects">
      {/* Header */}
      <PanelHeader className="py-6">
        <div className="flex items-center justify-between">
          <PanelTitle>
            Projects
            <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          </PanelTitle>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all →
          </Link>
        </div>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          Featured projects and work showcase
        </p>
      </PanelHeader>

      {/* Inner separator after header */}
      <InnerSeparator />

      {/* Projects Grid */}
      <div className="border-t border-edge">
        {projectRows.map((row, rowIndex) => (
          <div key={rowIndex}>
            {/* Row of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {row.map((project, colIndex) => (
                <div
                  key={project.id}
                  className={cn(
                    "border-b border-edge",
                    colIndex === 0 && row.length > 1 && "sm:border-r"
                  )}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
              {/* Fill empty cell if odd number in row */}
              {row.length === 1 && (
                <div className="hidden border-b border-edge sm:block" />
              )}
            </div>

            {/* Separator between rows */}
            {rowIndex < projectRows.length - 1 && <InnerSeparator />}
          </div>
        ))}
      </div>

      {/* Footer with button */}
      {PROJECTS.length > MAX_DISPLAY && (
        <>
          <InnerSeparator />
          <div className="flex items-center justify-center border-t border-edge py-5">
            <Button asChild variant="default" size="lg">
              <Link href="/projects" className="gap-2">
                <span>All Projects</span>
                <ArrowRightIcon className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </>
      )}
    </Panel>
  );
}
