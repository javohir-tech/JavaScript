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
            res.set(item.id, { ...res.get(item.id), ...item })
        }
    })

    const result = Array.from(res.values())
    return result.sort((a, b) =>a.id-b.id)

};

arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
],
arr2 = [
    {"id": 3, "x": 5}
]

console.log(join(arr1, arr2))