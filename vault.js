'use strict';
module.exports = function() {

//Create variables store value and key
	var _key = 0;
	var _value = 0;

//sets value in vault identified by its key
function setValue(key, value){
	_key = key;
	_value = value;
	return getValue();
}

//if key exists return the value, if key doesn't exist, return null
function getValue(key){
	if(_key){
		return _value;
	}else{
		return null;
	}
}


return{
	setValue: setValue,
	getValue: getValue
};
};