;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Class = factory();
  }
}(this, function() {
function Class() {}

Class.extend = function(subclass) {
	var prototype = Object.create(this.prototype);

	subclass.call(prototype, this.prototype);


	var Extended = prototype.hasOwnProperty('constructor') ?
		prototype.constructor :
		function() { return prototype.constructor.apply(this, arguments); };

	Extended.prototype = prototype;
	Extended.extend = this.extend;

	return Extended;
};
return Class;
}));
