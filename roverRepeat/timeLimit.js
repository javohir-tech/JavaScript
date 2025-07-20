/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args)
                .then(res => {
                    resolve(res)
                })
            setTimeout(() => {
                reject("time limit exceeded")
            }, t)
        })
    }

};
let result = []
const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100))
    return n * n
}

const start = performance.now()

const args = [5];

const limited = timeLimit(fn, 150);

try {
    const res = await limited(args)
    result =  {"returned" :  res , "time" : Math.floor(performance.now()-start)}
} catch (error) {
    result =  {"rejected" :  error , "time" : Math.floor(performance.now()-start)}
}

console.log(result)
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */