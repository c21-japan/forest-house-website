import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約｜フォレスト',
  description: '株式会社フォレストの利用規約。ウェブサイトおよびサービスの利用条件を定めています。',
};

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                利用規約
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                本規約は、株式会社フォレストが提供するウェブサイトおよびサービスの利用条件を定めるものです。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="card p-8 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">第1条（適用）</h2>
                    <p className="text-muted">
                      本規約は、本サービスの利用に関し、当社とお客様との間の権利義務関係を定めます。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">第2条（利用登録）</h2>
                    <p className="text-muted">
                      お客様は、当社の定める方法により利用登録を申請し、当社がこれを承認することで、本サービスを利用できます。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">第3条（禁止事項）</h2>
                    <p className="text-muted mb-4">
                      お客様は、以下の行為をしてはなりません。
                    </p>
                    <ul className="space-y-2 text-muted">
                      <li>• 法令または公序良俗に違反する行為</li>
                      <li>• 犯罪行為に関連する行為</li>
                      <li>• 当社または第三者の権利を侵害する行為</li>
                      <li>• 虚偽の情報を登録する行為</li>
                      <li>• 本サービスの運営を妨害する行為</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">第4条（本サービスの提供の停止等）</h2>
                    <p className="text-muted mb-4">
                      当社は、以下の場合、事前通知なく本サービスの提供を停止または中断できます。
                    </p>
                    <ul className="space-y-2 text-muted">
                      <li>• 本サービスのメンテナンス</li>
                      <li>• 天災等の不可抗力</li>
                      <li>• その他、当社が必要と判断した場合</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">第5条（免責事項）</h2>
                    <p className="text-muted mb-4">
                      当社は、本サービスに関して、以下の事項について一切の責任を負いません。
                    </p>
                    <ul className="space-y-2 text-muted">
                      <li>• 本サービスの情報の正確性、有用性</li>
                      <li>• お客様が本サービスを利用して行った行為の結果</li>
                      <li>• 本サービスの中断・停止により生じた損害</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">第6条（個人情報の取扱い）</h2>
                    <p className="text-muted">
                      当社は、本サービスの利用によって取得する個人情報を、プライバシーポリシーに従い適切に取り扱います。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">第7条（準拠法・裁判管轄）</h2>
                    <p className="text-muted">
                      本規約は日本法に準拠し、本規約に関する紛争は、奈良地方裁判所を第一審の専属的合意管轄裁判所とします。
                    </p>
                  </div>

                  <div className="border-t pt-8">
                    <p className="text-sm text-muted">
                      制定日：令和4年3月1日<br />
                      株式会社フォレスト<br />
                      〒639-0265 奈良県香芝市上中2-1
                    </p>
                  </div>
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

export default TermsPage;
