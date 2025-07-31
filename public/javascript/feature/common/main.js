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
  smoothscroll();
  accordion();
  accordionFaq();
  tabSectionPanel();
  fixedPageTop()
if(location.search === '?purchase=1'){
$('.js-getMovie').eq(1).click();
} else if(location.search === '?purchase=2'){
$('.js-getMovie').eq(2).click();
} else {
$('.js-getMovie').eq(0).click();}
});


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