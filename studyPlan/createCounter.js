/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let m = n
    return function() {
        return m++ 
    };
};

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */