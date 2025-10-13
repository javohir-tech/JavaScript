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
            if(arr[j]){
                miniRes.push(arr[j])
            }
        }
        result.push(miniRes)
    }
    return result
};

const arr = [1, 2, 3, 4, 5], size = 1

console.log(chunk(arr, size))