var cancellable = function (fn, args, t) {
     fn(...args)
    const timer = setInterval(() => {
        fn(...args)
    }, t)
    return function cancelFUnction() {
        return clearInterval(timer)
    }
};

const start = Date.now();
const result = [];
const t = 35, cancelTimes = 190;
const maxT = Math.max(t, cancelTimes)
const fn = (x) => x * 2;
const log = (...args) => {
    const diff = Math.floor(Date.now() - start);
    result.push({ "time": diff, "returned": fn(...args) })
}

const canc = cancellable(log, [4], t)
setTimeout(canc, cancelTimes);

setTimeout(() => {
    console.log(result)
}, maxT +t+ 15)
