
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


  // Set sidebar height
  $(window).resize(function() {
    var h = 0;

    $('body > section:not(.section-1)').each(function() {
      h += $(this).outerHeight();
    });

    $('.sidebar-content').css('height', h+'px');
  });


  // Parallax
  $('.section-1').parallax('50%', 0.3, true);


  // Faded elements
  fadedEls($('.section-3 .span7.offset1 img'), $('.section-3 .span7.offset1 img').outerHeight()/3*2);
  // $('.section-3 .box [class*="fui-"]').each(function() {
  //   fadedEls($(this), 'h');
  // });
  fadedEls($('.section-3 .box [class*="fui-"]'), 'h');
  fadedEls($('.section-4 .span3 img'), 'h');




  $(window).resize().scroll();

});


$(window).load(function() {

  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
