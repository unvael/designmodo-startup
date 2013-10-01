
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
          $(this).delay(idx * 200).animate({opacity:1}, 1000, function() {$(this).css('opacity', '')});
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


  // replace project img to background-image
  $('.project .photo img').each(function() {
    $(this).hide().parent().css('background-image', 'url("' + this.src + '")');
  });


  // Scroll button
  $('footer .scroll-top').on('click', function() {
    $.scrollTo(0, {axis:'y', duration:500});
    return false;
  });


  // Search form
  var navbar = $('header .navbar');

  $('.search', navbar).click(function() {
    if (!navbar.hasClass('search-mode')) {
      navbar.addClass('search-mode');
      setTimeout(function(){$('header .navbar .navbar-search input[type="text"]').focus();}, 1000);
    } else {
      // commented for demo
      // $('.navbar-search', navbar).submit();
    }
    return false;
  });

  $('.close-search', navbar).click(function() {
    navbar.removeClass('search-mode');
    return false;
  });

  // Ani placeholder
  var placeholder = $('<div class="ani-placeholder" />');
  placeholder.text($('.navbar-search input[type="text"]', navbar).attr('placeholder'));

  $('.navbar-search input[type="text"]', navbar).css('position', 'relative').attr('placeholder', '').before(placeholder).bind('keydown keyup input', function() {
    if ($(this).val() == '') {
      placeholder.fadeIn('normal');
    } else {
      placeholder.fadeOut('normal');
    }
  });


  // PageTransitions
  $(window).resize(function() {
    var maxH = 0;
    $('.section-1 .pt-page').css('height', 'auto').each(function() {
      var h = $(this).outerHeight();
      if (h > maxH) maxH = h;
    }).css('height', maxH+'px');
    $('.section-1 .page-transitions').css('height', maxH+'px');

    var maxH = 0;
    $('.section-3 .pt-page').css('height', 'auto').each(function() {
      var h = $(this).outerHeight();
      if (h > maxH) maxH = h;
    }).css('height', maxH+'px');
    $('.section-3 .page-transitions').css('height', maxH+'px');
  });

  var pt1 = PageTransitions();
  pt1.init('#pt-1');

  $('#pt-1 .pt-control-prev').on('click', function() {
    pt1.gotoPage(28, 'prev');
    return false;
  });

  $('#pt-1 .pt-control-next').on('click', function() {
    pt1.gotoPage(29, 'next');
    return false;
  });

  var pt2 = PageTransitions();
  pt2.init('#pt-2');

  $('#pt-2 .pt-control-prev').on('click', function() {
    pt2.gotoPage(33, 'prev');
    return false;
  });

  $('#pt-2 .pt-control-next').on('click', function() {
    pt2.gotoPage(32, 'next');
    return false;
  });


  // Faded elements
  fadedEls($('.section-2 h3'), 'h');




  $(window).resize().scroll();

  // add class "loaded" here to force ani start
  setTimeout(function(){ $('html').addClass('loaded') }, 500);

});


$(window).load(function() {

  $(window).resize().scroll();

});
})(jQuery);
