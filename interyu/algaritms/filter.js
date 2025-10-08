var filter = function (arr, fn) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

function fn(n) {
    return n > 10
}

console.log(filter([0, 10, 20, 30] , fn))