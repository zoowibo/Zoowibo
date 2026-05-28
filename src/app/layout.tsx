import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoowibo — Coming Soon",
  description:
    "Something extraordinary is being built. Be the first to know when Zoowibo launches.",
  openGraph: {
    title: "Zoowibo — Coming Soon",
    description: "Something extraordinary is being built. Sign up to get early access.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoowibo — Coming Soon",
    description: "Something extraordinary is being built. Sign up to get early access.",
  },
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}