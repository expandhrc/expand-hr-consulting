import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HR Expand Plus",
  description:
    "HR Expand Plus offers comprehensive HR solutions for businesses of all sizes. Contact us for your HR needs.",
  icons: {
    icon: "/hero.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head className='bg-white'>
        <Navbar />
      </head>
      <body>
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
