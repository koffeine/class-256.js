'use strict';

// changeable contants
var C = 'constructor', // name of the constructor method
	X = 'extend'; // name of extend method

function Class() {}

Class[X] = function(subclassFactory) {
	var prototype = Object.create(this.prototype);

	subclassFactory.call(prototype, this.prototype, prototype);

	function Extended() {
		prototype[C].apply(this, arguments);
	}

	Extended.prototype = prototype;
	Extended[X] = this[X];

	return Extended;
};
