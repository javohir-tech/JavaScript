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

const fn = (x, i) => {
    return x + i
}

const arr = [1, 2, 3];

console.log(map(arr, fn))