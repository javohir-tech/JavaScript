
var once = function (fn) {
    let callCount = 0;
    return function (...args) {
        if (callCount < 1) {
            callCount += 1
            return fn(...args)
        }
    }
};

let fn = (a, b, c) => (a + b + c)

const onceFn = once(fn)
console.log(onceFn(1, 2, 3))
console.log(onceFn(1, 2, 3))

/**
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
