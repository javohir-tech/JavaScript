/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i) !== undefined){
            result.push(fn(arr[i], i))
        }else{
            result.push(42)
        }
    }
    return result
};

const fn = (n , i) => {
    return n + i
}

const arr = [1, 2, 3]

const maped = map(arr, fn)
console.log(maped)
