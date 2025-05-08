/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let result = [];
    let miniArr = []
    for (let i = 0; i < arr.length; i++) {
        miniArr.push(arr[i]);

        if (miniArr.length === size) {
            result.push(miniArr)
            miniArr = []
        }

    }

    if (miniArr.length !== 0) {
        result.push(miniArr)
    }
    return result
};

const arr = [1, 2, 3, 4, 5];
const size = 1;
console.log(chunk(arr, size))


