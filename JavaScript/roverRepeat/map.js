/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const result =[]
    for(let i=0 ; i<arr.length ; i++){
        result.push(fn(arr[i] , i))
    }
    return result
};

const arr = [1, 2, 3]

const fn = (n , i) => {
    return n + i
}

console.log(map(arr, fn))