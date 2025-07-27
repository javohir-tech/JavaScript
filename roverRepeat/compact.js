/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return  obj
        .map(compactObject)
        .filter(Boolean)
    }
};

const obj = { "a": null, "b": [false, 1] };

for (let key in obj) {
    console.log(key)
}