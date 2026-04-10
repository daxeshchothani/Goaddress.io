import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://goaddress.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "UK Postcode API & Address Lookup | GoAddress",
  description:
    "A developer-friendly UK address API delivering precise address results. 50 free lookups/day, no credit card required. Trusted by 1,800+ developers.",
  keywords: [
    "UK postcode API",
    "address lookup API",
    "geocoding API",
    "postcode lookup",
    "UK address data",
  ],
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "UK Postcode API & Address Lookup | GoAddress",
    description:
      "A developer-friendly UK address API delivering precise address results. 50 free lookups/day, no credit card required. Trusted by 1,800+ developers.",
    url: siteUrl,
    siteName: "GoAddress",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "GoAddress landing page preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Postcode API & Address Lookup | GoAddress",
    description:
      "A developer-friendly UK address API delivering precise address results. 50 free lookups/day, no credit card required. Trusted by 1,800+ developers.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-primary font-sans text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
