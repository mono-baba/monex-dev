window.addEventListener("load", function () {
  removeClass()

  const newFunction = document.querySelector("#new-function")
  const newFunctionRect = newFunction.getBoundingClientRect()
  const newFucntionScrollTop = newFunctionRect.top + window.scrollY + 148
  const sectionScrollHeight =
    window.innerHeight - (window.innerHeight - 145 * 2) / 3
  document.querySelectorAll('[type="radio"]').forEach(function (radio, index) {
    radio.addEventListener("change", function () {
      window.scrollTo({
        top: newFucntionScrollTop + sectionScrollHeight * index,
        behavior: "smooth", // スムーズスクロールを有効にする場合
      })
    })
  })
})
let count = 0

window.addEventListener("scroll", function () {
  // 要素を取得する
  const newFunctionInner = document.querySelector("#new-function .inner")
  const newFunction = document.querySelector("#new-function")

  // 要素の位置情報を取得する
  const newFunctionInnerRect = newFunctionInner.getBoundingClientRect()
  const newFunctionRect = newFunction.getBoundingClientRect()
  if (newFunctionInnerRect.top === 0) {
    document.getElementById("js-poinco").classList.add("is-active")
    const newFucntionScrollTop = newFunctionRect.top + window.scrollY + 148
    // この間のスクロールできる高さを取得
    const innerHeight = newFunctionRect.height - newFunctionInnerRect.height
    // 1セクション分の高さ
    const sectionScrollHeight =
      window.innerHeight - (window.innerHeight - 145 * 2) / 3
    const sectionOffset = newFunctionInner.offsetTop - 145
    if (sectionOffset > 0 && sectionOffset <= sectionScrollHeight * 1) {
      document.querySelector("#slide01").checked = true
      document.querySelector('[data-slider-panel="1"]').classList.add("is-show")
      document
        .querySelector('[data-slider-panel="2"]')
        .classList.remove("is-show")
      document
        .querySelector('[data-slider-panel="3"]')
        .classList.remove("is-show")
      if (count === 0) {
        count = 1
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.add("is-bottom")
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.remove("is-top")
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.add("is-bottom")
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.remove("is-top")
      } else if (count === 2 || count === 3) {
        count = 1
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.add("is-bottom")
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.remove("is-top")
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.add("is-bottom")
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.remove("is-top")
      }
    } else if (
      sectionOffset > sectionScrollHeight * 1 &&
      sectionOffset <= sectionScrollHeight * 2
    ) {
      document.querySelector("#slide02").checked = true
      document
        .querySelector('[data-slider-panel="1"]')
        .classList.remove("is-show")
      document.querySelector('[data-slider-panel="2"]').classList.add("is-show")
      document
        .querySelector('[data-slider-panel="3"]')
        .classList.remove("is-show")
      if (count === 0 || count === 1) {
        count = 2
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.add("is-top")
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.remove("is-bottom")
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.add("is-bottom")
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.remove("is-top")
      } else if (count === 3) {
        count = 2
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.add("is-top")
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.remove("is-bottom")
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.add("is-bottom")
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.remove("is-top")
      }
    } else if (sectionOffset > sectionScrollHeight * 2) {
      document.querySelector("#slide03").checked = true
      document
        .querySelector('[data-slider-panel="1"]')
        .classList.remove("is-show")
      document
        .querySelector('[data-slider-panel="2"]')
        .classList.remove("is-show")
      document.querySelector('[data-slider-panel="3"]').classList.add("is-show")
      if (count === 0 || count === 1 || count === 2) {
        count = 3
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.add("is-top")
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.remove("is-bottom")
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.add("is-top")
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.remove("is-bottom")
      } else if (count === 4) {
        count = 3
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.add("is-top")
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.remove("is-bottom")
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.add("is-top")
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.remove("is-bottom")
      }
    }
  } else {
    document.getElementById("js-poinco").classList.remove("is-active")
    if (newFunctionInnerRect.top < 0) {
      count = 4
      document.querySelector("#slide03").checked = true
    } else if (newFunctionInnerRect.top > 0) {
      count = 0
      document.querySelector("#slide01").checked = true
    }
  }
})

function removeClass() {
  // .js-gnavi-linkに対するクリックイベントのリスナーを設定
  document.querySelectorAll(".js-gnavi-link").forEach(function (element) {
    element.addEventListener("click", function () {
      // .l-header, .l-gnavi, .l-overlayに対してクラス名を削除
      document
        .querySelectorAll(".l-header, .l-gnavi, .l-overlay")
        .forEach(function (target) {
          target.classList.remove("is-open", "is-show") // 'is-open'と'is-show'の両方を削除
        })
    })
  })
}
