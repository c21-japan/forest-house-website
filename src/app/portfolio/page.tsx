'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function PortfolioPage() {
  const [selectedCase, setSelectedCase] = useState(0)

  const cases = [
    {
      title: '相続物件の売却',
      location: '奈良市',
      specs: '築18年・3LDK',
      background: 'お客様は県外在住で、相続したマンションの管理に困っていました',
      challenge: '管理費の滞納があり、室内の片付けも必要な状態',
      solution: [
        '管理組合との調整を代行',
        '片付け業者の手配をサポート',
        '遠方のお客様に配慮し、オンラインで進捗報告'
      ],
      result: {
        assessment: 2280,
        final: 2250,
        days: 52
      },
      learning: '相続物件特有の課題に対し、トータルサポートが重要'
    },
    {
      title: '住み替えによる売却',
      location: '香芝市',
      specs: '築12年・2LDK',
      background: 'お子様の成長に伴い、より広い物件への住み替えを検討',
      challenge: '新居の購入時期と売却時期の調整が必要',
      solution: [
        '買い先行で新居を確保',
        'つなぎ融資の金融機関をご紹介',
        '売却活動を積極的に展開'
      ],
      result: {
        assessment: 1780,
        final: 1820,
        days: 35
      },
      learning: '資金計画を含めた総合的な提案が成功の鍵'
    },
    {
      title: '転勤による売却',
      location: '堺市',
      specs: '築7年・4LDK',
      background: '急な転勤が決まり、早期売却が必要',
      challenge: '時間的制約があり、価格と期間のバランスが重要',
      solution: [
        '適正価格での即売却戦略を採用',
        'プロカメラマンによる物件撮影',
        '複数の販売チャネルで同時展開'
      ],
      result: {
        assessment: 3450,
        final: 3380,
        days: 28
      },
      learning: '期限がある場合は、戦略的な価格設定が重要'
    }
  ]

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
                豊富な実績と経験でお客様の売却を成功に導きます
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">売却実績統計</h2>
            <p className="text-center text-muted mb-12">（2024年1月〜10月）</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="card p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">成約価格帯分布</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">3000万〜</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: '11%' }}>
                          <span className="text-xs text-white ml-2">11%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">2000万〜</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: '32%' }}>
                          <span className="text-xs text-white ml-2">32%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">1000万〜</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: '40%' }}>
                          <span className="text-xs text-white ml-2">40%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">〜1000万</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: '17%' }}>
                          <span className="text-xs text-white ml-2">17%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">売却期間分布</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">〜30日</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: '23%' }}>
                          <span className="text-xs text-white ml-2">23%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">31-60日</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: '38%' }}>
                          <span className="text-xs text-white ml-2">38%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">61-90日</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: '28%' }}>
                          <span className="text-xs text-white ml-2">28%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">91日〜</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: '11%' }}>
                          <span className="text-xs text-white ml-2">11%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-muted mt-4">平均: 62日 / 中央値: 51日</p>
              </div>
            </div>
            
            <div className="card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">エリア別成約件数</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15件</div>
                  <div className="text-muted">奈良市</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">9件</div>
                  <div className="text-muted">香芝市</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6件</div>
                  <div className="text-muted">生駒市</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">7件</div>
                  <div className="text-muted">堺市</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10件</div>
                  <div className="text-muted">その他</div>
                </div>
              </div>
              <p className="text-center text-muted mt-4">
                ※全47件の内訳<br />
                ※個別の物件により条件は異なります
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">売却事例</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {cases.map((caseItem, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCase === index
                        ? 'bg-primary text-white'
                        : 'bg-white text-muted hover:bg-muted'
                    }`}
                    onClick={() => setSelectedCase(index)}
                  >
                    事例{index + 1}：{caseItem.title}
                  </button>
                ))}
              </div>
              
              <div className="card p-8">
                {cases.map((caseItem, index) => (
                  <div
                    key={index}
                    className={`${selectedCase === index ? 'block' : 'hidden'}`}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{caseItem.title}</h3>
                      <p className="text-muted">
                        📍 {caseItem.location} / {caseItem.specs}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">背景</h4>
                        <p className="text-muted mb-6">{caseItem.background}</p>
                        
                        <h4 className="text-lg font-semibold text-foreground mb-3">課題</h4>
                        <p className="text-muted mb-6">{caseItem.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">解決策</h4>
                        <ul className="space-y-2 text-muted mb-6">
                          {caseItem.solution.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                        
                        <h4 className="text-lg font-semibold text-foreground mb-3">学び</h4>
                        <p className="text-muted">{caseItem.learning}</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                      <h4 className="text-lg font-semibold text-foreground mb-4">結果</h4>
                      <div className="flex items-center justify-center space-x-8">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{caseItem.result.assessment.toLocaleString()}万円</div>
                          <div className="text-sm text-muted">査定額</div>
                        </div>
                        <div className="text-2xl text-muted">→</div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{caseItem.result.final.toLocaleString()}万円</div>
                          <div className="text-sm text-muted">成約額</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{caseItem.result.days}日</div>
                          <div className="text-sm text-muted">売却期間</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">お客様からの評価</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-lg font-semibold text-foreground mb-4">
                  &ldquo;査定の根拠が明確で信頼できました&rdquo;
                </blockquote>
                <p className="text-muted mb-4">
                  他社では「相場です」の一言でしたが、フォレストさんは類似物件の成約事例を詳しく説明してくれました。
                </p>
                <cite className="text-sm text-muted">50代・奈良市</cite>
              </div>
              
              <div className="card p-6 text-center">
                <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-lg font-semibold text-foreground mb-4">
                  &ldquo;管理組合の評価に驚きました&rdquo;
                </blockquote>
                <p className="text-muted mb-4">
                  修繕積立金の状況まで詳しく調査し、それを価格に反映してくれたのは初めてでした。
                </p>
                <cite className="text-sm text-muted">40代・生駒市</cite>
              </div>
              
              <div className="card p-6 text-center">
                <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-lg font-semibold text-foreground mb-4">
                  &ldquo;売却の流れが分かりやすかった&rdquo;
                </blockquote>
                <p className="text-muted mb-4">
                  最初に全体スケジュールを説明してもらえたので、不安なく進められました。
                </p>
                <cite className="text-sm text-muted">60代・香芝市</cite>
              </div>
              
              <div className="card p-6 text-center">
                <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-lg font-semibold text-foreground mb-4">
                  &ldquo;夜遅くまで対応してもらえて助かりました&rdquo;
                </blockquote>
                <p className="text-muted mb-4">
                  仕事が遅いので22時まで営業しているのは本当に助かりました。
                </p>
                <cite className="text-sm text-muted">30代・堺市</cite>
              </div>
            </div>
            <p className="text-center text-muted mt-8">
              ※個人情報保護のため、詳細は伏せております<br />
              ※お客様の許可を得て掲載しています
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">あなたのマンションも成功事例に</h2>
              <p className="text-xl text-muted">豊富な実績と経験で、最適な売却プランをご提案します</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0120-949-531" className="btn btn-accent btn-lg">
                  📞 0120-949-531
                </a>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  無料査定を申し込む
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}