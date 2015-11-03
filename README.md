## class-256.js

class-256.js is a very small (256 bytes minified, or 398 bytes with [UMD](https://github.com/umdjs/umd) pattern) JavaScript classical inheritance pattern library.
Originally based on [augment](https://github.com/javascript/augment) and [extend](https://github.com/jazdw/extend).

### API

```js
var HelloWorld = Class.extend(function() {
	this.hello = 'Hello '; // public property

	var world = 'World!'; // private property

	this.constructor = function() { // constructor method
		privileged.call(this);
	};

	this.say = function(msg) { // public method
		console.log(msg);
	};

	function privileged() { // private method
		this.say(this.hello + world);
	}
});

var HelloWorld2 = HelloWorld.extend(function(parent) {
	this.hello = 'Hi ';

	this.constructor = function() {
		parent.constructor.apply(this, arguments); // call parent contructor
	};
});
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

* dist/class.js: no UMD, unminified
* dist/class.min.js: no UMD, minified
* dist/class.umd.js: UMD, unminified
* dist/class.umd.min.js: UMD, minified

### License

Copyright © 2015 Horváth Kornél

Licensed under the [MIT License](https://github.com/koffeine/class-256.js/blob/master/LICENSE.md).