import React from 'react';
import { Button } from '@/components/ui/Button';

const UltimateOffer = () => {
  return (
    <section className="ultimate-offer py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="block text-red-500 text-2xl lg:text-3xl mb-2">期間限定</span>
            <span className="block">3つの約束</span>
          </h2>
        </div>

        {/* 3つの約束 */}
        <div className="promises grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="promise-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="promise-header text-center mb-6">
              <span className="icon text-6xl block mb-4">🏆</span>
              <h3 className="text-2xl font-bold text-gray-900">約束1：最高値保証</h3>
            </div>
            <div className="promise-content">
              <p className="text-lg text-gray-700 mb-4">他社査定より必ず高く査定</p>
              <div className="guarantee bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                <p className="text-gray-800 mb-2">もし他社の方が高ければ</p>
                <span className="highlight text-3xl font-bold text-green-600">その査定額+5%</span>
                <p className="text-gray-800 mt-2">を保証</p>
              </div>
            </div>
          </div>

          <div className="promise-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="promise-header text-center mb-6">
              <span className="icon text-6xl block mb-4">🔨</span>
              <h3 className="text-2xl font-bold text-gray-900">約束2：リフォーム無料</h3>
            </div>
            <div className="promise-content">
              <p className="text-lg text-gray-700 mb-4">水回り4点セット完全無料</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✅</span>
                  キッチン（60万円相当）
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✅</span>
                  浴室（50万円相当）
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✅</span>
                  トイレ（15万円相当）
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✅</span>
                  洗面台（15万円相当）
                </li>
              </ul>
              <div className="total-value bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 text-center">
                <span className="text-2xl font-bold text-orange-600">合計140万円分が0円</span>
              </div>
            </div>
          </div>

          <div className="promise-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="promise-header text-center mb-6">
              <span className="icon text-6xl block mb-4">⚡</span>
              <h3 className="text-2xl font-bold text-gray-900">約束3：スピード売却</h3>
            </div>
            <div className="promise-content">
              <p className="text-lg text-gray-700 mb-4">45日以内に売却</p>
              <div className="guarantee bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 text-center">
                <p className="text-gray-800 mb-2">売れなければ</p>
                <span className="highlight text-3xl font-bold text-blue-600">査定額の95%で買取</span>
              </div>
            </div>
          </div>
        </div>

        {/* 今すぐ行動する理由 */}
        <div className="urgency-reasons">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            ⚠️ なぜ今すぐ行動すべきか
          </h3>

          <div className="market-alert space-y-6 mb-12">
            <div className="alert-item bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-400">
              <div className="flex items-center">
                <span className="icon text-4xl mr-4">📉</span>
                <div className="content">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">2025年問題が迫っています</h4>
                  <p className="text-gray-700">団塊世代の大量売却で<strong className="text-red-500">価格暴落の危険</strong></p>
                </div>
              </div>
            </div>

            <div className="alert-item bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-400">
              <div className="flex items-center">
                <span className="icon text-4xl mr-4">🏗️</span>
                <div className="content">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">新築マンション供給過多</h4>
                  <p className="text-gray-700">中古マンション需要が<strong className="text-orange-500">急速に減少中</strong></p>
                </div>
              </div>
            </div>

            <div className="alert-item bg-white rounded-2xl p-6 shadow-lg border-l-4 border-yellow-400">
              <div className="flex items-center">
                <span className="icon text-4xl mr-4">📊</span>
                <div className="content">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">金利上昇の兆し</h4>
                  <p className="text-gray-700">購入者の<strong className="text-yellow-600">ローン審査が厳格化</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="final-push bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl p-8 text-center">
            <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
              今なら間に合います。<br />
              <strong className="text-red-600 text-2xl lg:text-3xl">あなたのマンションを最高値で売却する</strong><br />
              最後のチャンスかもしれません。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="primary" 
            size="lg" 
            className="text-xl px-12 py-6 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            今すぐ3つの約束で査定を申し込む
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UltimateOffer;
