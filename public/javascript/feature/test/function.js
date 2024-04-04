window.addEventListener("load", function () {
  initializePage()
  addRadioChangeListeners()
})
let count = 0

// ラジオボタンの変更イベントを追加
function addRadioChangeListeners() {
  const radios = document.querySelectorAll('[name="slideshow"]')
  radios.forEach(function (radio, index) {
    radio.addEventListener("change", function () {
      scrollToSection(index)
    })
  })
}

// スクロールイベントを追加
function scrollToSection(index) {
  const newFunction = document.querySelector("#new-function")
  const newFunctionRect = newFunction.getBoundingClientRect()
  const newFunctionInnerTop = window.scrollY + newFunctionRect.top + 148
  const sectionScrollHeight = window.innerHeight + window.innerHeight / 3
  window.scrollTo({
    top: Math.round(newFunctionInnerTop + sectionScrollHeight * index),
    behavior: "smooth",
  })
}

// ハンバーガーメニューのリンクをクリックしたときの処理
function initializePage() {
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

window.addEventListener("scroll", function () {
  handlePanelVisibility()
  handlePoincoVisibility()
  handleScroll()
  handleScrollPoinco()
})

function handlePanelVisibility() {
  const newFunction = document.querySelector("#new-function")
  const newFunctionRect = newFunction.getBoundingClientRect()
  // サイト上部からnewFunctionInnerまでの距離
  // （newFunctionInnerはabsoluteでtopの高さが0になるため、親要素からpaddingとborderを足してinnerのtopの位置を取得する）
  const newFunctionInnerTop = window.scrollY + newFunctionRect.top + 148
  // data-slider-panelをすべて取得
  const panels = document.querySelectorAll("[data-slider-panel]")
  // data-slider-panelの数を取得
  const panelCount = panels.length
  // 親要素に対して、panel1枚あたりの高さを取得
  // (スクロールに余裕を持たせるため親要素はpanelの数+100vhしているため、追加分の100vhをpanel数で引く。)
  const sectionScrollHeight =
    window.innerHeight + window.innerHeight / panelCount
  panels.forEach(function (panel, index) {
    // panelの頭が画面に入る前で、data-sp-showの終わりが画面に入ったら
    var shadowBoxes = document.querySelector("[data-sp-show]")
    // panelの頭が画面に入ってから、panelの終わりが画面から出るまでの間
    const panelIsVisible =
      newFunctionInnerTop + sectionScrollHeight * index <= window.scrollY &&
      newFunctionInnerTop + sectionScrollHeight * (index + 1) > window.scrollY
    if (panelIsVisible) {
      count = index + 1
      document.querySelector("#slide0" + (index + 1)).checked = true
      panel.classList.add("is-show")
      if (index > 0) {
        panels[index - 1].classList.add("is-top")
        panels[index - 1].classList.remove("is-bottom")
      }
      if (index < panelCount - 1) {
        panels[index + 1].classList.add("is-bottom")
        panels[index + 1].classList.remove("is-top")
      }
    } else if (
      index === 0 &&
      newFunctionInnerTop + sectionScrollHeight * index > window.scrollY &&
      isInViewport(shadowBoxes)
    ) {
      panel.classList.add("is-show")
    } else {
      panel.classList.remove("is-show")
    }
  })
}

function handlePoincoVisibility() {
  // 要素を取得する
  const newFunctionInner = document.querySelector("#new-function .inner")
  var shadowBoxes = document.querySelector("[data-sp-show]")
  // 要素の位置情報を取得する
  const newFunctionInnerRect = newFunctionInner.getBoundingClientRect()
  if (isInViewportBottom(shadowBoxes)) {
    document.getElementById("js-poinco").classList.add("is-active")
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
}

function isInViewportBottom(element) {
  var rect = element.getBoundingClientRect()
  var windowHeight = window.innerHeight || document.documentElement.clientHeight
  return (
    rect.bottom <= windowHeight &&
    rect.right > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top < windowHeight
  )
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect()
  var windowHeight = window.innerHeight || document.documentElement.clientHeight
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top < windowHeight
  )
}

function handleScroll() {
  var shadowBoxes = document.querySelectorAll("[data-sp-show]")
  shadowBoxes.forEach(function (box) {
    if (isInViewport(box)) {
      box.classList.add("is-show")
    } else {
      box.classList.remove("is-show")
    }
  })
}

function isInViewportPoinco(element) {
  var rect = element.getBoundingClientRect()
  var windowHeight = window.innerHeight || document.documentElement.clientHeight
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function handleScrollPoinco() {
  var shadowBoxes = document.querySelectorAll("[data-sp-poinco]")
  shadowBoxes.forEach(function (box) {
    if (isInViewportPoinco(box)) {
      box.classList.add("is-show")
    } else {
      box.classList.remove("is-show")
    }
  })
}
