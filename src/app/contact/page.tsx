import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ・無料査定｜フォレスト',
  description: '分譲マンション売却の無料査定・ご相談はこちら。最短60分で査定結果をご提示。奈良県・大阪府南部全域対応。22時まで受付。0120-949-531',
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                お問い合わせ・無料査定
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                分譲マンションの売却に関するご相談、無料査定のお申込みを承っております。下記フォームに必要事項をご入力ください。
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">受付時間</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground">営業時間</h3>
                      <p className="text-muted">9:00〜22:00（年末年始を除く）</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">お電話でのお問い合わせ</h3>
                      <p className="text-muted">
                        <a href="tel:0120-949-531" className="text-primary font-semibold text-xl hover:underline">
                          0120-949-531
                        </a>
                      </p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <p className="text-sm text-muted">
                        ※時間外のお問い合わせは翌営業日に対応いたします
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">お問い合わせ後の流れ</h2>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex-center text-sm font-bold mr-3">1</span>
                      <div>
                        <h3 className="font-semibold text-foreground">受付確認（即日）</h3>
                        <p className="text-muted text-sm">フォーム送信後、自動返信にて受付確認をお送りします</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex-center text-sm font-bold mr-3">2</span>
                      <div>
                        <h3 className="font-semibold text-foreground">担当者からご連絡（1営業日以内）</h3>
                        <p className="text-muted text-sm">内容を確認し、担当者からご連絡いたします</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex-center text-sm font-bold mr-3">3</span>
                      <div>
                        <h3 className="font-semibold text-foreground">ヒアリング・ご相談</h3>
                        <p className="text-muted text-sm">お客様のご状況を詳しくお伺いします</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex-center text-sm font-bold mr-3">4</span>
                      <div>
                        <h3 className="font-semibold text-foreground">ご提案</h3>
                        <p className="text-muted text-sm">査定結果や売却プランをご提案します</p>
                      </div>
                    </li>
                  </ol>
                  <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-muted">
                      ※強引な営業は一切いたしません<br />
                      ※ご相談のみでも構いません
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">お問い合わせフォーム</h2>
                <form className="space-y-6">
                  {/* お問い合わせ種別 */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="inquiry_type" value="assessment" className="mr-2" />
                        <span className="text-muted">無料査定を希望</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="inquiry_type" value="consultation" className="mr-2" />
                        <span className="text-muted">まずは相談したい</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="inquiry_type" value="service" className="mr-2" />
                        <span className="text-muted">サービスについて質問</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="inquiry_type" value="other" className="mr-2" />
                        <span className="text-muted">その他</span>
                      </label>
                    </div>
                  </div>

                  {/* お客様情報 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        フリガナ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="ヤマダ タロウ"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        電話番号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="090-1234-5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        ご住所（任意）
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="奈良県香芝市上中2-1"
                      />
                    </div>
                  </div>

                  {/* 物件情報 */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">物件情報（査定希望の方は必須）</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          物件所在地
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="奈良県香芝市"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          マンション名
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="○○マンション"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          間取り
                        </label>
                        <select className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                          <option value="">選択してください</option>
                          <option value="1R">1R</option>
                          <option value="1K">1K</option>
                          <option value="1DK">1DK</option>
                          <option value="1LDK">1LDK</option>
                          <option value="2K">2K</option>
                          <option value="2DK">2DK</option>
                          <option value="2LDK">2LDK</option>
                          <option value="3K">3K</option>
                          <option value="3DK">3DK</option>
                          <option value="3LDK">3LDK</option>
                          <option value="4LDK">4LDK</option>
                          <option value="5LDK">5LDK</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          専有面積
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="約60㎡"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          築年数
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="約15年"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        居住状況
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="residence_status" value="living" className="mr-2" />
                          <span className="text-muted">居住中</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="residence_status" value="vacant" className="mr-2" />
                          <span className="text-muted">空室</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="residence_status" value="rented" className="mr-2" />
                          <span className="text-muted">賃貸中</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* ご相談内容 */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      ご相談内容（任意・500字まで）
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="ご質問やご相談内容をお聞かせください"
                    ></textarea>
                  </div>

                  {/* ご希望の連絡方法 */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      ご希望の連絡方法 <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="contact_method" value="phone" className="mr-2" />
                        <span className="text-muted">電話</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="contact_method" value="visit" className="mr-2" />
                        <span className="text-muted">訪問</span>
                      </label>
                    </div>
                  </div>

                  {/* ご希望の時間帯 */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      ご希望の時間帯（任意）
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="time_preference" value="morning" className="mr-2" />
                        <span className="text-muted">9:00〜12:00</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="time_preference" value="afternoon" className="mr-2" />
                        <span className="text-muted">12:00〜18:00</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="time_preference" value="evening" className="mr-2" />
                        <span className="text-muted">18:00〜22:00</span>
                      </label>
                    </div>
                  </div>

                  {/* プライバシーポリシー */}
                  <div>
                    <label className="flex items-start">
                      <input type="checkbox" className="mr-2 mt-1" required />
                      <span className="text-sm text-muted">
                        <a href="/privacy" className="text-primary hover:underline">プライバシーポリシー</a>に同意する
                        <span className="text-red-500"> *</span>
                      </span>
                    </label>
                  </div>

                  {/* 送信ボタン */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg px-12"
                    >
                      送信する
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "電話での問い合わせは可能ですか？",
                  a: "はい、0120-949-531にて承っております（9:00〜22:00・年末年始除く）"
                },
                {
                  q: "オンライン相談は可能ですか？",
                  a: "申し訳ございませんが、より正確な査定のため、お電話または訪問での対応とさせていただいております"
                },
                {
                  q: "匿名での相談は可能ですか？",
                  a: "概算査定であれば、物件情報のみでも対応可能です"
                },
                {
                  q: "個人情報はどのように管理されますか？",
                  a: "プライバシーポリシーに基づき、適切に管理いたします"
                },
                {
                  q: "しつこい営業はありませんか？",
                  a: "お客様のペースに合わせて対応いたします。強引な営業は一切行いません"
                },
                {
                  q: "土日や夜間も対応していますか？",
                  a: "はい、年末年始を除く毎日9:00〜22:00まで対応しております"
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
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
