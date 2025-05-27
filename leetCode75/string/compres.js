/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    const result = {};
    const natija= []
    for (let item of chars) {
        if (chars.includes(item)) {
            if(!result[item]){
                result[item] = 1
            }else{
                result[item]++
            }
            
        }
    }
    for(let i=0 ; i<Object.keys(result).length ; i++){
        natija.push(Object.keys(result)[i])
        natija.push(`${Object.values(result)[i]}`)
    }
    return natija.join("")
};

const chars = ["a", "a", "b", "b", "c", "c", "c"];

console.log(compress(chars))