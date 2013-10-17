
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
  fadedEls($('.content-5 > .container > img:first'), 'h/2');
  $('.content-5 > .container > .row').each(function() {
    fadedEls($(this), 100);
  });


  // section-4
  (function(el) {
    // Ani placeholder
    var placeholder = $('<div class="ani-placeholder" />');
    placeholder.text(el.attr('placeholder'));

    el.css('position', 'relative').attr('placeholder', '').before(placeholder).bind('keydown keyup input', function() {
      console.log($(this).val());
      if ($(this).val() == '') {
        placeholder.fadeIn('normal');
      } else {
        placeholder.fadeOut('normal');
      }
    });


    // Autofocus
    $(window).resize(function() {
      el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
    }).scroll(function() {
      if ($(window).scrollTop() >= el.data('scrollPos')) {
        el.focus();
      }
    });
  })($('.content-13 input[type="text"]'));


  // PageTransitions
  var pt = PageTransitions();
  pt.init('#h-17-pt-1');

  $('.pt-controls .pt-indicators > *').on('click', function() {
    if ($(this).hasClass('active')) return false;

    var curPage = $(this).parent().children('.active').index();
    var nextPage = $(this).index();
    var ani = 44;
    if (curPage < nextPage) {
      ani = 45;
    }

    pt.gotoPage(ani, nextPage);
    $(this).addClass('active').parent().children().not(this).removeClass('active');
    return false;
  });

  $(window).resize(function() {
    $('.header-17-sub .page-transitions').each(function() {
      var maxH = 0;
      $('.pt-page', this).css('height', 'auto').each(function() {
        var h = $(this).outerHeight();
        if (h > maxH) maxH = h;
      }).css('height', maxH+'px');
      $(this).css('height', maxH+'px');
    });
  });

  $(window).resize().scroll();

});
})(jQuery);
