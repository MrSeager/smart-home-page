import type { Metadata } from "next";
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
  title: "Smart Home Landing Page",
  description: "Smart Home Landing Page created using Next.JS, TypeScript, Tailwind",
  openGraph: {
    title: "Smart Home Landing Page",
    description: "Smart Home Landing Page created using Next.JS, TypeScript, Tailwind",
    images: [
      {
        url: "https://www.frontendpro.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdi5hmgowi%2Fimage%2Fupload%2Fv1%2Fchallenges%2Fsmart-home-landing-page%2Fdesktop-cover.png&w=1080&q=75", // this must be in /public
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.frontendpro.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdi5hmgowi%2Fimage%2Fupload%2Fv1%2Fchallenges%2Fsmart-home-landing-page%2Fdesktop-cover.png&w=1080&q=75"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
