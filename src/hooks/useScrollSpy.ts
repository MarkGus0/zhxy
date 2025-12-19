"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset: number = 100) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            // Find the section that is currently active
            for (const id of ids) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        if (activeId !== id) {
                            setActiveId(id);
                            // Update URL without jumping
                            const hash = id === "hero" ? " " : `#${id}`;
                            window.history.replaceState(null, "", hash);
                        }
                        return;
                    }
                }
            }

            // If we are at the very top, maybe clear the hash or set to first?
            // For now, let's strictly follow sections.
        };

        window.addEventListener("scroll", handleScroll);
        // Call once on mount to set initial state
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [ids, offset, activeId]);

    return activeId;
}
