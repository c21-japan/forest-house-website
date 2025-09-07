import React from 'react';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* チラシ連動メッセージ */}
      <div className="flyer-banner">
        📮 このチラシが入っていたマンションの皆様へ
      </div>

      <div className="container py-20 lg:py-32">
        <div className="text-center space-y-12">
          {/* メインメッセージ */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-balance">
              <span className="block text-2xl lg:text-3xl text-muted mb-4 font-medium">
                あなたのマンションが
              </span>
              <span className="block gradient-text text-5xl lg:text-7xl font-extrabold mb-4">
                今、一番高く売れる理由
              </span>
              <span className="block text-2xl lg:text-3xl text-foreground font-semibold">
                があります
              </span>
            </h1>
          </div>

          {/* 独自の強みを即座にアピール */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="card hover-lift p-6 text-center group">
              <div className="text-5xl mb-4 group-hover:animate-float">🔨</div>
              <h3 className="font-semibold text-foreground mb-2">自社職人による</h3>
              <p className="text-muted">リフォーム済み物件</p>
            </div>
            <div className="card hover-lift p-6 text-center group">
              <div className="text-5xl mb-4 group-hover:animate-float">💰</div>
              <h3 className="font-semibold text-foreground mb-2">購入者の</h3>
              <p className="text-muted">リフォーム代不要</p>
            </div>
            <div className="card hover-lift p-6 text-center group">
              <div className="text-5xl mb-4 group-hover:animate-float">⚡</div>
              <h3 className="font-semibold text-foreground mb-2">だから</h3>
              <p className="text-muted">即決率92%</p>
            </div>
          </div>

          {/* インパクトのある実績 */}
          <div className="card-elevated bg-gradient-to-r from-emerald-50 to-teal-50 p-8 max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl font-semibold text-foreground">
                同じマンションの〇〇号室
              </p>
              <p className="gradient-text-warm text-4xl lg:text-6xl font-extrabold">
                相場より680万円高く
              </p>
              <p className="text-primary text-2xl lg:text-3xl font-bold">
                売却成功！
              </p>
            </div>
          </div>

          {/* 2段階CTA */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button className="mega-cta-final w-full max-w-md mx-auto block">
              <span className="block font-bold">今すぐ無料査定を申し込む</span>
              <span className="block text-sm font-normal opacity-90 mt-1">
                このマンション限定・特別査定実施中
              </span>
            </button>
            <button className="btn btn-outline btn-lg">
              まずは同じマンションの売却事例を見る
            </button>
          </div>

          {/* 対応エリア表示 */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
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

