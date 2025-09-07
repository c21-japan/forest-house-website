import React from 'react';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      <div className="container py-20 lg:py-32">
        <div className="text-center space-y-12">
          {/* メインメッセージ */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-balance">
              <span className="block text-2xl lg:text-3xl text-muted mb-4 font-medium">
                奈良・大阪の分譲マンション売却を
              </span>
              <span className="block gradient-text text-5xl lg:text-7xl font-extrabold mb-4">
                専門サポート
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted max-w-4xl mx-auto leading-relaxed">
              管理規約・修繕積立金・共用部の評価まで、分譲マンション特有の価値を正しく査定。地域相場データに基づく適正価格で、透明性の高い売却をお約束します。
            </p>
          </div>

          {/* 信頼スニペット */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-emerald-500">✓</span>
              <span className="text-sm font-medium text-foreground">宅建業免許 奈良（2）4366</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-emerald-500">✓</span>
              <span className="text-sm font-medium text-foreground">全日本不動産協会加盟</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-emerald-500">✓</span>
              <span className="text-sm font-medium text-foreground">査定・相談無料</span>
            </div>
          </div>

          {/* 当社が選ばれる理由 */}
          <div className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">フォレストが選ばれる3つの理由</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card hover-lift p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">分譲マンション専門の査定力</h3>
                <p className="text-muted text-sm leading-relaxed">
                  管理組合の運営状況、修繕積立金の妥当性、長期修繕計画の進捗などを総合的に評価。一般的な不動産会社では見落としがちな、分譲特有の価値を正確に査定します。
                </p>
              </div>
              <div className="card hover-lift p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex-center mx-auto mb-4">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">地域相場に基づく透明な価格提示</h3>
                <p className="text-muted text-sm leading-relaxed">
                  奈良県・大阪府南部の取引データを独自分析。類似物件の成約事例を開示し、査定価格の根拠を明確にご説明。納得いただける価格設定を行います。
                </p>
              </div>
              <div className="card hover-lift p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">売却プロセスの完全可視化</h3>
                <p className="text-muted text-sm leading-relaxed">
                  査定から引き渡しまでの全工程を事前に開示。各段階の所要日数、必要書類、費用の目安を明確化。不透明な部分を一切作りません。
                </p>
              </div>
            </div>
          </div>

          {/* 実績ダイジェスト */}
          <div className="card-elevated bg-gradient-to-r from-emerald-50 to-teal-50 p-8 max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">売却実績（2024年1月〜10月）</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">47件</div>
                <div className="text-muted">成約件数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">62日</div>
                <div className="text-muted">平均売却期間</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98.3%</div>
                <div className="text-muted">査定価格達成率</div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm text-muted">
                ※上記は2024年1月〜10月の当社実績です<br />
                ※個別の物件により結果は異なります
              </p>
            </div>
          </div>

          {/* 2段階CTA */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="space-y-4">
              <button className="mega-cta-final w-full max-w-md mx-auto block">
                <span className="block font-bold">今すぐ無料査定を申し込む</span>
                <span className="block text-sm font-normal opacity-90 mt-1">
                  最短60分で査定結果をお伝えします
                </span>
              </button>
              <button className="btn btn-outline btn-lg">
                まずは相談する
              </button>
            </div>
            <p className="text-muted">
              お電話でのご相談：<a href="tel:0120-949-531" className="text-primary font-semibold">0120-949-531</a>（9:00〜22:00）
            </p>
          </div>

          {/* 対応エリア表示 */}
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-lg text-muted font-medium">
              奈良県21市町・大阪府35市対応
            </p>
          </div>
        </div>
      </div>

      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default Hero;

