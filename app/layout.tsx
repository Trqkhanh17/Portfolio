import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khanh-neo-portfolio.tranquockhanh1782003.chatgpt.site"),
  title: "Trần Quốc Khánh — Software Engineer",
  description: "Portfolio of Tran Quoc Khanh, a Full-Stack Software Engineer focused on Python, Django, React, TypeScript, ERP, e-commerce, POS, and CRM systems.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Trần Quốc Khánh — Software Engineer",
    description: "Full-Stack Software Engineer focused on Python/Django, React/TypeScript, and reliable business software.",
    images: [{ url: "/og.png", width: 1736, height: 907, alt: "Software Engineer Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Quốc Khánh — Software Engineer",
    description: "Full-Stack Software Engineer focused on Python/Django, React/TypeScript, and reliable business software.",
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
