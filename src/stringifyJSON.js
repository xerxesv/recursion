// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === "number" || typeof obj === "boolean"){
	  console.log(String(obj));
	  return String(obj);
  }
  else if (typeof obj === "string"){
	  console.log('"'+obj+'"');
	  return '"' + obj + '"';
  }
  else if (typeof obj === "object"){
	  if (obj === null) return "null";
	  else if (Array.isArray(obj)){
		  var arrStr = "[";
		  obj.forEach(function(element,index,arr){
			 arrStr += stringifyJSON(element);
			 if(index < arr.length - 1){
				 arrStr += ",";
			 }
		  });
		  arrStr += "]";
		  console.log(arrStr);
		  return arrStr;
	  }
	  else {
		  console.dir(obj);
		  var validKeys = Object.keys(obj).filter(function(key){
			 return obj[key] !== undefined && typeof obj[key] !== "function" 
		  });
		  var objStr = "{";
		  
		  validKeys.forEach(function(key,index,keys){
				  objStr = objStr + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
				  if(index < keys.length - 1) objStr += ",";
			});
		  objStr += "}";
		  
		  return objStr;
	  } 
  }
  else {
	  console.log("invalid");
	  return stringifyJSON(null);
  }
};
