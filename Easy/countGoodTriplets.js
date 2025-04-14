function countGoodTriple(arr, a, b, c) {
    let count = 0
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 1 + i; j < arr.length - 1; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k = j+1; k < arr.length; k++) {
                    if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                        count++
                    }
                }
            }
        }
    }
    return count
}

let arr = [3, 0, 1, 1, 9, 7], a = 7, b = 2, c = 3
console.log(countGoodTriple(arr, a, b, c))