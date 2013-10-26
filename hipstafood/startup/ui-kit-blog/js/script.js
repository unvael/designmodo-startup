
(function($) {
$(function() {

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


  // page-transitions
  $(window).resize(function() {
    $('.page-transitions').each(function() {
      var maxH = 0;
      $('.pt-page', this).css('height', 'auto').each(function() {
        var h = $(this).outerHeight();
        if (h > maxH) maxH = h;
      }).css('height', maxH+'px');
      $(this).css('height', maxH+'px');
    });
  });

  var pt1 = PageTransitions();
  pt1.init($('#pt-1'));

  $('#pt-1 .pt-control-prev').on('click', function() {
    pt1.gotoPage(28, 'prev');
    return false;
  });

  $('#pt-1 .pt-control-next').on('click', function() {
    pt1.gotoPage(29, 'next');
    return false;
  });


  var pt2 = PageTransitions();
  pt2.init($('#pt-2'));

  $('#pt-2 .pt-control-prev').on('click', function() {
    pt2.gotoPage(28, 'prev');
    return false;
  });

  $('#pt-2 .pt-control-next').on('click', function() {
    pt2.gotoPage(29, 'next');
    return false;
  });

});
})(jQuery);
