# arginfo

## Install
```sh
$ npm install arginfo
```

## Usage

Calling `arginfo(arg)` returns a string representation of `arg` using node.js' `util.inspect`. It prefixes the value with the type of the argument (whether it is a primitive type or a built-in object) such that the formatting is consistent across all built-in types:

```javascript
arginfo(2); // [number: 2]
arginfo({}); // [object: {}]
arginfo('?'); // [string: '?']
arginfo(true); // [boolean: true]
arginfo(/org/); // [RegExp: /org/]
arginfo(new Set()); // [Set: {}]
arginfo(new String('')); // [String: '']
arginfo(new Error('wtf')); // [Error: wtf]
```

## Example
```javascript
var arginfo = require('arginfo');

function test(str) {
	if('string' !== typeof str) {
		console.error('test expects string. instead got: '+arginfo(str));
	}
}
```

## Types

Primitive types:
 * boolean
 * number
 * string
 * object
 * function
 * symbol

Built-in objects:
 * Boolean
 * Number
 * String
 * Array
 * Error
 * RegExp
 * Date
 * Map
 * Set
 * WeakMap
 * WeakSet
 * Promise
 * DataView
 * ArrayBuffer
