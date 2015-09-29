/*
  This is the common js file
  */

  function toFixed (origin, len, prefix) {
  	origin = origin.toString();
  	if (origin.length > len) 
  		return origin.substr(origin.length - len);
  	else if (origin.length == len) 
  		return origin;
  	else {
	  	var result = '';
	  	for (var i = 0, max = len - origin.length; i < max; i++) {
	  		result += prefix;
	  	}		
	  	result += origin;
	  	return result;
  	}
  }
