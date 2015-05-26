var copyPaste = function () {
    $(document).ready (function () {
        $(document).delegate('htmlBody', '', function (e) {
            //e.preventDefault();
            ajaxCall();
        });
    });
};

var ajaxCall = function (value) {
    $.ajax({
        type    : 'POST',
        url     : 'jareds controller',
        cache   : false,
        success : function (data) {
            $('htmlBody').html(data); //whole page?
        }
    });
};

var beforePrint = function () {
    ajaxCall();
};

var afterPrint = function () {
    // afterPrint just makes sure to catch Safari
    ajaxCall();
};
if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener (function (mql) {
        if (mql.matches) {
            beforePrint();
            ajaxCall();
        } else {
            afterPrint();
            ajaxCall();
        }
    });
}

window.onselect = copyPaste;
window.onbeforeprint = beforePrint;
window.onafterprint = afterPrint;