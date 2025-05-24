var join = function (arr1, arr2) {
    const result = [];
    const usedId = new Set();

    arr1.forEach(item1 => {
        const item2 = arr2.find(item => item.id === item1.id);
        if (item2) {
            result.push({ ...item1, ...item2 })
            usedId.add(item2.id)
        } else {
            result.push(item1)
        }
    });

    arr2.forEach(item => {
        if(!usedId.has(item.id)){
            result.push(item)
        }
    })

    return result.sort((a, b) => a.id - b.id)
}

const arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 }
]
const arr2 = [
    { "id": 1, "x": 2 },
    { "id": 3, "x": 5 }
]

console.log(join(arr1, arr2))