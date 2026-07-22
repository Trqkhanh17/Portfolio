import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khanh-neo-portfolio.tranquockhanh1782003.chatgpt.site"),
  title: "Software Engineer — Portfolio",
  description: "Software engineer portfolio featuring experience, technical skills and selected projects.",
  openGraph: {
    title: "Software Engineer — Portfolio",
    description: "Building software that works.",
    images: [{ url: "/og.png", width: 1736, height: 907, alt: "Software Engineer Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer — Portfolio",
    description: "Building software that works.",
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
