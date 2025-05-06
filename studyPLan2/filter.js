/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {

    let newArr = arr.filter((el, i) => fn(el, i) !== false)
    let result = []
    for (let i = 0; i < newArr.length; i++) {
        if (typeof (fn(arr[i], i)) !==Boolean){
            result.push(fn(newArr[i], i))
        }
    }
    return result
};

const arr = [-2, -1, 0, 1, 2]
const funk = (n, i) => {
    if (n !== 0) {
        return n += 1
    } else {
        return false
    }
}
const filtered = filter(arr, funk)
console.log(filtered)