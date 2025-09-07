import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: '無料査定', href: '/services' },
      { name: '仲介売却', href: '/services' },
      { name: '相続・住み替えサポート', href: '/services' },
    ],
    company: [
      { name: '会社概要', href: '/about' },
      { name: '実績・事例', href: '/portfolio' },
      { name: 'お問い合わせ', href: '/contact' },
    ],
    legal: [
      { name: 'プライバシーポリシー', href: '/privacy' },
      { name: '利用規約', href: '/terms' },
      { name: '広告表示・免責事項', href: '/disclosure' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="ml-3 text-xl font-bold">フォレストハウス</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              奈良県・大阪府南部で分譲マンション売却を専門に行う不動産会社です。
              管理規約・修繕積立金・共用部の評価まで、分譲マンション特有の価値を正しく査定いたします。
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center">
                <span className="w-4 h-4 mr-2">📍</span>
                <span>〒639-0265 奈良県香芝市上中2-1</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 mr-2">📞</span>
                <a href="tel:0120-949-531" className="hover:text-emerald-400 transition-colors">
                  0120-949-531
                </a>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 mr-2">🕒</span>
                <span>9:00〜22:00（年末年始除く）</span>
              </div>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-lg font-semibold mb-6">サービス</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社情報・法的情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">会社情報</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-6">法的情報</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 免許情報・著作権 */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-slate-300 space-y-2">
              <p>宅地建物取引業免許：奈良県知事（2）第4366号</p>
              <p>所属団体：全日本不動産協会・近畿レインズ</p>
              <p>個人情報の取り扱い：プライバシーポリシーに基づき適切に管理</p>
            </div>
            <div className="text-sm text-slate-400">
              © {currentYear} 株式会社フォレスト. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;