'use client'

import { useEffect, useState } from 'react'
import styles from './StatsSection.module.css'

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    {
      number: 47,
      label: '成約件数',
      period: '2024年1月〜10月',
      icon: '🏆'
    },
    {
      number: 62,
      label: '平均売却期間',
      period: '2024年1月〜10月',
      unit: '日',
      icon: '⏱️'
    },
    {
      number: 95,
      label: '査定価格達成率',
      period: '2024年1月〜10月',
      unit: '%',
      icon: '📊'
    },
    {
      number: 43,
      label: 'リピート・紹介率',
      period: '2024年1月〜10月',
      unit: '%',
      icon: '🤝'
    }
  ]

  return (
    <section id="stats-section" className={styles.stats}>
      <div className="container">
        <h2 className={styles.sectionTitle}>売却実績（2024年1月〜10月）</h2>
        <p className={styles.sectionSubtitle}>
          地域に根ざした実績と信頼性
        </p>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>
                {isVisible ? stat.number : 0}
                {stat.unit && <span className={styles.statUnit}>{stat.unit}</span>}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statPeriod}>{stat.period}</div>
            </div>
          ))}
        </div>
        
        <div className={styles.disclaimer}>
          <p>※上記数値は当社調べによるものです</p>
          <p>※個別の物件により結果は異なります</p>
        </div>
      </div>
    </section>
  )
}
