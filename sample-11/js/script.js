(function($) {
    $(function() {
        
        // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });        

        // Parallax
        $('.header-6-sub .background').parallax('50%', 0.3, true);        
        $(window).resize().scroll();
    });

    $(window).load(function() {
        $('html').addClass('loaded');
        $(window).resize().scroll();
    });
})(jQuery);

