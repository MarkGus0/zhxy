import { Stars } from "@/components/ui/Stars";
import { site } from "@/data/site";
import styles from "./MaintenancePage.module.css";

interface MaintenancePageProps {
    title?: string;
    message?: string;
    estimatedTime?: string;
    showContact?: boolean;
}

export function MaintenancePage({
    title = "Under Maintenance",
    message = "We are currently performing scheduled maintenance to improve our services.",
    estimatedTime,
    showContact = true,
}: MaintenancePageProps) {
    return (
        <div className={styles.page}>
            <div className={styles.background}>
                <Stars />
            </div>

            <div className={styles.content}>
                <div className={styles.icon}>
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                </div>

                <h1 className={styles.title}>{title}</h1>
                <p className={styles.message}>{message}</p>

                {estimatedTime && (
                    <div className={styles.estimate}>
                        <span className={styles.estimateLabel}>Estimated completion:</span>
                        <span className={styles.estimateTime}>{estimatedTime}</span>
                    </div>
                )}

                {showContact && (
                    <div className={styles.contact}>
                        <p>For urgent inquiries, please contact us at:</p>
                        <a href={`mailto:${site.contactEmail}`} className={styles.email}>
                            {site.contactEmail}
                        </a>
                    </div>
                )}

                <div className={styles.progress}>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} />
                    </div>
                    <span className={styles.progressText}>Maintenance in progress...</span>
                </div>
            </div>
        </div>
    );
}
