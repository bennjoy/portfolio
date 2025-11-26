import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "worra",
  description: "worra design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}