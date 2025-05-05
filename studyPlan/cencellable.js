/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
    let timer;
    let elapsedTime = 0;

    const intervalFn = () => {
        fn(...args);
        elapsedTime += t;

        if (elapsedTime >= 190) {
            clearInterval(timer); // intervalni to'xtatamiz
        }
    };

    // Intervalni o'rnatamiz
    timer = setInterval(intervalFn, t);

    // Bekor qilish funksiyasini qaytaramiz
    return function cancelFn() {
        clearInterval(timer); // intervalni to'xtatadi
    };
};

const result = [];

const fn = (x) => x * 2;
const args = [4];
const t = 35;
const cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) });
};

// cancelFn ni olish
const cancelFn = cancellable(log, args, t);

// cancelFn ni 190ms da bekor qilish
setTimeout(cancelFn, cancelTimeMs);

// Natijalarni chiqarish
setTimeout(() => {
    console.log(result);
}, cancelTimeMs + t + 15);
