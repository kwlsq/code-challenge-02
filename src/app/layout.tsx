import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex's Portofolio",
  description: "Code Challenge 02 - Purwadhika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
