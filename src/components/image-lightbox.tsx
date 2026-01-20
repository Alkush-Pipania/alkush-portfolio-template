"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { XIcon, ZoomInIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
    src: string;
    alt: string;
    className?: string;
    children: React.ReactNode;
}

export function ImageLightbox({ src, alt, className, children }: ImageLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, handleClose]);

    return (
        <>
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={cn(
                    "group relative cursor-zoom-in overflow-hidden",
                    className
                )}
            >
                {children}
                {/* Hover zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <ZoomInIcon className="h-5 w-5 text-white" />
                    </div>
                </div>
            </button>

            {/* Lightbox Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center"
                    onClick={handleClose}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
                    />

                    {/* Close button */}
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <XIcon className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                    </button>

                    {/* Image container */}
                    <div
                        className="relative z-10 max-h-[90vh] max-w-[90vw] animate-in zoom-in-95 fade-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={1200}
                            height={800}
                            className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-lg object-contain shadow-2xl"
                            unoptimized
                        />
                        {/* Caption */}
                        <p className="mt-4 text-center text-sm text-white/70">
                            {alt}
                        </p>
                    </div>

                    {/* Click hint */}
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50">
                        Click anywhere or press ESC to close
                    </p>
                </div>
            )}
        </>
    );
}
