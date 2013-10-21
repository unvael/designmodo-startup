/**
 * JavaScript code for all footer samples.
 * Use namespaces.
 */

window.startupKit = window.startupKit || {};
startupKit.uiKitFooter = startupKit.uiKitFooter || {};

/* Footer 1*/
startupKit.uiKitFooter.footer1 = function() {

};

/* Footer 2*/
startupKit.uiKitFooter.footer2 = function() {

};

/* Footer 3*/
startupKit.uiKitFooter.footer3 = function() {

};

/* Footer 4*/
startupKit.uiKitFooter.footer4 = function() {

};

/* Footer 5*/
startupKit.uiKitFooter.footer5 = function() {

};

/* Footer 6*/
startupKit.uiKitFooter.footer6 = function() {

};

/* Footer 7*/
startupKit.uiKitFooter.footer7 = function() {

};

/* Footer 8*/
startupKit.uiKitFooter.footer8 = function() {

};

/* Footer 9*/
startupKit.uiKitFooter.footer9 = function() {

};

/* Footer 10*/
startupKit.uiKitFooter.footer10 = function() {

};

/* Footer 11*/
startupKit.uiKitFooter.footer11 = function() {

};

/* Footer 12*/
startupKit.uiKitFooter.footer12 = function() {

};

/* Footer 13*/
startupKit.uiKitFooter.footer13 = function() {

};

/* Footer 14*/
startupKit.uiKitFooter.footer14 = function() {

};

/* Footer 15*/
startupKit.uiKitFooter.footer15 = function() {

};

(function($) {
    $(function() {
        for (footer in startupKit.uiKitFooter) {
            footerNumber = footer.slice(6);
            if (jQuery('.footer-' + footerNumber).length != 0) {
                startupKit.uiKitFooter[footer]();
            };
        }
        $(window).load(function() {
            $(window).resize().scroll();
        });
        if (/msie/i.test(navigator.userAgent)) {
            $('img').each(function() {
                $(this).css({
                    width : $(this).attr('width') + 'px',
                    height : 'auto'
                });
            });
        }
    });
})(jQuery); 