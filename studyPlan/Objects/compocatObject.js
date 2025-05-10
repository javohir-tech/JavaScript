/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)
            .filter(Boolean)
    } else if (obj !== null && typeof obj === "object") {
        const result = {}
        for (let key in obj) {
            const compocted = compactObject(obj[key]);
            if (Boolean(compocted) || typeof compocted === "object" && Object.keys(compocted).length > 0){
                result[key] = compocted
            }
        }
        return result
    }else{
        return obj
    }
};


console.log(compactObject([null, 0, false, 1])); 
