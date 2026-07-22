import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khanh-neo-portfolio.tranquockhanh1782003.chatgpt.site"),
  title: "Trần Quốc Khánh — Software Engineer",
  description: "Portfolio of Tran Quoc Khanh — a Software Engineer building web applications and business systems.",
  openGraph: {
    title: "Trần Quốc Khánh — Software Engineer",
    description: "A Software Engineer focused on understanding real workflows and turning them into clear, reliable software.",
    images: [{ url: "/og.png", width: 1736, height: 907, alt: "Software Engineer Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Quốc Khánh — Software Engineer",
    description: "A Software Engineer focused on understanding real workflows and turning them into clear, reliable software.",
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
