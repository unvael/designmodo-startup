
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
          $(this).delay(idx * 200).animate({opacity:1}, 600);
        });
      }
    }
  });
}


(function($) {
$(function() {

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
    $('.section-1').css('height', $(this).height()+'px');
  });


  // Parallax
  $('.section-1').parallax('50%', 0.3, true);
  $('.section-3').parallax('50%', 0.3, true);


  // Faded elements
  $('.features [class*="box-"], .section-4 .span5 img, .section-6 .span5 img').each(function() {
    fadedEls($(this), 'h');
  });


  // Scrolling
  $('.control-btn').on('click', function() {
    $.scrollTo($(this).closest('section').next(), {axis:'y', duration:500});
    return false;
  });




  $(window).resize().scroll();

});


$(window).load(function() {

  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
