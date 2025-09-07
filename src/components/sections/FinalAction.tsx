import React from 'react';
import { Button } from '@/components/ui/Button';

const FinalAction = () => {
  return (
    <section className="final-action py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* カウントダウン */}
        <div className="final-countdown text-center mb-12">
          <p className="text-xl text-gray-300 mb-4">チラシ配布特典終了まで</p>
          <div className="timer flex justify-center items-center space-x-4 text-4xl lg:text-6xl font-bold">
            <div className="bg-red-500 rounded-xl px-4 py-2">
              <span className="days text-white">6</span>
            </div>
            <span className="text-orange-400">日</span>
            <div className="bg-red-500 rounded-xl px-4 py-2">
              <span className="hours text-white">23</span>
            </div>
            <span className="text-orange-400">時間</span>
            <div className="bg-red-500 rounded-xl px-4 py-2">
              <span className="minutes text-white">59</span>
            </div>
            <span className="text-orange-400">分</span>
            <div className="bg-red-500 rounded-xl px-4 py-2">
              <span className="seconds text-white">47</span>
            </div>
            <span className="text-orange-400">秒</span>
          </div>
        </div>

        {/* 最終メッセージ */}
        <div className="final-message text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="block text-2xl lg:text-3xl text-gray-300 mb-2">このチラシが届いたということは</span>
            <span className="block text-4xl lg:text-6xl text-orange-400 mb-2">あなたのマンションに</span>
            <span className="block text-5xl lg:text-7xl text-yellow-400">購入希望者がいる</span>
            <span className="block text-2xl lg:text-3xl text-gray-300 mt-2">ということです</span>
          </h2>

          <p className="sub-message text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            実は、あなたのマンションを狙っている購入希望者から<br />
            「売り物件が出たら教えて欲しい」と依頼を受けています。
          </p>
        </div>

        {/* CTAボタン群 */}
        <div className="final-cta-group space-y-8 mb-12">
          <Button 
            variant="primary" 
            size="lg" 
            className="mega-cta-final w-full max-w-2xl mx-auto block text-2xl px-12 py-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <span className="block text-2xl lg:text-3xl">今すぐ無料査定を申し込む</span>
            <span className="block text-lg opacity-90">60秒で完了・完全無料</span>
            <span className="block text-sm bg-yellow-400 text-black px-4 py-1 rounded-full mt-2">チラシ限定特典付き（残り6日）</span>
          </Button>

          <div className="alternative-actions grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a href="tel:0120-XXX-XXX" className="phone-cta bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center">
                <span className="icon text-4xl mr-4">📞</span>
                <span className="text">
                  <span className="label block font-bold text-lg">今すぐ電話で相談</span>
                  <span className="number block text-2xl font-bold text-orange-500">0120-XXX-XXX</span>
                  <span className="time block text-sm text-gray-600">9:00-20:00 年中無休</span>
                </span>
              </div>
            </a>

            <a href="#" className="line-cta bg-green-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center">
                <span className="icon text-4xl mr-4">📱</span>
                <span className="text">
                  <span className="label block font-bold text-lg">LINEで気軽に相談</span>
                  <span className="id block text-2xl font-bold">@forest-house</span>
                  <span className="time block text-sm opacity-90">24時間受付中</span>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* 安心保証 */}
        <div className="final-guarantees grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="guarantee bg-white bg-opacity-10 rounded-xl p-4 text-center">
            <span className="icon text-3xl block mb-2">🔒</span>
            <p className="text-sm">個人情報厳守</p>
          </div>
          <div className="guarantee bg-white bg-opacity-10 rounded-xl p-4 text-center">
            <span className="icon text-3xl block mb-2">🚫</span>
            <p className="text-sm">しつこい営業なし</p>
          </div>
          <div className="guarantee bg-white bg-opacity-10 rounded-xl p-4 text-center">
            <span className="icon text-3xl block mb-2">💰</span>
            <p className="text-sm">査定・相談無料</p>
          </div>
          <div className="guarantee bg-white bg-opacity-10 rounded-xl p-4 text-center">
            <span className="icon text-3xl block mb-2">📝</span>
            <p className="text-sm">キャンセル自由</p>
          </div>
        </div>

        {/* 会社情報 */}
        <div className="company-info text-center text-gray-300">
          <h3 className="text-2xl font-bold text-white mb-4">フォレストハウス</h3>
          <p className="text-lg mb-2">奈良県知事免許(3)第XXXX号</p>
          <p className="text-lg mb-2">〒XXX-XXXX 奈良県北葛城郡広陵町笠287-1</p>
          <p className="text-lg">営業時間：9:00-20:00（年中無休）</p>
        </div>
      </div>
    </section>
  );
};

export default FinalAction;
