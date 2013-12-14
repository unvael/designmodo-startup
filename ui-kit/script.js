(function($) {
    $(function() {
        $('#open-close-menu').click(function() {
            $('body').toggleClass('colapsed-menu-active');
        });


        $('html').click(function(e) {
            // console.warn('element clicked = ',$(e.target).attr('class'), '\n parent element = ', $(e.target).parents().attr('class'));
            if (!$(e.target).hasClass('menu-btn') && !$(e.target).hasClass('colapsed-menu') && !$(e.target).parents().hasClass('colapsed-menu') && !$(e.target).parents().hasClass('menu-btn')) {
                $('body').removeClass('colapsed-menu-active');
            }
        });
    });
})(jQuery);

