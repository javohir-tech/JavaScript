var debounce = function (fn, t) {
    return  function (...args) {
        
    }

};

const start = Date.now();
const func = (...args) => {
    const diff = Date.now() - start;
    console.log([{ "t": diff, "args": [...args] }])
}

const dlog = debounce(func, 50)

setTimeout(() => {
    dlog([1]);
}, 50)
setTimeout(() => {
    dlog([2]);
}, 75)