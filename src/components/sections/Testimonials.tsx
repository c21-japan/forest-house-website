import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: '田中 様',
      location: '東京都渋谷区',
      property: '築15年・2LDK',
      price: '3,200万円',
      content: '査定から売却まで、とても丁寧に対応していただきました。他の業者では2,800万円と言われていたのに、フォレストハウスさんでは3,200万円で売却できました。',
      rating: 5
    },
    {
      name: '佐藤 様',
      location: '東京都新宿区',
      property: '築8年・3LDK',
      price: '4,500万円',
      content: '相続で急いで売却する必要がありましたが、1週間で売却が完了しました。手続きもすべて代行していただき、とても助かりました。',
      rating: 5
    },
    {
      name: '山田 様',
      location: '東京都世田谷区',
      property: '築20年・1LDK',
      price: '2,800万円',
      content: '築年数が古くて心配でしたが、立地の良さを活かした提案で予想以上の価格で売却できました。スタッフの方が親切で安心できました。',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            お客様の声
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            実際にフォレストハウスをご利用いただいたお客様からの
            貴重なご感想をご紹介いたします。
          </p>
        </div>

        {/* お客様の声グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100"
            >
              {/* 評価星 */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* お客様の声 */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                「{testimonial.content}」
              </blockquote>

              {/* お客様情報 */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      {testimonial.property}
                    </div>
                    <div className="font-semibold text-forest-600">
                      {testimonial.price}で売却
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 追加の実績表示 */}
        <div className="mt-16 text-center">
          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              500件以上の売却実績
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              お客様の満足度98%を誇る実績があります
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="bg-white px-4 py-2 rounded-full">渋谷区 120件</span>
              <span className="bg-white px-4 py-2 rounded-full">新宿区 95件</span>
              <span className="bg-white px-4 py-2 rounded-full">世田谷区 88件</span>
              <span className="bg-white px-4 py-2 rounded-full">港区 76件</span>
              <span className="bg-white px-4 py-2 rounded-full">その他 121件</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
