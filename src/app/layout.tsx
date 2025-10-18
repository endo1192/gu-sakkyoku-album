import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "群馬大学作曲部アルバム紹介サイト",
  description: "群馬大学作曲部のオリジナルアルバムの歌詞掲載などを行っています",
  openGraph: {
    title: '群馬大学作曲部アルバム紹介サイト',
    description: '群馬大学作曲部のオリジナルアルバムの歌詞掲載などを行っています',
    url: '<https://gu-sakkyoku-album.pages.dev/>',
    siteName: '群馬大学作曲部アルバム紹介サイト',
    images: [
      {
        url: '/sakkyokukyara.png',
        width: 1280,
        height: 1280,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
