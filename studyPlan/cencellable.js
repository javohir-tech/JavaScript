/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cencellable(fn, args, t) {
    let timer;
    let elepsedTime = 0;

    const intervalFn = () => {
        fn(...args)
        elepsedTime += t

        if (elepsedTime >= 190) {
            clearInterval(timer)
        }
    }

    timer = setInterval(intervalFn, t);

    return function cencelFn() {
        clearInterval(timer)
    }


};

const result = []

const fn = (x) => x * 2;
const args = [4], t = 35

const cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start)
    result.push({ "time": diff, "returned": fn(...argsArr) })
}

const cencel = cencellable(log, args, t)

setTimeout(cencel, 190);
setTimeout(() => {
    console.log(result)
}, 190 + t + 15);

