'use strict';

// changeable contants
var C = 'constructor', // name of the constructor method
	X = 'extend'; // name of extend method

function Class() {}

Class[X] = function(subclass) {
	var prototype = Object.create(this.prototype);

	subclass.call(prototype, this.prototype);


	var Extended = prototype.hasOwnProperty(C) ?
		prototype[C] :
		function() { prototype[C].apply(this, arguments); };

	Extended.prototype = prototype;
	Extended[X] = this[X];

	return Extended;
};
