/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((acc, curr) => {
        const key = fn(curr)
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(curr)
        return acc
    }, {})
};

const arr = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
]

const arr2 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
]

const fn = (item) => {
    return item.id
}

console.log(arr.groupBy(fn))

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */