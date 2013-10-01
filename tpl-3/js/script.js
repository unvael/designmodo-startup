
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




  $(window).resize().scroll();

});
})(jQuery);
