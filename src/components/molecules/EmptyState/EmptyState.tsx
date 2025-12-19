import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./EmptyState.module.css";

interface EmptyStateAction {
    label: string;
    onClick: () => void;
}

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description?: string;
    action?: EmptyStateAction;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const defaultIcon = (
    <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
    >
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
);

export function EmptyState({
    icon = defaultIcon,
    title,
    description,
    action,
    size = "md",
    className,
}: EmptyStateProps) {
    return (
        <div className={`${styles.container} ${styles[size]} ${className || ""}`}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            {description && <p className={styles.description}>{description}</p>}
            {action && (
                <Button
                    as="button"
                    variant="secondary"
                    size={size === "lg" ? "md" : "sm"}
                    onClick={action.onClick}
                >
                    {action.label}
                </Button>
            )}
        </div>
    );
}
