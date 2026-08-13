import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "林知远 — 个人主页",
  description: "林知远的个人主页：设计、经历、兴趣与生活片段。",
  openGraph: {
    title: "林知远 — 个人主页",
    description: "设计 · 经历 · 兴趣 · 日常",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "林知远个人主页分享封面" }],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "林知远 — 个人主页",
    description: "设计 · 经历 · 兴趣 · 日常",
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
