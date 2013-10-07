/**
 * JavaScript code for all content samples. 
 * Use namespaces. 
 */

window.startupKit ={};
startupKit.uiKitContent = {};

/* Content 1*/
startupKit.uiKitContent.content1 = function(){
	
};

/* Content 2*/
startupKit.uiKitContent.content2 = function(){
	
};

/* Content 3*/
startupKit.uiKitContent.content3 = function(){
	
};

/* Content 4*/
startupKit.uiKitContent.content4 = function(){
	
};

/* Content 5*/
startupKit.uiKitContent.content5 = function(){
	
};

/* Content 6*/
startupKit.uiKitContent.content6 = function(){
	
};

/* Content 7*/
startupKit.uiKitContent.content7 = function(){
	
	(function(el) {
    	$('img:first-child', el).css('left', '-29.7%');
    	$(window).resize(function() {
     	 if (!el.hasClass('ani-processed')) {
        	el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
     	 }
    	}).scroll(function() {
      		if (!el.hasClass('ani-processed')) {
       			if ($(window).scrollTop() >= el.data('scrollPos')) {
          			el.addClass('ani-processed');
          			$('img:first-child', el).animate({left:0}, 500);
        		}
      		}
    	});
  	})($('.screen'));
  
	$(window).load(function() {
	  $('html').addClass('loaded');
	  $(window).resize().scroll();
	});
	
};

/* Content 8*/
startupKit.uiKitContent.content8 = function(){
	
};

/* Content 9*/
startupKit.uiKitContent.content9 = function(){
	
};

/* Content 10*/
startupKit.uiKitContent.content10 = function(){
	
};

/* Content 11*/
startupKit.uiKitContent.content11 = function(){
	
};

/* Content 12*/
startupKit.uiKitContent.content12 = function(){
	
};

/* Content 13*/
startupKit.uiKitContent.content13 = function(){
	
};

/* Content 14*/
startupKit.uiKitContent.content14 = function(){
	
};

/* Content 15*/
startupKit.uiKitContent.content15 = function(){
	
};

/* Content 16*/
startupKit.uiKitContent.content16 = function(){
	
	$('.content-16 .control-btn').on('click', function() {
   		$.scrollTo($(this).closest('section').next(), {axis:'y', duration:500});
    	return false;
  	});
  	
};

/* Content 17*/
startupKit.uiKitContent.content17 = function(){
	
	// Carousel auto height
  	$(window).resize(function() {
    	$('#c-17_myCarousel').each(function() {
      		var maxH = 0;
     		$('.item', this).each(function() {
        		var h = $(this).outerHeight();
        		if (h > maxH) maxH = h;
      		});
      		$('#c-17_myCarousel .carousel-inner', this).css('height', maxH+'px');
    	});
  	});

	// Carousel start
	$('#c-17_myCarousel').carousel({interval: 4000});
	
	$(window).resize().scroll();

};

/* Content 18*/
startupKit.uiKitContent.content18 = function(){

	// Carousel auto height
  	$(window).resize(function() {
    	$('#c-18_myCarousel').each(function() {
      		var maxH = 0;
      		$('.item', this).each(function() {
        		var h = $(this).outerHeight();
        		if (h > maxH) maxH = h;
      		});
      		$('.carousel-inner', this).css('height', maxH+'px');
    	});
  	});

  	$('#c-18_myCarousel').bind('slid', function() {
    	$('.carousel-control', this).removeClass('disabled');
    	if ($('.item.active', this).index() == 0) {
      		$('.carousel-control.left', this).addClass('disabled');
    	} else if ($('.item.active', this).index() == ($('.item', this).length - 1)) {
      		$('.carousel-control.right', this).addClass('disabled');
    	}
  	});
	
	$(window).resize().scroll();
	
};

/* Content 19*/
startupKit.uiKitContent.content19 = function(){
	
};


(function($) {
	$(function() {
		for(content in startupKit.uiKitContent){
			contentNumber = content.slice(7);		
			if(jQuery('.content-' + contentNumber).length != 0){				
				startupKit.uiKitContent[content]();
			};
		}
});
})(jQuery);

