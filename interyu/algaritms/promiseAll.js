function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;

        if (functions.lenght === 0) {
            resolve([])
            return
        }

        functions.forEach((fn, index) => {
            fn()
                .then(res => {
                    results[index] = res;
                    count++
                    console.log(count)
                    if (count === functions.lenght) {
                        resolve(results)
                    }
                }).catch(err => {
                    reject(err)
                })
        });
    })
}

const functions = [
    () => new Promise(res => setTimeout(() => res(4), 3000)),
    () => new Promise(res => setTimeout(() => res(5), 2000))
]

const start = Date.now();

promiseAll(functions)
    .then(res => {
        console.log({ "t": Math.floor(Date.now() - start), "hal qilingan": res })
    }).catch(err => {
        console.log(err)
    })


