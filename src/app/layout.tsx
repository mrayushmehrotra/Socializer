import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/myComponents/Navbar";

export const metadata: Metadata = {
  title: "Socializer.ai - AI-powered Content for Social Media Growth",
  description:
    "A CaaS (Content as a Service) AI platform that generates optimized social media content to maximize your reach, engagement, and profile growth.",

  // Basic SEO
  keywords: [
    "AI content generator",
    "social media growth",
    "content as a service",
    "viral content",
    "social media marketing",
    "AI SaaS",
  ],

  // Open Graph / Social Sharing
  openGraph: {
    title: "Socializer.ai - AI-powered Content for Social Media Growth",
    description:
      "Generate content that gets more reach, likes, and shares with our AI-powered platform.",
    url: "https://socializer-gamma.vercel.app/",
    siteName: "Socializer.ai",
    images: [
      {
        url: "/favicon.ico", // Using favicon as you requested
        width: 64,
        height: 64,
        alt: "Socializer.ai Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary",
    title: "Socializer.ai - AI-powered Content for Social Media Growth",
    description:
      "Generate content that gets more reach, likes, and shares with our AI-powered platform.",
    images: ["/favicon.ico"], // Using favicon here as well
    // creator: "@yourtwitterhandle", // You can add this later if you have a Twitter account
  },

  // Additional Metadata
  metadataBase: new URL("https://socializer-gamma.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", // Using favicon for all icon types
    apple: "/favicon.ico", // Note: Apple prefers PNG, consider adding apple-touch-icon.png later
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff", // Set your brand color
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
