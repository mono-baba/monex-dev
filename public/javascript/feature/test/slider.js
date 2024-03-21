$(window).on("load", function () {
  // スライダーの初期設定
  const verticalSlider = $("#js-vertical-slider")
  const sliderItems = $("[data-slider]")
  const sliderDimensions = calculateSliderDimensions(verticalSlider)
  let lastScrollTop = 0
  let lastActiveIndex = -1

  // スライダーの高さを設定
  // setSliderHeight(sliderItems, verticalSlider, sliderDimensions.windowHeight)

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
