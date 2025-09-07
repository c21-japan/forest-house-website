'use client'

import { useState } from 'react'
import styles from './AreaAccordion.module.css'

export default function AreaAccordion() {
  const [activeArea, setActiveArea] = useState<string | null>(null)

  const areas = [
    {
      id: 'nara',
      name: '奈良市',
      icon: '🦌',
      description: '奈良県の中心都市として、歴史と文化が息づく街',
      features: [
        '近鉄奈良線沿線の利便性',
        '観光地としての人気',
        '教育機関の充実',
        '歴史的建造物の価値'
      ],
      averagePrice: '2,800万円',
      averageDays: '58日',
      transactionCount: '15件'
    },
    {
      id: 'kashiba',
      name: '香芝市',
      icon: '🏢',
      description: '大阪府に隣接し、交通アクセスが良好な住宅都市',
      features: [
        '近鉄大阪線の利便性',
        '新興住宅地としての人気',
        '商業施設の充実',
        '子育て環境の良さ'
      ],
      averagePrice: '2,200万円',
      averageDays: '45日',
      transactionCount: '9件'
    },
    {
      id: 'ikoma',
      name: '生駒市',
      icon: '⛰️',
      description: '生駒山の麓に広がる自然豊かな住宅地',
      features: [
        '近鉄生駒線のアクセス',
        '自然環境の豊かさ',
        '住宅地としての静寂',
        '大阪・奈良への通勤便利'
      ],
      averagePrice: '2,500万円',
      averageDays: '52日',
      transactionCount: '6件'
    },
    {
      id: 'sakai',
      name: '堺市',
      icon: '🌊',
      description: '大阪府南部の政令指定都市として発展する街',
      features: [
        '南海電鉄の利便性',
        '商業・工業の集積',
        '住宅地の多様性',
        '大阪都心へのアクセス'
      ],
      averagePrice: '2,600万円',
      averageDays: '48日',
      transactionCount: '7件'
    }
  ]

  const toggleArea = (areaId: string) => {
    setActiveArea(activeArea === areaId ? null : areaId)
  }

  return (
    <section className={styles.areaAccordion}>
      <div className="container">
        <h2 className={styles.sectionTitle}>対応エリア</h2>
        <p className={styles.sectionSubtitle}>
          奈良県・大阪府南部の分譲マンション売却を専門サポート
        </p>
        
        <div className={styles.accordion}>
          {areas.map((area) => (
            <div key={area.id} className={styles.accordionItem}>
              <button
                className={`${styles.accordionHeader} ${activeArea === area.id ? styles.active : ''}`}
                onClick={() => toggleArea(area.id)}
                aria-expanded={activeArea === area.id}
              >
                <div className={styles.areaInfo}>
                  <span className={styles.areaIcon}>{area.icon}</span>
                  <div className={styles.areaDetails}>
                    <h3 className={styles.areaName}>{area.name}</h3>
                    <p className={styles.areaDescription}>{area.description}</p>
                  </div>
                </div>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{area.averagePrice}</span>
                    <span className={styles.statLabel}>平均価格</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{area.averageDays}</span>
                    <span className={styles.statLabel}>平均期間</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{area.transactionCount}</span>
                    <span className={styles.statLabel}>成約件数</span>
                  </div>
                </div>
                <span className={styles.accordionIcon}>
                  {activeArea === area.id ? '−' : '+'}
                </span>
              </button>
              
              <div className={`${styles.accordionContent} ${activeArea === area.id ? styles.active : ''}`}>
                <div className={styles.contentInner}>
                  <div className={styles.features}>
                    <h4>エリアの特徴</h4>
                    <ul>
                      {area.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.marketInfo}>
                    <h4>市場動向</h4>
                    <div className={styles.marketStats}>
                      <div className={styles.marketStat}>
                        <span className={styles.marketLabel}>平均査定価格</span>
                        <span className={styles.marketValue}>{area.averagePrice}</span>
                      </div>
                      <div className={styles.marketStat}>
                        <span className={styles.marketLabel}>平均売却期間</span>
                        <span className={styles.marketValue}>{area.averageDays}</span>
                      </div>
                      <div className={styles.marketStat}>
                        <span className={styles.marketLabel}>2024年成約件数</span>
                        <span className={styles.marketValue}>{area.transactionCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.disclaimer}>
          <p>※上記数値は2024年1月〜10月の当社実績に基づきます</p>
          <p>※個別の物件により条件は異なります</p>
        </div>
      </div>
    </section>
  )
}
