import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khanh-neo-portfolio.tranquockhanh1782003.chatgpt.site"),
  title: "Trần Quốc Khánh — Software Engineer",
  description: "Portfolio của Trần Quốc Khánh — Software Engineer làm việc với ứng dụng web, POS, CRM và ERP.",
  openGraph: {
    title: "Trần Quốc Khánh — Software Engineer",
    description: "Tôi thích hiểu kỹ một quy trình, tìm đúng điểm vướng và biến nó thành phần mềm dễ dùng, dễ tiếp tục phát triển.",
    images: [{ url: "/og.png", width: 1736, height: 907, alt: "Software Engineer Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Quốc Khánh — Software Engineer",
    description: "Tôi thích hiểu kỹ một quy trình, tìm đúng điểm vướng và biến nó thành phần mềm dễ dùng, dễ tiếp tục phát triển.",
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
