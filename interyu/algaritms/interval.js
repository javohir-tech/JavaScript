/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(...args)
    let timer = setInterval(() => {
        fn(...args)
    }, t);
    return function cancelFn() {
        clearInterval(timer)
    }
};

const result = [];
const start = performance.now();
const args = [4], t = 35, cancelTimeMs = 190;
function fn(x) {
    return x * 2
}

function log(...args) {
    diff = Math.floor(performance.now() - start);
    result.push({ 'time': diff, 'returned': fn(...args) })
}

const cancel = cancellable(log, args, t);

const maxT = Math.max(cancelTimeMs, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result)
}, maxT + 15)

