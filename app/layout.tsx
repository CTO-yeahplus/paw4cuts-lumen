import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "견생네컷 x LUMEN",
  description: "하이엔드 펫 라이프스타일",

  // 🌟 카카오톡, 페이스북, 슬랙 링크 공유 시 뜨는 썸네일 (Open Graph)
  openGraph: {
    title: "견생네컷 x LUMEN ",
    description: "하이엔드 펫 라이프스타일",
    url: 'https://paw4cuts-lumen.vercel.app/', // 나중에 실제 도메인으로 교체
    siteName: '견생네컷',
    images: [
      {
        url: '/images/icon_cover.png', // 대표님이 만드신 OG 이미지!
        width: 1200,
        height: 630,
        alt: '견생네컷 Official',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 🍏 브라우저 최상단에 스냅과 스무스 스크롤을 네이티브로 강제 적용
    <html lang="ko" className="snap-y snap-mandatory scroll-smooth">
      <body className={inter.className}>
        
        {/* 🍏 JS 스크롤 엔진은 CSS 스냅과 충돌하므로 제거/주석 처리 */}
        {/* <SmoothScroller /> */}
        
        {/* 모든 페이지에서 떠 있도록 Layout 최상단에 배치 */}
        <FloatingNav />
        
        {children}
      </body>
    </html>
  );
}