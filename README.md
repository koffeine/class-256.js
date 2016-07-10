## class-256.js

[![npm version](https://img.shields.io/npm/v/class-256.js.svg)](https://www.npmjs.com/package/class-256.js)
![Bower version](https://img.shields.io/bower/v/class-256.js.svg)
[![devDependency Status](https://david-dm.org/koffeine/class-256.js/dev-status.svg)](https://david-dm.org/koffeine/class-256.js#info=devDependencies)
![Travis](https://img.shields.io/travis/koffeine/class-256.js.svg)

class-256.js is a less than 256 byte JavaScript classical inheritance pattern library (221 bytes minified or 363 bytes minified with [UMD](https://github.com/umdjs/umd) pattern).  
Originally based on [augment](https://github.com/javascript/augment) and [extend](https://github.com/jazdw/extend).

### Features

* OOP style declaration
* Constructor methods (optional - if you don't provide one, the parent's constructor will be called upon instantiation)
* Working instanceof
* Public and private/privileged properties/methods
* Non-overridden public properties/methods defined in parent naturally accessible
* Overridden public methods defined in parent accessible through parent parameter

### Basic usage

```js
var HelloWorld = Class.extend(function() { // default name of .extend() can be changed via constant
	this.greeting = 'Hello '; // public property

	var world = 'World!'; // private property

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
});

var helloWorld = new HelloWorld()
helloWorld.say() // 'Hello World!'
helloWorld instanceof HelloWorld // true

var hiWorld = new HelloWorld('Hi ')
hiWorld.say() // 'Hi World!'
hiWorld instanceof HelloWorld // true
```

### Extending

```js
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
emptyExample.isValid() // false

var nameExample = new Extended('John', null);
nameExample.isValid() // false

var addressExample = new Extended(null, 'London');
addressExample.isValid() // false

var validExample = new Extended('John', 'London');
validExample.isValid() // true
```

For more examples see [test/test.js](https://github.com/koffeine/class-256.js/blob/master/test/test.js).

### Installation

NPM

```sh
npm install class-256.js
```

Bower

```sh
bower install class-256.js
```

Browser

```html
<script src="https://github.com/koffeine/class-256.js/blob/master/dist/class.umd.min.js"></script>
```

### Files

| UMD | Minified | File                                                                                                |
|:----|:---------|:----------------------------------------------------------------------------------------------------|
| ✓   | ✓        | [dist/class.umd.min.js](https://github.com/koffeine/class-256.js/blob/master/dist/class.umd.min.js) |
|     | ✓        | [dist/class.min.js](https://github.com/koffeine/class-256.js/blob/master/dist/class.min.js)         |
| ✓   |          | [dist/class.umd.js](https://github.com/koffeine/class-256.js/blob/master/dist/class.umd.js)         |
|     |          | [dist/class.js](https://github.com/koffeine/class-256.js/blob/master/dist/class.js)                 |


### Develop

#### Requirements

Building requires [NodeJS](https://nodejs.org) version 4.0.0 or later.

#### Set up

```sh
npm install
```

#### Build

Running the following command will start [Gulp](http://gulpjs.com), which will run [ESLint](http://eslint.org), create the [UMD](https://github.com/umdjs/umd) version, run [Mocha](http://mochajs.org)/[Chai](http://chaijs.com) tests and run [UglifyJS](http://lisperator.net/uglifyjs):

```sh
gulp
```

### License

Copyright © 2015-2016 Horváth Kornél

Licensed under the [MIT License](https://github.com/koffeine/class-256.js/blob/master/LICENSE).
