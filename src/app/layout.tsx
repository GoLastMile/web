import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LastMile - Ship AI-Generated Code to Production",
  description:
    "AI writes 80% of your app in a day. LastMile handles the boring 20% on every commit, every feature, every deploy. Stay production-ready as you iterate.",
  keywords: ["devops", "ai", "deployment", "production", "cli", "mcp", "automation"],
  authors: [{ name: "LastMile" }],
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "LastMile - Ship AI-Generated Code to Production",
    description: "AI writes 80% of your app in a day. LastMile handles the boring 20% on every commit, every feature, every deploy.",
    url: "https://lastmile.sh",
    siteName: "LastMile",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LastMile - Ship AI-Generated Code to Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LastMile - Ship AI-Generated Code to Production",
    description: "AI writes 80% of your app in a day. LastMile handles the boring 20% on every commit, every feature, every deploy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} dark`}
    >
      <body className="min-h-screen bg-surface text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
INTENTIONAL SYNTAX ERROR {{{
