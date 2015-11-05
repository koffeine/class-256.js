/* globals require, describe, it */
'use strict';

var chai  = require('chai'),
	Class = require('../dist/class.umd');

var assert = chai.assert;

describe('test', function() {
	it('should run', function() {
		var HelloWorld = Class.extend(function() {
			this.hello = 'Hello '; // public property

			var world = 'World!'; // private/privileged property

			this.constructor = function() { // constructor method (default name can be changed via constant)
				this.say(); // test
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

			this.say = function() {
				return parent.say.call(this); // call parent method
			};
		});

		var helloWorld = new HelloWorld();

		assert.equal(helloWorld.say(), 'Hello World!');
		assert.instanceOf(helloWorld, HelloWorld);

		var helloWorldTwo = new HelloWorldTwo();

		assert.equal(helloWorldTwo.say(), 'Hi World!');
		assert.instanceOf(helloWorldTwo, HelloWorldTwo);
		assert.instanceOf(helloWorldTwo, HelloWorld);
	});
});