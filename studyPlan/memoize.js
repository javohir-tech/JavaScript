/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}

    return function (...args) {
        const key = JSON.stringify(args)
        if (key in cache) {
            return cache[key]
        }
        const result = fn(...args);
        cache[key] = result;
        return result
    }

}

let callCount = 0

const sum = (a, b) => {
    callCount += 1
    return a + b
}

const memoizedFn = memoize(sum)
console.log(memoizedFn(3, 2))
console.log(memoizedFn(3, 2))
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