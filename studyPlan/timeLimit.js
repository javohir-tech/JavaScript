function timeLimit(fn, t) {

    return async function (args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("vaqtidan  otib ketti")
            }, t)

            fn(args)
                .then((result) => {
                    clearTimeout(timer)
                    resolve(result)
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

t = 120;

const limited = timeLimit(funk, t)

limited(5)
    .then(console.log)
    .catch(console.log)