'use strict';

// built-in object types to test for

// key: check
//   boolean whether or not to check the global scope for its existence

// key: format
// ===================
// value 	meaning
// 0		util.inspect formats it perfectly
// 1 		util.inspect only outputs the value
// 2 		(mostly es6 objects) util.inspect formats it plainly (without these characters: `[ : ]`)

// key: input
//   input to pass to constructor for testing

// key: output
//   expected output string to match given input

// key: construct
//   custom javascript how to construct an instance of this object
module.exports = {
	Date: {
		format: 1,
		input: 1,
		output: (new Date(1))+'',
	},
	RegExp: {
		format: 1,
		input: 1,
		output: '/1/',
	},
	Map: {
		format: 2,
		output: '{}',
	},
	Set: {
		format: 2,
		output: '{}',
	},
	WeakMap: {
		format: 2,
		output: '{}',
	},
	WeakSet: {
		format: 2,
		output: '{}',
	},
	Promise: {
		check: true,
		format: 2,
		input: 'function(){}',
	},
	// Proxy: {
	// 	construct: 'Proxy.create({},{})',
	// },
	String: {
		format: 0,
		input: 1,
		output: "'1'",
	},
	Number: {
		format: 0,
		input: 1,
		output: '1',
	},
	Error: {
		format: 0,
		input: '1',
		output: '1',
	},
	Boolean: {
		format: 0,
		input: 1,
		output: 'true',
	},
	ArrayBuffer: {
		format: 2,
		output: '{}',
	},
	DataView: {
		check: true,
		format: 2,
		construct: 'new DataView(new ArrayBuffer())',
		output: '{}',
	},
};