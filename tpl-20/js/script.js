
function fadedEls(el, shift) {
  el.css('opacity', 0);

  switch (shift) {
  case undefined:
    shift = 0
    break;
  case 'h':
    shift = el.eq(0).outerHeight();
    break;
  case 'h/2':
    shift = el.eq(0).outerHeight() / 2;
    break;
  }

  $(window).resize(function() {
    if (!el.hasClass('ani-processed')) {
      el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
    }
  }).scroll(function() {
    if (!el.hasClass('ani-processed')) {
      if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
        el.addClass('ani-processed');
        el.each(function(idx) {
          $(this).delay(idx * 200).animate({opacity:1}, 800);
        });
      }
    }
  });
}


(function($) {
$(function() {

  // toggle nav panel
  $('.navbar .btn-navbar').unbind().click(function(){ $('html').toggleClass('nav-visible'); });
  $(document).bind('mousedown touchstart', function(ev) {
    if (!$(ev.target).closest('.nav-collapse, .navbar .btn-navbar').length) {
      $('html').removeClass('nav-visible');
    }
  });


  if (/msie/i.test(navigator.userAgent)) {
    $('img').each(function() {
      $(this).css({
        width: $(this).attr('width') + 'px',
        height: 'auto'
      });
    });
  }


  // Focus state for append/prepend inputs
  $('.input-prepend, .input-append').on('focus', 'input', function () {
    $(this).closest('.control-group, form').addClass('focus');
  }).on('blur', 'input', function () {
    $(this).closest('.control-group, form').removeClass('focus');
  });


  // section-1 height = window height
  $(window).resize(function() {
    $('.section-1').css('height', ($(this).height() - $('header').outerHeight()) +'px');
  });


  // Faded elements
  fadedEls($('.features .span7 img'), 'h');
  fadedEls($('.section-5 .row > *'), 'h/2');


  // Ani screen
  (function(el) {
    $('img:first-child', el).css('left', '-29.7%');

    $(window).resize(function() {
      if (!el.hasClass('ani-processed')) {
        el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
      }
    }).scroll(function() {
      if (!el.hasClass('ani-processed')) {
        if ($(window).scrollTop() >= el.data('scrollPos')) {
          el.addClass('ani-processed');
          $('img:first-child', el).animate({left:0}, 500);
        }
      }
    });
  })($('.screen'));




  $(window).resize().scroll();

});


$(window).load(function() {

  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
