/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0
    }

    return Object.keys(obj).length === 0
};

// const obj = { "x": 5, "y": 42 };
const obj = []
// console.log(Object.keys(obj))
console.log(isEmpty(obj))