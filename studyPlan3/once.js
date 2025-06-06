/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let callFunc = 0
    return function (...args) {
        if(callFunc !== 0) return undefined
        callFunc++
        return fn(...args)
    }
};

const func = (a, b, c) => {
    return a + b + c
}

const onceFn = once(func);
console.log(onceFn(1, 2, 3))
console.log(onceFn(1, 2, 3))

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
