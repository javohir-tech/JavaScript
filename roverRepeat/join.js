/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const res = new Map()

    arr1.forEach(item => {
        if (!res.has(item.id)) {
            res.set(item.id, { ...item })
        }
    })

    arr2.forEach(item => {
        if (!res.has(item.id)) {
            res.set(item.id, { ...item })
        }
        else {
            res.set(item.id , {...res.get(item.id) , ...item})
        }
    })

    return res

};

arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]

console.log(join(arr1, arr2))