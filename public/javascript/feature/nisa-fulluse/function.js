function applyScale() {
  const wrapper = document.getElementById('scale-wrapper');
  const vw = window.innerWidth;

  if (vw >= 768 && vw < 1440) {
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
