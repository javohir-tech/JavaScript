/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const map1 = new Map(arr1.map(item => [item.id, item]))
    const map2 = new Map(arr2.map(item => [item.id, item]))

    const result = []

    arr1.forEach(item => {
        if (map2.has(item.id)) {
            result.push({ ...item, ...map2.get(item.id) })
            map2.delete(item.id)
        } else {
            result.push(item)
        }
    })

    arr2.map(item => {
        result.push(item)
    })

    return result.sort((a, b) =>a.id - b.id)
};

arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 }
],
    arr2 = [
        { "id": 3, "x": 5 }
    ]

console.log(join(arr1, arr2))