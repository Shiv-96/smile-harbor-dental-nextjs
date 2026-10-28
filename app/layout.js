/**
 * Root layout: global styles, self-hosted fonts, site-wide metadata (SEO and Open Graph)
 * and the shared page shell (skip link, header, footer, floating call button).
 */

import "@fontsource-variable/manrope";
import "@fontsource-variable/source-sans-3";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/layout/FloatingCallButton";
import Header from "@/components/layout/Header";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { SITE_URL, clinic } from "@/data/clinic";

const title = `${clinic.name} | Dentist in Koregaon Park, Pune`;
const ogImage = {
  url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=630&q=70",
  width: 1200,
  height: 630,
  alt: "Modern dental treatment room at Smile Harbor Dental Care",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: clinic.name,
    title,
    description: clinic.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: clinic.description,
    images: [ogImage.url],
  },
};

export const viewport = {
  themeColor: "#1e40af",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-brand-800 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCallButton />
        <RevealOnScroll />
      </body>
    </html>
  );
}
