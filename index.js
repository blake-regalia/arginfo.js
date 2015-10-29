
// native import
var util = require('util');

// default depth
var n_depth = null;

//
module.exports = function(z_a) {

	// default mode: util.inspect only outputs value
	var n_mode = 1;

	// fetch type
	var s_type = typeof z_a;

	// object may be a built-in object
	if('object' === s_type && null !== z_a) {

		// array
		if(Array.isArray(z_a)) {
			s_type = 'Array';
		}
		// date
		else if(z_a instanceof Date) {
			s_type = 'Date';
			n_mode = 1;
		}

		// regexp
		else if(z_a instanceof RegExp) {
			s_type = 'RegExp';
			n_mode = 1;
		}

		// map
		else if(z_a instanceof Map) {
			s_type = 'Map';
			n_mode = 2;
		}

		// set
		else if(z_a instanceof Set) {
			s_type = 'Set';
			n_mode = 2;
		}

		// weakmap
		else if(z_a instanceof WeakMap) {
			s_type = 'WeakMap';
			n_mode = 2;
		}

		// weakset
		else if(z_a instanceof WeakSet) {
			s_type = 'WeakSet';
			n_mode = 2;
		}

		// promise
		else if('function' === typeof global['Promise'] && z_a instanceof Promise) {
			s_type = 'Promise';
			n_mode = 2;
		}

		// string
		else if(z_a instanceof String) {
			s_type = 'String';
			n_mode = 0;
		}

		// number
		else if(z_a instanceof Number) {
			s_type = 'Number';
			n_mode = 0;
		}

		// error
		else if(z_a instanceof Error) {
			s_type = 'Error';
			n_mode = 0;
		}

		// boolean
		else if(z_a instanceof Boolean) {
			s_type = 'Boolean';
			n_mode = 0;
		}

		// arraybuffer
		else if(z_a instanceof ArrayBuffer) {
			s_type = 'ArrayBuffer';
			n_mode = 2;
		}

		// dataview
		else if('function' === typeof global['DataView'] && z_a instanceof DataView) {
			s_type = 'DataView';
			n_mode = 2;
		}
		// generator
		else if(z_a.constructor.name === 'GeneratorFunction') {
			s_type = 'Generator';
		}
	}	

	//
	var s_value = util.inspect(z_a, {depth: n_depth});

	//
	switch(n_mode) {

		// util.inspect outputs perfectly
		case 0:
			return s_value;

		// util.inspect only outputs value
		case 1:
			return '['+s_type+': '+s_value+']';

		// util.inspect formats it plainly
		case 2:
			return '['+s_type+': '+s_value.substr(s_type.length+1)+']';
	}
};

//
module.exports.depth = function(n_set) {
	if('number' !== typeof n_set) n_depth = null;
	else n_depth = n_set;
};

