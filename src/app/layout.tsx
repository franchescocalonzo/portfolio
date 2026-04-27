import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Franchesco Calonzo",
  description:
    "Franchesco Calonzo — Software Engineer. Building seamless web experiences with a focus on frontend development.",
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
