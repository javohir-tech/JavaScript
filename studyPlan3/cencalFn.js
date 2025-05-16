/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args)
    }, t)

    return function cancelFn() {
        clearTimeout(timer)
    }
};

const result = [];

const args = [2];
const fn = (x) => x * 5;
const t = 20;
const cancelTime = 50;
const start = Date.now();
const log = (...args) => {
    const diff = Math.floor(Date.now() - start);
    result.push({ "time": diff, "returned": fn(...args) })
}

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTime);
const maxT = Math.max(cancelTime, t);


setTimeout(() => {
    console.log(result)
}, maxT + 15)


