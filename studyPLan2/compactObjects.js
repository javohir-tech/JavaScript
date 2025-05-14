/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
     return   obj
            .map(compactObject)
            .filter(Boolean)
    }

    else if (typeof obj === 'object' && obj !== null) {
        const result = {};

        for (let key in obj) {
            const compacted = compactObject(obj[key]);

            if (
                (compacted !== null && typeof compacted === 'object' && Object.keys(compacted).length > 0)
                || (typeof compacted !== 'object' && Boolean(compacted))
            ) {
                result[key] = compacted;
            }
        }

        return result
    }

    else {
        return obj
    }
};

const obj = [null, 0, false, 1];

console.log(compactObject(obj))

