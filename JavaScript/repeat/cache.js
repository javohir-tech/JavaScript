var memoize = function (fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify([...args])
        if (key in cache) {
            return cache[key]
        }
        const result  =  fn(...args);
        cache[key]=result
        return result
    }
}
let count = 0
const sum = (a, b) => {
    count++
    return a + b;
}

const res = memoize(sum)
console.log(res(0, 0))
console.log(res(0, 0))
console.log(count)