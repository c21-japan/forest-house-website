import React from 'react';
import { Button } from '@/components/ui/Button';

const About = () => {
  const stats = [
    { number: '500+', label: '売却実績' },
    { number: '15年', label: '業界経験' },
    { number: '98%', label: 'お客様満足度' },
    { number: '1週間', label: '最短売却期間' }
  ];

  const features = [
    {
      title: '豊富な経験と実績',
      description: '15年間で500件以上の分譲マンション売却を手がけ、お客様に信頼されています。',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '専門知識とノウハウ',
      description: '分譲マンションに特化した専門知識で、適正価格での売却を実現します。',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'お客様第一主義',
      description: 'お客様の立場に立った提案と、丁寧なサポートで安心してご利用いただけます。',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左側：コンテンツ */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              フォレストハウスについて
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              フォレストハウスは、分譲マンション売却に特化した専門店として、
              2008年の創業以来、お客様の大切な資産を適正価格で売却することを使命としてきました。
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              豊富な経験と専門知識を活かし、お客様一人ひとりのニーズに合わせた
              最適な売却プランをご提案いたします。
            </p>

            {/* 特徴 */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center text-forest-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" className="text-lg px-8 py-4">
              会社概要を詳しく見る
            </Button>
          </div>

          {/* 右側：統計とビジュアル */}
          <div className="relative">
            {/* 統計カード */}
            <div className="bg-white rounded-2xl p-8 shadow-strong">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                実績データ
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-forest-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 装飾要素 */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-trust-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
