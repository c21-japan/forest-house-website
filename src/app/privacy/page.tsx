import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜フォレスト',
  description: '株式会社フォレストのプライバシーポリシー。お客様の個人情報の取り扱いについて詳しく説明いたします。',
};

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                プライバシーポリシー
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                株式会社フォレストは、お客様の個人情報を適切に保護することが重要な責務であると認識し、以下の方針に基づき個人情報を取り扱います。
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. 個人情報の定義</h2>
                    <p className="text-muted">
                      個人情報とは、お客様個人を識別できる情報（氏名、住所、電話番号等）を指します。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. 個人情報の取得</h2>
                    <p className="text-muted">
                      当社は、適法かつ公正な手段により、必要な範囲で個人情報を取得します。取得の際は、利用目的を明示します。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. 個人情報の利用目的</h2>
                    <ul className="space-y-2 text-muted">
                      <li>• 不動産売買の仲介業務の遂行</li>
                      <li>• お客様からのお問い合わせへの対応</li>
                      <li>• サービスの改善および新サービスの開発</li>
                      <li>• 法令に基づく対応</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. 個人情報の第三者提供</h2>
                    <p className="text-muted mb-4">
                      当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供しません。
                    </p>
                    <ul className="space-y-2 text-muted">
                      <li>• 法令に基づく場合</li>
                      <li>• 人の生命、身体または財産の保護に必要な場合</li>
                      <li>• 公衆衛生・児童の健全育成に必要な場合</li>
                      <li>• 国の機関等への協力が必要な場合</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. 個人情報の管理</h2>
                    <p className="text-muted">
                      当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のため、必要かつ適切な措置を講じます。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. 個人情報の開示・訂正・削除</h2>
                    <p className="text-muted">
                      お客様から個人情報の開示、訂正、削除のご請求があった場合、本人確認の上、適切に対応します。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. お問い合わせ</h2>
                    <p className="text-muted">
                      個人情報に関するお問い合わせは、以下までご連絡ください。
                    </p>
                    <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                      <p className="text-muted">
                        電話：<a href="tel:0120-949-531" className="text-primary font-semibold">0120-949-531</a>（9:00〜22:00・年末年始除く）
                      </p>
                    </div>
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

export default PrivacyPage;
