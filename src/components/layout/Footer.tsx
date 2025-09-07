import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: '分譲マンション査定', href: '/services/valuation' },
      { name: '売却サポート', href: '/services/selling' },
      { name: '買取サービス', href: '/services/purchase' },
      { name: '相続対策', href: '/services/inheritance' },
    ],
    company: [
      { name: '会社概要', href: '/about' },
      { name: '代表者メッセージ', href: '/about/message' },
      { name: '実績・事例', href: '/portfolio' },
      { name: 'お客様の声', href: '/testimonials' },
    ],
    support: [
      { name: 'よくある質問', href: '/faq' },
      { name: 'お問い合わせ', href: '/contact' },
      { name: 'プライバシーポリシー', href: '/privacy' },
      { name: '利用規約', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-forest-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="ml-3 text-xl font-bold">フォレストハウス</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              分譲マンション売却の専門店として、お客様の大切な資産を適正価格で売却いたします。
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>〒150-0001</p>
              <p>東京都渋谷区神宮前1-1-1</p>
              <p>TEL: 03-1234-5678</p>
              <p>FAX: 03-1234-5679</p>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-forest-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-forest-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-forest-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 営業時間・免許情報 */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">営業時間</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>平日: 9:00 - 18:00</p>
                <p>土曜: 9:00 - 17:00</p>
                <p>日曜・祝日: 休業</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">免許・資格</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>宅地建物取引業免許</p>
                <p>東京都知事免許 (1) 123456</p>
                <p>一般社団法人 不動産流通機構 会員</p>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} フォレストハウス. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
