'use client'

import { useState, useEffect } from 'react'
import styles from './TestimonialSlider.module.css'

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "査定の根拠が明確で信頼できました",
      text: "他社では「相場です」の一言でしたが、フォレストさんは類似物件の成約事例を詳しく説明してくれました。管理組合の評価まで含めて査定してくれたのは初めてでした。",
      author: "50代・奈良市",
      rating: 5
    },
    {
      quote: "管理組合の評価に驚きました",
      text: "修繕積立金の状況まで詳しく調査し、それを価格に反映してくれたのは初めてでした。分譲マンションの専門性を感じました。",
      author: "40代・生駒市",
      rating: 5
    },
    {
      quote: "売却の流れが分かりやすかった",
      text: "最初に全体スケジュールを説明してもらえたので、不安なく進められました。各段階で丁寧に報告してもらえました。",
      author: "60代・香芝市",
      rating: 5
    },
    {
      quote: "夜遅くまで対応してもらえて助かりました",
      text: "仕事が遅いので22時まで営業しているのは本当に助かりました。おかげで無理なく相談できました。",
      author: "30代・堺市",
      rating: 5
    },
    {
      quote: "相続物件でも安心してお任せできました",
      text: "相続手続きのことも含めて、専門家を紹介してもらえました。遠方に住んでいる私でも、オンラインで進捗を確認できて助かりました。",
      author: "50代・県外",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className={styles.sectionTitle}>お客様からの評価</h2>
        <p className={styles.sectionSubtitle}>
          実際にご利用いただいたお客様の声
        </p>
        
        <div className={styles.slider}>
          <div className={styles.sliderContainer}>
            <div 
              className={styles.slides}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.testimonialCard}>
                    <div className={styles.rating}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className={styles.star}>⭐</span>
                      ))}
                    </div>
                    <blockquote className={styles.quote}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <p className={styles.text}>{testimonial.text}</p>
                    <cite className={styles.author}>{testimonial.author}</cite>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.controls}>
            <button 
              className={styles.prevButton}
              onClick={goToPrevious}
              aria-label="前のレビュー"
            >
              ←
            </button>
            <button 
              className={styles.nextButton}
              onClick={goToNext}
              aria-label="次のレビュー"
            >
              →
            </button>
          </div>
          
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`レビュー ${index + 1} に移動`}
              />
            ))}
          </div>
        </div>
        
        <div className={styles.disclaimer}>
          <p>※個人情報保護のため、詳細は伏せております</p>
          <p>※お客様の許可を得て掲載しています</p>
        </div>
      </div>
    </section>
  )
}
