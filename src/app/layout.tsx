import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "McLean Carpentry & Remodeling LLC",
  description: "Rustic, detail-driven carpentry and remodeling services.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-stone-100 text-stone-900 antialiased">
        <Navbar />

        {/* Page content */}
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
