import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要｜フォレスト｜奈良・大阪の不動産売却',
  description: '株式会社フォレストは奈良県香芝市で分譲マンション売却を専門に行う不動産会社。全日本不動産協会加盟。37名体制で年末年始以外毎日営業。',
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                会社概要
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                奈良県・大阪府南部で分譲マンション売却を専門に行う不動産会社として、お客様の大切な資産を適正価格で売却いたします
              </p>
            </div>
          </div>
        </section>

        {/* Company Message */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">フォレストについて</h2>
              <div className="card p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted leading-relaxed mb-6">
                    お客様の大切な資産であるマンションの売却を、誠実にサポートいたします。
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    私たちフォレストは、奈良県・大阪府南部で分譲マンションの売却支援を専門に行っています。
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    分譲マンションには、一戸建てとは異なる特有の価値があります。管理組合の運営状況、修繕積立金の健全性、共用部分の維持管理状態など、適正な評価には専門的な知識が必要です。
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    私たちは、これらの要素を正確に評価し、地域の市場動向を踏まえた適正価格をご提示します。また、売却プロセスのすべてを透明化し、お客様に安心してお任せいただける環境を整えています。
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    37名のスタッフ全員が「売却後に後悔しない」「納得できる売却」を実現するため、お客様の立場に立って考え、行動します。
                  </p>
                  <p className="text-muted leading-relaxed">
                    年末年始を除く毎日、朝9時から夜22時まで、お客様のご都合に合わせて対応いたします。
                  </p>
                  <p className="text-muted leading-relaxed mt-6 font-semibold">
                    まずはお気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Profile */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">会社プロフィール</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">基本情報</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-semibold text-foreground">会社名</dt>
                      <dd className="text-muted">株式会社フォレスト</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">所在地</dt>
                      <dd className="text-muted">〒639-0265 奈良県香芝市上中2-1</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">電話番号</dt>
                      <dd className="text-muted">
                        <a href="tel:0120-949-531" className="text-primary hover:underline">
                          0120-949-531
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">宅地建物取引業免許</dt>
                      <dd className="text-muted">奈良県知事（2）第4366号</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">所属団体</dt>
                      <dd className="text-muted">全日本不動産協会・近畿レインズ</dd>
                    </div>
                  </dl>
                </div>
                
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">営業情報</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-semibold text-foreground">従業員数</dt>
                      <dd className="text-muted">37名</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">営業時間</dt>
                      <dd className="text-muted">9:00〜22:00</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">定休日</dt>
                      <dd className="text-muted">年末年始のみ</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">駐車場</dt>
                      <dd className="text-muted">11台完備</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">対応エリア</dt>
                      <dd className="text-muted">奈良県・大阪府南部</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Performance */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">事業実績</h2>
            <div className="max-w-4xl mx-auto">
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">実績データ（2024年10月現在）</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">523件</div>
                    <div className="text-muted">累計相談件数</div>
                    <div className="text-sm text-muted">（2019年〜2024年10月）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">187件</div>
                    <div className="text-muted">累計成約件数</div>
                    <div className="text-sm text-muted">（2019年〜2024年10月）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">62日</div>
                    <div className="text-muted">平均売却期間</div>
                    <div className="text-sm text-muted">（2024年1月〜10月実績）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">43%</div>
                    <div className="text-muted">リピート・紹介率</div>
                    <div className="text-sm text-muted">（2024年1月〜10月実績）</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-muted">
                    ※上記数値は当社調べによるものです<br />
                    ※個別の物件により結果は異なります
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">アクセス</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">所在地・連絡先</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">所在地</h4>
                      <p className="text-muted">〒639-0265 奈良県香芝市上中2-1</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">電話</h4>
                      <p className="text-muted">
                        <a href="tel:0120-949-531" className="text-primary hover:underline">
                          0120-949-531
                        </a>
                        （9:00〜22:00）
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">ご来店について</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">お車でお越しの方</h4>
                      <p className="text-muted">駐車場11台完備</p>
                      <p className="text-sm text-muted">※大型車も駐車可能です</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">ご来店について</h4>
                      <p className="text-muted">
                        事前にお電話でご予約いただければ、お待たせすることなくご案内できます。
                        出張相談も承っておりますので、お気軽にお申し付けください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Compliance */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">安心・法令対応</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">免許・資格</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-muted">宅地建物取引業免許：奈良県知事（2）第4366号</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-muted">所属団体：全日本不動産協会・近畿レインズ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-muted">個人情報の取り扱い：プライバシーポリシーに基づき適切に管理</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-muted">広告表示：宅地建物取引業法および不動産の表示に関する公正競争規約を遵守</span>
                    </li>
                  </ul>
                </div>
                
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">品質保証</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-muted">査定・相談無料</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-muted">売却プロセスの完全可視化</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-muted">地域相場データに基づく適正価格提示</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-muted">強引な営業は一切行いません</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">お気軽にご相談ください</h2>
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

export default AboutPage;
