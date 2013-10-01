
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


  // Faded elements
  // $('.features img').each(function() {
  //   fadedEls($(this), 'h');
  // });
  fadedEls($('.features img'), 'h');


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


  $('.carousel').bind('slid', function() {
    $('.carousel-control', this).removeClass('disabled');
    if ($('.item.active', this).index() == 0) {
      $('.carousel-control.left', this).addClass('disabled');
    } else if ($('.item.active', this).index() == ($('.item', this).length - 1)) {
      $('.carousel-control.right', this).addClass('disabled');
    }
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
    $('#rocket-raw', $svg).attr('transform', 'translate(-400,400)');
    $('#SVGID_3_', $svg).attr('transform', 'translate(400,-400)');

    $(window).resize(function() {
      if (!el.hasClass('ani-processed')) {
        el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
      }
    }).scroll(function() {
      if (!el.hasClass('ani-processed')) {
        if ($(window).scrollTop() >= el.data('scrollPos')) {
          el.addClass('ani-processed');
          el.animate({opacity:1}, 600);
          $('#rocket-raw, #SVGID_3_', $svg).clearQueue().stop()
            .animate({svgTransform: 'translate(0,0)'}, {duration:600, easing:"easeInOutQuad"});
        }
      }
    });
  })($('.section-3 .span4'));




  $(window).resize().scroll();

});


$(window).load(function() {

  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
