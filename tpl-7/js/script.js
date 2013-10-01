
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


  // Sections height = window height
  $(window).resize(function() {
    var maxH = 0;
    $('section').css('height', $(this).height()+'px').each(function() {
      var h = $(this).outerHeight();
      if (h > maxH) maxH = h;
    }).css('height', maxH+'px');
    $('.page-transitions').css('height', maxH+'px');
  });


  // PageTransitions
  var pt = PageTransitions();
  pt.init('#pt-main');

  $('.pt-control-prev').on('click', function() {
    pt.gotoPage(55, 'prev');
    return false;
  });

  $('.pt-control-next').on('click', function() {
    pt.gotoPage(54, 'next');
    return false;
  });




  $(window).resize().scroll();

});


$(window).load(function() {

  // Fade in "next page" button
  $('#pt-main .pt-controls > :eq(1)').css('opacity', 0);
  setTimeout(function() {
    $('#pt-main .pt-controls > :eq(1)').animate(
      {opacity: 1},
      {duration: 400, complete: function() {$(this).css('opacity', '')}});
  }, 250);


  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
