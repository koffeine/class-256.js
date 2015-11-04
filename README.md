## class-256.js

[![GitHub release](https://img.shields.io/github/release/koffeine%2Fclass-256.js.svg)](https://github.com/koffeine/class-256.js)
[![npm version](https://img.shields.io/npm/v/class-256.js.svg)](https://www.npmjs.com/package/class-256.js)
![Bower version](https://img.shields.io/bower/v/class-256.js.svg)
[![devDependency Status](https://david-dm.org/koffeine/class-256.js/dev-status.svg)](https://david-dm.org/koffeine/class-256.js#info=devDependencies)

class-256.js is a 256 byte JavaScript classical inheritance pattern library (or 398 bytes with [UMD](https://github.com/umdjs/umd) pattern).  
Originally based on [augment](https://github.com/javascript/augment) and [extend](https://github.com/jazdw/extend).

### Features

* OOP style declaration
* Constructor methods (optional - if you don't provide one, the parent's constructor will be called upon instantiation)
* Working instanceof
* Private/privileged properties/methods
* Parent properties/methods accessible through parent parameter

### Usage

```js
var HelloWorld = Class.extend(function() {
	this.hello = 'Hello '; // public property

	var world = 'World!'; // private/privileged property

	this.constructor = function() { // constructor method
		// do nothing
	};

	this.say = function() { // public method
		return privileged.call(this);
	};

	function privileged() { // private/privileged method
		return this.hello + world;
	}
});

var HelloWorldTwo = HelloWorld.extend(function(parent) {
	this.hello = 'Hi ';

	this.constructor = function() {
		parent.constructor.apply(this, arguments); // call parent contructor
	};
});

var helloWorld = new HelloWorld()
helloWorld.say() // 'Hello World!'
helloWorld instanceof HelloWorld // true

var helloWorldTwo = new HelloWorldTwo()
helloWorldTwo.say() // 'Hi World!'
helloWorldTwo instanceof HelloWorld2 // true
helloWorldTwo instanceof HelloWorld // true
```

### Installation

NPM

```
npm install class-256.js
```

Bower

```
bower install class-256.js
```

Browser

```html
<script src="https://github.com/koffeine/class-256.js/blob/master/dist/class.umd.min.js" charset="utf-8"></script>
```

### Files

| UMD | Minified | File                  |
|:----|:---------|:----------------------|
|     |          | [dist/class.js](https://github.com/koffeine/class-256.js/blob/master/dist/class.js)         |
|     | ✓        | [dist/class.min.js](https://github.com/koffeine/class-256.js/blob/master/dist/class.min.js)     |
| ✓   |          | [dist/class.umd.js](https://github.com/koffeine/class-256.js/blob/master/dist/class.umd.js)     |
| ✓   | ✓        | [dist/class.umd.min.js](https://github.com/koffeine/class-256.js/blob/master/dist/class.umd.min.js) |

### License

Copyright © 2015 Horváth Kornél

Licensed under the [MIT License](https://github.com/koffeine/class-256.js/blob/master/LICENSE.md).