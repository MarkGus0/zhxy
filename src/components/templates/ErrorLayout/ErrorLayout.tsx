import Link from "next/link";
import { Stars } from "@/components/ui/Stars";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/data/site";
import styles from "./ErrorLayout.module.css";

interface ErrorAction {
    label: string;
    href?: string;
    onClick?: () => void;
    variant: "primary" | "secondary" | "ghost";
}

interface ErrorLayoutProps {
    code: string;
    title: string;
    description: string;
    actions?: ErrorAction[];
    showNavigation?: boolean;
    showStars?: boolean;
}

export function ErrorLayout({
    code,
    title,
    description,
    actions = [],
    showNavigation = true,
    showStars = true,
}: ErrorLayoutProps) {
    return (
        <div className={styles.errorPage}>
            {showStars && (
                <div className={styles.background}>
                    <Stars />
                </div>
            )}

            {/* Decorative circles */}
            <div className={`${styles.decorCircle} ${styles.decorCircle1}`} />
            <div className={`${styles.decorCircle} ${styles.decorCircle2}`} />

            <div className={styles.content}>
                <div className={styles.errorCode}>{code}</div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>

                {actions.length > 0 && (
                    <div className={styles.actions}>
                        {actions.map((action, index) => (
                            action.onClick ? (
                                <Button
                                    key={index}
                                    as="button"
                                    variant={action.variant}
                                    size="lg"
                                    onClick={action.onClick}
                                >
                                    {action.label}
                                </Button>
                            ) : (
                                <Button
                                    key={index}
                                    href={action.href}
                                    variant={action.variant}
                                    size="lg"
                                >
                                    {action.label}
                                </Button>
                            )
                        ))}
                    </div>
                )}

                {showNavigation && (
                    <nav className={styles.navLinks}>
                        <p className={styles.navLinksLabel}>Quick Navigation</p>
                        <div className={styles.navLinksGrid}>
                            {navItems.slice(0, 4).map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={styles.navLink}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </div>
    );
}
