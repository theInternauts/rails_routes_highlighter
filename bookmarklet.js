javascript: (function () {
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = 'tr.route_row:hover { background-color: #ddfcf7; }';
		document.getElementsByTagName('head')[0].appendChild(style);
}());

// http://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// http://benalman.com/projects/run-jquery-code-bookmarklet/