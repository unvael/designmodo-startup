
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


  // subscribe-form
  (function(el) {
    // Ani placeholder
    var placeholder = $('<div class="ani-placeholder" />');
    placeholder.text(el.attr('placeholder'));

    el.css('position', 'relative').attr('placeholder', '').before(placeholder).bind('keydown keyup input', function() {
      if ($(this).val() == '') {
        placeholder.fadeIn('normal');
      } else {
        placeholder.fadeOut('normal');
      }
    });


    // Autofocus
    $(window).resize(function() {
      el.eq(0).data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
    }).scroll(function() {
      if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
        el.focus();
      }
    });
  })($('.subscribe-form input[type="text"]'));


  // Parallax
  $('.section-1').parallax('50%', 0.3, true);


  // features ani
  $('.features > *').each(function() {
    var el = $(this);

    $(window).resize(function() {

      var wndHeight = $(window).height();
      var offsetTop = el.offset().top;

      el.data('aniInStart', offsetTop - wndHeight + el.outerHeight()/4);
      el.data('aniInStop', offsetTop - wndHeight + wndHeight/2);

      el.data('aniOutStart', offsetTop + el.outerHeight() - wndHeight/2);
      el.data('aniOutStop', offsetTop + el.outerHeight() - el.outerHeight()/4);

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
  });




  $(window).resize().scroll();

});


$(window).load(function() {

  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
