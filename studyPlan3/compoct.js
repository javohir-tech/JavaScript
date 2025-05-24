/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)
            .filter(Boolean)
    }

    else if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (const key in obj) {
            const compocted = compactObject(obj[key])
            if (
                (typeof compocted !== 'object' && Boolean(compocted))
                ||
                (typeof compocted === 'object' && compocted !== null && Object.keys(compocted).length > 0)
            ) {
                result[key] = compocted
            }
        }
        return result
    }
    else {
        return obj
    }
};
const arr = [null, 0, false, 1]
const obj = { "a": null, "b": [false, 1] }
console.log(compactObject(obj))