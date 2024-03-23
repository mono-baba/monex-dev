$(window).on("load", function () {
  // スライダーの初期設定
  const verticalSlider = $("#js-vertical-slider")
  const sliderItems = $("[data-slider]")
  const sliderDimensions = calculateSliderDimensions(verticalSlider)
  let lastScrollTop = 0
  let lastActiveIndex = -1
  removePoincoMovement()

  $(window).scroll(function () {
    const { scrollPosition, activeIndex } = calculateScrollMetrics(
      sliderDimensions,
      lastScrollTop
    )
    if (activeIndex !== lastActiveIndex) {
      // スクロール方向に基づいてアクティブ状態を更新
      updateItemsBasedOnScrollDirection(
        sliderItems,
        activeIndex,
        lastScrollTop < scrollPosition
      )
      lastActiveIndex = activeIndex
      lastScrollTop = scrollPosition
    }
    removePoincoMovement()
    addActiveClass()
  })

  $("[data-burette]").on("click", function () {
    var index = $(this).index() + 1 // nth-childは1から始まるので、indexに1を加えます
    var scrollAmount = ($("#js-vertical-slider").height() / 3) * index
    $("html, body").animate({ scrollTop: scrollAmount }, 400)
    $("[data-burette]").removeClass("is-active")
    $(this).addClass("is-active")
  })
})

// スライダーの寸法を計算する関数
function calculateSliderDimensions(verticalSlider) {
  const verticalSliderTop = verticalSlider.offset().top
  const windowHeight = $(window).height()
  return { verticalSliderTop, windowHeight }
}

// スクロールメトリクスを計算する関数
function calculateScrollMetrics(
  { verticalSliderTop, windowHeight },
  lastScrollTop
) {
  const scrollPosition = $(window).scrollTop()
  const scrollHeight = scrollPosition + windowHeight - verticalSliderTop
  let activeIndex = Math.floor(scrollHeight / (2 * windowHeight))
  activeIndex = adjustActiveIndex(activeIndex, $("[data-slider]").length)
  return { scrollPosition, activeIndex }
}

// アクティブインデックスを調整する関数
function adjustActiveIndex(activeIndex, itemsLength) {
  return activeIndex >= itemsLength ? itemsLength - 1 : activeIndex
}

// スライダーの高さを設定する関数
function setSliderHeight(items, slider, height) {
  const totalHeight = 2 * height * items.length
  slider.css("height", totalHeight + "px")
}

// スクロール方向に基づいてアイテムの表示を更新する関数
function updateItemsBasedOnScrollDirection(
  items,
  activeIndex,
  isScrollingDown
) {
  items.each(function (index) {
    // スクロール方向によってクラスを追加・削除
    if (
      (index < activeIndex && isScrollingDown) ||
      (index > activeIndex && !isScrollingDown)
    ) {
      $(this)
        .removeClass("is-show")
        .addClass(isScrollingDown ? "is-up" : "is-down")
    } else if (index === activeIndex) {
      $(this).addClass("is-show").removeClass("is-up is-down")
    }
  })
}

// ポインコの動きを設定する関数
function setPoincoMovement() {
  // 画面の高さの半分を取得
  var windowHeight = $(window).height() / 2
  // スクロール位置を取得
  var scrollPosition = $(window).scrollTop() + windowHeight
  // 特定の要素の位置（この例では、要素のIDが`js-vertical-slider-title`）
  var elementPosition = $("#js-vertical-slider-title").offset().top

  // 特定の要素が画面中央に来たかどうかをチェック
  if (
    scrollPosition > elementPosition &&
    scrollPosition <
      elementPosition + $("#js-vertical-slider-title").outerHeight()
  ) {
    // 条件を満たしたら、js-poinco-youngとjs-poinco-oldにクラスを追加
    $("#js-poinco-young").addClass("is-active")
    $("#js-poinco-old").addClass("is-active")
  }
}

// ポイントミニが画面外に出たら、クラスを削除する関数
function removePoincoMovement() {
  var windowHeight = $(window).height()
  var scrollAmount = $(window).scrollTop()
  var elementOffset = $(".vertical-slider li").offset().top
  var elementHeight = $(".vertical-slider li").height()
  var elementHeightPlus = $(".vertical-slider li").height() + 170

  // 要素の上端がビューポートの下端より上にあり、かつ要素の下端がビューポートの上端より下にあるかチェック
  if (
    scrollAmount + windowHeight > elementOffset + elementHeightPlus / 2 &&
    scrollAmount < elementOffset + elementHeight
  ) {
    // 要素がビューポート内にある場合、クラスを追加
    $("#js-poinco-young").addClass("is-active")
    $("#js-poinco-old").addClass("is-active")
  } else {
    // 要素がビューポート外にある場合、クラスを削除
    $("#js-poinco-young").removeClass("is-active")
    $("#js-poinco-old").removeClass("is-active")
  }
}

// is-showクラスがついているliのindexと同じindexのburetteにis-activeクラスをつける
function addActiveClass() {
  var index = $(".vertical-slider li.is-show").index()
  $("[data-burette]").removeClass("is-active")
  $("[data-burette]").eq(index).addClass("is-active")
}
