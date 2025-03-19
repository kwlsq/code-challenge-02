import type { Metadata } from "next";
import "./globals.css";
import { ProjectProvider } from "@/context/projectContext";

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
      <ProjectProvider>
        <body>{children}</body>
      </ProjectProvider>
    </html>
  );
}
