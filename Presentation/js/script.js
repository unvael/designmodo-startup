$(document).ready(function() {

    var iframe = $('#pPlayer')[0];
    var player = $f(iframe);
    player.addEvent('ready', function() {
    });

<<<<<<< HEAD
    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        } else {
            element.attachEvent(eventName, callback, false);
        }
    }
=======
//disable hover effects while scrolling
var disableHoverEffects = function() {
	var body = document.body,
		timer;

	window.addEventListener('scroll', function() {
	  clearTimeout(timer);
	  if(!body.classList.contains('disable-hover')) {
		body.classList.add('disable-hover')
	  }
  
	  timer = setTimeout(function(){
		body.classList.remove('disable-hover')
	  },500);
	}, false);
}
disableHoverEffects();


>>>>>>> 108ef87bbcc74a0c80b0c3de45426b6429a867e4


    $('#play').click(function() {
        $('.presentation-mask').fadeIn('slow');
        $('.presentation-popup-video').fadeIn('slow');
        player.api('play')
        $('.presentation-mask').click(function() {
            player.api('pause');
            $('.presentation-popup-video').fadeOut('slow');
            $('.presentation-mask').fadeOut('slow');

        });
    });

    var videobackground = new $.backgroundVideo($('#bgVideo'), {
        "align" : "centerXY",
        "path" : "video/",
        "height" : "auto",
        "width" : "100%",
        "filename" : "preview",
        "types" : ["mp4", "ogg", "webm"]
    });

    var presentationScrollBlock = function(id) {
        var sbWidth = 0;
        var scrollBlock = $('#' + id);
        var displayWidth = $(window).width();

        var topPosition = scrollBlock.position().top;
        var bottomPosition = topPosition + scrollBlock.outerHeight();

        $('.container .row > *', scrollBlock).each(function() {
            sbWidth += $(this).width();
        });

        var parts = sbWidth / displayWidth;
        if (parts % 1 > 0)
            parts = parts - (parts % 1) + 1;

        $('.presentation-controls ul', scrollBlock).html('');
        for (var i = 1; i <= parts; i++) {
            $('.presentation-controls ul', scrollBlock).append('<li data-part=' + i + '></li>');
        }

        var partWidth = sbWidth / parts;
        partWidth = partWidth - (partWidth % 1);

        var startPoint = function(i) {
            if (i == parts) {
                return sbWidth - displayWidth;
            } else {
                return (i - 1) * partWidth;
            }

        };
        function indScroll() {
            for (var i = 1; i <= parts; i++) {

                if (scrollBlock.scrollLeft() == startPoint(i)) {
                    $('li', scrollBlock).removeClass('active');
                    $('li[data-part="' + i + '"]', scrollBlock).addClass('active');
                    $('.presentation-controls', scrollBlock).css('left', scrollBlock.scrollLeft());
                }
            }
        };
        indScroll();
        scrollBlock.on('scroll', function() {
            indScroll();
        });

        $('li', scrollBlock).click(function() {
            var part = $(this).attr('data-part');
            scrollBlock.animate({
                scrollLeft : startPoint(part)
            }, 800);

        });

        $(window).on("mousewheel", function(e, d) {
            console.log( test = e);
            if ($(window).width() > 900) {
                if ($(window).scrollTop() >= topPosition && $(window).scrollTop() <= bottomPosition) {
                    $(window).scrollTop(topPosition);
                    e.preventDefault();                    
                    if (d < 0) {
                        if ($('li.active', scrollBlock).attr('data-part') == $('li:last-child', scrollBlock).attr('data-part')) {
                            $(window).scrollTop(bottomPosition+1);
                        } else {
                            $(window).scrollTop(topPosition);
                            $('li.active', scrollBlock).next().click();
                        }
                    }else{
                         if ($('li.active', scrollBlock).attr('data-part') == $('li:first-child', scrollBlock).attr('data-part')) {
                            $(window).scrollTop(topPosition-1);
                        } else {
                            $(window).scrollTop(topPosition);
                            $('li.active', scrollBlock).prev().click();
                        }
                    }
                }
            } else {
                return e;
            }
        });

    };

    presentationScrollBlock('scrollBlock-1');
    $(window).resize(function() {
        presentationScrollBlock('scrollBlock-1');
    });

    var dof = $('.presentation-componentsSamples-inner');
    dof.mousemove(function(e) {
        var y = e.pageY - $(this).offset().top;
        var sHeight = dof.outerHeight();

        var offset = 0.2;

        var y = y - sHeight * offset;
        var sHeight = sHeight - sHeight * offset * 2;

        if (y >= sHeight)
            y = sHeight;

        var rounded = roundNum(((y / sHeight) * 100) / 5);
        var hovered = Math.ceil(rounded);

        if (hovered == 0)
            hovered = 1;

        if (window.oldHovered != rounded) {
            dof.find('*').each(function(index) {
                index = index + 1;
                if (index >= hovered) {
                    dof.find('.layer-' + index).css('opacity', 1);
                } else {
                    dof.find('.layer-' + index).css('opacity', 0);
                }

                if ((!$.browser.msie) && (!$.browser.mozilla)) {
                    if (hovered != rounded) {
                        var halfOfWay = hovered - 1;
                        var backOpacity = roundNum(hovered - rounded);
                        dof.find('.layer-' + halfOfWay).css('opacity', backOpacity);
                    }
                }
            });
            window.oldHovered = rounded;
        }
    });

    var bottomSliderCtrl = $('.additional-slider .container-slider-controls:first');
    if (bottomSliderCtrl.length > 0) {
        var ctrlTrigger = $('.trigger:first', bottomSliderCtrl);
        var sliderList = $('ul:first', bottomSliderCtrl);
        var sliderItems = $('li', sliderList);
        var sliderAmount = sliderItems.length;

<<<<<<< HEAD
        ctrlTrigger.hover(function() {
            sliderList.addClass('titles-on');
        }, function() {
            sliderList.removeClass('titles-on');
=======
        ctrlTrigger.hover(function () {
          sliderList.addClass('titles-on');
>>>>>>> 108ef87bbcc74a0c80b0c3de45426b6429a867e4
        });

        bottomSliderCtrl.mouseleave(function () {
            sliderList.removeClass('titles-on');
        });

        var scrollers = $(".scroller").mCustomScrollbar({
<<<<<<< HEAD
            scrollButtons : {
                enable : Boolean
            },
            autoDraggerLength : true,
            advanced : {
                updateOnBrowserResize : true,
                updateOnContentResize : true
            },
            contentTouchScroll : true
=======
          scrollButtons:{
            enable: false
          },
          autoDraggerLength: true,
          contentTouchScroll: true,
          advanced: {
            updateOnBrowserResize: true,
            updateOnContentResize: true
          }
>>>>>>> 108ef87bbcc74a0c80b0c3de45426b6429a867e4
        });

        var bottomSubSlider = $('.additional-slider .sub-slider:first').bxSlider({
            'controls' : false,
            'pagerCustom' : '.additional-slider .sub-slider-ctrl',
            'mode' : 'fade',
            'easing' : 'ease-in-out',
            'adaptiveHeight' : true
        });

        var bottomSlider = $('.additional-slider .bxslider:first').bxSlider({
<<<<<<< HEAD
            'controls' : false,
            'pagerCustom' : '.additional-slider .container-slider-controls ul',
            'mode' : 'horizontal',
            'easing' : 'ease-in-out',
            'adaptiveHeight' : true
=======
          'controls': false,
          'pagerCustom': '.additional-slider .container-slider-controls ul',
          'mode': 'horizontal',
          'easing': 'ease-in-out',
          'adaptiveHeight': true,
          'preventDefaultSwipeX': false
>>>>>>> 108ef87bbcc74a0c80b0c3de45426b6429a867e4
        });

    }
});

function roundNum(num) {
    num = Math.round(num * 10) / 10;
    return num;
}