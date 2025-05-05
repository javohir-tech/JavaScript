/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

function cencellable(fn, args, t,) {
    const timer = setTimeout(() => {
        fn(...args)
    }, t)

    return function cencelFn() {
        clearTimeout(timer)
    }
}

let result = [];
const args = [2], t = 20, cencelTimeMs = 50
const fn = (x) => x * 3;
const start = performance.now()
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) })
}

const cencel = cencellable(log, args, t)
const maxT = Math.max(t, cencelTimeMs)

setTimeout(cencel, cencelTimeMs)
setTimeout(() => {
    console.log(result)
}, maxT + 15)