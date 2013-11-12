(function($) {
    $(function() {
        
       startupKit.uiKitHeader._inFixedMode('.dockbar'); 
        
       window.manual = window.manual || {};

        manual.init = function (){
            manual.dockbar.init();
            manual.help();
        };
        manual.dockbar =  $('.dockbar');

        manual.dockbar.init = function(){
         this.addClass('normal');         
         this.mouseover(function(){
            $(this).removeClass('normal');    
            $(this).addClass('active');      
         });
         this.mouseout(function(){
            $(this).removeClass('active');    
            $(this).addClass('normal');
         });
         
         _locationChange = function(hash){
             $('.content > div').hide();
             if(hash==undefined||hash==null){hash = window.location.hash;}
             if(hash==''||hash=="#"){hash='#main-page';}             
             $(hash).fadeIn("slow");
         };
          _locationChange();
         
         if($('li.active', this).length==0){
            $('li a[href='+window.location.hash+']').parent().addClass('active');
         }
         
         $('li a, .brand', this).click(function(){
            $('li').removeClass('active');
            $(this).parent().addClass('active');             
            _locationChange($(this).attr('href'));                        
         });
         
       };        

       
       manual.help = function(){
           $('.manual > div').hide();           
         var helpButton = $('.read-man');
         helpButton.each(function(){
            $(this).hover(function(){
                var id = $(this).attr('id');
                $('.' + id + '.mask').height($('section.' + id).height());
                
                $('.' + id + '.mask').toggleClass('active'); 
            }); 
         }); 
         helpButton.click(function(){
             $('html').addClass('read-manual');
             var id = $(this).attr('id');
             $('.manual .'+ id ).show();
         });
         var backButton = $('.back-button');
         backButton.click(function(){
             $('html').removeClass('read-manual');
             $('.manual > div').hide();
         });
       };

        manual.init();

    });
})(jQuery); 