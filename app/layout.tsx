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
    default: "Laliguras — Workplace Health, Safety & Professional Training",
    template: "%s | Laliguras SafeStep",
  },
  description:
    "Laliguras provides modern, interactive workplace health and safety training. Featuring SafeStep with 360° hazard simulations, accredited courseware, and verifiable compliance tracking.",
  keywords: [
    "Workplace Health and Safety",
    "Interactive Safety Training",
    "SafeStep",
    "360 Degree Workplace Scenarios",
    "Manual Handling Training",
    "Fire Safety Awareness",
    "COSHH Compliance",
    "Nepal Occupational Safety",
    "Enterprise Compliance Training",
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
    title: "Laliguras — Workplace Health, Safety & Professional Training",
    description:
      "Transforming workplace safety through interactive real-world scenarios, 360° simulations, and measurable compliance progress.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laliguras — Modern Workplace Safety Training",
    description:
      "Interactive 360° hazard simulations and verifiable occupational safety credentials for forward-thinking organizations.",
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
    alternateName: "SafeStep",
    url: "https://laliguras.com",
    logo: "https://laliguras.com/icon.svg",
    description: "Modern workplace health, safety, and professional training platform.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lalitpur",
      addressCountry: "NP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+977 9801234567",
      contactType: "customer service",
      email: "info@laliguras.com",
    },
    sameAs: ["https://linkedin.com", "https://twitter.com"],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#0A1914] antialiased selection:bg-[#FDF2F4] selection:text-[#9E1A2F]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
