(function($) {
    $(function() {

        startupKit.uiKitHeader._inFixedMode('.dockbar');

        window.manual = window.manual || {};

        manual.init = function() {
            manual.dockbar.init();
            manual.help();
            manual.sectionScroller();
        };

        manual.sectionScroller = function() {

            $(window).keydown(function(e) {

                $('.mcontent > div:visible').find('section').each(function() {
                    var instance = $(this);
                    var windowScrollPos = $(window).scrollTop() + 100;
                    var sectionPos = instance.position().top;
                    if (windowScrollPos >= sectionPos) {
                        current = instance;
                    }
                });
                if (e.which == 40) {

                    $.scrollTo($(current).closest('section').next(), {
                        axis : 'y',
                        duration : 500
                    });
                    current = $(current).closest('section').next();
                }
            });

        };

        manual.dockbar = $('.dockbar');

        manual.dockbar.init = function() {
            var instance = this;
            instance.addClass('active');

            instance.mouseover(function() {
                $(this).removeClass('normal');
                $(this).addClass('active');
            });
            instance.mouseout(function() {
                $(this).removeClass('active');
                $(this).addClass('normal');
            });
            $(window).scroll(function() {
                $(instance).removeClass('active');
                $(instance).addClass('normal');
            });

            _locationChange = function(hash) {
                $('.mcontent > div').hide();
                if (hash == undefined || hash == null) {
                    hash = window.location.hash;
                }
                if (hash == '' || hash == "#" || hash == "#firstStep" || hash == "#lastStep") {
                    hash = '#main-page';
                }
                var blog= /\#b1\-*/;
                var contacts = /\#cs\-*/;
                if(hash.match(blog)){
                    hash = "#blocks-of-blog";
                    window.location.hash = '#blocks-of-blog';
                }else if(hash.match(contacts)){
                    hash = "#blocks-of-contact";
                    window.location.hash = '#blocks-of-contact';
                }
                
                $(hash).fadeIn("slow");
            };
            _locationChange();

            if ($('li.active', this).length == 0) {
                $('li a[href=' + window.location.hash + ']').parent().addClass('active');
            }

            $('li a, .brand', this).click(function() {
                $('li').removeClass('active');
                $(this).parent().addClass('active');
                _locationChange($(this).attr('href'));
            });
            $('li a:not(.inner-link)').click(function() {
                $('li').removeClass('active');
                $(this).parent().addClass('active');
                _locationChange($(this).attr('href'));
                $('html').removeClass('read-manual');
                $('.manual > div').hide();
            });

        };

        manual.help = function() {
            $('.manual > div').hide();
            var helpButton = $('.read-man');
            helpButton.each(function() {
                $(this).hover(function() {
                    var id = $(this).attr('id');
                    $('.' + id + '.mask').height($('section.' + id).height());

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

        };

        manual.init();

    });
})(jQuery);
