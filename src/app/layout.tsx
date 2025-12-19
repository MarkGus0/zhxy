import type { Metadata } from "next";
import localFont from "next/font/local";
import { OfflineIndicator } from "@/components/molecules/OfflineIndicator";
import "./globals.css";

const bodyFont = localFont({
  src: [
    {
      path: "../fonts/Sora-latin.woff2",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial", "sans-serif"],
});

const displayFont = localFont({
  src: [
    {
      path: "../fonts/ChakraPetch-400-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ChakraPetch-500-latin.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ChakraPetch-600-latin.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ChakraPetch-700-latin.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Zhonghui Xingyuan",
    template: "%s | Zhonghui Xingyuan",
  },
  description:
    "Zhonghui Xingyuan Technology Co., Ltd. focuses on intelligent computing, industrial digitalization, and engineering delivery, providing integrated solutions from data governance to business scenario implementation.",
  keywords: [
    "Zhonghui Xingyuan",
    "Intelligent Computing",
    "Industrial Digitalization",
    "Data Governance",
    "AI Platform",
    "Enterprise Solutions",
  ],
  authors: [{ name: "Zhonghui Xingyuan Technology Co., Ltd." }],
  openGraph: {
    title: "Zhonghui Xingyuan",
    description:
      "Xingyuan Smart Computing · Industrial Transformation. Enterprise-grade intelligent platform and scenario-based solutions.",
    type: "website",
    locale: "zh_CN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hans"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <OfflineIndicator />
        {children}
      </body>
    </html>
  );
}
