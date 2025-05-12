function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)
            .filter(Boolean)
    }

    else if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (let key in obj) {
            const compocted = compactObject(obj[key])

            if(
                (compocted !==null && typeof compocted === 'object' && Object.keys(compocted).length>0)
                || ( typeof compocted !== 'object' && Boolean(compocted))
            ){
                result[key] = compocted
            }
        }
        return result
    }

    else {
        return obj
    }
}

// console.log(compactObject([null, 0, false, 1])); 
console.log(compactObject({ "a": null, "b": [false, 1] }));
// console.log(compactObject([null, 0, 5, [0], [false, 16]])); 
