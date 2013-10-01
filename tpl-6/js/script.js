
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


  // section-3
  (function(el) {
    $('.span10 > img', el).css('opacity', 0);

    $(window).resize(function() {
      if (!el.hasClass('ani-processed')) {
        $('.span10 > img', el).css('top', $('.span10 > img', el).height());
        el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
      }
    }).scroll(function() {
      if (!el.hasClass('ani-processed')) {
        if ($(window).scrollTop() >= el.data('scrollPos')) {
          el.addClass('ani-processed');
          $('.span10 > img', el).animate({top:0, opacity:1}, 500);
        }
      }
    });
  })($('.section-3'));


  // Faded elements
  fadedEls($('.section-4 .span5 img'), 'h/2');


  // Parallax
  $('.section-1, .section-6').each(function() {
    $(this).parallax('50%', 0.3, true);
  });


  // responsive
  $(window).resize(function() {
    // features
    if ($(window).width() > 480) {
      $('.features > .mobile-processed').each(function() {
        $(this).removeClass('mobile-processed').find('.img').insertAfter($('.description-top', this));
      });
    } else {
      $('.features > :not(.mobile-processed)').each(function() {
        $(this).addClass('mobile-processed').find('.img').insertBefore($('.description-top', this));
      });
    }
  });





  $(window).resize().scroll();

});


$(window).load(function() {

  $(window).resize().scroll();
  setTimeout(function(){ window.scrollBy(0, 1) }, 100); // force repaint page (parallax img bug fix)

}); 
})(jQuery);
