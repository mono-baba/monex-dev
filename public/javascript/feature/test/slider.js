$(window).on("load", function () {
  const verticalSlider = $("#js-vertical-slider")
  const sliderItems = $("[data-slider]")
  const verticalSliderTop = verticalSlider.offset().top
  const windowHeight = $(window).height()

  // #js-vertical-sliderに高さを設定
  setSliderHeight(sliderItems, verticalSlider, windowHeight)

  $(window).scroll(function () {
    const scrollPosition = $(window).scrollTop() // 現在のスクロール位置
    const scrollHeight = scrollPosition + windowHeight - verticalSliderTop // #js-vertical-sliderがビューポートの上端に達してからのスクロール量
    var activeIndex = Math.floor(scrollHeight / (2 * windowHeight)) // アクティブなアイテムのインデックスを計算（200vh毎に要素を切り替える）
    // 最大インデックス値をsliderItems.length - 1に制限
    if (activeIndex >= sliderItems.length) {
      activeIndex = sliderItems.length - 1 // 最後のアイテムを保持
    }
    updateActiveItem(sliderItems, activeIndex) // アイテムの表示を更新する
  })

  function updateActiveItem(items, activeIndex) {
    items.each(function (index) {
      $(this).toggleClass("is-show", index === activeIndex)
    })
  }

  function setSliderHeight(items, slider, height) {
    const totalHeight = 2 * height * items.length // 各アイテムに200vhをかけた合計高さ
    slider.css("height", totalHeight + "px") // 計算された高さを適用
  }
})
