import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const title = "Franchesco Calonzo — Software Engineer";
const description =
  "Software Engineer building reliable web applications for fintech and telecom. Currently supporting nationwide infrastructure platforms at Bell Canada.";

export const metadata: Metadata = {
  // Placeholder domain — replace with your deployed URL
  metadataBase: new URL("https://franchesco-calonzo.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/avatars/me.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/avatars/me.webp"],
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
      suppressHydrationWarning
      data-theme="dark"
      className={`${GeistSans.variable} dark`}
    >
      <body className="font-inter antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'&&t!=='ivory')t='dark';document.documentElement.dataset.theme=t;document.documentElement.classList.toggle('dark',t==='dark');}catch(e){document.documentElement.dataset.theme='dark';document.documentElement.classList.add('dark');}})();`}
        </Script>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
