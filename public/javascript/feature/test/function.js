window.addEventListener("load", function () {
  const firstPanelTopValue = firstPanelTop()
  const panelScrollHeightValue = panelScrollHeight()
  initializePage()
  addRadioChangeListeners(firstPanelTopValue, panelScrollHeightValue)
  handlePanelVisibility(firstPanelTopValue, panelScrollHeightValue)
  handlePoincoVisibility()
  handleScroll()
  handleScrollPoinco()

  window.addEventListener("scroll", function () {
    handlePanelVisibility(firstPanelTopValue, panelScrollHeightValue)
    handlePoincoVisibility()
    handleScroll()
    handleScrollPoinco()
    handleScrollFixButton()
  })
})
let count = 0

// ハンバーガーメニューのリンクをクリックしたときの処理
function initializePage() {
  var gnaviLinks = document.querySelectorAll(".js-fixedMenu .link")
  // .js-gnavi-linkに対するクリックイベントのリスナーを設定
  gnaviLinks.forEach(function (gnaviLink) {
    gnaviLink.addEventListener("click", function () {
      // .l-header, .l-gnavi, .l-overlay, bodyに対してクラス名を削除
      document
        .querySelectorAll(".l-header, .l-gnavi, .l-overlay, body")
        .forEach(function (target) {
          target.classList.remove("is-open", "is-show", "is-menuOpen") // 'is-open'と'is-show'と'is-menuOpen'を削除
        })
      // クラス名にjs-gnavi-linkがついていたら
      if (gnaviLink.classList.contains("js-gnavi-link")) {
        handleClick()
      }
    })
  })
}

function handleClick() {
  var innerElement = document.querySelector("#js-slider")
  innerElement.classList.add("is-scroll")
  // クリックしてから初めてスクロールが2秒止まったら、実行する
  var timer = null
  window.addEventListener("scroll", function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      innerElement.classList.remove("is-scroll")
    }, 100)
  })
}

// ラジオボタンの変更イベントを追加
function addRadioChangeListeners(firstPanelTopValue, panelScrollHeightValue) {
  const radios = document.querySelectorAll('[name="slideshow"]')
  radios.forEach(function (radio, index) {
    radio.addEventListener("change", function () {
      scrollToSection(index, firstPanelTopValue, panelScrollHeightValue)
    })
  })
}

// スクロールイベントを追加
function scrollToSection(index, firstPanelTopValue, panelScrollHeightValue) {
  const panels = document.querySelectorAll("[data-slider-panel]")
  const panelCount = panels.length

  if (index >= 0 && index < panelCount) {
    const scrollTop = firstPanelTopValue + panelScrollHeightValue * index

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    })
  }
}

function firstPanelTop() {
  // 1つ目のpanelのtopの位置を取得
  const newFunction = document.querySelector("#js-slider")
  const newFunctionInner = document.querySelector("[data-slider-in]")
  const newFunctionRect = newFunction.getBoundingClientRect()
  const newFunctionpaddingTopValue = parseFloat(
    window.getComputedStyle(newFunction).paddingTop
  )
  const newFunctionBorderTopValue = parseFloat(
    window.getComputedStyle(newFunction).borderTop
  )
  const newFunctionInnerTopValue = parseFloat(
    window.getComputedStyle(newFunctionInner).top
  )
  const firstPanelTop =
    window.scrollY +
    newFunctionRect.top +
    newFunctionpaddingTopValue +
    newFunctionBorderTopValue -
    newFunctionInnerTopValue
  return Math.round(firstPanelTop)
}

function panelScrollHeight() {
  const newFunction = document.querySelector("#js-slider")
  const newFunctionOffsetHeight = newFunction.offsetHeight
  const newFunctionpaddingTopValue = parseFloat(
    window.getComputedStyle(newFunction).paddingTop
  )
  const newFunctionpaddingBottomValue = parseFloat(
    window.getComputedStyle(newFunction).paddingBottom
  )
  const newFunctionBorderTopValue = parseFloat(
    window.getComputedStyle(newFunction).borderTop
  )
  const newFunctionInHeight =
    newFunctionOffsetHeight -
    newFunctionpaddingTopValue -
    newFunctionpaddingBottomValue -
    newFunctionBorderTopValue
  // data-slider-panelをすべて取得
  const panels = document.querySelectorAll("[data-slider-panel]")
  // data-slider-panelの数を取得
  const panelCount = panels.length
  // ひとつのpanelのスクロール量
  const panelScrollHeight = newFunctionInHeight / (panelCount + 1)
  return Math.round(panelScrollHeight)
}

function handlePanelVisibility(firstPanelTopValue, panelScrollHeightValue) {
  const panels = document.querySelectorAll("[data-slider-panel]")
  const panelCount = panels.length
  panels.forEach(function (panel, index) {
    // panelの頭が画面に入る前で、data-sp-showの終わりが画面に入ったら
    var shadowBoxes = document.querySelector("[data-sp-show]")
    const panelIsVisible =
      firstPanelTopValue + panelScrollHeightValue * index <= window.scrollY &&
      firstPanelTopValue + panelScrollHeightValue * (index + 1) > window.scrollY
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
      firstPanelTopValue + panelScrollHeightValue * index > window.scrollY
    ) {
      document.querySelector("#slide0" + (index + 1)).checked = true
      if (isInViewport(shadowBoxes)) {
        panel.classList.add("is-show")
      }
    } else if (
      index === panelCount - 1 &&
      firstPanelTopValue + panelScrollHeightValue * index < window.scrollY
    ) {
      document.querySelector("#slide0" + (index + 1)).checked = true
      if (isInViewport(shadowBoxes)) {
        panel.classList.add("is-show")
      }
    } else {
      panel.classList.remove("is-show")
    }
  })
}

function handlePoincoVisibility() {
  // 要素を取得する
  const newFunctionInner = document.querySelector("[data-slider-in]")
  var shadowBoxes = document.querySelector("[data-sp-show]")
  // 要素の位置情報を取得する
  const newFunctionInnerRect = newFunctionInner.getBoundingClientRect()
  if (isInViewportBottom(shadowBoxes)) {
    document.getElementById("js-poinco").classList.add("is-active")
  } else {
    document.getElementById("js-poinco").classList.remove("is-active")
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

// スクロールがスタートしたら、#js-scrollFixButtonからis-hiddenを削除します
function handleScrollFixButton() {
  const scrollFixButton = document.getElementById("js-scrollFixButton")
  if (window.scrollY === 0) {
    scrollFixButton.classList.add("is-hidden")
  } else {
    scrollFixButton.classList.remove("is-hidden")
  }
}
