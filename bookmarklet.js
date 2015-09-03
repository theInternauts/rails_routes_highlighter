javascript: (function (window){
	function isRowTarget(node){				
		var elm = node;
		var foundTarget = false;
		if(elm !== undefined && elm !== null && elm.nodeName == "TR"){			
			if(Array.prototype.slice.call(elm.classList).indexOf("route_row") >= 0){				
				foundTarget = true;
			}
		}
		if(foundTarget){
			return elm;
		} else {
			return false;
		}
	}

	function isDelegatedTarget(node){				
		var isDelegate = (node !== null && node.id == 'test_root');
		var result = isRowTarget(node);
		var found = (isDelegate || result);				
		if(!found && node){
			return isDelegatedTarget(node.parentNode);				
		} else {					
			return result;
		}
	}

	function toggleHighlight(evt){
		evt.stopPropagation();
		var targetClicked = isDelegatedTarget(evt.target);				
		if(targetClicked){
			if (targetClicked.classList.contains("frozen")){
				targetClicked.classList.remove("frozen");
			} else {
				targetClicked.classList.add("frozen");
			}
		}
	}

	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = 'tr.route_row:hover { background-color: #ddfcf7; } .frozen { background-color: #fcfadd; }';
	document.getElementsByTagName('head')[0].appendChild(style);
	document.addEventListener('click', toggleHighlight);
})(window);

// http://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// http://benalman.com/projects/run-jquery-code-bookmarklet/