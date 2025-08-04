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


// スライダー
document.addEventListener("DOMContentLoaded", () => {
  const topTabs = document.querySelectorAll('.slider-nav.top [role="tab"]');
  const bottomTabs = document.querySelectorAll('.slider-nav.bottom [role="tab"]');
  const panels = document.querySelectorAll(".slider-panel");
  const track = document.querySelector(".slider-track");
  const wrapper = document.querySelector(".slider-wrapper");

  let activeIndex = 0;

  function activateTab(index) {
    activeIndex = index;

    // 上下のタブをそれぞれ連動
    topTabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    bottomTabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", i === index ? "true" : "false");
    });

    // パネルのaria-selectedを更新
    panels.forEach((panel, i) => {
      panel.setAttribute("aria-selected", i === index ? "true" : "false");
    });

    // 中央寄せ位置計算
    const panelWidth = panels[0].offsetWidth;
    const containerWidth = wrapper.offsetWidth;
    const offset = (containerWidth - panelWidth) / 2 - panelWidth * index;

    track.style.transform = `translateX(${offset}px)`;
  }

  // タブクリック（上下それぞれ）
  topTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activateTab(index);
    });
  });
  bottomTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activateTab(index);
    });
  });

  // パネルクリック
  panels.forEach((panel, index) => {
    panel.addEventListener("click", () => {
      activateTab(index);
    });
  });

  // 初期位置
  activateTab(0);
});
