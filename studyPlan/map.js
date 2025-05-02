/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i))
    }

    return result
};

let arr = [1, 2, 3]
function plusOne(n) {
    return n + 1
}

function plusI(n, i) {
    return n + i
}

function constant(){
    return 42
}
const newArray = map(arr, constant)
console.log(newArray) 