var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const result = [];
        let count = 0;
        functions.forEach((fn, index) => {
            fn()
                .then(res => {
                    result[index] = res;
                    count++;
                    if (count === functions.length) {
                        resolve(result)
                    }
                })
                .catch(err => {
                    reject(err)
                })
        });
    })
}

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

const promise = promiseAll(functions);

promise
    .then(res => {
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })