/* eslint-env mocha */
'use strict';

var chai  = require('chai'),
	Class = require('../dist/class.umd');

var assert = chai.assert;

describe('test', function() {
	it('should call defined constructor', function() {
		var Test = Class.extend(function() {
			this.constructor = function() {
				this.value = true;
			};
		});

		var test = new Test();

		assert.isDefined(test.value);
		assert.isTrue(test.value);
	});

	it('should call parent\'s constructor when there isn\'t one defined', function() {
		var Base = Class.extend(function() {
			this.constructor = function() {
				this.value = true;
			};
		});

		var Extended = Base.extend(function() {
			this.value = false;
		});

		var extended = new Extended();

		assert.isDefined(extended.value);
		assert.isTrue(extended.value);
	});

	it('should overwrite methods/properties defined with the same name in the parent class', function() {
		var Base = Class.extend(function() {
			this.value = false;

			this.say = function() {
				return 1;
			};
		});

		var Extended = Base.extend(function() {
			this.value = true;

			this.say = function() {
				return 2;
			};
		});

		var extended = new Extended();

		assert.isTrue(extended.value);
		assert.equal(extended.say(), 2);
	});

	it('should be able to see public methods/properties defined in parent class', function() {
		var Base = Class.extend(function() {
			this.value = true;

			this.say = function(value) {
				return value;
			};
		});

		var Extended = Base.extend(function() {
			this.tell = function() {
				return this.say(this.value);
			};
		});

		var extended = new Extended();

		assert.isTrue(extended.tell());
	});

	it('should be able to .call()/.apply() public methods defined in parent class', function() {
		var Base = Class.extend(function() {
			this.value = true;

			this.say = function(value) {
				return value;
			};
		});

		var Extended = Base.extend(function(parent) {
			this.tell = function() {
				return parent.say.call(this, this.value);
			};
		});

		var extended = new Extended();

		assert.isTrue(extended.tell());
	});

	it('should be able to see public methods/properties defined in descendant class', function() {
		var Base = Class.extend(function() {
			this.say = function() {
				return this.tell(this.value);
			};
		});

		var Extended = Base.extend(function() {
			this.value = true;

			this.tell = function(value) {
				return value;
			};
		});

		var extended = new Extended();

		assert.isTrue(extended.say());
	});

	it('private/privileged methods should be able to see public methods/properties when called with call or apply', function() {
		var HelloWorld = Class.extend(function() {
			this.hello = 'Hello ';

			this.constructor = function() {
				this.world = 'World!';
			};

			this.say = function() {
				return tell.call(this);
			};

			this.sayMore = function() {
				return tell.apply(this, []);
			};

			function tell() {
				return this.hello + this.world;
			}
		});

		var helloWorld = new HelloWorld();

		assert.equal(helloWorld.say(), 'Hello World!');
		assert.equal(helloWorld.sayMore(), 'Hello World!');
	});

	it('instanceOf should work', function() {
		var Top    = Class.extend(function() {}),
			Middle = Top.extend(function() {}),
			Bottom = Middle.extend(function() {});

		var top    = new Top(),
			middle = new Middle(),
			bottom = new Bottom();

		assert.notInstanceOf(top, Bottom);
		assert.notInstanceOf(top, Middle);
		assert.instanceOf(top, Top);
		assert.instanceOf(top, Class);
		assert.instanceOf(top, Object);

		assert.notInstanceOf(top, Bottom);
		assert.instanceOf(middle, Middle);
		assert.instanceOf(middle, Top);
		assert.instanceOf(middle, Class);
		assert.instanceOf(middle, Object);

		assert.instanceOf(bottom, Bottom);
		assert.instanceOf(bottom, Middle);
		assert.instanceOf(bottom, Top);
		assert.instanceOf(bottom, Class);
		assert.instanceOf(bottom, Object);
	});

	it('Basic usage from README.md should work', function() {
		var HelloWorld = Class.extend(function() { // default name of .extend() can be changed via constant
			this.greeting = 'Hello '; // public property

			var world = 'World!'; // private static property

			this.constructor = function(greeting) { // default name of .constructor() can be changed via constant
				if (typeof greeting != 'undefined') {
					this.greeting = greeting;
				}
			};

			this.say = function() { // public method
				return privileged.call(this);
			};

			function privileged() { // private/privileged method
				return this.greeting + world;
			}

			this.setWorld = function(newWorld) {
				world = newWorld;
			};

			this.getWorld = function() {
				return world;
			};
		});

		var helloWorld = new HelloWorld();

		assert.equal(helloWorld.say(), 'Hello World!');
		assert.instanceOf(helloWorld, HelloWorld);

		var hiWorld = new HelloWorld('Hi ');

		assert.equal(hiWorld.say(), 'Hi World!');
		assert.instanceOf(hiWorld, HelloWorld);

		helloWorld.setWorld('Earth!');
		assert.equal(helloWorld.say(), 'Hello Earth!');
		assert.equal(hiWorld.say(), 'Hi Earth!'); // Because 'world' is a static property
	});

	it('Extending from README.md should work', function() {
		function isNonEmptyString(value) {
			return typeof value == 'string' && value.length > 0;
		}

		var Base = Class.extend(function() {
			this.name = '';

			this.constructor = function(name) {
				this.name = name;
			};

			// check name
			this.isValid = function() {
				return isNonEmptyString(this.name);
			};
		});


		var Extended = Base.extend(function(parent) {
			this.address = '';

			this.constructor = function(name, address) {
				parent.constructor.call(this, name); // call parent constructor
				// could be also written as: this.name = name;

				this.address = address;
			};

			// check name and address
			this.isValid = function() {
				return parent.isValid.call(this) && isNonEmptyString(this.address);
				// could be also written as: return isNonEmptyString(this.name) && isNonEmptyString(this.address);
			};
		});

		var emptyExample = new Extended(null, null);

		assert.isFalse(emptyExample.isValid());

		var nameExample = new Extended('John', null);

		assert.isFalse(nameExample.isValid());

		var addressExample = new Extended(null, 'London');

		assert.isFalse(addressExample.isValid());

		var validExample = new Extended('John', 'London');

		assert.isTrue(validExample.isValid());
	});
});