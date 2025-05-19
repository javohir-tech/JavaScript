var cancellable = function (fn, args, t) {
    fn(...args)
    const timer = setInterval(() => {
        fn(...args)
    }, t)
    return function cancelFn() {
        clearInterval(timer)
    };
}

const fn = (x) => x * 2;
const start = Date.now()
const args = [4]git 
const t = 135;
const cancelTimeMs = 35;
const result = [];

const log = (...args) => {
    const diff = Math.floor(Date.now() - start);
    result.push({ "time": diff, "returned": fn(...args) })
}

const cancel = cancellable(log, args, t)

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result)
}, t + cancelTimeMs + 15)
