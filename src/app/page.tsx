import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ReformAdvantage from '@/components/sections/ReformAdvantage';
import FlyerMansionSpecial from '@/components/sections/FlyerMansionSpecial';
import AreaCoverage from '@/components/sections/AreaCoverage';
import BuyerTestimonials from '@/components/sections/BuyerTestimonials';
import UltimateOffer from '@/components/sections/UltimateOffer';
import FinalAction from '@/components/sections/FinalAction';
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
        <Hero />
        <ReformAdvantage />
        <FlyerMansionSpecial />
        <AreaCoverage />
        <BuyerTestimonials />
        <UltimateOffer />
        <FinalAction />
      </main>
      <Footer />
    </div>
  );
}
