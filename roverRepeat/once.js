/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let arr = []
    return function (...args) {
        if(arr.length > 0){
            return undefined
        }
        let res = fn(...args)
        arr.push(res)
        return res
    }
};

let call = 0;

const fn = (a, b, c) => {
    call++
    return a + b + c;
}


const res = once(fn)
console.log(res(1, 2, 3))
console.log(res(1, 2, 3))
console.log(res(1, 2, 3))
console.log(res(1, 2, 3))
console.log(res(1, 2, 3))
console.log(res(1, 2, 3))
console.log(res(1, 2, 3))
console.log(res(1, 2, 3))
console.log(res(1, 2, 3))
console.log(call)