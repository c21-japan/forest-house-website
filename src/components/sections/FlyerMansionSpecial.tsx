import React from 'react';
import { Button } from '@/components/ui/Button';

const FlyerMansionSpecial = () => {
  return (
    <section className="flyer-mansion-special py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="block text-orange-500 text-2xl lg:text-3xl mb-2">📮 チラシを受け取った</span>
            <span className="block">このマンションの皆様だけの特典</span>
          </h2>
        </div>

        {/* マンション別実績 */}
        <div className="mansion-results mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            同じマンションでの売却実績
          </h3>

          <div className="result-cards grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="result-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="room text-2xl font-bold text-gray-900 mb-2">503号室（3LDK）</div>
              <div className="period text-gray-600 mb-4">2024年10月売却</div>
              <div className="prices flex items-center justify-between mb-4">
                <span className="other text-lg text-gray-500">他社査定：2,280万円</span>
                <span className="arrow text-2xl text-orange-500">→</span>
                <span className="forest text-xl font-bold text-green-600">成約：2,980万円</span>
              </div>
              <div className="profit text-4xl font-bold text-orange-500 text-center">+700万円！</div>
            </div>

            <div className="result-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="room text-2xl font-bold text-gray-900 mb-2">802号室（2LDK）</div>
              <div className="period text-gray-600 mb-4">2024年8月売却</div>
              <div className="prices flex items-center justify-between mb-4">
                <span className="other text-lg text-gray-500">他社査定：1,980万円</span>
                <span className="arrow text-2xl text-orange-500">→</span>
                <span className="forest text-xl font-bold text-green-600">成約：2,450万円</span>
              </div>
              <div className="profit text-4xl font-bold text-orange-500 text-center">+470万円！</div>
            </div>
          </div>

          <div className="why-high bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">なぜこのマンションが高く売れるのか？</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-lg">
                <span className="text-green-500 mr-3">✅</span>
                購入希望者リストに<strong className="text-orange-500">23名</strong>が登録済み
              </li>
              <li className="flex items-center text-lg">
                <span className="text-green-500 mr-3">✅</span>
                駅徒歩圏内＋買い物便利で人気エリア
              </li>
              <li className="flex items-center text-lg">
                <span className="text-green-500 mr-3">✅</span>
                管理状態良好で資産価値が高い
              </li>
              <li className="flex items-center text-lg">
                <span className="text-green-500 mr-3">✅</span>
                学区が良く、ファミリー層に大人気
              </li>
            </ul>
          </div>
        </div>

        {/* 限定オファー */}
        <div className="exclusive-offer bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8">
          <div className="offer-header text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">今だけ！マンション限定特典</h3>
            <div className="deadline bg-red-500 text-white px-6 py-2 rounded-full inline-block font-bold">
              チラシ配布から7日間限定
            </div>
          </div>

          <div className="offer-content grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="offer-item bg-white rounded-2xl p-6 text-center shadow-lg">
              <span className="number bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">特別査定価格保証</h4>
              <p className="text-gray-600">通常査定より<strong className="text-orange-500">5%UP保証</strong></p>
            </div>

            <div className="offer-item bg-white rounded-2xl p-6 text-center shadow-lg">
              <span className="number bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">リフォーム費用0円</h4>
              <p className="text-gray-600">水回り4点セット<strong className="text-orange-500">完全無料</strong></p>
            </div>

            <div className="offer-item bg-white rounded-2xl p-6 text-center shadow-lg">
              <span className="number bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">即現金化オプション</h4>
              <p className="text-gray-600">最短7日で<strong className="text-orange-500">現金買取可能</strong></p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="primary" 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              限定特典で査定を申し込む
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlyerMansionSpecial;
