// 画面幅固定縮小
// function applyScale() {
//   const wrapper = document.getElementById('scale-wrapper');
//   const vw = window.innerWidth;

//   if (vw < 1440) {
//     const scale = vw / 1440;
//     wrapper.style.transform = `scale(${scale})`;
//     wrapper.style.height = `${document.body.scrollHeight * scale}px`; // アニメーションや固定背景対応
//   } else {
//     wrapper.style.transform = '';
//     wrapper.style.height = '';
//   }
// }

// window.addEventListener('resize', applyScale);
// window.addEventListener('load', applyScale);

// グローバルナビゲーション
document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".global-navigation .label, .global-navigation .link");

  navButtons.forEach((btn) => {
    const subNav = btn.nextElementSibling;
    if (!subNav || !subNav.classList.contains("sub-navigation")) return;

    // PC: hoverで開閉（他を閉じないので複数開ける）
    btn.addEventListener("mouseenter", () => {
      if (window.matchMedia("(min-width: 769px)").matches) {
        btn.setAttribute("aria-expanded", "true");
      }
    });

    // PC: メニュー外に出たら閉じる
    btn.parentElement.addEventListener("mouseleave", () => {
      if (window.matchMedia("(min-width: 769px)").matches) {
        btn.setAttribute("aria-expanded", "false");
      }
    });

    // モバイル: クリックでトグル
    btn.addEventListener("click", (e) => {
      if (!window.matchMedia("(max-width: 768px)").matches) return;
      e.preventDefault();
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
    });
  });
});

// パスアニメーション
window.addEventListener("DOMContentLoaded", () => {
  const path = document.getElementById("animation_path_01");
  const cat = document.querySelector(".cat-walk");
  const animationWrapper = document.querySelector(".animation-wrapper");

  if (!path || !cat || !animationWrapper) {
    console.error("要素が見つかりません");
    return;
  }

  const pathLength = path.getTotalLength();
  const speedMultiplier = 2; // スクロール速度倍率

  let lastScrollY = window.scrollY;
  let progressDistance = 0; // パス上の距離

  function updateCatPosition() {
    const rect = animationWrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 開始判定：セクション上端が画面中央を超えたら動く
    if (rect.top > windowHeight / 2) {
      // まだ画面中央より下なら動かさずスタート位置に固定
      progressDistance = 0;
    }

    // 位置更新（ループ対応）
    let distanceOnPath = progressDistance % pathLength;
    if (distanceOnPath < 0) distanceOnPath += pathLength;

    const point = path.getPointAtLength(distanceOnPath);

    const transformAttr = path.getAttribute("transform");
    let offsetX = 0, offsetY = 0;
    if (transformAttr) {
      const match = /translate\((-?\d+\.?\d*)\s+(-?\d+\.?\d*)\)/.exec(transformAttr);
      if (match) {
        offsetX = parseFloat(match[1]);
        offsetY = parseFloat(match[2]);
      }
    }

    const svg = path.ownerSVGElement;
    const matrix = svg.getScreenCTM();

    const svgPoint = svg.createSVGPoint();
    svgPoint.x = point.x + offsetX;
    svgPoint.y = point.y + offsetY;
    const screenPoint = svgPoint.matrixTransform(matrix);

    const wrapperRect = animationWrapper.getBoundingClientRect();
    const left = screenPoint.x - wrapperRect.left;
    const top = screenPoint.y - wrapperRect.top;

    // 猫画像の高さを取得し、縦の中央に合わせる
    const catHeight = cat.offsetHeight;

    cat.style.left = `${left}px`;
    cat.style.top = `${top - catHeight / 2}px`;
  }

  function onScroll() {
    const currentScrollY = window.scrollY;
    const rect = animationWrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const deltaY = currentScrollY - lastScrollY;

    // スクロール方向で左右反転切替
    if (deltaY > 0) {
      cat.style.transform = "scaleX(1)";  // 右向き（元の向き）
    } else if (deltaY < 0) {
      cat.style.transform = "scaleX(-1)"; // 左向き（反転）
    }

    // セクション上端が画面中央以下の時だけ距離を進める
    if (rect.top <= windowHeight / 2) {
      progressDistance += deltaY * speedMultiplier;
    }

    lastScrollY = currentScrollY;
  }

  function loop() {
    updateCatPosition();
    requestAnimationFrame(loop);
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", () => {
    // 必要ならリサイズ対応
  });

  // 初期化
  lastScrollY = window.scrollY;
  progressDistance = 0;

  loop();
});



// スライダー
document.addEventListener("DOMContentLoaded", () => {
  const topTabs = document.querySelectorAll('.slider-nav.top [role="tab"]');
  const bottomTabs = document.querySelectorAll('.slider-nav.bottom [role="tab"]');
  const panels = document.querySelectorAll(".slider-panel");
  const track = document.querySelector(".slider-track");
  const wrapper = document.querySelector(".slider-wrapper");

  let activeIndex = 0;

  // gap を CSS から取得する関数
  function getGap() {
    const gapValue = getComputedStyle(track).gap || "0px";
    return parseFloat(gapValue); // "40px" → 40
  }

  function activateTab(index) {
    activeIndex = index;

    // 上下のタブを aria-selected で同期
    topTabs.forEach((tab, i) =>
      tab.setAttribute("aria-selected", i === index ? "true" : "false")
    );
    bottomTabs.forEach((tab, i) =>
      tab.setAttribute("aria-selected", i === index ? "true" : "false")
    );

    // パネルの aria-selected 更新
    panels.forEach((panel, i) =>
      panel.setAttribute("aria-selected", i === index ? "true" : "false")
    );

    // gap を考慮して中央寄せ
    const panelWidth = panels[0].offsetWidth;
    const containerWidth = wrapper.offsetWidth;
    const gap = getGap();
    const offset =
      (containerWidth - panelWidth) / 2 - (panelWidth + gap) * index;

    track.style.transform = `translateX(${offset}px)`;
  }

  // タブクリック（上下どちらも同期）
  function onClickTab(index) {
    activateTab(index);
  }

  // キーボード操作（左右・上下矢印）
  function onKeyDownTab(e, index) {
    const maxIndex = topTabs.length - 1;
    let newIndex = null;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        newIndex = index === maxIndex ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        newIndex = index === 0 ? maxIndex : index - 1;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = maxIndex;
        break;
      default:
        return;
    }

    e.preventDefault();
    activateTab(newIndex);
  }

  // イベント登録
  topTabs.forEach((tab, i) => {
    tab.addEventListener("click", () => onClickTab(i));
    tab.addEventListener("keydown", (e) => onKeyDownTab(e, i));
  });
  bottomTabs.forEach((tab, i) => {
    tab.addEventListener("click", () => onClickTab(i));
    tab.addEventListener("keydown", (e) => onKeyDownTab(e, i));
  });

  // パネルクリック
  panels.forEach((panel, i) => {
    panel.addEventListener("click", () => activateTab(i));
  });

  // 指定 ID のパネルを中央寄せ
  function activateTabById(id) {
    const index = Array.from(panels).findIndex(
      (panel) => panel.id === id
    );
    if (index !== -1) {
      activateTab(index);
    }
  }

  // data-slide を持つリンククリックで横スクロール
  document.querySelectorAll("[data-slide]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetSlide = link.getAttribute("data-slide");
      if (!targetSlide) return;

      // アンカーの縦スクロール後に横スクロール
      setTimeout(() => {
        activateTabById(targetSlide);
      }, 400); // 縦スクロール完了待ち
    });
  });

  // 初期表示
  activateTab(0);
});
