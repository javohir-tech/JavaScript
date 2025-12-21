/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);

        if(key in cache){
            return cache[key]
        }

        const result = fn(...args);
        cache[key] = result

        return result

    }
}


let call = 0
const funk = (a, b) => {
    call += 1
    return a + b
}


const memoizedFn = memoize(funk);

console.log(memoizedFn(0, 0))
console.log(memoizedFn(0, 0));
console.log(call)


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