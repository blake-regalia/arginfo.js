
// module to test
let arginfo = require('../');

// assertion module
let should = require('should');

// tests
describe('arginfo', () => {
	
	// date
	it('identifies Date instances', () => {
		arginfo(new Date(1)).should.equal("[Date: Wed Dec 31 1969 16:00:00 GMT-0800 (PST)]");
	});

	// regexp
	it('identifies RegExp instances', () => {
		arginfo(new RegExp(1)).should.equal("[RegExp: /1/]");
	});

	// map
	it('identifies Map instances', () => {
		arginfo(new Map()).should.equal("[Map: {}]");
	});

	// set
	it('identifies Set instances', () => {
		arginfo(new Set()).should.equal("[Set: {}]");
	});

	// weakmap
	it('identifies WeakMap instances', () => {
		arginfo(new WeakMap()).should.equal("[WeakMap: {}]");
	});

	// weakset
	it('identifies WeakSet instances', () => {
		arginfo(new WeakSet()).should.equal("[WeakSet: {}]");
	});

	// promise
	it('identifies Promise instances', () => {
		arginfo(new Promise(function(){})).substr(0,10).should.equal("[Promise: ");
	});

	// string
	it('identifies String instances', () => {
		arginfo(new String(1)).should.equal("[String: '1']");
	});

	// number
	it('identifies Number instances', () => {
		arginfo(new Number(1)).should.equal("[Number: 1]");
	});

	// error
	it('identifies Error instances', () => {
		arginfo(new Error(1)).should.equal("[Error: 1]");
	});

	// boolean
	it('identifies Boolean instances', () => {
		arginfo(new Boolean(1)).should.equal("[Boolean: true]");
	});

	// arraybuffer
	it('identifies ArrayBuffer instances', () => {
		arginfo(new ArrayBuffer()).should.equal("[ArrayBuffer: {}]");
	});

	// dataview
	it('identifies DataView instances', () => {
		arginfo(new DataView(new ArrayBuffer())).should.equal("[DataView: {}]");
	});
});
