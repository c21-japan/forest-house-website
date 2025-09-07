'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: 'サービス', href: '/services' },
    { name: '会社概要', href: '/about' },
    { name: '実績', href: '/portfolio' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-3 hover-scale">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex-center shadow-lg">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              フォレストハウス
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTAボタン */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="btn btn-outline btn-sm">
              無料査定
            </button>
            <button className="btn btn-primary btn-sm">
              お問い合わせ
            </button>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-muted hover:text-primary hover:bg-muted transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-muted hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border">
              <button className="btn btn-outline w-full">
                無料査定
              </button>
              <button className="btn btn-primary w-full">
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

