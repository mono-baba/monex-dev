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
  const panels = document.querySelectorAll('.slider-panel');
  const track = document.querySelector('.slider-track');
  const wrapper = document.querySelector('.slider-wrapper');

  const gap = 40; // CSS gap に合わせる

  let activeIndex = 0;

  function activateTab(index) {
    activeIndex = index;

    // aria-selected 更新
    topTabs.forEach((tab, i) => tab.setAttribute('aria-selected', i === index ? 'true' : 'false'));
    bottomTabs.forEach((tab, i) => tab.setAttribute('aria-selected', i === index ? 'true' : 'false'));
    panels.forEach((panel, i) => panel.setAttribute('aria-selected', i === index ? 'true' : 'false'));

    const panelWidth = panels[0].offsetWidth;     // 例: 992px
    const containerWidth = wrapper.offsetWidth;  // 例: 1200px

    // パネルとcontainerの幅差を考慮した中央寄せ
    const offset = (containerWidth - panelWidth) / 2 - index * (panelWidth + gap);

    track.style.transform = `translateX(${offset}px)`;

    topTabs[index].focus();
  }

  function onClickTab(index) {
    activateTab(index);
  }

  function onKeyDownTab(e, index) {
    const maxIndex = topTabs.length - 1;
    let newIndex = null;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        newIndex = index === maxIndex ? 0 : index + 1;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newIndex = index === 0 ? maxIndex : index - 1;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = maxIndex;
        break;
      default:
        return;
    }

    e.preventDefault();
    activateTab(newIndex);
  }

  topTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => onClickTab(i));
    tab.addEventListener('keydown', e => onKeyDownTab(e, i));
  });
  bottomTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => onClickTab(i));
    tab.addEventListener('keydown', e => onKeyDownTab(e, i));
  });

  panels.forEach((panel, i) => {
    panel.addEventListener('click', () => activateTab(i));
  });

  activateTab(0);
});
