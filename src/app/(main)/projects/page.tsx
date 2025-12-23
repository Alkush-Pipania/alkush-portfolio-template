import type { Metadata } from "next";

import { ProjectsGrid } from "@/components/projects/projects-grid";
import { PROJECTS } from "@/portfolio/data/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Projects",
    description: "A collection of projects showcasing development work and creative solutions.",
};

function Separator({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex h-8 w-full border-x border-edge",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
                "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
                className
            )}
        />
    );
}

export default function ProjectsPage() {
    return (
        <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
            <Separator />

            {/* Page Header */}
            <div className="border-x border-b border-edge px-6 py-10">
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                <p className="mt-3 font-mono text-muted-foreground">
                    A collection of projects showcasing development, design, and ideas.
                </p>
            </div>

            <Separator />

            {/* Search + Grid (Client Component) */}
            <ProjectsGrid projects={PROJECTS} />

            <Separator />
        </div>
    );
}
