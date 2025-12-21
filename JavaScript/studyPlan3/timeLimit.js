var TimeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t)

            fn(...args)
                .then(res => {
                    clearTimeout(timer);
                    resolve(res)
                })
                .catch(err => {
                    clearTimeout(timer);
                    reject(err)
                })
        })
    }
}

const fn = async (x) => {
    await new Promise(res => setTimeout(res, 100))
    return x * x
}

const t = 150;

const start = performance.now();
const args = [5]
const limited = TimeLimit(fn, t);

limited(...args)
    .then(res => {
        console.log({ "time": Math.floor(performance.now()-start), 'returned' : res})
        // console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
