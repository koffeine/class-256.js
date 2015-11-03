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