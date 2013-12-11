$(document).ready(function () {



var iframe = $('#pPlayer')[0];
var player = $f(iframe);
	player.addEvent('ready', function() {});


     function addEvent(element, eventName, callback) {
                    if (element.addEventListener) {
                        element.addEventListener(eventName, callback, false);
                    }
                    else {
                        element.attachEvent(eventName, callback, false);
                    }
                }

    $('#play').click(function () {
        $('.presentation-mask').fadeIn('slow');
        $('.presentation-popup-video').fadeIn('slow');
        player.api('play')
        $('.presentation-mask').click(function () {
            player.api('pause');
            $('.presentation-popup-video').fadeOut('slow');
            $('.presentation-mask').fadeOut('slow');

        });
    });

    var videobackground = new $.backgroundVideo($('#bgVideo'), {
        "align": "centerXY",
        "path": "video/",
        "height": "auto",
        "width": "100%",
        "filename": "preview",
        "types": ["mp4", "ogg", "webm"]
    });



    var dof = $('.presentation-componentsSamples-inner');
    dof.mousemove(function (e) {
        var y = e.pageY - $(this).offset().top;
        var sHeight = dof.outerHeight();

        var offset = 0.2;

        var y = y - sHeight * offset;
        var sHeight = sHeight - sHeight * offset * 2;

        if (y >= sHeight) y = sHeight;

        var rounded = roundNum(((y / sHeight) * 100) / 5);
        var hovered = Math.ceil(rounded);

        if (hovered == 0) hovered = 1;

        if (window.oldHovered != rounded) {
            dof.find('*').each(function (index) {
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

        ctrlTrigger.hover(function () {
          sliderList.addClass('titles-on');
        }, function () {
          sliderList.removeClass('titles-on');
        });
        var scrollers = $(".scroller").mCustomScrollbar({
          scrollButtons:{
            enable: false
          },
          autoDraggerLength: true,
          contentTouchScroll: true,
          advanced: {
            updateOnBrowserResize: true,
            updateOnContentResize: true
          }
        });

        var bottomSubSlider = $('.additional-slider .sub-slider:first').bxSlider({
          'controls': false,
          'pagerCustom': '.additional-slider .sub-slider-ctrl',
          'mode': 'fade',
          'easing': 'ease-in-out',
          'adaptiveHeight': true
        });

        var bottomSlider = $('.additional-slider .bxslider:first').bxSlider({
          'controls': false,
          'pagerCustom': '.additional-slider .container-slider-controls ul',
          'mode': 'horizontal',
          'easing': 'ease-in-out',
          'adaptiveHeight': true,
          'preventDefaultSwipeX': false
        });

    }
});

function roundNum(num) {
    num = Math.round(num * 10) / 10;
    return num;
}