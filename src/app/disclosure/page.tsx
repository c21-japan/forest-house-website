import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '広告表示・免責事項｜フォレスト',
  description: '株式会社フォレストの広告表示について。宅地建物取引業法に基づく適正な広告表示と免責事項について説明いたします。',
};

const DisclosurePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                広告表示・免責事項
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                当社は、宅地建物取引業法および不動産の表示に関する公正競争規約に基づき、適正な広告表示を行っています。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* 広告表示について */}
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">広告表示について</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">1. 価格表示</h3>
                    <ul className="space-y-2 text-muted">
                      <li>• 売却事例の価格は実際の成約価格です</li>
                      <li>• 査定価格は市場動向により変動する可能性があります</li>
                      <li>• 手数料は法定上限額を超えることはありません</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">2. 実績表示</h3>
                    <ul className="space-y-2 text-muted">
                      <li>• 掲載している実績は当社調べによるものです</li>
                      <li>• 個別の物件により結果は異なります</li>
                      <li>• 統計データは明示した期間・条件のものです</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">3. 比較表現</h3>
                    <ul className="space-y-2 text-muted">
                      <li>• 他社との比較は客観的事実に基づいています</li>
                      <li>• 「専門」「地域密着」等の表現は、当社の事業実態に基づいています</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 免責事項 */}
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">免責事項</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">1. 情報の正確性</h3>
                    <p className="text-muted">
                      当サイトの情報は、掲載時点のものであり、予告なく変更される場合があります。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">2. 売却の成果</h3>
                    <p className="text-muted">
                      売却価格、売却期間等は、市場環境、物件の個別事情により変動します。過去の実績は将来の成果を保証するものではありません。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">3. 第三者サービス</h3>
                    <p className="text-muted">
                      当社が紹介する専門家（司法書士、税理士等）のサービスについて、当社は責任を負いません。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">4. 市場動向</h3>
                    <p className="text-muted">
                      不動産市場の動向に関する記述は、一般的な傾向を示すものであり、個別の物件には当てはまらない場合があります。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">5. リンク先</h3>
                    <p className="text-muted">
                      当サイトからリンクする第三者サイトの内容について、当社は責任を負いません。
                    </p>
                  </div>
                </div>
              </div>

              {/* 宅地建物取引業者票 */}
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">宅地建物取引業者票</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <dl className="space-y-3">
                      <div>
                        <dt className="font-semibold text-foreground">商号</dt>
                        <dd className="text-muted">株式会社フォレスト</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-foreground">免許番号</dt>
                        <dd className="text-muted">奈良県知事（2）第4366号</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-foreground">所在地</dt>
                        <dd className="text-muted">〒639-0265 奈良県香芝市上中2-1</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <dl className="space-y-3">
                      <div>
                        <dt className="font-semibold text-foreground">電話番号</dt>
                        <dd className="text-muted">
                          <a href="tel:0120-949-531" className="text-primary hover:underline">
                            0120-949-531
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-foreground">営業時間</dt>
                        <dd className="text-muted">9:00〜22:00（年末年始除く）</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-foreground">所属団体</dt>
                        <dd className="text-muted">全日本不動産協会・近畿レインズ</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* お問い合わせ */}
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">お問い合わせ</h2>
                <p className="text-muted mb-4">
                  広告表示に関するご質問は、下記までお問い合わせください。
                </p>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <p className="text-muted">
                    <a href="tel:0120-949-531" className="text-primary font-semibold">0120-949-531</a>
                    （9:00〜22:00・年末年始除く）
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted">
                    最終更新日：令和4年3月1日<br />
                    株式会社フォレスト
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DisclosurePage;
