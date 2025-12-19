/**
 * Design System Type Definitions
 * Provides type safety for design tokens and responsive values
 */

// Color tokens
export type ColorToken =
    | "bg"
    | "bg-deep"
    | "surface"
    | "surface-alt"
    | "surface-soft"
    | "text"
    | "text-muted"
    | "text-subtle"
    | "accent"
    | "accent-strong"
    | "accent-warm"
    | "accent-cool"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "border"
    | "border-strong";

// Spacing tokens
export type SpaceToken =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "8"
    | "10"
    | "12"
    | "16"
    | "20"
    | "24"
    | "32";

// Typography size tokens
export type TextSizeToken =
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";

// Font weight tokens
export type FontWeightToken =
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold";

// Breakpoint keys
export type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// Breakpoint values in pixels
export const BREAKPOINTS: Record<BreakpointKey, number> = {
    xs: 0,
    sm: 480,
    md: 640,
    lg: 768,
    xl: 1024,
    "2xl": 1280,
} as const;

// Responsive value type
export interface ResponsiveValue<T> {
    base?: T;
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
}

// Radius tokens
export type RadiusToken = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

// Shadow tokens
export type ShadowToken =
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "soft"
    | "strong"
    | "glow"
    | "glow-strong";

// Z-index tokens
export type ZIndexToken =
    | "behind"
    | "base"
    | "raised"
    | "dropdown"
    | "sticky"
    | "overlay"
    | "modal"
    | "popover"
    | "toast"
    | "tooltip"
    | "max";

// Duration tokens
export type DurationToken = "fast" | "normal" | "slow" | "slower";

// Easing tokens
export type EasingToken =
    | "linear"
    | "in"
    | "out"
    | "in-out"
    | "bounce"
    | "spring";

// Button variants
export type ButtonVariant = "primary" | "secondary" | "ghost";

// Button sizes
export type ButtonSize = "sm" | "md" | "lg";

// Component size variants
export type ComponentSize = "sm" | "md" | "lg";

// Common component props
export interface BaseComponentProps {
    className?: string;
    id?: string;
    "data-testid"?: string;
}

// Animation delay helper
export type AnimationDelay = `${number}s` | `${number}ms`;

// CSS variable helper type
export type CSSVariable = `var(--${string})`;
