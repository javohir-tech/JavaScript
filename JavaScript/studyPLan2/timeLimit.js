/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t)

            fn(...args)
                .then((res) => {
                    clearTimeout(timer)
                    resolve(res)
                })
                .catch((err) => {
                    clearTimeout(timer)
                    reject(err)
                })
        })
    }
};

const fn = async (n) => {
    await new Promise(res => setTimeout(res , 100))
    return n * n
}
const args = [2]
let t = 500

const result = []
const limitFunk = timeLimit(fn, t)
let start = performance.now()
limitFunk(...args)
    .then((res) => {
        // result.push({ 'resolved': res, 'time': Math.floor(performance.now() - start) })
        console.log([{ 'resolved': res, 'time': Math.floor(performance.now() - start) }])
    })
    .catch((err) => {
        // result.push({ "err": err, 'time': Math.floor(performance.now() - start) })
        console.log([{ "err": err, 'time': Math.floor(performance.now() - start) }])
    })


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */