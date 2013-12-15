(function($) {
    $(function() {

        var iframe = $('#cPlayer')[0];
        var player = $f(iframe);
        player.addEvent('ready', function() {
        });

        function addEvent(element, eventName, callback) {
            if (element.addEventListener) {
                element.addEventListener(eventName, callback, false);
            } else {
                element.attachEvent(eventName, callback, false);
            }
        }


        $('#play').click(function(e) {
            e.preventDefault();
            $('.crumbs-mask').fadeIn('slow');
            $('.crumbs-popup-video').fadeIn('slow');
            player.api('play')
            $('.crumbs-mask').click(function() {
                player.api('pause');
                $('.crumbs-popup-video').fadeOut('slow');
                $('.crumbs-mask').fadeOut('slow');

            });
        });





        $(window).resize(function() {
            var sH = $(window).height();
            $('section.header-10-sub').css('height', (sH - $('header').outerHeight()) + 'px');
            $('section:not(.header-10-sub):not(.content-13, .logos, .projects-3, .sc2-custom-section-3, .sc2-custom-section-1)').css('height', sH + 'px');
        });        

        // Parallax
      
        $('.header-10-sub, .header-10-sub .background').each(function() {
                  $(this).parallax('50%', -0.3, false);
              });
        $('.custom-bg, .custom-bg2, .custom-bg3, .sc2-custom-section-2').each(function() {
                  $(this).parallax('50%', 0.3, false);
        });
              
});
})(jQuery);