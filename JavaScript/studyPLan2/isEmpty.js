/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    console.log(Object.keys(obj))
    return Object.keys(obj).length ===0
};

const obj = [1, 2]
console.log(isEmpty(obj))