javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
		helper.getAllInputValues()
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//cdn.jsdelivr.net/gh/xypro18/jscript/helper.js')