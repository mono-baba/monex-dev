$(window).on('load', function(){
  'use strict';
  if($(window).innerWidth() >= 768 ){
    fixedMenu();
  } else {
    menuOpen();
    dropDownMenu();
  }
});

$(window).on('load', function(){
  'use strict';
  mainImg();
  smoothscroll();
  accordion();
  accordionFaq();
  tabPanel();
  tabSectionPanel();
  fixedPageTop()
if(location.search === '?purchase=1'){
$('.js-getMovie').eq(1).click();
} else if(location.search === '?purchase=2'){
$('.js-getMovie').eq(2).click();
} else {
$('.js-getMovie').eq(0).click();}
});

function mainImg(){
  'use strict';
  var minCount = 0;
  var mainSlide = $('.js-mainSlide');
  var maxCount = mainSlide.length-1;
  var currentCount = 0;
  var fadeTime = 800;
  var zoomTime = 6000 + fadeTime;
  var slideCurrent = $('.js-slideCurrent');
  var slideTotal = $('.js-slideTotal');

  if(maxCount > 1){
    var zoom = $('.m-mainImg').hasClass('is-zoom');
    var autoPlay = $('.m-mainImg').hasClass('is-autoPlay');
    slideTotal.text(maxCount+1);
    mainSlide.eq(0).addClass('is-show');
    if( zoom === true ){
      mainSlide.eq(0).delay(fadeTime).queue(function(){
        $(this).addClass('is-zoom').dequeue();
      });
    }
    if( autoPlay === true ){
      var timer = setInterval(autoSlide, zoomTime);
    }
    $('.js-slidePrev').on('click', function(){
      if(currentCount === minCount){
        currentCount = maxCount;
      } else {
        currentCount --;
      }
      slide(currentCount);
      if( autoPlay === true ){
        clearInterval(timer);
        timer = setInterval(autoSlide, zoomTime);
      }
    });
    $('.js-slideNext').on('click', function(){
      if(currentCount === maxCount){
        currentCount = minCount;
      } else {
        currentCount ++;
      }
      slide(currentCount);
      if( autoPlay === true ){
        clearInterval(timer);
        timer = setInterval(autoSlide, zoomTime);
      }
    });
  }

  function slide(){
    slideCurrent.text(currentCount+1);
    mainSlide.each(function(){
      if($(this).index() === currentCount){
        $(this).addClass('is-show');
        if( zoom === true ){
          $(this).delay(fadeTime).queue(function(){
            $(this).addClass('is-zoom').dequeue();
          });
        }
      } else {
        $(this).removeClass('is-show');
        if( zoom === true ){
          $(this).delay(fadeTime).queue(function(){
            $(this).removeClass('is-zoom').dequeue();
          });
        }
      }
    });
  }

  function autoSlide(){
    if(currentCount === maxCount){
      currentCount = minCount;
    } else {
      currentCount ++;
    }
    slide(currentCount);
  }
}

function smoothscroll(){
  'use strict';
  var speed = 400;
  $('.js-pageTop').click(function() {
    var position = 0;
    var body = 'body';
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1 || userAgent.indexOf("firefox") > -1 ) { /*IE6.7.8.9.10.11*/
      body = 'html';
    }
    $('html,body').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
  $('.js-scroll').click(function() {
    var positionContent = $($(this).attr('href')).offset().top;
    var body = 'body';
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1 || userAgent.indexOf("firefox") > -1 ) { /*IE6.7.8.9.10.11*/
      body = 'html';
    }
    $('html,body').animate({
      scrollTop: positionContent
    }, speed, 'swing');
    return false;
  });
}

function fixedMenu(){
  'use strict';
  var startPos = 0;
  var winScrollTop = 0;
  $(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
      if(winScrollTop <= 160){
        $('.js-fixedMenu').removeClass('is-stay').removeClass('is-fixed');
      } else {
        $('.js-fixedMenu').addClass('is-stay').removeClass('is-fixed');
      }
    } else {
      if(winScrollTop <= 68){
        $('.js-fixedMenu').removeClass('is-stay').removeClass('is-fixed');
      } else {
        $('.js-fixedMenu').addClass('is-fixed').removeClass('is-stay');
      }
    }
    startPos = winScrollTop;

//    if (winScrollTop >= 160) {
//      $('.js-fixed-button').addClass('is-show');
//    } else {
//      $('.js-fixed-button').removeClass('is-show');
//    }
  });
}

function menuOpen(){
  'use strict';
  $('.js-menuToggle').on( 'click', function(){
    $('body').toggleClass('is-menuOpen');
    $('.l-gnavi:not(".-migration")').toggleClass('is-open');
    $('.l-overlay').toggleClass('is-show');
    $('.l-header').toggleClass('is-open');
    return false;
  });
}

function dropDownMenu(){
  'use strict';
  if($('.js-dropdownMenu').length > 0){
    $('.js-dropdownMenu').on( 'click', function(){
      $(this).next('.subBox').toggleClass('is-show');
      $(this).toggleClass('is-open');
      return false;
    });
  }
}

function accordion(){
  'use strict';
  if($('.js-accordionBtn').length > 0){
    $('.js-accordionBtn').on( 'click', function(){
      $(this).parent().prev('.js-accordionBody').slideToggle();
      $(this).toggleClass('is-open');
      $(this).next().toggleClass('is-open');
      $(this).prev().toggleClass('is-open');
      return false;
    });
  }
}

function accordionFaq(){
  'use strict';
  if($('.js-accordionFaqBtn').length > 0){
    $('.js-accordionFaqBtn').on( 'click', function(){
      $(this).next('.js-accordionFaqBody').slideToggle();
      $(this).toggleClass('is-open');
      return false;
    });
  }
}

function tabPanel(){
  'use strict';
  if($('.js-tabBtn').length > 0){
    $('.js-tabBtn').on( 'click', function(){
      $(this).prev('.js-tabBtn').removeClass('is-active');
      $(this).next('.js-tabBtn').removeClass('is-active');
      $(this).addClass('is-active');
      $(this).parent().parent().children('.js-tabBox').hide();
      $(this).parent().parent().children('.js-tabBox').eq($(this).index()).fadeIn();
      return false;
    });
    if(location.search === '?purchase=nisa'){
      $('.js-tabNisaBtn').eq(0).removeClass('is-active');
      $('.js-tabNisaBtn').eq(1).addClass('is-active');
      $('.js-tabNisa').eq(0).hide();
      $('.js-tabNisa').eq(1).show();
    }
  }
  if($('.js-tabBtn-child').length > 0){
    $('.js-tabBtn-child').on( 'click', function(){
      $(this).prev('.js-tabBtn-child').removeClass('is-active');
      $(this).next('.js-tabBtn-child').removeClass('is-active');
      $(this).addClass('is-active');
      $(this).parent().parent().children('.js-tabBox-child').hide();
      $(this).parent().parent().children('.js-tabBox-child').eq($(this).index()).fadeIn();
      return false;
    });
  }
}

function tabSectionPanel(){
  'use strict';
  if($('.js-tabSectionBtn').length > 0){
    $('.js-tabSectionBtn').on( 'click', function(){
      $('.js-tabSectionBtn').parent('.btn').removeClass('is-active');
      $(this).parent('.btn').addClass('is-active');
      $('.js-tabSectionBox').hide();
      $('.js-tabSectionBox').eq($(this).parent('.btn').index()).fadeIn();
      return false;
    });
  }
}

function fixedPageTop() {
  'use strict';

  const scrollTopBtn = $('.js-fixedPageTop');
  const footer = $('.l-disclaimer').length > 0 ? $('.l-disclaimer') : $('.l-footer');

  // ボタンが存在しない場合は、処理を中断
  if (scrollTopBtn.length === 0) {
    return;
  }

  // スクロールイベントハンドラ
  $(window).on('scroll', function() {
    const winScrollTop = $(this).scrollTop();
    const winHeight = $(this).height();

    // ボタンの表示切り替え
    if (winScrollTop >= 200) {
      scrollTopBtn.addClass('is-show');
    } else {
      scrollTopBtn.removeClass('is-show');
    }

    // フッター到達時のスタイル変更

    const footerTop = footer.offset().top;
    if (winScrollTop + winHeight > footerTop) {
      scrollTopBtn.addClass('is-change');
    } else {
      scrollTopBtn.removeClass('is-change');
    }
  });
}