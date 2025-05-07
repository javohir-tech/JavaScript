function filter(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i])
        }
    }
    return result
}

const fn = (n) => {
    return n > 10
}

const firstIndex = (n, i) => {
    return i === 0
}

const plusOne = (n) => {
    return n + 1 !== 0
}
const arr = [0, 10, 20, 30]

console.log(filter(arr, fn))