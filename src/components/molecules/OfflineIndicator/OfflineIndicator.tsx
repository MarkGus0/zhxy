"use client";

import { useEffect, useState } from "react";
import styles from "./OfflineIndicator.module.css";

export function OfflineIndicator() {
    const [isOnline, setIsOnline] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check initial state
        setIsOnline(navigator.onLine);
        setIsVisible(!navigator.onLine);

        const handleOnline = () => {
            setIsOnline(true);
            // Keep visible briefly to show "Back online" message
            setTimeout(() => setIsVisible(false), 2000);
        };

        const handleOffline = () => {
            setIsOnline(false);
            setIsVisible(true);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`${styles.indicator} ${isOnline ? styles.online : styles.offline}`}
            role="alert"
            aria-live="polite"
        >
            <span className={styles.icon}>
                {isOnline ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="1" y1="1" x2="23" y2="23" />
                        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                        <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
                        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                        <line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                )}
            </span>
            <span className={styles.text}>
                {isOnline ? "Back online" : "No internet connection"}
            </span>
        </div>
    );
}
