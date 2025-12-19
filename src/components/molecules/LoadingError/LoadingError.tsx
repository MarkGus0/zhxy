import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./LoadingError.module.css";

interface LoadingErrorProps {
    message?: string;
    onRetry?: () => void;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function LoadingError({
    message = "Failed to load content",
    onRetry,
    size = "md",
    className,
}: LoadingErrorProps) {
    return (
        <div className={`${styles.container} ${styles[size]} ${className || ""}`}>
            <div className={styles.icon}>
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>
            <p className={styles.message}>{message}</p>
            {onRetry && (
                <Button
                    as="button"
                    variant="secondary"
                    size={size === "lg" ? "md" : "sm"}
                    onClick={onRetry}
                >
                    Try Again
                </Button>
            )}
        </div>
    );
}
