$(document).ready(function() {

    var iframe = $('#pPlayer')[0];
    var player = $f(iframe);
    player.addEvent('ready', function() {
    });

    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        } else {
            element.attachEvent(eventName, callback, false);
        }
    }


    $('#play').click(function() {
        $('.presentation-mask').fadeIn('slow');
        $('.presentation-popup-video').fadeIn('slow');
        player.api('play')
        $('.presentation-mask').click(function() {
            player.api('pause');
            $('.presentation-popup-video').fadeOut('slow');
            $('.presentation-mask').fadeOut('slow');

        });
    });


    var videobackground = new $.backgroundVideo($('#bgVideo'), {
        "align" : "centerXY",
        "path" : "video/",
        "width": 1280,
        "height": 720,
        "filename" : "preview",
        "types" : ["mp4", "ogg", "webm"]
    });

    $('.presentation-header-sub').height($(window).height());
    $(window).resize(function(){
        $('.presentation-header-sub').height($(window).height());
    });

    var presentationScrollBlock = function(id) {
        var sbWidth = 0;
        var scrollBlock = $('#' + id);
        var displayWidth = $(window).width();

        var topPosition = scrollBlock.position().top;
        var bottomPosition = topPosition + scrollBlock.outerHeight();

        $('.container .row > *', scrollBlock).each(function() {
            sbWidth += $(this).width();
        });

        var parts = sbWidth / displayWidth;
        if (parts % 1 > 0)
            parts = parts - (parts % 1) + 1;

        scrollBlock.find('.presentation-controls ul').html('');
        for (var i = 1; i <= parts; i++) {
            scrollBlock.find('.presentation-controls ul').append('<li data-part=' + i + '></li>');
        }

        var partWidth = sbWidth / parts;
        partWidth = partWidth - (partWidth % 1);

        var startPoint = function(i) {
            if (i == parts) {
                return sbWidth - displayWidth;
            } else {
                return (i - 1) * partWidth;
            }

        };
        function indScroll() {
            for (var i = 1; i <= parts; i++) {

                if (scrollBlock.scrollLeft() == startPoint(i)) {
                    $('li', scrollBlock).removeClass('active');
                    $('li[data-part="' + i + '"]', scrollBlock).addClass('active');
                   
                    scrollBlock.find('.presentation-controls', scrollBlock).css('left', scrollBlock.scrollLeft());
                }
            }
        };
        indScroll();
        scrollBlock.on('scroll', function() {
            indScroll();
        });

        $('li', scrollBlock).click(function() {
            var part = $(this).attr('data-part');
            scrollBlock.animate({
                scrollLeft : startPoint(part)
            }, 'slow');

        });

        $(window).on("mousewheel", function(e, d) {            
            if ($(window).width() > 900) {
                if ($(window).scrollTop() >= topPosition && $(window).scrollTop() <= bottomPosition) {
                    $(window).scrollTop(topPosition);
                    e.preventDefault();                    
                    if (d < 0) {
                        if (scrollBlock.find('li.active').attr('data-part') == scrollBlock.find('li:last-child').attr('data-part')) {
                            $(window).scrollTop(bottomPosition+1);
                        } else {
                            $(window).scrollTop(topPosition);
                            $('li.active', scrollBlock).next().click();
                        }
                    }else{
                         if ($('li.active', scrollBlock).attr('data-part') == $('li:first-child', scrollBlock).attr('data-part')) {
                            $(window).scrollTop(topPosition-1);
                        } else {
                            $(window).scrollTop(topPosition);
                            $('li.active', scrollBlock).prev().click();
                        }
                    }
                }
            } else {
                return e;
            }
        });

    };

    // presentationScrollBlock('scrollBlock-1');
    // presentationScrollBlock('scrollBlock-2');
    // $(window).resize(function() {
    //     presentationScrollBlock('scrollBlock-1');
    //     presentationScrollBlock('scrollBlock-2');
    // });

    var dof = $('.presentation-componentsSamples-inner');
    dof.mousemove(function(e) {
        var y = e.pageY - $(this).offset().top;
        var sHeight = dof.outerHeight();

        var offset = 0.2;

        var y = y - sHeight * offset;
        var sHeight = sHeight - sHeight * offset * 2;

        if (y >= sHeight)
            y = sHeight;

        var rounded = roundNum(((y / sHeight) * 100) / 5);
        var hovered = Math.ceil(rounded);

        if (hovered == 0)
            hovered = 1;

        if (window.oldHovered != rounded) {
            dof.find('*').each(function(index) {
                index = index + 1;
                if (index >= hovered) {
                    dof.find('.layer-' + index).css('opacity', 1);
                } else {
                    dof.find('.layer-' + index).css('opacity', 0);
                }

                if ((!$.browser.msie) && (!$.browser.mozilla)) {
                    if (hovered != rounded) {
                        var halfOfWay = hovered - 1;
                        var backOpacity = roundNum(hovered - rounded);
                        dof.find('.layer-' + halfOfWay).css('opacity', backOpacity);
                    }
                }
            });
            window.oldHovered = rounded;
        }
    });
    
    var topSliderWr = $('#topslider-wrapper');
    if (topSliderWr.length > 0) {
        var topSlider = $('#topslider', topSliderWr).bxSlider({
            'controls' : false,
            'pagerCustom' : '#topslider-wrapper #topsliderCtrl',
            'easing' : 'ease-in-out',
            'adaptiveHeight' : true
        });
    }

    var bottomSliderCtrl = $('.additional-slider .container-slider-controls:first');
    if (bottomSliderCtrl.length > 0) {
        var ctrlTrigger = $('.trigger:first', bottomSliderCtrl);
        var sliderList = $('ul:first', bottomSliderCtrl);
        var sliderItems = $('li', sliderList);
        var sliderAmount = sliderItems.length;

        ctrlTrigger.hover(function () {
          sliderList.addClass('titles-on');
        });

        bottomSliderCtrl.mouseleave(function () {
            sliderList.removeClass('titles-on');
        });
        
        var scrollers = $(".scroller").mCustomScrollbar({
            scrollButtons : {
                enable : true
            },
            autoDraggerLength : true,
            advanced : {
                updateOnBrowserResize : true,
                updateOnContentResize : true
            },
            contentTouchScroll : true
        });

        var bottomSubSlider = $('.additional-slider .sub-slider:first').bxSlider({
            'controls' : false,
            'pagerCustom' : '.additional-slider .sub-slider-ctrl',
            'mode' : 'fade',
            'easing' : 'ease-in-out',
            'adaptiveHeight' : true
        });

        var bottomSlider = $('.additional-slider .bxslider:first').bxSlider({
            'controls' : false,
            'pagerCustom' : '.additional-slider .container-slider-controls ul',
            'mode' : 'horizontal',
            'easing' : 'ease-in-out',
            'adaptiveHeight' : true
        });

    }

    var qtyField = $('#edit-qty');

    if (qtyField.length > 0) {
        qtyField.data('prevVal', 1);
        qtyField.val(1);

        var qtyFieldChange = function () {
            var theVal = qtyField.val();
            console.log('theVal', theVal);
            if (theVal > 25 || theVal < 1) {
                qtyField.val(qtyField.data('prevVal'));
            } else {
                qtyField.data('prevVal', theVal);
            }
        };

        // qtyField.change(qtyFieldChange);
        qtyField.keyup(qtyFieldChange);

        var xmod = 1;
        var ymod = 1;
        var modStep = 20; // step by PX

        var dragger = qtyField.draggable({
            cancel: false,
            scroll: false,
            revert: true,
            revertDuration: 0,
            drag: function(event, ui) {
                var pos = ui.position;

                if (pos.left < modStep && pos.left > -1*modStep && pos.top < modStep && pos.top > -1*modStep) {
                    xmod = 1;
                } else if ((pos.left > (modStep * xmod) && pos.left < modStep * (xmod + 1)) || (pos.top < -1*(modStep * xmod) && pos.top < -1*(modStep * (xmod + 1))))  {
                    xmod++;
                    qtyField.val(parseInt(qtyField.val()) + 1);
                    qtyFieldChange();
                } else if(pos.left < -1*(modStep * xmod) && pos.left < -1*(modStep * (xmod + 1)) || (pos.top > (modStep * xmod) && pos.top < modStep * (xmod + 1))) {
                    xmod++;
                    qtyField.val(parseInt(qtyField.val()) - 1);
                    qtyFieldChange();
                }
                
            }
        });
    }
    
    var samplesGrid = $('#samples-grid');
    var componentGrid = $('#component-grid');
	// initialize
	samplesGrid.masonry({
	  itemSelector: '.screen'
	});
    componentGrid.masonry({
      itemSelector: '.screen'
    });
	
	var scrollorama = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: true
		});	
			
		
	scrollorama.pin('#useful-components', 500, {
		offset: 150,
		onPin: function() {
			this.el.css('right', 0);
		},
		anim: (new TimelineLite())
	    .append(TweenMax.fromTo($('#useful-components-header'), 0.2, {css: {opacity: 0}, immediateRender: true}, {css:{opacity: 1}}))
	    .append(TweenMax.fromTo($('#useful-components-features'), 0.2, {css: {opacity: 0}, immediateRender: true}, {css:{opacity: 1}}))	
	});
	scrollorama.addTween(
		'#useful-components-features', 
		TweenMax.fromTo($('#component-grid'), 0.2, {css: {opacity: 0}, immediateRender: true}, {css:{opacity: 1}}, 200),
		0
	);
	
	if (Modernizr.touch) {
			var scrollPos = 0;
			// using iScroll but deacting -webkit-transform because pin wouldn't work becasue of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
			var myScroll = new iScroll('viewport-wrapper', {vScrollbar: true, hScroll: false, vScroll: true, bounce: false, useTransform: false, useTransition: false});
			function animationLoop () {
					// make sure to have the requestAnimationFrame polyfill by Paul Irish: https://gist.github.com/paulirish/1579671
					window.requestAnimationFrame(animationLoop);
					if (myScroll.y != scrollPos) { // if position has changed
							scrollPos = myScroll.y;
							// udate scrollcontainer position
							controller.setScrollContainerOffset(0, -myScroll.y);
							// force an immediate update
							controller.triggerCheckAnim(true);
					}
			}
			// when deactivating transform in iScroll (useTransform:false) requestAnimationFrame is not triggered during touchmove
			$("#viewport-wrapper").get(0).addEventListener("touchmove", function() {
					animationLoop ();
			});
			
			animationLoop ();
	}
	$('.footer-social').sharrre({
	  share: {
	  	googlePlus: true,
	  	facebook: true,
	  	twitter: true
	  },
	  template: '<div class="container"><div class="soc-item google"><a href=""><span class="name">Google +</span> <span class="count">1,600</span></a>' +
        '</div><div class="soc-item-holder"><div class="soc-item twitter"><a href=""><span class="name">Twitter</span> <span class="count">1,600</span></a></div>' +
        '<div class="soc-item facebook"><a href=""><span class="name">Facebook</span> <span class="count">1,600</span></a></div></div></div>',
	  urlCurl: 'http://dribbbleboard.com/js/sharrre.php',
	  enableHover: false,
	  className: '',
	  render: function(api, options){
		$(api.element).on('click', '.twitter', function() {
		api.openPopup('twitter');
		});
		$(api.element).on('click', '.facebook', function() {
		api.openPopup('facebook');
		});
		$(api.element).on('click', '.google', function() {
		api.openPopup('googlePlus');
		});	  
	  	$('.footer-social .google .count').text(options.count.googlePlus); 
	  	$('.footer-social .twitter .count').text(options.count.twitter);
		$('.footer-social .facebook .count').text(options.count.facebook);
	  }
	});	

	
	
	
});

function roundNum(num) {
    num = Math.round(num * 10) / 10;
    return num;
}