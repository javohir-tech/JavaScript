/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    // console.log(Object.keys(obj))
    return Object.keys(obj).length === 0
};

const obj = [null, false, 0]

console.log(isEmpty(obj))