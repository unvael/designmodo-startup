/**
 * JavaScript code for all header samples. 
 * Use namespaces. 
 */

window.startupKit = window.startupKit || {};
startupKit.uiKitHeader = startupKit.uiKitHeader || {};

/* Header 1*/
startupKit.uiKitHeader.header1 = function(){
	
	$('.header-1 .navbar .btn-navbar').unbind().click(function(){ $('html').toggleClass('nav-visible'); });
  	$(document).bind('mousedown touchstart', function(ev) {
	    if (!$(ev.target).closest('.header-1 .nav-collapse, .header-1 .navbar .btn-navbar').length) {
	      $('html').removeClass('nav-visible');
	    }
  	});

	var pt = PageTransitions();
  	pt.init('#pt-main');
  	$('#pt-main .control-prev').on('click', function() {  		
   		pt.gotoPage(21, 'prev');
    	return false;
  	});
  	$('#pt-main .control-next').on('click', function() {  		
    	pt.gotoPage(22, 'next');
    	return false;
  	});  	  	
  	
	var s1 = $('.header-1-slider');
	var s1StopScroll = s1.outerHeight() - 70; // number - visible part of .header
	var antiflicker = $('<div style="position: fixed; z-index: 25; left: 0; top: 0; width: 100%; height: 70px; background: #fff;" />');
	s1.before(antiflicker);
	var s1Placeholder = $('<div />');
	s1Placeholder.hide().height(s1.outerHeight());
	s1.after(s1Placeholder);
	var s1FadedEls = $('.background, .caption, .controls > *', s1);
	var header = $('.header-1');
	
	s1FadedEls.each(function() {
		$(this).data('origOpacity', $(this).css('opacity'));
	});
	
	var headerAniStartPos = s1.outerHeight() - 120;
	var headerAniStopPos = s1StopScroll;
	
	$(window).scroll(function() {
		var opacity = (s1StopScroll - $(window).scrollTop()) / s1StopScroll;
		opacity = Math.max(0, opacity); // 0..1
		
		s1FadedEls.each(function() {
			$(this).css('opacity', $(this).data('origOpacity') * opacity);
		});
		
		antiflicker.css('background-color', $('.pt-page-current', s1).css('background-color'));
		if ($(window).scrollTop() > s1StopScroll) {
			if (!s1.hasClass('fixed')) {
				s1.addClass('fixed').css({
					position: 'fixed',
					top: -s1StopScroll
				});
				s1Placeholder.show();
			}
		} else {
			if (s1.hasClass('fixed')) {
				s1.removeClass('fixed').css({
					position: '',
					top: ''
				});
				s1Placeholder.hide();
			}
		}
		
		var headerZoom = -(headerAniStartPos - $(window).scrollTop())/(headerAniStopPos - headerAniStartPos);
		headerZoom = 1 - Math.min(1, Math.max(0, headerZoom));
		$('.navbar', header).css({'top': -6 + ((22+6) * headerZoom)});
		$('.navbar .brand', header).css({'font-size': 18 + ((25-18) * headerZoom), 'padding-top': 30 + ((23-30) * headerZoom)});
		$('.navbar .brand img', header).css({'width': 25 + ((50-25) * headerZoom), 'height': 25 + ((50-25) * headerZoom), 'margin-top': -1 + ((-10+1) * headerZoom)});
		$('.navbar .btn-navbar', header).css({'margin-top': 30 + ((28-30) * headerZoom)});
		
		if ($(window).width() > 979) {
			$('.navbar .nav > li > a', header).css({'font-size': 12 + ((14-12) * headerZoom)});
		} else {
			$('.navbar .nav > li > a', header).css({'font-size': ''});
		}
		
		if (headerZoom == 0) {
			$('.navbar .brand img', header).attr('src', '../ui-kit-header/img/logo-small@2x.png');
		} else {
			$('.navbar .brand img', header).attr('src', '../ui-kit-header/img/logo@2x.png');
		}
	});	  
  	$(window).resize().scroll();
};

/* Header 2*/
startupKit.uiKitHeader.header2 = function(){
	
};

/* Header 3*/
startupKit.uiKitHeader.header3 = function(){
	
};

/* Header 4*/
startupKit.uiKitHeader.header4 = function(){
	
};

/* Header 5*/
startupKit.uiKitHeader.header5 = function(){
	
};

/* Header 6*/
startupKit.uiKitHeader.header6 = function(){
	
};

/* Header 7*/
startupKit.uiKitHeader.header7 = function(){
	
};

/* Header 8*/
startupKit.uiKitHeader.header8 = function(){
	
};

/* Header 9*/
startupKit.uiKitHeader.header9 = function(){
	
};

/* Header 10*/
startupKit.uiKitHeader.header10 = function(){
	
};

/* Header 11*/
startupKit.uiKitHeader.header11 = function(){
	
};

/* Header 12*/
startupKit.uiKitHeader.header12 = function(){
	
};

/* Header 13*/
startupKit.uiKitHeader.header13 = function(){
	
};

/* Header 14*/
startupKit.uiKitHeader.header14 = function(){
	
};

/* Header 15*/
startupKit.uiKitHeader.header15 = function(){
	
};

/* Header 16*/
startupKit.uiKitHeader.header16 = function(){
	
};

/* Header 17*/
startupKit.uiKitHeader.header17 = function(){
	
};

/* Header 18*/
startupKit.uiKitHeader.header18 = function(){
	
};

/* Header 19*/
startupKit.uiKitHeader.header19 = function(){
	
};

/* Header 20*/
startupKit.uiKitHeader.header20 = function(){
	
};

/* Header 21*/
startupKit.uiKitHeader.header21 = function(){
	
};

/* Header 22*/
startupKit.uiKitHeader.header22 = function(){
	
};


(function($) {
	$(function() {				
		for(header in startupKit.uiKitHeader){
			headerNumber = header.slice(6);		
			if(jQuery('.header-' + headerNumber).length != 0){				
				startupKit.uiKitHeader[header]();
			};
		}		
		$(window).load(function() {
		  $(window).resize().scroll();		  
		}); 	
	});
})(jQuery);