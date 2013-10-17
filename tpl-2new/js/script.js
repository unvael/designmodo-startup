
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


  // header
  var s1 = $('.header');
  var s1StopScroll = s1.outerHeight() - 70; // number - visible part of .header
  var antiflicker = $('<div style="position: fixed; z-index: 25; left: 0; top: 0; width: 100%; height: 70px; background: #fff;" />');
  s1.before(antiflicker);
  var s1Placeholder = $('<div />');
  s1Placeholder.hide().height(s1.outerHeight());
  s1.after(s1Placeholder);
  var s1FadedEls = $('.container', s1);
  s1FadedEls.each(function() {
    $(this).data('origOpacity', $(this).css('opacity'));
  });

  var header = $('header');
  var headerAniStartPos = s1.outerHeight() - 120;
  var headerAniStopPos = s1StopScroll;

  $(window).resize(function() {
    s1Placeholder.height(s1.outerHeight());
    headerAniStartPos = s1.outerHeight() - 120;
    s1StopScroll = s1.outerHeight() - 70; // number - visible part of .header
  }).scroll(function() {
    var opacity = (s1StopScroll - $(window).scrollTop()) / s1StopScroll;
    opacity = Math.max(0, opacity); // 0..1
    s1FadedEls.each(function() {
      $(this).css('opacity', $(this).data('origOpacity') * opacity);
    });

    antiflicker.css('background-color', s1.css('background-color'));

    if ($(window).scrollTop() > s1StopScroll) {
      if (!s1.hasClass('fixed')) {
        s1.addClass('fixed').css({
          position: 'fixed',
          top: -s1StopScroll
        });

        s1Placeholder.show();
      }
    } else {
      if (s1.hasClass('fixed')) {
        s1.removeClass('fixed').css({
          position: '',
          top: ''
        });

        s1Placeholder.hide();
      }
    }


    var headerZoom = -(headerAniStartPos - $(window).scrollTop())/(headerAniStopPos - headerAniStartPos);
    headerZoom = 1 - Math.min(1, Math.max(0, headerZoom));

    $('.navbar', header).css({'top': -6 + ((22+6) * headerZoom)});
    $('.navbar .brand', header).css({'font-size': 18 + ((25-18) * headerZoom), 'padding-top': 30 + ((23-30) * headerZoom)});
    $('.navbar .brand img', header).css({'width': 25 + ((50-25) * headerZoom), 'margin-top': -1 + ((-10+1) * headerZoom)});
    $('.navbar .btn-navbar', header).css({'margin-top': 30 + ((28-30) * headerZoom)});
    if ($(window).width() > 979) {
      $('.navbar .nav > li > a', header).css({'font-size': 12 + ((18-12) * headerZoom), 'padding-top': 31 + ((25-31) * headerZoom)});
    } else {
      $('.navbar .nav > li > a', header).css({'font-size': '', 'padding-top': ''});
    }

    if (headerZoom == 0) {
      $('.navbar .brand img', header).attr('src', './img/logo-small@2x.png');
    } else {
      $('.navbar .brand img', header).attr('src', './img/logo@2x.png');
    }
  });


  // features ani
  $('.features .box > img').each(function() {
    fadedEls($(this), 'h');
  });


  // responsive
  $(window).resize(function() {
    // social-btns
    if ($(window).width() > 480) {
      $('footer .buy-btn.mobile-processed').removeClass('mobile-processed').insertAfter('footer nav');
    } else {
      $('footer .buy-btn:not(.mobile-processed)').addClass('mobile-processed').insertBefore('footer nav');
    }
  });



  $(window).resize().scroll();

});
})(jQuery);
