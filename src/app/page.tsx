import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServiceCards from '@/components/sections/ServiceCards';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import AreaAccordion from '@/components/sections/AreaAccordion';
import StructuredData from '@/components/StructuredData';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "株式会社フォレスト",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "telephone": "0120-949-531",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "上中2-1",
    "addressLocality": "香芝市",
    "addressRegion": "奈良県",
    "postalCode": "639-0265",
    "addressCountry": "JP"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "奈良市"
    },
    {
      "@type": "City",
      "name": "香芝市"
    },
    {
      "@type": "City",
      "name": "生駒市"
    },
    {
      "@type": "City",
      "name": "堺市"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "22:00"
  },
  "description": "奈良県・大阪府南部で分譲マンション売却を専門に行う不動産会社。管理規約・修繕積立金・共用部の評価まで、分譲マンション特有の価値を正しく査定。",
  "priceRange": "¥1000000-¥50000000",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "JPY"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={structuredData} />
      <Header />
      <main>
        <HeroSection />
        
        <section className="py-20 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">なぜフォレストが選ばれるのか？</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-foreground mb-4">分譲専門の査定力</h3>
                <p className="text-muted">
                  管理組合の運営状況、長期修繕計画、修繕積立金の妥当性まで評価。
                  一般的な不動産会社では見落としがちな、分譲特有の価値を正確に査定します。
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-foreground mb-4">地域相場を完全把握</h3>
                <p className="text-muted">
                  奈良県・大阪府南部の取引データを独自分析。
                  類似物件の成約事例を開示し、査定価格の根拠を明確にご説明します。
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-foreground mb-4">売却プロセスの完全可視化</h3>
                <p className="text-muted">
                  査定から引き渡しまでの全工程を事前に開示。
                  各段階の所要日数、必要書類、費用の目安を明確化。不透明な部分を一切作りません。
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceCards />
        <StatsSection />
        <TestimonialSlider />
        <AreaAccordion />
        
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">まずはお気軽にご相談ください</h2>
              <p className="text-xl text-muted">
                9:00〜22:00 年末年始以外毎日営業
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <a href="tel:0120-949-531" className="btn btn-accent btn-lg">
                  📞 0120-949-531<br />
                  <span className="text-sm font-normal opacity-90">今すぐ電話で相談</span>
                </a>
                <a href="/contact" className="btn btn-primary btn-lg">
                  📝 無料査定を申込む<br />
                  <span className="text-sm font-normal opacity-90">最短60分で結果</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
