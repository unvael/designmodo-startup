
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


  // section-1 height = window height
  $(window).resize(function() {
    $('.section-1').css('height', $(this).height()+'px');
  });


  // PageTransitions
  var pt = PageTransitions();
  pt.init('#pt-main');

  $('#pt-main .pt-control-prev').on('click', function() {
    pt.gotoPage(51, 'prev');
    return false;
  });

  $('#pt-main .pt-control-next').on('click', function() {
    pt.gotoPage(50, 'next');
    return false;
  });


  // Scroll button
  $('.scroll-btn a').on('click', function() {
    $.scrollTo($('.section-2'), {axis:'y', duration:500});
    return false;
  });


  // Ani section-4
  (function(el) {
    $(window).resize(function() {
      if (!el.hasClass('ani-processed')) {
        el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight() - parseInt(el.css('padding-bottom'), 10) -200);
      }
    }).scroll(function() {
      if (!el.hasClass('ani-processed')) {
        if ($(window).scrollTop() >= el.data('scrollPos')) {
          el.addClass('ani-processed');
        }
      }
    });
  })($('.section-4'));


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




  $(window).resize().scroll();

});


$(window).load(function() {

  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
