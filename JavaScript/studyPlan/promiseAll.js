/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let complete = 0;
        const total = functions.length;

        if (total === 0) {
            resolve([])
            return
        }
        functions.forEach((fn, index) => {
            fn()
                .then((result) => {
                    results[index] = result;
                    complete++;

                    if (complete === total) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                })
        });
    })
};

const promise = promiseAll([
    () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
    () => new Promise(resolve => setTimeout(() => resolve(6), 300)),
])
const start = Date.now()
promise
    .then(res => {
        console.log(`time`, Date.now() - start);
        console.log(`res : `, res)
    })
    .catch((err) => {
        console.log(`time: ${Math.floor(Date.now() - start)}`);
        console.log(`err:`, err)
    })

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */