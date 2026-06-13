import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Eden Square | Artisan Harvest & Autonomous Retail",
  description: "A world-class digital architecture for high-stakes hospitality. Precision-roasted coffee, artisan bakery, and curated organic essentials.",
  openGraph: {
    title: "Eden Square | Gourmet Engineering",
    description: "Every interaction is a protocol. Every meal is an architecture. Experience the future of urban harvest.",
    url: "https://eden-square.the-hayden.co.uk",
    siteName: "Eden Square",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden Square | Artisan Harvest",
    description: "Precision Engineering / Curated Nodes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="${inter.variable} ${cormorant.variable} h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
