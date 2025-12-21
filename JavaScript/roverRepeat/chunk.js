/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const newArr = [];

    for (let i = 0; i < arr.length; i += size) {
        let sectionArr = [];
        console.log(i)
        for (let j = i; j < size + i; j++) {
            if (arr[j]!==undefined) {
                sectionArr.push(arr[j])
            }
        }
        newArr.push(sectionArr)
    }
    return newArr
};


const arr = [1, 2, 3, 4, 5];
const size = 2
console.log(chunk(arr, size))