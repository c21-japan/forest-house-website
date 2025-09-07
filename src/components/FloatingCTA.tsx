'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './FloatingCTA.module.css'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className={styles.floatingCTA}>
      <a href="tel:0120-949-531" className={styles.phoneButton}>
        📞 電話で相談
      </a>
      <Link href="/contact" className={styles.formButton}>
        📝 無料査定
      </Link>
    </div>
  )
}
