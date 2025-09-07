import React from 'react';

const ReformAdvantage = () => {
  return (
    <section className="reform-advantage py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">🔨</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="block text-orange-500 text-2xl lg:text-3xl mb-2">なぜフォレストハウスなら</span>
            <span className="block">最高値で売れるのか？</span>
          </h2>
        </div>

        {/* 他社との決定的な違い */}
        <div className="comparison-visual mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 一般的な不動産会社 */}
            <div className="other-company bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">❌ 一般的な不動産会社</h3>
              <div className="flow space-y-4">
                <div className="step bad bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                  <p className="font-semibold text-gray-800">古いまま売り出し</p>
                  <span className="result text-red-600 font-bold">見た目が悪い</span>
                </div>
                <div className="arrow text-center text-2xl text-red-500">↓</div>
                <div className="step bad bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                  <p className="font-semibold text-gray-800">内覧者から不安の声</p>
                  <span className="result text-red-600 font-bold">「リフォーム代が心配...」</span>
                </div>
                <div className="arrow text-center text-2xl text-red-500">↓</div>
                <div className="step bad bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                  <p className="font-semibold text-gray-800">大幅値下げ要求</p>
                  <span className="result text-red-600 font-bold text-2xl">-500万円</span>
                </div>
              </div>
            </div>

            {/* VS */}
            <div className="vs flex items-center justify-center lg:hidden">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                VS
              </div>
            </div>

            {/* フォレストハウス */}
            <div className="forest-house bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">✅ フォレストハウス</h3>
              <div className="flow space-y-4">
                <div className="step good bg-green-50 rounded-xl p-4 border-l-4 border-green-400">
                  <p className="font-semibold text-gray-800">自社職人でリフォーム</p>
                  <span className="result text-green-600 font-bold">新築同様に！</span>
                </div>
                <div className="arrow text-center text-2xl text-green-500">↓</div>
                <div className="step good bg-green-50 rounded-xl p-4 border-l-4 border-green-400">
                  <p className="font-semibold text-gray-800">購入者大喜び</p>
                  <span className="result text-green-600 font-bold">「すぐ住める！」</span>
                </div>
                <div className="arrow text-center text-2xl text-green-500">↓</div>
                <div className="step good bg-green-50 rounded-xl p-4 border-l-4 border-green-400">
                  <p className="font-semibold text-gray-800">競争入札発生</p>
                  <span className="result text-green-600 font-bold text-2xl">+680万円</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 自社職人の詳細 */}
        <div className="craftsman-details">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🔨 自社職人チームの実力
          </h3>

          <div className="craftsman-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="craft-item bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🍳</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">キッチン</h4>
              <p className="text-gray-600 mb-4">最新システムキッチンに交換</p>
              <div className="price text-center">
                <span className="text-sm text-gray-500">通常150万円→</span>
                <span className="text-2xl font-bold text-green-600">60万円</span>
              </div>
            </div>

            <div className="craft-item bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-full h-48 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🛁</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">浴室</h4>
              <p className="text-gray-600 mb-4">ユニットバス完全リニューアル</p>
              <div className="price text-center">
                <span className="text-sm text-gray-500">通常120万円→</span>
                <span className="text-2xl font-bold text-green-600">50万円</span>
              </div>
            </div>

            <div className="craft-item bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🚽</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">トイレ</h4>
              <p className="text-gray-600 mb-4">最新ウォシュレット設置</p>
              <div className="price text-center">
                <span className="text-sm text-gray-500">通常40万円→</span>
                <span className="text-2xl font-bold text-green-600">15万円</span>
              </div>
            </div>

            <div className="craft-item bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🏠</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">床・壁紙</h4>
              <p className="text-gray-600 mb-4">全面張り替えで新築同様</p>
              <div className="price text-center">
                <span className="text-sm text-gray-500">通常80万円→</span>
                <span className="text-2xl font-bold text-green-600">30万円</span>
              </div>
            </div>
          </div>

          <div className="total-saving bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 text-center">
            <p className="saving-text text-2xl lg:text-3xl font-bold text-gray-800">
              外注なら<span className="before text-red-500 line-through text-3xl lg:text-4xl">390万円</span>のリフォームが
              <br />
              <span className="after text-green-600 text-4xl lg:text-5xl">155万円</span>で完了！
              <br />
              <span className="profit text-orange-500 text-3xl lg:text-4xl">235万円もお得！</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReformAdvantage;
