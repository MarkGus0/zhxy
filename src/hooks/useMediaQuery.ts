"use client";

import { useEffect, useState } from "react";
import { BREAKPOINTS, type BreakpointKey } from "@/types/design.types";

/**
 * Hook to check if a media query matches
 * @param query - CSS media query string
 * @returns boolean indicating if the query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        // Set initial value
        setMatches(mediaQuery.matches);

        // Create listener
        const handler = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Add listener
        mediaQuery.addEventListener("change", handler);

        // Cleanup
        return () => {
            mediaQuery.removeEventListener("change", handler);
        };
    }, [query]);

    return matches;
}

/**
 * Hook to get the current breakpoint
 * @returns Current breakpoint key
 */
export function useBreakpoint(): BreakpointKey {
    const [breakpoint, setBreakpoint] = useState<BreakpointKey>("xs");

    useEffect(() => {
        const calculateBreakpoint = (): BreakpointKey => {
            const width = window.innerWidth;

            if (width >= BREAKPOINTS["2xl"]) return "2xl";
            if (width >= BREAKPOINTS.xl) return "xl";
            if (width >= BREAKPOINTS.lg) return "lg";
            if (width >= BREAKPOINTS.md) return "md";
            if (width >= BREAKPOINTS.sm) return "sm";
            return "xs";
        };

        // Set initial value
        setBreakpoint(calculateBreakpoint());

        // Create listener
        const handleResize = () => {
            setBreakpoint(calculateBreakpoint());
        };

        // Add listener
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return breakpoint;
}

/**
 * Hook to check if screen is mobile
 * @returns boolean indicating if on mobile
 */
export function useIsMobile(): boolean {
    return useMediaQuery("(max-width: 639px)");
}

/**
 * Hook to check if screen is tablet
 * @returns boolean indicating if on tablet
 */
export function useIsTablet(): boolean {
    return useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
}

/**
 * Hook to check if screen is desktop
 * @returns boolean indicating if on desktop
 */
export function useIsDesktop(): boolean {
    return useMediaQuery("(min-width: 1024px)");
}

/**
 * Hook to check if device supports touch
 * @returns boolean indicating touch support
 */
export function useIsTouchDevice(): boolean {
    return useMediaQuery("(hover: none) and (pointer: coarse)");
}
