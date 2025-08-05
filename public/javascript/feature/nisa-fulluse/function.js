// 画面幅固定縮小
function applyScale() {
  const wrapper = document.getElementById('scale-wrapper');
  const vw = window.innerWidth;

  if (vw < 1440) {
    const scale = vw / 1440;
    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.height = `${document.body.scrollHeight * scale}px`; // アニメーションや固定背景対応
  } else {
    wrapper.style.transform = '';
    wrapper.style.height = '';
  }
}

window.addEventListener('resize', applyScale);
window.addEventListener('load', applyScale);

// グローバルナビゲーション
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".global-navigation .label");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentItem = btn.closest(".item");
      const subNav = parentItem.querySelector(".sub-navigation");

      if (!subNav) return; // サブメニューがない場合は何もしない

      // 他を閉じる
      document.querySelectorAll(".sub-navigation.is-open").forEach((openNav) => {
        if (openNav !== subNav) {
          openNav.classList.remove("is-open");
          openNav.previousElementSibling?.classList.remove("open");
        }
      });

      // 開閉切り替え
      subNav.classList.toggle("is-open");
      btn.classList.toggle("open");
    });
  });
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
    topTabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    bottomTabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", i === index ? "true" : "false");
    });

    // パネルの aria-selected 更新
    panels.forEach((panel, i) => {
      panel.setAttribute("aria-selected", i === index ? "true" : "false");
    });

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

  // 初期表示
  activateTab(0);
});
