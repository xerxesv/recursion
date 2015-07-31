// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, rootElem){
	var returnedElems = [];
	var rootElem = rootElem ? rootElem : document.body;
	var validChildren = Array.prototype.slice.call(rootElem.childNodes).filter(function(node){
		return node.nodeType === 1;
	});
	console.log(returnedElems);
	
	if(rootElem.classList.contains(className)){
		returnedElems.push(rootElem);
		console.log("pushing " + rootElem.tagName);
		
	}
	
	if (validChildren.length === 0){
		return returnedElems;
	}
	else {
		validChildren.forEach(function(child){
			returnedElems = returnedElems.concat(getElementsByClassName(className, child));
			console.log("now returned elems is :" + returnedElems);
		});
	}
	
	return returnedElems;
};
