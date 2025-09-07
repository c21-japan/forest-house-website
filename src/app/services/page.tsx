import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サービス内容｜分譲マンション売却のフォレスト',
  description: '無料査定から仲介売却、相続・住み替えサポートまで。分譲マンション特有の価値を正確に評価。9時〜22時まで対応。香芝市の不動産会社。',
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                サービス内容
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                分譲マンション売却の専門知識と豊富な経験で、お客様の大切な資産を適正価格で売却いたします
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 無料査定 */}
              <div className="card hover-lift p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex-center mx-auto mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">無料査定</h3>
                <p className="text-muted mb-6">
                  専門スタッフが分譲マンションの適正価格を算出。管理状況も含めた総合評価を実施します。
                </p>
                <div className="space-y-2 text-sm text-muted">
                  <p>対象：奈良県・大阪府南部の分譲マンション所有者</p>
                  <p>所要時間：最短60分</p>
                  <p>費用：完全無料</p>
                </div>
              </div>

              {/* 仲介売却 */}
              <div className="card hover-lift p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex-center mx-auto mb-6">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">仲介売却</h3>
                <p className="text-muted mb-6">
                  豊富な販売チャネルと地域ネットワークを活用。適正価格での成約を目指します。
                </p>
                <div className="space-y-2 text-sm text-muted">
                  <p>手数料：成約価格の3%+6万円（税別）</p>
                  <p>平均売却期間：62日</p>
                  <p>成約率：98.3%</p>
                </div>
              </div>

              {/* 相続・住み替えサポート */}
              <div className="card hover-lift p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">相続・住み替えサポート</h3>
                <p className="text-muted mb-6">
                  司法書士・税理士と連携し、複雑な手続きもワンストップでサポートします。
                </p>
                <div className="space-y-2 text-sm text-muted">
                  <p>初回相談：無料</p>
                  <p>専門家連携：あり</p>
                  <p>手続き代行：可能</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">サービス詳細</h2>
            
            <div className="space-y-12">
              {/* 無料査定詳細 */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">無料査定</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">提供価値</h4>
                    <ul className="space-y-2 text-muted">
                      <li>• 管理状況を含めた適正価格の算出</li>
                      <li>• 売却戦略のご提案</li>
                      <li>• 地域相場との比較分析</li>
                      <li>• 修繕積立金の妥当性評価</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">標準フロー</h4>
                    <ol className="space-y-2 text-muted">
                      <li>1. お申込み</li>
                      <li>2. 物件調査</li>
                      <li>3. 現地確認</li>
                      <li>4. 査定書作成</li>
                      <li>5. ご説明</li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-muted">
                    <strong>留意点：</strong>査定は無料ですが、売却を強制するものではありません
                  </p>
                </div>
              </div>

              {/* 仲介売却詳細 */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">仲介売却</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">提供価値</h4>
                    <ul className="space-y-2 text-muted">
                      <li>• 適正価格での売却活動</li>
                      <li>• 購入者との交渉代行</li>
                      <li>• 契約手続きサポート</li>
                      <li>• 売却プロセスの完全可視化</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">標準フロー</h4>
                    <ol className="space-y-2 text-muted">
                      <li>1. 媒介契約</li>
                      <li>2. 販売活動</li>
                      <li>3. 購入申込</li>
                      <li>4. 売買契約</li>
                      <li>5. 引き渡し</li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-muted">
                    <strong>手数料：</strong>成約価格の3%+6万円（税別）※法定上限
                  </p>
                </div>
              </div>

              {/* 相続・住み替えサポート詳細 */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">相続・住み替えサポート</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">提供価値</h4>
                    <ul className="space-y-2 text-muted">
                      <li>• 専門家連携による手続き支援</li>
                      <li>• スケジュール調整</li>
                      <li>• 税務相談対応</li>
                      <li>• ワンストップサポート</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">標準フロー</h4>
                    <ol className="space-y-2 text-muted">
                      <li>1. 状況ヒアリング</li>
                      <li>2. 専門家紹介</li>
                      <li>3. 手続き支援</li>
                      <li>4. 売却サポート</li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-muted">
                    <strong>費用：</strong>相談無料（専門家費用は別途）
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">料金・手数料の考え方</h2>
            <div className="card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">料金体系の透明性</h3>
              <p className="text-muted mb-6">
                当社は宅地建物取引業法に基づく正規の手数料をいただいております。
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">仲介手数料の計算方法</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• 売買価格400万円超：売買価格×3%+6万円（税別）</li>
                    <li>• 売買価格200万円超400万円以下：売買価格×4%+2万円（税別）</li>
                    <li>• 売買価格200万円以下：売買価格×5%（税別）</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">その他の費用</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• 査定料：無料</li>
                    <li>• 相談料：無料</li>
                    <li>• 広告費：原則無料（特別な広告をご希望の場合は事前相談）</li>
                    <li>• 書類取得代行：実費のみ</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-muted">
                  <strong>※</strong>仲介手数料は成約時のみ発生します<br />
                  <strong>※</strong>上記以外の費用が発生する場合は必ず事前にご説明します
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "査定にはどのくらい時間がかかりますか？",
                  a: "簡易査定は最短60分、詳細査定は1〜2営業日でご提示します。"
                },
                {
                  q: "査定は本当に無料ですか？",
                  a: "はい、査定および相談は完全無料です。売却を強制することもありません。"
                },
                {
                  q: "他社で査定を受けていても大丈夫ですか？",
                  a: "もちろん大丈夫です。セカンドオピニオンとしてもご活用ください。"
                },
                {
                  q: "売却にかかる期間はどのくらいですか？",
                  a: "平均2〜3ヶ月ですが、物件により異なります。過去の類似事例をもとにご説明します。"
                },
                {
                  q: "住みながら売却できますか？",
                  a: "はい、可能です。内覧時の対応方法などもサポートいたします。"
                },
                {
                  q: "22時まで営業とのことですが、夜間も査定可能ですか？",
                  a: "はい、事前予約いただければ夜間の査定も承ります。"
                }
              ].map((faq, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">まずはお気軽にご相談ください</h2>
              <p className="text-xl text-muted">分譲マンション売却のプロが、お客様のご状況に合わせて最適なプランをご提案いたします</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-primary btn-lg">
                  無料査定を申し込む
                </button>
                <button className="btn btn-outline btn-lg">
                  まずは相談する
                </button>
              </div>
              <p className="text-muted">
                お電話でのご相談：<a href="tel:0120-949-531" className="text-primary font-semibold">0120-949-531</a>（9:00〜22:00）
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
