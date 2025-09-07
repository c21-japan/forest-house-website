'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    furigana: '',
    phone: '',
    address: '',
    propertyAddress: '',
    mansionName: '',
    layout: '',
    area: '',
    age: '',
    status: '',
    message: '',
    contactMethod: '',
    timeSlot: '',
    agree: false
  })

  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = 'checked' in e.target ? e.target.checked : false
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.type) newErrors.type = 'お問い合わせ種別を選択してください'
    if (!formData.name) newErrors.name = 'お名前を入力してください'
    if (!formData.furigana) newErrors.furigana = 'フリガナを入力してください'
    if (!formData.phone) newErrors.phone = '電話番号を入力してください'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agree) {
      setErrors({ agree: 'プライバシーポリシーに同意してください' })
      return
    }
    // ここで送信処理
    console.log('送信データ:', formData)
    setStep(3)
  }

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
                分譲マンションの売却に関するご相談、無料査定のお申込みを承っております
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="card p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">受付時間</h3>
                <p className="text-3xl font-bold text-primary mb-4">9:00〜22:00（年末年始を除く）</p>
                <p className="text-muted mb-4">
                  お電話でのお問い合わせ：<a href="tel:0120-949-531" className="text-primary hover:underline font-semibold">0120-949-531</a>
                </p>
                <p className="text-sm text-muted">
                  ※時間外のお問い合わせは翌営業日に対応いたします
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        {step === 1 && (
          <section className="py-16 bg-muted">
            <div className="container">
              <div className="max-w-2xl mx-auto">
                <div className="card p-8">
                  <div className="mb-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '33%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-muted">
                      <span className="font-semibold text-primary">STEP 1</span>
                      <span>STEP 2</span>
                      <span>STEP 3</span>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        お問い合わせ種別 <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="assessment"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>無料査定を希望</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="consultation"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>まずは相談したい</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="service"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>サービスについて質問</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="other"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>その他</span>
                        </label>
                      </div>
                      {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="山田 太郎"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        フリガナ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="furigana"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.furigana}
                        onChange={handleChange}
                        placeholder="ヤマダ タロウ"
                      />
                      {errors.furigana && <p className="text-red-500 text-sm mt-1">{errors.furigana}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        電話番号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="090-1234-5678"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">ご住所</label>
                      <input
                        type="text"
                        name="address"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="奈良県香芝市..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        ご希望の連絡方法 <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="phone"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>電話</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="visit"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>訪問</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">ご希望の時間帯</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="timeSlot"
                            value="morning"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>9:00〜12:00</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="timeSlot"
                            value="afternoon"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>12:00〜18:00</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="timeSlot"
                            value="evening"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>18:00〜22:00</span>
                        </label>
                      </div>
                    </div>

                    <button type="button" onClick={handleNext} className="btn btn-primary w-full">
                      次へ進む
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="py-16 bg-muted">
            <div className="container">
              <div className="max-w-2xl mx-auto">
                <div className="card p-8">
                  <div className="mb-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '66%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-muted">
                      <span>STEP 1</span>
                      <span className="font-semibold text-primary">STEP 2</span>
                      <span>STEP 3</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formData.type === 'assessment' && (
                      <>
                        <h3 className="text-xl font-bold text-foreground mb-4">物件情報（査定希望の方は必須）</h3>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">物件所在地</label>
                          <input
                            type="text"
                            name="propertyAddress"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={formData.propertyAddress}
                            onChange={handleChange}
                            placeholder="奈良県○○市..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">マンション名</label>
                          <input
                            type="text"
                            name="mansionName"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={formData.mansionName}
                            onChange={handleChange}
                            placeholder="○○マンション"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">間取り</label>
                          <select
                            name="layout"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={formData.layout}
                            onChange={handleChange}
                          >
                            <option value="">選択してください</option>
                            <option value="1R">1R</option>
                            <option value="1K">1K</option>
                            <option value="1DK">1DK</option>
                            <option value="1LDK">1LDK</option>
                            <option value="2DK">2DK</option>
                            <option value="2LDK">2LDK</option>
                            <option value="3DK">3DK</option>
                            <option value="3LDK">3LDK</option>
                            <option value="4LDK">4LDK以上</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">専有面積</label>
                          <input
                            type="text"
                            name="area"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={formData.area}
                            onChange={handleChange}
                            placeholder="約 ○○ ㎡"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">築年数</label>
                          <input
                            type="text"
                            name="age"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="約 ○○ 年"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">居住状況</label>
                          <div className="space-y-2">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="status"
                                value="living"
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <span>居住中</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="status"
                                value="vacant"
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <span>空室</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="status"
                                value="rented"
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <span>賃貸中</span>
                            </label>
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">ご相談内容（500字まで）</label>
                      <textarea
                        name="message"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        maxLength={500}
                        placeholder="ご相談内容をご自由にお書きください"
                      />
                      <p className="text-sm text-muted mt-1">{formData.message.length}/500</p>
                    </div>

                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          className="mr-2 mt-1"
                        />
                        <span className="text-sm">
                          <a href="/privacy" target="_blank" className="text-primary hover:underline">プライバシーポリシー</a>に同意する
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
                    </div>

                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(1)} className="btn btn-secondary flex-1">
                        戻る
                      </button>
                      <button type="submit" className="btn btn-primary flex-1">
                        送信する
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="py-16 bg-muted">
            <div className="container">
              <div className="max-w-2xl mx-auto">
                <div className="card p-8 text-center">
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">お問い合わせありがとうございました</h2>
                  <p className="text-muted mb-8">
                    お問い合わせを受け付けました。<br />
                    1営業日以内に担当者よりご連絡させていただきます。
                  </p>
                  <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">今後の流れ</h3>
                    <ol className="text-left space-y-2 text-muted">
                      <li>1. 担当者からのご連絡（1営業日以内）</li>
                      <li>2. 詳細なヒアリング</li>
                      <li>3. 査定・ご提案</li>
                    </ol>
                  </div>
                  <Link href="/" className="btn btn-primary">
                    トップページへ戻る
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Flow */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ後の流れ</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">受付確認</h3>
                  <p className="text-muted mb-2">フォーム送信後、自動返信メールをお送りします</p>
                  <span className="text-sm text-primary font-semibold">即日</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">担当者からご連絡</h3>
                  <p className="text-muted mb-2">内容を確認し、担当者からご連絡いたします</p>
                  <span className="text-sm text-primary font-semibold">1営業日以内</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">ヒアリング・ご相談</h3>
                  <p className="text-muted mb-2">お客様のご状況を詳しくお伺いします</p>
                  <span className="text-sm text-primary font-semibold">お電話または訪問</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">ご提案</h3>
                  <p className="text-muted mb-2">査定結果や売却プランをご提案します</p>
                  <span className="text-sm text-primary font-semibold">最短60分</span>
                </div>
              </div>
              <p className="text-center text-muted mt-8">
                ※強引な営業は一切いたしません<br />
                ※ご相談のみでも構いません
              </p>
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
  )
}