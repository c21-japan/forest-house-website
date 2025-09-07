import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'
import Link from 'next/link'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: '会社概要｜分譲マンション売却のフォレスト',
  description: '奈良県香芝市の不動産会社。分譲マンション売却を専門に37名のスタッフが9時〜22時まで対応。宅建免許奈良(2)4366号。',
};

export default function AboutPage() {
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
                地域に根ざした不動産売却の専門企業として
              </p>
            </div>
          </div>
        </section>

        {/* Company Message */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">フォレストについて</h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-muted mb-6">
                  お客様の大切な資産であるマンションの売却を、誠実にサポートいたします。
                </p>
                <p className="text-muted mb-6">
                  私たちフォレストは、奈良県・大阪府南部で分譲マンションの売却支援を専門に行っています。
                </p>
                <p className="text-muted mb-6">
                  分譲マンションには、一戸建てとは異なる特有の価値があります。
                  管理組合の運営状況、修繕積立金の健全性、共用部分の維持管理状態など、
                  適正な評価には専門的な知識が必要です。
                </p>
                <p className="text-muted mb-6">
                  私たちは、これらの要素を正確に評価し、地域の市場動向を踏まえた適正価格をご提示します。
                  また、売却プロセスのすべてを透明化し、お客様に安心してお任せいただける環境を整えています。
                </p>
                <p className="text-muted mb-6">
                  37名のスタッフ全員が「売却後に後悔しない」「納得できる売却」を実現するため、
                  お客様の立場に立って考え、行動します。
                </p>
                <p className="text-muted mb-6">
                  年末年始を除く毎日、朝9時から夜22時まで、お客様のご都合に合わせて対応いたします。
                </p>
                <p className="text-muted">
                  まずはお気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Profile */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">会社プロフィール</h2>
            <div className="max-w-4xl mx-auto">
              <div className="card p-8">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <dt className="font-semibold text-foreground mb-2">会社名</dt>
                    <dd className="text-muted mb-4">株式会社フォレスト</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-foreground mb-2">所在地</dt>
                    <dd className="text-muted mb-4">〒639-0265 奈良県香芝市上中2-1</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-foreground mb-2">電話番号</dt>
                    <dd className="text-muted mb-4">
                      <a href="tel:0120-949-531" className="text-primary hover:underline">0120-949-531</a>
                    </dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-foreground mb-2">宅地建物取引業免許</dt>
                    <dd className="text-muted mb-4">奈良県知事（2）第4366号</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-foreground mb-2">所属団体</dt>
                    <dd className="text-muted mb-4">全日本不動産協会・近畿レインズ</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-foreground mb-2">従業員数</dt>
                    <dd className="text-muted mb-4">37名</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-foreground mb-2">営業時間</dt>
                    <dd className="text-muted mb-4">9:00〜22:00</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-foreground mb-2">定休日</dt>
                    <dd className="text-muted mb-4">年末年始のみ</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-foreground mb-2">駐車場</dt>
                    <dd className="text-muted mb-4">11台完備</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">実績データ</h2>
            <p className="text-center text-muted mb-12">（2024年10月現在）</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">523</div>
                <div className="text-lg font-semibold text-foreground mb-1">累計相談件数</div>
                <div className="text-sm text-muted">2019年〜2024年10月</div>
              </div>
              
              <div className="card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">187</div>
                <div className="text-lg font-semibold text-foreground mb-1">累計成約件数</div>
                <div className="text-sm text-muted">2019年〜2024年10月</div>
              </div>
              
              <div className="card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">62<span className="text-2xl">日</span></div>
                <div className="text-lg font-semibold text-foreground mb-1">平均売却期間</div>
                <div className="text-sm text-muted">2024年1月〜10月実績</div>
              </div>
              
              <div className="card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">43<span className="text-2xl">%</span></div>
                <div className="text-lg font-semibold text-foreground mb-1">リピート・紹介率</div>
                <div className="text-sm text-muted">2024年1月〜10月実績</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-muted">
                ※上記数値は当社調べによるものです<br />
                ※個別の物件により結果は異なります
              </p>
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">株式会社フォレスト</h3>
                  <p className="text-muted mb-4">〒639-0265 奈良県香芝市上中2-1</p>
                  <p className="text-muted mb-6">
                    電話：<a href="tel:0120-949-531" className="text-primary hover:underline">0120-949-531</a>（9:00〜22:00）
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">お車でお越しの方</h4>
                      <p className="text-muted">駐車場11台完備<br />※大型車も駐車可能です</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">ご来店について</h4>
                      <p className="text-muted">
                        事前にお電話でご予約いただければ、お待たせすることなくご案内できます。<br />
                        出張相談も承っておりますので、お気軽にお申し付けください。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card p-8">
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center text-muted">
                      <div className="text-4xl mb-2">🗺️</div>
                      <div>地図エリア</div>
                    </div>
                  </div>
                  <a 
                    href="https://maps.google.com/maps?q=奈良県香芝市上中2-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    Googleマップで開く
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">お気軽にお問い合わせください</h2>
              <p className="text-xl text-muted">分譲マンション売却のご相談、無料査定を承っております</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0120-949-531" className="btn btn-accent btn-lg">
                  📞 0120-949-531
                </a>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  お問い合わせ
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