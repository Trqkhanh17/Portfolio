import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khanh-neo-portfolio.tranquockhanh1782003.chatgpt.site"),
  title: "Trần Quốc Khánh — Software Engineer",
  description: "Portfolio của Trần Quốc Khánh, Software Engineer tập trung vào ứng dụng web và hệ thống doanh nghiệp.",
  openGraph: {
    title: "Trần Quốc Khánh — Software Engineer",
    description: "Xây dựng phần mềm hiệu quả và giải quyết bài toán thực tế.",
    images: [{ url: "/og.png", width: 1736, height: 907, alt: "Software Engineer Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Quốc Khánh — Software Engineer",
    description: "Xây dựng phần mềm hiệu quả và giải quyết bài toán thực tế.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
