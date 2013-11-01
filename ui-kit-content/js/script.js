/**
 * JavaScript code for all content samples.
 * Use namespaces.
 */

window.startupKit = window.startupKit || {};
window.isRetina = (function() {
    var root = ( typeof exports == 'undefined' ? window : exports);
    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";
    if (root.devicePixelRatio > 1)
        return true;
    if (root.matchMedia && root.matchMedia(mediaQuery).matches)
        return true;
    return false;
})();

startupKit.uiKitContent = startupKit.uiKitContent || {};

/* Content 1*/
startupKit.uiKitContent.content1 = function() {

};

/* Content 2*/
startupKit.uiKitContent.content2 = function() {

};

/* Content 3*/
startupKit.uiKitContent.content3 = function() {

};

/* Content 4*/
startupKit.uiKitContent.content4 = function() {

};

/* Content 5*/
startupKit.uiKitContent.content5 = function() {

};

/* Content 6*/
startupKit.uiKitContent.content6 = function() {

};

/* Content 7*/
startupKit.uiKitContent.content7 = function() {

    (function(el) {
        if (el.length != 0) {
            console.log(el);

            $('img:first-child', el).css('left', '-29.7%');
            $(window).resize(function() {
                if (!el.hasClass('ani-processed')) {
                    el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
                }
            }).scroll(function() {
                if (!el.hasClass('ani-processed')) {
                    if ($(window).scrollTop() >= el.data('scrollPos')) {
                        el.addClass('ani-processed');
                        $('img:first-child', el).animate({
                            left : 0
                        }, 500);
                    }
                }
            });

        }

    })($('.screen'));

    $(window).load(function() {
        $('html').addClass('loaded');
        $(window).resize().scroll();
    });

};

/* Content 8*/
startupKit.uiKitContent.content8 = function() {

};

/* Content 9*/
startupKit.uiKitContent.content9 = function() {

};

/* Content 10*/
startupKit.uiKitContent.content10 = function() {

};

/* Content 11*/
startupKit.uiKitContent.content11 = function() {

};

/* Content 12*/
startupKit.uiKitContent.content12 = function() {

};

/* Content 13*/
startupKit.uiKitContent.content13 = function() {

};

/* Content 14*/
startupKit.uiKitContent.content14 = function() {

};

/* Content 15*/
startupKit.uiKitContent.content15 = function() {

};

/* Content 16*/
startupKit.uiKitContent.content16 = function() {

    $('.content-16 .control-btn').on('click', function() {
        $.scrollTo($(this).closest('section').next(), {
            axis : 'y',
            duration : 500
        });
        return false;
    });

};

/* Content 17*/
startupKit.uiKitContent.content17 = function() {

    // Carousel auto height
    $(window).resize(function() {
        $('#c-17_myCarousel').each(function() {
            var maxH = 0;
            $('.item', this).each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            });
            $('#c-17_myCarousel .carousel-inner', this).css('height', maxH + 'px');
        });
    });

    // Carousel start
    $('#c-17_myCarousel').carousel({
        interval : 4000
    });

    //$(window).resize().scroll();

};

/* Content 18*/
startupKit.uiKitContent.content18 = function() {

    // Carousel auto height
    $(window).resize(function() {
        $('#c-18_myCarousel').each(function() {
            var maxH = 0;
            $('.item', this).each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            });
            $('.carousel-inner', this).css('height', maxH + 'px');
        });
    });

    $('#c-18_myCarousel').bind('slid', function() {
        $('.carousel-control', this).removeClass('disabled');        
        if ($('.item.active', this).index() == 0) {
            $('.carousel-control.left', this).addClass('disabled');
        } else if ($('.item.active', this).index() == ($('.item', this).length - 1)) {
            $('.carousel-control.right', this).addClass('disabled');
        }
    });

    //$(window).resize().scroll();

};

/* Content 19*/
startupKit.uiKitContent.content19 = function() {

};

/* Content 20*/
startupKit.uiKitContent.content20 = function() {

};

/* Content 21*/
startupKit.uiKitContent.content21 = function() {

    $(window).resize(function() {
        $('.content-21 .features').each(function() {
            var maxH = 0;
            $('.features-body', this).css('height', 'auto').each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            }).css('height', maxH + 'px');
            $('.features-bodies', this).css('height', maxH + 'px');
        });
    });

    $('.content-21 .features .features-header .box').click(function() {
        $(this).addClass('active').parent().children().not(this).removeClass('active');
        $(this).closest('.features').find('.features-body').removeClass('active').eq($(this).index()).addClass('active');
        return false;
    });

};

/* Content 22*/
startupKit.uiKitContent.content22 = function() {

    (function(el) {
        if (isRetina) {
            $('.img img', el).each(function() {
                $(this).attr('src', $(this).attr('src').replace(/.png/i, '@2x.png'));
            });
        }

        $(window).resize(function() {
            if (!el.hasClass('ani-processed')) {
                el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight() - parseInt(el.css('padding-bottom'), 10));
            }
        }).scroll(function() {
            if (!el.hasClass('ani-processed')) {
                if ($(window).scrollTop() >= el.data('scrollPos')) {
                    el.addClass('ani-processed');
                }
            }
        });
    })($('.content-22'));

   // $(window).resize().scroll();

};
/* Content 23*/
startupKit.uiKitContent.content23 = function() {

    $('.content-23 .control-btn').on('click', function() {
        $.scrollTo($(this).closest('section').next(), {
            axis : 'y',
            duration : 500
        });
        return false;
    });

};
/* Content 24*/
startupKit.uiKitContent.content24 = function() {

    $(window).resize(function() {
        $('.content-24 .features').each(function() {
            var maxH = 0;
            $('.features-body', this).css('height', 'auto').each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            }).css('height', maxH + 'px');
            $('.features-bodies', this).css('height', maxH + 'px');
        });
        
        var img = $('.content-24 .image');   
        if ($(window).width() < 751) {                     
            $('.content-24 .features-body.active h3').after(img);
        }else{
            $('.content-24 .container').before(img);
        }
        
    });

    $('.content-24 .features .features-header .box').click(function() {
        $(this).addClass('active').parent().children().not(this).removeClass('active');
        $(this).closest('.features').find('.features-body').removeClass('active').eq($(this).index()).addClass('active');
        return false;
    });
    
    
    
   // $(window).resize().scroll();
};
/* Content 25*/
startupKit.uiKitContent.content25 = function() {

    if ((!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) || (window.mobile)) {
        $('.svg').remove();
        $('.nosvg').attr('style', 'display:block;');
    }

    (function(el) {
        el.css('opacity', 0);
        $svg = $('#spaceship', el);
        $('#rocket-raw', $svg).attr('transform', 'translate(-100,100)');
        $('#rocketmask1', $svg).attr('transform', 'translate(100,-100)');

        $(window).resize(function() {
            if (!el.hasClass('ani-processed')) {
                el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
            }
            var svg = $('.content-25 .svg');
            var nosvg = $('.content-25 .nosvg');
            if ($(window).width() < 751) {
                $('.content-25 .container h3:first-child').after(svg);
                $('.content-25 .container h3:first-child').after(nosvg);
                $('.content-25 .span6:nth-child(2)').hide();
            }else{
                $('.content-25 .span6:nth-child(2)').show();
                $('.content-25 .span6:nth-child(2)').append(svg);
                $('.content-25 .span6:nth-child(2)').append(nosvg);
            }
        }).scroll(function() {
            if (!el.hasClass('ani-processed')) {
                if ($(window).scrollTop() >= el.data('scrollPos')) {
                    el.addClass('ani-processed');
                    el.animate({
                        opacity : 1
                    }, 600);
                    $('#rocket-raw, #rocketmask1', $svg).clearQueue().stop().animate({
                        svgTransform : 'translate(0,0)'
                    }, {
                        duration : 800,
                        easing : "easeInOutQuad"
                    });
                }
            }
        });
    })($('.content-25 .span6 + .span6'));

   // $(window).resize().scroll();

};
/* Content 26*/
startupKit.uiKitContent.content26 = function() {

};
/* Content 27*/
startupKit.uiKitContent.content27 = function() {
if ((!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) || (window.mobile)) {
        $('.svg').remove();
        $('.nosvg').attr('style', 'display:block;');
    }
    
    
$(window).resize(function() {
    var svg = $('.content-27 .svg');
    var nosvg = $('.content-27 .nosvg');
    if ($(window).width() < 751) {
        $('.content-27 .container h3:first-child').after(svg);
        $('.content-27 .container h3:first-child').after(nosvg);
        $('.content-27 .span4:first-child').hide();
    }else{
        $('.content-27 .span4:first-child').show();
        $('.content-27 .span4:first-child').append(svg);
        $('.content-27 .span4:first-child').append(nosvg);
    }
});    


};
/* Content 28*/
startupKit.uiKitContent.content28 = function() {

  /*
    (function(el) {
          $('.span10 > img', el).css('opacity', 0);
  
          $(window).resize(function() {
              if (!el.hasClass('ani-processed')) {
                  $('.span10 > img', el).css('top', $('.span10 > img', el).height());
                  el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
              }
          }).scroll(function() {
              if (!el.hasClass('ani-processed')) {
                  if ($(window).scrollTop() >= el.data('scrollPos')) {
                      el.addClass('ani-processed');
                      $('.span10 > img', el).animate({
                          top : 0,
                          opacity : 1
                      }, 500);
                  }
              }
          });
      })($('.content-28'));
  */
  
};
/* Content 29*/
startupKit.uiKitContent.content29 = function() {

};
/* Content 30*/
startupKit.uiKitContent.content30 = function() {
   
    $(window).resize(function() {
        var boxes = $('.content-30 .span3');       
        for (var t=0; t<=boxes.length; t++){                      
            var descTop = $(boxes[t]).find('.description-top');
            if ($(window).width() <= 480){ 
                $(boxes[t]).find('.img').after(descTop);
            
            }else{               
                $(boxes[t]).find('.img').before(descTop);            
            }
        }
    });  

};
/* Content 31*/
startupKit.uiKitContent.content31 = function() {
    (function(el) {
        $(window).scroll(function() {
          if ($(window).width() > 480) {
            $('.row', el).each(function(idx) {
              if ($(window).scrollTop() >= ($(this).offset().top - $(window).height() + $(window).height()/2 +100)) {
                $(this).addClass('active');
              } else {
                $(this).removeClass('active');
              }
            });
          }
        });
        $(window).resize(function() {
          $('.page-transitions', el).each(function() {
            var maxH = 0;
            $('.pt-page', this).css('height', 'auto').each(function() {
              var h = $(this).outerHeight();
              if (h > maxH) maxH = h;
            }).css('height', maxH+'px');
            $(this).css('height', maxH+'px');
          });
        });
        $('.page-transitions', el).each(function() {
          var pt = PageTransitions();
          pt.init(this);

          $('.pt-control-prev', this).on('click', function() {
            pt.gotoPage(33, 'prev');
            return false;
          });

          $('.pt-control-next', this).on('click', function() {
            pt.gotoPage(32, 'next');
            return false;
          });
        });
    })($('.content-31'));
};

(function($) {
    $(function() {
        for (content in startupKit.uiKitContent) {
            contentNumber = content.slice(7);
            if (jQuery('.content-' + contentNumber).length != 0) {
                startupKit.uiKitContent[content]();
            };
        }
        $(window).load(function() {
            $(window).resize().scroll();
            setTimeout(function() {
                window.scrollBy(0, 1)
            }, 100);

        });

        if (/msie/i.test(navigator.userAgent)) {
            $('img').each(function() {
                $(this).css({
                    width : $(this).attr('width') + 'px',
                    height : 'auto'
                });
            });
        }
    });
})(jQuery);

