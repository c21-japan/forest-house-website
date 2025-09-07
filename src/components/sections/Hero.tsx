import React from 'react';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="hero-flyer-connection relative bg-gradient-to-br from-forest-50 to-warm-50">
      {/* チラシ連動メッセージ */}
      <div className="flyer-banner bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-4 text-center font-bold text-lg sticky top-0 z-50 animate-pulse">
        📮 このチラシが入っていたマンションの皆様へ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* メインメッセージ */}
          <h1 className="main-message text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            <span className="block text-2xl lg:text-3xl text-gray-600 mb-4">あなたのマンションが</span>
            <span className="block text-5xl lg:text-7xl text-forest-500 mb-4">今、一番高く売れる理由</span>
            <span className="block text-2xl lg:text-3xl text-gray-700">があります</span>
          </h1>

          {/* 独自の強みを即座にアピール */}
          <div className="unique-strengths flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <div className="strength-badge bg-white rounded-2xl p-6 shadow-lg border-2 border-forest-200 text-center">
              <span className="icon text-4xl block mb-2">🔨</span>
              <span className="text font-semibold text-gray-800">自社職人による<br />リフォーム済み物件</span>
            </div>
            <div className="strength-badge bg-white rounded-2xl p-6 shadow-lg border-2 border-forest-200 text-center">
              <span className="icon text-4xl block mb-2">💰</span>
              <span className="text font-semibold text-gray-800">購入者の<br />リフォーム代不要</span>
            </div>
            <div className="strength-badge bg-white rounded-2xl p-6 shadow-lg border-2 border-forest-200 text-center">
              <span className="icon text-4xl block mb-2">⚡</span>
              <span className="text font-semibold text-gray-800">だから<br />即決率92%</span>
            </div>
          </div>

          {/* インパクトのある実績 */}
          <div className="impact-result bg-gradient-to-r from-forest-100 to-warm-100 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <p className="result-text text-2xl lg:text-3xl font-bold text-gray-800">
              同じマンションの〇〇号室
              <span className="price-highlight text-4xl lg:text-5xl text-orange-500 block mt-2">
                相場より680万円高く
              </span>
              <span className="text-forest-600">売却成功！</span>
            </p>
          </div>

          {/* 2段階CTA */}
          <div className="cta-container space-y-4 mb-8">
            <Button 
              variant="primary" 
              size="lg" 
              className="mega-cta text-xl px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="block">今すぐ無料査定を申し込む</span>
              <span className="block text-sm font-normal opacity-90">このマンション限定・特別査定実施中</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-forest-500 text-forest-500 hover:bg-forest-500 hover:text-white"
            >
              まずは同じマンションの売却事例を見る
            </Button>
          </div>

          {/* 対応エリア表示 */}
          <div className="area-coverage">
            <p className="text-lg text-gray-600 font-semibold">
              奈良県21市町・大阪府35市対応
            </p>
          </div>
        </div>
      </div>

      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-forest-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-warm-200 rounded-full opacity-30"></div>
      </div>
    </section>
  );
};

export default Hero;

