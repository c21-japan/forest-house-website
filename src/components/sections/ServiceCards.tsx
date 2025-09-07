import Link from 'next/link'
import styles from './ServiceCards.module.css'

export default function ServiceCards() {
  const services = [
    {
      icon: '📋',
      title: '無料査定サービス',
      description: '管理状況を含めた適正価格の算出、売却戦略のご提案',
      features: [
        '管理組合の財務状況評価',
        '修繕積立金の妥当性チェック',
        '地域相場データに基づく査定',
        '売却戦略のご提案'
      ],
      link: '/contact',
      linkText: '無料査定を申込む'
    },
    {
      icon: '🤝',
      title: '仲介売却',
      description: '適正価格での売却活動、購入者との交渉代行、契約手続きサポート',
      features: [
        '購入者との交渉代行',
        '契約手続きのサポート',
        '売却プロセスの完全可視化',
        'アフターサポート'
      ],
      link: '/contact',
      linkText: '仲介売却を相談'
    },
    {
      icon: '🏠',
      title: '相続・住み替えサポート',
      description: '専門家連携による手続き支援、スケジュール調整、税務相談対応',
      features: [
        '相続手続きのサポート',
        '住み替えスケジュール調整',
        '税務相談のご紹介',
        '専門家との連携'
      ],
      link: '/contact',
      linkText: 'サポートを相談'
    }
  ]

  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className={styles.sectionTitle}>サービス一覧</h2>
        <p className={styles.sectionSubtitle}>
          分譲マンション売却に特化した専門サービスをご提供
        </p>
        
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              
              <Link href={service.link} className={`btn btn-primary ${styles.serviceButton}`}>
                {service.linkText}
              </Link>
            </div>
          ))}
        </div>
        
        <div className={styles.pricing}>
          <h3 className={styles.pricingTitle}>料金・手数料について</h3>
          <div className={styles.pricingTable}>
            <div className={styles.pricingRow}>
              <span className={styles.pricingItem}>査定料</span>
              <span className={styles.pricingPrice}>無料</span>
            </div>
            <div className={styles.pricingRow}>
              <span className={styles.pricingItem}>相談料</span>
              <span className={styles.pricingPrice}>無料</span>
            </div>
            <div className={styles.pricingRow}>
              <span className={styles.pricingItem}>仲介手数料</span>
              <span className={styles.pricingPrice}>成約価格×3%+6万円<br /><span className={styles.pricingNote}>（税別・法定上限）</span></span>
            </div>
            <div className={styles.pricingRow}>
              <span className={styles.pricingItem}>広告費</span>
              <span className={styles.pricingPrice}>原則無料<br /><span className={styles.pricingNote}>（特別広告は事前相談）</span></span>
            </div>
          </div>
          <p className={styles.pricingNote}>※仲介手数料は成約時のみ発生します</p>
        </div>
      </div>
    </section>
  )
}
