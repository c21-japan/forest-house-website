'use client'

import { useState } from 'react'
import styles from './FAQSection.module.css'

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const defaultItems: FAQItem[] = [
    {
      question: '査定にはどのくらい時間がかかりますか？',
      answer: '簡易査定は最短60分、詳細査定は1〜2営業日でご提示します。'
    },
    {
      question: '査定は本当に無料ですか？',
      answer: 'はい、査定および相談は完全無料です。売却を強制することもありません。'
    },
    {
      question: '他社で査定を受けていても大丈夫ですか？',
      answer: 'もちろん大丈夫です。セカンドオピニオンとしてもご活用ください。'
    },
    {
      question: '売却にかかる期間はどのくらいですか？',
      answer: '平均2〜3ヶ月ですが、物件により異なります。過去の類似事例をもとにご説明します。'
    },
    {
      question: '住みながら売却できますか？',
      answer: 'はい、可能です。内覧時の対応方法などもサポートいたします。'
    },
    {
      question: 'リフォームは必要ですか？',
      answer: '必須ではありません。現況での売却も可能ですし、必要に応じてアドバイスいたします。'
    },
    {
      question: '22時まで営業とのことですが、夜間も査定可能ですか？',
      answer: 'はい、事前予約いただければ夜間の査定も承ります。お仕事帰りのお客様も多くいらっしゃいます。'
    },
    {
      question: '相続物件の売却も対応していますか？',
      answer: 'はい、相続物件の売却も専門に対応しています。相続手続きのサポートも可能です。'
    },
    {
      question: '管理費の滞納がある物件でも査定可能ですか？',
      answer: 'はい、管理費の滞納がある物件でも査定可能です。解決方法もご提案いたします。'
    },
    {
      question: '仲介手数料以外に費用はかかりますか？',
      answer: '基本的には仲介手数料のみです。特別な広告費などが必要な場合は事前にご相談いたします。'
    }
  ]

  const faqItems = items || defaultItems

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className={styles.faq}>
      <div className="container">
        <h2 className={styles.sectionTitle}>よくある質問</h2>
        <p className={styles.sectionSubtitle}>
          お客様からよくいただくご質問にお答えします
        </p>
        
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${openItems.includes(index) ? styles.active : ''}`}
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.questionIcon}>
                  {openItems.includes(index) ? '−' : '+'}
                </span>
              </button>
              
              <div className={`${styles.faqAnswer} ${openItems.includes(index) ? styles.active : ''}`}>
                <div className={styles.answerContent}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.contactInfo}>
          <p>その他のご質問はお気軽にお問い合わせください</p>
          <div className={styles.contactButtons}>
            <a href="tel:0120-949-531" className="btn btn-accent">
              📞 0120-949-531
            </a>
            <a href="/contact" className="btn btn-primary">
              お問い合わせフォーム
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
