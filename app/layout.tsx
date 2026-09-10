import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#9E1A2F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://laliguras.com"),
  title: {
    default: "Laliguras — Digital Product Engineering & Technology Studio",
    template: "%s | Laliguras Studio",
  },
  description:
    "Laliguras is a modern digital product engineering and technology studio. We design, architect, and build scalable web software, custom enterprise platforms, and interactive 3D simulations.",
  keywords: [
    "Digital Product Studio",
    "Software Engineering",
    "Enterprise Platforms",
    "Web Application Development",
    "Interactive 3D Simulations",
    "SafeStep Health and Safety Platform",
    "Custom Learning Management Systems",
    "Next.js and React Studio",
    "Nepal Technology Company",
    "Laliguras",
  ],
  authors: [{ name: "Laliguras" }],
  creator: "Laliguras",
  publisher: "Laliguras",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laliguras.com",
    siteName: "Laliguras",
    title: "Laliguras — Digital Product Engineering & Technology Studio",
    description:
      "Engineering ambitious digital products, custom enterprise platforms, and interactive 3D simulations.",
    images: [{ url: "/brand/laliguras-himalaya-hero.webp", width: 1942, height: 809, alt: "Himalayan ridges and Laliguras rhododendrons at dawn" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laliguras — Digital Product Engineering & Technology Studio",
    description:
      "Engineering ambitious digital products, custom enterprise platforms, and interactive 3D simulations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Laliguras",
    url: "https://laliguras.com",
    logo: "https://laliguras.com/icon.svg",
    description: "Digital product engineering and technology studio building custom software and enterprise platforms.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Chitwan",
      addressCountry: "NP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "team@pokhrel.tech",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f5f4ef] text-[#101916] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
