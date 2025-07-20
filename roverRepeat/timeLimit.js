
var timeLimit = function (fn, t) {

    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("time limit exceeded")
            }, t)
            fn(...args)
                .then(res => {
                    clearTimeout(timer)
                    resolve(res)
                })
                .catch(err=>{
                    clearTimeout(timer)
                    reject(err)
                })
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

const limited = timeLimit(fn, 50);

try {
    const res = await limited(args)
    result = { "returned": res, "time": Math.floor(performance.now() - start) }
} catch (error) {
    result = { "rejected": error, "time": Math.floor(performance.now() - start) }
}

console.log(result)
