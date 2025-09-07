import React from 'react';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-forest-50 to-warm-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側：コンテンツ */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              分譲マンション売却の
              <span className="text-forest-500 block">専門店</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              フォレストハウスは、分譲マンションの売却に特化した専門店です。
              豊富な経験と実績で、お客様の大切な資産を適正価格で売却いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="text-lg px-8 py-4">
                無料査定を申し込む
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                お問い合わせ
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-forest-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                無料査定
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-forest-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                最短1週間で売却
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-forest-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                手数料無料
              </div>
            </div>
          </div>

          {/* 右側：画像・ビジュアル */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* メイン画像のプレースホルダー */}
              <div className="bg-gradient-to-br from-forest-100 to-forest-200 rounded-3xl p-8 shadow-strong">
                <div className="bg-white rounded-2xl p-6 shadow-medium">
                  <div className="space-y-4">
                    <div className="h-4 bg-forest-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-forest-200 rounded w-2/3"></div>
                  </div>
                  <div className="mt-6 p-4 bg-forest-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-forest-600 mb-2">査定価格</div>
                      <div className="text-3xl font-bold text-gray-900">3,500万円</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-trust-400 rounded-full opacity-20"></div>
            </div>
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
