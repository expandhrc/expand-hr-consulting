import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cover from "@/components/Cover";

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
    <html>
      <body className="relative">
        <Navbar />
        <Cover />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
