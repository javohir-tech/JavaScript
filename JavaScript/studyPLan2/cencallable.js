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

    return function cencelFn() {
        clearTimeout(timer)
    }
};

let result = [];
const fn = (x) => x * 5;

const t = 100;
const cancelTimeMs = 50;
const args = [2];

const start = Date.now()

const log = () => {
    const diff = Math.floor(Date.now() - start)
    result.push({ "returned": fn(...args), "time": diff })
}


const cencel = cancellable(log, args, t)
const maxT = Math.max(t, cancelTimeMs)
setTimeout(cencel , cancelTimeMs);

setTimeout(()=>{
    console.log(result)
}, maxT+15)



/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */