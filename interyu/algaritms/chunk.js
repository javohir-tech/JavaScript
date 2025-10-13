/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        const miniRes = [];
        for (let j = i; j < i + size; j++) {
            if (typeof (arr[j]) !== undefined && arr[j]) {
                miniRes.push(arr[j])
            }
        }
        result.push(miniRes)
    }
    return result
};

const arr =[1,9,6,3,2], size = 3

console.log(chunk(arr, size))

// console.log(undefined===undefined)