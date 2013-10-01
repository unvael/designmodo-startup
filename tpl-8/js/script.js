
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


  // Sections height & scrolling
  $(window).resize(function() {
    var sH = $(window).height();
    $('section.section-1').css('height', (sH - $('header').outerHeight()) + 'px');
    // $('footer').css('height', (sH - $('.section-5').outerHeight()) + 'px');
    $('.section-5').css('height', sH/2 + 'px');
    $('footer').css('height', sH/2 + 'px');
    $('section:not(.section-1):not(.section-5)').css('height', sH + 'px');
  });

  $('.control-btn').on('click', function() {
    $.scrollTo($(this).closest('section').next(), {axis:'y', duration:500});
    return false;
  });


  // Faded elements
  if ($(window).width() > 480) {
    $('h3 img').each(function() {
      fadedEls($(this), 'h/2');
    });
  }


  // Carousel auto height
  $(window).resize(function() {
    $('.carousel').each(function() {
      var maxH = 0;
      $('.item', this).each(function() {
        var h = $(this).outerHeight();
        if (h > maxH) maxH = h;
      });
      $('.carousel-inner', this).css('height', maxH+'px');
    });
  });

  // Carousel start
  $('.carousel').carousel({interval: 4000});


  // section-2 ani
  if ($(window).width() > 480) {
    (function(el) {
      $(window).resize(function() {

        var wndHeight = $(window).height();
        var offsetTop = el.offset().top;

        el.data('aniInStart', offsetTop - wndHeight);
        el.data('aniInStop', offsetTop - wndHeight + wndHeight/3*2);

        el.data('aniOutStart', offsetTop + el.outerHeight() - wndHeight/3*2);
        el.data('aniOutStop', offsetTop + el.outerHeight());

      }).scroll(function() {

        var aniType = '';
        var factor = 1;
        var scrollTop = $(window).scrollTop();

        if (scrollTop < el.data('aniInStop')) {
          aniType = 'in';
          factor = -(el.data('aniInStart') - scrollTop)/(el.data('aniInStop') - el.data('aniInStart'));
        } else {
          aniType = 'out';
          factor = -(el.data('aniOutStart') - scrollTop)/(el.data('aniOutStop') - el.data('aniOutStart'));
        }

        factor = Math.min(1, Math.max(0, factor));

        if (aniType == 'in') {
          el.css('opacity', factor);
        } else {
          el.css('opacity', 1-factor);
        }

      });
    })($('.section-2'));
  }




  $(window).resize().scroll();

});
})(jQuery);
