/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timer;
    return function (...args) {
        if(timer) clearTimeout(timer)
         timer = setTimeout(() => {
            fn(...args)
        }, t);


    }
};

const t = 50;
const start = Date.now();

const log = (...args) => {
    console.log([{ "t": Math.floor(Date.now() - start), "value": [...args] }])
}

const result = debounce(log, t)

setTimeout(() => {
    result(1)
}, 50)
setTimeout(() => {
    result(2)
}, 75)
/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */