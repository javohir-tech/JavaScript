/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {



};

const functions = [
    new Promise(resolve => setTimeout(() => resolve(4), 50)),
    new Promise(resolve => setTimeout(() => resolve(10), 150)),
    new Promise(resolve => setTimeout(() => resolve(16), 10))
]

const promise = promiseAll(functions);
promise()
.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})



/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */