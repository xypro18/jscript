javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
		helper.getSelectedInputValues("selectors", "input_values");
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//cdn.jsdelivr.net/gh/xypro18/jscript/helper.js')

javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
		helper.fillAllInputValues("input_values");
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//cdn.jsdelivr.net/gh/xypro18/jscript/helper.js')

javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
		helper.getAllInputValues("input_values");
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//cdn.jsdelivr.net/gh/xypro18/jscript/helper.js')