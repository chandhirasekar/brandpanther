import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brand Panther | Premium Digital Marketing Agency",
  description: "Brand Panther is a premium digital marketing agency specializing in performance marketing, web development, SEO, and branding to scale your business.",
  keywords: ["digital marketing", "marketing agency", "performance marketing", "SEO", "web development", "branding", "Brand Panther"],
  authors: [{ name: "Brand Panther" }],
  openGraph: {
    title: "Brand Panther | Premium Digital Marketing Agency",
    description: "Scale your brand with Brand Panther. We specialize in performance marketing, web development, and branding.",
    url: "https://brandpanther.com",
    siteName: "Brand Panther",
    images: [
      {
        url: "/logo-mark.png", // Assuming this is available in the public directory
        width: 800,
        height: 600,
        alt: "Brand Panther Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Panther | Premium Digital Marketing Agency",
    description: "Scale your brand with Brand Panther. We specialize in performance marketing, web development, and branding.",
    images: ["/logo-mark.png"],
  },
  icons: {
    icon: "/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
