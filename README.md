## class-256.js

class-256.js is a 256 byte JavaScript classical inheritance pattern library (398 bytes with [UMD](https://github.com/umdjs/umd) pattern).  
Originally based on [augment](https://github.com/javascript/augment) and [extend](https://github.com/jazdw/extend).

### API

```js
var HelloWorld = Class.extend(function() {
	this.hello = 'Hello '; // public property

	var world = 'World!'; // private/privileged property

	this.constructor = function() { // constructor method
		privileged.call(this);
	};

	this.say = function(msg) { // public method
		console.log(msg);
	};

	function privileged() { // private/privileged method
		this.say(this.hello + world);
	}
});

var HelloWorld2 = HelloWorld.extend(function(parent) {
	this.hello = 'Hi ';

	this.constructor = function() {
		parent.constructor.apply(this, arguments); // call parent contructor
	};
});

var h = new HelloWorld(); // 'Hello World!'
var h2 = new HelloWorld2(); // 'Hi World!'
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