/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {

    let timer
    return function (...args) {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            fn(...args)
        } , t)
    }
};

const start = Date.now()
const fn = (...args) => {
    console.log({ "time": Date.now() - start, "args": args })
}

const dlog = debounce(fn, 50);
setTimeout(() => {
    dlog(1)
}, 50);
setTimeout(() => {
    dlog(2)
}, 75)

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */