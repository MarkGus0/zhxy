import Link from "next/link";
import { ErrorLayout } from "@/components/templates/ErrorLayout";

export default function NotFound() {
    return (
        <ErrorLayout
            code="404"
            title="Page Not Found"
            description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            actions={[
                { label: "Back to Home", href: "/", variant: "primary" },
                { label: "Contact Us", href: "/#contact", variant: "ghost" },
            ]}
            showNavigation={true}
            showStars={true}
        />
    );
}
