var filter = function (arr, fn) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i])
        }
    }
    return result
}

function fn(n) {
    return n > 10
}

function firstIndex(n, i) {
    return i === 0
}

console.log(filter([0, 10, 20, 30], firstIndex))