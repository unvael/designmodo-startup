(function($) {
    $(function() {
       window.manual = window.manual || {};
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
       manual.dockbar.init();
    });
})(jQuery); 