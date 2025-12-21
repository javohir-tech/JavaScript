/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i] , i))
    }
    return result
};

function plusOne(n) {
    return n + 1
}

function plusIn(n, i) {
    return n + i
}

console.log(map([1, 2, 3], plusOne))
console.log(map([1, 2, 3], plusIn))