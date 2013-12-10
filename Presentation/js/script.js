$(document).ready(function () {

    var f = $('iframe#pPlayer'),
        url = f.attr('src').split('?')[0];

        if(window.addEventListener){
            window.addEventListener('message', onMessageReceived, false);
        }else{
            window.attachEvent('onmessage', onMessageReceived, false);
        }

    function onMessageReceived(e) {
        var data = JSON.parse(e.data);
        switch (data.event) {
            case 'ready':
                onReady();
                break;
            case 'playProgress':
                onPlayProgress(data.data);
                break;
            case 'pause':
                onPause();
                break;
            case 'finish':
                onFinish();
                break;
        }
    };

    $('#play').click(function () {
        $('.presentation-mask').fadeIn('slow');
        $('.presentation-popup-video').fadeIn('slow');
        post('play');
        $('.presentation-mask').click(function () {
            post('pause');
            $('.presentation-popup-video').fadeOut('slow');
            $('.presentation-mask').fadeOut('slow');

        });
    });

    function post(action, value) {
        var data = { method: action };

        if (value) {
            data.value = value;
        }

        f[0].contentWindow.postMessage(JSON.stringify(data), url);
    };



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
        var y = e.pageY - this.offsetTop;
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
});

function roundNum(num) {
    num = Math.round(num * 10) / 10;
    return num;
}