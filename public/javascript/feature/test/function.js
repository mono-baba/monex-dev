window.addEventListener("load", function () {
  removeClass()
})
let count = 0

window.addEventListener("scroll", function () {
  addClass()
  // 要素を取得する
  const newFunctionInner = document.querySelector("#new-function .inner")
  const newFunction = document.querySelector("#new-function")

  // 要素の位置情報を取得する
  const newFunctionInnerRect = newFunctionInner.getBoundingClientRect()
  const newFunctionRect = newFunction.getBoundingClientRect()
  if (newFunctionInnerRect.top === 0) {
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
      console.log(count)
      if (count === 0) {
        console.log("上からきた1番目")
        count = 1
      } else if (count === 2 || count === 3) {
        console.log("下からきた1番目")
        count = 1
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.add("is-bottom")
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.remove("is-top")
      }
    } else if (
      sectionOffset > sectionScrollHeight * 1 &&
      sectionOffset <= sectionScrollHeight * 2
    ) {
      console.log(count)
      document.querySelector("#slide02").checked = true
      document
        .querySelector('[data-slider-panel="1"]')
        .classList.remove("is-show")
      document.querySelector('[data-slider-panel="2"]').classList.add("is-show")
      document
        .querySelector('[data-slider-panel="3"]')
        .classList.remove("is-show")
      if (count === 0 || count === 1) {
        console.log("上からきた2番目")
        count = 2
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.add("is-top")
        document
          .querySelector('[data-slider-panel="1"]')
          .classList.remove("is-bottom")
      } else if (count === 3) {
        console.log("下からきた2番目")
        count = 2
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.add("is-bottom")
        document
          .querySelector('[data-slider-panel="3"]')
          .classList.remove("is-top")
      }
    } else if (sectionOffset > sectionScrollHeight * 2) {
      console.log(count)
      document.querySelector("#slide03").checked = true
      document
        .querySelector('[data-slider-panel="1"]')
        .classList.remove("is-show")
      document
        .querySelector('[data-slider-panel="2"]')
        .classList.remove("is-show")
      document.querySelector('[data-slider-panel="3"]').classList.add("is-show")
      if (count === 0 || count === 1 || count === 2) {
        console.log("上からきた3番目")
        count = 3
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.add("is-top")
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.remove("is-bottom")
      } else if (count === 4) {
        console.log("下からきた3番目")
        count = 3
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.add("is-top")
        document
          .querySelector('[data-slider-panel="2"]')
          .classList.remove("is-bottom")
      }
    }
  } else {
    console.log("out of view")
    if (count === 3) {
      count = 4
      document.querySelector('[data-slider-panel="1"]').classList.add("is-top")
      document
        .querySelector('[data-slider-panel="1"]')
        .classList.remove("is-bottom")
      document.querySelector('[data-slider-panel="2"]').classList.add("is-top")
      document
        .querySelector('[data-slider-panel="2"]')
        .classList.remove("is-bottom")
      document.querySelector('[data-slider-panel="3"]').classList.add("is-top")
      document
        .querySelector('[data-slider-panel="3"]')
        .classList.remove("is-bottom")
    } else if ((count === 1, count === 0)) {
      count = 0
      document
        .querySelector('[data-slider-panel="1"]')
        .classList.add("is-bottom")
      document
        .querySelector('[data-slider-panel="1"]')
        .classList.remove("is-top")
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

function addClass() {
  var element = document.getElementById("js-poinco")
  var rect = element.getBoundingClientRect()
  var windowHeight = window.innerHeight || document.documentElement.clientHeight

  // 要素が画面の中央にあるかどうかを検出
  if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
    // 画面中央にある場合
    element.classList.add("is-active")
  } else {
    // 画面中央にない場合
    element.classList.remove("is-active")
  }
}
