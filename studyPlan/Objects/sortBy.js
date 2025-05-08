/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]))
    }

    return result.sort((a, b) => a - b)
};

const arr = [{ "x": 1 }, { "x": 0 }, { "x": -1 }]
const fn = (d) => {
    return d.x
}

console.log(sortBy(arr, fn))