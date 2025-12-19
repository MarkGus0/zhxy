import type { Metadata } from "next";
import { Chakra_Petch, Sora } from "next/font/google";
import { OfflineIndicator } from "@/components/molecules/OfflineIndicator";
import "./globals.css";

const bodyFont = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
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

