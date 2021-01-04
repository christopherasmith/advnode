// Native node.js assert library
// assert methods throw AssertionError


/*
    assert.ok(exp, message) ... evaluate expression and if false throw exception with given message 
    assert.equal(a,b, message) ... compare values of a and b and if not equal throw exception with given message 
    assert.fail(error | message) ... just throw an exception ... if new error type created throw that, 
                                        else throw AssertionError with given message
    assert.ifError(value) ... throw exception if value is undefined or null
    assert.match(value, regex, message) ... throw exception if value does not match regular expression
    assert.doesNotMatch(value, regex, message)




*/
const assert = require('assert');

let a = 1, b = 2, c = 3;
let mystring = "a not very long string";
let d = ["apple", "pear", "peach", "orange"];

try {
    assert.strictEqual(a, 1, "test a failed");
    assert.strictEqual(b, 2, "test b failed");
    assert.strictEqual(c, 5, "test c failed");
}
catch(err) {console.log(err.message)}

try { assert(a == b, "a not equal to b"); }
catch(err) {console.log(err.message)}

try { 
    assert.match(mystring, new RegExp(/very/)); 
    assert.match(mystring, new RegExp(/equal/)); 
}
catch(err) {console.log(err.message)}

try { assert.doesNotMatch(mystring, /string/); }
catch(err) {console.log(err.message)}
