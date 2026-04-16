import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tehseem Ahmed — Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of experience specializing in React Native, Next.js, and Node.js. Portfolio of production-grade CRM systems, mobile apps, and enterprise solutions.",
  keywords: [
    "Full Stack Developer",
    "React Native",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Tehseem Ahmed",
  ],
  authors: [{ name: "Tehseem Ahmed" }],
  openGraph: {
    title: "Tehseem Ahmed — Full Stack Developer",
    description:
      "Building scalable web and mobile applications with React Native, Next.js, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
