import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ReformAdvantage from '@/components/sections/ReformAdvantage';
import FlyerMansionSpecial from '@/components/sections/FlyerMansionSpecial';
import AreaCoverage from '@/components/sections/AreaCoverage';
import BuyerTestimonials from '@/components/sections/BuyerTestimonials';
import UltimateOffer from '@/components/sections/UltimateOffer';
import FinalAction from '@/components/sections/FinalAction';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
