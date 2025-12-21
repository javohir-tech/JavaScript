var debounce = function (fn, t) {
    let timer ;
    return function (...args) {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            fn(...args)
        }, t)
    }
}

const start = Date.now();

const t = 50;

const log = (...args) => {
    const diff = Math.floor(Date.now() - start);
    console.log([{ "time": diff, 'value': [...args] }])
}

const dlog = debounce(log, t);

setTimeout(() => {
    dlog(1)
}, 70)
setTimeout(() => {
    dlog(2)
}, 120)