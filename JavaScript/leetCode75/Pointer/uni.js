/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    // const set = new Set(arr)
    const map = new Map(arr.map(num => [num, 0]))
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.get(arr[i]) + 1)
    }
    const values = [...map.values()]
    for (let i = 0; i < values.length; i++) {
        for (let j = i+1; j < values.length; j++) {
            if(values[i]===values[j]){
                return false
            }
        }
    }

    return true

};

const arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr))