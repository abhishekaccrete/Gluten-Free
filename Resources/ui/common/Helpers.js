module.exports.boolToInt = function(strBool) {
	if (strBool === 'true') {
		return 1;
	} else {
		return 0;
	}	
}


module.exports.blurControl = function(control){
	control.blur();
};

