import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Franchesco Calonzo",
  description: "Franchesco Calonzo is a software engineer ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-inter"}>{children}</body>
    </html>
  );
}
