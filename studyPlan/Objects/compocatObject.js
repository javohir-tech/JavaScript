function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)
            .filter(Boolean)
    } else if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (let key in obj) {
            const compected = compactObject(obj[key])
            if (
                (compected !== null && typeof compected === 'object' && Object.keys(compected).length > 0)
                || (typeof compactObject !== 'object' && Boolean(compected))
            ) {
                result[key] = compected
            }
        }
        return result
    } else {
        return obj
    }
}

// console.log(compactObject([null, 0, false, 1])); 
console.log(compactObject({ "a": null, "b": [false, 1] }));
// console.log(compactObject([null, 0, 5, [0], [false, 16]])); 
