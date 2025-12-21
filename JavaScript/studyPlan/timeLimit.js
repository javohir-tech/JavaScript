function timeLimit(fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject('vatq limitda oshdi')
            }, t)

            fn(...args)
                .then((res) => {
                    clearTimeout(timer)
                    resolve(res)
                })
                .catch((err) => {
                    clearTimeout(timer);
                    reject(err)
                })
        })
    }
}

const funk = async (n) => {
    await new Promise(res => setTimeout(res, 100))
    return n * n
}

t = 110;
const args = [5]
const start = performance.now()
const result = []

const limited = timeLimit(funk, t)
limited(...args)
    .then((res) => {
        result.push({ 'resolved': res, 'time': Math.floor(performance.now() - start) })
        console.log(result)
    })
    .catch((err) => {
        result.push({ "err": err, 'time' : Math.floor(performance.now()-start)})
        console.log(result)
    })