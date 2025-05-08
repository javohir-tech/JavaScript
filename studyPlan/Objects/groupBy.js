Array.prototype.groupBy = function (fn) {
    return this.reduce((acc, curr) => {
        const key = fn(curr);

        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(curr)
        return acc
    }, {})
}

console.log([
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
].groupBy(String))