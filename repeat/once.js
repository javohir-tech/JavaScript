var once = function (fn) {
    let count = 0
    return function (...args) {
        if(count>=1){
            return undefined
        }
        const result = fn(...args)
        count++
        return result
    }
}

let count = 0
const fn = (a, b, c) => {
    count++
    return a+b+c;
}

const res =  once(fn);
console.log(res(1, 2, 3))
console.log(res(1, 2, 3))
// console.log(count)