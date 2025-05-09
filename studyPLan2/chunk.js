/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const result = [];
    let sizeArr = [];
    for (let i = 0; i < arr.length; i++) {
        sizeArr.push(arr[i])
        if (sizeArr.length === size) {
            result.push(sizeArr)
            sizeArr = []
        }
    }
    if (sizeArr.length !== 0) {
        result.push(sizeArr)
    }
    return result
};

const arr = [1, 9, 6, 3, 2]
const size = 1;

console.log(chunk(arr, size))


