import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Nav } from "@/sections/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike",
  description: "Generated by create next app nike demo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
