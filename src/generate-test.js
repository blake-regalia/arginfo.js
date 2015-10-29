'use strict';

// import map of data types
let h_types = require(__dirname+'/types.js');

// prepare array to build lines
let a_lines = [];

// each item in map
for(let s_key in h_types) {

	// ref item info
	let h_info = h_types[s_key];

	// prepare template vars
	let s_new = `new ${s_key}(${h_info.input || ''})`;

	// type uses non-standard constructor
	if('string' === typeof h_info.construct) {

		// use custom constructor instead
		s_new = h_info.construct;
	}

	// output should match exactly
	let s_should = `.should.equal("[${s_key}: ${h_info.output}]");`;

	// no output given for test
	if('undefined' === typeof h_info.output) {

		// just make sure beginning matches
		s_should = `.substr(0,${s_key.length+3}).should.equal("[${s_key}: ");`;
	}

	// build code line string
	a_lines.push(`
	// ${s_key.toLowerCase()}
	it('identifies ${s_key} instances', () => {
		arginfo(${s_new})${s_should}
	});`);
}


console.log(`
// module to test
let arginfo = require('../');

// assertion module
let should = require('should');

// tests
describe('arginfo', () => {
	${a_lines.join('\n')}

	it('identifies null', () => {
		arginfo(null).should.equal('[object: null]');
	});

	it('allows setting depth', () => {
		arginfo.depth(1);
		arginfo({a:{b:{c:'d'}}}).should.equal('[object: { a: { b: [Object] } }]');
	});
});`);