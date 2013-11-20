(function($) {
    $(function() {

        startupKit.uiKitHeader._inFixedMode('.dockbar');

        var dockbar = $('.dockbar');
        dockbar.addClass('active');
        dockbar.mouseover(function() {
            $(this).removeClass('normal');
            $(this).addClass('active');
        });
        dockbar.mouseout(function() {
            $(this).removeClass('active');
            $(this).addClass('normal');
        });
        $(window).scroll(function() {
            $(dockbar).removeClass('active');
            $(dockbar).addClass('normal');
        });

        $('.manual > div').hide();
        var helpButton = $('.read-man');
        helpButton.each(function() {
            $(this).hover(function() {
                var id = $(this).attr('id');
                var heightMask = 0;                 
                if($('section.' + id).length!=0){
                    heightMask += $('section.' + id).outerHeight();
                }                
                if($('header.' + id).length!=0){
                    heightMask += $('header.' + id).outerHeight();        
                }                
                if($('.'+id + '-sub').length!=0){                          
                    heightMask += $('.' + id + '-sub').outerHeight();
                }                
                if($('footer.' + id).length!=0){
                    heightMask += $('footer.' + id).outerHeight();
                }
                $('.' + id + '.mask').height(heightMask);
                $('.' + id + '.mask').toggleClass('active');
            });
        });
        helpButton.click(function() {
            $('html').addClass('read-manual');
            var id = $(this).attr('id');
            $('.manual .' + id).show();
        });
        var backButton = $('.back-button');
        backButton.click(function() {
            $('html').removeClass('read-manual');
            $('.manual > div').hide();
        });
        $('pre.htmlCode').each(function() {
            $(this).text($(this).html());
        });
        
        $('.manual pre.htmlCode').snippet("html", {
            style : "vim-dark"
        });
        $('.manual pre.cssCode').snippet("css", {
            style : "vim-dark"
        });
        $('.main-page pre.htmlCode').snippet("html", {
            style : "emacs",
            showNum : false
        });
        $('.main-page pre.cssCode').snippet("css", {
            style : "emacs",
            showNum : false
        });
        
        $('.mcontent > * :not(.manual *)').click(function(){
            $('.back-button:visible').click();
        });

    });
})(jQuery);
