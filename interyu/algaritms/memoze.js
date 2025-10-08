/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}
    return function (...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = fn(...args)
        }
        // console.log(cache)
        return cache[key]
    }
}

let callCount = 0
const fn = (a, b) => {
    callCount += 1;
    return a + b;
}

const memoizeFn = memoize(fn)
console.log(memoizeFn(0, 0))
console.log(memoizeFn(0, 0))
console.log(callCount)


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */