import type { Metadata, Viewport } from "next";
import { ContentProtection } from "@/components/content-protection";
import {
  DEFAULT_DESCRIPTION,
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "N Plus Solutions | Software, Digital Platforms & AI",
    template: "%s | N Plus Solutions",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "N Plus Solutions | Software, Digital Platforms & AI",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "N Plus Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N Plus Solutions | Software, Digital Platforms & AI",
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image`],
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
