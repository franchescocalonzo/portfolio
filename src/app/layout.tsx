import type { Metadata } from "next";
import Script from "next/script";
import SiteMark from "@/components/SiteMark";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const title = "franchesco. — Software Engineer";
const description =
  "Building and improving production web applications for real businesses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://franchesco.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      className="dark"
    >
      <body className="font-sans antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'&&t!=='ivory')t='dark';document.documentElement.dataset.theme=t;document.documentElement.classList.toggle('dark',t==='dark');}catch(e){document.documentElement.dataset.theme='dark';document.documentElement.classList.add('dark');}})();`}
        </Script>
        <SiteMark />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
