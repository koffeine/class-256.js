;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Class = factory();
  }
}(this, function() {
'use strict';

var C = 'constructor', // name of the constructor method
	X = 'extend'; // name of extend method

function Class() {}

Class[X] = function(subclass) {
	var self      = this,
		prototype = Object.create(self.prototype);

	subclass.call(prototype, self.prototype);


	var Extended = prototype.hasOwnProperty(C) ?
		prototype[C] :
		function() { return prototype[C].apply(this, arguments); };

	Extended.prototype = prototype;
	Extended[X] = self[X];

	return Extended;
};
return Class;
}));
