var cancellable = function (fn, args, t) {

    const timer = setTimeout(() => {
        fn(...args)
    }, t)

    return function cancelFunction() {
        return clearTimeout(timer)
    }
}

const result = [];
const fn = (x) => x * 5;
const t = 20;
const cancelTimes = 50;
const start = Date.now();
const log = (...args) => {
    const diff = Math.floor(Date.now() - start);
    result.push({ "time": diff, "returned": fn(...args) })
}

const maxT = Math.max(t, cancelTimes)

const canc = cancellable(log, [2], t);

setTimeout(canc, cancelTimes)

setTimeout(() => {
    console.log(result)
}, maxT + 15)