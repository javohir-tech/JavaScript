/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i])
        }
    }
    return result
};

function greaterThan10(n) {
    return n > 10
}

function firstIndex(n, i) {
    return i === 0
}

function plusOne(n) {
    return n + 1 !== 0
}

let arr = [0, 10, 20, 30];
const newArray = filter(arr, greaterThan10)
console.log(newArray)