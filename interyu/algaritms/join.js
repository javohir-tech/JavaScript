/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const map = new Map();

    for (const item of arr1) {
        const key = item.id;
        if (!map.has(key)) {
            map.set(key, item)
        } else {
            map.set(key, { ...map.get(key), ...item })
        }
    }

    for (const item of arr2) {
        const key = item.id;
        if (!map.has(key)) {
            map.set(key, item)
        } else {
            map.set(key, { ...map.get(key), ...item })
        }
    }
    const newMap = Object.fromEntries(map)
    const result = [];
    for (let key in newMap) {
        result.push(newMap[key])
    }
    return result.sort((a, b) => a.id - b.id)
};

const arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 }
]
const arr2 = [
    { "id": 3, "x": 5 }
]

console.log(join(arr1, arr2))