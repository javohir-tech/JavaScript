/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);

            fn(...args)
                .then(res => {
                    resolve(res)
                    clearTimeout(timer)
                }).catch(err => {
                    reject(err)
                    clearTimeout(timer)
                })
        })
    }
};

const fn = async (x) => {
    await new Promise(resolve => setTimeout(resolve, 100))
    return x * x
}
const start = performance.now()
const limited = timeLimit(fn, 1000);

limited([2])
    .then(res => {
        diff = Math.floor(performance.now() - start);
        console.log({ 'returned': res, 'time': diff })
    })
    .catch(err => {
        diff = Math.floor(performance.now() - start);
        console.log({ 'error': err, 'time': diff })
    })