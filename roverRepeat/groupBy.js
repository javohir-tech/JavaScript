/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const result = {};

    this.forEach((elem) => {
        const item = fn(elem)

        if (!(item in result)) {
            result[item] = [elem]
        }
        else {
            result[item].push(elem)
        }
    })

    return result
};

const fn = (elem) => {
    return elem.id
}

massiv = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
]

console.log(massiv.groupBy(fn))

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */