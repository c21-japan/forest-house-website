'use client';

import React, { useState } from 'react';

const AreaCoverage = () => {
  const [activeArea, setActiveArea] = useState('nara');

  const naraAreas = {
    priority: [
      { name: '奈良市', count: 87 },
      { name: '香芝市', count: 65 },
      { name: '生駒市', count: 58 },
      { name: '橿原市', count: 52 },
      { name: '大和郡山市', count: 43 }
    ],
    all: [
      '奈良市 / 天理市 / 香芝市 / 大和高田市',
      '橿原市 / 葛城市 / 大和郡山市 / 桜井市',
      '生駒市 / 生駒郡三郷町 / 生駒郡安堵町',
      '生駒郡平群町 / 生駒郡斑鳩町 / 磯城郡田原本町',
      '磯城郡三宅町 / 磯城郡川西町 / 北葛城郡広陵町',
      '北葛城郡王寺町 / 北葛城郡河合町 / 北葛城郡上牧町'
    ]
  };

  const osakaAreas = {
    priority: [
      { name: '堺市', count: 92 },
      { name: '八尾市', count: 48 },
      { name: '東大阪市', count: 45 },
      { name: '藤井寺市', count: 38 },
      { name: '松原市', count: 35 }
    ],
    all: [
      '【堺市】堺区 / 中区 / 東区 / 西区 / 南区 / 北区 / 美原区',
      '岸和田市 / 吹田市 / 貝塚市 / 茨木市 / 富田林市',
      '松原市 / 箕面市 / 門真市 / 藤井寺市 / 四條畷市',
      '泉大津市 / 守口市 / 八尾市 / 寝屋川市 / 大東市',
      '柏原市 / 摂津市 / 交野市 / 池田市 / 高槻市',
      '枚方市 / 泉佐野市 / 河内長野市 / 和泉市 / 羽曳野市',
      '高石市 / 泉南市 / 大阪狭山市'
    ]
  };

  return (
    <section className="complete-area-coverage py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            奈良県21市町・大阪府35市に完全対応
          </h2>
        </div>

        {/* エリアタブ */}
        <div className="area-tabs flex justify-center mb-12">
          <button 
            className={`tab px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
              activeArea === 'nara' 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-orange-100'
            }`}
            onClick={() => setActiveArea('nara')}
          >
            奈良県（21エリア）
          </button>
          <button 
            className={`tab px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ml-4 ${
              activeArea === 'osaka' 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-orange-100'
            }`}
            onClick={() => setActiveArea('osaka')}
          >
            大阪府（35エリア）
          </button>
        </div>

        {/* 奈良県エリア */}
        {activeArea === 'nara' && (
          <div className="area-content nara">
            <div className="area-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="priority-areas">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔥 特に実績豊富なエリア</h3>
                <div className="tags space-y-4">
                  {naraAreas.priority.map((area, index) => (
                    <div key={index} className="hot bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-4 text-center">
                      <span className="text-xl font-bold text-gray-900">{area.name}</span>
                      <span className="block text-orange-500 font-bold text-lg">（{area.count}件）</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="all-areas">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">全対応エリア</h3>
                <div className="area-list bg-white rounded-2xl p-6 shadow-lg">
                  {naraAreas.all.map((areaGroup, index) => (
                    <p key={index} className="text-gray-700 mb-3 leading-relaxed">
                      {areaGroup}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 大阪府エリア */}
        {activeArea === 'osaka' && (
          <div className="area-content osaka">
            <div className="area-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="priority-areas">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔥 特に実績豊富なエリア</h3>
                <div className="tags space-y-4">
                  {osakaAreas.priority.map((area, index) => (
                    <div key={index} className="hot bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-4 text-center">
                      <span className="text-xl font-bold text-gray-900">{area.name}</span>
                      <span className="block text-orange-500 font-bold text-lg">（{area.count}件）</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="all-areas">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">全対応エリア</h3>
                <div className="area-list bg-white rounded-2xl p-6 shadow-lg">
                  {osakaAreas.all.map((areaGroup, index) => (
                    <p key={index} className="text-gray-700 mb-3 leading-relaxed">
                      {areaGroup}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* エリア別の強み */}
        <div className="area-advantages mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            全エリアで発揮する3つの強み
          </h3>
          <div className="advantages grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="advantage bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="icon text-6xl block mb-4">🚗</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">即日訪問査定</h4>
              <p className="text-gray-600">全エリア車で60分以内</p>
            </div>
            <div className="advantage bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="icon text-6xl block mb-4">🔨</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">自社職人が対応</h4>
              <p className="text-gray-600">全エリアでリフォーム可能</p>
            </div>
            <div className="advantage bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="icon text-6xl block mb-4">📱</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">地域担当者制</h4>
              <p className="text-gray-600">エリア専門スタッフが対応</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;
