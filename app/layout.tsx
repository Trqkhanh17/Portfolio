import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.khanhtranquoc44.workers.dev"),
  title: "K! — Creative Developer",
  description: "Independent creative developer crafting loud, useful digital experiences.",
  openGraph: {
    title: "K! — Creative Developer",
    description: "Digital things that hit.",
    images: [{ url: "/og.png", width: 1736, height: 907, alt: "Digital things that hit." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "K! — Creative Developer",
    description: "Digital things that hit.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
