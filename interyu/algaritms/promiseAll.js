function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        if (functions.length === 0) {
            resolve([]);
            return
        }
        for (let fn of functions) {
            fn()
                .then(res => {
                    results.push(res);
                    if (results.length === functions.length) {
                        resolve(results)
                    }
                }).catch(err => {
                    reject(err)
                })
        }
    })
}

const functions = [
    () => new Promise(res => setTimeout(() => res(5), 200))
]

const start = Date.now();

promiseAll(functions)
    .then(res => {
        console.log({ "t": Math.floor(Date.now() - start), "hal qilingan": res })
    }).catch(err => {
        console.log(err)
    })


