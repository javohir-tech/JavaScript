/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            fn(...args)
        }, t)
    }
};

const result = []

const start = Date.now();
const args = [1]
t = 50;
const fn = (...args) => {
    diff = Math.floor(Date.now() - start);
    result.push({ "time": diff, "value": [...args]})
    console.log(result)
}

const log = debounce(fn, t)

setTimeout(()=>{
    log(...args)
}, 50)





/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */