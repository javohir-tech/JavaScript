/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map()
    // const cache = {}
    return function (...args) {
        const key = JSON.stringify(args)
        if (!cache.has(key)) {
            let res = fn(...args)
            cache.set(key, res)
        }
        return cache.get(key)
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b
})

console.log(memoizedFn(1, 2))
console.log(memoizedFn(2, 2))
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