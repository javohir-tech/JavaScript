/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}   
 */
var filter = function (arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i])
        }
    }

    return result;
};

const fn = (n, i) => {
    return n + 1
}

const arr = [-2, -1, 0, 1, 2]

console.log(filter(arr, fn))