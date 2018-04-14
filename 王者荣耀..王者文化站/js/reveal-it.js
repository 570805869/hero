


jQuery(function () {

    var options4 = {
        id: 'box4'
        , auto: false
        , trigger: 'on-visible'
    };
    $('.box4').initReveal(options4);
});


/**
 * perform global replacement
 * @param string source contains characters to be replaced
 * @param string search contains characters to be searched for
 * @param string replacement contains the replacement characters
 * @returns string result of replacement
 */
function replaceAllInstances(source, search, replacement) {
    var regex = new RegExp(search, "g");
    var result = source.replace(regex, replacement);
    return result;
}

$.fn.isOnScreen = function (x, y) {

    if (x == null || typeof x == 'undefined')
        x = 1;
    if (y == null || typeof y == 'undefined')
        y = 1;

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var height = this.outerHeight();
    var width = this.outerWidth();

    if (!width || !height) {
        return false;
    }

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    if (!visible) {
        return false;
    }

    var deltas = {
        top: Math.min(1, (bounds.bottom - viewport.top) / height),
        bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
        left: Math.min(1, (bounds.right - viewport.left) / width),
        right: Math.min(1, (viewport.right - bounds.left) / width)
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

};

/*
 * Init specified element so it can be gradually revealed.
 *
 * Limitations:
 *  Only works on backgrounds with a solid color.
 *
 *  @param options = {
 *       id:'box3'
 *      ,background='#ffffff' //default
 *      ,delay='0' //default
 *  }
 *
 */
$.fn.initReveal = function (options) {
    // console.log('selector:' + this.selector);
    var parent = $(this).parent();

    //grab a copy of the contents, then remove it from DOM
    var contents = $(this).clone();
    $(this).empty();

    var revealHtmlBlock = "<div class='reveal'> <div class='text reveal__inner reveal__inner-{class}'> </div> <div class='reveal__cover reveal__cover-{class}'> <div class='reveal__cover-section reveal__100'></div> <div class='reveal__cover-section reveal__90'></div> <div class='reveal__cover-section reveal__80'></div> <div class='reveal__cover-section reveal__70'></div> <div class='reveal__cover-section reveal__60'></div> <div class='reveal__cover-section reveal__50'></div> <div class='reveal__cover-section reveal__40'></div> <div class='reveal__cover-section reveal__30'></div> <div class='reveal__cover-section reveal__20'></div> <div class='reveal__cover-section reveal__10'></div> </div> </div>";
    revealHtmlBlock = replaceAllInstances(revealHtmlBlock, "{class}", options.id);

    $(revealHtmlBlock).appendTo(parent);
    contents.appendTo($('.reveal__inner-' + options.id));


    //trigger on-visible
    if (options.trigger !== undefined) {
        var revealOnScreenIntervalIdMap = {};
        function uncoverText() {
            var onscreen = $('.reveal__inner-box4').isOnScreen();
            if ($('.reveal__inner-' + options.id).isOnScreen()) {
                $('.reveal__cover-' + options.id).addClass('reveal__uncovered');
                revealOnScreenIntervalIdMap[options.id] = window.clearInterval(revealOnScreenIntervalIdMap[options.id]);
            }
        }
        function showTextWhenVisible() {
            revealOnScreenIntervalIdMap[options.id] = setInterval(uncoverText, 500);
        }
        showTextWhenVisible();
    }

};


