"use client";

import { useEffect } from "react";
import { ErrorLayout } from "@/components/templates/ErrorLayout";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application Error:", error);
    }, [error]);

    return (
        <ErrorLayout
            code="Error"
            title="Something Went Wrong"
            description="We apologize for the inconvenience. An unexpected error has occurred while loading this page."
            actions={[
                { label: "Try Again", onClick: () => reset(), variant: "primary" },
                { label: "Back to Home", href: "/", variant: "ghost" },
            ]}
            showNavigation={false}
            showStars={true}
        />
    );
}
