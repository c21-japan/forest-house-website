import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '売却実績・事例｜分譲マンション売却のフォレスト',
  description: '奈良・大阪での分譲マンション売却実績を公開。平均売却期間62日、査定価格達成率98.3%。相続・住み替えなど様々な事例をご紹介。',
};

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                売却実績・事例
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                奈良県・大阪府南部での分譲マンション売却実績をご紹介。お客様の成功事例から、売却の可能性を感じていただけます
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">売却実績統計（2024年1月〜10月）</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">47件</div>
                  <div className="text-muted">成約件数</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">62日</div>
                  <div className="text-muted">平均売却期間</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98.3%</div>
                  <div className="text-muted">査定価格達成率</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">43%</div>
                  <div className="text-muted">リピート・紹介率</div>
                </div>
              </div>

              {/* Price Range Distribution */}
              <div className="card p-8 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">成約価格帯分布</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">8件</div>
                    <div className="text-muted">1,000万円未満</div>
                    <div className="text-sm text-muted">（17%）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">19件</div>
                    <div className="text-muted">1,000〜2,000万円</div>
                    <div className="text-sm text-muted">（40%）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">15件</div>
                    <div className="text-muted">2,000〜3,000万円</div>
                    <div className="text-sm text-muted">（32%）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">5件</div>
                    <div className="text-muted">3,000万円以上</div>
                    <div className="text-sm text-muted">（11%）</div>
                  </div>
                </div>
              </div>

              {/* Sale Period Distribution */}
              <div className="card p-8 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">売却期間分布</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">11件</div>
                    <div className="text-muted">30日以内</div>
                    <div className="text-sm text-muted">（23%）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">18件</div>
                    <div className="text-muted">31〜60日</div>
                    <div className="text-sm text-muted">（38%）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">13件</div>
                    <div className="text-muted">61〜90日</div>
                    <div className="text-sm text-muted">（28%）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">5件</div>
                    <div className="text-muted">91日以上</div>
                    <div className="text-sm text-muted">（11%）</div>
                  </div>
                </div>
              </div>

              {/* Area Distribution */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">エリア別成約件数</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">15件</div>
                    <div className="text-muted">奈良市</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">9件</div>
                    <div className="text-muted">香芝市</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">6件</div>
                    <div className="text-muted">生駒市</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">7件</div>
                    <div className="text-muted">堺市</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">10件</div>
                    <div className="text-muted">その他</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-muted">
                    ※全47件の内訳<br />
                    ※個別の物件により条件は異なります
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">成功事例</h2>
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Case 1 */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">事例1：相続物件の売却（奈良市・築18年・3LDK）</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">背景・課題</h4>
                    <ul className="space-y-2 text-muted">
                      <li>• お客様は県外在住で、相続したマンションの管理に困っていました</li>
                      <li>• 管理費の滞納があり、室内の片付けも必要な状態</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">当社の対応</h4>
                    <ul className="space-y-2 text-muted">
                      <li>• 管理組合との調整を代行</li>
                      <li>• 片付け業者の手配をサポート</li>
                      <li>• 遠方のお客様に配慮し、オンラインで進捗報告</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <p className="font-semibold text-foreground">結果</p>
                      <p className="text-muted">査定額2,280万円に対し、2,250万円で成約（52日）</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <p className="text-sm text-muted">学び：相続物件特有の課題に対し、トータルサポートが重要</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">事例2：住み替えによる売却（香芝市・築12年・2LDK）</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">背景・課題</h4>
                    <ul className="space-y-2 text-muted">
                      <li>• お子様の成長に伴い、より広い物件への住み替えを検討</li>
                      <li>• 新居の購入時期と売却時期の調整が必要</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">当社の対応</h4>
                    <ul className="space-y-2 text-muted">
                      <li>• 買い先行で新居を確保</li>
                      <li>• つなぎ融資の金融機関をご紹介</li>
                      <li>• 売却活動を積極的に展開</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <p className="font-semibold text-foreground">結果</p>
                      <p className="text-muted">査定額1,780万円に対し、1,820万円で成約（35日）</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <p className="text-sm text-muted">学び：資金計画を含めた総合的な提案が成功の鍵</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">事例3：転勤による売却（堺市・築7年・4LDK）</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">背景・課題</h4>
                    <ul className="space-y-2 text-muted">
                      <li>• 急な転勤が決まり、早期売却が必要</li>
                      <li>• 時間的制約があり、価格と期間のバランスが重要</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">当社の対応</h4>
                    <ul className="space-y-2 text-muted">
                      <li>• 適正価格での即売却戦略を採用</li>
                      <li>• プロカメラマンによる物件撮影</li>
                      <li>• 複数の販売チャネルで同時展開</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <p className="font-semibold text-foreground">結果</p>
                      <p className="text-muted">査定額3,450万円に対し、3,380万円で成約（28日）</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <p className="text-sm text-muted">学び：期限がある場合は、戦略的な価格設定が重要</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">お客様からの評価</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  quote: "査定の根拠が明確で信頼できました",
                  author: "50代・奈良市",
                  detail: "他社では「相場です」の一言でしたが、フォレストさんは類似物件の成約事例を詳しく説明してくれました。"
                },
                {
                  quote: "管理組合の評価に驚きました",
                  author: "40代・生駒市",
                  detail: "修繕積立金の状況まで詳しく調査し、それを価格に反映してくれたのは初めてでした。"
                },
                {
                  quote: "売却の流れが分かりやすかった",
                  author: "60代・香芝市",
                  detail: "最初に全体スケジュールを説明してもらえたので、不安なく進められました。"
                },
                {
                  quote: "夜遅くまで対応してもらえて助かりました",
                  author: "30代・堺市",
                  detail: "仕事が遅いので22時まで営業しているのは本当に助かりました。"
                }
              ].map((testimonial, index) => (
                <div key={index} className="card p-6">
                  <blockquote className="text-lg font-medium text-foreground mb-4">
                    「{testimonial.quote}」
                  </blockquote>
                  <p className="text-muted mb-2">{testimonial.detail}</p>
                  <cite className="text-sm text-primary font-semibold">— {testimonial.author}</cite>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted">
                ※個人情報保護のため、詳細は伏せております<br />
                ※お客様の許可を得て掲載しています
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">同じような成功を目指しませんか？</h2>
              <p className="text-xl text-muted">お客様のご状況に合わせて、最適な売却プランをご提案いたします</p>
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

export default PortfolioPage;
