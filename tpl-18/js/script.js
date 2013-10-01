
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

window.isRetina = (function() {
  var root = (typeof exports == 'undefined' ? window : exports);

  var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";

  if (root.devicePixelRatio > 1)
    return true;

  if (root.matchMedia && root.matchMedia(mediaQuery).matches)
    return true;

  return false;
})();


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


  // Parallax
  $('.section-1').parallax('50%', 0.3, true);
  $('.section-3 .img').parallax('50%', 0.15, true);


  // Features
  $(window).resize(function() {
    $('.features').each(function() {
      var maxH = 0;
      $('.features-body', this).css('height', 'auto').each(function() {
        var h = $(this).outerHeight();
        if (h > maxH) maxH = h;
      }).css('height', maxH+'px');
      $('.features-bodies', this).css('height', maxH+'px');
    });
  });

  $('.features .features-header .box').click(function() {
    $(this).addClass('active').parent().children().not(this).removeClass('active');
    $(this).closest('.features').find('.features-body').removeClass('active').eq($(this).index()).addClass('active');
    return false;
  });


  // Faded elements
  fadedEls($('.section-3 .img'), $('.section-3 .img').outerHeight()/3*2);


  // section-4 ani board
  (function(el) {
    if (isRetina) {
      $('.img img', el).each(function() {
        $(this).attr('src', $(this).attr('src').replace(/.png/i, '@2x.png'));
      });
    }

    $(window).resize(function() {
      if (!el.hasClass('ani-processed')) {
        el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight() - parseInt(el.css('padding-bottom'), 10));
      }
    }).scroll(function() {
      if (!el.hasClass('ani-processed')) {
        if ($(window).scrollTop() >= el.data('scrollPos')) {
          el.addClass('ani-processed');
        }
      }
    });
  })($('.section-4'));


  // Scrolling
  $('.control-btn').on('click', function() {
    $.scrollTo($(this).closest('section').next(), {axis:'y', duration:500});
    return false;
  });


  // responsive
  $(window).resize(function() {
    // section-1
    if ($(window).width() > 480) {
      $('.section-1').css('height', '');
    } else {
      $('.section-1').css('height', $(window).height());
    }
  });




  $(window).resize().scroll();

});


$(window).load(function() {

  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
