/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;
        functions.forEach((item, index) => {
            item()
                .then((res) => {
                    results[index] = res
                    count++
                    if (count === functions.length) {
                        resolve(results)
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    })
};

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

promiseAll(functions)
    .then(res => {
        console.log(res)
    })
    .catch(err => [
        console.log("xatolik :", err)
    ])


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */