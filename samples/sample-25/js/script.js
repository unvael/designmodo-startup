$(document).ready(function() {
    function isAppleDevice() {
        return (
            (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
                (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
                (navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
            );
    }

    var iframe = $('#pPlayer')[0];
    var player = $f(iframe);
    player.addEvent('ready', function() {});

    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        } else {
            element.attachEvent(eventName, callback, false);
        }
    }


    $('#play').click(function(evt) {
        evt.preventDefault();
        $('.mask').fadeIn('slow');
        $('.popup-video').fadeIn('slow');
        player.api('play')
        $('.mask').click(function() {
            player.api('pause');
            $('.popup-video').fadeOut('slow');
            $('.mask').fadeOut('slow');

        });
    });


    if (isAppleDevice() == false) {
        $('.content-23').each(function () {
            $(this).css("background-attachment", "fixed")
            $(this).parallax('50%', 0.2, true);
        });
    }
});
