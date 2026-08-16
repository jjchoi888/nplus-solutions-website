import type { Metadata, Viewport } from "next";
import { ContentProtection } from "@/components/content-protection";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nplus-solutions.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "N Plus Solutions Inc. | Building What Comes Next",
    template: "%s | N Plus Solutions Inc.",
  },
  description:
    "N Plus Solutions Inc. develops connected software, digital platforms, AI-enabled systems, fintech, tourism, hospitality, and business solutions.",
  keywords: [
    "N Plus Solutions",
    "Next Plus",
    "software development",
    "digital platforms",
    "AI systems",
    "fintech solutions",
    "hospitality technology",
    "project management",
  ],
  openGraph: {
    title: "N Plus Solutions Inc.",
    description: "Building What Comes Next.",
    type: "website",
    siteName: "N Plus Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "N Plus Solutions Inc.",
    description: "Building What Comes Next.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ContentProtection />
        {children}
      </body>
    </html>
  );
}
