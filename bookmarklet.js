javascript: (function (window) {

		function isRowTarget(node) {
			// hardcoded to test for tr.route_row as the target node
			// returns the found node or FALSE
			var foundTarget = false;
			if(node && node.nodeName == "TR") {
				// Search for the CSS class!
				if(Array.prototype.slice.call(node.classList).indexOf("route_row") >= 0) {
					// Bingo!
					console.log("route_row element clicked!");
					foundTarget = true;
					
					// Now do something here...					
					
				}
			}
			return foundTarget ? node : false;
		}

		function isDelegatedTarget(node) {
			// hardcoded to consider #test_root as the delegate
			// returns the found node or FALSE
			var isDelegate = (node && node.id == 'test_root');
			window.result = isRowTarget(node);
			var found = (isDelegate || result);
			console.log('f: ', found, 'd: ', isDelegate, 'r: ', result);
			if(!found && node) {
				isDelegatedTarget(node.parentNode);				
			} else {
				return result;
			}
		}

		function toggleHighlight(evt) {
			console.log("toggling....");
			window.targetClicked = isDelegatedTarget(evt.target);
			if(targetClicked) {
				if (targetClicked.classList.contains("frozen")){
					targetClicked.classList.remove("frozen");
				} else {
					targetClicked.classList.add("frozen");
				}
			}
			console.log("toggle: ", targetClicked);
		}

		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = 'tr.route_row:hover { background-color: #ddfcf7; } .frozen { background-color: #fcfadd; }';
		document.getElementsByTagName('head')[0].appendChild(style);
		document.addEventListener('click', toggleHighlight);
}(window));

// http://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// http://benalman.com/projects/run-jquery-code-bookmarklet/