import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import FlyerScript from "@/components/FlyerScript";
import FloatingCTA from "@/components/FloatingCTA";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500", "600", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "フォレストハウス - 分譲マンション売却専門店",
  description: "フォレストハウスは、分譲マンションの売却に特化した専門店です。豊富な経験と実績で、お客様の大切な資産を適正価格で売却いたします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
        {children}
        <FloatingCTA />
        <FlyerScript />
      </body>
    </html>
  );
}
