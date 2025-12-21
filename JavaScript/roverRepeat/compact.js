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

    else if (typeof obj === "object" && obj !== null) {
        let result = {};

        for (let key in obj) {
            const compacted = compactObject(obj[key])

            if (
                (typeof compacted === "object" && compacted !== null && Object.keys(compacted).length > 0)
                ||
                (typeof compacted !== "object" && Boolean(compacted))
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

const obj = { "a": null, "b": [false, 1] };

console.log(compactObject(obj))