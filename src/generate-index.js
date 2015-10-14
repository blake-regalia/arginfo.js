'use strict';

// import map of data types
let h_types = require(__dirname+'/types.js');

// prepare array to build lines
let a_lines = [];

// each item in map
for(let s_key in h_types) {

	// prepare template vars
	let s_defined = '';
	
	// ref item info
	let h_info = h_types[s_key];

	// type is non-standard
	if(h_info.check) {

		// check constructor is defined in scope
		s_defined = `'function' === typeof global['${s_key}'] && `;
	}

	// build code line string
	a_lines.push(`
		// ${s_key.toLowerCase()}
		else if(${s_defined}z_a instanceof ${s_key}) {
			s_type = '${s_key}';
			n_mode = ${h_info.format};
		}`);
}


console.log(`
// native import
var util = require('util');

//
module.exports = function(z_a) {

	// default mode: util.inspect only outputs value
	var n_mode = 1;

	// fetch type
	var s_type = typeof z_a;

	// object may be a built-in object
	if('object' === s_type) {

		// array
		if(Array.isArray(z_a)) {
			s_type = 'Array';
		}${a_lines.join('\n')}
		// generator
		else if(z_a.constructor.name === 'GeneratorFunction') {
			s_type = 'Generator';
		}
	}	

	//
	var s_value = util.inspect(z_a, 5);

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
`);