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

var CRT = 'constructor'; // name of the constructor method

function Class() {}

Class.extend = function(subclass) {
	var self          = this,
		selfPrototype = self.prototype,
		prototype     = Object.create(selfPrototype);

	subclass.call(prototype, selfPrototype);


	var Extended = prototype.hasOwnProperty(CRT) ?
		prototype[CRT] :
		function() { return prototype[CRT].apply(self, arguments); };

	Extended.prototype = prototype;
	Extended.extend = self.extend;

	return Extended;
};
return Class;
}));
