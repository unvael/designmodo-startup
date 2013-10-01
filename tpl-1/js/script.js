
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


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  window.mobile = true;
} else {
  window.mobile = false;
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


  // PageTransitions
  var pt = PageTransitions();
  pt.init('#pt-main');

  $('#pt-main .control-prev').on('click', function() {
    pt.gotoPage(21, 'prev');
    return false;
  });

  $('#pt-main .control-next').on('click', function() {
    pt.gotoPage(22, 'next');
    return false;
  });


  // header
  var s1 = $('.header');
  var s1StopScroll = s1.outerHeight() - 70; // number - visible part of .header
  var antiflicker = $('<div style="position: fixed; z-index: 25; left: 0; top: 0; width: 100%; height: 70px; background: #fff;" />');
  s1.before(antiflicker);
  var s1Placeholder = $('<div />');
  s1Placeholder.hide().height(s1.outerHeight());
  s1.after(s1Placeholder);
  var s1FadedEls = $('.background, .caption, .controls > *', s1);
  s1FadedEls.each(function() {
    $(this).data('origOpacity', $(this).css('opacity'));
  });

  var header = $('header');
  var headerAniStartPos = s1.outerHeight() - 120;
  var headerAniStopPos = s1StopScroll;

  $(window).scroll(function() {
    var opacity = (s1StopScroll - $(window).scrollTop()) / s1StopScroll;
    opacity = Math.max(0, opacity); // 0..1
    s1FadedEls.each(function() {
      $(this).css('opacity', $(this).data('origOpacity') * opacity);
    });

    antiflicker.css('background-color', $('.pt-page-current', s1).css('background-color'));

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
      $('.navbar .nav > li > a', header).css({'font-size': 12 + ((14-12) * headerZoom)});
    } else {
      $('.navbar .nav > li > a', header).css({'font-size': ''});
    }

    if (headerZoom == 0) {
      $('.navbar .brand img', header).attr('src', './img/logo-small@2x.png');
    } else {
      $('.navbar .brand img', header).attr('src', './img/logo@2x.png');
    }
  });


  // features ani
  fadedEls($('.features').parent().find('h3'), 'h');
  $('.features > *').each(function() {
    fadedEls($(this), 150);
  });


  // SWTICH SVG TO PNG
  if ((!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) || (window.mobile)) {
    $('.svg').remove();
    $('.nosvg').attr('style', 'display:block;');
  }


  // section-3 ani
  (function(el) {
    el.css('opacity', 0);
    $svg = $('#spaceship', el);
    $('#rocket-raw', $svg).attr('transform', 'translate(-100,100)');
    $('#rocketmask1', $svg).attr('transform', 'translate(100,-100)');

    $(window).resize(function() {
      if (!el.hasClass('ani-processed')) {
        el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
      }
    }).scroll(function() {
      if (!el.hasClass('ani-processed')) {
        if ($(window).scrollTop() >= el.data('scrollPos')) {
          el.addClass('ani-processed');
          el.animate({opacity:1}, 600);
          $('#rocket-raw, #rocketmask1', $svg).clearQueue().stop()
            .animate({svgTransform: 'translate(0,0)'}, {duration:800, easing:"easeInOutQuad"});
        }
      }
    });
  })($('.section-3 .span6 + .span6'));


  // responsive
  $(window).resize(function() {
    // input-append auto width
    $('footer .input-append input[type="text"]').each(function() {
      var controlGroup = $(this).closest('.control-group');

      if ($(window).width() > 480) {
        $(this).css('width', '');
      } else {
        $(this).css('width', controlGroup.outerWidth() - controlGroup.find('.input-append .btn').outerWidth());
      }
    });

    // social-btns
    if ($(window).width() > 480) {
      $('footer .social-btns.mobile-processed').removeClass('mobile-processed').appendTo('footer > .container > .row > .span3:last');
    } else {
      $('footer .social-btns:not(.mobile-processed)').addClass('mobile-processed').insertBefore('footer nav');
    }
  });




  $(window).resize().scroll();

});
})(jQuery);
