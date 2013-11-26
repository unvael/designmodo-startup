(function($) {
    $(function() {

        $('.manual > div').hide();
        var helpButton = $('.read-man');
        helpButton.each(function() {
            $(this).hover(function() {
                $('body').toggleClass('hovered');
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
                if($('.'+id + '-map').length!=0){                          
                    heightMask += $('.' + id + '-map').outerHeight();
                }                        
                if($('footer.' + id).length!=0){
                    heightMask += $('footer.' + id).outerHeight();
                }

                if(heightMask > $(window).height()){
                    $('.' + id + '.mask').addClass('big');
                }
                $('.' + id + '.mask').height(heightMask);
                $('.' + id + '.mask').toggleClass('active');
            });
        });
        helpButton.click(function() {
            var id = $(this).attr('id');
            
            var elem = $('.mcontent > .'+id+ ':not(.mask)');
            var elemPos = 0;
            
            if($('.'+id+'-map').length!=0){
                elemPos = $(this).position().top + 110;
            }else{
                elemPos = elem.position().top;
            }
            
            
            $(window).scrollTop(elemPos -110);
//            if($('.'+id+'-map').length!=0){
//                elem.css('border-bottom', '3px solid red').css('border-left', '3px solid red').css('border-right', '3px solid red');
//            } else{
//                elem.css('border', '3px solid red');
//            }
            
            $('html').addClass('read-manual');            
            $('.manual .' + id).show();
            $('.manual').scrollTop(0);
        });
        var backButton = $('.back-button');
        backButton.click(function() {
            var id = $(this).parent().attr('class');
            var elem = $('.mcontent > .'+id+ ':not(.mask)');
            //elem.css('border', '0 none');
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
        
        $('.mcontent * :not(.manual, .manual *, .read-man)').click(function(){
            $('.back-button:visible').click();
        });            
        
        $('.menu-btn').click(function(){
            $('.menu').toggleClass('menu-visible');
        });
        
        
        $('.question').click(function(){
           $(this).toggleClass('opened');           
        });
        
    });
})(jQuery);
