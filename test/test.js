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

		var helloWorld = new HelloWorld();

		assert.equal(helloWorld.say(), 'Hello World!');
		assert.instanceOf(helloWorld, HelloWorld);

		var helloWorldTwo = new HelloWorldTwo();

		assert.equal(helloWorldTwo.say(), 'Hi World!');
		assert.instanceOf(helloWorldTwo, HelloWorldTwo);
		assert.instanceOf(helloWorldTwo, HelloWorld);
	});
});