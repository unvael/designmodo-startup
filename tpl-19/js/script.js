
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


  // responsive
  $(window).resize(function() {
    // social-btns
    if ($(window).width() > 480) {
      $('footer .social-btns.mobile-processed').removeClass('mobile-processed').insertBefore('footer nav');
    } else {
      $('footer .social-btns:not(.mobile-processed)').addClass('mobile-processed').insertAfter('footer nav');
    }
  });




  $(window).resize().scroll();

});
})(jQuery);
