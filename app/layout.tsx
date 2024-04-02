import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cover from "@/components/Cover";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Expand HR Consulting",
  description:
    "Expand HR Consulting offers comprehensive HR solutions for businesses of all sizes. Contact us for your HR needs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html>
        <body className="relative">
          <Navbar />
          <Cover />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
