import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vectorsystems.rw"),
  title: {
    default: "Vector Systems | Organize, Track and Grow",
    template: "%s | Vector Systems",
  },
  description:
    "Vector Systems helps SMEs in Rwanda organize operations, track sales and tasks, and run with better control.",
  keywords: [
    "Vector Systems",
    "SME operations Rwanda",
    "business systems setup",
    "sales tracking for small business",
    "operations setup Kigali",
  ],
  openGraph: {
    title: "Vector Systems",
    description: "We help businesses run properly.",
    siteName: "Vector Systems",
    type: "website",
    locale: "en_RW",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vector Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector Systems",
    description: "We help businesses run properly.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <SiteHeader />
        <div className="pt-[5.5rem] md:pt-[6rem]">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
