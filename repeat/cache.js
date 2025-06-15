var memoize = function (fn) {
    const chase = {};
    return function (...args) {
        const key = JSON.stringify([...args])
        if (!chase[key]) {
            chase[key] = fn(...args)
        }
        return chase[key]
    }
}
let count = 0
const sum = (a, b) => {
    count++
    return a + b;
}

const res = memoize(sum)
console.log(res(2, 2))
console.log(res(2, 2))
console.log(count)