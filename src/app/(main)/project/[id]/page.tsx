import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, BoxIcon, InfinityIcon, LinkIcon } from "lucide-react";

import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { ProseMono } from "@/components/ui/typography";
import { PROJECTS } from "@/portfolio/data/projects";
import { cn } from "@/lib/utils";

// Helper function to get first alphanumeric character, skipping emojis
function getFirstAlphanumeric(str: string): string {
    const match = str.match(/[a-zA-Z0-9]/);
    return match ? match[0].toUpperCase() : str.charAt(0);
}

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: project.title,
        description: project.description?.slice(0, 160) || `Details about ${project.title}`,
    };
}

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        id: project.id,
    }));
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

export default async function ProjectDetailPage({ params }: Props) {
    const { id } = await params;
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    const { start, end } = project.period;
    const isOngoing = !end;
    const isSinglePeriod = end === start;

    return (
        <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
            <Separator />

            {/* Header with back button and title */}
            <div className="flex items-center gap-3 border-x border-b border-edge px-4 py-6">
                <Button asChild variant="ghost" size="icon" className="shrink-0">
                    <Link href="/projects">
                        <ArrowLeftIcon className="size-4" />
                        <span className="sr-only">Back to Projects</span>
                    </Link>
                </Button>
                <div className="flex items-center gap-3">
                    {project.logo ? (
                        <Image
                            src={project.logo}
                            alt={project.title}
                            width={40}
                            height={40}
                            quality={100}
                            className="size-10 shrink-0 select-none"
                            unoptimized
                            aria-hidden="true"
                        />
                    ) : (
                        <div
                            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
                            aria-hidden="true"
                        >
                            <BoxIcon className="size-5" />
                        </div>
                    )}
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">{project.title}</h1>
                        <div className="flex items-center gap-0.5 text-sm text-muted-foreground">
                            <span>{start}</span>
                            {!isSinglePeriod && (
                                <>
                                    <span className="font-mono">—</span>
                                    {isOngoing ? (
                                        <>
                                            <InfinityIcon
                                                className="size-4 translate-y-[0.5px]"
                                                aria-hidden
                                            />
                                            <span className="sr-only">Present</span>
                                        </>
                                    ) : (
                                        <span>{end}</span>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Hero Section: Image left, quick info right */}
            <div className="grid grid-cols-1 border-x border-b border-edge md:grid-cols-2">
                {/* Image */}
                <div className="overflow-hidden border-b border-edge md:border-b-0 md:border-r">
                    {project.media ? (
                        project.media.type === "image" ? (
                            <Image
                                src={project.media.url}
                                alt={project.media.alt || project.title}
                                width={400}
                                height={300}
                                className="h-full w-full object-cover"
                                unoptimized
                            />
                        ) : (
                            <video
                                src={project.media.url}
                                controls
                                className="h-full w-full object-cover"
                                poster={project.media.alt}
                            >
                                Your browser does not support the video tag.
                            </video>
                        )
                    ) : (
                        <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-muted to-muted-foreground/10 md:h-full">
                            <span className="text-6xl font-bold text-muted-foreground/20">
                                {getFirstAlphanumeric(project.title)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Quick Info */}
                <div className="flex flex-col justify-center gap-4 p-6">
                    <a
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                        href={project.link}
                        target="_blank"
                        rel="noopener"
                    >
                        <LinkIcon className="size-4" />
                        <span>Visit Project</span>
                    </a>

                    {project.skills.length > 0 && (
                        <div>
                            <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                Technologies
                            </h4>
                            <ul className="flex flex-wrap gap-1.5">
                                {project.skills.slice(0, 6).map((skill, index) => (
                                    <li key={index} className="flex">
                                        <Tag>{skill}</Tag>
                                    </li>
                                ))}
                                {project.skills.length > 6 && (
                                    <li className="flex">
                                        <Tag>+{project.skills.length - 6}</Tag>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <Separator />

            {/* Description */}
            {project.description && (
                <>
                    <div className="border-x border-b border-edge p-6">
                        <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            About This Project
                        </h3>
                        <ProseMono>
                            <Markdown>{project.description}</Markdown>
                        </ProseMono>
                    </div>
                    <Separator />
                </>
            )}

            {/* All Skills */}
            {project.skills.length > 6 && (
                <>
                    <div className="border-x border-b border-edge p-6">
                        <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            All Technologies & Skills
                        </h3>
                        <ul className="flex flex-wrap gap-1.5">
                            {project.skills.map((skill, index) => (
                                <li key={index} className="flex">
                                    <Tag>{skill}</Tag>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Separator />
                </>
            )}
        </div>
    );
}
