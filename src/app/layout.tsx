import type { Metadata } from "next";
import { Poppins, Urbanist, Roboto_Slab } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://boxx-turkiye.netlify.app'),
  title: {
    default: "BOXX Türkiye - Yüksek Performanslı İş İstasyonları",
    template: "%s | BOXX Türkiye"
  },
  description: "BOXX Türkiye, mimarlık, mühendislik, tasarım, medya, eğlence ve yapay zeka için yüksek performanslı iş istasyonları ve creator PC'leri sunar.",
  keywords: ["BOXX Türkiye", "iş istasyonu", "workstation", "creator pc", "yapay zeka", "ai workstation", "nvidia rtx", "amd threadripper", "cad workstation", "render workstation"],
  authors: [{ name: "BOXX Türkiye" }],
  creator: "BOXX Türkiye",
  publisher: "BOXX Türkiye",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://boxx-turkiye.netlify.app",
    siteName: "BOXX Türkiye",
    title: "BOXX Türkiye - Yüksek Performanslı İş İstasyonları",
    description: "BOXX Türkiye, mimarlık, mühendislik, tasarım, medya, eğlence ve yapay zeka için yüksek performanslı iş istasyonları ve creator PC'leri sunar.",
    images: [
      {
        url: "https://ext.same-assets.com/3886351630/3519237665.png",
        width: 1200,
        height: 630,
        alt: "BOXX Türkiye İş İstasyonları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOXX Türkiye - Yüksek Performanslı İş İstasyonları",
    description: "BOXX Türkiye, mimarlık, mühendislik, tasarım, medya, eğlence ve yapay zeka için yüksek performanslı iş istasyonları ve creator PC'leri sunar.",
    images: ["https://ext.same-assets.com/3886351630/3519237665.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${poppins.variable} ${urbanist.variable} ${robotoSlab.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <StructuredData />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <Analytics />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
