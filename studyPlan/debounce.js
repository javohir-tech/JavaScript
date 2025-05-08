/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timer 
    return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, t)  
    }
};

const start = Date.now()
let result = []
let t = 50;
const inputs = [2]
const fn = (...inputs) => {
    const diff = Math.floor(Date.now() - start + t);
    result.push({ "time": diff, "inputs": [...inputs] })
    console.log(result)
}

const log = debounce(fn, t)
setTimeout(() => {
    log(...inputs)
}, 30)
setTimeout(() => {
    log(...[3])
}, 50)


/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */