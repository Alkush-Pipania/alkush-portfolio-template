"use client";

import { useState, useMemo } from "react";
import { SearchIcon } from "lucide-react";

import { ProjectCard } from "@/components/projects/project-card";
import { Project } from "@/portfolio/types/projects";
import { cn } from "@/lib/utils";

// Group projects into rows of 2
function chunkProjects<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
    const [search, setSearch] = useState("");

    const filteredProjects = useMemo(() => {
        if (!search.trim()) return projects;

        const query = search.toLowerCase();
        return projects.filter(
            (project) =>
                project.title.toLowerCase().includes(query) ||
                project.description?.toLowerCase().includes(query) ||
                project.skills.some((skill) => skill.toLowerCase().includes(query))
        );
    }, [projects, search]);

    const projectRows = chunkProjects(filteredProjects, 2);

    return (
        <>
            {/* Search Bar */}
            <div className="border-x border-b border-edge px-6 py-5">
                <div className="flex items-center gap-3 rounded-xl border border-edge bg-muted/50 px-4 py-3 transition-colors focus-within:border-muted-foreground/50">
                    <SearchIcon className="size-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search projects by name, description, or skill..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="text-xs text-muted-foreground hover:text-foreground"
                        >
                            Clear
                        </button>
                    )}
                </div>
                {search && (
                    <p className="mt-2 text-xs text-muted-foreground">
                        Found {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
                    </p>
                )}
            </div>

            <Separator />

            {/* Projects Grid with Row Separators */}
            <div className="border-x border-edge">
                {filteredProjects.length === 0 ? (
                    <div className="flex flex-col items-center justify-center border-b border-edge py-16 text-center">
                        <p className="text-lg font-medium text-muted-foreground">No projects found</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Try a different search term
                        </p>
                    </div>
                ) : (
                    projectRows.map((row, rowIndex) => (
                        <div key={rowIndex}>
                            {/* Row of cards */}
                            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                                {row.map((project, colIndex) => (
                                    <div
                                        key={project.id}
                                        className={cn(
                                            "border-b border-edge",
                                            colIndex === 0 && "sm:border-r"
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

                            {/* Separator between rows (except last) */}
                            {rowIndex < projectRows.length - 1 && (
                                <div className="h-6 border-b border-edge bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[8px_8px] [--pattern-foreground:var(--color-edge)]/30" />
                            )}
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

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
