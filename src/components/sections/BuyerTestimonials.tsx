import React from 'react';

const BuyerTestimonials = () => {
  return (
    <section className="buyer-testimonials py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="block text-2xl lg:text-3xl text-gray-600 mb-2">なぜフォレストハウスの物件は</span>
            <span className="block">即決で売れるのか？</span>
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-orange-500">購入された方の本音</h3>
        </div>

        {/* 購入者の声 */}
        <div className="buyer-voices grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="voice-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="buyer-info flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👨‍👩‍👧</span>
              </div>
              <div className="details">
                <h4 className="text-xl font-bold text-gray-900">T.M様（30代ご夫婦）</h4>
                <p className="text-gray-600">奈良市で購入</p>
              </div>
            </div>
            <div className="message">
              <p className="quote text-lg text-gray-700 leading-relaxed mb-4">
                &quot;他社の物件は<strong className="text-red-500">リフォーム代500万円</strong>と言われ諦めていました。
                フォレストハウスさんの物件は<strong className="text-green-500">リフォーム済みで即入居可能</strong>！
                しかも価格は他社と変わらず。即決しました！&quot;
              </p>
            </div>
            <div className="decision-point bg-green-50 rounded-xl p-4 border-l-4 border-green-400">
              <span className="text-green-600 font-bold">💡 決め手：リフォーム済みなのに価格が同じ</span>
            </div>
          </div>

          <div className="voice-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="buyer-info flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <div className="details">
                <h4 className="text-xl font-bold text-gray-900">S.K様（40代ご家族）</h4>
                <p className="text-gray-600">堺市で購入</p>
              </div>
            </div>
            <div className="message">
              <p className="quote text-lg text-gray-700 leading-relaxed mb-4">
                &quot;小さい子供がいるので、<strong className="text-blue-500">すぐに住める家</strong>を探していました。
                水回りが新品で、壁紙も張り替え済み。
                <strong className="text-green-500">新築みたいなのに中古価格</strong>で最高です！&quot;
              </p>
            </div>
            <div className="decision-point bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
              <span className="text-blue-600 font-bold">💡 決め手：子育て世代に優しい即入居可能物件</span>
            </div>
          </div>
        </div>

        {/* 購入者が選ぶ理由 */}
        <div className="buyer-reasons">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            購入者が即決する5つの理由
          </h3>
          <div className="reasons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="reason bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="number bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</span>
              <p className="font-semibold text-gray-800">リフォーム代0円で即入居</p>
            </div>
            <div className="reason bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="number bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</span>
              <p className="font-semibold text-gray-800">自社職人施工で安心品質</p>
            </div>
            <div className="reason bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="number bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</span>
              <p className="font-semibold text-gray-800">他社より総額が500万円安い</p>
            </div>
            <div className="reason bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="number bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</span>
              <p className="font-semibold text-gray-800">内覧時の印象が圧倒的に良い</p>
            </div>
            <div className="reason bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="number bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">5</span>
              <p className="font-semibold text-gray-800">アフターフォローも自社で完結</p>
            </div>
          </div>
        </div>

        {/* 追加の成功事例 */}
        <div className="additional-success mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            実際の成功事例
          </h3>
          <div className="success-timeline bg-white rounded-2xl p-8 shadow-lg">
            <div className="timeline grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="timeline-item text-center">
                <div className="date bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mx-auto mb-4">Day 1</div>
                <p className="font-semibold text-gray-800">査定申し込み</p>
              </div>
              <div className="timeline-item text-center">
                <div className="date bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mx-auto mb-4">Day 3</div>
                <p className="font-semibold text-gray-800">リフォーム開始</p>
              </div>
              <div className="timeline-item text-center">
                <div className="date bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mx-auto mb-4">Day 10</div>
                <p className="font-semibold text-gray-800">売り出し開始</p>
              </div>
              <div className="timeline-item text-center">
                <div className="date bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mx-auto mb-4">Day 15</div>
                <p className="font-semibold text-gray-800">成約！+680万円</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerTestimonials;
