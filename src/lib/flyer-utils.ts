// チラシ連動JavaScript機能

// 型付けの土台
export type Primitive = string | number | boolean | null | undefined;

export type FlyerImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type FlyerBlock =
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; image: FlyerImage };

export type FlyerData = {
  title?: string;
  subtitle?: string;
  blocks?: FlyerBlock[];
  // 必要に応じて拡張
};

// type guard サンプル
function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
}
function isString(v: unknown): v is string {
  return typeof v === 'string';
}

// チラシ配布日からのカウントダウン
export function initFlyerCountdown() {
  const flyerDate = new Date(localStorage.getItem('flyerDate') || new Date());
  const deadline = new Date(flyerDate);
  deadline.setDate(deadline.getDate() + 7); // 7日間限定
  
  const updateCountdown = () => {
    const now = new Date();
    const distance = deadline.getTime() - now.getTime();
    
    if (distance < 0) {
      const banner = document.querySelector('.flyer-banner');
      if (banner) {
        (banner as HTMLElement).style.display = 'none';
      }
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const daysElement = document.querySelector('.days');
    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');
    
    if (daysElement) daysElement.textContent = days.toString();
    if (hoursElement) hoursElement.textContent = hours.toString();
    if (minutesElement) minutesElement.textContent = minutes.toString();
    if (secondsElement) secondsElement.textContent = seconds.toString();
  };
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// マンション別データ表示
export function showMansionData() {
  const urlParams = new URLSearchParams(window.location.search);
  const mansionId = urlParams.get('m') || 'default';
  
  // マンション別の実績データ
  const mansionData: Record<string, unknown> = {
    'parkheim': {
      name: 'パークハイム奈良',
      results: [
        { room: '503', price: 2980, profit: 700 },
        { room: '802', price: 2450, profit: 470 }
      ],
      buyers: 23
    },
    'default': {
      name: 'このマンション',
      results: [
        { room: '503', price: 2980, profit: 700 },
        { room: '802', price: 2450, profit: 470 }
      ],
      buyers: 23
    }
  };
  
  const data = mansionData[mansionId] || mansionData['default'];
  updateMansionResults(data);
}

// マンション実績の更新
function updateMansionResults(data: unknown) {
  // 実績データを動的に更新
  const resultCards = document.querySelectorAll('.result-card');
  resultCards.forEach((card, index) => {
    if (isRecord(data) && Array.isArray(data.results) && data.results[index]) {
      const result = data.results[index];
      if (isRecord(result)) {
        const roomElement = card.querySelector('.room');
        const priceElement = card.querySelector('.forest');
        const profitElement = card.querySelector('.profit');
        
        if (roomElement && isString(result.room)) roomElement.textContent = `${result.room}号室（3LDK）`;
        if (priceElement && typeof result.price === 'number') priceElement.textContent = `成約：${result.price}万円`;
        if (profitElement && typeof result.profit === 'number') profitElement.textContent = `+${result.profit}万円！`;
      }
    }
  });
}

// エリア切り替え
export function initAreaTabs() {
  const tabs = document.querySelectorAll('.area-tabs .tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      const area = (event.currentTarget as HTMLElement).dataset.area;
      
      // タブの切り替え
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      (event.currentTarget as HTMLElement).classList.add('active');
      
      // コンテンツの切り替え
      document.querySelectorAll('.area-content').forEach(content => {
        content.classList.remove('active');
      });
      const targetContent = document.querySelector(`.area-content.${area}`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// スクロールアニメーション
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, observerOptions);

  // アニメーション対象要素を監視
  const animateElements = document.querySelectorAll('.result-card, .promise-card, .voice-card');
  animateElements.forEach(el => observer.observe(el));
}

// 実績数字のカウントアップ
export function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat .number, .count');
  
  const animateCounter = (element: Element, target: number) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toString();
    }, 20);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.textContent || '0');
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

// 離脱防止
let exitShown = false;
export function initExitPrevention() {
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !exitShown) {
      showExitPopup();
      exitShown = true;
    }
  });
}

function showExitPopup() {
  const popup = document.createElement('div');
  popup.className = 'exit-popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  popup.innerHTML = `
    <div class="popup-content bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">ちょっと待って！</h2>
      <p class="text-lg text-gray-700 mb-6">今なら査定額10%UPクーポン進呈</p>
      <input type="tel" placeholder="電話番号を入力" class="w-full p-3 border border-gray-300 rounded-lg mb-4">
      <button onclick="submitExitOffer()" class="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
        クーポンを受け取る
      </button>
      <button onclick="closeExitPopup()" class="mt-2 text-gray-500 hover:text-gray-700">
        閉じる
      </button>
    </div>
  `;
  document.body.appendChild(popup);
}

// グローバル関数として定義
(window as Record<string, unknown>).submitExitOffer = function() {
  const phoneInput = document.querySelector('.exit-popup input[type="tel"]') as HTMLInputElement;
  if (phoneInput && phoneInput.value) {
    // 電話番号を保存してフォーム送信
    localStorage.setItem('exitOfferPhone', phoneInput.value);
    closeExitPopup();
    // 実際のフォーム送信処理をここに追加
  }
};

(window as Record<string, unknown>).closeExitPopup = function() {
  const popup = document.querySelector('.exit-popup');
  if (popup) {
    popup.remove();
  }
};

// 初期化関数
export function initFlyerFeatures() {
  if (typeof window !== 'undefined') {
    initFlyerCountdown();
    showMansionData();
    initAreaTabs();
    initScrollAnimations();
    initCounterAnimations();
    initExitPrevention();
  }
}
