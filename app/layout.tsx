import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PRISMM — One Document. Every Perspective.",
    template: "%s | PRISMM",
  },
  description:
    "Understand complex documents your way. Switch between quick summaries, visual maps, and comfortable reading with PRISMM.",
  applicationName: "PRISMM",
  keywords: [
    "PRISMM",
    "adaptive reading",
    "document accessibility",
    "document visualization",
    "reading experience",
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}