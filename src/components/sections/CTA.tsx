import React from 'react';
import { Button } from '@/components/ui/Button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-500 to-forest-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            まずは無料査定から始めませんか？
          </h2>
          <p className="text-xl text-forest-100 mb-8 max-w-3xl mx-auto">
            お客様の分譲マンションの価値を正確に査定し、
            最適な売却プランをご提案いたします。
          </p>

          {/* 特徴 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                最短1週間で売却
              </h3>
              <p className="text-forest-100 text-sm">
                急いで売却したいお客様にも対応
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                手数料無料
              </h3>
              <p className="text-forest-100 text-sm">
                査定・相談はすべて無料でご提供
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                500件の実績
              </h3>
              <p className="text-forest-100 text-sm">
                豊富な経験でお客様をサポート
              </p>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-forest-600 hover:bg-forest-50"
            >
              無料査定を申し込む
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-forest-600"
            >
              お電話でのお問い合わせ
            </Button>
          </div>

          {/* 電話番号 */}
          <div className="mt-8">
            <p className="text-forest-100 mb-2">お急ぎの方はお電話で</p>
            <a 
              href="tel:03-1234-5678" 
              className="text-3xl font-bold text-white hover:text-forest-100 transition-colors duration-200"
            >
              03-1234-5678
            </a>
            <p className="text-forest-100 text-sm mt-2">
              平日 9:00-18:00 / 土曜 9:00-17:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

