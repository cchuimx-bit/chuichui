import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "吹吹—个人主页",
  description: "吹吹的个人主页：设计、经历、兴趣与生活片段。",
  openGraph: {
    title: "Welcome to My Little World",
    description: "你呢 你会怎样度过今天？",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Welcome to My Little World 复古热带分享封面" }],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to My Little World",
    description: "你呢 你会怎样度过今天？",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
