function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        
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
    })


