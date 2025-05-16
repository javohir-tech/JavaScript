/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i])
        }
    }
    return result
};

const fn = (n) => {
    return n > 10
}

const arr = [0, 10, 20, 30]

console.log(filter(arr, fn))