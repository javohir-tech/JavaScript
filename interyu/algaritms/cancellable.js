/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
    let timer = setTimeout(() => {
        fn(args)
    }, t)
    return function cencalFn() {
        clearTimeout(timer)
    }
}

const result = [];
let start = performance.now()
const fn = (x) => {
    return x * 5;
}

const args = [2], t = 20, cancelTimeMs = 50;

const log = (...args) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ 'time': diff  , 'returned' : fn(...args)})
}

const cencel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cencel , cancelTimeMs);

setTimeout(()=>{
    console.log(result)
}, maxT+15)