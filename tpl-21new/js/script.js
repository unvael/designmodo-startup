(function($) {
    $(function() {
        startupKit.uiKitHeader._inFixedMode(".header-custom-sub");
        $(window).resize(function() {
            $('.header-custom-sub').css('height', $(this).height() + 'px');
        });
    });
})(jQuery);
