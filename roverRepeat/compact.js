/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        obj.forEach(item => {
            if(Array.isArray(item)){
                compactObject(item)
            }else{
                
            }
        })
    }
};