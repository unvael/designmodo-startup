
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


  // Ani section-3
  (function(el) {
    $(window).resize(function() {
      if (!$('> img', el).hasClass('ani-processed')) {
        el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight() - parseInt(el.css('padding-bottom'), 10));
      }
    }).scroll(function() {
      if (!$('> img', el).hasClass('ani-processed')) {
        if ($(window).scrollTop() >= el.data('scrollPos')) {
          $('> img', el).addClass('ani-processed');
          $('.box', el).each(function(idx) {
            $(this).delay(idx * 200).animate({fake:0}, 1, 'linear', function() {$(this).addClass('ani-processed')});
          });
        }
      }
    });
  })($('.section-3'));

  // $('.section-3 .box').each(function() {
  //   (function(el) {
  //     $(window).resize(function() {
  //       if (!el.hasClass('ani-processed')) {
  //         el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
  //       }
  //     }).scroll(function() {
  //       if (!el.hasClass('ani-processed')) {
  //         if ($(window).scrollTop() >= el.data('scrollPos')) {
  //           el.addClass('ani-processed');
  //         }
  //       }
  //     });
  //   })($(this));
  // });


  // responsive
  $(window).resize(function() {
    // footer social-btns
    if ($(window).width() > 480) {
      $('footer .social-btns.mobile-processed').removeClass('mobile-processed').insertBefore('footer nav');
    } else {
      $('footer .social-btns:not(.mobile-processed)').addClass('mobile-processed').insertAfter('footer nav');
    }
  });




  $(window).resize().scroll();

});


$(window).load(function() {

  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
