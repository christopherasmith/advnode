const chai = require('chai');
const expect = chai.expect;

let a = 1, b = 2, c = 3;
let mystring = "a not very long string";
let d = ["apple", "pear", "peach", "orange"];

try {
    expect(a).to.equal(1, 'test a failed');
    expect(b).to.equal(2, "test b failed");
    expect(b).to.equal(5, "test c failed");
}
catch(err) {console.log(err.message)}

try { expect(a == b).to.be.true("a not equal to b"); }
catch(err) {console.log(err.message)}

try { 
    expect(mystring).to.match(new RegExp(/very/)); 
    expect(mystring).to.match(/equal/); 
}
catch(err) {console.log(err.message)}

try { expect(mystring).to.not.match(/string/); }
catch(err) {console.log(err.message)}
