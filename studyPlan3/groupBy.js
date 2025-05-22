/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const result = {};

    this.forEach(elem => {
        const key = fn(elem);
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(elem)
    })

    return result
};


const arr = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
]

const fn = (item) => {
    return item.id
}

console.log(arr.groupBy(fn))

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */