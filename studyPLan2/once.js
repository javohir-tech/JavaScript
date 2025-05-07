/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let callNumber = 0
    return function (...args) {
        if (callNumber === 0) {
            callNumber += 1
            return fn(...args)
        }
    }
};

const fn = (a, b, c) => a + b + c;

const onceFn = once(fn)
console.log(onceFn(1, 2, 3))
console.log(onceFn(1, 2, 3))
console.log(onceFn(1, 2, 3))

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
