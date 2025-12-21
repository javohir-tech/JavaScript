var debounce = function (fn, t) {
    let timer
    return function (...args) {
        clearTimeout(timer);
         timer = setTimeout(() => {
            fn(...args)
        }, t)
    }

};

const start = Date.now();
const func = (...args) => {
    const diff = Date.now() - start;
    console.log([{ "t": diff, "args": args }])
}

const dlog = debounce(func, 30)

setTimeout(() => {
    dlog(1);
}, 50)
setTimeout(() => {
    dlog(2);
}, 75)