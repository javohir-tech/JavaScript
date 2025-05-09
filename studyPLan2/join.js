/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let map1 = new Map(arr1.map(item => [item.id, item]))
    let map2 = new Map(arr2.map(item => [item.id, item]))

    const result = [];

    arr1.forEach(item => {
        if (map2.has(item.id)) {
            result.push({ ...item, ...map2.get(item.id) })
            map2.delete(item.id)
        } else {
            result.push(item)
        }
    })

    map2.forEach(item => {
        result.push(item)
    })
    return result.sort((a, b) => a.id - b.id)
};

const arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 }
]

const arr2 = [
    { "id": 1, "x": 2, "y": 3 },
    { "id": 3, "x": 5 }
]

console.log(join(arr1, arr2))