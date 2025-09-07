'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h1 className={styles.title}>
            奈良・大阪の<br />
            <span className={styles.highlight}>分譲マンション売却なら</span>
          </h1>
          
          <p className={styles.subtitle}>
            🏢 管理組合の評価まで正確に査定します
          </p>
          
          <div className={styles.buttons}>
            <Link href="/contact" className={`btn btn-accent ${styles.primaryBtn}`}>
              無料査定を申込む
            </Link>
            <Link href="/contact" className={`btn btn-secondary ${styles.secondaryBtn}`}>
              まず相談
            </Link>
          </div>
          
          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              ✓ 宅建免許 奈良(2)4366
            </div>
            <div className={styles.badge}>
              ✓ 全日本不動産協会加盟
            </div>
            <div className={styles.badge}>
              ✓ 査定・相談無料
            </div>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.statsOverlay}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>47</div>
                <div className={styles.statLabel}>件の成約</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>62</div>
                <div className={styles.statLabel}>日で売却</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </section>
  )
}
