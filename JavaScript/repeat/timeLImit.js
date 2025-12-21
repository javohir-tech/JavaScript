/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return Promise.race([fn(...args),
        new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded") , t)
        })
        ])
    }
};


const fn = async (n) => {
    await new Promise(resolve => setTimeout(resolve, 100))
    return n * n;
};
const start = Date.now()

t = 50;

const func = timeLimit(fn, t)
func(4)
    .then((res) => {
        console.log({ "returned": res, "Time": Math.floor(Date.now() - start) })
    }).catch(err => {
        console.log({ "error": err, "Time": Math.floor(Date.now() - start) })
    })

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */