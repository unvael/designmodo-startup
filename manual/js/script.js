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
       };        
       manual.dockbar.init();
    });
})(jQuery); 