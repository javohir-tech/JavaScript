/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result.sort((a, b) => fn(a) - fn(b))
};

const arr = [{ "x": 1 }, { "x": 0 }, { "x": -1 }]

const fn = (d) => {
    return d.x
}

console.log(sortBy(arr, fn))