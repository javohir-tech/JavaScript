/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return async function () {
        let count = 0;
        const result = [];
        const start = Date.now()
        return new Promise((resolve, reject) => {
            functions.forEach((fn, i) => {
                fn().then((res) => {
                    result[i] = res
                    count += 1
                    if (count === functions.length) {
                        resolve({ "t": Date.now() - start, "returned": result })
                    }
                })
                    .catch(() => {
                        reject({ "t": Date.now() - start, "rejected": "error" })
                    })
            })
        })
    }
};

const functions = [
   () => new Promise(resolve=> setTimeout(()=>resolve(5) , 200))
]

const promise = promiseAll(functions);
promise().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})



/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */