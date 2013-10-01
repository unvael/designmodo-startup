
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


  // Init tooltips
  $('.section-6 .box').tooltip();




  $(window).resize().scroll();

});


$(window).load(function() {

  $('html').addClass('loaded');

  $(window).resize().scroll();

});
})(jQuery);
