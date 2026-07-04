import type { Metadata } from "next";
import { fraunces, manrope } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StoreProvider } from "@/lib/store";
import { Toaster } from "sonner";
import { LoadingScreen } from "@/components/loading-screen";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AELIA — Fragrance in Small Batches",
    template: "%s — AELIA",
  },
  description:
    "AELIA composes fragrance in small batches: nine compositions, no seasonal drops. Woody, amber, and musk perfumes built for longevity and restraint.",
  metadataBase: new URL("https://aelia.example.com"),
  openGraph: {
    title: "AELIA — Fragrance in Small Batches",
    description:
      "Nine fragrance compositions, formulated for longevity and worn close to the skin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-bone text-ink antialiased">
        <StoreProvider>
          <LoadingScreen />
          <SiteHeader transparent />
          {children}
          <SiteFooter />
          <Toaster position="bottom-center" richColors />
        </StoreProvider>
      </body>
    </html>
  );
}
